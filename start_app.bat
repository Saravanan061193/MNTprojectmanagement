@echo off
echo Starting Magizh Asset Manager...

start "Backend Server" cmd /k "npm run dev"
start "Frontend Application" cmd /k "cd frontend && npm run dev"

echo Services started!
echo Frontend: http://localhost:3000
echo Backend: http://localhost:5000
pause
