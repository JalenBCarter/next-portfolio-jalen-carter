import React from 'react'

export const About = () => {
    return (
        <div className="px-[15px] sm:px-[50px] lg:px-[50px] mx-auto flex flex-col lg:flex-row items-center justify-around my-[100px] ">
            <div className='headshot my-5'></div>

            <div className="lg:w-[70%]">
                <div className="text-xl lg:w-[50%]">What I'm all about</div>
                <div className="border border-gray-500 my-3"></div>
                <div className='text-justify text-gray-500'>
                    My goal as a junior developer is to leverage my skills to create impactful digital experiences 
                    for my clients. With a solid understanding of programming languages and a passion for innovation, 
                    I am eager to collaborate with others to design and develop high-quality software solutions that meet 
                    client requirements. I am dedicated to staying current with emerging technologies to deliver cutting-edge 
                    solutions that exceed expectations.
                </div>
            </div>
        </div>
    )
}

export default About;
