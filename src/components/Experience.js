import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations

const experiences = [
  {
    title: "CO-OP Student - IT Department",
    company: "Blossom Group (Blooming Acres)",
    duration: "Jan 2025 - Apr 2025",
    tasks: [
      "Set up Ubiquiti network gear and prepared laptops for 10+ clients, reducing downtime by 15%.",
      "Managed Microsoft 365 accounts and resolved 95% of support tickets on time, boosting productivity. ",
      "Administered SharePoint libraries and permissions, supported server maintenance, and ensured 99.9% uptime. ",
    ],
  },
  {
    title: "Software Developer",
    company: "TNM Software Solutions Pvt. Ltd.",
    duration: "Aug 2022 - Jan 2024",
    tasks: [
      "Designed and programmed REST APIs using Node.js, Python, AWS Lambda, and DynamoDB, improving backend performance by 40%.",
      "Partnered with the Data Science team to integrate machine learning models into production workflows, automating analytics pipelines and boosting data throughput by 40%.",
      "Engineered real-time data pipelines using DynamoDB Streams and Elasticsearch, cutting query response times by 60% and enhancing the reliability of data delivery. ",
      "Implemented AWS SQS and CI/CD pipelines (GitHub – S3), accelerating deployment cycles by 60% and minimizing manual release errors.  ",
      "Collaborated in Agile sprints, contributing to mobile and web applications supporting thousands of active users with 99.8% uptime. ",
    ],
  },
  {
    title: "Web Developer - Intern",
    company: "TNM Software Solutions Pvt. Ltd.",
    duration: "Feb 2022 - Aug 2022",
    tasks: [
      "Enhanced application features by integrating code changes across sandbox and production environments, supporting 20+ feature releases. ",
      "Developed and documented REST APIs and GraphQL APIs using Express.js, and Swagger UI, improving application scalability and boosting user experience by 22%.",
      "Collaborated with senior developers on code reviews, improving code quality and reducing bugs by 75%.",
    ],
  },
  {
    title: "Full Stack Developer - Intern",
    company: "Pixnil Technologies",
    duration: "May 2021 - Jul 2021",
    tasks: [
      "Built REST APIs and MySQL schemas using Nest.js to support business workflows, enhancing order processing speed by 20%. ",
    ],
  },
  {
    title: "Full Stack Developer - Intern",
    company: "Node2Begin",
    duration: "Apr 2020 - Jul 2020",
    tasks: [
      "Engineered an e-learning platform facilitating online classes and real-time collaboration utilizing CodeIgniter, MySQL, Bootstrap, AJAX, and jQuery and tracked using GitHub, improving real-time collaboration features by 15%. ",
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
