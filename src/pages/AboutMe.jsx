
import React from "react";
import { Code2, Coffee, Lightbulb } from 'lucide-react';
import SectionTitle from "../components/common/Title";
import FeatureCard from "../components/common/FeatureCard";
const  features = [
    {Icon : Code2,
     Title :"Clean Code",
     Desc :"Writing maintainable and scalable code that stands the test of time",
    },
{Icon :Lightbulb,
    Title:"Problem Solving",
    Desc : "Turning complex challenges into elegant and efficient solutions",
 },
{Icon:Coffee,
    Title:"Continuous Learning",
    Desc:"Always exploring new technologies and best practices",
},]

function AboutMe() {
    return (
        <>
            <div className=" justify-center mt-20">
                <SectionTitle
                    title="About Me"/>
                <div className="flex gap-16 mt-20 px-10  m-32  items-center  ">
                    <div className="w-1/2 m-5 flex flex-col justify-center space-y-6 text-gray-600 text-lg">
                        <p className=".text-gray-400"> I'm a passionate software developer with 5+ years of experience building
                            web applications that make a difference. I love turning complex problems
                            into simple, beautiful, and intuitive designs.</p>
                        <p>   When I'm not coding, you'll find me exploring new technologies, contributing
                            to open source projects, or sharing knowledge with the developer community.</p>
                        <p>    I believe in writing clean, maintainable code and creating products that
                            users love to interact with.</p>
                    </div>
                    <div className="w-1/2 space-y-6">
                       {features.map((item,index)=>(
                        <FeatureCard key={index}{...item}/>)
                       )}
                    </div>
                </div>
            </div>
        </>
    );
}
export default AboutMe;