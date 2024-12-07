export function renderPortfolio() {

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
          name: "Nodejs",
          color: "#5AA14B",
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
    {
      imgSrc: "img/recruitment-service.jpg",
      title: "Recruitment Sercive",
      filter: "filter-1",
      delay: "0.7s",
      languages: [
        {
          name: "Nodejs",
          color: "#5AA14B",
        },
        {
          name: "Nestjs",
          color: "#EA285D",
        },
        {
          name: "Nextjs",
          color: "#000000",
        },
        {
          name: "Postgresql",
          color: "#3A6C94",
        },
        {
          name: "Kafka",
          color: "#231D1F",
        },
        {
          name: "Debezium",
          color: "#5EC5B3",
        },
      ],
      description:
        "Our Recruitment Service streamlines the hiring process with advanced tools for job posting, candidate sourcing, automated screening, and seamless interview scheduling, ensuring efficient and compliant recruitment.",
    },
  ];

  const portfolioContainer = document.getElementById('portfolioContainer');

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
}
