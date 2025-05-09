import React, { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className="text-center">
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>
      <motion.p
        className="text-lg sm:text-xl max-w-5xl mb-6 text-center mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Explore some of my projects where I worked on various web development, cybersecurity, and AI & ML technologies.
      </motion.p>

      {/* Scrollable Container */}
      <div className="max-h-[60vh] overflow-y-auto px-2 space-y-4">
        {[
          {
            category: "development",
            title: "Development Projects",
            projects: [
              {
                name: "E-Course",
                description:
                  "An online education management system for students & faculty. Built with CodeIgniter, MySQL, AJAX, and jQuery.",
                link: "https://github.com/vishalp99/E_Course",
              },
              {
                name: "MyTunes",
                description: "A music streaming app using Spotify Web API.",
                link: "https://github.com/vishalp99/MyTunes",
              },
              {
                name: "Client Server Socketprogramming",
                description: "Developed a real-time chat application using C and TCP/IP socket programming. ",
                link: "https://github.com/vishalp99/socketProgramming",
              },
            ],
          },
          {
            category: "cybersecurity",
            title: "Cybersecurity Projects",
            projects: [
              {
                name: "Secure LAMP Stack Deployment",
                description:
                  "Designed and deployed a secure LAMP (Linux, Apache, MySQL, PHP) server environment on Ubuntu Server 22.04 LTS to support web applications for students and instructors.  Implemented comprehensive hardening techniques, including CIS Benchmark compliance, strict firewall rules, secure SSH configurations, and strong password policies. Utilized Ansible to automate and maintain consistent security configurations across the system.",
                link: "https://github.com/yourusername/LAMP-Security",
              },
              {
                name: "NDG Online Labs – Palo Alto Firewall",
                description:
                  "Completed all modules of the NDG Palo Alto Firewall online labs, gaining hands-on experience in configuring and managing next-generation firewalls. The labs covered key topics such as firewall policies, NAT, application and user identification, security profiles, and threat prevention. This practical experience enhanced my understanding of network security, traffic control, and best practices in deploying Palo Alto firewalls in real-world environments.",
                link: "https://github.com/yourusername/LAMP-Security",
              },
              {
                name: "Log Analysis with pfSense, WebHost, LogHost, NMSHost, and LogAnalyzer",
                description:
                  "Completed hands-on labs focused on log analysis using pfSense, WebHost, LogHost, NMSHost, and LogAnalyzer. Configured and analyzed network and system logs to identify security events, monitor traffic, and troubleshoot issues. ",
                link: "https://github.com/yourusername/LAMP-Security",
              },
              {
                name: "Attacker and Defender Setup: Slowloris DoS Attack Analysis",
                description:
                  "Set up attacker and defender environments to analyze a Slowloris DoS attack. Simulated the attack using Kali Linux on a WebHost and implemented defensive measures like rate limiting and WAF rules. Analyzed the effectiveness of these defenses in mitigating the attack.",
                link: "https://github.com/yourusername/LAMP-Security",
              },
              {
                name: "Case Study on Knight Capital Trading Error (2012)",
                description:
                  "Contributed to a group project on the Knight Capital trading error of 2012, focusing on Incident Response (IR) and Disaster Recovery (DR). Analyzed the failure points and identified key areas where improvements could have been made, particularly in system testing, risk management, and high availability strategies to prevent the costly error.",
                link: "https://github.com/yourusername/LAMP-Security",
              },
              {
                name: "Digital Forensics and Steganography Analysis",
                description:
                  "As part of the course, utilized Autopsy and ProDiscover tools for digital forensics analysis to examine and extract evidence from disk images. Additionally, performed steganography tasks to hide and uncover data within files, enhancing my skills in both digital forensics and data concealment techniques.",
                link: "https://github.com/yourusername/LAMP-Security",
              },
            ],
          },
          {
            category: "ai",
            title: "AI & ML Projects",
            projects: [
              {
                name: "FoodBIT",
                description:
                  "An AI-powered food recognition system using TensorFlow.js & Node.js for food image analysis and calorie tracking.",
                link: "https://github.com/vishalp99/FoodBIT",
              },
            ],
          },
        ].map(({ category, title, projects }) => (
          <div key={category} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            {/* Category Button */}
            <button
              onClick={() => toggleCategory(category)}
              className="w-full text-left text-xl font-semibold text-gray-900 dark:text-white flex justify-between"
            >
              {title}
              <span>{openCategory === category ? "▲" : "▼"}</span>
            </button>

            {/* Animate Dropdown */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openCategory === category ? "auto" : 0,
                opacity: openCategory === category ? 1 : 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {openCategory === category && (
                <div className="mt-3 space-y-4">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      className="p-4 bg-gray-200 dark:bg-gray-700 rounded-md"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.2 }}
                    >
                      <h3 className="text-lg font-semibold dark:text-white">{project.name}</h3>
                      <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                      {openCategory !== "cybersecurity" &&
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                      >
                        View on GitHub
                      </a>
}
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
