#!/bin/bash

# Start your Node.js application here
echo "Running application-start script..."
npm install
npm install -g serverless
serverless deploy
