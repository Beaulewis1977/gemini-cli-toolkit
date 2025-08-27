# 🚀 Gemini CLI AI Developer Toolkit

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green.svg?style=for-the-badge)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-orange.svg?style=for-the-badge)
![Gemini](https://img.shields.io/badge/Gemini-2.5-red.svg?style=for-the-badge)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg?style=for-the-badge)

### **The Ultimate AI-Powered Developer Productivity Suite**

### _Transform your development workflow with 42+ intelligent commands_

[**Quick Start**](#-quick-start) • [**Features**](#-features) • [**Commands**](#-command-reference) • [**Documentation**](#-documentation) • [**Support**](#-support-the-project)

</div>

---

## 🎯 Overview

**Gemini CLI AI Developer Toolkit** is a comprehensive suite of AI-powered commands that revolutionizes how developers code, document, test, and manage projects. Built on Google's powerful Gemini AI models, this toolkit automates 80% of repetitive coding tasks while accelerating development velocity by 3-5x.

### Why This Toolkit?

- 🤖 **42+ AI Commands** - Complete coverage of the development lifecycle
- 🌍 **Universal Platform Support** - Native Windows, macOS, and Linux compatibility
- 🧠 **Massive Context Understanding** - Leverages Gemini's 1M+ token context windows
- ⚡ **Subscription Intelligence** - Adapts features to your Gemini tier (Free to Enterprise)
- 🎨 **Customizable Personas** - Tailor AI behavior to your needs
- 🔒 **Enterprise-Grade Security** - Production-ready with comprehensive security

---

## ✨ Features

### 🧠 **Code Intelligence & Generation**

Transform how you write and understand code with AI-powered assistance.

| Command           | Description                          | Example                                             |
| ----------------- | ------------------------------------ | --------------------------------------------------- |
| `gemini explain`  | Natural language code explanations   | `gemini explain src/auth.js`                        |
| `gemini scaffold` | Generate boilerplate from prompts    | `gemini scaffold "React component with TypeScript"` |
| `gemini debug`    | Analyze errors and suggest fixes     | `npm start \|& gemini debug`                        |
| `gemini refactor` | AI-powered code refactoring          | `gemini refactor src/legacy.js --modern`            |
| `gemini optimize` | Performance optimization suggestions | `gemini optimize src/slow-function.js`              |
| `gemini convert`  | Convert between languages/frameworks | `gemini convert app.js --to typescript`             |
| `gemini pattern`  | Identify and suggest design patterns | `gemini pattern src/`                               |

### 📚 **Documentation Automation**

Never write documentation manually again.

| Command               | Description                          | Example                              |
| --------------------- | ------------------------------------ | ------------------------------------ |
| `gemini docstring`    | Auto-generate function documentation | `gemini docstring src/utils.py`      |
| `gemini readme`       | Generate comprehensive README files  | `gemini readme > README.md`          |
| `gemini wiki`         | Create complete GitHub wikis         | `gemini wiki --publish`              |
| `gemini api-docs`     | Generate API documentation           | `gemini api-docs src/api/`           |
| `gemini changelog`    | Auto-generate changelogs             | `gemini changelog v1.0.0..HEAD`      |
| `gemini landing-page` | Create project landing pages         | `gemini landing-page --theme modern` |

### 🧪 **Testing & Quality Assurance**

Ensure code quality with AI-powered testing and analysis.

| Command                   | Description                        | Example                        |
| ------------------------- | ---------------------------------- | ------------------------------ |
| `gemini testgen`          | Generate comprehensive test suites | `gemini testgen src/auth.js`   |
| `gemini coverage`         | Analyze and improve test coverage  | `gemini coverage --suggest`    |
| `gemini review`           | AI code review with best practices | `gemini review feature-branch` |
| `gemini security-scan`    | Security vulnerability analysis    | `gemini security-scan --fix`   |
| `gemini performance-test` | Generate performance benchmarks    | `gemini performance-test api/` |

### 🔀 **Git & DevOps Integration**

Streamline your git workflow and CI/CD pipelines.

| Command                  | Description                       | Example                            |
| ------------------------ | --------------------------------- | ---------------------------------- |
| `gemini commit`          | AI-generated conventional commits | `gemini commit`                    |
| `gemini release-notes`   | Auto-generate release notes       | `gemini release-notes v2.0.0`      |
| `gemini pr-description`  | Create detailed PR descriptions   | `gemini pr-description`            |
| `gemini ci-fix`          | Analyze and fix CI/CD issues      | `gemini ci-fix .github/workflows/` |
| `gemini merge-conflicts` | Intelligent conflict resolution   | `gemini merge-conflicts resolve`   |

### 📊 **Project Management**

AI-powered project planning and management.

| Command                   | Description                            | Example                            |
| ------------------------- | -------------------------------------- | ---------------------------------- |
| `gemini roadmap`          | Generate project roadmaps              | `gemini roadmap --quarters 4`      |
| `gemini estimate`         | Effort estimation for tasks            | `gemini estimate "new feature"`    |
| `gemini tech-debt`        | Identify and prioritize technical debt | `gemini tech-debt analyze`         |
| `gemini dependency-audit` | Analyze and update dependencies        | `gemini dependency-audit --update` |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0.0 or higher
- **Gemini API Key** (Get one at [Google AI Studio](https://makersuite.google.com/app/apikey))
- **Git** (for version control features)

### Installation

```bash
# Install globally via npm
npm install -g gemini-cli-toolkit

# Or clone and link for development
git clone https://github.com/blewisxx/gemini-cli-toolkit.git
cd gemini-cli-toolkit
npm install
npm link
```

### Configuration

1. **Set up your Gemini API key:**

```bash
# Option 1: Environment variable (recommended)
export GEMINI_API_KEY="your-api-key-here"

# Option 2: Configuration file
gemini config set api-key "your-api-key-here"
```

2. **Initialize in your project:**

```bash
# Create .gemini directory structure
gemini init

# This creates:
# .gemini/
#   ├── commands/      # Custom project commands
#   ├── templates/     # Code generation templates
#   └── config.toml    # Project-specific configuration
```

### Basic Usage

```bash
# Explain code
gemini explain src/complex-algorithm.js

# Generate a React component
gemini scaffold "React component" "UserProfile with avatar and bio"

# Auto-generate documentation
gemini docstring src/ --recursive

# Create smart commit message
git add .
gemini commit

# Generate comprehensive README
gemini readme > README.md

# Create project wiki
gemini wiki --analyze-all

# Debug an error
npm test |& gemini debug
```

---

## 📖 Command Reference

### Core Syntax

```bash
gemini <command> [input] [options] ["persona modifications"]
```

### Examples with Persona Customization

```bash
# Default behavior
gemini explain src/auth.js

# Add context for better results
gemini explain src/auth.js "Focus on security implications"

# Adjust expertise level
gemini explain src/auth.js "Explain for a junior developer"

# Project-specific requirements
gemini scaffold "API endpoint" "Use our company's auth middleware"
```

### Global Options

- `--model <model>` - Choose Gemini model (pro/flash/flash-lite)
- `--verbose` - Detailed output with token usage
- `--dry-run` - Preview without making changes
- `--config <file>` - Use specific configuration file
- `--no-cache` - Disable context caching

---

## ⚙️ Configuration

### Directory Structure

```
~/.gemini/                 # Global configuration
├── commands/             # Global custom commands
├── templates/            # Global code templates
└── config.toml          # Global settings

./.gemini/                # Project configuration (takes precedence)
├── commands/             # Project-specific commands
├── templates/            # Project templates
└── config.toml          # Project settings
```

### Creating Custom Commands

Create a `.toml` file in `commands/` directory:

```toml
# ~/.gemini/commands/review.toml
description = "Custom code review for our standards"
prompt = """
You are a senior developer reviewing code for our team.
Check for our specific conventions:
- All functions must have JSDoc comments
- Use async/await over promises
- Follow our naming conventions

Review this code: {{args}}
"""

[config]
model = "gemini-2.5-flash"
temperature = 0.3
```

Use your custom command:

```bash
gemini review src/new-feature.js
```

### Subscription Tier Features

| Feature          | Free  | Tier 1   | Tier 2   | Enterprise |
| ---------------- | ----- | -------- | -------- | ---------- |
| Basic Commands   | ✅    | ✅       | ✅       | ✅         |
| Requests/Min     | 15    | 150      | 1000     | 4000       |
| Max Context      | 100K  | 500K     | 1M       | 2M         |
| Caching          | Basic | Advanced | Advanced | Enterprise |
| Batch Processing | ❌    | ✅       | ✅       | ✅         |
| Priority Support | ❌    | ❌       | ✅       | ✅         |

---

## 🖥️ Platform Support

### Windows

- **PowerShell** and **Command Prompt** support
- Native path handling with backslashes
- Windows Terminal integration
- `.ps1` and `.bat` script execution

### macOS

- **Terminal** and **iTerm2** support
- Homebrew installation available
- Native zsh/bash integration
- macOS Shortcuts app integration

### Linux

- Full support for all major distributions
- Package manager installation (apt/yum/snap)
- Shell script integration
- Docker container available

---

## 🛠️ Advanced Usage

### Template System

Create reusable templates for code generation:

```javascript
// .gemini/templates/component.jsx
import React from 'react';
import styles from './{{name}}.module.css';

const {{name}} = ({ {{props}} }) => {
  return (
    <div className={styles.container}>
      {{content}}
    </div>
  );
};

export default {{name}};
```

### Batch Processing

Process multiple files efficiently:

```bash
# Generate tests for all components
gemini testgen src/components/**/*.jsx --batch

# Add documentation to all Python files
gemini docstring **/*.py --recursive

# Security scan entire codebase
gemini security-scan . --comprehensive
```

### CI/CD Integration

```yaml
# .github/workflows/ai-assist.yml
name: AI-Assisted Development
on: [push, pull_request]

jobs:
  ai-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: AI Code Review
        run: gemini review ${{ github.sha }}
      - name: Generate Documentation
        run: gemini api-docs --update
      - name: Security Scan
        run: gemini security-scan --fail-on-high
```

---

## 🤝 Contributing

We welcome contributions! See our [Contributing Guide](CONTRIBUTING.md) for details.

```bash
# Fork and clone
git clone https://github.com/yourusername/gemini-cli-toolkit.git

# Create feature branch
git checkout -b feature/amazing-feature

# Make changes and test
npm test

# Submit PR
gemini pr-description  # Auto-generate PR description!
```

---

## 📈 Performance & Optimization

### Context Caching

- **4x cost reduction** through intelligent caching
- Automatic cache invalidation
- Project-specific cache management

### Token Optimization

- Smart context compression for large codebases
- Efficient token usage based on subscription tier
- Batch processing for multiple operations

---

## 🐛 Troubleshooting

### Common Issues

**API Key Not Found**

```bash
# Check if API key is set
echo $GEMINI_API_KEY

# Set it if missing
export GEMINI_API_KEY="your-key"
```

**Rate Limiting**

```bash
# Check your subscription tier
gemini config show tier

# Use batch mode for multiple operations
gemini testgen src/**/*.js --batch --delay 100
```

**Large Context Errors**

```bash
# Use progressive analysis
gemini analyze --progressive --max-chunk 50000
```

---

## 📚 Documentation

- [Complete User Guide](https://github.com/blewisxx/gemini-cli-toolkit/wiki)
- [API Reference](https://github.com/blewisxx/gemini-cli-toolkit/wiki/API-Reference)
- [Custom Commands Guide](https://github.com/blewisxx/gemini-cli-toolkit/wiki/Custom-Commands)
- [Template System](https://github.com/blewisxx/gemini-cli-toolkit/wiki/Templates)
- [CI/CD Integration](https://github.com/blewisxx/gemini-cli-toolkit/wiki/CI-CD)

---

## 🎯 Roadmap

### Q1 2025

- ✅ Core command suite (42+ commands)
- ✅ Cross-platform support
- ✅ Gemini API integration
- 🔄 Beta testing program

### Q2 2025

- 📋 Visual Studio Code extension
- 📋 JetBrains IDE integration
- 📋 Web dashboard for analytics
- 📋 Team collaboration features

### Q3 2025

- 📋 Enterprise features
- 📋 Self-hosted deployment option
- 📋 Advanced security compliance
- 📋 Multi-language UI support

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🏆 Support the Project

<div align="center">

### Designed and Built by **Beau Lewis**

[![Email](https://img.shields.io/badge/Email-blewisxx%40gmail.com-blue?style=for-the-badge&logo=gmail)](mailto:blewisxx@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-blewisxx-black?style=for-the-badge&logo=github)](https://github.com/blewisxx)

I'm passionate about creating tools that empower developers and make coding more enjoyable. If this toolkit helps accelerate your development workflow and you'd like to support continued development of free, open-source developer tools:

[![Ko-fi](https://img.shields.io/badge/Ko--fi-Support%20Development-red?style=for-the-badge&logo=ko-fi)](https://ko-fi.com/beaulewis)
[![Venmo](https://img.shields.io/badge/Venmo-%40BeauinTulsa-blue?style=for-the-badge&logo=venmo)](https://venmo.com/BeauinTulsa)

Your support helps me dedicate more time to building tools that make developers' lives easier. Thank you! 🙏

</div>

---

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=blewisxx/gemini-cli-toolkit&type=Date)](https://star-history.com/#blewisxx/gemini-cli-toolkit&Date)

---

<div align="center">

### **Transform your development workflow today!**

```bash
npm install -g gemini-cli-toolkit
```

**Made with ❤️ by developers, for developers**

</div>
