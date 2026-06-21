document.querySelectorAll('.feature-link').forEach(function(link) {

    link.addEventListener('mouseenter', function(event) {
        const rect = link.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        link.style.setProperty('--x', x + 'px');
        link.style.setProperty('--y', y + 'px');

        link.classList.remove('ripple');

        // Restart the ripple animation
        void link.offsetWidth;

        link.classList.add('ripple');
    });

    link.addEventListener('click', function(event) {
        event.preventDefault();

        const clickedLink = this;
        const targetId = clickedLink.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (!targetSection) {
            return;
        }

        const rect = clickedLink.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        clickedLink.style.setProperty('--x', x + 'px');
        clickedLink.style.setProperty('--y', y + 'px');

        clickedLink.classList.remove('ripple');

        // Restart the ripple animation
        void clickedLink.offsetWidth;

        clickedLink.classList.add('ripple');

        setTimeout(function() {
            const offcanvasElement = document.getElementById('featuresPanel');
            const offcanvasInstance = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);

            offcanvasInstance.hide();

            setTimeout(function() {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 250);

        }, 450);
    });
});
