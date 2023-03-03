import React from 'react'
import Image from 'next/image'
import mtns from '../../public/images/bg-image.jpg'

export const Portfolio = () => {

    let technologies = [
        {
            "id": 1,
            "name": "HTML5",
        },
        {
            "id": 2,
            "name": "CSS3",
        },
        {
            "id": 3,
            "name": "SASS",
        },
        {
            "id": 4,
            "name": "Bootstrap CSS",
        },
        {
            "id": 5,
            "name": "Tailwind CSS",
        },
        {
            "id": 6,
            "name": "JavaScript",
        },
        {
            "id": 7,
            "name": "TypeScript",
        },
        {
            "id": 8,
            "name": "Python",
        },
        {
            "id": 9,
            "name": "Java",
        },
        {
            "id": 10,
            "name": "C#",
        },
        {
            "id": 11,
            "name": "PHP",
        },
        {
            "id": 12,
            "name": "SQL",
        },
        {
            "id": 13,
            "name": "MySQL",
        },
        {
            "id": 14,
            "name": "NoSQL",
        },
        {
            "id": 15,
            "name": "React.js",
        },
        {
            "id": 16,
            "name": "Next.js",
        },
        {
            "id": 17,
            "name": ".NET Framework",
        },
        {
            "id": 18,
            "name": "LAMP Stack",
        },
        {
            "id": 19,
            "name": "MERN Stack",
        },
        {
            "id": 20,
            "name": "NGINX Stack",
        },
        {
            "id": 21,
            "name": "CSHTML",
        },
        {
            "id": 22,
            "name": "MongoDB",
        },
        {
            "id": 23,
            "name": "Express.js",
        },
    ]

    let projects = [
        {
            "name": "Eclipse",
            "description": "The project started it all... My first experience with javascript. A dynamic piece of interactive art. Though this is a simple three-file DOM manipulation piece, this is where my love for art became fused that of programming.",
            "image": "/eclipse.png",
            "tech_ids": [
                1,
                2,
                6,
            ]
        },
        {
            "name": "Ski App",
            "description": "This project is a collaboration for Ski Wentworth to develop an application to allow smoother member sign-in, data collection and analysis.",
            "image": "/skiappcrud.png",
            "tech_ids": [
                1,
                4,
                11,
                13,
            ]
        },
        {
            "name": "Launchpad App",
            "description": "A full-stack application to display all your important links for easy access. The application includes a public end for displaying all the links and an administration end for modifying the link content.",
            "image": "/launchpadadmin.png",
            "tech_ids": [
                17,
                10,
                21,
                13,
                4,

            ]
        },
        {
            "name": "Tech Roster App",
            "description": "A MERN-stack, application containing two no-SQL databases. The application includes all CRUD functionality for both technologies and the couses in which they are used.",
            "image": "/techroster.png",
            "tech_ids": [
                19,
                15,
                7,
                1,
                5,
            ]
        },
        {
            "name": "Carbon Calculator Frontend",
            "description": "A frontend project where I designed and implemented the UI for Acuicy's carbon calculator.",
            "image": "/acuicy.png",
            "tech_ids": [
                15,
                6,
                2,
                5,
            ]
        },
        {
            "name": "Spacetagram",
            "description": "An Instagram-like web application that utilizes NASA’s “Image of the Day” API to build that displays post data for the current day and allows the user to view historical posts since the API has been active.",
            "image": "/spacetagram.png",
            "tech_ids": [
                1,
                2,
                6,
            ]
        },
        {
            "name": "Photo Album",
            "description": "Another Instagram-like web application for displaying photos, but this time, you can leave comments and seek through the photo collection with the thumbnail display.",
            "image": "/photoalbum.png",
            "tech_ids": [
                19,
                7,
                22,
                15,
                23,
                14,
                5,
            ]
        },
        {
            "name": "Weather App",
            "description": "A weather app that allows you to select a location and get various weather data based on the returned JSON from the Openweathermap API.",
            "image": "/weatherapp.png",
            "tech_ids": [
                1,
                2,
                6,
            ]
        },
    ]

    return (
        <div id="portfolio" className="p-4 w-[100%] flex flex-col items-center">
            <div className="text-3xl my-[50px]">Here are some of my projects!</div>
            {/* <div className="border border-gray-300 my-3 w-[100%]"></div> */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 w-[100%]">
                {projects.map((proj, key) =>
                    <div key={key} class="m-4 rounded-lg customCard border border-gray-300">
                        <div className="w-[100%] h-[300px] rounded-t-lg" style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 50, 0.2)), url(${proj.image})`, backgroundSize: "cover", backgroundPosition: "center"
                        }} ></div>
                        <div class="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{proj.name}</h5>
                            <div className="flex flex-wrap pb-4">
                                {
                                    proj.tech_ids?.map((tech_id, key) =>

                                        <div key={key} className="px-2 mr-1 mt-1 bg-gray-300 rounded">
                                            {technologies.find(x => x.id === tech_id).name}
                                        </div>

                                    )
                                }
                            </div>
                            <p className="mb-3 font-normal text-gray-700">{proj.description}</p>
                        </div>
                    </div>
                )}
            </div>
            <div className="text-3xl my-[50px]">And more to come...</div>
        </div>
    )
}

export default Portfolio;

