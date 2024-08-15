let imgs = document.querySelectorAll('img');
let videos = document.querySelectorAll('video')
imgs.forEach((a, i) => {
  a.src = 'https://cdn.pixabay.com/photo/2024/03/02/13/05/orange-parrots-8608540_1280.jpg'
});
videos.forEach((a, i) => {
  a.playbackRate = 16
})