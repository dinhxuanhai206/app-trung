@echo off
title Don dep cac file khong dung
cd /d "%~dp0"

echo ========================================================
echo   DON DEP CAC FILE MAU PROTOTYPE KHONG DUNG
echo ========================================================
echo.
echo Cac file sau se duoc xoa vi da duoc chuyen sang React va NestJS:
echo   - app.js
echo   - style.css
echo   - index.html
echo   - powershell.cmd
echo.

set /p confirm="Ban co chac chan muon xoa cac file tren? (Y/N): "
if /i "%confirm%"=="Y" (
    if exist "app.js" del /f /q "app.js"
    if exist "style.css" del /f /q "style.css"
    if exist "index.html" del /f /q "index.html"
    if exist "powershell.cmd" del /f /q "powershell.cmd"
    echo.
    echo [OK] Da don dep thanh cong cac file khong dung!
) else (
    echo [HUY] Khong xoa file nao.
)

pause
