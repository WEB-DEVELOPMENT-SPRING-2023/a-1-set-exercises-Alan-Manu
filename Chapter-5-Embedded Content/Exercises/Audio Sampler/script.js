// This function plays a soundfile passed as an argument
function playSound(soundfile) {
    // Get the audio element with id "sound"
    var sound = document.getElementById("sound");
    // Set the source of the audio element to the soundfile
    sound.src = soundfile;
    // Play the audio file
    sound.play();
    }