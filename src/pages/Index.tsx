import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UniversityMap from "@/components/UniversityMap";
import CountdownTimer from "@/components/CountdownTimer";
import LogoCarousel from '@/components/LogoCarousel';
import Acknowledgement from '@/components/Acknowledgement';
import { Leaf, MapPin, Calendar, University } from "lucide-react";
import TracksSection from "@/components/TracksSection";
import ImportantDates from "@/components/ImportantDates";
import FeesSponsorship from "@/components/FeesSponsorship";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-green-50 to-white">

        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 transform translate-x-20 z-0" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl z-0" />

        <div className="container mx-auto px-4 z-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                <Leaf className="w-4 h-4" />
                <span>Sustainable Healthcare 2026</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold font-heading leading-tight text-gray-900">
                Global Conference on <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Sustainable Green Healthcare</span> Innovations
              </h1>

              <div className="flex flex-col gap-4 text-lg text-gray-600">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-primary" />
                  <span className="font-medium">1st - 3rd May, 2026</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span className="font-medium">Galgotias University, Greater Noida, India</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-primary/50 text-white px-8 h-12 text-lg shadow-lg cursor-not-allowed" disabled>
                  Registration (Coming Soon)
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-gray-500 cursor-not-allowed px-8 h-12 text-lg" disabled>
                  Submit Paper (Coming Soon)
                </Button>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-2 font-medium">Organized By</p>
                <div className="flex items-center gap-4">
                  <img src="/images/gu.jpg" alt="Galgotias University" className="h-12 w-auto grayscale0 opacity-100 hover:opacity-100 transition-opacity" />
                  <div className="border-l pl-4 border-gray-300">
                    <h4 className="font-bold text-gray-800">G-MRDC</h4>
                    <p className="text-xs text-gray-500">Multidisciplinary Research & Dev Cell</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="relative hidden lg:block">
              {/* Hero Image / Composition */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://www.galgotiasuniversity.edu.in/public/uploads/media/ZE6Pp0UjcqM3YePbTNhicYhR1rGh2DpcnSgKbFMH.webp"
                  alt="Conference Venue"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <p className="text-white font-medium">Join us at the state-of-the-art campus of Galgotias University</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <div className="relative z-20 -mt-10 mb-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
            <CountdownTimer />
          </div>
        </div>
      </div>

      {/* Important Dates */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 font-heading">Key Dates</h2>
          <ImportantDates />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Host Institution</h3>
              <h2 className="text-3xl font-bold mb-6 font-heading">About Galgotias University</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Galgotias University (GU), located in Uttar Pradesh, is sponsored by Smt. Shakuntala Educational and Welfare Society. The University has earned NAAC A+ accreditation with an exceptional score of 3.37/4. This esteemed recognition underscores Galgotias University's status as one of the most sought-after institutions for higher education.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Offering over 200 programs, QS has rated GU for excellence with 5 stars in Teaching, academic development, facilities, innovations, and employability.
              </p>
              <Button variant="link" className="text-primary p-0 h-auto font-semibold">Read More &rarr;</Button>
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-widest text-secondary uppercase mb-2">Organizer</h3>
              <h2 className="text-3xl font-bold mb-6 font-heading">About G-MRDC</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Galgotias Multidisciplinary Research & Development Cell (G-MRDC) cultivates and fosters interdisciplinary high-impact research in partnerships with external organizations, industry partners, government agencies, and community groups to amplify the impact and outcome of research.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-6">
                <h4 className="font-bold text-gray-800 mb-2">About GCSGHI-2026</h4>
                <p className="text-sm text-gray-600">
                  The Global Conference on Sustainable Green Healthcare Innovations intends to be a pivotal event for bringing the research community, industry experts, and policymakers on the same platform, working towards advanced healthcare systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <TracksSection />

      {/* Fees & Sponsorship */}
      <FeesSponsorship />

      {/* <section className="py-12">
        <LogoCarousel />
      </section> */}

      {/* Acknowledgement Section Removed */}

      {/* University Location Map */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 font-heading">Conference Venue</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Galgotias University, Plot No. 2, Sector 17-A, Yamuna Expressway, Greater Noida, Uttar Pradesh 203201, India
          </p>
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-green-900/20 border-4 border-gray-700">
            <UniversityMap />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
