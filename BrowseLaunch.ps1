.\project.ps1

$pwd = pwd
$path = $pwd[0].Path
$file = "\index.html"

$path = $path + $file

Start-Process browser.exe $path