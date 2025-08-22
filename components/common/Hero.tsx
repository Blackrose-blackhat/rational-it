import Image from "next/image";
import { heroImg } from "@/public/assets";
import { Tiles } from "@/components/ui/tiles"; // adjust path if different
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Tiles */}
      <div className="absolute inset-0 w-full h-full">
        <Tiles rows={50} cols={12} tileSize="md" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 py-20">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Transforming Businesses with{" "}
              <span className="text-[#571d8c]">Artificial Intelligence</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              We help companies unlock growth, efficiency, and innovation by building and integrating
              AI-powered solutions tailored to their needs
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="#contact"
                className="px-6 py-3 bg-[#571d8c] text-white rounded-lg font-medium shadow hover:bg-indigo-600 transition"
              >
                Schedule Discovery Call
              </Link>
              <Link
                href="#about"
                className="text-gray-800 font-medium hover:text-[#571d8c] transition"
              >
                Learn more →
              </Link>
            </div>
          </div>

          {/* Right Image (hidden on small devices) */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <div className="p-6">
              <Image
                src={heroImg}
                alt="3D Render"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
