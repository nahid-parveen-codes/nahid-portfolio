export default function NahidPortfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <img 
            src="https://via.placeholder.com/1200x300.png?text=Nahid+Parveen+|+Digital+Communicator" 
            alt="Banner" 
            className="rounded-xl w-full object-cover shadow-md"
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center text-blue-700 animate-pulse">
          Nahid Parveen
        </h1>
        <p className="text-center text-sm md:text-base italic text-gray-600 mb-8">
          Digital Communications Strategist | Political Campaigns | Government Outreach | Sustainability-Focused Startups
        </p>

        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-900">About Me</h2>
          <p className="leading-relaxed">
            I currently lead digital strategy and communication at the Chief Minister's Office, West Bengal, through Citizens Alliance.
            My work blends storytelling, political insight, and grassroots understanding — from co-founding Cane Crush to building narratives for sustainability-focused startups like Paving+, and executing campaign messaging for the 2021 West Bengal elections at I-PAC.
            I'm passionate about helping founders and policymakers make a green, tangible impact.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-900">Core Strengths</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Digital Strategy for Governments & Green Startups</li>
            <li>Social Media Management & Eco-Conscious Content</li>
            <li>Influencer & Community Engagement</li>
            <li>Pitch Deck & Sustainability Storytelling</li>
            <li>Policy Narratives & Impact Communication</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-900">Work Snapshots</h2>
          <ul className="space-y-3">
            <li><strong>Citizens Alliance (CMO, GoWB):</strong> Leading grievance redressal comms at state level.</li>
            <li><strong>I-PAC:</strong> Digital analyst for West Bengal Elections 2021.</li>
            <li><strong>Paving+:</strong> Founding team member building sustainability-focused brand storytelling.</li>
            <li><strong>Horses Stable Finalist:</strong> Pitched Cane Crush on national TV.</li>
            <li><strong>Freelance Consultant:</strong> For early-stage startups with eco-conscious vision.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-900">Impact Highlight</h2>
          <p className="leading-relaxed">
            Through Paving+, we've supported over 20 sustainable material innovators, facilitated over 100 tons of waste reduction efforts,
            and collaborated with climate-forward builders and architects on green-certified projects. Every campaign we run is designed to
            build better — for people and for the planet.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-900">Featured Case Study</h2>
          <div className="bg-gray-100 p-4 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg mb-2">Paving+: Positioning Sustainability as Strategy</h3>
            <p className="mb-2">
              Led the content and digital communications for Paving+, a startup pioneering sustainable building material solutions.
              Developed storytelling frameworks for their EarthLab Accelerator pitch, designed impact-driven brand messaging, and
              created founder-led visibility content across channels.
            </p>
            <a href="https://drive.google.com/drive/u/3/folders/1p_nmHsSdv1NtqtHvwk2UpS9GdNko5QeT" target="_blank" className="text-blue-600 hover:underline">
              View Pitch Deck & Collaterals →
            </a>
          </div>
        </section>

        <section className="text-center mt-10">
          <p className="text-lg font-semibold">Let’s build something meaningful together.</p>
          <p className="text-sm text-gray-600">Email: nahidparveenmullick@gmail.com</p>
          <p className="text-sm text-gray-600">WhatsApp: <a href="https://wa.me/918334974096" className="text-blue-600 hover:underline">+91 8334974096</a></p>
          <p className="text-sm text-gray-600 mt-4">Portfolio Drive: <a href="https://drive.google.com/drive/u/3/folders/1p_nmHsSdv1NtqtHvwk2UpS9GdNko5QeT" className="text-blue-600 hover:underline">View My Work</a></p>

          <div className="flex justify-center gap-6 mt-6 text-xl">
            <a href="https://www.facebook.com/share/18Aex5frsq/" target="_blank" className="hover:text-blue-700 transition-transform transform hover:scale-110">Facebook</a>
            <a href="https://www.instagram.com/sorasoricmwb?igsh=MTM0dnYwMWJqMG9qYg==" target="_blank" className="hover:text-pink-500 transition-transform transform hover:scale-110">Instagram</a>
            <a href="https://x.com/SorasoriCMWB?t=1JCGe1eWUE00Yodsj5BiuQ&s=09" target="_blank" className="hover:text-black transition-transform transform hover:scale-110">X (Twitter)</a>
            <a href="https://youtube.com/@sorasoricmwb?si=jY9JopPYmKPp5b_y" target="_blank" className="hover:text-red-600 transition-transform transform hover:scale-110">YouTube</a>
            <a href="https://www.linkedin.com/in/nahid-parveen-47bb6226/" target="_blank" className="hover:text-blue-600 transition-transform transform hover:scale-110">LinkedIn</a>
          </div>
        </section>
      </div>
    </div>
  );
}