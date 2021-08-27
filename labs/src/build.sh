#!/bin/bash
# Written by Charlie Stuart to compile 164 markdown files
# The old HTML was really ugly and still is. If anyone has to edit these labs,
# then deal with it I guess. I was a stupid idiot that didn't know HTML. I'm
# tryna make things easier for you

if [[ -z $1 ]]; then
	echo "USAGE: ./build.sh filename"
	exit 0
fi

TEMPLATE=$(cat template.html)
MD_FNAME="$1"
HTML_FNAME="../${MD_FNAME%.md}.html"

echo "${HTML_FNAME}"

CONTENT=$(pandoc --preserve-tabs ${MD_FNAME})

HTMLPAGE=${TEMPLATE}
HTMLPAGE="${TEMPLATE/<!-- LAB GOES HERE -->/${CONTENT}}"

echo "${HTMLPAGE}" > ${HTML_FNAME}
