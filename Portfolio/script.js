
        document.addEventListener("DOMContentLoaded", () => {
            const sections = document.querySelectorAll("section[id]");
            const navLinks = document.querySelectorAll(".nav-links a");

            const observerOptions = {
                root: null,
                rootMargin: "-30% 0px -60% 0px", // Triggers when the section occupies the center of the screen
                threshold: 0
            };

            const observerCallback = (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const currentId = entry.target.getAttribute("id");
                        
                        navLinks.forEach((link) => {
                            // Check if the link href matches the current section ID
                            if (link.getAttribute("href") === `#${currentId}`) {
                                link.classList.add("active");
                            } else {
                                link.classList.remove("active");
                            }
                        });
                    }
                });
            };

            const observer = new IntersectionObserver(observerCallback, observerOptions);
            sections.forEach((section) => observer.observe(section));
        });

