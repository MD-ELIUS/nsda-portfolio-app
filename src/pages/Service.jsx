import {
  FaServer,
  FaPaintBrush,
  FaMobileAlt,
  FaCode,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";

const Service = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16 space-y-20">

      {/* ================= HEADER ================= */}
      <section className="text-center space-y-4">
        <h2 className="text-4xl font-bold">Professional Services</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          I provide end-to-end web development services focused on performance,
          scalability, and user experience using modern technologies.
        </p>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="grid md:grid-cols-3 gap-8">

        {/* Backend Development */}
        <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition bg-white">
          <FaServer className="text-4xl text-indigo-600 mb-4" />
          <h4 className="text-xl font-semibold mb-2">
            Backend Development
          </h4>
          <p className="text-gray-600 mb-4">
            Robust and secure server-side solutions using Node.js and Express.js
            with RESTful API architecture.
          </p>
          <ul className="text-sm text-gray-500 list-disc list-inside space-y-1">
            <li>REST API development</li>
            <li>JWT authentication & authorization</li>
            <li>Business logic & validations</li>
          </ul>
        </div>

        {/* UI / UX Design */}
        <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition bg-white">
          <FaPaintBrush className="text-4xl text-indigo-600 mb-4" />
          <h4 className="text-xl font-semibold mb-2">
            UI / UX Design
          </h4>
          <p className="text-gray-600 mb-4">
            Clean, modern, and user-centric interface design ensuring clarity,
            usability, and visual consistency.
          </p>
          <ul className="text-sm text-gray-500 list-disc list-inside space-y-1">
            <li>Modern UI components</li>
            <li>Tailwind CSS & design systems</li>
            <li>Accessibility-focused layouts</li>
          </ul>
        </div>

        {/* Responsive Design */}
        <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition bg-white">
          <FaMobileAlt className="text-4xl text-indigo-600 mb-4" />
          <h4 className="text-xl font-semibold mb-2">
            Responsive Web Design
          </h4>
          <p className="text-gray-600 mb-4">
            Fully responsive websites that provide a seamless experience across
            mobile, tablet, and desktop devices.
          </p>
          <ul className="text-sm text-gray-500 list-disc list-inside space-y-1">
            <li>Mobile-first approach</li>
            <li>Cross-browser compatibility</li>
            <li>Optimized layouts</li>
          </ul>
        </div>

        {/* Frontend Development */}
        <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition bg-white">
          <FaCode className="text-4xl text-indigo-600 mb-4" />
          <h4 className="text-xl font-semibold mb-2">
            Frontend Development
          </h4>
          <p className="text-gray-600 mb-4">
            Interactive and scalable frontend applications using React.js and
            modern JavaScript standards.
          </p>
          <ul className="text-sm text-gray-500 list-disc list-inside space-y-1">
            <li>Reusable component architecture</li>
            <li>State management</li>
            <li>Performance optimization</li>
          </ul>
        </div>

        {/* Database Management */}
        <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition bg-white">
          <FaDatabase className="text-4xl text-indigo-600 mb-4" />
          <h4 className="text-xl font-semibold mb-2">
            Database Management
          </h4>
          <p className="text-gray-600 mb-4">
            Efficient data storage and retrieval using MongoDB with optimized
            schema design.
          </p>
          <ul className="text-sm text-gray-500 list-disc list-inside space-y-1">
            <li>Database schema design</li>
            <li>CRUD operations</li>
            <li>Data security & optimization</li>
          </ul>
        </div>

        {/* Deployment & Hosting */}
        <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition bg-white">
          <FaCloud className="text-4xl text-indigo-600 mb-4" />
          <h4 className="text-xl font-semibold mb-2">
            Deployment & Hosting
          </h4>
          <p className="text-gray-600 mb-4">
            End-to-end deployment solutions ensuring fast, reliable, and secure
            application delivery.
          </p>
          <ul className="text-sm text-gray-500 list-disc list-inside space-y-1">
            <li>Vercel / Netlify deployment</li>
            <li>Environment configuration</li>
            <li>Production-ready builds</li>
          </ul>
        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="text-center bg-indigo-50 p-10 rounded-xl border border-indigo-100">
        <h3 className="text-2xl font-semibold mb-3">
          Let’s Build Something Great
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Whether you need a full-stack web application, a modern frontend,
          or a scalable backend solution — I am ready to help.
        </p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition">
          Contact Me
        </button>
      </section>

    </main>
  );
};

export default Service;
