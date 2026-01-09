import { Calendar, CheckCircle, Clock } from "lucide-react";

const ImportantDates = () => {
    const dates = [
        {
            title: "Abstract Submission Starts",
            date: "08 Dec 2025",
            icon: Clock,
            color: "blue"
        },
        {
            title: "Abstract Submission Ends",
            date: "01 Apr 2026",
            icon: Calendar,
            color: "green"
        },
        {
            title: "Registration Ends",
            date: "20 Apr 2026",
            icon: CheckCircle,
            color: "red"
        },
        {
            title: "Special Issue Submission",
            date: "After Registration",
            icon: Calendar,
            color: "purple"
        }
    ];

    return (
        <div className="grid md:grid-cols-4 gap-4 my-8">
            {dates.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                    <div className={`p-3 rounded-full bg-${item.color}-100 text-${item.color}-600 mb-3`}>
                        <item.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-gray-700 mb-1">{item.title}</h4>
                    <p className="text-xl font-bold text-primary">{item.date}</p>
                </div>
            ))}
        </div>
    );
};

export default ImportantDates;
