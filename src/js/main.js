

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async (e) => {

    e.preventDefault();
    const data = new FormData(e.target);
    data.append("_captcha", false)
    data.append("_subject", "Mensaje de contacto de portafolio")

    try {
        const res = await fetch("https://formsubmit.co/adrianvp423@gmail.com", {
            method: "POST",
            body: data

        });

        e.target.reset();
    } catch (err) {
        console.error(err);
    };
});
