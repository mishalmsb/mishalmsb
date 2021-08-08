#!/usr/bin/env bash
hugo
commit="No comment for this commit"
[[ ! -z "${1}" ]] && commit="${1}"
cd public
git add -A
git commit -m "${commit}"
git push origin main

cd ..
git add -A
git commit -m "${commit}"
git push origin main