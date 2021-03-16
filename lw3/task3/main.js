var MusicPlayer = {
  trackList: [
    'song1.mp3',
    'song2.mp3',
    'song3.mp3',
  ],
  currentTrack: 'song1.mp3',
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
    // TODO: проиграть следующую композицию
  },
  prev: function () {
    // TODO: проиграть предыдущую композицию
  },
  showTracks: function () {
    // TODO: вывести в console.log список треков
    // в формате:
    // 1. song1.mp3
    // 2. song2.mp3 - играет сейчас
    // 3. song3.mp3
  }
};

Player.display(); // "Track: song1.mp3, Status: pause"
Player.play();
Player.display(); // "Track: song1.mp3, Status: play"

Player.next(); // переключает другой трек
Player.display(); // "Track: song2.mp3, Status: play"

Player.showTracks(); // вывести в консоль список доступных треков