@echo off
title OMNIS-OS GitHub Uploader
color 0a
echo ===================================================
echo OMNIS OS - Auto-Updater (Pushing Complete README)
echo ===================================================
echo.

cd /d "C:\Users\shaik\.gemini\antigravity\scratch\OMNIS-OS_2"

echo [1/3] Packing updated files...
git add .

echo [2/3] Securing new code...
git commit -m "Massive update: Comprehensive Professional README"

echo [3/3] Pushing to GitHub...
git push -u https://github.com/Davood121/OMNIS-Intelligence-OS_2.git main

echo.
echo ===================================================
echo EXCELLENT! THE MASSIVE README HAS BEEN UPLOADED! 
echo.
echo Refresh your GitHub page to see the new massive README.
echo ===================================================
pause
