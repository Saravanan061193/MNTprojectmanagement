@echo off
cd /d "%~dp0"
echo Starting Magizh Asset Manager...
echo Current Directory: %CD%

start "Backend Server" cmd /k "cd backend && node server.js"
timeout /t 5 >nul
start http://localhost:3000
start "Frontend Application" cmd /k "cd frontend && npm run dev"

echo ---------------------------------------------------
echo Services are launching...
echo Please wait for "Ready in X.Xs" in the Frontend window.
echo ---------------------------------------------------
echo Frontend: http://localhost:3000
echo Backend: http://localhost:5000
echo ---------------------------------------------------
echo Login: admin@magizh.com / admin123
echo ---------------------------------------------------
pause
