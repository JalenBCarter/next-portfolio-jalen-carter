import React from 'react'
import Image from 'next/image'
import mtns from '../../public/images/bg-image.jpg'

export const Portfolio = () => {
    
    let projects = [
        {
            "name": "Eclipse",
            "description": "The project started it all... My first experience with javascript. A dynamic piece of interactive art. Though this is a simple three-file DOM manipulation piece, this is where my love for art became fused that of programming.",
            "image": "/eclipse.png"
        },
        {
            "name": "Ski App",
            "description": "This project was a collaboration for Ski Wentworth to develop an application to allow smoother member sign-in, data collection and analysis.",
            "image": "/skiappcrud.png"
        },
        {
            "name": "Launchpad App",
            "description": "Built a full-stack application to display all your important links for easy access. The application includes a public end for displaying all the links and an administration end for modifying the link content.",
            "image": "/launchpadadmin.png"
        },
        {
            "name": "Tech Roster App",
            "description": "A MERN-stack, application containing two no-SQL databases. The application includes all CRUD functionality for both technologies and the couses in which they are used.",
            "image": "/techroster.png"
        },
        {
            "name": "Spacetagram",
            "description": "An Instagram-like web application that utilizes NASA’s “Image of the Day” API to build that displays post data for the current day and allows the user to view historical posts since the API has been active.",
            "image": "/spacetagram.png"
        },
    ]

    return (
        <div id="portfolio" className="p-4 mt-[40px] w-[100%] flex flex-col items-center">
            <div className="text-3xl mt-[50px]">Here are some of my projects!</div>
            <div className="border border-gray-300 my-3 w-[100%]"></div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 w-[100%]">
                {projects.map((proj, key) =>
                    <div key={key} class="rounded-lg shadow-md m-2 hover:shadow-lg">
                        <div className="w-[100%] h-[300px] rounded-t-lg" style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url(${proj.image})`, backgroundSize: "cover", backgroundPosition: "center"
                        }} ></div>
                        <div class="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{proj.name}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700">{proj.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Portfolio;

