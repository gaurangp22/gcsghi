import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, MapPin, User } from "lucide-react";

const Program = () => {
  const SessionCard = ({ time, title, speaker, location, type }: any) => (
    <Card className="mb-4">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-blue-900" />
              <span className="text-sm font-medium text-blue-900">{time}</span>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{type}</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
            {speaker && (
              <div className="flex items-center gap-2 mb-2">
                <User className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">{speaker}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">{location}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Conference Program</h1>
          <p className="text-xl">Detailed schedule for Global Conference on Sustainable Green Healthcare Innovations (GCSGHI-2026) (1st-3rd May)</p>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            <Tabs defaultValue="day1" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="day1">Day 1 - May 15</TabsTrigger>
                <TabsTrigger value="day2">Day 2 - May 16</TabsTrigger>
                <TabsTrigger value="day3">Day 3 - May 17</TabsTrigger>
              </TabsList>

              <TabsContent value="day1" className="mt-8">
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="text-blue-900">Day 1 - Opening & Keynotes</CardTitle>
                  </CardHeader>
                </Card>

                <SessionCard
                  time="8:00 - 9:00 AM"
                  title="Registration & Welcome Coffee"
                  location="Conference Lobby"
                  type="Registration"
                />

                <SessionCard
                  time="9:00 - 9:30 AM"
                  title="Opening Ceremony & Welcome Address"
                  speaker="Conference Chairs"
                  location="Main Auditorium"
                  type="Ceremony"
                />

                <SessionCard
                  time="9:30 - 10:30 AM"
                  title="Keynote 1: The Future of Artificial Intelligence in Computing"
                  speaker="Dr. Andrew Ng, Stanford University"
                  location="Main Auditorium"
                  type="Keynote"
                />

                <SessionCard
                  time="10:30 - 11:00 AM"
                  title="Coffee Break & Networking"
                  location="Conference Lobby"
                  type="Break"
                />

                <SessionCard
                  time="11:00 - 12:30 PM"
                  title="Technical Session 1A: Machine Learning Algorithms"
                  speaker="Session Chair: Dr. Priya Patel"
                  location="Hall A"
                  type="Technical Session"
                />

                <SessionCard
                  time="11:00 - 12:30 PM"
                  title="Technical Session 1B: IoT Security & Privacy"
                  speaker="Session Chair: Prof. James Wilson"
                  location="Hall B"
                  type="Technical Session"
                />

                <SessionCard
                  time="12:30 - 1:30 PM"
                  title="Lunch Break"
                  location="Conference Restaurant"
                  type="Break"
                />

                <SessionCard
                  time="1:30 - 2:30 PM"
                  title="Keynote 2: Quantum Computing and Communication Networks"
                  speaker="Prof. John Preskill, Caltech"
                  location="Main Auditorium"
                  type="Keynote"
                />

                <SessionCard
                  time="2:30 - 4:00 PM"
                  title="Technical Session 2A: Deep Learning Applications"
                  speaker="Session Chair: Dr. Lisa Zhang"
                  location="Hall A"
                  type="Technical Session"
                />

                <SessionCard
                  time="2:30 - 4:00 PM"
                  title="Technical Session 2B: Cloud Computing Architectures"
                  speaker="Session Chair: Prof. Ahmed Hassan"
                  location="Hall B"
                  type="Technical Session"
                />

                <SessionCard
                  time="4:00 - 4:30 PM"
                  title="Coffee Break"
                  location="Conference Lobby"
                  type="Break"
                />

                <SessionCard
                  time="4:30 - 6:00 PM"
                  title="Panel Discussion: Ethics in AI and Computing"
                  speaker="Panelists: Industry and Academic Leaders"
                  location="Main Auditorium"
                  type="Panel"
                />

                <SessionCard
                  time="7:00 - 9:00 PM"
                  title="Welcome Reception & Networking Dinner"
                  location="Conference Banquet Hall"
                  type="Social"
                />
              </TabsContent>

              <TabsContent value="day2" className="mt-8">
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="text-blue-900">Day 2 - Technical Sessions & Workshops</CardTitle>
                  </CardHeader>
                </Card>

                <SessionCard
                  time="9:00 - 10:00 AM"
                  title="Keynote 3: Edge Computing and 5G Networks"
                  speaker="Dr. Mischa Dohler, King's College London"
                  location="Main Auditorium"
                  type="Keynote"
                />

                <SessionCard
                  time="10:00 - 10:30 AM"
                  title="Coffee Break"
                  location="Conference Lobby"
                  type="Break"
                />

                <SessionCard
                  time="10:30 - 12:00 PM"
                  title="Technical Session 3A: Computer Vision & Image Processing"
                  speaker="Session Chair: Dr. Elena Rodriguez"
                  location="Hall A"
                  type="Technical Session"
                />

                <SessionCard
                  time="10:30 - 12:00 PM"
                  title="Technical Session 3B: Blockchain & Distributed Systems"
                  speaker="Session Chair: Prof. Michael Chen"
                  location="Hall B"
                  type="Technical Session"
                />

                <SessionCard
                  time="10:30 - 12:00 PM"
                  title="Workshop: Hands-on Machine Learning with TensorFlow"
                  speaker="Google AI Team"
                  location="Lab 1"
                  type="Workshop"
                />

                <SessionCard
                  time="12:00 - 1:00 PM"
                  title="Lunch Break"
                  location="Conference Restaurant"
                  type="Break"
                />

                <SessionCard
                  time="1:00 - 2:30 PM"
                  title="Technical Session 4A: Natural Language Processing"
                  speaker="Session Chair: Dr. Amit Sharma"
                  location="Hall A"
                  type="Technical Session"
                />

                <SessionCard
                  time="1:00 - 2:30 PM"
                  title="Technical Session 4B: Cybersecurity & Network Defense"
                  speaker="Session Chair: Prof. David Brown"
                  location="Hall B"
                  type="Technical Session"
                />

                <SessionCard
                  time="2:30 - 3:00 PM"
                  title="Coffee Break"
                  location="Conference Lobby"
                  type="Break"
                />

                <SessionCard
                  time="3:00 - 4:30 PM"
                  title="Industry Session: Technology Transfer & Innovation"
                  speaker="Industry Partners Panel"
                  location="Main Auditorium"
                  type="Industry"
                />

                <SessionCard
                  time="4:30 - 6:00 PM"
                  title="Poster Session & Exhibition"
                  location="Exhibition Hall"
                  type="Poster"
                />
              </TabsContent>

              <TabsContent value="day3" className="mt-8">
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="text-blue-900">Day 3 - Advanced Topics & Closing</CardTitle>
                  </CardHeader>
                </Card>

                <SessionCard
                  time="9:00 - 10:00 AM"
                  title="Keynote 4: Sustainable Computing for the Future"
                  speaker="Prof. Carla Gomes, Cornell University"
                  location="Main Auditorium"
                  type="Keynote"
                />

                <SessionCard
                  time="10:00 - 10:30 AM"
                  title="Coffee Break"
                  location="Conference Lobby"
                  type="Break"
                />

                <SessionCard
                  time="10:30 - 12:00 PM"
                  title="Technical Session 5A: Quantum Computing Applications"
                  speaker="Session Chair: Prof. Sarah Johnson"
                  location="Hall A"
                  type="Technical Session"
                />

                <SessionCard
                  time="10:30 - 12:00 PM"
                  title="Technical Session 5B: Smart Cities & IoT"
                  speaker="Session Chair: Dr. Neha Gupta"
                  location="Hall B"
                  type="Technical Session"
                />

                <SessionCard
                  time="12:00 - 1:00 PM"
                  title="Lunch Break"
                  location="Conference Restaurant"
                  type="Break"
                />

                <SessionCard
                  time="1:00 - 2:30 PM"
                  title="Technical Session 6A: Big Data Analytics"
                  speaker="Session Chair: Dr. Ravi Shankar"
                  location="Hall A"
                  type="Technical Session"
                />

                <SessionCard
                  time="1:00 - 2:30 PM"
                  title="Technical Session 6B: Human-Computer Interaction"
                  speaker="Session Chair: Prof. Maria Garcia"
                  location="Hall B"
                  type="Technical Session"
                />

                <SessionCard
                  time="2:30 - 3:00 PM"
                  title="Coffee Break"
                  location="Conference Lobby"
                  type="Break"
                />

                <SessionCard
                  time="3:00 - 4:00 PM"
                  title="Best Paper Awards & Recognition Ceremony"
                  location="Main Auditorium"
                  type="Awards"
                />

                <SessionCard
                  time="4:00 - 4:30 PM"
                  title="Closing Ceremony & Future Conferences"
                  speaker="Organizing Committee"
                  location="Main Auditorium"
                  type="Ceremony"
                />

                <SessionCard
                  time="5:00 - 7:00 PM"
                  title="Farewell Reception"
                  location="Conference Terrace"
                  type="Social"
                />
              </TabsContent>
            </Tabs>

            {/* Additional Information */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-blue-900">Important Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• All session timings are in Indian Standard Time (IST)</li>
                  <li>• Presentation guidelines will be shared with accepted authors</li>
                  <li>• Certificate of participation will be provided to all attendees</li>
                  <li>• Conference materials and proceedings will be available digitally</li>
                  <li>• Live streaming available for keynote sessions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Program;
