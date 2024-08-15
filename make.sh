#!/bin/zsh

mkdir templates/$1
mkdir static/$1

touch static/$1/style.css static/$1/script.js

cd $PWD/templates/$1

touch readme.md index.html