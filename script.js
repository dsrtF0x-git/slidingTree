const fullList = document.getElementById('tree');
fullList.addEventListener('click', event => {
  if (event.target.tagName !== 'LI') {
    return;
  }
  const childrenList = event.target.children;

  if (!childrenList[0].hidden) {
    childrenList[0].hidden = true;
  } else {
    childrenList[0].hidden = false;
  }
});
