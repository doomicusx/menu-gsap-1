document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  function navToggle(e) {
    const item = e.target;
    const line1 = document.querySelector(".line1");
    const line2 = document.querySelector(".line2");
    const line3 = document.querySelector(".line3");
    const logo = document.querySelector(".logo");
    const navBar = document.querySelector(".nav-bar");
    const duration = 0.5; // Duração Padrão exeto logo e navBar
    const color1 = "white"; // Definir color quando abre
    const color2 = "black"; // Definir color quando fecha
    const bg1 = "white"; // Definir bg quando o menu abrir
    const bg2 = "black"; // Definir bg quando o menu fechar
    if (!item.classList.contains("active")) {
      item.classList.add("active");
      gsap.to(line1, duration, {
        rotate: "45",
        y: 5,
        background: bg1,
      });
      gsap.to(line2, duration, {
        rotate: "-45",
        y: -5,
        background: bg1,
      });
      gsap.to(line3, duration, {
        opacity: 0,
      });
      gsap.to(logo, 1, {
        color: color1,
      });
      gsap.to(navBar, 1, { clipPath: "circle(2500px at 100% -10%)" });
      document.body.classList.add("hide");
    } else {
      item.classList.remove("active");
      gsap.to(line1, duration, {
        rotate: "0",
        y: 0,
        background: bg2,
      });
      gsap.to(line2, duration, {
        rotate: "0",
        y: 0,
        background: bg2,
      });
      gsap.to(line3, duration, {
        opacity: 1,
      });
      gsap.to(logo, 1, {
        color: color2,
      });
      gsap.to(navBar, 1, { clipPath: "circle(50px at 100% -10%)" });
    }
  }
  burger.addEventListener("click", navToggle);
});
