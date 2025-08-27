# CLAUDE Project Scaffold: Gemini CLI AI Developer Toolkit

**Document Version:** 1.0  
**Date:** 2025-01-27  
**Status:** Implementation Guide  
**Alignment:** CLAUDE-BUILD-PLAN.md v2.0 MVP  
**Focus:** Security-First Directory Structure  

---

## 🎯 MVP Project Structure

This document outlines the **MVP-focused directory structure** for the Gemini CLI AI Developer Toolkit. The structure prioritizes **security, maintainability, and scalability** while keeping the MVP implementation manageable.

### Core Principles

1. **Security-First**: Sensitive files isolated, proper permissions, no secrets in code
2. **Clear Separation**: Commands, configs, tests, and docs clearly separated
3. **Cross-Platform**: Works identically on Windows, macOS, and Linux
4. **Scalable Foundation**: Easy to add the remaining 30+ commands in future phases

---

## Root Directory Structure

```
gemini-cli-toolkit/
├── 📁 epic-summaries/              # 📋 MANDATORY: Epic implementation summaries
│   ├── 📁 EP-A1/                  # Core Code Understanding Epic
│   │   ├── EPIC-SUMMARY.md         # Main epic completion summary (max 1 page)
│   │   ├── HANDOFF.md             # Handoff notes to next epic (max 1/2 page)
│   │   └── 📁 SUB-AGENTS/         # Sub-agent task summaries
│   │       ├── security-scanner-01.md
│   │       ├── test-agent-01.md
│   │       └── code-review-02.md
│   ├── 📁 EP-B1/                  # Documentation Generation Epic
│   ├── 📁 EP-C1/                  # Test Generation Epic  
│   ├── 📁 EP-D1/                  # Git Workflow Epic
│   └── 📁 EP-F1/                  # Custom Commands Epic
│
├── 📁 .github/                    # CI/CD and GitHub automation
│   ├── 📁 workflows/
│   │   ├── ci.yml                 # Main CI pipeline with security scanning
│   │   ├── security.yml           # Dedicated security checks
│   │   ├── release.yml            # Automated releases
│   │   └── docker.yml             # Container builds
│   ├── 📁 ISSUE_TEMPLATE/
│   ├── 📁 PULL_REQUEST_TEMPLATE/
│   └── dependabot.yml             # Automated dependency updates
│
├── 📁 .devcontainer/              # Development containers
│   ├── devcontainer.json
│   └── Dockerfile
│
├── 📁 docker/                     # Production containerization
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── .dockerignore
│
├── 📁 src/                        # 🔒 Core application code
│   ├── 📁 commands/               # MVP: 11 command implementations
│   │   ├── explain.ts             # Code explanation
│   │   ├── debug.ts               # Error analysis
│   │   ├── scaffold.ts            # Code generation
│   │   ├── docstring.ts           # Documentation generation
│   │   ├── readme.ts              # README generation
│   │   ├── wiki.ts                # Wiki generation
│   │   ├── commit.ts              # Smart commits
│   │   ├── pr-description.ts      # PR descriptions
│   │   ├── testgen.ts             # Test generation
│   │   ├── run.ts                 # Custom scripts
│   │   └── context.ts             # Context analysis
│   │
│   ├── 📁 lib/                    # 🔒 Core libraries
│   │   ├── 📁 security/           # Security modules
│   │   │   ├── auth-manager.ts    # Authentication handling
│   │   │   ├── input-validator.ts # Input sanitization
│   │   │   ├── secure-storage.ts  # Platform-specific secure storage
│   │   │   └── audit-logger.ts    # Security audit logging
│   │   │
│   │   ├── 📁 api/                # External API clients
│   │   │   ├── gemini-client.ts   # Gemini API wrapper
│   │   │   ├── rate-limiter.ts    # Rate limiting
│   │   │   └── subscription-detector.ts
│   │   │
│   │   ├── 📁 cache/              # Caching system
│   │   │   ├── cache-manager.ts   # Cache orchestration
│   │   │   ├── file-cache.ts      # Local file caching
│   │   │   └── cache-encryption.ts # Encrypted cache
│   │   │
│   │   ├── 📁 context/            # Context management
│   │   │   ├── project-analyzer.ts
│   │   │   ├── token-calculator.ts
│   │   │   └── context-compressor.ts
│   │   │
│   │   ├── 📁 templates/          # Template system
│   │   │   ├── template-loader.ts
│   │   │   ├── template-compiler.ts
│   │   │   └── style-analyzer.ts
│   │   │
│   │   └── 📁 utils/              # Utilities
│   │       ├── platform-utils.ts  # Cross-platform helpers
│   │       ├── file-utils.ts      # File operations
│   │       ├── crypto-utils.ts    # 🔒 Cryptographic utilities
│   │       └── logger.ts          # Structured logging
│   │
│   ├── 📁 types/                  # TypeScript type definitions
│   │   ├── api.ts                 # API interfaces
│   │   ├── commands.ts            # Command interfaces
│   │   ├── config.ts              # Configuration types
│   │   └── security.ts            # 🔒 Security types
│   │
│   ├── 📁 config/                 # 🔒 Configuration management
│   │   ├── default-config.ts      # Default configuration
│   │   ├── config-loader.ts       # Configuration loading
│   │   ├── config-validator.ts    # 🔒 Configuration validation
│   │   └── schema.ts              # Configuration schema
│   │
│   ├── main.ts                    # Application entry point
│   ├── cli.ts                     # CLI interface
│   └── index.ts                   # Public API exports
│
├── 📁 test/                       # 🔒 Test suite
│   ├── 📁 unit/                   # Unit tests
│   │   ├── 📁 commands/           # Command unit tests
│   │   ├── 📁 lib/                # Library unit tests
│   │   └── 📁 security/           # 🔒 Security unit tests
│   │
│   ├── 📁 integration/            # Integration tests
│   │   ├── api-integration.test.ts
│   │   ├── command-integration.test.ts
│   │   └── security-integration.test.ts
│   │
│   ├── 📁 e2e/                    # End-to-end tests
│   │   ├── full-workflow.test.ts
│   │   └── cross-platform.test.ts
│   │
│   ├── 📁 fixtures/               # Test data
│   │   ├── 📁 projects/           # Sample projects
│   │   ├── 📁 responses/          # Mock API responses
│   │   └── 📁 configs/            # Test configurations
│   │
│   ├── 📁 security/               # 🔒 Security tests
│   │   ├── penetration.test.ts    # Penetration tests
│   │   ├── vulnerability.test.ts  # Vulnerability tests
│   │   └── audit.test.ts          # Audit tests
│   │
│   └── setup.ts                   # Test setup and utilities
│
├── 📁 templates/                  # Default templates
│   ├── 📁 global/                 # Global templates
│   │   ├── 📁 react/
│   │   ├── 📁 vue/
│   │   ├── 📁 node/
│   │   └── 📁 python/
│   │
│   └── 📁 defaults/               # Built-in defaults
│       ├── component.template.ts
│       ├── test.template.ts
│       └── readme.template.md
│
├── 📁 docs/                       # 📚 Documentation
│   ├── 📁 api/                    # API documentation
│   ├── 📁 guides/                 # User guides
│   ├── 📁 examples/               # Usage examples
│   ├── 📁 security/               # 🔒 Security documentation
│   │   ├── security-guide.md
│   │   ├── threat-model.md
│   │   └── incident-response.md
│   └── 📁 development/            # Developer documentation
│
├── 📁 scripts/                    # 🔒 Build and utility scripts
│   ├── build.sh                   # Cross-platform build
│   ├── test.sh                    # Test runner
│   ├── security-scan.sh           # 🔒 Security scanning
│   ├── setup-dev.sh               # Development setup
│   └── release.sh                 # Release automation
│
├── 📁 config/                     # 🔒 Project configuration
│   ├── eslint.config.js           # Code quality
│   ├── jest.config.js             # Testing
│   ├── tsconfig.json              # TypeScript
│   ├── docker-compose.yml         # Development containers
│   └── security-config.yml        # 🔒 Security configuration
│
├── 📁 .security/                  # 🔒 Security-specific files
│   ├── .secrets.example           # Example secrets file
│   ├── security-policy.md         # Security policy
│   └── vulnerability-disclosure.md
│
├── 📄 package.json                # Node.js package configuration
├── 📄 package-lock.json           # Dependency lock file
├── 📄 tsconfig.json               # TypeScript configuration
├── 📄 .gitignore                  # 🔒 Git ignore (includes secrets)
├── 📄 .npmignore                  # NPM ignore
├── 📄 .env.example                # 🔒 Environment variables example
├── 📄 LICENSE                     # MIT License
├── 📄 README.md                   # Project README
├── 📄 SECURITY.md                 # 🔒 Security guidelines
├── 📄 CONTRIBUTING.md             # Contribution guidelines
└── 📄 CHANGELOG.md                # Version history
```

