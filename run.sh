#!/bin/bash
kill $(lsof -t -i:8080)
nohup node server.js &