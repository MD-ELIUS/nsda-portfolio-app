import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16 space-y-20">

      {/* ================= PAGE HEADER ================= */}
      <section className="text-center space-y-4">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Get in touch for freelance projects, collaborations, or career opportunities.
        </p>
      </section>

      {/* ================= CONTACT INFO + FORM ================= */}
      <section className="grid md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-indigo-50 shadow-md hover:shadow-xl transition flex items-center gap-4">
            <FaEnvelope className="text-indigo-600 text-2xl" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-600">elius@example.com</p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-indigo-50 shadow-md hover:shadow-xl transition flex items-center gap-4">
            <FaPhone className="text-indigo-600 text-2xl" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-gray-600">+880XXXXXXXXX</p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-indigo-50 shadow-md hover:shadow-xl transition flex items-center gap-4">
            <FaMapMarkerAlt className="text-indigo-600 text-2xl" />
            <div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-gray-600">Barishal, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4 bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
          <input
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* ================= GOOGLE MAP PLACEHOLDER ================= */}
      <section className="mt-16 rounded-xl overflow-hidden shadow-md">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.222164218478!2d90.40206627471085!3d22.70164263427689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd878ca28a3db%3A0x34a8edc1b72d61c8!2sBarishal%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1695220486463!5m2!1sen!2sus"
          className="w-full h-80"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

    </main>
  );
};

export default Contact;
