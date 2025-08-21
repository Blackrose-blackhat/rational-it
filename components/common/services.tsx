import { Brain, Bot, MessageSquare, Camera, BarChart3, Workflow } from "lucide-react";
import { AnimatedText } from "../ui/animated-underline-text";
import { Tiles } from "@/components/ui/tiles"; // adjust path if needed

const services = [
    {
        icon: Brain,
        title: "AI Strategy & Consulting",
        description:
            "Identify the right AI opportunities, design tailored roadmaps and adopt AI responsibly for measurable business outcomes.",
    },
    {
        icon: Bot,
        title: "Custom AI Solutions",
        description:
            "Build models that automate workflows, enhance decision-making, detect anomalies, or deliver predictive insights.",
    },
    {
        icon: MessageSquare,
        title: "Natural Language Processing (NLP)",
        description:
            "Turn text, voice, and unstructured data into actionable intelligence like AI chatbots, resume parsing, voice-to-text, and sentiment analysis.",
    },
    {
        icon: Camera,
        title: "Computer Vision",
        description:
            "Leverage image and video analysis for quality control, security monitoring, medical imaging, and retail intelligence.",
    },
    {
        icon: BarChart3,
        title: "AI-Powered Data Analytics",
        description:
            "Enable data-driven decisions with predictive analytics, demand forecasting, recommendation engines, and intelligent dashboards.",
    },
    {
        icon: Workflow,
        title: "AI Integration & Automation",
        description:
            "Connect AI models seamlessly with ERP, CRM, and cloud platforms to supercharge existing systems and processes.",
    },
];

export default function Services() {
    return (
        <section id="services" className="relative py-20 bg-white overflow-hidden">
            {/* Background Tiles */}
            <div className="absolute inset-0 w-full h-full">
                <Tiles rows={50} cols={8} tileSize="md" />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                {/* Section Header */}
                <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                    Our Services
                </h2>
                <AnimatedText
                    text="AI Solutions for Modern Businesses"
                    textClassName="text-4xl font-bold my-3"
                    underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
                    underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10"
                    underlineDuration={2}
                />
                <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto">
                    From strategy to deployment, we help you harness AI to scale your business,
                    improve efficiency, and unlock new opportunities.
                </p>

                {/* Services Grid */}
                <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, idx) => (
                        <div key={idx} className="flex flex-col items-start text-left">
                            <div className="p-3 rounded-xl bg-indigo-50 mb-4">
                                <service.icon className="w-6 h-6 text-indigo-600" />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900">{service.title}</h4>
                            <p className="mt-2 text-gray-600 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
