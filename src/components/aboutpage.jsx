import React from "react";

const About1 = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Me</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">Hey! I'm Manaswee, Roll Number 210104055. I've developed this newsletter app using React. I fetched the API data from NewsAPI and displayed the top headlines using the fetch function in React/JSX. To enhance code quality, I divided the webpage into multiple components, allowing for component reusability. Additionally, I implemented error handling. In the event of a webpage failure due to an API error, an error page will be displayed, which is itself a React component located within the component folder.</p>
                </div>
            </div>

           
        </div>
    );
};

export default About1;
