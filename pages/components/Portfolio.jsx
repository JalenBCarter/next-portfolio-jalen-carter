import React from 'react'
import Image from 'next/image'
import mtns from '../../public/images/bg-image.jpg'

export const Portfolio = () => {

    let projects = [
        {
            "name": "Ski App",
            "description": "Hello World",
            "image": "/skiappcrud.png"
        },
        {
            "name": "Launchpad App",
            "description": "Hello World",
            "image": "/launchpadadmin.png"
        },
        {
            "name": "Ski App",
            "description": "Hello World",
            "image": "/techroster.png"
        },
        {
            "name": "Ski App",
            "description": "Hello World",
            "image": "/spacetagram.png"
        },
        {
            "name": "Music Player",
            "description": "Hello World",
            "image": "/spacetagram.png"
        },
    ]

    return (
        <div className="p-4 mt-[40px] w-[100%] flex flex-col items-center">
            <div className="text-3xl">Portfolio</div>
            <div className="border border-gray-300 my-3 w-[100%]"></div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 w-[100%]">
                {projects.map((proj, key) =>
                    <div key={key} class="rounded-lg shadow-md m-2 hover:shadow-lg">
                        {/* <a href="#">
                            <Image
                                src={mtns}
                                alt="project image"
                                className="rounded-t-lg"
                            />
                        </a> */}
                        <div className="w-[100%] h-[300px] rounded-t-lg" style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(${proj.image})`, backgroundSize: "cover"
                        }} ></div>
                        <div class="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{proj.name}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700">{proj.description}</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-200 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Portfolio;

