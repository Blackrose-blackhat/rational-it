"use client";

import { cn } from "@/lib/utils";
import {
    IconChartBar,
    IconUsers,
    IconStethoscope,
    IconCurrencyDollar,
    IconShoppingCart,
} from "@tabler/icons-react";
import { AnimatedText } from "../ui/animated-underline-text";

function IndustriesWeServe() {
    const industries = [
        {
            title: "Market Research",
            description:
                "Automated survey analysis, fraud detection, respondent verification.",
            icon: <IconChartBar />,
        },
        {
            title: "HR & Recruitment",
            description:
                "Resume parsing, candidate-job matching, interview analytics.",
            icon: <IconUsers />,
        },
        {
            title: "Healthcare",
            description:
                "Diagnostic support, patient data analysis, and medical imaging AI.",
            icon: <IconStethoscope />,
        },
        {
            title: "Finance",
            description:
                "Fraud detection, credit scoring, risk modeling, and investment insights.",
            icon: <IconCurrencyDollar />,
        },
        {
            title: "Retail & E-commerce",
            description:
                "Personalized shopping experiences, inventory forecasting, customer behavior analysis.",
            icon: <IconShoppingCart />,
        },
    ];

    return (
        <section id="industries" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
               <div className="mb-5">
                 <AnimatedText
                    text="Industries we serve"
                    textClassName="text-4xl font-bold mb-3"
                    underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
                    underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10"
                    underlineDuration={2}
                />
               </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
                    {industries.map((industry, index) => (
                        <IndustryCard key={industry.title} {...industry} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default IndustriesWeServe

const IndustryCard = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r py-10 relative group/industry border-gray-200",
                (index === 0 || index === 3) && "lg:border-l",
                index < 3 && "lg:border-b"
            )}
        >
            {/* Hover gradient */}
            {index < 3 && (
                <div className="opacity-0 group-hover/industry:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-purple-100 to-transparent pointer-events-none" />
            )}
            {index >= 3 && (
                <div className="opacity-0 group-hover/industry:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-purple-100 to-transparent pointer-events-none" />
            )}

            {/* Icon */}
            <div className="mb-4 relative z-10 px-10 text-[#571d8c]">{icon}</div>

            {/* Title */}
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/industry:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-300 group-hover/industry:bg-[#571d8c] transition-all duration-200 origin-center" />
                <span className="group-hover/industry:translate-x-2 transition duration-200 inline-block text-neutral-800">
                    {title}
                </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};
