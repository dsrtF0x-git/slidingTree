const fullList = document.getElementById('tree');
fullList.addEventListener('click', event => {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  const children = event.target.parentElement.querySelector('ul');

  if (!children) return;

  children.hidden = !children.hidden;
});