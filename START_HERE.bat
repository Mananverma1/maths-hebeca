@echo off
echo ========================================
echo  Maths Hebeca Website - Quick Launcher
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is NOT installed!
    echo.
    echo Please install Node.js first:
    echo 1. Go to https://nodejs.org/
    echo 2. Download the LTS version
    echo 3. Install it
    echo 4. Restart this script
    echo.
    echo Opening Node.js website in your browser...
    start https://nodejs.org/
    pause
    exit /b 1
)

echo [OK] Node.js is installed!
echo.

REM Check if dependencies are installed
if not exist "node_modules" (
    echo Installing dependencies (this may take a few minutes)...
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] Failed to install dependencies!
        pause
        exit /b 1
    )
    echo.
    echo [OK] Dependencies installed successfully!
    echo.
) else (
    echo [OK] Dependencies already installed!
    echo.
)

echo Starting development server...
echo.
echo The website will open at: http://localhost:5173
echo.
echo Press Ctrl+C to stop the server
echo.
echo ========================================
echo.

call npm run dev

pause
