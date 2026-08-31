param([Parameter(Mandatory=$true)][string]$RepositoryUrl)

$ErrorActionPreference = "Stop"

if (-not (Test-Path ".git")) { git init }
git add .
git commit -m "Initial production landing page"
git branch -M main

$remote = git remote get-url origin 2>$null
if (-not $remote) { git remote add origin $RepositoryUrl }
elseif ($remote -ne $RepositoryUrl) { git remote set-url origin $RepositoryUrl }

git push -u origin main
