import React from 'react'

export const Skills = () => {

    let skills = [
        {
            "skill": "JavaScript",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolor dolorem porro doloribus itaque eaque numquam voluptas assumenda nisi autem.",
            "icon" : "devicon-javascript-plain"
        },
        {
            "skill": "Java",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolor dolorem porro doloribus itaque eaque numquam voluptas assumenda nisi autem.",
            "icon" : "devicon-java-plain"
        },
        {
            "skill": "Python",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolor dolorem porro doloribus itaque eaque numquam voluptas assumenda nisi autem.",
            "icon" : "devicon-python-plain"
        },
        {
            "skill": "C#",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolor dolorem porro doloribus itaque eaque numquam voluptas assumenda nisi autem.",
            "icon" : "devicon-csharp-plain"
        },
        {
            "skill": "PHP",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolor dolorem porro doloribus itaque eaque numquam voluptas assumenda nisi autem.",
            "icon" : "devicon-php-plain"
        },
        {
            "skill": "HTML",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolor dolorem porro doloribus itaque eaque numquam voluptas assumenda nisi autem.",
            "icon" : "devicon-html5-plain"
        },
        {
            "skill": "CSS",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolor dolorem porro doloribus itaque eaque numquam voluptas assumenda nisi autem.",
            "icon" : "devicon-css3-plain"
        },
        {
            "skill": "React",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolor dolorem porro doloribus itaque eaque numquam voluptas assumenda nisi autem.",
            "icon" : "devicon-react-plain"
        },
        {
            "skill": "MongoDB",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolor dolorem porro doloribus itaque eaque numquam voluptas assumenda nisi autem.",
            "icon" : "devicon-mongodb-plain"
        },
        {
            "skill": "MySQL",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolor dolorem porro doloribus itaque eaque numquam voluptas assumenda nisi autem.",
            "icon" : "devicon-mysql-plain"
        },
        {
            "skill": "Docker",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolor dolorem porro doloribus itaque eaque numquam voluptas assumenda nisi autem.",
            "icon" : "devicon-docker-plain"
        },
    ]

    return (
        <div className="p-4 mt-[40px] w-[100%] flex flex-col items-center bg-gray-800">
            {/* <div className="text-3xl">Technologies</div> */}
            {/* <div className="border border-gray-300 my-3 w-[100%]"></div> */}
            <div className="flex flex-wrap justify-center">
                {skills.map((skill, key) =>
                    <div key={key} className="m-4">
                        <i class={skill.icon + " text-5xl text-gray-400"}></i>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Skills;
