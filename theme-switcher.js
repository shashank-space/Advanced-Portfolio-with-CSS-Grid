/* =========================
   THEME SWITCHER
========================= */

const darkModeButton =
    document.getElementById(
        "dark-mode-button"
    );

/* Enable Dark Mode */

function enableDarkMode() {

    document.body.classList.add(
        "dark-mode"
    );

    darkModeButton.textContent =
        "☀️ Light Mode";

    localStorage.setItem(
        "theme",
        "dark"
    );
}

/* Disable Dark Mode */

function disableDarkMode() {

    document.body.classList.remove(
        "dark-mode"
    );

    darkModeButton.textContent =
        "🌙 Dark Mode";

    localStorage.setItem(
        "theme",
        "light"
    );
}

/* Toggle Theme */

darkModeButton.addEventListener(
    "click",
    () => {

        if (
            document.body.classList.contains(
                "dark-mode"
            )
        ) {

            disableDarkMode();

        } else {

            enableDarkMode();
        }
    }
);

/* Load Saved Theme */

if (
    localStorage.getItem("theme")
    === "dark"
) {

    enableDarkMode();

} else {

    disableDarkMode();
}

/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const sections =
    document.querySelectorAll(
        "section"
    );

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );
                    }
                }
            );
        },
        {
            threshold: 0.15
        }
    );

sections.forEach(
    (section) => {

        section.classList.add(
            "hidden"
        );

        observer.observe(
            section
        );
    }
);

/* =========================
   ACTIVE NAVIGATION LINK
========================= */

const navLinks =
    document.querySelectorAll(
        ".navigation-item a"
    );

window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";

        sections.forEach(
            (section) => {

                const sectionTop =
                    section.offsetTop - 150;

                if (
                    window.scrollY >= sectionTop
                ) {

                    currentSection =
                        section.getAttribute(
                            "id"
                        );
                }
            }
        );

        navLinks.forEach(
            (link) => {

                link.classList.remove(
                    "active"
                );

                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    `#${currentSection}`
                ) {

                    link.classList.add(
                        "active"
                    );
                }
            }
        );
    }
);

/* =========================
   SMOOTH SCROLLING
========================= */

navLinks.forEach(
    (link) => {

        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                const targetId =
                    this.getAttribute(
                        "href"
                    );

                const targetSection =
                    document.querySelector(
                        targetId
                    );

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        );
    }
);

/* =========================
   DYNAMIC GREETING
========================= */

function showGreeting() {

    const currentHour =
        new Date().getHours();

    let greetingText = "";

    if (currentHour < 12) {

        greetingText =
            "Good Morning ☀️";

    } else if (
        currentHour < 18
    ) {

        greetingText =
            "Good Afternoon 🌤️";

    } else {

        greetingText =
            "Good Evening 🌙";
    }

    const greeting =
        document.createElement(
            "h2"
        );

    greeting.textContent =
        greetingText;

    greeting.style.textAlign =
        "center";

    greeting.style.marginBottom =
        "30px";

    greeting.style.color =
        "#8018ac";

    const aboutSection =
        document.getElementById(
            "about-section"
        );

    aboutSection.before(
        greeting
    );
}

showGreeting();

/* =========================
   PROJECT CARD CLICK EFFECT
========================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );

projectCards.forEach(
    (card) => {

        card.addEventListener(
            "click",
            () => {

                projectCards.forEach(
                    (item) => {

                        item.style.border =
                            "";
                    }
                );

                card.style.border =
                    "2px solid #8018ac";
            }
        );
    }
);

/* =========================
   CONSOLE MESSAGE
========================= */

console.log(
    "Advanced Portfolio Loaded Successfully 🚀"
);