#!/bin/zsh

touch static/$1/style.scss

npx sass --watch static/$1/style.scss static/$1/style.css