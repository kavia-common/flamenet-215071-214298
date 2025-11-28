#!/bin/bash
cd /home/kavia/workspace/code-generation/flamenet-215071-214298/flamenet_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

