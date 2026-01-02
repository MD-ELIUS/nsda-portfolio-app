import {
  FaUserGraduate,
  FaBriefcase,
  FaUserTie,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";

const About = () => {
  return (
    <main className="max-w-7xl mx-auto px-8 py-16 space-y-20">

      {/* ================= PAGE TITLE ================= */}
      <section className="text-center space-y-4">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          A brief overview of my academic background, technical skills,
          and professional journey.
        </p>
      </section>

      {/* ================= BIOGRAPHY ================= */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <FaUserTie className="text-indigo-600" />
            Professional Biography
          </h3>
          <p className="text-gray-600 leading-relaxed">
            I am <strong>MD. Elius</strong>, a MERN Stack Web Developer with a
            solid academic background in Nutrition and Food Science. I also
            possess practical knowledge in Quality Control, Quality Management
            Systems, and Industrial Compliance.
          </p>
          <p className="text-gray-600 leading-relaxed">
            My transition into web development was driven by a passion for
            technology, problem-solving, and building scalable digital
            solutions that follow modern industry standards.
          </p>
        </div>

        <div className="p-8 rounded-xl bg-indigo-50">
          <h4 className="font-semibold text-lg mb-4">
            Professional Summary
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li>✔ MERN Stack Developer</li>
            <li>✔ Background in Food Science & Quality</li>
            <li>✔ Strong analytical & problem-solving skills</li>
            <li>✔ Open to Freelance & Full-Time Opportunities</li>
          </ul>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section>
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <FaUserGraduate className="text-indigo-600" />
          Educational Background
        </h3>

        <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h4 className="font-semibold text-lg">
            Bachelor of Science (BSc)
          </h4>
          <p className="text-gray-600">
            Nutrition and Food Science
          </p>
          <p className="text-sm text-gray-500">
            Patuakhali Science and Technology University (PSTU)
          </p>
        </div>
      </section>

      {/* ================= SKILLS WITH ICONS ================= */}
      <section>
        <h3 className="text-2xl font-semibold mb-6">
          Technical Skills
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["HTML5", FaHtml5, "text-orange-500"],
            ["CSS3", FaCss3Alt, "text-blue-500"],
            ["JavaScript", FaJsSquare, "text-yellow-400"],
            ["React.js", FaReact, "text-cyan-500"],
            ["Node.js", FaNodeJs, "text-green-600"],
            ["MongoDB", FaDatabase, "text-green-500"],
            ["Git & GitHub", FaGitAlt, "text-red-500"],
          ].map(([name, Icon, color]) => (
            <div
              key={name}
              className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition text-center"
            >
              <Icon className={`text-4xl mx-auto ${color}`} />
              <h4 className="font-semibold mt-3">{name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CAREER OBJECTIVE ================= */}
      <section className="p-8 rounded-xl bg-slate-50 border-l-4 border-indigo-600">
        <h3 className="text-2xl font-semibold flex items-center gap-2">
          <FaBriefcase className="text-indigo-600" />
          Career Objective
        </h3>
        <p className="text-gray-700 mt-3 leading-relaxed">
          To build a professional career as a full-stack developer where I can
          apply my technical expertise, continuously learn emerging
          technologies, and contribute to impactful software solutions.
        </p>
      </section>

    </main>
  );
};

export default About;
