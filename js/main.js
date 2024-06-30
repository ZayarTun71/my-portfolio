(function ($) {
  "use strict";

  // loader
  var loader = function () {
    setTimeout(function () {
      if ($("#loader").length > 0) {
        $("#loader").removeClass("show");
      }
    }, 1);
  };
  loader();

  // Initiate the wowjs
  new WOW().init();

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".navbar").addClass("nav-sticky");
    } else {
      $(".navbar").removeClass("nav-sticky");
    }
  });

  // Smooth scrolling on the navbar links
  $(".navbar-nav a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top - 45,
        },
        1500,
        "easeInOutExpo"
      );

      if ($(this).parents(".navbar-nav").length) {
        $(".navbar-nav .active").removeClass("active");
        $(this).closest("a").addClass("active");
      }
    }
  });

  // Typed Initiate
  if ($(".hero .hero-text h2").length == 1) {
    var typed_strings = $(".hero .hero-text .typed-text").text();
    var typed = new Typed(".hero .hero-text h2", {
      strings: typed_strings.split(", "),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true,
    });
  }

  // Skills
  $(".skills").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );

  // Testimonials carousel
  $(".testimonials-carousel ").owlCarousel({
    center: true,
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  ///#Project

  const portfolioItems = [
    {
      imgSrc: "img/ticket-managemnet.png",
      title: "Ticket Management System",
      filter: "filter-2",
      delay: "0.0s",
      languages: [
        {
          name: "Php",
          color: "#7B7FB6",
        },
        {
          name: "Laravel",
          color: "#FE5443",
        },
        {
          name: "Reactjs",
          color: "#1DCEFF",
        },
        {
          name: "Tailwind",
          color: "#29B5BD",
        },
        {
          name: "Typescript",
          color: "#387CC8",
        },
        {
          name: "Mysql",
          color: "#4A7DA3",
        },
      ],
      description:
        "A Ticket Management System (TMS) is a software solution designed to help organizations manage and track customer support requests, issues, and inquiries efficiently. It serves as a centralized platform where support teams can organize, prioritize, and resolve tickets (requests) raised by customers or users.",
    },
    {
      imgSrc: "img/interview-management.png",
      title: "Interview Management System",
      filter: "filter-1",
      delay: "0.1s",
      languages: [
        {
          name: "Php",
          color: "#7B7FB6",
        },
        {
          name: "Laravel",
          color: "#FE5443",
        },
        {
          name: "Reactjs",
          color: "#1DCEFF",
        },
        {
          name: "Tailwind",
          color: "#29B5BD",
        },
        {
          name: "Typescript",
          color: "#387CC8",
        },
        {
          name: "Mysql",
          color: "#4A7DA3",
        },
      ],
      description:
        "An Interview Management System (IMS) is a comprehensive tool that facilitates the scheduling, coordination, and management of job interviews. It aims to enhance the efficiency and effectiveness of the recruitment process by automating various tasks, ensuring smooth communication between all stakeholders, and providing a centralized platform for managing candidate information and interview logistics.",
    },
    {
      imgSrc: "img/zenshou.png",
      title: "全商Webシステム",
      filter: "filter-3",
      delay: "0.2s",
      languages: [
        {
          name: "Coldfusion",
          color: "#07295D",
        },
        {
          name: "Html",
          color: "#DD4922",
        },
        {
          name: "Css",
          color: "#146EAF",
        },
        {
          name: "JavaScript",
          color: "#E8D44E",
        },
        {
          name: "Jquery",
          color: "#0A69AD",
        },
        {
          name: "Microsoft Sql Server",
          color: "#C9CDCC",
        },
      ],
      description:
        "The Zensho Web System is an education-related web system used in Japanese commercial high schools and vocational schools. This system is designed to streamline school administrative tasks and student learning support. General functions include the following:",
    },
    {
      imgSrc: "img/kanji-cards.jpg",
      title: "Kanji Flash Card",
      filter: "filter-3",
      delay: "0.3s",
      languages: [
        {
          name: "Nodejs",
          color: "#5AA14B",
        },
        {
          name: "Expressjs",
          color: "#383838",
        },
        {
          name: "Sequelize",
          color: "#1EB1EF",
        },
        {
          name: "Reactjs",
          color: "#1DCEFF",
        },
        {
          name: "Css",
          color: "#146EAF",
        },
        {
          name: "JavaScript",
          color: "#E8D44E",
        },
        {
          name: "Postgresql",
          color: "#3A6C94",
        },
      ],
      description:
        "A Kanji Flash Card System is a learning aid used to memorize and reinforce Japanese kanji characters, which are logographic characters used in the Japanese writing system. It provides a structured approach to learning kanji by presenting characters on flashcards, along with their meanings, readings (pronunciations), and example usage.",
    },
    {
      imgSrc: "img/sarmal-warmal.png",
      title: "Sar Mal War Mal",
      filter: "filter-2",
      delay: "0.4s",
      languages: [
        {
          name: "Php",
          color: "#7B7FB6",
        },
        {
          name: "Laravel",
          color: "#FE5443",
        },
        {
          name: "Reactjs",
          color: "#1DCEFF",
        },
        {
          name: "Css",
          color: "#146EAF",
        },
        {
          name: "JavaScript",
          color: "#E8D44E",
        },
        {
          name: "Mysql",
          color: "#4A7DA3",
        },
      ],
      description:
        "A Healthy Foods Selling System is a platform that enables businesses to sell and promote a variety of healthy food items, catering to individuals looking to make healthier dietary choices. It may encompass various features to support online sales, inventory management, customer engagement, and nutritional information dissemination.",
    },
    {
      imgSrc: "img/hospital-appointment.jfif",
      title: "Hospital Appointment System",
      filter: "filter-3",
      delay: "0.5s",
      languages: [
        {
          name: "Nodejs",
          color: "#5AA14B",
        },
        {
          name: "Expressjs",
          color: "#383838",
        },
        {
          name: "Sequelize",
          color: "#1EB1EF",
        },
        {
          name: "Postgresql",
          color: "#3A6C94",
        },
      ],
      description:
        "A Hospital Appointment System serves as a centralized platform for managing patient appointments, enabling healthcare providers to efficiently allocate resources, reduce wait times, and improve patient satisfaction. It facilitates seamless communication between patients, healthcare staff, and administrative personnel throughout the appointment scheduling process.",
    },
    {
      imgSrc: "img/user-management.jpg",
      title: "User Management System",
      filter: "filter-1",
      delay: "0.6s",
      languages: [
        {
          name: "Php",
          color: "#7B7FB6",
        },
        {
          name: "Laravel",
          color: "#FE5443",
        },
        {
          name: "Mysql",
          color: "#4A7DA3",
        },
      ],
      description:
        "A user management system is software that manages user accounts, permissions, and security features like authentication and access control.",
    },
  ];

  const portfolioContainer = document.getElementById("portfolioContainer");

  portfolioItems.forEach((item, index) => {
    const portfolioItem = document.createElement("div");
    portfolioItem.className = `col-lg-6 col-md-6 col-sm-12 portfolio-item ${item.filter} wow fadeInUp"`;
    portfolioItem.setAttribute("data-wow-delay", item.delay);

    portfolioItem.innerHTML = `
  <div class="portfolio-wrap"  data-target="#portfolioModal"  data-toggle="modal" 
             data-title="${item.title}" data-img="${item.imgSrc}" 
             data-description="${item.description}" 
             data-languages='${JSON.stringify(item.languages)
               .replace(/'/g, "&apos;")
               .replace(/"/g, "&quot;")}'>
      <div class="portfolio-img rounded-lg">
          <img src="${item.imgSrc}" alt="${item.title}">
      </div>
      <div class="portfolio-text">
          <h3>${item.title}</h3>
          <i class="fas fa-external-link-alt"></i>
       </div>
  </div>
`;

    portfolioContainer.appendChild(portfolioItem);
  });

//   const moreButton = document.getElementById("moreButton");
//   const portfolioContainerParent = document.querySelector(
//     ".portfolio-container-parent"
//   );

//   moreButton.addEventListener("click", function () {
//     if (portfolioContainerParent.style.height === "auto") {
//         portfolioContainerParent.style.height = "auto";
//         portfolioContainerParent.style.overflow = "hidden";
//         moreButton.textContent = "More";
//     } else {
//         portfolioContainerParent.style.height = "auto";
//         portfolioContainerParent.style.overflow = "visible";
//         moreButton.textContent = "Less";
//     }
// });

  $("#portfolioModal").on("show.bs.modal", function (event) {
    const button = $(event.relatedTarget); // Button that triggered the modal
    const title = button.data("title"); // Extract info from data-* attributes
    const imgSrc = button.data("img");
    const description = button.data("description");
    const languages = JSON.parse(
      button
        .attr("data-languages")
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'")
    );

    const modal = $(this);
    modal.find(".modal-title").text(title);
    modal.find(".modal-body img").attr("src", imgSrc);
    modal.find(".modal-body #modalDescription").text(description);

    const languagesList = modal.find(".modal-body #modalLanguages");
    languagesList.empty();
    languages.forEach((language) => {
      const colorStyle = language.color
        ? `style="background-color: ${language.color};"`
        : "";
      languagesList.append(
        `<li class="list-inline-item badge badge-primary" ${colorStyle}>${language.name}</li>`
      );
    });
  });

  //project filter
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
    sortBy: "random",
  });

  $("#portfolio-filter li").on("click", function () {
    $("#portfolio-filter li").removeClass("filter-active");
    $(this).addClass("filter-active");
    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });

  ///#Experiences

  //timeline
  const timelineItems = [
    {
      date: "2023(feb-20) - 2024(may-21)",
      companyLink: "https://aceplussolutions.com/",
      companyLogo: "./img/aps.jfif",
      companyName: "AceplusSolutions",
      position: "Junior Engineer",
      location: "Hlaing Yangon Myanmar",
      alignment: "left",
      delay: "0.1s",
      logo_width: "50px",
      logo_height: "50px",
    },
    {
      date: "2024(may-23) - present",
      companyLink: "https://smilaxglobal.com/",
      companyLogo: "./img/smilax-global.jfif",
      companyName: "Smilax Global",
      position: "Mid Level Engineer",
      location: "Bhan Yangon Myanmar",
      alignment: "right",
      delay: "0.2s",
      logo_width: "60px",
      logo_height: "60px",
    },
  ];

  const timelineContainer = document.getElementById("timelineContainer");

  timelineItems.forEach((item) => {
    const timelineItem = document.createElement("div");
    timelineItem.className = `timeline-item ${item.alignment} wow slideIn${
      item.alignment === "left" ? "Left" : "Right"
    }`;
    timelineItem.setAttribute("data-wow-delay", item.delay);

    timelineItem.innerHTML = `
            <div class="timeline-text">
                <div class="timeline-date">${item.date}</div>
                <h2>
                    <div class="timeline-company-logo" style="width: ${item.logo_width}; height: ${item.logo_height};">
                        <a href="${item.companyLink}" class="timeline-company-logo-link" target="_blank">
                            <img src="${item.companyLogo}" alt="">
                        </a>
                    </div>
                    ${item.companyName}
                </h2>
                <h4>Position - ${item.position}</h4>
                <p>
                    Location - ${item.location}.
                </p>
            </div>
        `;

    timelineContainer.appendChild(timelineItem);
  });

  ///Education

  //timeline
  const educationTimelineItems = [
    {
      date: "2018 - 2020",
      companyName: "Metro IT and Japanese Language Center",
      location: "Myanmar Yangon",
      description:
        "I've earned both a Web Engineer Diploma and Certificate, showcasing my expertise in web development.",
      alignment: "left",
      delay: "0.1s",
    },
    {
      date: "2019 - ??",
      companyName: "Dagon University(Psychology)",
      location: "Myanmar Yangon",
      description:
        "Stopped my University Education because of political unrest.",
      alignment: "right",
      delay: "0.2s",
    },
    {
      date: "2023",
      companyName: "JLPT, NatTest (N3)",
      location: "Myanmar Yangon",
      description: "JLPT, NatTest (N3) Certificate",
      alignment: "left",
      delay: "0.3s",
    },
  ];

  const educationtimelineContainer = document.getElementById(
    "educationTimelineContainer"
  );

  educationTimelineItems.forEach((item) => {
    const educationTimelineItem = document.createElement("div");
    educationTimelineItem.className = `timeline-item ${
      item.alignment
    } wow slideIn${item.alignment === "left" ? "Left" : "Right"}`;
    educationTimelineItem.setAttribute("data-wow-delay", item.delay);

    educationTimelineItem.innerHTML = `
            <div class="timeline-text">
                <div class="timeline-date">${item.date}</div>
                <h2>${item.companyName}</h2>
                <h4>${item.location}</h4>
                <p>${item.description}</p>
            </div>
        `;

    educationtimelineContainer.appendChild(educationTimelineItem);
  });

  ///Services

  //service
  const services = [
    {
      iconClass: "fa fa-laptop",
      title: "Web Development",
      delay: "0.0s",
      description: "",
    },
    {
      iconClass: "fa fa-database",
      title: "Backend Development",
      delay: "0.2s",
      description: "",
    },
    {
      iconClass: "fa fa-laptop-code",
      title: "Frontend Development",
      delay: "0.4s",
      description: "",
    },
    {
      iconClass: "fa fa-cubes",
      title: "Microservice Architecture",
      delay: "0.6s",
      description: "",
    },
  ];

  const serviceContainer = document.querySelector("#serviceContainer");

  services.forEach((service) => {
    const serviceItem = document.createElement("div");
    serviceItem.className = `col-lg-6 wow fadeInUp`;
    serviceItem.setAttribute("data-wow-delay", service.delay);

    serviceItem.innerHTML = `
            <div class="service-item">
                <div class="service-icon">
                    <i class="${service.iconClass}"></i>
                </div>
                <div class="service-text">
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                </div>
            </div>
        `;

    serviceContainer.appendChild(serviceItem);
  });

  ///Teams

  //team
  const teamMembers = [
    {
      name: "Wai Yan Phyo",
      role: "Frontend Developer",
      image: "img/wai-yan-phyo.jpg",
      facebook: "https://www.facebook.com/wai.hin.1356",
      linkedin: "https://www.linkedin.com/in/dev-waiyanphyo/",
      delay: "0.0s",
    },
    {
      name: "Sandara",
      role: "Project Manager",
      image: "img/sandara.jpg",
      facebook: "https://www.facebook.com/ZizziDra",
      linkedin: "https://www.linkedin.com/in/sandrathn/",
      delay: "0.2s",
    },
    {
      name: "May Chan Myae",
      role: "UI/UX Designer",
      image: "img/may-chan-myae.jpg",
      facebook:
        "https://www.facebook.com/profile.php?id=100009675460700&mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/may-chan-myae-7445a021a/",
      delay: "0.4s",
    },
    {
      name: "Zay Yar Naing",
      role: "Backend Developer",
      image: "img/zay-yar-naing.jpg",
      facebook: "https://www.facebook.com/zay.y.naing.5477/",
      linkedin: "https://www.linkedin.com/in/zay-yar-naing-b76399255/",
      delay: "0.6s",
    },
    {
      name: "Saw Issac",
      role: "Fullstack Developer",
      image: "img/saw_issac.jpg",
      facebook: "https://www.facebook.com/profile.php?id=100054497664282",
      linkedin: "https://www.linkedin.com/in/saw-issac-4b106b25b/",
      delay: "0.8s",
    },
  ];

  const teamContainer = document.querySelector("#teamContainer");

  function createTeamItem(member) {
    const teamItem = document.createElement("div");
    teamItem.className = `col-lg-6 wow fadeInUp`;
    teamItem.setAttribute("data-wow-delay", member.delay);

    teamItem.innerHTML = `
      <div class="team-item">
          <div class="team-img">
              <img src="${member.image}" alt="${member.name}">
          </div>
          <div class="team-text">
              <h2>${member.name}</h2>
              <h4>${member.role}</h4>
              <p></p>
              <div class="team-social">
                  <a class="btn" href="${member.facebook}"><i class="fab fa-facebook-f"></i></a>
                  <a class="btn" href="${member.linkedin}"><i class="fab fa-linkedin-in"></i></a>
              </div>
          </div>
      </div>
    `;
    return teamItem;
  }

  //   Loop through the team members and create rows of 4 members each
  for (let i = 0; i < teamMembers.length; i += 4) {
    const row = document.createElement("div");
    row.className = "row";
    teamContainer.appendChild(row);

    // Loop through the next four members or less if there are fewer than four remaining
    for (let j = i; j < i + 4 && j < teamMembers.length; j++) {
      const member = teamMembers[j];
      const teamItem = createTeamItem(member);
      row.appendChild(teamItem);
    }
  }

  if ($(window).width() > 760) {
    teamContainer.className = ` owl-carousel`;

    $("#teamContainer").owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      margin: 0.1,
      animateOut: "fadeOut",
      responsive: {
        0: {
          items: 1,
        },
      },
    });
  }

  ///Skills

  //skills
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
    skillItem.classList.add("skill-btn", "btn-block","rounded","shadow");
    skillItem.href = "#";

    skillItem.innerHTML = `
            <img src="${skill.img}" alt="${skill.name} Logo">
            <p>${skill.name}</p>
        `;

    skillsContainer.appendChild(skillItem);
  });

  /// Animation

  //shapes
  function CreateShapes() {
    const section = document.querySelector(".hero");
    const shape = document.createElement("span");

    // Randomly assign a class for square, circle, or triangle
    const shapes = ["square", "circle", "triangle"];
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    shape.className = randomShape;

    var size = Math.random() * 20;

    shape.style.width = 10 + size + "px";
    shape.style.height = 10 + size + "px";

    shape.style.top = Math.random() * innerHeight + "px";
    shape.style.left = Math.random() * innerWidth + "px";

    section.appendChild(shape);

    setTimeout(() => {
      shape.remove();
    }, 5000);
  }

  setInterval(CreateShapes, 100);
})(jQuery);