---

## 🔒 Security-Critical File Permissions

### Sensitive Files (600 - Owner Read/Write Only)
```bash
# These files contain secrets or sensitive configuration
~/.gemini/config.yaml              # User configuration
~/.gemini/auth/credentials.json    # Authentication credentials
.env                               # Environment variables
.secrets                           # Local secrets (never committed)
```

### Executable Files (755 - Owner Full, Others Read/Execute)
```bash
scripts/build.sh
scripts/test.sh  
scripts/security-scan.sh
bin/gemini.js
```

### Configuration Files (644 - Owner Read/Write, Others Read)
```bash
package.json
tsconfig.json
eslint.config.js
.gitignore
```

---

## User Configuration Structure

### Global Configuration (`~/.gemini/`)
```
~/.gemini/
├── 📄 config.yaml                # 🔒 Main configuration
├── 📁 auth/                      # 🔒 Authentication data
│   ├── credentials.json          # 🔒 600 permissions
│   └── tokens.json               # 🔒 600 permissions
├── 📁 cache/                     # Local cache
│   ├── context/                  # Context cache
│   └── responses/                # API response cache
├── 📁 templates/                 # User templates
│   ├── 📁 react/
│   ├── 📁 vue/
│   └── 📁 custom/
├── 📁 scripts/                   # Global custom scripts
│   ├── analyze-security.toml
│   ├── generate-docs.toml
│   └── custom-workflow.toml
└── 📁 logs/                      # 🔒 Application logs
    ├── audit.log                 # 🔒 Security audit log
    ├── error.log                 # Error logs
    └── access.log                # Access logs
```

