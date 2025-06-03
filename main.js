document.addEventListener('DOMContentLoaded', function() {
  const introOverlay = document.getElementById('introOverlay');
  const introVideo = document.getElementById('introVideo');
  if (introVideo && introOverlay) {
    introVideo.addEventListener('ended', function() {
      introOverlay.classList.add('hidden');
    });
    // Если нужно скрыть по клику:
    // introOverlay.addEventListener('click', () => introOverlay.classList.add('hidden'));
  }
});