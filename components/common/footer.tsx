"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="shadow-lg borer-t border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="">
              © Copyright <span className="font-bold ">Rational IT Services Inc.</span> All Rights Reserved
            </p>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="bg-indigo-500 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 group border border-white/20"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}