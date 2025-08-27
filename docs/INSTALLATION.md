# Installation Guide

Complete guide for installing the Gemini CLI Context Command on all supported platforms.

## Quick Start

For most users, we recommend the **Quick Install** method:

**Linux/macOS/WSL:**

```bash
git clone https://github.com/Beaulewis1977/gemini-cli.git
cd gemini-cli
./installers/install.sh
```

**Windows PowerShell:**

```powershell
git clone https://github.com/Beaulewis1977/gemini-cli.git
cd gemini-cli
.\installers\install.ps1
```

## Prerequisites

### Required Software

1. **Gemini CLI**
   - Must be installed and configured
   - Verify: Run `claude --version` or check that `/help` works in Gemini CLI

2. **Node.js**
   - Version 14.0.0 or later required
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify: `node --version`

3. **Git** (for most installation methods)
   - Install from [git-scm.com](https://git-scm.com/)
   - Verify: `git --version`

### Optional Software

- **curl** or **wget** (for web installer)
- **npm** (for NPM package installation)

## Installation Methods

### Method 1: Git Clone + Script Installation

This is the **recommended method** for most users.

#### Linux/macOS/WSL

```bash
# 1. Clone repository
git clone https://github.com/Beaulewis1977/gemini-cli.git
cd gemini-cli

# 2. Run installer
./installers/install.sh

# 3. Test installation
node ~/.gemini/scripts/context-cmd.js summary
```

#### Windows (PowerShell)

```powershell
# 1. Clone repository
git clone https://github.com/Beaulewis1977/gemini-cli.git
cd gemini-cli

# 2. Run installer
.\installers\install.ps1

# 3. Test installation
node $env:USERPROFILE\.gemini\scripts\context-cmd.js summary
```

#### What the installer does:

1. ✅ Checks Node.js installation and version
2. ✅ Creates `~/.gemini/scripts/` and `~/.gemini/commands/` directories
3. ✅ Backs up any existing context files
4. ✅ Copies all required files with correct permissions
5. ✅ Tests the installation
6. ✅ Shows usage information

### Method 2: One-Liner Web Installation

**Perfect for quick setups and automated deployments.**

```bash
curl -sSL https://raw.githubusercontent.com/Beaulewis1977/gemini-cli/main/installers/install-web.sh | bash
```

**Alternative with wget:**

```bash
wget -qO- https://raw.githubusercontent.com/Beaulewis1977/gemini-cli/main/installers/install-web.sh | bash
```

#### What happens:

1. Downloads the web installer script
2. Downloads all required files from GitHub
3. Installs to `~/.gemini/` directories
4. Tests the installation

#### Security considerations:

- Only run if you trust the source
- You can inspect the script first: `curl -s [URL]` to view before piping to bash
- The script downloads files from the official GitHub repository

### Method 3: NPM Global Package

_Note: This method will be available after the initial repository is published to npm._

```bash
# Install globally
npm install -g gemini-cli

# The postinstall script will automatically set up files
```

**Manual trigger if needed:**

```bash
claude-context-install
```

#### NPM method benefits:

- ✅ Easy updates via `npm update -g`
- ✅ Automatic dependency management
- ✅ Standard Node.js package management
- ✅ Version control and rollback

### Method 4: Manual Installation

**For users who prefer full control over the installation process.**

#### Step 1: Create directories

```bash
# Linux/macOS/WSL
mkdir -p ~/.gemini/scripts ~/.gemini/commands

# Windows (PowerShell)
New-Item -ItemType Directory -Path "$env:USERPROFILE\.gemini\scripts" -Force
New-Item -ItemType Directory -Path "$env:USERPROFILE\.gemini\commands" -Force
```

#### Step 2: Download files

**Option A: Git clone**

```bash
git clone https://github.com/Beaulewis1977/gemini-cli.git
cd gemini-cli
```

**Option B: Download specific files**

```bash
# Create temporary directory
mkdir temp-context-install
cd temp-context-install

# Download files (replace [URL] with raw GitHub URLs)
curl -O https://raw.githubusercontent.com/Beaulewis1977/gemini-cli/main/scripts/context-cmd.js
curl -O https://raw.githubusercontent.com/Beaulewis1977/gemini-cli/main/scripts/context-analyzer.js
curl -O https://raw.githubusercontent.com/Beaulewis1977/gemini-cli/main/scripts/context-analyzer-simple.js
curl -O https://raw.githubusercontent.com/Beaulewis1977/gemini-cli/main/scripts/package.json
curl -O https://raw.githubusercontent.com/Beaulewis1977/gemini-cli/main/commands/context.md
```

#### Step 3: Copy files to correct locations

```bash
# Linux/macOS/WSL
cp scripts/*.js ~/.gemini/scripts/
cp scripts/package.json ~/.gemini/scripts/
cp commands/context.md ~/.gemini/commands/

# Windows (PowerShell)
Copy-Item scripts\*.js $env:USERPROFILE\.gemini\scripts\
Copy-Item scripts\package.json $env:USERPROFILE\.gemini\scripts\
Copy-Item commands\context.md $env:USERPROFILE\.gemini\commands\
```

#### Step 4: Set permissions (Linux/macOS/WSL only)

```bash
chmod +x ~/.gemini/scripts/*.js
```

#### Step 5: Test installation

```bash
# Linux/macOS/WSL
node ~/.gemini/scripts/context-cmd.js summary

# Windows (PowerShell)
node $env:USERPROFILE\.gemini\scripts\context-cmd.js summary
```

### Method 5: GitHub Template

**Best for developers who want to customize or contribute.**

1. **Use Template:**
   - Visit: https://github.com/Beaulewis1977/gemini-cli
   - Click **"Use this template"** button
   - Create your own repository copy

2. **Clone Your Copy:**

   ```bash
   git clone https://github.com/YOURUSERNAME/gemini-cli.git
   cd gemini-cli
   ```

3. **Install:**

   ```bash
   ./installers/install.sh  # Linux/macOS/WSL
   .\installers\install.ps1  # Windows PowerShell
   ```

4. **Customize:**
   - Modify scripts as needed
   - Add your own features
   - Contribute back via pull requests

## Platform-Specific Notes

### Windows

**PowerShell Execution Policy:**
If you get execution policy errors:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**Windows Subsystem for Linux (WSL):**

- Use the Linux installation method within WSL
- Scripts work normally in WSL environment
- Full compatibility with WSL1 and WSL2

**Git Bash:**

- Use the Linux/macOS installation method
- Bash scripts work in Git Bash environment

### macOS

**Homebrew Node.js:**

```bash
brew install node
```

**macOS Catalina+ Security:**

- You may need to allow unsigned scripts to execute
- Go to System Preferences > Security & Privacy if prompted

### Linux

**Ubuntu/Debian:**

```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install git
sudo apt-get install git
```

**CentOS/RHEL/Fedora:**

```bash
# Install Node.js
sudo dnf install nodejs npm git
```

**Arch Linux:**

```bash
sudo pacman -S nodejs npm git
```

## Verification Steps

After installation, verify everything works correctly:

### 1. Check File Locations

**Files should exist at:**

```bash
~/.gemini/scripts/context-cmd.js
~/.gemini/scripts/context-analyzer.js
~/.gemini/scripts/context-analyzer-simple.js
~/.gemini/scripts/package.json
~/.gemini/commands/context.md
```

### 2. Test Command Execution

**Direct execution:**

```bash
node ~/.gemini/scripts/context-cmd.js summary
```

**Should output:** Context analysis or fallback message

### 3. Test Gemini CLI Integration

**In Gemini CLI session:**

```
/context
```

**Should show:** Context usage analysis

### 4. Verify Permissions (Linux/macOS/WSL)

```bash
ls -la ~/.gemini/scripts/
# Scripts should be executable (x permission)
```

## Troubleshooting Installation

### Common Installation Issues

**"Node.js not found"**

```bash
# Install Node.js from https://nodejs.org/
# Restart your terminal after installation
which node  # Should show path
```

**"Permission denied" (Linux/macOS/WSL)**

```bash
# Fix script permissions
chmod +x ~/.gemini/scripts/*.js

# Check directory permissions
ls -la ~/.gemini/
```

**"Cannot create directory"**

```bash
# Check if ~/.gemini exists and is writable
ls -la ~/
mkdir -p ~/.gemini  # Create if missing
```

**Git clone fails**

```bash
# Use HTTPS instead of SSH
git clone https://github.com/Beaulewis1977/gemini-cli.git

# Or download as ZIP
wget https://github.com/Beaulewis1977/gemini-cli/archive/main.zip
```

**Windows PowerShell execution policy**

```powershell
# Check current policy
Get-ExecutionPolicy

# Set to allow scripts
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Installation Cleanup

**If installation fails, clean up:**

```bash
# Remove incomplete installation
rm -rf ~/.gemini/scripts/context-*
rm ~/.gemini/commands/context.md

# Start fresh
rm -rf gemini-cli
```

## Advanced Installation Options

### Custom Installation Directory

You can install to a custom directory by modifying the installer scripts:

```bash
# Edit the installer
cp installers/install.sh installers/install-custom.sh

# Modify CLAUDE_DIR variable:
CLAUDE_DIR="/path/to/custom/claude/directory"
```

### Selective Installation

Install only specific components:

```bash
# Scripts only (no slash command)
cp scripts/* ~/.gemini/scripts/

# Command only (no scripts)
cp commands/context.md ~/.gemini/commands/
```

### Development Installation

For development and testing:

```bash
# Clone for development
git clone https://github.com/Beaulewis1977/gemini-cli.git
cd gemini-cli

# Create symlinks instead of copies (Linux/macOS)
ln -sf "$(pwd)/scripts/context-cmd.js" ~/.gemini/scripts/
ln -sf "$(pwd)/commands/context.md" ~/.gemini/commands/

# Now changes to source are immediately active
```

## Getting Help

- **Installation Issues**: Check this guide and [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
- **Usage Questions**: See [USAGE.md](USAGE.md)
- **Bug Reports**: [Open an issue](https://github.com/Beaulewis1977/gemini-cli/issues)
- **Feature Requests**: [Open an issue](https://github.com/Beaulewis1977/gemini-cli/issues) with enhancement label
