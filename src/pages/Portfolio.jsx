import {
  FaBriefcase,
  FaCertificate,
  FaCode,
  FaLaptopCode,
  FaProjectDiagram,
  FaAward,
} from "react-icons/fa";

const Portfolio = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16 space-y-20">

      {/* ================= PAGE HEADER ================= */}
      <section className="text-center space-y-4">
        <h2 className="text-4xl font-bold">Portfolio</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          A comprehensive overview of my technical experience, projects,
          professional training, and continuous learning journey.
        </p>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section>
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <FaBriefcase className="text-indigo-600" />
          Professional Experience
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition space-y-3">
            <FaLaptopCode className="text-3xl text-indigo-600" />
            <h4 className="font-semibold text-lg">
              MERN Stack Developer (Projects Based)
            </h4>
            <p className="text-gray-600">
              Designed and developed full-stack web applications using
              React.js, Node.js, Express.js, and MongoDB following modern
              development practices.
            </p>
            <ul className="text-sm text-gray-500 list-disc list-inside">
              <li>Authentication & authorization (JWT)</li>
              <li>REST API development</li>
              <li>CRUD operations & database modeling</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition space-y-3">
            <FaCode className="text-3xl text-indigo-600" />
            <h4 className="font-semibold text-lg">
              Frontend Development
            </h4>
            <p className="text-gray-600">
              Built responsive and accessible user interfaces using
              HTML5, CSS3, Tailwind CSS, and React component architecture.
            </p>
            <ul className="text-sm text-gray-500 list-disc list-inside">
              <li>Mobile-first responsive design</li>
              <li>Reusable components</li>
              <li>Modern UI/UX principles</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= PROJECT HIGHLIGHTS ================= */}
      <section>
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <FaProjectDiagram className="text-indigo-600" />
          Project Highlights
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Full-Stack MERN Application",
              desc: "Role-based dashboard system with authentication, CRUD features, and payment integration.",
            },
            {
              title: "Responsive Portfolio Website",
              desc: "Personal portfolio built with React & Tailwind showcasing projects and skills.",
            },
            {
              title: "Database-Driven Web App",
              desc: "MongoDB-powered application with server-side pagination and filtering.",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h4 className="font-semibold text-lg mb-2">
                {project.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TRAINING & CERTIFICATIONS ================= */}
      <section>
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <FaCertificate className="text-indigo-600" />
          Training & Certifications
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition space-y-3">
            <FaAward className="text-3xl text-indigo-600" />
            <h4 className="font-semibold text-lg">
              Web Development Training
            </h4>
            <p className="text-gray-600">
              Completed structured MERN Stack development training covering
              frontend, backend, database, and deployment.
            </p>
            <p className="text-sm text-gray-500">
              Platform: Programming Hero
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition space-y-3">
            <FaCertificate className="text-3xl text-indigo-600" />
            <h4 className="font-semibold text-lg">
              Quality Management & Compliance
            </h4>
            <p className="text-gray-600">
              Professional training on Quality Management Systems (QMS)
              and Industrial Compliance standards.
            </p>
            <p className="text-sm text-gray-500">
              Relevant to food & manufacturing industries
            </p>
          </div>
        </div>
      </section>

      {/* ================= PROFESSIONAL STATEMENT ================= */}
      <section className="bg-indigo-50 p-8 rounded-xl border-l-4 border-indigo-600">
        <h3 className="text-2xl font-semibold mb-3">
          Professional Statement
        </h3>
        <p className="text-gray-700 leading-relaxed">
          I am a highly motivated developer with a strong foundation in
          full-stack web development and a unique academic background in
          science and quality systems. My goal is to build scalable,
          maintainable, and impactful software solutions while continuously
          enhancing my technical expertise.
        </p>
      </section>

    </main>
  );
};

export default Portfolio;
