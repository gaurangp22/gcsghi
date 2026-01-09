import { cards } from "@/utils/slideArray";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Helper function to format title - uses existing title if present, otherwise defaults to "Professor"
const formatTitle = (position: string | undefined, organization: string | undefined, name: string): string => {
  // High-priority roles that should take priority over generic "Professor"
  const highPriorityRoles = [
    "associate dean", "assistant dean", "dean",
    "associate director", "assistant director", "director",
    "hod", "head of department",
    "pro-vice chancellor", "vice chancellor", "chancellor",
    "ceo", "president"
  ];

  // FIRST: Check if position has a high-priority role
  if (position && position.trim() !== "") {
    const positionLower = position.toLowerCase();
    for (const role of highPriorityRoles) {
      if (positionLower.includes(role)) {
        return position;
      }
    }
  }

  // SECOND: Check if organization contains a high-priority role (like "Associate Dean, DCSE...")
  // This takes priority over a generic "Professor" in position
  if (organization && organization.trim() !== "") {
    const orgLower = organization.toLowerCase();

    for (const role of highPriorityRoles) {
      if (orgLower.includes(role)) {
        // Extract the title part along with department/unit from organization
        const orgParts = organization.split(',').map(p => p.trim());

        // Find which part contains the role
        for (let i = 0; i < orgParts.length; i++) {
          const partLower = orgParts[i].toLowerCase();
          for (const r of highPriorityRoles) {
            if (partLower.includes(r)) {
              // Take this part and possibly the next one if it's a department/unit abbreviation
              let extractedTitle = orgParts[i];

              // Check if next part is a department/unit abbreviation (short name, all caps, etc.)
              if (i + 1 < orgParts.length) {
                const nextPart = orgParts[i + 1].trim();
                // If next part is short (likely a department code like IQAC, SCSE, etc.) 
                // or contains department keywords, include it
                if (nextPart.length <= 10 ||
                  /^[A-Z]{2,}$/.test(nextPart) ||
                  nextPart.toLowerCase().includes("department") ||
                  /^D[A-Z]+$/.test(nextPart) || // DAIML, DCSE, etc.
                  /^S[A-Z]+$/.test(nextPart)) { // SCSE, SCAT, etc.
                  extractedTitle = `${orgParts[i]}, ${nextPart}`;
                }
              }

              return extractedTitle;
            }
          }
        }
      }
    }
  }

  // THIRD: If position has "professor", just use "Professor" (not the full string)
  if (position && position.trim() !== "") {
    const positionLower = position.toLowerCase();
    if (positionLower.includes("professor")) {
      // Return just "Professor" or "Associate Professor" etc., not the full string with institution
      if (positionLower.includes("associate professor")) {
        return "Associate Professor";
      } else if (positionLower.includes("assistant professor")) {
        return "Assistant Professor";
      } else {
        return "Professor";
      }
    }
  }

  // For people with Mr./Ms. prefix - use their position if they have one, otherwise return empty (they are not professors)
  const nameLower = name.toLowerCase();
  if (nameLower.startsWith("mr.") || nameLower.startsWith("ms.") ||
    nameLower.startsWith("shri") || nameLower.startsWith("smt.")) {
    // If they have a specific position, use that
    if (position && position.trim() !== "") {
      return position;
    }
    return "";
  }

  // Default to Professor if no meaningful title found
  return "Professor";
};

