'use client';

import { TreePine, Handshake, Flame, Package } from 'lucide-react';

export default function Footer() {
    return (
         <footer className="bg-[#c1914d] text-white text-sm py-4 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="space-x-4 mb-2 md:mb-0">
              <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
              <span className="hidden md:inline">|</span>
              <a href="/terms" className="hover:underline">Terms & Conditions</a>
            </div>
            <div className="text-center md:text-right">
              Copyright ©2024 Nansel. All Rights Reserved.
            </div>
          </div>
        </footer>
    );
}
