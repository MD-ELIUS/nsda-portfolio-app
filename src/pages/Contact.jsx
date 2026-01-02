import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validation logic
  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form Data:", formData);
      alert("Message sent successfully!");

      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-8 py-16 space-y-20">

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
        <div className="space-y-6 ">
          <div className="p-6 rounded-xl bg-indigo-50 shadow-md flex items-center gap-4 border border-indigo-600">
            <FaEnvelope className="text-indigo-600 text-2xl" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-600">elius@example.com</p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-indigo-50 shadow-md flex items-center gap-4 border border-indigo-600">
            <FaPhone className="text-indigo-600 text-2xl" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-gray-600">+880XXXXXXXXX</p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-indigo-50 shadow-md flex items-center gap-4 border border-indigo-600">
            <FaMapMarkerAlt className="text-indigo-600 text-2xl" />
            <div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-gray-600">Barishal, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-8 rounded-xl shadow-md"
        >
          <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>

          <div>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full  p-3 rounded outline-none border border-indigo-600"
              type="text"
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded outline-none border border-indigo-600"
              type="email"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full  p-3 rounded outline-none border border-indigo-600"
              placeholder="Your Message"
              rows="5"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      <section className="mt-16 rounded-xl overflow-hidden shadow-md"> <iframe title="Location Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.327985922817!2d90.36749277533768!3d23.806933278631845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c143f3c5cb41%3A0x96cc2b8d847ada3e!2sEuropean%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1767351012868!5m2!1sen!2sbd" className="w-full h-80" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe> </section>

    </main>
  );
};

export default Contact;
