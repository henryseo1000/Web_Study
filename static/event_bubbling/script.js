var itemList = document.querySelector('.itemList');
itemList.addEventListener('click', function(event) {
    event.preventDefault();
    if (event.target.tagName === "INPUT" && !(event.target.tagName === "LABEL")){
        alert('clicked');
        event.target.checked = true
    }
});

var itemList = document.querySelector('.itemList');

var li = document.createElement('li');
var input = document.createElement('input');
var label = document.createElement('label');
var labelText = document.createTextNode('이벤트 위임 학습');

input.setAttribute('type', 'checkbox');
input.setAttribute('id', 'item3');

label.setAttribute('for', 'item3');
label.appendChild(labelText);

li.appendChild(input);
li.appendChild(label);

itemList.appendChild(li);