### Project-Local Configuration (`./.gemini/`)
```
./.gemini/
├── 📄 config.yaml                # Project-specific config
├── 📁 templates/                 # Project templates
│   └── component.template.tsx
├── 📁 scripts/                   # Project scripts
│   ├── deploy-check.toml
│   └── test-coverage.toml
├── 📁 personas/                  # Custom AI personas
│   ├── security-reviewer.toml
│   ├── performance-expert.toml
│   └── documentation-writer.toml
└── 📁 cache/                     # Project cache
    └── context.json
```

---

## 🔒 Security Hardening

### File System Security

```bash
# Secure directory creation
mkdir -p ~/.gemini/{auth,cache,templates,scripts,logs}
chmod 700 ~/.gemini/auth          # Authentication directory
chmod 700 ~/.gemini/cache         # Cache directory  
chmod 755 ~/.gemini/templates     # Templates (shareable)
chmod 755 ~/.gemini/scripts       # Scripts (executable)
chmod 700 ~/.gemini/logs          # Logs (sensitive)

# Secure file permissions
touch ~/.gemini/auth/credentials.json
chmod 600 ~/.gemini/auth/credentials.json

touch ~/.gemini/logs/audit.log  
chmod 600 ~/.gemini/logs/audit.log
```

### Git Security Configuration