// Helper function to format affiliation - removes redundancy with title
const formatAffiliation = (organization: string | undefined, position: string | undefined, displayedTitle: string): string => {
  if (!organization) return "";

  // Split the organization into parts
  const orgParts = organization.split(',').map(p => p.trim());

  // Get words/phrases from the displayed title (for comparison)
  const titleWords = displayedTitle ? displayedTitle.toLowerCase().split(/[,\s]+/).filter(w => w.length > 1) : [];

  // Filter out parts that are already in the title
  const filteredParts = orgParts.filter(part => {
    const partLower = part.toLowerCase();

    // Check if this part (or significant portion of it) appears in the title
    for (const titleWord of titleWords) {
      if (titleWord.length > 2 && partLower.includes(titleWord)) {
        return false; // Skip this part
      }
      if (partLower.length > 2 && displayedTitle.toLowerCase().includes(partLower)) {
        return false; // Skip this part
      }
    }

    // Also remove common title prefixes
    const titlesToRemove = [
      'professor', 'prof.', 'associate professor', 'assistant professor',
      'dean', 'associate dean', 'assistant dean',
      'director', 'associate director', 'assistant director',
      'hod', 'head of department'
    ];

    for (const title of titlesToRemove) {
      if (partLower.startsWith(title) || partLower === title) {
        return false;
      }
    }

    // Remove department codes if they're in the title
    const deptCodes = ['IQAC', 'SCSE', 'SCAT', 'DCSE', 'DAIML', 'DAIDS', 'DCYS', 'SAI', 'SOHT', 'SMCS', 'DOME', 'DOCE', 'DEECE', 'GSCALE', 'APR'];
    for (const code of deptCodes) {
      if (displayedTitle.toUpperCase().includes(code) && part.toUpperCase().includes(code)) {
        return false;
      }
    }

    return true;
  });

  return filteredParts.join(', ').trim();
};

export default function TeamPage() {
  const roles = {
    "Chief Patron": [
      "Shri Suneel Galgotia"
    ],
    "Patron": [
      "Dr. Dhruv Galgotia",
      "Prof. (Dr.) Anshul Mittal",
      "Ms. Aradhana Galgotia"
    ],
    "Conference General Chair": [
      "Prof. (Dr.) Avadhesh Kumar"
    ],
    "Chairperson": [
      "Prof. Kuldeep Saxena"
    ],
    "International Chairperson": [
      "Prof. Joey Santos"
    ],
    "Conference Organizing Committee": [
      "Dr. Anand P S Gaur",
      "Dr. Din Bandhu"
    ],
    "International Advisory Member": [
      "Prof. (Dr.) Sanjeev K. Singh", // Keeping existing members as advisory
      "Prof. (Dr.) Jagjit Singh Dhatterwal",
      "Dr. Liudong Xing",
      "Dr. LING Tok Wang",
      "Dr. Norjihan Abdul Ghani"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="py-10 px-4">
        <h1 className="text-center text-gray-900 text-4xl font-bold mb-8">Our Team</h1>
        {Object.entries(roles).map(([role, names]) => (
          <div key={role} className="mb-12">
            <h2 className="text-3xl text-primary font-bold text-center mb-8 font-heading">{role}</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {names.map((name) => {
                const chair = cards.find((chair) => chair.name === name);
                return (
                  chair && (
                    <div
                      key={name}
                      className="bg-white border border-green-100 shadow-lg rounded-2xl p-6 w-80 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl hover:border-green-200 group"
                    >
                      <div className="relative mb-6 mx-auto w-40 h-40">
                        <div className="absolute inset-0 bg-green-100 rounded-full transform rotate-6 transition-transform group-hover:rotate-12"></div>
                        {chair.imgSrc ? (
                          <img
                            src={chair.imgSrc}
                            alt={name}
                            className="w-40 h-40 relative z-10 rounded-full border-4 border-white shadow-md object-cover"
                          />
                        ) : (
                          <div className="w-40 h-40 relative z-10 rounded-full border-4 border-white shadow-md bg-gray-50 flex items-center justify-center">
                            <span className="text-4xl text-gray-300 font-bold">{name.charAt(0)}</span>
                          </div>
                        )}
                      </div>

                      <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
                      {(() => {
                        const title = formatTitle(chair.position, chair.organization, name);
                        const affiliation = formatAffiliation(chair.organization, chair.position, title);
                        return (
                          <>
                            {title && (
                              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                                {title}
                              </p>
                            )}
                            {affiliation && (
                              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                                {affiliation}
                              </p>
                            )}
                          </>
                        );
                      })()}
                    </div>
                  )
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
