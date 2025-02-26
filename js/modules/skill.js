export function renderSkill() {
  const skills = [
    { img: "img/html.png", name: "HTML" },
    { img: "img/css.png", name: "CSS" },
    { img: "img/javascript.png", name: "JavaScript" },
    { img: "img/scss.png", name: "Scss" },
    { img: "img/tailwind.png", name: "Tailwind" },
    { img: "img/bootstrap.png", name: "Bootstrap" },
    { img: "img/php.png", name: "Php" },
    { img: "img/laravel.png", name: "Laravel" },
    { img: "img/nodejs.png", name: "Node.js" },
    { img: "img/expressjs.png", name: "Express.js" },
    { img: "img/nestjs.png", name: "Nest.js" },
    { img: "img/electronjs.png", name: "Electron.js" },
    { img: "img/prisma.png", name: "Prisma" },
    { img: "img/sequelize.png", name: "Sequelize" },
    { img: "img/reactjs.png", name: "React.js" },
    { img: "img/typescript.png", name: "TypeScript" },
    { img: "img/java.png", name: "Java" },
    { img: "img/coldfusion.png", name: "Coldfusion" },
    { img: "img/mysql.png", name: "MySql" },
    { img: "img/mssqlserver.png", name: "MS Sql" },
    { img: "img/postgres.png", name: "PostgreSql" },
    { img: "img/git.png", name: "Git" },
    { img: "img/asure.png", name: "Asure" },
    { img: "img/docker.png", name: "Docker" },
    { img: "img/kafka.png", name: "Kafka" },
    { img: "img/debezium.jfif", name: "Debezium" },
    { img: "img/postman.png", name: "Postman" },
  ];

  const skillsContainer = document.querySelector("#skillsContainer");

  skills.forEach((skill) => {
    const skillItem = document.createElement("a");
    skillItem.classList.add("skill-btn", "btn-block", "rounded", "shadow");
    skillItem.href = "#";

    skillItem.innerHTML = `
                <img src="${skill.img}" alt="${skill.name} Logo">
                <p>${skill.name}</p>
            `;

    skillItem.addEventListener("click", (event) => {
      event.preventDefault();
    });
    
    skillsContainer.appendChild(skillItem);
  });
}
