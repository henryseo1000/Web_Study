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


var card4 = document.getElementById('move2');
var move_mode = false;
card4.addEventListener('mouseup', function(e){
  // 절대 위치를 구한다
  var targetTop = card4.getBoundingClientRect().top;
  var targetBottom = card4.getBoundingClientRect().bottom;
  var targetLeft = card4.getBoundingClientRect().left;
  var targetRight = card4.getBoundingClientRect().right;

  console.log(targetTop + ' ' + targetBottom + ' ' + targetLeft + ' ' + targetRight);
  move_mode = !move_mode;
  if (move_mode){
    card4.style = `z-index: 99; transition: 3s ease-in-out`
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

// I Believe I Can Touch The Sky
var drag = document.getElementById('drag');

let init_x = drag.style.offsetLeft
let init_y = drag.style.offsetTop
let click_x = 0;
let click_y = 0;
let cur_x = 0;
let cur_y = 0;

const mouseDownHandler = (e) => {
  click_x = e.offsetX;
  click_y = e.offsetY;

  drag.addEventListener('mouseup', mouseUpHandler)
  drag.addEventListener('mousemove', mouseMoveHandler)
}

const mouseMoveHandler = (e) => {
  cur_x = e.offsetX;
  cur_y = e.offsetY;

  console.log("x: " + cur_x + "y: " + cur_y);
  drag.style.position = 'absolute'
  drag.style.top = `${init_x + cur_x - click_x}px`;
  drag.style.left = `${init_y + cur_y - click_y}px`;
}

const mouseUpHandler = () => {
  drag.style.position = ''
  drag.style.top = `${drag.offsetTop + cur_x - click_x}px`;
  drag.style.left = `${drag.offsetLeft + cur_y - click_y}px`;

  drag.removeEventListener('mouseup', mouseUpHandler)
  drag.removeEventListener('mousedown', mouseMoveHandler)
  drag.addEventListener('mousedown', mouseDownHandler)
}

drag.addEventListener('mousedown', mouseDownHandler)