const sharePanel = document.getElementById('share-panel');
const shareButton = document.querySelector('.card__share-button');

shareButton.addEventListener('click', () => {
  const isExpanded = !sharePanel.toggleAttribute('hidden');

  shareButton.setAttribute('aria-expanded', String(isExpanded));
});