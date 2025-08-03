var player;
const credit = document.getElementsByClassName("element")[0];
var isVideoLoaded = false;
        // Load YouTube iFrame API
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // Initialize YouTube Player
        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
                videoId: '',  // Empty video ID initially
                playerVars: { 'playsinline': 1 },
                events: {
                    'onReady': onPlayerReady
                }
            });
        }
function loadAndTogglePlayPause() {
    var videoInput = document.getElementById("videoInput").value;
    var videoId = extractVideoId(videoInput);

    if (!isVideoLoaded && videoId) {
        // If the video is not loaded, load it and start playing
        player.loadVideoById(videoId);
        isVideoLoaded = true;   // Set the flag to true after loading the video
        isPlaying = true;       // Set the state to playing after loading the video
        clearError();           // Clear any error messages
    } else if (isVideoLoaded) {
        // If the video is loaded, toggle play/pause
        togglePlayPause();
    } else {
        showError();  // Show an error if invalid input
    }
}function togglePlayPause() {
    if (isPlaying) {
        player.pauseVideo();  // Pause the video
    } else {
        player.playVideo();   // Play the video
    }
    isPlaying = !isPlaying;  // Toggle the playing state
}
        function togglePlayPause() {
    if (isPlaying) {
       
        player.pauseVideo();  // Pause the video
    } else {
       
        player.playVideo();   // Play the video
    }
    isPlaying = !isPlaying;  // Toggle the playing state
}var isPlaying = false;
        function onPlayerReady(event) {}
// Load Video (works for both regular and live videos)
function loadVideo() {
    var videoInput = document.getElementById("videoInput").value;
    var videoId = extractVideoId(videoInput);  // This function extracts the video ID

    if (videoId) {
        player.loadVideoById(videoId);  // Load the video using the ID
        clearError();  // Clear any error message
    } else {
        showError();  // Show an error if the video ID is invalid
    }
}
       

        // Set Playback Speed
        function setSpeed(speed) {
            player.setPlaybackRate(speed);
        }

        // Set Custom Playback Speed (above 2x)
        function setCustomSpeed(speed) {
            const iframe = player.getIframe();  // Get the iFrame element
            const innerDoc = iframe.contentDocument || iframe.contentWindow.document;  // Get the document inside iFrame
            const video = innerDoc.querySelector('video');  // Get the video element inside

            if (video) {
                video.playbackRate = speed;  // Set custom speed (e.g., 3x, 4x)
            }
        }

        // Set Video Quality
        function setQuality(quality) {
            var suggestedQuality = quality === 480 ? 'large' : 'hd720';
            player.setPlaybackQuality(suggestedQuality);
        }

        
function extractVideoId(url) {
    var videoId = url;

    // Regular YouTube URL regex
    var urlRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;

    // Live YouTube URL regex
    var liveUrlRegex = /youtube\.com\/live\/([^"&?\/\s]{11})/i;

    // Check if the URL matches regular or live video formats
    var match = url.match(urlRegex) || url.match(liveUrlRegex);

    if (match && match[1].length == 11) {
        videoId = match[1];
    }

    return videoId.length === 11 ? videoId : null;
}

        // Clear Input Field
        function clearInput() {
           toggleButton();
            document.getElementById('videoInput').value = '';
            clearError();
        }

        function showError() {
    document.getElementById('error-message').style.display = 'block';
    const input = document.getElementById('videoInput');
    input.style.border = "solid 1px red";
    input.style.animation = "vibrate 0.3s linear 1";
}

        function clearError() {
            document.getElementById('videoInput').style.border = "none";
            document.getElementById('error-message').style.display = 'none';
            }
            // Set Playback Speed (for 1x and 2x via YouTube API, for 3x and 4x via direct manipulation)
function setSpeed(speed) {
    if (speed <= 2) {
        player.setPlaybackRate(speed);
    } else {
        const iframe = player.getIframe();  // Get the iFrame element
        const innerDoc = iframe.contentDocument || iframe.contentWindow.document;  // Get the document inside iFrame
        const video = innerDoc.querySelector('video');  // Get the video element inside

        if (video) {
            video.playbackRate = speed;  // Set custom speed (3x, 4x)
        }
    }
}// Variable to track play/pause state
var isPlaying = false;

// Function to toggle play and pause
function togglePlayPause() {
    if (isPlaying) {
       
        player.pauseVideo();  // Pause the video
    } else {
       player.playVideo();   // Play the video
           }
    isPlaying = !isPlaying;  // Toggle the state
}



function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}


    
    
    
    
    
    
    function setSpeed(speed) {
    if (speed <= 2) {
        // For 1x and 2x, use the YouTube API's setPlaybackRate
        player.setPlaybackRate(speed);
    } else {
        // For 3x and 4x, manipulate the video element inside the iframe
        const iframe = player.getIframe();  // Get the iFrame element
        const innerDoc = iframe.contentDocument || iframe.contentWindow.document;  // Get the document inside the iFrame
        const video = innerDoc.querySelector('video');  // Get the video element inside

        if (video) {
            video.playbackRate = speed;  // Set custom speed (3x, 4x)
        }
    }
}
 let isEnabled = false;
   function features(){
      /**/
      if(!isEnabled){
          credit.style.visibility = "visible";
          document.getElementsByClassName("container")[0].style.display = "block";
          document.getElementsByClassName("container")[0].style.animation = "moveRight 1s ease-in-out 1";
      }
      else{
          credit.style.visibility = "hidden";
          setTimeout(()=>{
              document.getElementsByClassName("container")[0].style.display = "none";
          },1000);
         document.getElementsByClassName("container")[0].style.animation = "moveLeft 1s ease-in-out 1";
       document.getElementsByClassName("container")[0].style.bottom = "0px";
      }
      isEnabled = !isEnabled;
       
       }
document.addEventListener('keydown', function(event) {
    if (event.key === 'f' || event.key === 'F') {
      features();
    }
  });
   function toggleButton() {
  const btn = document.getElementById('pasteBtn');
  const btn2 = document.getElementById('ClearBtn');
  btn2.style.display = (btn2.style.display === 'none') ? 'inline' : 'none' ;    
  btn.style.display = (btn.style.display === 'none') ? 'inline' : 'none';
}
   async function pasteFromClipboard() {
      toggleButton();
      try {
        const text = await navigator.clipboard.readText();
        document.getElementById("videoInput").value = text;
      } catch (err) {
        alert("Failed to paste from clipboard: " + err);
      }
    }
document.getElementById("hide").addEventListener("click", features);
document.getElementById("hide").addEventListener("click", loadAndTogglePlayPause);
features();
  function getDistanceFromTop(element) {
  const rect = element.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return rect.top + scrollTop;
}
const myElement = document.getElementById("features");
const distance = getDistanceFromTop(myElement);
myElement.style.transform = `translateY(${distance*-1}px)`;
/*
const credit = document.getElementsByClassName("element");
const distance = getDistanceFromTop(credit);
credit.style.transform = `translateY(${(distance * -1) + 10}px)`;
*/
