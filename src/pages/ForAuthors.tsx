import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, ChevronDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ForAuthors = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 font-heading">Conference Guidelines</h1>
          <p className="text-xl">Author's Guidelines for GCSGHI-2026</p>
        </div>
      </div>

      <div className="p-4">
        <div className="max-w-[90%] mx-auto p-6 text-center">
          <h3 className="text-primary text-lg md:text-xl font-semibold tracking-wide">Conference Guidelines</h3>
          <h1 className="text-2xl md:text-3xl font-bold mt-2 tracking-tight">Author's Guidelines</h1>
          <hr className="w-40 md:w-56 border-t-2 border-primary mx-auto my-2" />
          <p className="text-gray-700 mt-4 text-base md:text-lg leading-relaxed">
            Authors are invited to submit original, high-quality, and previously unpublished research articles. Submissions must not be under review by any other publication or conference. All manuscripts should be submitted electronically. Each manuscript is limited to a maximum of six (6) pages, including figures, tables, and references. Additional pages may be accommodated with a nominal fee.
          </p>
        </div>

        <div className="max-w-[90%] mx-auto my-6 flex flex-col md:flex-row gap-6">
          {/* Abstract Submission Guidelines */}
          <div className="bg-gradient-to-b from-primary to-green-700 text-white p-6 md:p-8 flex-1 rounded-2xl shadow-lg border border-green-200">
            <h2 className="text-xl md:text-2xl font-bold flex items-center tracking-tight font-heading">
              ● Abstract Submission Guidelines
            </h2>
            <ul className="list-disc pl-5 text-sm md:text-base font-medium mt-4 space-y-2 leading-snug">
              <li>Font: Times New Roman</li>
              <li>Title: 12 pt. (Bold, Centre)</li>
              <li>Author Name: 14 pt. and their affiliation 11 pt.</li>
              <li>Headings: 14 pt. (Bold)</li>
              <li>Keywords: At least 5 keywords</li>
              <li>Abstract Length: 100-200 words</li>
              <li><strong>Submissions in Special Issues/Regular Issues are accepted after Registration only.</strong></li>
            </ul>
          </div>

          {/* Registration Fee */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-2xl flex-1 shadow-lg border border-gray-100">
            <h2 className="text-xl md:text-2xl font-bold text-primary flex items-center tracking-tight font-heading">
              ● Registration Fee
            </h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Refer to the Registration page for detailed fee structure.
            </p>
          </div>
        </div>

        {/* IEEE Similarity and Plagiarism Policies Section Removed */}

        {/* IEEE E-Copyright Process Removed */}

        <div className="max-w-[90%] mx-auto bg-gradient-to-t from-primary to-green-700 my-6 p-6 text-white shadow-lg rounded-2xl">
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base leading-snug">
            <li>Papers of acceptable quality presented at the conference will be considered for publication.</li>
            <li>Accepted papers must be presented by at least one author. Authors must complete paid registration.</li>
            <li>Failure to register or present the paper will result in removal from the conference program and proceedings.</li>
            <li>No refunds will be provided for cancellations, but substitutions are allowed before the event.</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ForAuthors;
