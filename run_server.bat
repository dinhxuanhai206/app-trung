@echo off
title Chinese Learning Platform - NestJS Backend
cd /d "%~dp0server"

echo ========================================================
echo   KHOI DONG BACKEND NESTJS (CHINESE LEARNING PLATFORM)
echo ========================================================
echo.

if not exist "node_modules" (
    echo [1/2] Dang cai dat dependencies cho Server...
    call npm install
)

echo [2/2] Dang chay NestJS Backend tren http://localhost:5000/api...
call npm run start:dev
pause
