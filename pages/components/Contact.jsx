import React from 'react'

export const Contact = () => {
    return (
        <div className="w-screen p-4 flex justify-center bg-gray-300">
            <a target="blank" href="https://github.com/JalenBCarter">
                <i class="fa-brands fa-github text-gray-400 text-4xl m-4"></i>
            </a>
            <a target="blank" href="https://www.linkedin.com/in/jalen-carter-70625a204/">
            <i class="fa-brands fa-linkedin text-gray-400 text-4xl m-4"></i>
            </a>
            <a target="blank" href="mailto:neuralgroovejbc@gmail.com">
            <i class="fa-solid fa-envelope text-gray-400 text-4xl m-4"></i>
            </a>
        </div>
    )
}

export default Contact;
