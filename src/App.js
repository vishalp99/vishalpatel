import { useState, useEffect } from "react";
import { Sun, Moon, Send } from "lucide-react";
import LoadingScreen from "./components/LoadingScreen";
import WelcomeScreen from "./components/WelcomePage";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Default from "./components/Default";

export default function Portfolio() {
  const [theme, setTheme] = useState("dark");
  const [query, setQuery] = useState(""); 
  const [finalValue, setFinalValue] = useState("");
  const [screen, setScreen] = useState("loading"); 
  const [animateMain, setAnimateMain] = useState(false); 

  const handleNextScreen = () => {
    if (screen === "loading") {
      setScreen("welcome");  
    } else if (screen === "welcome") {
      setTimeout(() => {
        setScreen("main");  
        setTimeout(() => setAnimateMain(true), 500); // Delay before fade-in
      }, 2000);  
    }
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleSubmit = () => {
    if (query.trim()) {
      setFinalValue(query.trim());
    } else {
      setFinalValue("");
    }
  };

  const renderContent = () => {
    switch (finalValue.toLowerCase()) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "education":
        return <Education />;
      case "skills":
        return <Skills />;
      case "experience":
        return <Experience />;
      default:
        return <Default />;
    }
  };

  if (screen === "loading") return <LoadingScreen onComplete={handleNextScreen} />;
  if (screen === "welcome") return <WelcomeScreen onComplete={handleNextScreen} />;

  const handleClick = () => {
    setQuery(''); // Set query to empty string
    handleSubmit(); // Call handleSubmit
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center px-4 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      
      {/* Navbar */}
      <div className="absolute top-4 left-4 text-3xl font-extrabold text-gray-900 dark:text-white pl-6 cursor-pointer" onClick={handleClick}>
        Vishal Patel
      </div>

      {/* Theme Toggle Button */}
      <div className="absolute top-4 right-4">
        <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      {/* Main Content Wrapper with ULTRA-SMOOTH FADE-IN */}
      <div className={`w-full max-w-5xl bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 flex flex-col space-y-6 transition-opacity duration-[4000ms] ease-in-out delay-500
        ${animateMain ? "opacity-100" : "opacity-0"}`}>
        
        {/* Render Content Based on Command */}
        {renderContent()}

        {/* Search Bar */}
        <div className="relative flex-grow mt-4 sm:mt-6">
          <input
            type="text"
            placeholder="Type a command..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
          <button onClick={handleSubmit} className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-600 dark:text-black-300">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
