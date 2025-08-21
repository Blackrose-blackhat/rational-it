"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Brain, TrendingUp } from "lucide-react";
import {
    Area,
    AreaChart,
    ResponsiveContainer,
} from "recharts";
import { AnimatedText } from "../ui/animated-underline-text";

const useCases = [
    {
        title: "Fraud Detection in Research",
        description:
            "Reduced fraudulent survey responses by 40% using AI-based respondent verification.",
        icon: Briefcase,
        data: [
            { value: 100 },
            { value: 80 },
            { value: 70 },
            { value: 60 },
        ],
    },
    {
        title: "Recruitment AI",
        description:
            "Implemented a resume parsing tool that cut candidate screening time by 60%.",
        icon: Brain,
        data: [
            { value: 100 },
            { value: 90 },
            { value: 50 },
            { value: 40 },
        ],
    },
    {
        title: "Predictive Sales Analytics",
        description:
            "Helped a client improve forecast accuracy by 30% with ML-driven demand prediction.",
        icon: TrendingUp,
        data: [
            { value: 70 },
            { value: 80 },
            { value: 90 },
            { value: 100 },
        ],
    },
];

export function UseCasesSection() {
    return (
        <section id="use-cases" className="py-22 px-6 bg-white ">
            <div className="max-w-6xl mx-auto text-center flex flex-col gap-4">
                <AnimatedText
                    text="Use Cases & Success Stories"
                    textClassName="text-4xl font-bold my-3"
                    underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
                    underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10"
                    underlineDuration={2}
                />
                <div className="grid md:grid-cols-3 gap-8 justify-center">
                    {useCases.map((useCase, index) => (
                        <Card
                            key={index}
                            className="rounded-2xl shadow-md border-none hover:shadow-lg transition-all"
                        >
                            <CardHeader className="flex flex-col items-center space-y-3">
                                <useCase.icon className="w-10 h-10 text-[#571d8c]" />
                                <CardTitle className="text-lg font-semibold text-gray-800 text-center">
                                    {useCase.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-gray-600 text-center">
                                    {useCase.description}
                                </p>
                                <div className="h-32 w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={useCase.data}>
                                            <Area
                                                type="monotone"
                                                dataKey="value"
                                                stroke="#571d8c"
                                                fill="#571d8c"
                                                fillOpacity={0.2}
                                                dot={false}
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
