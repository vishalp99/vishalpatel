import React, { useState } from "react";
import { FaGithub, FaWindows, FaServer, FaAndroid } from "react-icons/fa";
import { FaDatabase, FaCloud, FaCode, FaNetworkWired, FaToolbox, FaAws, FaJava, FaHtml5, FaEye, FaMicrosoft } from "react-icons/fa";
import { VscAzure, VscCode } from "react-icons/vsc";
import { SiKibana, SiServerless, SiScikitlearn, SiVirtualbox, SiVmware, SiLetsencrypt, SiMetasploit, SiPaloaltonetworks, SiPfsense, SiCisco, SiMysql, SiPostgresql, SiMongodb, SiPython, SiCplusplus, SiNodedotjs, SiReact, SiDocker, SiTensorflow, SiWireshark, SiElastic, SiAmazondynamodb, SiFirebase, SiJavascript, SiTailwindcss, SiPostman, SiCypress, SiKalilinux  } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { GrSystem } from "react-icons/gr";

const Skills = () => {
    const [skillCategory, setSkillCategory] = useState(null);

    const toggleSkillCategory = (category) => {
        setSkillCategory(skillCategory === category ? null : category);
      };

      return (
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Skills</h2>
          <p className="text-lg sm:text-xl max-w-5xl mb-6 text-center mx-auto">
            Here are my technical skills, categorized for easy reference.
          </p>
    
          {/* Scrollable Wrapper */}
          <div className="max-h-[60vh] overflow-y-auto px-2 space-y-4">
            
            {/* Cloud Computing */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <button
                onClick={() => toggleSkillCategory("cloud")}
                className="w-full text-left text-xl font-semibold text-gray-900 dark:text-white flex justify-between"
              >
                <FaCloud className="inline-block mr-2" /> Cloud Computing
                <span>{skillCategory === "cloud" ? "▲" : "▼"}</span>
              </button>
    
              {skillCategory === "cloud" && (
                <div className="mt-3 space-y-4">
                  <div className="flex flex-wrap gap-4 p-2">
                    <div className="flex items-center space-x-2">
                      <FaAws className="text-yellow-500 text-2xl" />
                      <span className="dark:text-white">AWS</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <VscAzure className="text-blue-500 text-2xl" />
                      <span className="dark:text-white">Azure Cloud</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiElastic className="text-blue-500 text-2xl" />
                      <span className="dark:text-white">Elasticsearch Cloud</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
    
            {/* Databases */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <button
                onClick={() => toggleSkillCategory("databases")}
                className="w-full text-left text-xl font-semibold text-gray-900 dark:text-white flex justify-between"
              >
                <FaDatabase className="inline-block mr-2" /> Databases
                <span>{skillCategory === "databases" ? "▲" : "▼"}</span>
              </button>
    
              {skillCategory === "databases" && (
                <div className="mt-3 space-y-4">
                  <div className="flex flex-wrap gap-4 p-2">
                    <div className="flex items-center space-x-2">
                      <SiMysql className="text-blue-500 text-2xl" />
                      <span className="dark:text-white">MySQL</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiPostgresql className="text-blue-600 text-2xl" />
                      <span className="dark:text-white">PostgreSQL</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiAmazondynamodb  className="text-green-500 text-2xl" />
                      <span className="dark:text-white">DynamoDB</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiFirebase  className="text-green-500 text-2xl" />
                      <span className="dark:text-white">Firebase</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiElastic className="text-green-500 text-2xl" />
                      <span className="dark:text-white">Elastic DB</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiMongodb className="text-green-500 text-2xl" />
                      <span className="dark:text-white">MongoDB</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
    
            {/* Programming */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <button
                onClick={() => toggleSkillCategory("programming")}
                className="w-full text-left text-xl font-semibold text-gray-900 dark:text-white flex justify-between"
              >
                <FaCode className="inline-block mr-2" /> Programming
                <span>{skillCategory === "programming" ? "▲" : "▼"}</span>
              </button>
    
              {skillCategory === "programming" && (
                <div className="mt-3 space-y-4">
                  <div className="flex flex-wrap gap-4 p-2">
                    <div className="flex items-center space-x-2">
                      <SiPython className="text-yellow-400 text-2xl" />
                      <span className="dark:text-white">Python</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiCplusplus className="text-blue-600 text-2xl" />
                      <span className="dark:text-white">C/C++</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiJavascript className="text-blue-400 text-2xl" />
                      <span className="dark:text-white">Javascript</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiNodedotjs className="text-green-500 text-2xl" />
                      <span className="dark:text-white">Node.js</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiReact className="text-blue-400 text-2xl" />
                      <span className="dark:text-white">React.js</span>
                    </div>
                    {/* <div className="flex items-center space-x-2">
                      <FaJava className="text-blue-400 text-2xl" />
                      <span className="dark:text-white">Java</span>
                    </div> */}
                    <div className="flex items-center space-x-2">
                      <FaCode className="text-blue-400 text-2xl" />
                      <span className="dark:text-white">Bash</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaHtml5 className="text-blue-400 text-2xl" />
                      <span className="dark:text-white">Html5</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiTailwindcss className="text-blue-400 text-2xl" />
                      <span className="dark:text-white">CSS</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
    
            {/* Networking */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <button
                onClick={() => toggleSkillCategory("networking")}
                className="w-full text-left text-xl font-semibold text-gray-900 dark:text-white flex justify-between"
              >
                <FaNetworkWired className="inline-block mr-2" /> Networking
                <span>{skillCategory === "networking" ? "▲" : "▼"}</span>
              </button>
    
              {skillCategory === "networking" && (
                <div className="mt-3 space-y-4">
                  <div className="flex flex-wrap gap-4 p-2">
                  <div className="flex items-center space-x-2">
                      <FaNetworkWired className="text-blue-500 text-2xl" />
                      <span className="dark:text-white">Infrastructure </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiWireshark className="text-blue-500 text-2xl" />
                      <span className="dark:text-white">Wireshark</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiCisco className="text-blue-500 text-2xl" />
                      <span className="dark:text-white">Cisco Packet Tracer</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiPfsense className="text-blue-500 text-2xl" />
                      <span className="dark:text-white">Pfsense</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiPaloaltonetworks className="text-blue-500 text-2xl" />
                      <span className="dark:text-white">Paloaltonetworks Firewall</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaEye className="text-blue-500 text-2xl" />
                      <span className="dark:text-white">Namp</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiMetasploit className="text-blue-500 text-2xl" />
                      <span className="dark:text-white">Metasploit</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiLetsencrypt className="text-blue-500 text-2xl" />
                      <span className="dark:text-white">Cryptography</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
    
            {/* Platforms and Tools */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <button
                onClick={() => toggleSkillCategory("tools")}
                className="w-full text-left text-xl font-semibold text-gray-900 dark:text-white flex justify-between"
              >
                <FaToolbox className="inline-block mr-2" /> Platforms & Tools
                <span>{skillCategory === "tools" ? "▲" : "▼"}</span>
              </button>
    
              {skillCategory === "tools" && (
                <div className="mt-3 space-y-4">
                  <div className="flex flex-wrap gap-4 p-2">
                    <div className="flex items-center space-x-2">
                      <SiDocker className="text-blue-600 text-2xl" />
                      <span className="dark:text-white">Docker</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiTensorflow className="text-yellow-400 text-2xl" />
                      <span className="dark:text-white">TensorFlow</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaMicrosoft className="text-yellow-400 text-2xl" />
                      <span className="dark:text-white">Microsoft Office/365</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaGithub className="text-yellow-400 text-2xl" />
                      <span className="dark:text-white">Git and GitHub</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiServerless className="text-yellow-400 text-2xl" />
                      <span className="dark:text-white">Serverless</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiKibana className="text-yellow-400 text-2xl" />
                      <span className="dark:text-white">Kibana</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiPostman className="text-yellow-400 text-2xl" />
                      <span className="dark:text-white">Postman</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <VscCode className="text-yellow-400 text-2xl" />
                      <span className="dark:text-white">VS Code</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DiVisualstudio className="text-yellow-400 text-2xl" />
                      <span className="dark:text-white">Visual Studio</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiCypress className="text-yellow-400 text-2xl" />
                      <span className="dark:text-white">Cypress</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiScikitlearn className="text-yellow-400 text-2xl" />
                      <span className="dark:text-white">Scikit-Learn</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiVmware className="text-blue-500 text-2xl" />
                      <span className="dark:text-white">VMware</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiVirtualbox className="text-blue-500 text-2xl" />
                      <span className="dark:text-white">VirtualBox</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* OS */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <button
                onClick={() => toggleSkillCategory("os")}
                className="w-full text-left text-xl font-semibold text-gray-900 dark:text-white flex justify-between"
              >
                <GrSystem className="inline-block mr-2" /> Operating Systems
                <span>{skillCategory === "tools" ? "▲" : "▼"}</span>
              </button>
    
              {skillCategory === "os" && (
                <div className="mt-3 space-y-4">
                  <div className="flex flex-wrap gap-4 p-2">
                    <div className="flex items-center space-x-2">
                      <SiKalilinux className="text-blue-600 text-2xl" />
                      <span className="dark:text-white">Kali Linux/ UNIX</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaWindows className="text-yellow-400 text-2xl" />
                      <span className="dark:text-white">Windows 8,9,10,11</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaServer className="text-yellow-400 text-2xl" />
                      <span className="dark:text-white">Windows Server</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <VscAzure className="text-blue-500 text-2xl" />
                      <span className="dark:text-white">Active Directory</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaAndroid className="text-yellow-400 text-2xl" />
                      <span className="dark:text-white">Android</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
};

export default Skills;