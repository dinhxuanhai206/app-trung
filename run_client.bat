@echo off
title Chinese Learning Platform - ReactJS Frontend
cd /d "%~dp0client"

echo ========================================================
echo   KHOI DONG FRONTEND REACTJS (CHINESE LEARNING PLATFORM)
echo ========================================================
echo.

if not exist "node_modules" (
    echo [1/2] Dang cai dat dependencies cho Client...
    call npm install
)

echo [2/2] Dang chay React Frontend tren http://localhost:5173...
call npm run dev
pause
