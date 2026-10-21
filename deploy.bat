@echo off
echo ========================================================
echo   Uploading Wei Jing T's Lesson English Studio to GitHub
echo ========================================================
set "PATH=C:\Program Files\Git\cmd;C:\Program Files\Git\ucrt64\bin;%PATH%"
cd /d "%~dp0"

git config --global --add safe.directory "*"
git status
git add .
git commit -m "Update Wei Jing T interactive English studio" 2>nul
git push -u origin main

echo.
if %ERRORLEVEL% equ 0 (
    echo [SUCCESS] Repository pushed to https://github.com/log210788/wt
    echo Live GitHub Pages URL: https://log210788.github.io/wt/
) else (
    echo [NOTE] If prompted by GitHub, please complete the sign-in in your browser.
)
pause
