#!/bin/zsh

mkdir templates/$1
mkdir static/$1

touch static/$1/style.css static/$1/script.js

cd $PWD/templates/$1

touch $1.md index.html

echo "<!DOCTYPE html>\n
<html lang=\"en\">\n
<head>\n
    <meta charset="UTF-8">\n
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n
    <link rel=\"stylesheet\" href=\"{{ url_for('static', filename='$1/global.css')}}\">\n
    <title>Web Study | By Henry</title>
</head>
<body>
  
</body>
</html>

<script src=\"{{ url_for('static', filename='$1/script.js')}}\"></script>" | tee index.html > 'dev/null'