document.addEventListener("DOMContentLoaded", () => {
    const avatar = document.querySelector('.avatar');
    avatar.addEventListener('click', () => {
        avatar.classList.toggle('active');
    });

const introOverlay = document.getElementById('introOverlay');
const isMobile = window.matchMedia('(max-width: 768px)').matches;
const delayTime = isMobile ? 2000 : 1800;

setTimeout(() => {
    introOverlay.classList.add('hidden');
}, delayTime);

    function switchSection(id) {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(id + '-section').classList.add('active');

        document.querySelectorAll('.section-buttons button').forEach(button => {
            button.classList.remove('active');
        });
        document.querySelector(`.section-buttons button[onclick="switchSection('${id}')"]`).classList.add('active');
    }

    document.querySelectorAll('.copy-link').forEach(button => {
        button.addEventListener('click', () => {
            const link = button.previousElementSibling.getAttribute('href');
            navigator.clipboard.writeText(link).then(() => {
                button.classList.add('copied');
                button.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M20 6L9 17L4 12"></path></svg>';
                setTimeout(() => {
                    button.classList.remove('copied');
                    button.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
                }, 2000);
            });
        });
    });

    window.switchSection = switchSection;
});
// chto