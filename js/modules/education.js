export function renderEducation() {
  const educationTimelineItems = [
    {
      date: "2018 - 2020",
      educationName: "Metro IT and Japanese Language Center",
      educationLink: "https://metro-myanmar.com/mic/index.php",
      educationLogo: "./img/metro.png",
      location: "Myanmar Yangon",
      description:
        "I've earned both a Web Engineer Diploma and Certificate, showcasing my expertise in web development.",
      delay: "0.1s",
      logo_width: "50px",
      logo_height: "50px",
    },
    {
      date: "2019",
      educationName: "ITPEC (IP)",
      educationLink: "https://itpec.org/",
      educationLogo: "./img/itpec.jfif",
      location: "Myanmar Yangon",
      description: "ITPEC (IP) Certificate",
      delay: "0.3s",
      logo_width: "50px",
      logo_height: "50px",
    },
    {
      date: "2019 - ??",
      educationName: "Dagon University(Psychology)",
      educationLink: "https://www.dagonuniversity.edu.mm/category/departments/",
      educationLogo: "./img/dagon-university.png",
      location: "Myanmar Yangon",
      description:
        "Stopped my University Education because of political unrest.",
      delay: "0.2s",
      logo_width: "50px",
      logo_height: "55px",
    },
    {
      date: "2023",
      educationName: "JLPT, NatTest (N3)",
      educationLink: "https://www.jlpt.jp/e/",
      educationLogo: "./img/jlpt.png",
      location: "Myanmar Yangon",
      description: "JLPT, NatTest (N3) Certificate",
      delay: "0.3s",
      logo_width: "50px",
      logo_height: "50px",
    },
  ];

  const educationtimelineContainer = document.getElementById(
    "educationTimelineContainer"
  );

  educationTimelineItems.forEach((item, index) => {
    const educationTimelineItem = document.createElement("div");
    const alignment = index % 2 === 0 ? "left" : "right";

    const animation = window.innerWidth < 768 ? "fadeInRight" : (index % 2 === 0 ? "fadeInLeft" : "fadeInRight");
    const animationDelay = `${0.1 + index * 0.2}s`;

    educationTimelineItem.className = `timeline-item ${alignment} wow slideIn${alignment}`;
    educationTimelineItem.setAttribute("data-wow-delay", item.delay);

    educationTimelineItem.innerHTML = `
                <div class="timeline-text wow ${animation}" data-wow-delay="${animationDelay}">
                    <div class="timeline-date">${item.date}</div>
                    <h2>
                        <div class="timeline-company-logo" style="width: ${item.logo_width}; height: ${item.logo_height};">
                            <a href="${item.educationLink}" class="timeline-company-logo-link" target="_blank">
                                <img src="${item.educationLogo}" alt="">
                            </a>
                        </div>
                        ${item.educationName}
                    </h2>
                    <p>
                        Location - ${item.location}.
                    </p>
                    <h4 class="mt-2">${item.description}</h4>
                </div>
            `;

    educationtimelineContainer.appendChild(educationTimelineItem);
  });
}
