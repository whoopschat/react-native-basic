@echo off
set MODULES_FILE=../node_modules/

if exist %MODULES_FILE% (
    echo clear...
    rd /s /Q "%MODULES_FILE%"
    echo clear...done
)
echo install...
cd ../
npm install
echo install...done