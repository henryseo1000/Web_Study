#!/bin/zsh

if [ -n "$1" ] ; then
    touch static/$1/style.scss
    npx sass --watch static/$1/style.scss static/$1/style.css
else
    touch static/style.scss
    npx sass --watch static/style.scss static/style.css
fi