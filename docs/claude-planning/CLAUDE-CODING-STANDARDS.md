# CLAUDE Coding Standards: Secure Development Guidelines

**Document Version:** 1.0  
**Date:** 2025-01-27  
**Status:** Mandatory Standards  
**Alignment:** CLAUDE-BUILD-PLAN.md v2.0 MVP  
**Security Classification:** Development Critical  
**Enforcement:** CI/CD Pipeline + Pre-commit Hooks  

---

## Executive Summary

This document establishes **mandatory coding standards** for the Gemini CLI AI Developer Toolkit, emphasizing **security-first development practices** alongside code quality, maintainability, and cross-platform compatibility. All code must comply with these standards before merge approval.

### Core Principles

1. **Security-First**: Every line of code considered for security implications
2. **TypeScript Strict**: Full type safety with zero `any` types
3. **Cross-Platform**: Identical behavior on Windows, macOS, Linux
4. **Performance**: Optimized for CLI responsiveness (<2s for most commands)
5. **Maintainability**: Self-documenting code with comprehensive tests
6. **📚 Community Standards**: Always follow official documentation and established community patterns
7. **🔍 Best Practices Research**: Research and implement industry standards and RFC specifications
8. **⚡ Keep It Simple**: Choose proven, simple solutions over complex architectures

---

## 🔒 Security-First Coding Standards

### 📚 Rule S0: Research Security Best Practices (MANDATORY)
**Before implementing any security feature, MUST research established standards:**

```typescript
// ✅ CORRECT: Research-based approach
// 1. Research OWASP CLI security guidelines
// 2. Study Node.js security best practices
// 3. Review NIST security standards
// 4. Check community security patterns
// 5. Implement following established standards

// Example: Research OWASP Input Validation standards before implementing
```

### Rule S1: Input Validation (MANDATORY)

**All user inputs MUST be validated and sanitized following OWASP standards**

```typescript
// ✅ CORRECT: Comprehensive input validation
import Joi from 'joi';
import path from 'path';

class InputValidator {
  private static readonly FILE_PATH_SCHEMA = Joi.string()
    .pattern(/^[a-zA-Z0-9._/-]+$/)  // Only safe characters
    .min(1)
    .max(255)
    .required();

  static validateFilePath(inputPath: string): ValidationResult {
    // 1. Schema validation
    const { error } = this.FILE_PATH_SCHEMA.validate(inputPath);
    if (error) {
      throw new ValidationError(`Invalid file path: ${error.message}`);
    }

    // 2. Path traversal prevention
    const normalizedPath = path.normalize(inputPath);
    if (normalizedPath.includes('..') || normalizedPath.includes('~')) {
      throw new SecurityError('Path traversal attempt detected');
    }

    // 3. System file protection
    const restrictedPaths = [
      '/etc/', '/sys/', '/proc/',  // Linux
      'C:\\Windows\\', 'C:\\System32\\',  // Windows  
      '/System/', '/Library/'  // macOS
    ];
    
    if (restrictedPaths.some(restricted => normalizedPath.includes(restricted))) {
      throw new SecurityError('Access to system files denied');
    }

    return { valid: true, sanitized: normalizedPath };
  }
}

// ❌ INCORRECT: No validation
function processFile(filePath: string) {
  return fs.readFileSync(filePath);  // SECURITY RISK
}
```

### Rule S2: Authentication Handling (MANDATORY)

**All authentication operations MUST be secure**

