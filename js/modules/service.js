export function renderService() {
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
}
