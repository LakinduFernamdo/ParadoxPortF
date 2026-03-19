import React from "react";
import "../styles/techstack.css";


const languages = [
  {
    name: "C",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "Java",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Python",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
];

const tools = [
  {
    name: "Spring Boot",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Docker",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Kubernetes",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },
  {
    name: "MySQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Jenkins",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  },
];

const cloud = [
  {
    name: "AWS",
    img: "src/assets/aws-color.png",
  },
  {
    name: "Git",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];


/*Reusable groups*/ 
function StackGroup({ title, items }) {
  return (
    <div className="stack-group">
      <h2 className="stack-title">{title}</h2>

      <div className="tech-grid">
        {items.map((tech, index) => (
          <div key={index} className="tech-card">
            <img src={tech.img} alt={tech.name} loading="lazy" />
            <h3>{tech.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}


export default function TechStack() {
  return (
    <section id="techstack" className="tech-stack">
      <StackGroup title="Languages" items={languages} />
      <StackGroup title="Frameworks & Tools" items={tools} />
      <StackGroup title="Cloud & Version Control" items={cloud} />
    </section>
  );
}