//document.addEventListener("DOMContentLoaded", function() {
//const playPauseBtn = document.querySelector(".play-pause");
//  const progressBar = document.querySelector(".progress-bar .progress");
//    const currentTimeEl = document.querySelector(".current-time");
 //   const durationEl = document.querySelector(".duration");
 //   const trackList = document.querySelectorAll(".track-list li");
    
 //   let audio = new Audio('songs/LR-FM.mp3');
 //   let isPlaying = false;
  
 //   playPauseBtn.addEventListener("click", function() {
 //     if (isPlaying) {
 //       audio.pause();
 //     } else {
 //       audio.play();
 //     }
 //     isPlaying = !isPlaying;
 //     updatePlayPauseIcon();
 //   });
  
//    audio.addEventListener("timeupdate", function() {//
      const progress = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = progress + "%";
      currentTimeEl.textContent = formatTime(audio.currentTime);
//    });
  
//    audio.addEventListener("loadedmetadata", function() {//
      durationEl.textContent = formatTime(audio.duration);
//    });
  
//    function updatePlayPauseIcon() {//
      if (isPlaying) {
        playPauseBtn.innerHTML = '<i class="icon-pause"></i>';
      } else {
        playPauseBtn.innerHTML = '<i class="icon-play"></i>';
      }
//    }
  
//    function formatTime(seconds) {
//      const minutes = Math.floor(seconds / 60);
//      const secs = Math.floor(seconds % 60);
//      return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
//    }
  
//    trackList.forEach(track => {
//      track.addEventListener("click", function() {
//        const trackName = track.querySelector('.track-name').textContent;
//        audio.src = 'songs/LR-FM${trackName}.mp3';
//        audio.play();
//        isPlaying = true;
//        updatePlayPauseIcon();
//        updateTrackListActiveState(track);
//      });
//    });

//    trackList.forEach(track => {
//      track.addEventListener("click",function() {
//        const trackName = track.querySelector('.track-name').textContent;
//        audio.src = 'songs/LR-DBY${trackName}.mp3';
//        audio.play();
//        isPlaying = true;
//        updatePlayPauseIcon();
//        updateTrackListActiveState(track);
//      });
//    });

 //   trackList.forEach(track => {
 //     track.addEventListener("click", function() {
 //       const trackName = track.querySelector('.track-name').textContent;
 //       audio.src = 'songs/LR-AG${trackName}.mp3';
 //       audio.play();
 //       isPlaying = true;
 //       updatePlayPauseIcon();
 //       updateTrackListActiveState(track);
 //     });
//    });


//    function updateTrackListActiveState(activeTrack) {
//      trackList.forEach(track => track.classList.remove("active"));
//      activeTrack.classList.add("active");
//    }
 // });

  