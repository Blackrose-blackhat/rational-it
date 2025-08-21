"use client";


import PulsingBorderShader from "../ui/pulsing-border";
import { Tiles } from "@/components/ui/tiles"; // adjust path if needed

export function WhyChooseUs() {
  const points = [
    "Proven expertise in IT and AI implementation",
    "Tailor-made solutions that align with business goals",
    "Scalable and future-ready AI architectures",
    "Strong focus on ethical, secure, and explainable AI",
    "Trusted by clients across industries",
  ];

  return (
    <section id="why-choose-us" className="relative w-full py-20 overflow-hidden bg-gradient-to-r from-white to-gray-50">
      {/* Background Tiles */}
      <div className="absolute inset-0 w-full h-full">
        <Tiles rows={60} cols={10} tileSize="sm" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Left Animated Orb */}
        <div className="relative flex items-center justify-center">
          <PulsingBorderShader />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-[#571d8c]">Rational IT Services?</span>
          </h2>
          <ul className="space-y-4">
            {points.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-lg text-gray-700"
              >
                <span className="text-[#571d8c] text-2xl">✔</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
