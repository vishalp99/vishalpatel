import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations

const experiences = [
  {
    title: "CO-OP Student - IT Department",
    company: "Blossom Group (Blooming Acres)",
    duration: "Jan 2025 - Apr 2025",
    tasks: [
      "Managed user accounts and troubleshooting in Microsoft 365.",
      "Supported SharePoint document libraries and access control.",
      "Maintained Ubiquiti network devices (routers, access points).",
      "Set up new laptops and provided IT support.",
      "Assisted with server maintenance and backup tasks.",
      "Provided general IT support and helpdesk services."
    ],
  },
  {
    title: "Software Developer",
    company: "TNM Software Solutions Pvt. Ltd.",
    duration: "Aug 2022 - Jan 2024",
    tasks: [
      "Developed a full-fledged backend system following Agile methodologies, implementing RESTful APIs, integrating databases, and performing thorough testing using Postman and automated test suites to ensure reliability and scalability.",
      "Developed REST APIs using Node.js, Python, AWS Lambda, and DynamoDB.",
      "Integrated Elasticsearch Cloud with DynamoDB Streams to enable real-time data indexing and leveraged Kibana for interactive data visualization and monitoring.",
      "Developed an AWS SQS-based pipeline to automate data ingestion, improving processing efficiency, and implemented additional automation workflows to streamline backend operations.",
      "Integrated ML models with APIs for predictive analytics.",
      "Built a CI/CD pipeline for automated deployment using GitHub Actions and AWS, leveraging OIDC authentication for secure and seamless integration.",
      "Built an MS Teams bot using Azure Health Bot service.",
    ],
  },
  {
    title: "Web Developer - Intern",
    company: "TNM Software Solutions Pvt. Ltd.",
    duration: "Feb 2022 - Aug 2022",
    tasks: [
      "Built REST APIs using Node.js, Express.js, and GraphQL.",
      "Worked in sandbox and production environments to enhance API functionalities.",
      "Collaborated with developers to refine and optimize web application architecture.",
    ],
  },
  {
    title: "Full Stack Developer - Intern",
    company: "Pixnil Technologies",
    duration: "May 2021 - Jul 2021",
    tasks: [
      "Developed APIs and database structures using Nest.js.",
      "Used React, MySQL, GitHub, and Postman for full-stack development.",
    ],
  },
  {
    title: "Full Stack Developer - Intern",
    company: "Node2Begin",
    duration: "Apr 2020 - Jul 2020",
    tasks: [
      "Developed an online learning platform using CodeIgniter, MySQL, Bootstrap, AJAX, and jQuery.",
      "Built features for virtual classrooms, resource sharing, and communication between students and faculty.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="flex flex-col px-6 py-6">
      {/* Header */}
      <motion.h2
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      {/* Scrollable Experience Section */}
      <div className="max-h-[60vh] overflow-y-auto px-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Job Title & Company */}
            <div className="flex justify-between items-center">
              <div className="flex flex-col text-left">
                <span className="text-xl font-semibold">{exp.title}</span>
                <span className="text-md text-gray-600">{exp.company}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-sm text-gray-500">{exp.duration}</span>
              </div>
            </div>

            {/* Responsibilities List */}
            <ul className="list-disc pl-5 mt-3 text-white-700">
              {exp.tasks.map((task, idx) => (
                <motion.li key={idx} className="mb-1">
                  {task}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
