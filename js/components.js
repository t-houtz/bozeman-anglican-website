async function loadComponent(id, file) {
    const element = document.getElementById(id);

    const response = await fetch(file);
    element.innerHTML = await response.text();
}

async function loadHeader() {
    await loadComponent("header", "components/header.html");

    const header = document.querySelector("header");
    const menuToggle = document.querySelector(".menu-toggle");

    menuToggle.addEventListener("click", () => {
        const isOpen = header.classList.toggle("menu-open");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );
    });
}

loadHeader();
loadComponent("footer", "components/footer.html");