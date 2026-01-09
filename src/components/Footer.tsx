import { Mail, Phone, MapPin, Calendar } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Conference Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-heading text-primary">GCSGHI-2026</h3>
            <p className="text-gray-400 leading-relaxed">
              Global Conference on Sustainable Green Healthcare Innovations
            </p>
            <div className="flex items-center gap-3 text-gray-300">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-sm">1st - 3rd May, 2026</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-sm">Galgotias University, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading text-white">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/call-for-papers" className="hover:text-primary transition-colors flex items-center gap-2"><span>&rsaquo;</span> Call for Papers</a></li>
              <li><a href="/registration" className="hover:text-primary transition-colors flex items-center gap-2"><span>&rsaquo;</span> Registration</a></li>
              <li><a href="/program" className="hover:text-primary transition-colors flex items-center gap-2"><span>&rsaquo;</span> Program</a></li>
              <li><a href="/speakers" className="hover:text-primary transition-colors flex items-center gap-2"><span>&rsaquo;</span> Speakers</a></li>
            </ul>
          </div>

          {/* Important Dates */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading text-white">Important Dates</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex justify-between"><span>Paper Submission:</span> <span className="text-white">Will update</span></li>
              <li className="flex justify-between"><span>Review Results:</span> <span className="text-white">Will update</span></li>
              <li className="flex justify-between"><span>Final Submission:</span> <span className="text-white">Will update</span></li>
              <li className="flex justify-between"><span>Registration:</span> <span className="text-white">Will update</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading text-white">Contact Us</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1" />
                <span className="text-sm hover:text-white transition-colors cursor-pointer">gcsghi2026@galgotiasuniversity.edu.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2026 Global Conference on Sustainable Green Healthcare Innovations (GCSGHI-2026). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
