#!/bin/zsh

if [ -n "$1" ] ; then
    touch static/$1/style.scss
    npx sass --watch static/$1/style.scss static/$1/style.css
else
    npx sass --watch static/global.scss static/global.css
fi