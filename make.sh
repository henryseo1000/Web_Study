#!/bin/zsh

mkdir $1
cd $PWD/$1/

touch readme.md

mkdir static
mkdir templates

cd templates
touch index.html

cd ../static
mkdir style

cd style
touch style.css