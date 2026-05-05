$files = Get-ChildItem -Path src -Recurse -File
Write-Host "Found $($files.Count) files in src"
foreach ($file in $files) {
    Write-Host "Checking $($file.FullName) with extension $($file.Extension)"
    if ($file.Extension -match 'tsx|ts|css') {
        $f = $file.FullName
        $c = Get-Content -LiteralPath $f | Out-String
        $nc = $c -replace 'cyan-', 'orange-'
        $nc = $nc -replace 'blue-', 'orange-'
        if ($c.Trim() -ne $nc.Trim()) {
            Set-Content -LiteralPath $f -Value $nc
            Write-Host "Updated $f"
        }
    }
}
