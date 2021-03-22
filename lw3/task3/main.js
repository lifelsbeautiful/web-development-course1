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
    console.log('Play');
  },
  pause: function () {
    this.status = 'pause';
    console.log('Pause');
  },
  next: function () {
    this.currentTrack 1 >= this.trackList.length + 1;
  },
  prev: function () {
    this.currentTrack <= 0 this.trackList.length - 1;
  },
  showTracks: function () {
    console.log(this.trackList);
    console.log(this.currentTrack + ' - Сейчас звучит');
  };

  Player.display(); // "Track: song1.mp3, Status: pause"
  Player.play();
  Player.display(); // "Track: song1.mp3, Status: play"

  Player.next(); // переключает другой трек
  Player.display(); // "Track: song2.mp3, Status: play"

  Player.showTracks(); // вывести в консоль список доступных треков