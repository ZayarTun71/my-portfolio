export function renderExperience() {
    
  const timelineItems = [
    {
      date: "2023(feb-20) - 2024(may-21)",
      companyLink: "https://aceplussolutions.com/",
      companyLogo: "./img/aps.jfif",
      companyName: "AceplusSolutions",
      position: "Junior Engineer",
      location: "Hlaing Yangon Myanmar",
      delay: "0.1s",
      logo_width: "50px",
      logo_height: "50px",
    },
    {
      date: "2024(may-23) - 2024(jul-15)",
      companyLink: "https://smilaxglobal.com/",
      companyLogo: "./img/smilax-global.jfif",
      companyName: "Smilax Global",
      position: "Mid Level Engineer",
      location: "Bhan Yangon Myanmar",
      delay: "0.2s",
      logo_width: "60px",
      logo_height: "60px",
    },
    {
      date: "2024(aug-1) - present",
      companyLink: "https://www.brycenmyanmar.com.mm/",
      companyLogo: "./img/brycen_myanmar_logo.jfif",
      companyName: "Brycen Myanmar",
      position: "Mid Level Engineer",
      location: "Bhan Yangon Myanmar",
      delay: "0.3s",
      logo_width: "60px",
      logo_height: "60px",
    },
  ];

  const timelineContainer = document.getElementById("timelineContainer");

  timelineItems.forEach((item, index) => {
    const timelineItem = document.createElement("div");
    const alignment = index % 2 === 0 ? "left" : "right";
    timelineItem.className = `timeline-item ${alignment} wow slideIn${alignment}`;
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
}
