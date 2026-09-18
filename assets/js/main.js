// Tamarind Zesty - Interactive Gastronomy Scripts
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('drawer-toggle');
    const drawer = document.getElementById('mobile-drawer');

    if (toggle && drawer) {
        toggle.addEventListener('click', () => {
            drawer.classList.toggle('active');
            toggle.setAttribute('aria-expanded', drawer.classList.contains('active'));
        });

        document.addEventListener('click', (e) => {
            if (!drawer.contains(e.target) && !toggle.contains(e.target) && drawer.classList.contains('active')) {
                drawer.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    e.preventDefault();
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
