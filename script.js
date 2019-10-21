const fullList = document.getElementById('tree');

fullList.addEventListener('click', event => {
  if (event.target.tagName !== 'LI') {
    return;
  }
  const childrenList = event.target.children;

  childrenList[0].hidden = !childrenList[0].hidden;
});
