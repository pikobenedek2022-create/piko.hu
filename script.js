function toggleMenu(){const n=document.getElementById('navlinks');n.classList.toggle('open');document.querySelector('.menu').setAttribute('aria-expanded',n.classList.contains('open'))}
  function closeMenu(){document.getElementById('navlinks').classList.remove('open');document.querySelector('.menu').setAttribute('aria-expanded','false')}
  document.getElementById('year').textContent=new Date().getFullYear();
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("main section[id]");
    const menuLinks = document.querySelectorAll('.navlinks a[href^="#"]');

    function updateActiveMenu() {
        let current = "fooldal";

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop <= 180) {
                current = section.id;
            }
        });

        menuLinks.forEach(link => {
            const isActive = link.getAttribute("href") === `#${current}`;

            link.classList.toggle("active", isActive);

            if (isActive) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    }

    window.addEventListener("scroll", updateActiveMenu);
    updateActiveMenu();
});
