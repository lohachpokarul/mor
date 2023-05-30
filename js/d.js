let btnClick = document.querySelector('.q');

btnClick.addEventListener('click', function(){
  btnClick.textContent++;
  let audio = new Audio();
  audio.src = './click.mp3';
  audio.volume = 0.3;
  audio.autoplay = true;
  return true;

})