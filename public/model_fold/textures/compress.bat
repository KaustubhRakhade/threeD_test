@echo off
:: Check if cwebp is installed
where cwebp >nul 2>nul
if %errorlevel% neq 0 (
    echo cwebp is not installed or not in PATH.
    echo Please install libwebp and ensure cwebp is accessible.
    pause
    exit /b
)

:: Loop through supported image files
for %%f in (*.jpg *.jpeg *.png *.avif) do (
    echo Converting "%%~f" to WebP...
    cwebp -m 6 -q 20 "%%~f" -o "%%~dpnf.webp"
    
    if %errorlevel% neq 0 (
        echo Failed to convert "%%~f".
    ) else (
        echo Successfully converted "%%~f" to "%%~dpnf.webp".
    )
)

echo All conversions are complete.
pause
