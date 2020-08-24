window.onload = function() {
  renderProject(getRandomProject());
  document.body.classList.add('onload');
  setTimeout(function(){
    document.body.classList.remove('preload');
    document.body.classList.remove('onload'); 
  }, 1200);
};