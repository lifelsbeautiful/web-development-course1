var Player = {
  trackList: [
    'song1.mp3',
    'song2.mp3',
    'song3.mp3',
  ],
  currentTrack: 0,
  status: 'pause',
  display: function () {
    return 'Track: ' + this.currentTrack + ' Status: ' + this.status;
  },
  play: function () {
    this.status = 'play';
  },
  pause: function () {
    this.status = 'pause';
  },
  next: function () {
    if (this.currentTrack < this.trackList.length - 1) {
      this.currentTrack++;
    } else {
      this.currentTrack = 0;
    }
    this.play()
  },

  prev: function () {
    if (this.currentTrack !== 0) {
      this.currentTrack--;
    } else {
      this.currentTrack = this.trackList.length - 1;
    }
    this.play()
  },

  showTracks: function () {
    for (i = 0; i < this.trackList.length; i++) {
      if (this.trackList[i] === this.currentTrack) {
        console.log(`${i + 1}. ${this.trackList[i]}`);
      } else {
        console.log(`${i + 1}. ${this.trackList[i]}`);
      }
    }
  },
};