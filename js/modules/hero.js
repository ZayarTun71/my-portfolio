export function renderHero() {
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

  // Shapes Animation
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
}
