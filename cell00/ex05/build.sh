#!/bin/bash

if [ $# -eq 0 ]; then
	echo "No arguments supplied"
else
	for args in $*; do
		mkdir ex$args
	done
fi
