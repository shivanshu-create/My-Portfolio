const projects = [
  {
    name: "Notelet",
    description: "Linux Text editor with Restore Session, Pin and many more abilities",
    link: "notelet.html"
  },
  {
    name: "ClipCycle",
    description: "Middle click paste with copy on selection, stores every copied item",
    link: "clipcycle.html"
  },
  {
    name: "Resilient Gateway",
    description: "Distributed Rate Limiting & Circuit Breaking",
    link: "resilient-gateway.html"
  }
];

function createProjectCard(project) {
  return `
    <a href="${project.link}" class="container" style="text-decoration: none; display: block; color: inherit;">
      <div class="box">
        <span class="title">${project.name}</span>
        <div>
          <p>${project.description}</p>
        </div>
      </div>
    </a>
  `
}

const projectContainer = document.getElementById("projects");

projects.forEach(project => {
  projectContainer.innerHTML += createProjectCard(project);
});

const skills = [
  {
    skill_domain: "Languages",
    skill_name: ["C","C++","Python","JavaScript","TypeScript","SQL","Lua"]
  },
  {
    skill_domain: "Web Development",
    skill_name: ["HTML","CSS","React","Tailwind","REST APIs","WebExtensions API","API Design"]
  },
  {
    skill_domain: "Backend & Development",
    skill_name: ["Node.js","Express.js","MongoDB","PostgreSQL","Redis","Git","GitHub","Docker","Docker Compose","VS Code"]
  },
  {
    skill_domain: "Libraries & Frameworks",
    skill_name: ["OpenCV","GTK4","Libadwaita"]
  },
  {
    skill_domain: "Systems & Engineering",
    skill_name: ["Data Structures & Algorithms","Object-Oriented Programming","Concurrency","Distributed Systems","Rate Limiting","Circuit Breaking"]
  },
  {
    skill_domain: "Operating Systems",
    skill_name: ["Windows","Linux (Ubuntu)"]
  },
];

function createSkillsPart(skill) {
  skillsNames = skill.skill_name
    .map(name => `<span class="skill-name">${name}</span>`)
    .join("");

  return `
    <div class="Skill">
        <h4>${skill.skill_domain}</h4>
        ${skillsNames}
    </div>
  `
}

const skillsContainer = document.getElementById("skills-container")

skills.forEach(skill => {
  skillsContainer.innerHTML += createSkillsPart(skill)
});

// Navigation Smooth Scrolling
const navButtons = document.querySelectorAll(".Top-Row-Button[data-target]");
navButtons.forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const nameLogo = document.querySelector(".Top-Row-Name");
if (nameLogo) {
  nameLogo.style.cursor = "pointer";
  nameLogo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}