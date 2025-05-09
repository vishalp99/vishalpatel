import { useEffect, useState } from "react";

export default function WelcomeScreen({ onComplete }) {
  const text = "Hello, My name is Vishal Patel.";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100); // Adjust speed of typing effect
      return () => clearTimeout(timeout);
    } else {
      setTimeout(onComplete, 1000); // After animation completes, go to main page
    }
  }, [index, onComplete, text]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 text-white text-4xl font-bold">
      <span className="tracking-wide">{displayText}</span>
    </div>
  );
}
