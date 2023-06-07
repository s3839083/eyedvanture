// background music
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 0,
  scene: {
    preload: preload,
    create: create
  }
};
var game = new Phaser.Game(config);
function preload() {
  //改下面這行的路徑跟檔名
  this.load.audio('backgroundMusic', './audio/pugtoosanpo.mp3');
}

function create() {
  var music = this.sound.add('backgroundMusic');
  music.play();
}

document.getElementById('towel_glow').addEventListener('mousedown', down_towel);
document.getElementById('detergent_glow').addEventListener('mousedown', down_detergent);
document.getElementById('clock_glow').addEventListener('mousedown', down_clock);
document.getElementById('boss_glasses_glow').addEventListener('mousedown', down_boss_glasses);
document.getElementById('chair_glow').addEventListener('mousedown', down_chair);

function play_music(){
  audio_back = new Audio('./audio/pugtoosanpo.mp3');
  audio_back.play();
}; 

function down_towel(e) {
  e.preventDefault();
  document.getElementById('towel_ori').style.display = 'none';
  document.getElementById('towel_glow').style.zIndex = '6';
  if(document.getElementById('bar_50').style.display == 'block'){
    document.getElementById('towel_glow').style.zIndex = '3';
    document.getElementById('mirror_sprayed').addEventListener('mousemove', one_hundry);
  }
  startX = e.clientX - this.offsetLeft;
  startY = e.clientY - this.offsetTop;
  this.addEventListener('mousemove', move);
  this.addEventListener('mouseup', stop_towel);
}

function down_detergent(e) {
  e.preventDefault();
  document.getElementById('detergent_ori').style.display = 'none';
  document.getElementById('detergent_glow').style.zIndex = '4';
  document.getElementById('stain').addEventListener('mousemove', fifty);
  startX = e.clientX - this.offsetLeft;
  startY = e.clientY - this.offsetTop;
  this.addEventListener('mousemove', move);
  this.addEventListener('mouseup', stop_detergent);
}

function down_clock(e) {
  e.preventDefault();
  document.getElementById('clock_ori').style.display = 'none';
  document.getElementById('clock_glow').style.zIndex = '6';
  startX = e.clientX - this.offsetLeft;
  startY = e.clientY - this.offsetTop;
  this.addEventListener('mousemove', move);
  this.addEventListener('mouseup', stop_clock);
}

function down_boss_glasses(e) {
  e.preventDefault();
  document.getElementById('boss_glasses_ori').style.display = 'none';
  document.getElementById('boss_glasses_glow').style.zIndex = '6';
  startX = e.clientX - this.offsetLeft;
  startY = e.clientY - this.offsetTop;
  this.addEventListener('mousemove', move);
  this.addEventListener('mouseup', stop_boss_glasses);
}

function down_chair(e) {
  e.preventDefault();
  document.getElementById('chair_ori').style.display = 'none';
  document.getElementById('chair_glow').style.zIndex = '6';
  startX = e.clientX - this.offsetLeft;
  startY = e.clientY - this.offsetTop;
  this.addEventListener('mousemove', move);
  this.addEventListener('mouseup', stop_chair);
}

function move(e) {
    x = e.clientX - startX;
    y = e.clientY - startY;
    this.style.position = "absolute";
    this.style.left = x + 'px';
    this.style.top = y + 'px';
}

function stop_towel() {
  this.style.left = 20 + '%';
  this.style.top = 62 + '%';
  if(document.getElementById('towel_glow').style.display != 'none'){
    document.getElementById('towel_ori').style.display = 'block';
  }
  document.getElementById('towel_glow').style.zIndex = '2';
  document.getElementById('mirror_sprayed').removeEventListener('mousemove', one_hundry);
  this.removeEventListener('mousemove', move);
  this.removeEventListener('mouseup', stop_towel);  
}

function stop_detergent() {
  this.style.left = 50 + '%';
  this.style.top = 51 + '%';
  if(document.getElementById('detergent_glow').style.display != 'none'){
    document.getElementById('detergent_ori').style.display = 'block';
  }
  document.getElementById('detergent_glow').style.zIndex = '2';
  document.getElementById('stain').removeEventListener('mousemove', fifty);
  this.removeEventListener('mousemove', move);
  this.removeEventListener('mouseup', stop_detergent);
}

function stop_clock() {
  this.style.left = 67.4 + '%';
  this.style.top = 19.5 + '%';
  document.getElementById('clock_glow').style.zIndex = '2';
  document.getElementById('clock_ori').style.display = 'block';
  this.removeEventListener('mousemove', move);
  this.removeEventListener('mouseup', stop_clock);
}

function stop_boss_glasses() {
  this.style.left = 67.2 + '%';
  this.style.top = 14.8 + '%';
  document.getElementById('boss_glasses_glow').style.zIndex = '2';
  document.getElementById('boss_glasses_ori').style.display = 'block';
  this.removeEventListener('mousemove', move);
  this.removeEventListener('mouseup', stop_boss_glasses);
}

function stop_chair() {
  this.style.left = 35 + '%';
  this.style.top = 44 + '%';
  document.getElementById('chair_glow').style.zIndex = '2';
  document.getElementById('chair_ori').style.display = 'block';
  this.removeEventListener('mousemove', move);
  this.removeEventListener('mouseup', stop_chair);
}

function fifty() {
  document.getElementById('stain').removeEventListener('mousemove', fifty);
  audio = new Audio('./audio/spray.mp3');
  audio.play();
  document.getElementById('detergent_glow').style.display = 'none';
  document.getElementById('detergent_ori').style.display = 'block';
  document.getElementById('detergent_ori').style.top = 10 + '%';
  document.getElementById('detergent_ori').style.left = 60 + '%';
  document.getElementById('detergent_ori').style.zIndex = '8';
  document.getElementById('detergent_ori').style.opacity = '1';
  setTimeout(() => {
    document.getElementById('bar_50').style.display = 'block';
    document.getElementById('icon_50').style.display = 'block';
    document.getElementById('icon_non_1').style.display = 'none';
    document.getElementById('stain').style.display = 'none';
    document.getElementById('detergent_ori').style.display = 'none';
  }, "1000");
}

function one_hundry() {
  document.getElementById('mirror_sprayed').removeEventListener('mousemove', one_hundry);
  audio_1 = new Audio('./audio/wiping_sound.m4a');
  audio_1.play();
  document.getElementById('towel_glow').style.display = 'none';
  document.getElementById('towel_ori').style.display = 'block';
  document.getElementById('towel_ori').style.zIndex = '10';
  document.getElementById('towel_ori').style.top = 10 + '%';
  document.getElementById('towel_ori').style.left = 53 + '%';
  document.getElementById('towel_ori').style.opacity = '1';
  setTimeout(() => {
    audio_2 = new Audio('./audio/clean.mp3');
    audio_2.play();
    document.getElementById('bar_100').style.display = 'block';
    document.getElementById('icon_100').style.display = 'block';
    document.getElementById('mirror_pass').style.display = 'block';
    document.getElementById('boss_pass').style.display = 'block';
    document.getElementById('mirror_sprayed').style.display = 'none';
    document.getElementById('boss_without_g').style.display = 'none';
    document.getElementById('boss_glasses_ori').style.display = 'none';
    document.getElementById('boss_glasses_glow').style.display = 'none';
    document.getElementById('icon_non_2').style.display = 'none';
    document.getElementById('towel_ori').style.display = 'none';
  }, "2000");
  
  setTimeout(() => {
    document.getElementsByClassName('pass')[0].style.display = 'block';
  }, "4000");
}
function begin(){
  document.getElementById('introduction').style.display = 'none';
}