```typescript
// ✅ CORRECT: Secure authentication handling
class SecureAuthManager {
  private static readonly TOKEN_EXPIRY_BUFFER = 300; // 5 minutes

  async authenticateUser(credentials: AuthCredentials): Promise<AuthResult> {
    try {
      // 1. Validate credentials exist
      if (!credentials || !credentials.token) {
        throw new AuthenticationError('Missing credentials');
      }

      // 2. Verify token format and expiry
      const tokenInfo = this.validateToken(credentials.token);
      if (!tokenInfo.valid) {
        throw new AuthenticationError('Invalid token format');
      }

      // 3. Check expiry with buffer
      if (tokenInfo.expiresAt < Date.now() + (this.TOKEN_EXPIRY_BUFFER * 1000)) {
        await this.refreshToken(credentials);
      }

      // 4. Audit log successful authentication
      this.auditLogger.logAuthSuccess(tokenInfo.userId);
      
      return { success: true, user: tokenInfo.user };
    } catch (error) {
      // 5. Audit log failed authentication (without sensitive data)
      this.auditLogger.logAuthFailure(error.message);
      
      // 6. Don't leak sensitive information in error
      throw new AuthenticationError('Authentication failed');
    }
  }

  private validateToken(token: string): TokenInfo {
    // Never log tokens or include them in error messages
    if (!token || token.length < 32) {
      return { valid: false };
    }
    
    try {
      return jwt.verify(token, this.getSecretKey());
    } catch {
      return { valid: false };
    }
  }
}

// ❌ INCORRECT: Insecure authentication
async function authenticateUser(token: string) {
  console.log(`Authenticating with token: ${token}`);  // LOGS SENSITIVE DATA
  if (token === 'admin') return true;  // HARDCODED CREDENTIALS
  throw new Error(`Invalid token: ${token}`);  // LEAKS TOKEN IN ERROR
}
```

### Rule S3: Secure Data Storage (MANDATORY)

**Sensitive data MUST be encrypted at rest**

```typescript
// ✅ CORRECT: Encrypted storage
import crypto from 'crypto';
import { promisify } from 'util';

class SecureStorage {
  private static readonly ALGORITHM = 'aes-256-gcm';
  private static readonly KEY_LENGTH = 32;
  private static readonly IV_LENGTH = 16;

  static async store(key: string, data: any): Promise<void> {
    const serialized = JSON.stringify(data);
    const encrypted = await this.encrypt(serialized);
    
    // Use platform-specific secure storage
    if (process.platform === 'darwin') {
      await this.storeInKeychain(key, encrypted);
    } else if (process.platform === 'win32') {
      await this.storeInCredentialManager(key, encrypted);  
    } else {
      await this.storeInSecretService(key, encrypted);
    }
  }

  private static async encrypt(data: string): Promise<string> {
    const key = await this.getDerivedKey();
    const iv = crypto.randomBytes(this.IV_LENGTH);
    
    const cipher = crypto.createCipheriv(this.ALGORITHM, key, iv);
    const encrypted = Buffer.concat([
      cipher.update(data, 'utf8'),
      cipher.final()
    ]);
    
    const authTag = cipher.getAuthTag();
    
    // Return: iv + authTag + encrypted
    return Buffer.concat([iv, authTag, encrypted]).toString('base64');
  }
}

// ❌ INCORRECT: Plain text storage
function storeCredentials(creds: any) {
  fs.writeFileSync('credentials.json', JSON.stringify(creds));  // PLAIN TEXT
}
```

---

## 📝 TypeScript Standards

### 📚 Rule T0: Research TypeScript Best Practices (MANDATORY)
**Before implementation, MUST research official TypeScript standards:**

```typescript
// ✅ CORRECT: Research-based TypeScript approach
// 1. Study TypeScript Handbook official documentation
// 2. Research community style guides (Airbnb, Google, etc.)
// 3. Check Node.js + TypeScript best practices
// 4. Review enterprise TypeScript patterns
// 5. Follow established naming conventions

// Example: Research official tsconfig.json options before configuring
```

### Rule T1: Strict Type Safety (MANDATORY)

```typescript
// tsconfig.json - Required compiler options
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true
  }
}

// ✅ CORRECT: Explicit typing
interface CommandResult {
  success: boolean;
  data?: CommandData;
  error?: CommandError;
  metadata: {
    executionTime: number;
    tokensUsed: number;
    model: GeminiModel;
  };
}

function executeCommand(args: CommandArgs): Promise<CommandResult> {
  // Implementation with proper error handling
}

// ❌ INCORRECT: Implicit any
function executeCommand(args: any): any {  // NO ANY TYPES ALLOWED
  return args.whatever;
}
```

### Rule T2: Interface Design (MANDATORY)

