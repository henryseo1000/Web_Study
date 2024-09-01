// var fs = require('fs');
// var files = fs.readdirSync('./templates');

const files = [
    'api_request_study',
    'card_test',
    'chrome_prank',
    'chrome_todo',
    'flex_test',
    'get_started',
    'hello_jquery',
    'input_custom_slider',
    'simple_ai',
    'simple_login',
    'transition_keyframe_test',
    'web_compiler'
];

var listLength = files.length;

function addList () {
    for (var i = 0; i < listLength; i++) {
        const addValue = files[i];

        const p = document.createElement("p");
        const a = document.createElement("a");

        p.setAttribute('id', addValue);
        a.setAttribute('href', "/" + addValue);

        const textNode = document.createTextNode(addValue);
        a.appendChild(textNode);

        p.appendChild(a);

        document.getElementById('dir_list').appendChild(p);
    }
}

console.log(files);

window.onload = addList();