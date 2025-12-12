import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Science (Information Technology)",
    institution: "Veer Narmad South Gujarat University, Gujarat, IN",
    gpa: "7.5/10.0",
    duration: "June 2017 - July 2020",
  },
  {
    degree: "Master of Science (Information Technology)",
    institution:
      "Dhirubhai Ambani Institute of Information and Communication Technology, Gujarat, IN",
    gpa: "8.11/10.0",
    duration: "June 2020 - May 2022",
  },
  {
    degree: "Cybersecurity, Post-Graduation",
    institution: "Georgian College, Barrie, ON",
    gpa: "4.0/4.0",
    duration: "May 2024 - April 2025",
  },
  {
    degree:
      "Artificial Intelligence – Architecture, Design, and Implementation, Post-Graduation",
    institution: "Georgian College, Barrie, ON",
    gpa: "In Progress",
    duration: "May 2025 - December 2025",
  },
];

const Education = () => {
  return (
    <motion.div
      className="text-center mt-8 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      {/* Scrollable Content */}
      <div className="max-h-[60vh] overflow-y-auto px-2 space-y-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="text-left">
              <span className="text-xl font-semibold">{edu.degree}</span>
              <span className="block text-md text-gray-600">
                {edu.institution}
              </span>
            </div>

            <div className="text-right">
              {/* <span className="text-sm text-gray-500 block">{`GPA: ${edu.gpa}`}</span> */}
              <span className="text-sm text-gray-500">{edu.duration}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