```typescript
// ✅ CORRECT: Well-designed interfaces
interface Command {
  readonly name: string;
  readonly description: string;
  readonly category: CommandCategory;
  
  validate(args: CommandArgs): ValidationResult;
  execute(context: CommandContext): Promise<CommandResult>;
  getRequiredPermissions(): readonly Permission[];
}

// Use readonly for immutable data
interface ProjectConfig {
  readonly projectPath: string;
  readonly geminiModel: GeminiModel;
  readonly maxTokens: number;
  readonly cacheEnabled: boolean;
}

// ❌ INCORRECT: Poor interface design
interface Command {
  name?: string;  // Should be required
  execute(args: any): any;  // Too generic
  someProperty: string;  // Should be readonly
}
```

### Rule T3: Error Handling (MANDATORY)

```typescript
// ✅ CORRECT: Structured error handling
abstract class GeminiCliError extends Error {
  abstract readonly code: string;
  abstract readonly recoverable: boolean;
  
  constructor(message: string, public readonly details?: unknown) {
    super(message);
    this.name = this.constructor.name;
  }
}

class ValidationError extends GeminiCliError {
  readonly code = 'VALIDATION_ERROR';
  readonly recoverable = false;
}

class AuthenticationError extends GeminiCliError {
  readonly code = 'AUTH_ERROR';
  readonly recoverable = true;
}

// ❌ INCORRECT: Generic error handling
function validateInput(input: string) {
  if (!input) {
    throw new Error('Invalid');  // Too generic
  }
}
```

---

## 🚀 Code Quality Standards

### Rule Q1: Function Design (MANDATORY)

```typescript
// ✅ CORRECT: Single responsibility, pure functions
/**
 * Calculates token count for given content
 * @param content - Text content to analyze
 * @param options - Calculation options
 * @returns Token count with metadata
 */
function calculateTokens(
  content: string, 
  options: TokenCalculationOptions = {}
): TokenCalculationResult {
  if (!content || content.length === 0) {
    return { count: 0, confidence: 1.0, method: 'empty' };
  }
  
  const method = options.method || 'estimate';
  const baseCount = Math.ceil(content.length / 3.75);
  
  return {
    count: baseCount,
    confidence: method === 'estimate' ? 0.8 : 0.95,
    method
  };
}

// ❌ INCORRECT: Complex, impure function
function processStuff(data: any, config: any) {  // Vague name, any types
  console.log('Processing...', data);  // Side effect
  const result = data.map((item: any) => {  // Complex logic
    if (config.someFlag) {
      return item.transform(config.transformer);
    }
    return item;
  });
  fs.writeFileSync('result.json', JSON.stringify(result));  // Side effect
  return result;
}
```

### Rule Q2: Documentation (MANDATORY)

```typescript
// ✅ CORRECT: Comprehensive JSDoc
/**
 * Generates intelligent commit messages from staged changes
 * 
 * @param options - Commit generation options
 * @param options.convention - Commit convention to follow
 * @param options.maxLength - Maximum commit message length
 * @param options.includeBody - Whether to include detailed body
 * 
 * @returns Promise resolving to generated commit message
 * 
 * @throws {ValidationError} When no staged changes found
 * @throws {GitError} When git operations fail
 * @throws {RateLimitError} When API rate limit exceeded
 * 
 * @example
 * ```typescript
 * const message = await generateCommitMessage({
 *   convention: 'conventional',
 *   maxLength: 72,
 *   includeBody: true
 * });
 * console.log(message); // "feat(auth): add OAuth2 integration"
 * ```
 * 
 * @security Validates all git command inputs to prevent injection
 * @performance Caches git diff results for 30 seconds
 */
async function generateCommitMessage(
  options: CommitGenerationOptions
): Promise<string> {
  // Implementation
}

// ❌ INCORRECT: No documentation
function genCommit(opts: any): Promise<string> {
  // No documentation
}
```

### Rule Q3: Naming Conventions (MANDATORY)

```typescript
// ✅ CORRECT: Clear, descriptive naming
class GeminiApiClient {
  private readonly rateLimiter: RateLimiter;
  private readonly authManager: AuthenticationManager;
  
  async generateContentWithRetry(
    request: ContentGenerationRequest,
    maxRetries: number = 3
  ): Promise<ContentGenerationResponse> {
    // Implementation
  }
}

const GEMINI_API_BASE_URL = 'https://generativelanguage.googleapis.com/v1';
const DEFAULT_REQUEST_TIMEOUT_MS = 30000;
const MAX_CONTEXT_TOKENS = 2_000_000;

// ❌ INCORRECT: Unclear naming
class Client {  // Too generic
  private rl: any;  // Abbreviation unclear
  
  async gen(req: any, max?: number): Promise<any> {  // Abbreviated
    // Implementation
  }
}

const URL = 'https://api.com';  // Too generic
const TO = 30000;  // Unclear abbreviation
```

