const sharePanel = document.getElementById('share-panel');
const shareButton = document.querySelector('.card__share-button');
const share = document.querySelector('.card__share');

/**
 * Updates the visual and accessible state of the share component.
 * @param {boolean} isExpanded - Whether the share panel should be visible.
 */
function setSharePanelState(isExpanded) {
  sharePanel.hidden = !isExpanded;
  shareButton.setAttribute('aria-expanded', String(isExpanded));
}

// Toggle the panel when the share button is activated.
shareButton.addEventListener('click', () => setSharePanelState(sharePanel.hidden));

// Allow keyboard users to dismiss the panel with Escape.
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !sharePanel.hidden) setSharePanelState(false);
});

// Close the panel when clicking anywhere outside the share component.
document.addEventListener('click', (e) => {
  const isExpanded = !sharePanel.hidden;
  const isClickInside = share.contains(e.target);

  if (isExpanded && !isClickInside) {
    setSharePanelState(false);
  }
});