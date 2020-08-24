window.onload = function() {
    document.body.classList.add('onload');
    setTimeout(function(){
      document.body.classList.remove('preload');
      document.body.classList.remove('onload'); 
    }, 600);
};