document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = "fadeInUp 0.8s forwards ease-out";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const targets = document.querySelectorAll('.observer-target');
    targets.forEach(target => {
        observer.observe(target);
    });
});