"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { logo } from "@/public/assets"
import { Menubar, MenubarMenu, MenubarItem, MenubarTrigger, MenubarContent } from "@/components/ui/menubar"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      let current = "home"
      const sections = ["about", "services", "why-choose-us", "industries", "use-cases", "contact"]

      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id
          }
        }
      })
      setActive(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const underlineClass =
    "relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full shadow-xl hidden lg:block w-[75vw] max-w-7xl ${
          scrolled ? "shadow-2xl" : ""
        }`}
      >
        <div className="flex items-center justify-between bg-white rounded-full px-4 xl:px-8 py-3 xl:py-4">
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("home")
            }}
            className="text-lg xl:text-2xl font-extrabold text-[#501c85] flex flex-row items-center uppercase flex-shrink-0"
          >
            <Image
              height={40}
              width={40}
              src={logo || "/placeholder.svg"}
              alt="logo"
              className="xl:h-[50px] xl:w-[50px]"
            />
            <span className="ml-2 hidden xl:inline">Rational IT</span>
            <span className="ml-2 xl:hidden">Rational IT</span>
          </Link>

          <Menubar className="flex space-x-4 xl:space-x-10 bg-transparent shadow-none border-none text-base xl:text-xl flex-1 justify-center">
            {/* About */}
            <MenubarMenu>
              <MenubarTrigger
                onClick={() => scrollToSection("about")}
                className={`${underlineClass} ${
                  active === "about" ? "after:w-full" : "text-gray-700"
                } whitespace-nowrap px-2`}
              >
                <span className="hidden xl:inline">About Us</span>
                <span className="xl:hidden">About</span>
              </MenubarTrigger>
            </MenubarMenu>

            {/* Services */}
            <MenubarMenu>
              <MenubarTrigger
                className={`${underlineClass} ${
                  active === "services" ? "after:w-full" : "text-gray-700"
                } whitespace-nowrap px-2`}
              >
                Services
              </MenubarTrigger>
              <MenubarContent className="mt-2">
                <MenubarItem onClick={() => scrollToSection("services")}>Our Services</MenubarItem>
                <MenubarItem onClick={() => scrollToSection("why-choose-us")}>Why Choose Us</MenubarItem>
                <MenubarItem onClick={() => scrollToSection("industries")}>Industries</MenubarItem>
                <MenubarItem onClick={() => scrollToSection("use-cases")}>Use Cases</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            {/* Contact */}
            <MenubarMenu>
              <MenubarTrigger
                onClick={() => scrollToSection("contact")}
                className={`${underlineClass} ${
                  active === "contact" ? "after:w-full" : "text-gray-700"
                } whitespace-nowrap px-2`}
              >
                <span className="hidden xl:inline">Contact Us</span>
                <span className="xl:hidden">Contact</span>
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>

          <div className="flex items-center flex-shrink-0">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#571d8c]/90 text-white px-3 xl:px-4 py-2 rounded-full hover:bg-indigo-700 transition-all duration-300 text-sm xl:text-lg whitespace-nowrap"
            >
              <span className="hidden xl:inline">Book a strategy call</span>
              <span className="xl:hidden">Book a strategy call</span>
            </button>
          </div>
        </div>
      </nav>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 lg:hidden transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          {/* Mobile Logo */}
          <Link
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("home")
            }}
            className="text-lg sm:text-xl font-extrabold text-[#501c85] flex items-center uppercase"
          >
            <Image
              height={35}
              width={35}
              src={logo || "/placeholder.svg"}
              alt="logo"
              className="sm:h-[40px] sm:w-[40px]"
            />
            <span className="ml-2">Rational IT</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-indigo-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="bg-white border-t shadow-lg">
            <div className="flex flex-col px-4 py-3 max-h-[calc(100vh-80px)] overflow-y-auto">
              <button
                onClick={() => scrollToSection("about")}
                className={`text-left py-4 px-3 rounded-lg transition-colors text-base ${
                  active === "about"
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className={`text-left py-4 px-3 rounded-lg transition-colors text-base ${
                  active === "services"
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                }`}
              >
                Our Services
              </button>
              <button
                onClick={() => scrollToSection("why-choose-us")}
                className={`text-left py-4 px-3 rounded-lg transition-colors text-base ${
                  active === "why-choose-us"
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                }`}
              >
                Why Choose Us
              </button>
              <button
                onClick={() => scrollToSection("industries")}
                className={`text-left py-4 px-3 rounded-lg transition-colors text-base ${
                  active === "industries"
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                }`}
              >
                Industries
              </button>
              <button
                onClick={() => scrollToSection("use-cases")}
                className={`text-left py-4 px-3 rounded-lg transition-colors text-base ${
                  active === "use-cases"
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                }`}
              >
                Use Cases
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`text-left py-4 px-3 rounded-lg transition-colors text-base ${
                  active === "contact"
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                }`}
              >
                Contact Us
              </button>

              {/* Mobile CTA Section */}
              <div className="pt-4 border-t mt-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-[#571d8c]/90 cursor-pointer text-white py-4 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 text-base font-medium"
                >
                  Book a strategy call
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
