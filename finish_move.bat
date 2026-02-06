@echo off
echo Moving src...
robocopy src frontend\src /E /MOVE /IS /IT
if %ERRORLEVEL% GEQ 8 (
    echo Robocopy failed with error %ERRORLEVEL%
    exit /b 1
)

echo Moving remaining artifacts...
move test_login.js frontend\ 2>nul
rmdir /s /q .next 2>nul

echo Done.
