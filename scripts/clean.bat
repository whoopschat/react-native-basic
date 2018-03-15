@echo off

:: clean build file

if exist ../ios/build (
    rd /q /s "../ios/build"
)
if exist ../android/app/build (
    rd /q /s "../android/app/build"
)

:: clean assets file

if exist "..\android\app\src\main\assets\react\*" (
    del /q /s "..\android\app\src\main\assets\react\*"
)

:: clean res file

if exist "..\android\app\src\main\res\drawable-mdpi\src_res_*.*" (
    del /q /s "..\android\app\src\main\res\drawable-mdpi\src_res_*.*"
)
if exist "..\android\app\src\main\res\drawable-mdpi\node_modules_*.*" (
    del /q /s "..\android\app\src\main\res\drawable-mdpi\node_modules_*.*"
)
if exist "..\android\app\src\main\res\drawable-hdpi\src_res_*.*" (
    del /q /s "..\android\app\src\main\res\drawable-hdpi\src_res_*.*"
)
if exist "..\android\app\src\main\res\drawable-hdpi\node_modules_*.*" (
    del /q /s "..\android\app\src\main\res\drawable-hdpi\node_modules_*.*"
)
if exist "..\android\app\src\main\res\drawable-xhdpi\src_res_*.*" (
    del /q /s "..\android\app\src\main\res\drawable-xhdpi\src_res_*.*"
)
if exist "..\android\app\src\main\res\drawable-xhdpi\node_modules_*.*" (
    del /q /s "..\android\app\src\main\res\drawable-xhdpi\node_modules_*.*"
)
if exist "..\android\app\src\main\res\drawable-xxhdpi\src_res_*.*" (
    del /q /s "..\android\app\src\main\res\drawable-xxhdpi\src_res_*.*"
)
if exist "..\android\app\src\main\res\drawable-xxhdpi\node_modules_*.*" (
    del /q /s "..\android\app\src\main\res\drawable-xxhdpi\node_modules_*.*"
)
if exist "..\android\app\src\main\res\drawable-xxxhdpi\src_res_*.*" (
    del /q /s "..\android\app\src\main\res\drawable-xxxhdpi\src_res_*.*"
)
if exist "..\android\app\src\main\res\drawable-xxxhdpi\node_modules_*.*" (
    del /q /s "..\android\app\src\main\res\drawable-xxxhdpi\node_modules_*.*"
)
echo Done