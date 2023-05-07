#!/bin/bash

pkg delete-unused-node-modules.js --targets win,macos,linux \
    --output ./output/delete-unused-node-modules \
    --externals node_modules/cheerio \
    --target node16-macos-arm64

mv output/delete-unused-node-modules output/delete-unused-node-modules-mac-m1
