import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-6 mt-16">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h3 className="text-xl font-semibold">MD. Elius</h3>
        <p className="text-sm text-gray-400">
          MERN Stack Developer | Quality & Food Safety Background
        </p>

        <div className="flex justify-center gap-4 my-3 text-xl">
          <FaFacebook />
          <FaLinkedin />
          <FaGithub />
        </div>

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
