document.addEventListener("DOMContentLoaded", function () {
    // Animação de fade-in para seções
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transition = "opacity 1s ease-in-out";
    });

    const fadeInSections = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75) {
                section.style.opacity = 1;
            }
        });
    };

    window.addEventListener("scroll", fadeInSections);
    fadeInSections();

    // Animação ao clicar no botão de agendamento
    const btns = document.querySelectorAll(".btn-primary");
    btns.forEach(btn => {
        btn.addEventListener("click", function () {
            btn.classList.add("animate");
            setTimeout(() => btn.classList.remove("animate"), 500);
        });
    });

    // Atualiza automaticamente o ano no rodapé
    document.getElementById('year').textContent = new Date().getFullYear();
});
