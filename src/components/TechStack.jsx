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
    name: "Nmap",
    img: "https://networkwalks.com/wp-content/uploads/2021/06/Nmap-practice-lab1.png",
  },
  {
    name: "Wireshark",
    img: "https://preview.redd.it/custom-wireshark-icon-because-the-current-one-is-very-bad-v0-dxk87rvwzjmc1.png?auto=webp&s=29952f19fdeb8c85493bdb04265988057bd54e0b",
  },
  {
    name: "Jhon the ripper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQciD3f2-0VPPTw9NUMShnIAc4eCETtAOmIwg&s",
  },
  {
    name: "Metasploit",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTINUizi44XOMcudPSNTii4W2jHLn_DjnI2UQ&s",
  },
  {
    name: "Aircrack-ng",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkgyz_Rt-LxDHjhX3xDreGk6_4teHSag0_3w&s",
  },
  {
    name: "Beef",
    img: "https://www.kali.org/tools/beef-xss/images/beef-xss-logo.svg",
  },
  {
    name: "Spring Boot",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "Express js",
    img: "https://media.licdn.com/dms/image/v2/D4E12AQHPlbZU5HwV1Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1738075363536?e=2147483647&v=beta&t=Cg8zmjgnmbAzdcx52pXwpym4FZyUT1RGrXhc1nPBGao",
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