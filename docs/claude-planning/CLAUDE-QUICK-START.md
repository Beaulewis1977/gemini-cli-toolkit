# CLAUDE Quick Start: Get Running in 5 Minutes

**Document Version:** 1.0  
**Date:** 2025-01-27  
**Status:** Developer Ready  
**Alignment:** CLAUDE-BUILD-PLAN.md v2.0 MVP  
**Target:** 5-minute developer onboarding

---

## 🚀 One-Command Setup

```bash
# Clone and setup everything
git clone https://github.com/your-org/gemini-cli-toolkit.git
cd gemini-cli-toolkit
npm install
npm run setup
```

---

## ⚡ Quick Commands (MVP Ready)

### 1. Code Intelligence

```bash
gemini explain src/utils.js          # Explain code
gemini debug "variable undefined"    # Debug issues
gemini scaffold react-component      # Generate code
```

### 2. Documentation

```bash
gemini docstring src/               # Add docstrings
gemini readme                       # Generate README
gemini wiki                         # Create wiki pages
```

### 3. Git Workflow

```bash
gemini commit                       # Smart commit messages
gemini pr-description              # Generate PR descriptions
```

### 4. Testing & Context

```bash
gemini testgen src/utils.js        # Generate tests
gemini run "npm test"              # Execute with context
gemini context --analyze          # Analyze codebase
```

---

## 🔑 Authentication (2 Options)

### Option 1: Google Gemini Subscription (Recommended)

```bash
gemini auth login                   # OAuth2 flow opens browser
# Follow prompts, done!
```

### Option 2: API Key

```bash
gemini auth api-key YOUR_API_KEY   # Manual API key setup
```

---

## 📁 Project Structure (Simple)

```
gemini-cli-toolkit/
├── src/
│   ├── commands/         # 11 MVP commands
│   ├── lib/             # Core utilities
│   └── config/          # Configuration
├── test/                # Tests
├── docs/                # Documentation
└── package.json         # Dependencies
```

---

## 🛡️ Security Setup (Auto-Configured)

```bash
# Security is built-in, but verify:
npm run security-check             # Run security scan
gemini config --show-security     # Show security status
```

**Default Security:**

- ✅ Input validation enabled
- ✅ Credentials encrypted at rest
- ✅ Secure API communication
- ✅ No sensitive data logging

---

## 🧪 Verify Installation

```bash
# Test core commands work
gemini --version
gemini explain "console.log('hello')"
gemini commit --dry-run

# Run tests (optional)
npm test
```

---

## 🔧 Configuration (Optional)

### Basic Config

```bash
gemini config set model gemini-pro        # Set default model
gemini config set max-tokens 100000       # Set token limit
gemini config set cache true              # Enable caching
```

### Project-Specific Config

Create `.gemini.toml` in your project:

```toml
[gemini]
model = "gemini-pro"
max_tokens = 100000
cache_enabled = true

[commands]
explain = { detail = "standard" }
commit = { convention = "conventional" }
```

---

## 🚨 Common Issues & Solutions

### Issue: "Command not found"

```bash
npm link                    # Link global command
# or
npx gemini --version       # Use via npx
```

### Issue: "Authentication failed"

```bash
gemini auth logout         # Clear auth
gemini auth login          # Re-authenticate
```

### Issue: "Rate limit exceeded"

```bash
gemini config set rate-limit-delay 2000   # Add delay
```

---

## 📖 Need More Help?

- **Commands**: `gemini help` or `gemini [command] --help`
- **Documentation**: See `docs/` folder or [CLAUDE-BUILD-PLAN.md](./CLAUDE-BUILD-PLAN.md)
- **Issues**: Create GitHub issue
- **Security**: See [CLAUDE-SECURITY-ARCHITECTURE.md](./CLAUDE-SECURITY-ARCHITECTURE.md)

---

## 🎯 Next Steps

1. **Try a command**: `gemini explain package.json`
2. **Read the docs**: Check [CLAUDE-BUILD-PLAN.md](./CLAUDE-BUILD-PLAN.md) for full feature list
3. **Join development**: See [CLAUDE-CICD-PLAN.md](./CLAUDE-CICD-PLAN.md) for contribution guide

---

**That's it! You're ready to use the Gemini CLI AI Developer Toolkit.**

_Simple setup, powerful AI assistance, enterprise security._ 🔒✨
