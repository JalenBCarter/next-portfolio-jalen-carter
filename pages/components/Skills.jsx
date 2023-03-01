import React from 'react'

export const Skills = () => {

    let skills = [
        {
            "skill": "JavaScript",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolor dolorem porro doloribus itaque eaque numquam voluptas assumenda nisi autem.",
            "icon": "devicon-javascript-plain"
        },
        {
            "skill": "React",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolor dolorem porro doloribus itaque eaque numquam voluptas assumenda nisi autem.",
            "icon": "devicon-react-plain"
        },
        {
            "skill": "Java",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolor dolorem porro doloribus itaque eaque numquam voluptas assumenda nisi autem.",
            "icon": "devicon-java-plain"
        },
        {
            "skill": "Python",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolor dolorem porro doloribus itaque eaque numquam voluptas assumenda nisi autem.",
            "icon": "devicon-python-plain"
        },
        {
            "skill": "C#",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolor dolorem porro doloribus itaque eaque numquam voluptas assumenda nisi autem.",
            "icon": "devicon-csharp-plain"
        },
        {
            "skill": "PHP",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolor dolorem porro doloribus itaque eaque numquam voluptas assumenda nisi autem.",
            "icon": "devicon-php-plain"
        },
        {
            "skill": "HTML",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolor dolorem porro doloribus itaque eaque numquam voluptas assumenda nisi autem.",
            "icon": "devicon-html5-plain"
        },
        {
            "skill": "CSS",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolor dolorem porro doloribus itaque eaque numquam voluptas assumenda nisi autem.",
            "icon": "devicon-css3-plain"
        },
        {
            "skill": "Bootstrap",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolor dolorem porro doloribus itaque eaque numquam voluptas assumenda nisi autem.",
            "icon": "devicon-bootstrap-plain"
        },
        {
            "skill": "Tailwind",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolor dolorem porro doloribus itaque eaque numquam voluptas assumenda nisi autem.",
            "icon": "devicon-tailwindcss-plain"
        },
        {
            "skill": "MongoDB",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolor dolorem porro doloribus itaque eaque numquam voluptas assumenda nisi autem.",
            "icon": "devicon-mongodb-plain"
        },
        {
            "skill": "MySQL",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolor dolorem porro doloribus itaque eaque numquam voluptas assumenda nisi autem.",
            "icon": "devicon-mysql-plain"
        },
        {
            "skill": "Docker",
            "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolor dolorem porro doloribus itaque eaque numquam voluptas assumenda nisi autem.",
            "icon": "devicon-docker-plain"
        },
    ]

    return (
        <div className="w-screen flex flex-col items-center">
            {/* <div className="text-xl p-4 text-gray-500">A peek at my current pallete of Technologies</div> */}
            <div className="p-4 w-[100%] flex flex-col items-center bg-gray-900 text-gray-400 text-center">
                <div className="flex flex-wrap justify-center">
                    {skills.map((skill, key) =>
                        <div key={key} className="m-4">
                            <i class={skill.icon + " text-5xl"}></i>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Skills;
