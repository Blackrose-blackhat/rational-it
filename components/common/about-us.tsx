"use client";

import { Card, CardContent } from "../ui/card";
import { Brain, Target, Rocket } from "lucide-react";

export default function AboutUs() {
    return (
        <section id="about"  className="   py-16 px-6 lg:px-20 bg-white flex flex-col justify-center items-center">
            <div  className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl">

                {/* Left Card - About Us Text */}
                <Card className="bg-gray-50 border-none shadow-sm rounded-2xl">
                    <CardContent className="p-8">
                        <h3 className="text-sm uppercase font-medium text-[#571d8c] mb-2">
                            About Us
                        </h3>
                        <h2 className="text-3xl font-bold mb-4 leading-snug">
                            Empowering Businesses with{" "}
                            <span className="text-[#571d8c]">AI at Scale</span>
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            At Rational IT Services, we believe the future belongs to businesses
                            that embrace <span className="font-semibold text-[#571d8c]">intelligence at scale</span>.
                            What started as a trusted IT services provider has evolved into a
                            cutting-edge <span className="font-semibold text-[#571d8c]">AI solutions company</span>.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            With deep expertise in Machine Learning, Natural Language Processing,
                            Computer Vision, and AI Automation, we empower organizations to solve
                            complex challenges, make better decisions, and deliver extraordinary
                            customer experiences.
                        </p>
                    </CardContent>
                </Card>

                {/* Right Card - Vision & Mission */}
                <Card className="bg-gradient-to-br from-gray-900 via-gray-800 to-[#571d8c]/90 text-white border-none shadow-md rounded-2xl">
                    <CardContent className="p-8">
                        <h3 className="text-sm uppercase font-medium text-green-400 mb-6">
                            What drives us
                        </h3>

                        <div className="space-y-6">
                            {/* Vision */}
                            <div className="flex items-start gap-4">
                                <Brain className="w-8 h-8 text-indigo-400" />
                                <div>
                                    <h4 className="text-lg font-semibold">Our Vision</h4>
                                    <p className="text-gray-300 text-sm">
                                        To make AI accessible, ethical, and impactful for small businesses.
                                    </p>
                                </div>
                            </div>

                            {/* Mission */}
                            <div className="flex items-start gap-4">
                                <Rocket className="w-8 h-8 text-pink-400" />
                                <div>
                                    <h4 className="text-lg font-semibold">Our Mission</h4>
                                    <p className="text-gray-300 text-sm">
                                        To deliver intelligent solutions that empower organizations to
                                        work smarter, faster, and better.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
