const fullList = document.getElementById('tree');
fullList.addEventListener('click', event => {
  const children = event.target.parentElement.querySelector('ul');
  
  if (event.target.tagName !== 'SPAN' || !children) {
    return;
  }

  children.hidden = !children.hidden;
});