```bash
# .gitignore (security-critical entries)
# 🔒 Secrets and credentials
.env
.env.local
.secrets
*.key
*.pem
credentials.json
tokens.json

# 🔒 Configuration with potentially sensitive data
config.yaml
.gemini/config.yaml
.gemini/auth/

# 🔒 Logs may contain sensitive information
logs/
*.log
audit.log

# 🔒 Cache may contain proprietary code
.gemini/cache/
cache/
.cache

# 🔒 Build artifacts
dist/
build/
*.tgz
node_modules/

# 🔒 Platform-specific
.DS_Store
Thumbs.db
*.swp
*.swo
*~
```

### Environment Variable Security

```bash
# .env.example (committed to repo)
# Gemini API Configuration
GEMINI_API_KEY=your-api-key-here
GEMINI_MODEL=gemini-2.5-flash
GEMINI_TEMPERATURE=0.7

# Security Configuration  
ENABLE_AUDIT_LOGGING=true
ENCRYPT_CACHE=true
SECURE_MODE=true

# Development Configuration
NODE_ENV=development
LOG_LEVEL=info

# Never commit the actual .env file!
```

---

## 📦 Package.json Configuration

```json
{
  "name": "gemini-cli-toolkit",
  "version": "1.0.0",
  "description": "AI-powered developer productivity toolkit for Gemini CLI",
  "main": "dist/index.js",
  "bin": {
    "gemini-toolkit": "dist/cli.js"
  },
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=9.0.0"
  },
  "os": ["darwin", "linux", "win32"],
  "cpu": ["x64", "arm64"],
  "scripts": {
    "build": "tsc && chmod +x dist/cli.js",
    "test": "jest",
    "test:security": "npm run test -- --testPathPattern=security",
    "lint": "eslint src/ --ext .ts",
    "lint:fix": "eslint src/ --ext .ts --fix",
    "security:audit": "npm audit && node scripts/security-scan.js",
    "security:test": "jest test/security/",
    "dev": "ts-node src/cli.ts",
    "clean": "rimraf dist/",
    "prepublishOnly": "npm run clean && npm run build && npm run test"
  },
  "keywords": [
    "ai", "gemini", "cli", "developer", "productivity", 
    "code-generation", "documentation", "testing"
  ],
  "author": {
    "name": "Gemini CLI Toolkit Team",
    "email": "support@gemini-cli-toolkit.com"
  },
  "license": "MIT",
  "homepage": "https://github.com/gemini-cli/toolkit",
  "repository": {
    "type": "git",
    "url": "https://github.com/gemini-cli/toolkit.git"
  },
  "bugs": {
    "url": "https://github.com/gemini-cli/toolkit/issues"
  },
  "dependencies": {
    "@google/generative-ai": "^1.0.0",
    "commander": "^11.1.0",
    "chalk": "^5.3.0",
    "ora": "^7.0.1",
    "inquirer": "^9.2.0",
    "fs-extra": "^11.2.0",
    "glob": "^10.3.0",
    "js-yaml": "^4.1.0",
    "joi": "^17.11.0",
    "winston": "^3.11.0",
    "crypto-js": "^4.2.0"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "@types/node": "^20.10.0",
    "jest": "^29.7.0",
    "@types/jest": "^29.5.0",
    "ts-jest": "^29.1.0",
    "eslint": "^8.54.0",
    "@typescript-eslint/eslint-plugin": "^6.12.0",
    "prettier": "^3.1.0",
    "rimraf": "^5.0.0",
    "husky": "^8.0.0",
    "lint-staged": "^15.1.0"
  },
  "files": [
    "dist/",
    "templates/",
    "README.md",
    "LICENSE",
    "SECURITY.md"
  ],
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org/"
  }
}
```

---

## 🚀 Development Workflow

### Setup Commands
```bash
# Initial setup
npm install
npm run setup:dev              # Sets up development environment
npm run security:setup         # Configures security settings

# Development
npm run dev                     # Start development mode
npm run test:watch             # Run tests in watch mode
npm run lint:fix               # Fix linting issues

# Pre-commit
npm run lint                   # Check code quality
npm run test                   # Run full test suite  
npm run security:test          # Run security tests
npm run build                  # Build production bundle

# Security validation
npm run security:audit         # Security dependency audit
npm run security:scan          # Custom security scanning
npm run security:test          # Security-specific tests
```

