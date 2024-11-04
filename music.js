document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio-player');
    const playButton = document.getElementById('play-button');
    const pauseButton = document.getElementById('pause-button');
    const stopButton = document.getElementById('stop-button');
    const songTitle = document.getElementById('song-title');

    playButton.addEventListener('click', function() {
        audioPlayer.play();
        songTitle.textContent = 'Playing: song.mp3';
    });

    pauseButton.addEventListener('click', function() {
        audioPlayer.pause();
        songTitle.textContent = 'Paused';
    });

    stopButton.addEventListener('click', function() {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        songTitle.textContent = 'Stopped';
    });

    audioPlayer.addEventListener('ended', function() {
        songTitle.textContent = 'No song selected';
    });
});
