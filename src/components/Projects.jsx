import React from "react";
import "../styles/projects.css";

function Projects() {

    const projects = [
        {
            name: "LostLink",
            image: "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201709/%2520Aerial-AboveSummit-Christopher%2520Harting_2.png?itok=dFHQI8zn",
            technologies: "React, Spring Boot",
            description: "Device recovery system.",
            link: "#",
        },
        {
            name: "LostLink",
            image: "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201709/%2520Aerial-AboveSummit-Christopher%2520Harting_2.png?itok=dFHQI8zn",
            technologies: "React, Spring Boot",
            description: "Device recovery system.",
            link: "#",
        },

    ];

    const handsonItems = [
        {
            icon: "https://raw.githubusercontent.com/Kanawanagasaki/vsc-leetcode/master/images/logo.png",
            description: "Performed Nmap network scanning and host discovery.",
        },
        {
            icon: "https://tryhackme.com/img/favicon.png",
            description: "Analyzed packets using Wireshark in lab environment.",
        },
        {
            icon: "https://yt3.googleusercontent.com/_pHLjGmYVp9Qv6r57IhDnEsej2tgpxSyBzD8kUUvDetLLPLGSkDlh77JLxtchccZhBwG8iqq=s900-c-k-c0x00ffffff-no-rj",
            description: "Configured AWS pentesting environment using Kali Linux.",
        },
        {
            icon: "https://media.cdn.kaufland.de/product-images/400x400/03cbda47be197e31c3137ba3689a8c16.webp",
            description: "Wifi Penetration Testing",
        },
         {
            icon: "https://www.avg.com/hubfs/Blog_Content/Avg/Signal/AVG%20Signal%20Images/Keyloggers%20What%20They%20Are/What_is_a_Keylogger-Thumb.jpg",
            description: "KeyLoggers and Backdoor Programming",
        },
        {
            icon: "https://wallpaperaccess.com/full/12235745.jpg",
            description: "OSINT",
        },
    ];


    return (
        <section id="projects" className="projects-section">

            {/* ===== Projects ===== */}
            <h1 className="projects-title">Projects & Hands-On</h1>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.name} />

                        <div className="project-content">
                            <h2>{project.name}</h2>
                            <p className="tech">{project.technologies}</p>
                            <p>{project.description}</p>
                            <a href={project.link}>View Project →</a>
                        </div>
                    </div>
                ))}
            </div>

            

            <div className="handsonItems">
                {handsonItems.map((item, index) => (
                    <div className="handson-card" key={index}>
                        <img src={item.icon} alt="tool icon" className="handson-icon" />
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default Projects;