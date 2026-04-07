@echo off
title OMNIS-OS GitHub Uploader
color 0b
echo ===================================================
echo OMNIS OS - Auto-Uploader (Fixing Git Account Error)
echo ===================================================
echo.

cd /d "C:\Users\shaik\.gemini\antigravity\scratch\OMNIS-OS_2"

echo [1/4] Linking your Davood121 Account...
git config --global user.email "shaik.davood121@gmail.com"
git config --global user.name "Davood121"

echo [2/4] Packing files...
git init
git branch -M main
git add .

echo [3/4] Securing code...
git commit -m "Deploying OMNIS OS v2.0 UI"

echo [4/4] Pushing to GitHub...
git remote add origin https://github.com/Davood121/OMNIS-Intelligence-OS_2.git 2>nul
git push -u https://github.com/Davood121/OMNIS-Intelligence-OS_2.git main --force

echo.
echo ===================================================
echo EXCELLENT! THE UPLOAD SHOULD NOW BE COMPLETE! 
echo.
echo Check https://github.com/Davood121/OMNIS-Intelligence-OS_2
echo ===================================================
pause
