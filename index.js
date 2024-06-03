document.getElementById('transitionButton').addEventListener('click', function() {
    
    var overlay = document.getElementById('videoOverlay');
    var video = document.getElementById('transitionVideo');
    overlay.classList.add('active');
  
    video.play();
  
    video.onended = function() {
      window.location.href = 'ly-about.html'; 
    };
})