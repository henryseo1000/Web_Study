// Test Card Animation
var card1 = document.getElementById('test');
card1.addEventListener('mousemove', function(e){
  var x = e.offsetX
  var y = e.offsetY
  var xdeg = -1/5 * x + 20
  var ydeg = 4/30 * y - 20
  card1.style = `transform: perspective(300px) rotateY(${ydeg}deg) rotateX(${xdeg}deg)`
  console.log(x + " " + y)
})
card1.addEventListener('mouseout', function(e){
  card1.style = `transform: perspective(0px) rotateY(0deg) rotateX(0deg)`
})

// Hover and Transition
var card2 = document.getElementById('change');

// Click and Move
var card3 = document.getElementById('move');
var size_mode = false;
card3.addEventListener('mouseup', function(){
  size_mode = !size_mode;

  if(size_mode){
    card3.style = `z-index: 99; transition: 2s ease-in-out; transform: scale(.5)`
  }
  else{
    card3.style = `z-index: ; transform: scale(1); transition: 2s ease-in-out;`
  }
})

// I Just Rather Be Alone
var alone = document.getElementById('alone');
alone.addEventListener('mouseup', function(){
  const disapper = async () => {
    alone.style = 'transform: scale(0); transition: all 2s'
  }
  const forever = () => {
    alone.style.display = 'none'
  }
  disapper().then(()=>{setTimeout(forever, 2000)})
})