---

## 🌐 Cross-Platform Standards

### Rule P1: Path Handling (MANDATORY)

```typescript
// ✅ CORRECT: Cross-platform path handling
import path from 'path';
import os from 'os';

class PlatformUtils {
  static getConfigDirectory(): string {
    const homeDir = os.homedir();
    
    switch (process.platform) {
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
  
  static isExecutable(filePath: string): boolean {
    try {
      fs.accessSync(filePath, fs.constants.F_OK | fs.constants.X_OK);
      return true;
    } catch {
      return false;
    }
  }
}

// ❌ INCORRECT: Platform-specific hardcoding
const configPath = '/home/user/.gemini';  // Linux only
const executablePath = 'C:\\Program Files\\tool.exe';  // Windows only
```

### Rule P2: Shell Command Execution (MANDATORY)

```typescript
// ✅ CORRECT: Secure cross-platform execution
import { spawn } from 'child_process';

class CommandExecutor {
  static async execute(
    command: string, 
    args: readonly string[] = [],
    options: ExecutionOptions = {}
  ): Promise<ExecutionResult> {
    // 1. Validate command
    this.validateCommand(command);
    
    // 2. Platform-specific shell selection
    const shell = this.getPlatformShell();
    
    // 3. Sanitize arguments
    const sanitizedArgs = args.map(arg => this.sanitizeArgument(arg));
    
    // 4. Execute with timeout and resource limits
    return new Promise((resolve, reject) => {
      const child = spawn(command, sanitizedArgs, {
        shell,
        timeout: options.timeout || 30000,
        stdio: ['pipe', 'pipe', 'pipe'],
        env: { ...process.env, ...options.env }
      });
      
      // Handle result...
    });
  }
  
  private static getPlatformShell(): string {
    switch (process.platform) {
      case 'win32': return process.env.ComSpec || 'cmd.exe';
      case 'darwin': return process.env.SHELL || '/bin/zsh';
      default: return process.env.SHELL || '/bin/bash';
    }
  }
}

// ❌ INCORRECT: Direct shell execution
function runCommand(cmd: string) {
  return exec(cmd);  // SECURITY RISK: Command injection
}
```

---

## 📊 Performance Standards

### Rule F1: Async/Await Patterns (MANDATORY)

```typescript
// ✅ CORRECT: Proper async handling
async function processMultipleFiles(filePaths: readonly string[]): Promise<ProcessingResult[]> {
  // Use Promise.allSettled for concurrent processing
  const results = await Promise.allSettled(
    filePaths.map(async filePath => {
      try {
        const content = await fs.promises.readFile(filePath, 'utf8');
        return await this.processFileContent(content);
      } catch (error) {
        return { error: error.message, filePath };
      }
    })
  );
  
  return results.map((result, index) => ({
    filePath: filePaths[index],
    success: result.status === 'fulfilled',
    data: result.status === 'fulfilled' ? result.value : undefined,
    error: result.status === 'rejected' ? result.reason : undefined
  }));
}

// ❌ INCORRECT: Sequential processing
async function processMultipleFiles(filePaths: string[]) {
  const results = [];
  for (const filePath of filePaths) {  // Sequential, slow
    results.push(await processFile(filePath));
  }
  return results;
}
```

### Rule F2: Memory Management (MANDATORY)

```typescript
// ✅ CORRECT: Memory-efficient streaming
import { createReadStream } from 'fs';
import { createHash } from 'crypto';

async function calculateFileHash(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const hash = createHash('sha256');
    const stream = createReadStream(filePath, { highWaterMark: 64 * 1024 });
    
    stream.on('data', chunk => hash.update(chunk));
    stream.on('end', () => resolve(hash.digest('hex')));
    stream.on('error', reject);
  });
}

// ❌ INCORRECT: Memory-intensive
async function calculateFileHash(filePath: string): Promise<string> {
  const content = await fs.promises.readFile(filePath);  // Loads entire file
  return crypto.createHash('sha256').update(content).digest('hex');
}
```

