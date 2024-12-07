import { renderPortfolio } from "./modules/project.js";
import { renderExperience } from "./modules/experience.js";
import { renderEducation } from "./modules/education.js";
import { renderService } from "./modules/service.js";
import { renderSkill } from "./modules/skill.js";
import { renderNavbar } from "./modules/navbar.js";
import { renderHero } from "./modules/hero.js";

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

  // Testimonials carousel
  // $(".testimonials-carousel").owlCarousel({
  //   center: true,
  //   autoplay: true,
  //   dots: true,
  //   loop: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //   },
  // });

  // Render the Navbar
  renderNavbar();
  // Render the Hero
  renderHero();
  // Render the portfolios
  renderPortfolio();
  // Render the experiences
  renderExperience();
  // Render the Education
  renderEducation();
  // Render the Service
  renderService();
  // Render the Skill
  renderSkill();

  ///Teams

  //team
  //   const teamMembers = {
  //     slider1: [
  //       {
  //         name: "Wai Yan Phyo",
  //         role: "Frontend Developer",
  //         image: "img/wai-yan-phyo.jpg",
  //         facebook: "https://www.facebook.com/wai.hin.1356",
  //         linkedin: "https://www.linkedin.com/in/dev-waiyanphyo/",
  //         delay: "0.0s",
  //       },
  //       {
  //         name: "Sandara",
  //         role: "Project Manager",
  //         image: "img/sandara.jpg",
  //         facebook: "https://www.facebook.com/ZizziDra",
  //         linkedin: "https://www.linkedin.com/in/sandrathn/",
  //         delay: "0.2s",
  //       },
  //       {
  //         name: "May Chan Myae",
  //         role: "UI/UX Designer",
  //         image: "img/may-chan-myae.jpg",
  //         facebook:
  //           "https://www.facebook.com/profile.php?id=100009675460700&mibextid=ZbWKwL",
  //         linkedin: "https://www.linkedin.com/in/may-chan-myae-7445a021a/",
  //         delay: "0.4s",
  //       },
  //       {
  //         name: "Zay Yar Naing",
  //         role: "Backend Developer",
  //         image: "img/zay-yar-naing.jpg",
  //         facebook: "https://www.facebook.com/zay.y.naing.5477/",
  //         linkedin: "https://www.linkedin.com/in/zay-yar-naing-b76399255/",
  //         delay: "0.6s",
  //       },
  //     ],
  //     slider2: [
  //       {
  //         name: "Saw Issac",
  //         role: "Fullstack Developer",
  //         image: "img/saw_issac.jpg",
  //         facebook: "https://www.facebook.com/profile.php?id=100054497664282",
  //         linkedin: "https://www.linkedin.com/in/saw-issac-4b106b25b/",
  //         delay: "0.0s",
  //       },
  //     ],
  //   };

  // const teamContainer = document.querySelector("#teamContainer");

  // function createTeamItem(member) {
  //   const teamItem = document.createElement("div");
  //   teamItem.className = `team-item`;
  //   teamItem.innerHTML = `
  //     <div class="team-img">
  //         <img  src="${member.image}" alt="${member.name}">
  //     </div>
  //     <div class="team-text">
  //         <h2>${member.name}</h2>
  //         <h4>${member.role}</h4>
  //         <p></p>
  //         <div class="team-social">
  //             <a class="btn" href="${member.facebook}"><i class="fab fa-facebook-f"></i></a>
  //             <a class="btn" href="${member.linkedin}"><i class="fab fa-linkedin-in"></i></a>
  //         </div>
  //     </div>
  //   `;
  //   return teamItem;
  // }

  // Loop through each slider and create separate rows
  // for (let slider in teamMembers) {
  //   if (teamMembers.hasOwnProperty(slider)) {
  //     const sliderMembers = teamMembers[slider];

  //     // Create a row for each slider
  //     const row = document.createElement("div");
  //     row.className = "row";
  //     teamContainer.appendChild(row);

  //     // Loop through members of the current slider and create team items
  //     sliderMembers.forEach(member => {
  //       const teamItem = createTeamItem(member);
  //       const col = document.createElement("div");
  //       col.className = "col-lg-6 wow fadeInUp";
  //       col.setAttribute("data-wow-delay", member.delay);
  //       col.appendChild(teamItem);
  //       row.appendChild(col);
  //     });
  //   }
  // }

  // if ($(window).width() > 760) {
  //   teamContainer.className = `owl-carousel`;

  //   $("#teamContainer").owlCarousel({
  //     loop: true,
  //     autoplay: true,
  //     autoplayTimeout: 5000,
  //     margin: 0.1,
  //     responsive: {
  //       0: {
  //         items: 1,
  //       },
  //     },
  //   });
  // }

  // //   Loop through the team members and create rows of 4 members each
  // for (let i = 0; i < teamMembers.length; i += 4) {
  //   const row = document.createElement("div");
  //   row.className = "row";
  //   teamContainer.appendChild(row);

  //   // Loop through the next four members or less if there are fewer than four remaining
  //   for (let j = i; j < i + 4 && j < teamMembers.length; j++) {
  //     const member = teamMembers[j];
  //     const teamItem = createTeamItem(member);
  //     row.appendChild(teamItem);
  //   }
  // }

  // if ($(window).width() > 760) {
  //   teamContainer.className = ` owl-carousel`;

  //   $("#teamContainer").owlCarousel({
  //     loop: true,
  //     autoplay: true,
  //     autoplayTimeout: 5000,
  //     margin: 0.1,
  //     animateOut: "fadeOut",
  //     responsive: {
  //       0: {
  //         items: 1,
  //       },
  //     },
  //   });
  // }
})(jQuery);
