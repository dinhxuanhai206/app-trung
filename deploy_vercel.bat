@echo off
title Trien Khai Ung Dung Len Vercel - Hoa Van Hoc Duong
echo ====================================================================
echo   TRIEN KHAI UNG DUNG HOA VAN HOC DUONG LEN DAM MAY VERCEL (FREE)
echo ====================================================================
echo.

cd /d "%~dp0client"

echo [1/3] Kiem tra va build ban production...
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [LOI] Qua trinh build khong thanh cong. Vui long kiem tra lai code!
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo [2/3] Build thanh cong thu muc client/dist!
echo.
echo [3/3] Dang goi Vercel de trien khai len Internet...
echo (Neu chua dang nhap Vercel, trinh duyet se tu mo de ban dang nhap 1 lan duy nhat)
echo.

call npx -y vercel --prod

echo.
echo ====================================================================
echo   HOAN TAT! Ban co the truy cap du an qua duong link Vercel vua cap.
echo ====================================================================
pause
