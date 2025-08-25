"use client";
import React, { useState } from "react";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (status === "loading") return;
        setErrorMsg("");
        if (!name.trim() || !email.trim() || !message.trim()) {
            setStatus("error");
            setErrorMsg("Please fill in all fields.");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setStatus("error");
            setErrorMsg("Enter a valid email address.");
            return;
        }
        setStatus("loading");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });
            const data = await res.json();
            if (!res.ok || !data?.success) {
                setStatus("error");
                setErrorMsg(data?.message || "Failed to send. Try again.");
                return;
            }
            setStatus("success");
            setName("");
            setEmail("");
            setMessage("");
        } catch {
            setStatus("error");
            setErrorMsg("Network error. Try again.");
        }
    }

    return (
        <form className="space-y-6" onSubmit={onSubmit} noValidate>
            {status === "success" && (
                <div className="rounded-md border border-green-600 bg-green-50 p-3 text-sm text-green-900">
                    Thanks—your message has been sent.
                </div>
            )}
            {status === "error" && (
                <div className="rounded-md border border-red-600 bg-red-50 p-3 text-sm text-red-900">
                    {errorMsg || "Something went wrong."}
                </div>
            )}

            <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground text-white">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border border-foreground bg-white p-3 shadow-sm focus:ring-primary focus:border-primary"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={status === "loading"}
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground text-white">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border border-foreground bg-white p-3 shadow-sm focus:ring-primary focus:border-primary"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading"}
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground text-white">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="mt-1 block w-full rounded-md border border-foreground bg-white p-3 shadow-sm focus:ring-primary focus:border-primary"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={status === "loading"}
                />
            </div>

            <div>
                <button
                    type="submit"
                    className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#c1914d] px-6 py-3 font-semibold text-black shadow-md ring-1 ring-black/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c1914d]/90 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c1914d]/60 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={status === "loading"}
                >
                    <span className="relative z-10">{status === "loading" ? "Sending…" : "Let’s Talk Coffee"}</span>
                    <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(255,255,255,0.28),transparent_60%)]" />
                    <span className="pointer-events-none absolute inset-y-0 left-[-40%] w-[40%] -skew-x-12 bg-white/30 blur-md transition-transform duration-700 ease-out group-hover:translate-x-[220%]" />
                </button>
            </div>
        </form>
    );
}
