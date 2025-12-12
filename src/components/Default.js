import React from "react";

const Default = () => {

    return (
        <>
      {/* Welcome to My Portfolio */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p className="text-lg sm:text-xl max-w-5xl mb-6 text-center mx-auto">
              I am an AI and Data Science enthusiast with expertise in machine learning, deep learning, and data-driven solutions. I specialize in data cleaning, preprocessing, and building predictive models while leveraging my skills in cloud solutions, backend development, and cybersecurity to deliver innovative and impactful results.
        </p>
      </div>

      {/* Question-Answer Template */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-black">
          Have Any Questions?
        </h2>
        <p className="text-lg font-semibold mb-4 text-gray-700 dark:text-black-300">
        Enter the commands below in the search bar to find your answers:
        </p>
        <div className="text-gray-700 space-y-2">
          <p>
            <span className="font-semibold text-blue-500">About</span> = Get an overview of my background and connect with me through my social profiles.
          </p>
          <p>
            <span className="font-semibold text-blue-500">Experience</span> = Explore my previous work experiences and the impact I’ve made.
          </p>
          <p>
            <span className="font-semibold text-blue-500">Skills</span> = Discover the technical skills I have developed over the years.
          </p>
          <p>
            <span className="font-semibold text-blue-500">Projects</span> = View some of my previous works and projects to see how I contribute.
          </p>
          <p>
            <span className="font-semibold text-blue-500">Education</span> = Review my educational background and the qualifications I’ve attained.
          </p>
          
        </div>
      </div>
    </>
      );
};

export default Default;