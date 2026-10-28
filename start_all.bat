@echo off
title Khoi Dong Toan Bo He Thong - Hoa Van Hoc Duong
echo =================================================================
echo   KHOI DONG HE THONG HOC TIENG TRUNG (REACT CLIENT + NEST SERVER)
echo =================================================================
echo.

echo [1/2] Dang mo cua so chay Frontend React (Vite)...
start "React Client (Port 5173)" cmd /c "cd /d %~dp0client && if not exist node_modules (echo Dang cai dat thu vien Client... && npm install) && echo Dang chay client... && npm run dev"

echo [2/2] Dang mo cua so chay Backend NestJS (Port 5000)...
start "NestJS Backend (Port 5000)" cmd /c "cd /d %~dp0server && if not exist node_modules (echo Dang cai dat thu vien Server... && npm install) && echo Dang chay server... && npm run start:dev"

echo.
echo He thong dang duoc khoi dong trong cac cua so rieng biet.
echo Sau khoang 10-15 giay, hay mo trinh duyet truy cap:
echo.
echo   -> Frontend: http://localhost:5173/#/reading
echo   -> Backend API: http://localhost:5000/api
echo.
timeout /t 5
