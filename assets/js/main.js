// Tamarind Zesty - Interactive Gastronomy Scripts
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('drawer-toggle');
    const drawer = document.getElementById('mobile-drawer');
    const closeBtn = document.getElementById('drawer-close');

    function openDrawer() {
        if (drawer && toggle) {
            drawer.classList.add('active');
            document.body.classList.add('drawer-open');
            toggle.setAttribute('aria-expanded', 'true');
        }
    }

    function closeDrawer() {
        if (drawer && toggle) {
            drawer.classList.remove('active');
            document.body.classList.remove('drawer-open');
            toggle.setAttribute('aria-expanded', 'false');
        }
    }

    if (toggle && drawer) {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            if (drawer.classList.contains('active')) {
                closeDrawer();
            } else {
                openDrawer();
            }
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                closeDrawer();
            });
        }

        document.addEventListener('click', (e) => {
            if (drawer.classList.contains('active') && !drawer.contains(e.target) && !toggle.contains(e.target)) {
                closeDrawer();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && drawer.classList.contains('active')) {
                closeDrawer();
            }
        });
    }

    // Smooth scroll for internal anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    e.preventDefault();
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