### Build Process
```bash
# Production build
npm run clean                  # Clean previous builds
npm run lint                   # Code quality check
npm run test                   # Full test suite
npm run security:audit         # Security audit
npm run build                  # TypeScript compilation
npm run test:integration       # Integration tests

# Package
npm pack                       # Create distribution package
npm publish                    # Publish to NPM
```

---

## 📋 Cross-Platform Considerations

### File Path Handling
```typescript
// src/lib/utils/platform-utils.ts
import path from 'path';
import os from 'os';

export class PlatformUtils {
  static getConfigDir(): string {
    const platform = process.platform;
    const homeDir = os.homedir();
    
    switch (platform) {
      case 'win32':
        return path.join(process.env.APPDATA || homeDir, 'gemini-cli');
      case 'darwin':
        return path.join(homeDir, '.gemini');
      default:
        return path.join(homeDir, '.gemini');
    }
  }
  
  static normalizePath(inputPath: string): string {
    return path.resolve(path.normalize(inputPath));
  }
  
  static isValidPath(inputPath: string): boolean {
    // Security: Prevent path traversal
    const normalized = this.normalizePath(inputPath);
    return !normalized.includes('..');
  }
}
```

### Shell Script Compatibility
```bash
#!/bin/bash
# scripts/build.sh - Cross-platform build script

set -e  # Exit on error

# Detect platform
case "$(uname -s)" in
    Linux*)     PLATFORM=linux;;
    Darwin*)    PLATFORM=mac;;
    CYGWIN*|MINGW*) PLATFORM=windows;;
    *)          PLATFORM=unknown;;
esac

echo "Building for platform: $PLATFORM"

# Platform-specific commands
if [ "$PLATFORM" = "windows" ]; then
    # Windows-specific build steps
    powershell -Command "Write-Host 'Building on Windows'"
else
    # Unix-like systems
    echo "Building on Unix-like system"
fi

# Common build steps
npm run clean
npm run lint
npm run test
npm run build

echo "✅ Build completed for $PLATFORM"
```

---

## 🎯 MVP Implementation Notes

### Command Implementation Priority
1. **Week 1**: `context`, `run` (foundation commands)
2. **Week 2**: `explain`, `debug` (core AI features)  
3. **Week 3**: `scaffold`, `docstring` (code generation)
4. **Week 4**: `readme`, `commit` (documentation/git)
5. **Week 5**: `wiki`, `testgen` (advanced features)
6. **Week 6**: `pr-description` (final command + polish)

### Security Implementation Priority
1. **Week 1**: Authentication, secure storage, input validation
2. **Week 2**: Audit logging, encryption for cache
3. **Week 3**: Rate limiting, API security  
4. **Week 4**: Cross-platform security hardening
5. **Week 5**: Security testing, penetration testing
6. **Week 6**: Security audit, documentation

### Scalability Considerations
- **Modular Commands**: Each command is independent
- **Plugin Architecture**: Ready for community extensions
- **Template System**: Extensible generation templates  
- **Configuration Layers**: Support team/enterprise configs
- **Caching Strategy**: Ready for distributed caching

---

## 📚 Documentation Standards

### Code Documentation
- **JSDoc**: All public APIs documented
- **README**: Usage examples for each command
- **SECURITY.md**: Security guidelines and reporting
- **API.md**: Complete API reference

### Security Documentation
- **Threat Model**: Document attack vectors and mitigations
- **Security Guide**: Best practices for users
- **Incident Response**: Security incident procedures
- **Audit Trail**: How to review security logs

---

This project scaffold provides a **security-first, scalable foundation** for the MVP while being ready for the complete 42+ command vision. The structure emphasizes **developer productivity, security hardening, and operational excellence** from day one.

**Next Steps**: Use this scaffold to initialize the project structure and begin MVP development with confidence in the foundation.