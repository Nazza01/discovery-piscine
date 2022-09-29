#!/bin/bash

if [ $# -eq 0 ]; then
	echo "No arguments supplied"
else
	if [ $# -le 3 ]; then
		for args in "$@"; do
			echo $args
		done
	fi
fi

