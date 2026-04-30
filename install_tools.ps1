# Set execution policy for the current session
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force

# Install Scoop if not present
if (!(Test-Path "$HOME\scoop")) {
    Write-Host "Installing Scoop..."
    Invoke-Expression "& {$(Invoke-RestMethod -Uri https://get.scoop.sh)} -RunAsAdmin"
}

# Add scoop shims to current session path
$env:PATH = "$HOME\scoop\shims;$env:PATH"

# Install Git and Node.js
Write-Host "Installing Git and Node.js..."
scoop install git nodejs

# Reset nodejs to ensure npm/node shims are properly linked in scoop\shims
Write-Host "Linking Node.js shims..."
scoop reset nodejs

# Add nodejs directory directly to PATH for the current session
$nodePath = "$HOME\scoop\apps\nodejs\current"
if (Test-Path $nodePath) {
    $env:PATH = "$nodePath;$env:PATH"
    Write-Host "Node.js $(node --version) and npm $(npm --version) are ready."
} else {
    Write-Host "Warning: Node.js path not found at $nodePath. Please restart your terminal."
}

Write-Host "Installation complete!"
