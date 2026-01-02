import {
    FaUserTie,
    FaBullseye,
    FaEye,
    FaCode,
    FaDatabase,
    FaQuoteLeft,
} from "react-icons/fa";

const Home = () => {
    return (
        <main className="max-w-7xl mx-auto px-8 py-16 space-y-24">

            {/* ================= HERO / BANNER ================= */}
            <section className="grid md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Hi, I’m <span className="text-indigo-600">MD. Elius</span>
                    </h1>

                    <p className="text-gray-600 text-lg">
                        A MERN Stack Web Developer with a strong academic background in
                        Nutrition & Food Science, Quality Control, and Industrial Compliance.
                    </p>

                    <div className="flex gap-4">
                        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
                            Hire Me
                        </button>
                        <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition">
                            Download CV
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=800&auto=format&fit=crop"
                        alt="MD. Elius"
                        className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-indigo-100"
                    />

                </div>
            </section>

            {/* ================= PERSONAL INFO ================= */}
            <section className="grid md:grid-cols-3 gap-6">
                {[
                    ["Profession", "MERN Stack Developer", FaUserTie],
                    ["Education", "BSc in Nutrition & Food Science", FaBullseye],
                    ["Availability", "Open for Freelance & Job", FaEye],
                ].map(([title, value, Icon]) => (
                    <div
                        key={title}
                        className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-white shadow-md hover:shadow-xl hover:-translate-y-1 transition border border-indigo-600"
                    >
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mb-4">
                            <Icon className="text-xl" />
                        </div>
                        <h4 className="font-semibold text-lg">{title}</h4>
                        <p className="text-gray-600">{value}</p>
                    </div>
                ))}
            </section>

            {/* ================= MISSION & VISION ================= */}
            <section className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-xl shadow-md hover:shadow-lg transition border border-indigo-600">
                    <FaBullseye className="text-3xl text-indigo-600" />
                    <h3 className="text-xl font-semibold mt-3">Career Mission</h3>
                    <p className="mt-2 text-gray-600">
                        To develop secure, scalable, and user-friendly web applications
                        that solve real-world problems and add measurable business value.
                    </p>
                </div>

                <div className="p-8 rounded-xl shadow-md hover:shadow-lg transition border border-indigo-600">
                    <FaEye className="text-3xl text-indigo-600" />
                    <h3 className="text-xl font-semibold mt-3">Career Vision</h3>
                    <p className="mt-2 text-gray-600">
                        To become a globally recognized full-stack engineer contributing
                        to innovative and impactful digital solutions.
                    </p>
                </div>
            </section>

            {/* ================= SERVICES ================= */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-12">
                    My Professional Services
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        ["Frontend Development", FaCode],
                        ["Backend Development", FaDatabase],
                        ["Full Stack MERN Solutions", FaCode],
                    ].map(([title, Icon]) => (
                        <div
                            key={title}
                            className="p-8 rounded-xl bg-white shadow-md hover:bg-indigo-50 hover:shadow-xl transition text-center border border-indigo-600"
                        >
                            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-indigo-600 text-white mb-4">
                                <Icon className="text-xl" />
                            </div>
                            <h4 className="font-semibold text-lg">{title}</h4>
                            <p className="text-sm text-gray-600 mt-2">
                                Modern, scalable, and performance-optimized solutions
                                tailored to your needs.
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= CLIENT FEEDBACK ================= */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-12">
                    Client Testimonials
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        "Very professional developer with excellent communication skills and timely delivery.",
                        "Delivered clean, scalable, and well-documented code beyond expectations.",
                    ].map((review, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-xl bg-slate-50 border-l-4 border-indigo-600 shadow-sm"
                        >
                            <FaQuoteLeft className="text-indigo-600 text-xl mb-2" />
                            <p className="text-gray-700">{review}</p>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
};

export default Home;
