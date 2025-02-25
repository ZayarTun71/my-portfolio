export function renderExperience() {

  const timelineItems = [
    {
      date: "2023(feb-20) - 2024(may-21)",
      companyLink: "https://aceplussolutions.com/",
      companyLogo: "./img/aps.jfif",
      companyName: "AceplusSolutions",
      position: "Junior Engineer",
      location: "Hlaing Yangon Myanmar",
      jobType: "On-site",
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
      jobType: "On-site",
      delay: "0.2s",
      logo_width: "60px",
      logo_height: "60px",
    },
    {
      date: "2024(aug-1) - 2025(march-6)",
      companyLink: "https://www.brycenmyanmar.com.mm/",
      companyLogo: "./img/brycen_myanmar_logo.jfif",
      companyName: "Brycen Myanmar",
      position: "Mid Level Engineer",
      location: "Bhan Yangon Myanmar",
      jobType: "On-site",
      delay: "0.3s",
      logo_width: "60px",
      logo_height: "60px",
    },
  ];

  const timelineContainer = document.getElementById("timelineContainer");

  timelineItems.forEach((item, index) => {
    const timelineItem = document.createElement("div");
    const alignment = index % 2 === 0 ? "left" : "right";

    const animation = window.innerWidth < 768 ? "fadeInRight" : (index % 2 === 0 ? "fadeInLeft" : "fadeInRight");
    const animationDelay = `${0.1 + index * 0.2}s`;

    timelineItem.className = `timeline-item ${alignment} wow slideIn${alignment}`;
    timelineItem.setAttribute("data-wow-delay", item.delay);

    timelineItem.innerHTML = `
                 <div class="timeline-text wow ${animation}" data-wow-delay="${animationDelay}">
                    <div class="timeline-date">${item.date}</div>
                    <h2>
                        <div class="timeline-company-logo" style="width: ${item.logo_width}; height: ${item.logo_height};">
                            <a href="${item.companyLink}" class="timeline-company-logo-link" target="_blank">
                                <img src="${item.companyLogo}" alt="">
                            </a>
                        </div>
                        ${item.companyName}
                    </h2>
                    <p>Location - ${item.location}.</p>
                    <h4>Position - ${item.position}</h4>
                    <h4>Job Type - ${item.jobType}</h4>
                </div>
            `;

    timelineContainer.appendChild(timelineItem);
  });
}
