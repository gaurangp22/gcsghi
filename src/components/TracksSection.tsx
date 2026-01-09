import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Activity, Cpu, Droplets, Recycle, Globe, Zap } from "lucide-react";

const tracks = [
    {
        id: 1,
        title: "Advances in Biodegradable Biomaterials",
        icon: Leaf,
        topics: [
            "Biodegradable sutures, stents, and wound-healing materials",
            "Antibacterial and antiviral biodegradable materials",
            "Smart polymers (shape memory, self-healing)",
            "Biodegradable polymers from petrochemical sources",
            "Biocompatible materials for medical implants & Prosthetics",
            "Biodegradable packaging for healthcare applications"
        ]
    },
    {
        id: 2,
        title: "Energy Efficient Solutions for Health Systems",
        icon: Zap,
        topics: [
            "Advances in IoT for Elderly and Assisted Living Care",
            "IoT-based monitoring and optimization of energy usage",
            "IoT in Emergency and Critical Care",
            "Remote diagnostics through connected medical devices",
            "Biodegradable sensors and wearable devices"
        ]
    },
    {
        id: 3,
        title: "AI in Diagnostics and Early Disease Detection",
        icon: Activity,
        topics: [
            "AI models for predicting patient deterioration",
            "Genomics-based treatment recommendations",
            "Disease-specific AI models for tailored care",
            "AI-enabled hospital management systems",
            "Remote chronic disease management",
            "Community health analysis using big data"
        ]
    },
    {
        id: 4,
        title: "Blue Health & Ocean-Safe Medical Innovations",
        icon: Droplets,
        topics: [
            "Microplastic-free medical plastics",
            "Marine-safe drug packaging",
            "Hospital wastewater treatment innovations",
            "Impact of PPE waste on coastal ecosystems"
        ]
    },
    {
        id: 5,
        title: "Sustainable Healthcare Systems",
        icon: Recycle,
        topics: [
            "Green materials for hospital infrastructure",
            "Sustainable packaging for pharmaceuticals",
            "Waste reduction using biodegradable alternatives",
            "Policies for sustainable healthcare materials"
        ]
    },
    {
        id: 6,
        title: "Environmental Impact & Life-Cycle Assessment",
        icon: Globe,
        topics: [
            "Life-cycle analysis of biomedical materials",
            "Environmental impact of petrochemical-derived biodegradable materials",
            "Energy-efficient polymer production",
            "Standards and certification for green materials"
        ]
    },
    {
        id: 7,
        title: "Emerging Technologies & Future Trends",
        icon: Cpu,
        topics: [
            "AI/ML for material design and optimization",
            "3D/4D printing using biodegradable materials",
            "Next-gen petrochemical routes for biomedical polymers",
            "Sustainable alternatives to replace conventional plastics"
        ]
    }
];

const TracksSection = () => {
    return (
        <section className="py-20 bg-gray-50/50" id="tracks">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4 text-primary font-heading">Conference Tracks</h2>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
                    Exploring advanced practices that improve quality and enhance the lifespan of materials in healthcare.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tracks.map((track) => (
                        <Card key={track.id} className="group hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/30">
                            <CardHeader className="pb-3">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <track.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl text-primary group-hover:text-primary/80 transition-colors">
                                    {track.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {track.topics.map((topic, index) => (
                                        <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                                            <span className="mt-1.5 w-1 h-1 rounded-full bg-secondary shrink-0" />
                                            {topic}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TracksSection;
