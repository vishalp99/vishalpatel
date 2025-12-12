import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const About = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("vishalnpatel999@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 3000); // Hide after 3 seconds
  };

  return (
    <div className="text-center">
      {/* Header with Fade-in + Upward Movement */}
      <h2 className="text-4xl font-bold mb-4 opacity-0 translate-y-4 animate-fadeInUp">
        About Me
      </h2>

      {/* Paragraphs with Delay */}
      <p className="text-lg sm:text-xl max-w-5xl mb-6 text-center mx-auto opacity-0 translate-y-4 animate-fadeInUp delay-200">
        Hi, I'm <b>Vishal Patel</b>, an AI and Machine Learning enthusiast specializing in deep learning, computer vision, and reinforcement learning. I build intelligent systems, explore end-to-end ML pipelines, and apply AI to solve real-world problems. While leveraging my experience in cloud, backend engineering, and cybersecurity to deliver robust, production ready solutions.
      </p>

      <p className="text-lg sm:text-xl max-w-5xl mb-6 text-center mx-auto opacity-0 translate-y-4 animate-fadeInUp delay-400">
        Thank you for taking the time to explore my portfolio! I hope you found it insightful. Feel free to connect with me through my social media or email below—I’d love to hear from you!
      </p>

      {/* Social Icons with Fade-in + Scale Animation */}
      <div className="flex justify-center space-x-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/vishal-patel99/"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-0 scale-90 animate-fadeInScale delay-600"
        >
          <FaLinkedin className="w-8 h-8 text-blue-700 hover:text-blue-500 transition duration-300" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/vishalp99"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-0 scale-90 animate-fadeInScale delay-800"
        >
          <FaGithub className="w-8 h-8 text-gray-700 hover:text-black transition duration-300" />
        </a>

        {/* Email */}
        <div className="relative opacity-0 scale-90 animate-fadeInScale delay-1000">
          <a
            href="mailto:vishalnpatel999@gmail.com"
            onClick={(e) => {
              e.preventDefault(); // Prevent the default mailto behavior
              handleEmailClick(); // Copy the email address
            }}
          >
            <FaEnvelope className="w-10 h-10 text-red-500 hover:text-red-300 transition duration-300" />
          </a>

          {/* Copied Popup Message */}
          {emailCopied && (
            <div className="absolute left-full top-0 ml-2 bg-green-500 text-white text-xs p-2 rounded-lg shadow-md">
              <p>Copied!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
