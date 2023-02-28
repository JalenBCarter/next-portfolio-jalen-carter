import React from 'react'

export const About = () => {
    return (
        <div className="container mx-auto flex flex-col items-center my-[100px]">
            <div className='headshot my-5'></div>

            <div className="text-justify">
                <div className="text-xl">What I'm all about</div>
                <div className="border border-gray-300 my-3"></div>
                <div>
                    My goal as a junior developer is to leverage my skills to create impactful digital experiences for my clients. With a solid understanding of programming languages and a passion for innovation, I am eager to collaborate with others to design and develop high-quality software solutions that meet client requirements. I am dedicated to staying current with emerging technologies to deliver cutting-edge solutions that exceed expectations.
                </div>
            </div>
        </div>
    )
}

export default About;
