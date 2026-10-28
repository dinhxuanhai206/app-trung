@echo off
title Day Du An Len GitHub - Hoa Van Hoc Duong
echo ====================================================================
echo   DAY DU AN HOA VAN HOC DUONG LEN GITHUB (dinhxuanhai206/app-trung)
echo ====================================================================
echo.

cd /d "%~dp0"

echo Dang push code len branch main...
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo [THANH CONG] Toan bo du an da duoc day len GitHub thanh cong!
    echo Link repo: https://github.com/dinhxuanhai206/app-trung
) else (
    echo.
    echo [LUU Y] Neu chua dang nhap, cua so dang nhap GitHub vua mo ra tren may ban.
)

echo.
pause
