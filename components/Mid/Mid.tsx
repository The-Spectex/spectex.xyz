'use client'
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic"; // Import dynamic from Next.js
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS library

const MonacoEditor = dynamic(() => import("react-monaco-editor"), {
  ssr: false, // Ensure MonacoEditor is only loaded on the client side
});

const Mid = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []);

  const [code, setCode] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Spectex</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        header {
            background-color: #007bff;
            color: #fff;
            padding: 20px;
            text-align: center;
        }

        h1 {
            font-size: 30px; /* Adjust font size for smaller screens */
            margin-bottom: 10px;
        }

        p {
            font-size: 16px; /* Adjust font size for smaller screens */
            line-height: 1.6;
            margin: 10px; /* Adjust margin for smaller screens */
        }

        hr {
            border: 1px solid #007bff;
            margin: 10px 0; /* Adjust margin for smaller screens */
        }

        footer {
            background-color: #007bff;
            color: #fff;
            text-align: center;
            padding: 10px 0;
        }
    </style>
</head>
<body>
    <header data-aos="fade-up">
        <h1>Your Business, Our Expertise</h1>
    </header>

    <main>
        <p data-aos="fade-up" data-aos-duration="1000">Welcome to Spectex, where we turn your business ideas into exceptional digital experiences. With innovative websites and applications, we ensure your success in the digital realm.</p>
        <hr data-aos="fade-up" data-aos-duration="1000">
        <p data-aos="fade-up" data-aos-duration="1000">At Spectex, we're pioneers in web development and digital solutions. Our passionate team crafts captivating online solutions to empower businesses like yours. Join us on this journey of digital innovation!</p>
    </main>

    <footer data-aos="fade-up">
        <p>Ready to transform your business? Hop on board with Spectex!</p>
    </footer>
</body>
</html>
`);

  const handleEditorChange = (newCode: string) => {
    setCode(newCode);
  };

  const editorOptions = {
    language: "html",
    theme: "vs-dark-plus", // Change to your preferred darkish theme
    automaticLayout: true,
  };

  return (
    <section className="py-5 md:py-20"> {/* Adjust padding for smaller screens */}
      <div className="mx-5 md:mx-20"> {/* Adjust margin for smaller screens */}
        <div>
          <div className="font-semibold" data-aos="fade-right">
            Web Development
          </div>
          <div data-aos="fade-in">
            <p className="text-2xl md:text-4xl pt-2 lg:mr-96 md:pt-5"> {/* Adjust font size and padding for smaller screens */}
              Our team of <span className="text-green-400">skilled</span> developers is dedicated to crafting{" "}
              <span className="text-blue-500">dynamic</span> and{" "}
              <span className="text-purple-600">responsive</span> websites tailored to your unique business needs.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-5 md:mx-20 mt-3 md:mt-5"> {/* Adjust margin and padding for smaller screens */}
        <div className="flex flex-col md:flex-row"> {/* Adjust layout for smaller screens */}
          <div className="w-full md:w-1/2 pr-0 md:pr-2"> {/* Adjust width and padding for smaller screens */}
            <div className="bg-gray-600 dark:bg-gray-800 rounded-md p-4 md:p-6" data-aos="fade-right">
              <MonacoEditor
                width="100%"
                height="400"// Adjust height for smaller screens
                value={code}
                options={editorOptions}
                onChange={handleEditorChange}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-2 mt-3 md:mt-0"> {/* Adjust width, padding, and margin for smaller screens */}
            <div className="bg-gray-600 dark:bg-gray-800 rounded-md p-4 md:p-6" data-aos="fade-down">
              {/* Render the live preview */}
              <iframe
                srcDoc={code}
                width="100%"
                height="400" // Adjust height for smaller screens 
                title="Live Preview"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mid;
