#!/usr/bin/env sh
set -e

yarn build
cd dist

git init
git add .
git commit -m 'deploy'

git push -f git@github.com:AlexxMart/AlexxMart.github.io.git master

cd -