---

## 🧪 Testing Standards

### Rule X1: Test Structure (MANDATORY)

```typescript
// ✅ CORRECT: Well-structured test
describe('AuthenticationManager', () => {
  let authManager: AuthenticationManager;
  let mockSecureStorage: jest.Mocked<SecureStorage>;
  
  beforeEach(() => {
    mockSecureStorage = createMockSecureStorage();
    authManager = new AuthenticationManager(mockSecureStorage);
  });
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  describe('authenticate', () => {
    describe('when given valid credentials', () => {
      it('should return successful authentication result', async () => {
        // Arrange
        const credentials = createValidCredentials();
        
        // Act
        const result = await authManager.authenticate(credentials);
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.user).toBeDefined();
        expect(mockSecureStorage.store).toHaveBeenCalledWith(
          'auth_token',
          expect.any(String)
        );
      });
    });
    
    describe('when given invalid credentials', () => {
      it('should throw AuthenticationError', async () => {
        // Arrange
        const invalidCredentials = createInvalidCredentials();
        
        // Act & Assert
        await expect(authManager.authenticate(invalidCredentials))
          .rejects.toThrow(AuthenticationError);
      });
    });
  });
});

// ❌ INCORRECT: Poor test structure
test('auth works', () => {
  const auth = new AuthManager();
  expect(auth.login('user', 'pass')).toBeTruthy();  // Too vague
});
```

---

## 🔧 Development Workflow

### Pre-commit Hook Configuration

```bash
#!/bin/bash
# .husky/pre-commit - Mandatory quality checks

set -e

echo "🔒 Running pre-commit quality checks..."

# 1. Type checking
echo "📝 Type checking..."
npm run type-check

# 2. Linting with auto-fix
echo "🧹 Linting and formatting..."
npm run lint:fix
npm run format

# 3. Security checks  
echo "🛡️ Security scanning..."
npm run security:lint
npm run test:security

# 4. Unit tests
echo "🧪 Running unit tests..."
npm run test:unit

# 5. Build check
echo "🏗️ Build verification..."
npm run build

echo "✅ All pre-commit checks passed!"
```

### ESLint Configuration

```json
{
  "extends": [
    "@typescript-eslint/recommended",
    "@typescript-eslint/recommended-requiring-type-checking"
  ],
  "rules": {
    // Security rules
    "no-eval": "error",
    "no-implied-eval": "error",
    "no-new-func": "error",
    "no-script-url": "error",
    
    // TypeScript rules
    "@typescript-eslint/no-any": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/prefer-readonly-parameter-types": "error",
    
    // Code quality rules
    "complexity": ["error", 10],
    "max-depth": ["error", 4],
    "max-lines-per-function": ["error", 50],
    "no-console": "warn",
    "prefer-const": "error",
    
    // Naming conventions
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "interface",
        "format": ["PascalCase"]
      },
      {
        "selector": "typeAlias",
        "format": ["PascalCase"]
      },
      {
        "selector": "class",
        "format": ["PascalCase"]
      },
      {
        "selector": "method",
        "format": ["camelCase"]
      }
    ]
  }
}
```

---

## 🎯 Enforcement & Compliance

### Automated Checks

1. **Pre-commit Hooks**: Block commits that violate standards
2. **CI Pipeline**: All standards verified in GitHub Actions
3. **Code Review**: Manual review for complex security implications  
4. **Automated Fixes**: ESLint and Prettier auto-fix where possible

### Quality Metrics

| Standard | Requirement | Enforcement |
|----------|-------------|-------------|
| **Security** | 100% compliance | CI blocking |
| **Type Safety** | Zero `any` types | ESLint error |
| **Test Coverage** | >90% | CI blocking |
| **Documentation** | 100% public APIs | Manual review |
| **Performance** | <2s command response | Load testing |

### Non-Compliance Response

1. **Blocking**: CI fails, preventing merge
2. **Coaching**: Team review for learning
3. **Documentation**: Update standards if needed
4. **Tooling**: Improve automation to prevent recurrence

These **security-first coding standards** ensure the Gemini CLI AI Developer Toolkit is built with **uncompromising quality** and **enterprise-grade security** from the first line of code. 🔒✨