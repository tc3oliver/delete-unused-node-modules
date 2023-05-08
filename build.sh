#!/bin/bash

pkg delete-unused-node-modules.js --targets macos,linux,node16-macos-arm64 \
    --output ./output/delete-unused-node-modules
