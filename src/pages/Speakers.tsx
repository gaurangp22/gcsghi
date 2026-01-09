import React from "react";
import { cards } from "@/utils/slideArray";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Define the type for speaker card details
interface SpeakerCard {
  name: string;
  imgSrc?: string;
  position?: string;
  organization?: string;
}

const speakers: string[] = [
  "Dr. S.N.Singh",
  "Prof.(Dr.) Akshay Rathore",
  "Dr. Yogesh S. Chauhan",
  "Prof. J. Ramkumar",
  "Dr. B. Panigrahi",
  "Prof. Vinod Khadkikar",
  "Dr. K. Rajashekara",
  "Dr. Atif Iqbal",
  "Dr. Ahmed A. Elngar",
  "Dr. Haitham Abu-Rub",
  "Dr. Liudong Xing",
  "Dr. Rajeev Srivastava",

  // "Chin Kuan Ho",
  // "Dr. Hironori Washizaki",
  // "Dr. Harivardhagini Subhadra",
  // "Dr. Rajeev Srivastava",
  // "Dr. S.N.Singh",
  // "Dr.Akshay Kumar Rathore",
  // "Dr. Sivaneasan Bala Krishnan",
  // "Dr. Anil Kumar Tripathi",
  // "Prof. Asheesh Kumar",
  // "Dr. Mohammad Rihan",
  // "Dr. Rajeev Kumar Singh",
  // "Dr. Prabhakar Tiwari",
  // "Dr. Rakesh Kumar",
  // "Dr. Varun Kakar"
];

export default function KeynoteSpeakers(): JSX.Element {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center py-10 px-4 w-full">
        <h2 className="text-center text-4xl font-heading font-bold text-primary mb-2">Keynote Speakers</h2>
        <p className="text-center text-xl text-gray-600 mb-12">
          Global Conference on Sustainable Green Healthcare Innovations (GCSGHI-2026)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {speakers.map((speakerName: string, index: number) => {
            const speakerDetails: SpeakerCard | undefined = cards.find((card: SpeakerCard) => card.name === speakerName);
            if (!speakerDetails) return null;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-green-100 hover:shadow-xl hover:border-green-200 transition-all duration-300 group"
              >
                <div className="relative mb-6 mx-auto w-32 h-32">
                  <div className="absolute inset-0 bg-green-50 rounded-full transform -rotate-6 transition-transform group-hover:rotate-0"></div>
                  <img
                    className="w-32 h-32 mx-auto relative z-10 rounded-full border-4 border-white shadow-md object-cover"
                    src={speakerDetails.imgSrc || "/reshot-icon-user-ZXFJAEQURK.svg"}
                    alt={speakerDetails.name}
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-4">
                  {speakerDetails.name}
                </h3>
                {speakerDetails.position && (
                  <p className="text-primary font-semibold mt-2 text-sm uppercase tracking-wide">{speakerDetails.position}</p>
                )}
                {speakerDetails.organization && (
                  <p className="text-gray-500 text-sm mt-1">{speakerDetails.organization}</p>
                )}
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}