# CLAUDE Technical Specification: Gemini CLI AI Developer Toolkit

**Document Version:** 1.0  
**Date:** 2025-01-27  
**Status:** Implementation Specification  
**Alignment:** CLAUDE-BUILD-PLAN.md v2.0  
**Platform Support:** Windows, macOS, Linux  
**API Version:** Gemini 2.5 Series

---

## 🎯 MVP Implementation Focus

> **Implementation Priority**: This technical specification covers the complete 42+ command toolkit. For **MVP development**, implement specifications for the **11 essential commands** outlined in [CLAUDE-BUILD-PLAN.md](./CLAUDE-BUILD-PLAN.md):
>
> **MVP Command Subset**: explain, debug, scaffold, docstring, readme, wiki, commit, pr-description, testgen, run, context
>
> **🔒 Security-First Implementation**:
>
> - All security specifications are **mandatory** for MVP
> - Input validation, authentication, and encryption are non-negotiable
> - Fail secure, audit everything, principle of least privilege
> - See [Security Specifications](#security-specifications) section for complete requirements

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [System Requirements](#system-requirements)
3. [API Specifications](#api-specifications)
4. [Command Specifications](#command-specifications)
5. [Data Models & Schemas](#data-models--schemas)
6. [Security Specifications](#security-specifications)
7. [Performance Specifications](#performance-specifications)
8. [Integration Specifications](#integration-specifications)
9. [Error Handling Specifications](#error-handling-specifications)
10. [Configuration Specifications](#configuration-specifications)

---

## Executive Summary

This document provides the complete technical specifications for the Gemini CLI AI Developer Toolkit, a comprehensive suite of 42+ AI-powered commands that transform software development workflows. The specifications detail the implementation requirements, API contracts, data models, and performance criteria necessary to build a production-grade system that operates seamlessly across Windows, macOS, and Linux platforms.

### Key Technical Highlights

- **Gemini API 2.5 Series Integration** with intelligent model selection
- **Cross-Platform Architecture** supporting Windows/macOS/Linux natively
- **1M-2M Token Context Windows** with progressive analysis
- **4x Cost Reduction** through intelligent caching strategies
- **Subscription-Aware Scaling** across all Gemini tiers
- **Enterprise-Grade Security** with OAuth2 and audit logging

---

## System Requirements

### 1. Runtime Requirements

#### Minimum System Requirements

| Component      | Windows             | macOS              | Linux                   |
| -------------- | ------------------- | ------------------ | ----------------------- |
| **OS Version** | Windows 10 1903+    | macOS 11.0+        | Ubuntu 20.04+ / RHEL 8+ |
| **Node.js**    | 18.0.0+             | 18.0.0+            | 18.0.0+                 |
| **RAM**        | 4 GB                | 4 GB               | 4 GB                    |
| **Disk Space** | 500 MB              | 500 MB             | 500 MB                  |
| **Network**    | Broadband Internet  | Broadband Internet | Broadband Internet      |
| **Shell**      | PowerShell 7+ / CMD | zsh / bash         | bash / zsh              |

#### Recommended System Requirements

| Component      | Windows                    | macOS       | Linux         |
| -------------- | -------------------------- | ----------- | ------------- |
| **OS Version** | Windows 11                 | macOS 13.0+ | Ubuntu 22.04+ |
| **Node.js**    | 20.0.0+                    | 20.0.0+     | 20.0.0+       |
| **RAM**        | 8 GB                       | 8 GB        | 8 GB          |
| **Disk Space** | 2 GB                       | 2 GB        | 2 GB          |
| **CPU**        | 4+ cores                   | 4+ cores    | 4+ cores      |
| **GPU**        | Optional (for ML features) | Optional    | Optional      |

### 2. Development Requirements

```json
{
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=9.0.0"
  },
  "os": ["darwin", "linux", "win32"],
  "cpu": ["x64", "arm64"]
}
```

### 3. Dependencies

#### Core Dependencies

```json
{
  "dependencies": {
    "@google/generative-ai": "^1.0.0",
    "@anthropic-ai/tokenizer": "^0.2.0",
    "commander": "^11.1.0",
    "toml": "^3.0.0",
    "chalk": "^5.3.0",
    "ora": "^7.0.1",
    "glob": "^10.3.0",
    "fs-extra": "^11.2.0",
    "dotenv": "^16.3.0",
    "axios": "^1.6.0",
    "semver": "^7.5.0",
    "inquirer": "^9.2.0",
    "js-yaml": "^4.1.0",
    "lodash": "^4.17.21",
    "winston": "^3.11.0",
    "joi": "^17.11.0",
    "lru-cache": "^10.0.0",
    "p-queue": "^7.4.0",
    "execa": "^8.0.0",
    "@babel/parser": "^7.23.0",
    "@typescript-eslint/parser": "^6.12.0",
    "tree-sitter": "^0.20.0",
    "mermaid": "^10.6.0"
  }
}
```

#### Development Dependencies

```json
{
  "devDependencies": {
    "typescript": "^5.3.0",
    "@types/node": "^20.10.0",
    "jest": "^29.7.0",
    "@types/jest": "^29.5.0",
    "eslint": "^8.54.0",
    "@typescript-eslint/eslint-plugin": "^6.12.0",
    "prettier": "^3.1.0",
    "husky": "^8.0.0",
    "lint-staged": "^15.1.0",
    "ts-node": "^10.9.0",
    "nodemon": "^3.0.0",
    "cross-env": "^7.0.0",
    "rimraf": "^5.0.0",
    "concurrently": "^8.2.0"
  }
}
```

---

## API Specifications

### 1. Gemini API Integration

#### 1.1 Authentication Specification

```typescript
// Subscription tier type definition
type SubscriptionTier = 'free' | 'pro' | 'enterprise';

interface AuthenticationConfig {
  method: 'gemini-subscription' | 'api-key' | 'oauth2' | 'service-account';
  credentials: AuthCredentials;
  fallback?: AuthenticationConfig;
}

interface AuthCredentials {
  // Google Gemini Subscription Authentication (Preferred)
  geminiSubscription?: {
    googleClientId: string;
    scope: string[];
    subscriptionTier: 'free' | 'pro' | 'enterprise';
    refreshToken?: string;
    accessToken?: string;
    expiresAt?: number;
  };

  // Direct API Key (Advanced users)
  apiKey?: string;

  // OAuth2 (Custom integrations)
  oauth2?: {
    clientId: string;
    clientSecret: string;
    refreshToken?: string;
    accessToken?: string;
    expiresAt?: number;
  };

  // Service Account (Enterprise)
  serviceAccount?: {
    type: string;
    project_id: string;
    private_key_id: string;
    private_key: string;
    client_email: string;
    client_id: string;
  };
}

class AuthenticationManager {
  async authenticate(config: AuthenticationConfig): Promise<AuthToken> {
    switch (config.method) {
      case 'gemini-subscription':
        return this.authenticateWithGeminiSubscription(config.credentials.geminiSubscription);
      case 'api-key':
        return this.authenticateWithApiKey(config.credentials.apiKey);
      case 'oauth2':
        return this.authenticateWithOAuth2(config.credentials.oauth2);
      case 'service-account':
        return this.authenticateWithServiceAccount(config.credentials.serviceAccount);
      default:
        throw new AuthenticationError('Unsupported authentication method');
    }
  }

  private async authenticateWithGeminiSubscription(credentials: GeminiSubscriptionCredentials): Promise<AuthToken> {
    // Google OAuth2 flow for Gemini subscription
    const oauth2Client = new OAuth2Client(
      credentials.googleClientId,
      null, // No client secret needed for public client
      'http://localhost:3000/auth/callback'
    );

    // Check for existing refresh token
    if (credentials.refreshToken) {
      oauth2Client.setCredentials({
        refresh_token: credentials.refreshToken,
      });

      try {
        const { credentials: tokens } = await oauth2Client.refreshAccessToken();

        // Detect subscription tier from user info
        const userInfo = await this.getUserSubscriptionInfo(tokens.access_token);

        return {
          token: tokens.access_token,
          refreshToken: tokens.refresh_token,
          expiresAt: tokens.expiry_date,
          subscriptionTier: userInfo.subscriptionTier,
          rateLimit: this.getRateLimitForTier(userInfo.subscriptionTier),
        };
      } catch (error) {
        throw new AuthenticationError('Failed to refresh Gemini subscription token');
      }
    }

    // Initial OAuth2 flow
    const authUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: credentials.scope || [
        'https://www.googleapis.com/auth/generative-language',
        'https://www.googleapis.com/auth/userinfo.profile',
      ],
    });

    throw new AuthenticationFlowRequired('Please visit: ' + authUrl);
  }

  private async getUserSubscriptionInfo(accessToken: string): Promise<SubscriptionInfo> {
    // Robust fallback chain for subscription tier detection

    // 1. Check GEMINI_SUBSCRIPTION_TIER environment variable
    const envTier = process.env.GEMINI_SUBSCRIPTION_TIER;
    if (envTier && ['free', 'pro', 'enterprise'].includes(envTier.toLowerCase())) {
      return this.getTierInfo(envTier.toLowerCase() as SubscriptionTier);
    }

    // 2. Check .geminirc.json configuration file
    const configTier = await this.getConfiguredTier();
    if (configTier) {
      return this.getTierInfo(configTier);
    }

    // 3. API detection with retries and exponential backoff
    const detectedTier = await this.detectTierFromAPI(accessToken);
    if (detectedTier) {
      // Cache tier with 1-hour TTL
      await this.cacheTierInfo(detectedTier, 3600);
      return this.getTierInfo(detectedTier);
    }

    // 4. Check cached tier
    const cachedTier = await this.getCachedTier();
    if (cachedTier && !this.isCacheExpired(cachedTier)) {
      return this.getTierInfo(cachedTier.tier);
    }

    // 5. Default to 'free' with warning
    console.warn('Unable to detect subscription tier, defaulting to free tier with conservative limits');
    return this.getTierInfo('free');
  }

  private async getConfiguredTier(): Promise<SubscriptionTier | null> {
    const { promises: fs } = await import('fs');
    const path = await import('path');
    const os = await import('os');

    try {
      const configPath = path.join(os.homedir(), '.geminirc.json');
      const configExists = await fs.access(configPath).then(
        () => true,
        () => false
      );

      if (configExists) {
        const configContent = await fs.readFile(configPath, 'utf8');
        const config = JSON.parse(configContent);

        if (config.subscriptionTier && ['free', 'pro', 'enterprise'].includes(config.subscriptionTier)) {
          return config.subscriptionTier as SubscriptionTier;
        }
      }
    } catch (error) {
      // Silently ignore config file errors
    }

    return null;
  }

  private async detectTierFromAPI(accessToken: string, maxRetries: number = 3): Promise<SubscriptionTier | null> {
    let lastError: Error | null = null;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const response = await fetch('https://generativelanguage.googleapis.com/v1/models', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          timeout: 10000, // 10-second timeout
        });

        if (!response.ok) {
          throw new Error(`API request failed: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        const availableModels = data.models?.map((m: any) => m.name) || [];

        // Infer subscription tier from available models
        if (availableModels.includes('models/gemini-2.5-ultra')) {
          return 'enterprise';
        } else if (availableModels.includes('models/gemini-2.5-pro')) {
          return 'pro';
        } else {
          return 'free';
        }
      } catch (error) {
        lastError = error as Error;

        if (attempt < maxRetries) {
          // Exponential backoff: 1s, 2s, 4s
          const backoffMs = Math.pow(2, attempt - 1) * 1000;
          await new Promise(resolve => setTimeout(resolve, backoffMs));
        }
      }
    }

    console.warn(`Failed to detect subscription tier after ${maxRetries} attempts:`, lastError?.message);
    return null;
  }

  private getTierInfo(tier: SubscriptionTier): SubscriptionInfo {
    const tierConfigs = {
      free: { subscriptionTier: 'free', maxRpm: 15 },
      pro: { subscriptionTier: 'pro', maxRpm: 1000 },
      enterprise: { subscriptionTier: 'enterprise', maxRpm: 4000 },
    };

    return tierConfigs[tier] as SubscriptionInfo;
  }

  private async cacheTierInfo(tier: SubscriptionTier, ttlSeconds: number): Promise<void> {
    const { promises: fs } = await import('fs');
    const path = await import('path');
    const os = await import('os');

    try {
      const cacheData = {
        tier,
        timestamp: Date.now(),
        ttl: ttlSeconds * 1000,
      };

      const cacheDir = path.join(os.homedir(), '.gemini', 'cache');
      await fs.mkdir(cacheDir, { recursive: true });

      const cachePath = path.join(cacheDir, 'tier.json');
      await fs.writeFile(cachePath, JSON.stringify(cacheData));
    } catch (error) {
      // Silently ignore cache write errors
    }
  }

  private async getCachedTier(): Promise<{ tier: SubscriptionTier; timestamp: number; ttl: number } | null> {
    const { promises: fs } = await import('fs');
    const path = await import('path');
    const os = await import('os');

    try {
      const cachePath = path.join(os.homedir(), '.gemini', 'cache', 'tier.json');
      const cacheExists = await fs.access(cachePath).then(
        () => true,
        () => false
      );

      if (cacheExists) {
        const cacheContent = await fs.readFile(cachePath, 'utf8');
        return JSON.parse(cacheContent);
      }
    } catch (error) {
      // Silently ignore cache read errors
    }

    return null;
  }

  private isCacheExpired(cachedData: { timestamp: number; ttl: number }): boolean {
    return Date.now() - cachedData.timestamp > cachedData.ttl;
  }
}
```

#### 1.2 Model Selection Specification

```typescript
enum GeminiModel {
  PRO = 'gemini-2.5-pro',
  FLASH = 'gemini-2.5-flash',
  FLASH_LITE = 'gemini-2.5-flash-lite',
}

interface ModelSelectionCriteria {
  subscriptionTier: SubscriptionTier;
  complexity: 'low' | 'medium' | 'high';
  tokenCount: number;
  costOptimization: boolean;
  latencyRequirement: 'realtime' | 'standard' | 'batch';
}

class ModelSelector {
  selectOptimalModel(criteria: ModelSelectionCriteria): GeminiModel {
    const matrix: ModelSelectionMatrix = {
      free: {
        low: GeminiModel.FLASH_LITE,
        medium: GeminiModel.FLASH_LITE,
        high: GeminiModel.FLASH_LITE,
      },
      pro: {
        low: GeminiModel.FLASH_LITE,
        medium: GeminiModel.FLASH,
        high: GeminiModel.PRO,
      },
      enterprise: {
        low: GeminiModel.FLASH,
        medium: GeminiModel.PRO,
        high: GeminiModel.PRO,
      },
    };

    let model = matrix[criteria.subscriptionTier][criteria.complexity];

    // Apply cost optimization
    if (criteria.costOptimization && model !== GeminiModel.FLASH_LITE) {
      model = this.downgradeModel(model);
    }

    // Apply token count constraints
    if (criteria.tokenCount > 500000 && model === GeminiModel.FLASH_LITE) {
      model = GeminiModel.FLASH;
    }

    return model;
  }
}
```

#### 1.3 Rate Limiting Specification

```typescript
interface RateLimitConfig {
  tier: SubscriptionTier;
  limits: {
    requestsPerMinute: number;
    tokensPerMinute: number;
    requestsPerDay: number;
    concurrentRequests: number;
  };
  backoffStrategy: 'exponential' | 'linear' | 'fixed';
}

class RateLimiter {
  private configs: Map<SubscriptionTier, RateLimitConfig> = new Map([
    [
      'free',
      {
        tier: 'free',
        limits: {
          requestsPerMinute: 15,
          tokensPerMinute: 1_000_000,
          requestsPerDay: 1_500,
          concurrentRequests: 2,
        },
        backoffStrategy: 'exponential',
      },
    ],
    [
      'pro',
      {
        tier: 'pro',
        limits: {
          requestsPerMinute: 1000,
          tokensPerMinute: 4_000_000,
          requestsPerDay: 100_000,
          concurrentRequests: 10,
        },
        backoffStrategy: 'linear',
      },
    ],
    [
      'enterprise',
      {
        tier: 'enterprise',
        limits: {
          requestsPerMinute: 4000,
          tokensPerMinute: 10_000_000,
          requestsPerDay: 1_000_000,
          concurrentRequests: 50,
        },
        backoffStrategy: 'fixed',
      },
    ],
  ]);

  async throttle(request: GeminiRequest): Promise<void> {
    const config = this.configs.get(request.tier);
    const currentUsage = await this.getCurrentUsage(request.tier);

    if (this.exceedsLimits(currentUsage, config.limits)) {
      await this.applyBackoff(config.backoffStrategy);
    }

    await this.recordRequest(request);
  }
}
```

### 2. Context Management Specifications

#### 2.1 Token Calculation Specification

```typescript
interface TokenCalculationConfig {
  contentType: 'code' | 'documentation' | 'json' | 'markdown' | 'plain';
  language?: string;
  encoding?: 'cl100k_base' | 'p50k_base';
}

class TokenCalculator {
  // Token counting uses @anthropic-ai/tokenizer library for Claude API compatibility
  private readonly tokenRatios = {
    code: {
      javascript: 3.5,
      python: 3.8,
      java: 3.2,
      cpp: 3.0,
      go: 3.6,
      rust: 3.4,
      default: 3.5,
    },
    documentation: 4.2,
    json: 3.0,
    markdown: 4.0,
    plain: 4.5,
  };

  calculate(content: string, config: TokenCalculationConfig): number {
    const baseRatio = this.getTokenRatio(config);
    const baseTokens = Math.ceil(content.length / baseRatio);

    // Apply adjustments
    const adjustments = this.calculateAdjustments(content, config);
    return Math.ceil(baseTokens * adjustments);
  }

  private getTokenRatio(config: TokenCalculationConfig): number {
    if (config.contentType === 'code' && config.language) {
      return this.tokenRatios.code[config.language] || this.tokenRatios.code.default;
    }
    return this.tokenRatios[config.contentType] || 4.0;
  }

  private calculateAdjustments(content: string, config: TokenCalculationConfig): number {
    let adjustment = 1.0;

    // Unicode characters adjustment
    const unicodeRatio = this.calculateUnicodeRatio(content);
    if (unicodeRatio > 0.1) {
      adjustment *= 1 + unicodeRatio * 0.5;
    }

    // Whitespace density adjustment
    const whitespaceRatio = this.calculateWhitespaceRatio(content);
    adjustment *= 1 - whitespaceRatio * 0.1;

    // Code complexity adjustment
    if (config.contentType === 'code') {
      const complexity = this.calculateCodeComplexity(content);
      adjustment *= 1 + complexity * 0.1;
    }

    return adjustment;
  }
}
```

#### 2.2 Context Compression Specification

```typescript
interface CompressionStrategy {
  name: string;
  priority: number;
  applicable(context: Context): boolean;
  compress(context: Context, targetTokens: number): Promise<Context>;
}

class CompressionEngine {
  private strategies: CompressionStrategy[] = [
    new WhitespaceCompressionStrategy(), // Priority: 1
    new CommentRemovalStrategy(), // Priority: 2
    new DuplicateRemovalStrategy(), // Priority: 3
    new SemanticCompressionStrategy(), // Priority: 4
    new SummarizationStrategy(), // Priority: 5
    new ChunkingStrategy(), // Priority: 6
  ];

  async compress(context: Context, targetTokens: number): Promise<Context> {
    let compressedContext = context;
    const sortedStrategies = this.strategies.sort((a, b) => a.priority - b.priority);

    for (const strategy of sortedStrategies) {
      if (this.tokenCalculator.calculate(compressedContext) <= targetTokens) {
        break;
      }

      if (strategy.applicable(compressedContext)) {
        compressedContext = await strategy.compress(compressedContext, targetTokens);
      }
    }

    return compressedContext;
  }
}

class SemanticCompressionStrategy implements CompressionStrategy {
  name = 'semantic-compression';
  priority = 4;

  applicable(context: Context): boolean {
    return context.tokenCount > 100000 && context.type === 'code';
  }

  async compress(context: Context, targetTokens: number): Promise<Context> {
    // Extract semantic information
    const ast = await this.parseToAST(context.content);
    const semanticMap = this.buildSemanticMap(ast);

    // Prioritize important code sections
    const prioritizedSections = this.prioritizeSections(semanticMap);

    // Reconstruct compressed context
    return this.reconstructContext(prioritizedSections, targetTokens);
  }
}
```

### 3. Caching Specifications

#### 3.1 Cache Architecture

```typescript
interface CacheLayer {
  name: string;
  priority: number;
  ttl: number;
  maxSize: number;
  get(key: string): Promise<any>;
  set(key: string, value: any, ttl?: number): Promise<void>;
  delete(key: string): Promise<void>;
  clear(): Promise<void>;
}

class MultiLayerCache {
  private layers: CacheLayer[] = [
    new MemoryCache({ maxSize: 100, ttl: 300 }), // L1: 5 minutes
    new DiskCache({ maxSize: 1000, ttl: 3600 }), // L2: 1 hour
    new RedisCache({ maxSize: 10000, ttl: 86400 }), // L3: 24 hours
  ];

  async get(key: string): Promise<any> {
    for (const layer of this.layers) {
      const value = await layer.get(key);
      if (value) {
        // Promote to higher layers
        await this.promote(key, value, layer.priority);
        return value;
      }
    }
    return null;
  }

  async set(key: string, value: any, ttl?: number): Promise<void> {
    // Write-through strategy
    await Promise.all(this.layers.map(layer => layer.set(key, value, ttl)));
  }

  private async promote(key: string, value: any, fromPriority: number): Promise<void> {
    for (const layer of this.layers) {
      if (layer.priority < fromPriority) {
        await layer.set(key, value);
      }
    }
  }
}
```

#### 3.2 Cache Key Generation

```typescript
interface CacheKeyConfig {
  namespace: string;
  command: string;
  version: string;
  params: Record<string, any>;
  contextHash?: string;
}

class CacheKeyGenerator {
  generate(config: CacheKeyConfig): string {
    const components = [config.namespace, config.command, config.version, this.hashParams(config.params)];

    if (config.contextHash) {
      components.push(config.contextHash);
    }

    return components.join(':');
  }

  private hashParams(params: Record<string, any>): string {
    const normalized = this.normalizeParams(params);
    return this.sha256(JSON.stringify(normalized));
  }

  private normalizeParams(params: Record<string, any>): Record<string, any> {
    const sorted = Object.keys(params).sort();
    const normalized: Record<string, any> = {};

    for (const key of sorted) {
      normalized[key] = this.normalizeValue(params[key]);
    }

    return normalized;
  }

  private sha256(content: string): string {
    const crypto = require('crypto');
    return crypto.createHash('sha256').update(content).digest('hex');
  }
}
```

---

## Command Specifications

### 1. Command Interface Specification

```typescript
interface Command {
  name: string;
  description: string;
  category: CommandCategory;
  aliases?: string[];
  version: string;

  // Execution
  validate(args: CommandArgs): ValidationResult;
  execute(context: CommandContext): Promise<CommandResult>;

  // Configuration
  getConfig(): CommandConfig;
  getRequiredPermissions(): Permission[];
  getSupportedPlatforms(): Platform[];

  // Resource Requirements
  getResourceRequirements(): ResourceRequirements;
  getSubscriptionRequirements(): SubscriptionRequirements;

  // Hooks
  preExecute?(context: CommandContext): Promise<void>;
  postExecute?(result: CommandResult): Promise<void>;
  onError?(error: Error): Promise<void>;
}

interface CommandContext {
  args: CommandArgs;
  options: CommandOptions;
  config: GlobalConfig;
  platform: Platform;
  subscription: SubscriptionTier;
  user: User;
  project?: ProjectContext;
  cache: CacheService;
  logger: Logger;
}

interface CommandResult {
  success: boolean;
  data?: any;
  error?: Error;
  metadata: {
    executionTime: number;
    tokensUsed: number;
    cacheHit: boolean;
    model: GeminiModel;
  };
}
```

### 2. Command Categories

```typescript
enum CommandCategory {
  CODE_INTELLIGENCE = 'code-intelligence',
  DOCUMENTATION = 'documentation',
  TESTING = 'testing',
  GIT_DEVOPS = 'git-devops',
  PROJECT_MANAGEMENT = 'project-management',
  CUSTOM = 'custom',
}

interface CategoryMetadata {
  name: string;
  description: string;
  icon: string;
  color: string;
  commands: string[];
  requiredSubscription: SubscriptionTier;
}
```

### 3. Command Registry Specification

```typescript
class CommandRegistry {
  private commands: Map<string, Command> = new Map();
  private categories: Map<CommandCategory, CategoryMetadata> = new Map();
  private aliases: Map<string, string> = new Map();

  register(command: Command): void {
    // Validate command
    this.validateCommand(command);

    // Register primary name
    this.commands.set(command.name, command);

    // Register aliases
    if (command.aliases) {
      for (const alias of command.aliases) {
        this.aliases.set(alias, command.name);
      }
    }

    // Update category
    this.updateCategory(command);
  }

  get(name: string): Command | null {
    // Check direct name
    if (this.commands.has(name)) {
      return this.commands.get(name);
    }

    // Check aliases
    if (this.aliases.has(name)) {
      const realName = this.aliases.get(name);
      return this.commands.get(realName);
    }

    return null;
  }

  discover(pattern?: string): Command[] {
    const commands = Array.from(this.commands.values());

    if (pattern) {
      return commands.filter(
        cmd => cmd.name.includes(pattern) || cmd.description.toLowerCase().includes(pattern.toLowerCase())
      );
    }

    return commands;
  }
}
```

### 4. Individual Command Specifications

#### 4.1 Code Intelligence Commands

```typescript
// gemini explain
interface ExplainCommandConfig {
  input: string | FileInput;
  options: {
    language?: string;
    detail: 'brief' | 'standard' | 'comprehensive';
    audience: 'beginner' | 'intermediate' | 'expert';
    interactive?: boolean;
    outputFormat: 'text' | 'markdown' | 'html';
  };
}

class ExplainCommand implements Command {
  name = 'explain';
  category = CommandCategory.CODE_INTELLIGENCE;

  async execute(context: CommandContext): Promise<CommandResult> {
    const config = this.parseConfig(context);
    const code = await this.getCode(config.input);
    const language = config.options.language || this.detectLanguage(code);

    const prompt = this.buildPrompt(code, language, config.options);
    const response = await context.geminiClient.generate({
      model: this.selectModel(context),
      prompt,
      temperature: 0.3,
      maxTokens: 4096,
    });

    return {
      success: true,
      data: this.formatResponse(response, config.options.outputFormat),
      metadata: this.buildMetadata(response),
    };
  }
}

// gemini scaffold
interface ScaffoldCommandConfig {
  type: string;
  description: string;
  options: {
    framework?: string;
    style?: 'match-project' | 'standard' | 'custom';
    template?: string;
    outputPath?: string;
    interactive?: boolean;
  };
}

class ScaffoldCommand implements Command {
  name = 'scaffold';
  category = CommandCategory.CODE_INTELLIGENCE;

  async execute(context: CommandContext): Promise<CommandResult> {
    const config = this.parseConfig(context);
    const template = await this.loadTemplate(config);
    const projectStyle = await this.analyzeProjectStyle(context.project);

    const generationConfig = {
      type: config.type,
      description: config.description,
      template,
      style: config.options.style === 'match-project' ? projectStyle : null,
    };

    const code = await this.generateCode(generationConfig, context);
    const files = await this.createFiles(code, config.options.outputPath);

    return {
      success: true,
      data: { files, code },
      metadata: this.buildMetadata(context),
    };
  }
}
```

#### 4.2 Documentation Commands

```typescript
// gemini docstring
interface DocstringCommandConfig {
  target: string | string[];
  options: {
    format: 'jsdoc' | 'python' | 'javadoc' | 'xmldoc' | 'auto';
    update: boolean;
    recursive: boolean;
    includePrivate: boolean;
    generateExamples: boolean;
  };
}

class DocstringCommand implements Command {
  name = 'docstring';
  category = CommandCategory.DOCUMENTATION;

  async execute(context: CommandContext): Promise<CommandResult> {
    const config = this.parseConfig(context);
    const files = await this.resolveFiles(config.target, config.options.recursive);

    const results = [];
    for (const file of files) {
      const ast = await this.parseFile(file);
      const undocumented = this.findUndocumentedElements(ast, config.options);

      if (undocumented.length > 0) {
        const documentation = await this.generateDocumentation(undocumented, config.options.format, context);

        const updatedFile = await this.updateFile(file, documentation, config.options.update);

        results.push(updatedFile);
      }
    }

    return {
      success: true,
      data: results,
      metadata: this.buildMetadata(context),
    };
  }
}
```

---

## Data Models & Schemas

### 1. Core Data Models

```typescript
// Project Context Model
interface ProjectContext {
  id: string;
  path: string;
  name: string;
  type: ProjectType;
  language: ProgrammingLanguage;
  framework?: Framework;
  dependencies: Dependency[];
  structure: DirectoryStructure;
  metadata: ProjectMetadata;
  analysis?: ProjectAnalysis;
}

interface ProjectAnalysis {
  tokenCount: number;
  fileCount: number;
  complexity: ComplexityMetrics;
  testCoverage?: number;
  documentationCoverage?: number;
  technicalDebt?: TechnicalDebtMetrics;
  securityIssues?: SecurityIssue[];
  performanceMetrics?: PerformanceMetrics;
}

// User Model
interface User {
  id: string;
  email?: string;
  subscription: SubscriptionInfo;
  preferences: UserPreferences;
  usage: UsageMetrics;
  authentication: AuthenticationInfo;
}

interface SubscriptionInfo {
  tier: SubscriptionTier;
  startDate: Date;
  endDate?: Date;
  limits: SubscriptionLimits;
  usage: SubscriptionUsage;
}

// Command Execution Model
interface ExecutionRecord {
  id: string;
  command: string;
  timestamp: Date;
  user: string;
  project?: string;
  args: Record<string, any>;
  result: CommandResult;
  metrics: ExecutionMetrics;
}

interface ExecutionMetrics {
  duration: number;
  tokensUsed: number;
  model: GeminiModel;
  cacheHit: boolean;
  memoryUsage: number;
  cpuUsage: number;
  errorCount: number;
}
```

### 2. Configuration Schemas

```typescript
// Global Configuration Schema
interface GlobalConfiguration {
  version: string;
  api: {
    endpoint: string;
    timeout: number;
    retries: number;
    authentication: AuthenticationConfig;
  };
  cache: {
    enabled: boolean;
    strategy: 'memory' | 'disk' | 'redis' | 'multi-layer';
    ttl: number;
    maxSize: number;
  };
  logging: {
    level: 'debug' | 'info' | 'warn' | 'error';
    output: 'console' | 'file' | 'both';
    format: 'json' | 'text';
    maxFileSize: number;
    maxFiles: number;
  };
  commands: {
    timeout: number;
    parallelism: number;
    defaultModel: GeminiModel;
  };
  security: {
    enableAudit: boolean;
    encryptCache: boolean;
    validateInput: boolean;
    maxRequestSize: number;
  };
}

// Command Configuration Schema (TOML)
interface CommandDefinition {
  name: string;
  description: string;
  category: string;
  version: string;
  prompt: string;
  config: {
    model: GeminiModel;
    temperature: number;
    maxTokens: number;
    topP?: number;
    topK?: number;
    enableCaching?: boolean;
    timeout?: number;
  };
  args?: ArgumentDefinition[];
  flags?: FlagDefinition[];
  requirements?: {
    subscription?: SubscriptionTier;
    permissions?: string[];
    platforms?: Platform[];
  };
}
```

### 3. File Format Schemas

```yaml
# .gemini/config.yaml
version: '1.0.0'
api:
  model: gemini-2.5-flash
  temperature: 0.7
cache:
  enabled: true
  ttl: 3600
commands:
  explain:
    detail: comprehensive
    audience: intermediate
  scaffold:
    style: match-project
    framework: auto-detect
```

```json
// ~/.geminirc.json - User-level configuration for subscription tier
{
  "version": "1.0.0",
  "subscriptionTier": "pro",
  "preferences": {
    "defaultModel": "gemini-2.5-flash",
    "enableCaching": true,
    "maxConcurrentRequests": 5
  },
  "authentication": {
    "method": "gemini-subscription",
    "refreshTokenPath": "~/.gemini/tokens/refresh.token"
  },
  "rateLimits": {
    "requestsPerMinute": 1000,
    "tokensPerMinute": 2000000,
    "requestsPerDay": 10000
  }
}
```

```toml
# .gemini/commands/custom.toml
name = "analyze-complexity"
description = "Analyze code complexity and suggest improvements"
category = "code-intelligence"
prompt = """
Analyze the complexity of the following code:
{{code}}

Provide:
1. Cyclomatic complexity score
2. Cognitive complexity analysis
3. Refactoring suggestions
4. Performance implications
"""

[config]
model = "gemini-2.5-pro"
temperature = 0.3
maxTokens = 8192

[[args]]
name = "file"
type = "string"
required = true
description = "File to analyze"

[[flags]]
name = "detailed"
short = "d"
type = "boolean"
description = "Show detailed analysis"
```

---

## Security Specifications

### 1. Authentication & Authorization

```typescript
interface SecurityContext {
  authentication: AuthenticationContext;
  authorization: AuthorizationContext;
  audit: AuditContext;
  encryption: EncryptionContext;
}

class SecurityManager {
  async validateRequest(request: Request): Promise<SecurityContext> {
    // Authentication
    const authContext = await this.authenticate(request);

    // Authorization
    const authzContext = await this.authorize(authContext, request);

    // Audit
    const auditContext = this.createAuditContext(authContext, request);

    // Encryption
    const encryptionContext = await this.setupEncryption(authContext);

    return {
      authentication: authContext,
      authorization: authzContext,
      audit: auditContext,
      encryption: encryptionContext,
    };
  }
}
```

### 2. Input Validation

```typescript
class InputValidator {
  private validators = {
    path: this.validatePath,
    command: this.validateCommand,
    code: this.validateCode,
    url: this.validateUrl,
    email: this.validateEmail,
  };

  async validate(input: any, schema: ValidationSchema): Promise<ValidationResult> {
    const errors: ValidationError[] = [];

    // Type validation
    if (!this.validateType(input, schema.type)) {
      errors.push({ field: schema.field, message: 'Invalid type' });
    }

    // Format validation
    if (schema.format && !this.validateFormat(input, schema.format)) {
      errors.push({ field: schema.field, message: 'Invalid format' });
    }

    // Security validation
    const securityIssues = await this.validateSecurity(input);
    errors.push(...securityIssues);

    return {
      valid: errors.length === 0,
      errors,
    };
  }

  private async validateSecurity(input: any): Promise<ValidationError[]> {
    const errors: ValidationError[] = [];

    // Path traversal check
    if (this.detectPathTraversal(input)) {
      errors.push({ field: 'input', message: 'Path traversal detected' });
    }

    // Command injection check
    if (this.detectCommandInjection(input)) {
      errors.push({ field: 'input', message: 'Command injection detected' });
    }

    // SQL injection check
    if (this.detectSQLInjection(input)) {
      errors.push({ field: 'input', message: 'SQL injection detected' });
    }

    return errors;
  }
}
```

### 3. Secure Storage

```typescript
interface SecureStorage {
  store(key: string, value: any, encrypted: boolean): Promise<void>;
  retrieve(key: string): Promise<any>;
  delete(key: string): Promise<void>;
  exists(key: string): Promise<boolean>;
}

class PlatformSecureStorage implements SecureStorage {
  private platform = process.platform;

  async store(key: string, value: any, encrypted: boolean): Promise<void> {
    const serialized = JSON.stringify(value);
    const data = encrypted ? await this.encrypt(serialized) : serialized;

    switch (this.platform) {
      case 'darwin':
        return this.storeInKeychain(key, data);
      case 'win32':
        return this.storeInCredentialManager(key, data);
      default:
        return this.storeInSecretService(key, data);
    }
  }

  private async encrypt(data: string): Promise<string> {
    const crypto = require('crypto');
    const algorithm = 'aes-256-gcm';
    const key = await this.getDerivedKey();
    const iv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv(algorithm, key, iv);
    const encrypted = Buffer.concat([cipher.update(data, 'utf8'), cipher.final()]);

    const authTag = cipher.getAuthTag();

    return Buffer.concat([iv, authTag, encrypted]).toString('base64');
  }
}
```

---

## Performance Specifications

### 1. Performance Requirements

```typescript
interface PerformanceRequirements {
  responseTime: {
    p50: number; // 50th percentile
    p95: number; // 95th percentile
    p99: number; // 99th percentile
    max: number; // Maximum acceptable
  };
  throughput: {
    requestsPerSecond: number;
    tokensPerSecond: number;
  };
  resources: {
    maxMemoryMB: number;
    maxCPUPercent: number;
    maxDiskIOPS: number;
  };
  scalability: {
    maxConcurrentUsers: number;
    maxProjectSize: number;
    maxTokenContext: number;
  };
}

const PERFORMANCE_TARGETS: PerformanceRequirements = {
  responseTime: {
    p50: 1000, // 1 second
    p95: 3000, // 3 seconds
    p99: 5000, // 5 seconds
    max: 10000, // 10 seconds
  },
  throughput: {
    requestsPerSecond: 100,
    tokensPerSecond: 50000,
  },
  resources: {
    maxMemoryMB: 512,
    maxCPUPercent: 50,
    maxDiskIOPS: 1000,
  },
  scalability: {
    maxConcurrentUsers: 10000,
    maxProjectSize: 1000000, // 1M files
    maxTokenContext: 2000000, // 2M tokens
  },
};
```

### 2. Performance Monitoring

```typescript
class PerformanceMonitor {
  private metrics: Map<string, Metric> = new Map();

  startTimer(operation: string): Timer {
    return new Timer(operation, duration => {
      this.recordMetric(operation, 'duration', duration);
    });
  }

  recordMetric(operation: string, type: string, value: number): void {
    const key = `${operation}.${type}`;

    if (!this.metrics.has(key)) {
      this.metrics.set(key, new Metric(key));
    }

    this.metrics.get(key).record(value);
  }

  getStats(operation: string): MetricStats {
    const metrics = Array.from(this.metrics.entries())
      .filter(([key]) => key.startsWith(operation))
      .map(([_, metric]) => metric.getStats());

    return this.aggregateStats(metrics);
  }

  checkPerformance(): PerformanceReport {
    const violations: PerformanceViolation[] = [];

    // Check response times
    const responseTimeStats = this.getStats('command.execution');
    if (responseTimeStats.p95 > PERFORMANCE_TARGETS.responseTime.p95) {
      violations.push({
        type: 'response-time',
        metric: 'p95',
        actual: responseTimeStats.p95,
        target: PERFORMANCE_TARGETS.responseTime.p95,
      });
    }

    // Check resource usage
    const memoryUsage = process.memoryUsage().heapUsed / 1024 / 1024;
    if (memoryUsage > PERFORMANCE_TARGETS.resources.maxMemoryMB) {
      violations.push({
        type: 'memory',
        metric: 'heap',
        actual: memoryUsage,
        target: PERFORMANCE_TARGETS.resources.maxMemoryMB,
      });
    }

    return {
      healthy: violations.length === 0,
      violations,
      stats: this.getAllStats(),
    };
  }
}
```

### 3. Optimization Strategies

```typescript
class PerformanceOptimizer {
  private strategies: OptimizationStrategy[] = [
    new CacheOptimization(),
    new ParallelizationOptimization(),
    new LazyLoadingOptimization(),
    new StreamingOptimization(),
    new CompressionOptimization(),
  ];

  async optimize(operation: Operation): Promise<OptimizedOperation> {
    let optimized = operation;

    for (const strategy of this.strategies) {
      if (strategy.applicable(optimized)) {
        optimized = await strategy.apply(optimized);
      }
    }

    return optimized;
  }
}

class StreamingOptimization implements OptimizationStrategy {
  applicable(operation: Operation): boolean {
    return operation.dataSize > 100000 && operation.type === 'sequential';
  }

  async apply(operation: Operation): Promise<Operation> {
    return new StreamingOperation({
      ...operation,
      execute: async function* (context) {
        const chunks = this.splitIntoChunks(operation.data);
        for (const chunk of chunks) {
          yield await this.processChunk(chunk, context);
        }
      },
    });
  }
}
```

---

## Integration Specifications

### 1. External Service Integrations

```typescript
interface ServiceIntegration {
  name: string;
  type: 'api' | 'webhook' | 'sdk';
  authenticate(): Promise<void>;
  isAuthenticated(): boolean;
  execute(operation: string, params: any): Promise<any>;
}

class GitHubIntegration implements ServiceIntegration {
  name = 'github';
  type: 'api' as const;
  private octokit: Octokit;

  async authenticate(): Promise<void> {
    this.octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
      userAgent: 'gemini-cli-toolkit'
    });
  }

  async execute(operation: string, params: any): Promise<any> {
    switch (operation) {
      case 'create-pr':
        return this.createPullRequest(params);
      case 'publish-wiki':
        return this.publishWiki(params);
      case 'create-release':
        return this.createRelease(params);
      default:
        throw new Error(`Unsupported operation: ${operation}`);
    }
  }

  private async createPullRequest(params: PullRequestParams): Promise<PullRequest> {
    return this.octokit.pulls.create({
      owner: params.owner,
      repo: params.repo,
      title: params.title,
      body: params.body,
      head: params.head,
      base: params.base
    });
  }
}
```

### 2. Plugin System Specifications

```typescript
interface Plugin {
  name: string;
  version: string;
  author?: string;
  description?: string;

  // Lifecycle
  initialize(context: PluginContext): Promise<void>;
  activate(): Promise<void>;
  deactivate(): Promise<void>;
  uninstall(): Promise<void>;

  // Extensions
  commands?: Command[];
  templates?: Template[];
  hooks?: Hook[];
  integrations?: ServiceIntegration[];
}

class PluginManager {
  private plugins: Map<string, Plugin> = new Map();
  private hooks: Map<string, Hook[]> = new Map();

  async load(pluginPath: string): Promise<void> {
    const manifest = await this.loadManifest(pluginPath);
    const plugin = await this.loadPlugin(pluginPath, manifest);

    await plugin.initialize(this.createContext());
    await plugin.activate();

    this.registerPlugin(plugin);
  }

  private registerPlugin(plugin: Plugin): void {
    this.plugins.set(plugin.name, plugin);

    // Register commands
    if (plugin.commands) {
      for (const command of plugin.commands) {
        this.commandRegistry.register(command);
      }
    }

    // Register hooks
    if (plugin.hooks) {
      for (const hook of plugin.hooks) {
        this.registerHook(hook);
      }
    }

    // Register templates
    if (plugin.templates) {
      for (const template of plugin.templates) {
        this.templateRegistry.register(template);
      }
    }
  }
}
```

---

## Error Handling Specifications

### 1. Error Types

```typescript
class GeminiCliError extends Error {
  code: string;
  details?: any;
  recoverable: boolean;

  constructor(message: string, code: string, details?: any) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    this.details = details;
    this.recoverable = this.isRecoverable();
  }

  protected isRecoverable(): boolean {
    return false;
  }
}

class AuthenticationError extends GeminiCliError {
  protected isRecoverable(): boolean {
    return true; // Can retry with new credentials
  }
}

class RateLimitError extends GeminiCliError {
  retryAfter: number;

  protected isRecoverable(): boolean {
    return true; // Can retry after delay
  }
}

class ValidationError extends GeminiCliError {
  protected isRecoverable(): boolean {
    return false; // Input needs correction
  }
}

class NetworkError extends GeminiCliError {
  protected isRecoverable(): boolean {
    return true; // Can retry
  }
}
```

### 2. Error Recovery

```typescript
class ErrorRecoveryManager {
  private strategies: Map<string, RecoveryStrategy> = new Map([
    ['AUTH_FAILED', new AuthenticationRecovery()],
    ['RATE_LIMIT', new RateLimitRecovery()],
    ['NETWORK_ERROR', new NetworkRecovery()],
    ['TIMEOUT', new TimeoutRecovery()],
    ['CACHE_ERROR', new CacheRecovery()],
  ]);

  async recover(error: GeminiCliError, context: ExecutionContext): Promise<any> {
    if (!error.recoverable) {
      throw error;
    }

    const strategy = this.strategies.get(error.code);
    if (!strategy) {
      throw error;
    }

    return strategy.recover(error, context);
  }
}

class RateLimitRecovery implements RecoveryStrategy {
  async recover(error: RateLimitError, context: ExecutionContext): Promise<any> {
    const backoffStrategies = {
      exponential: (attempt: number) => Math.min(1000 * Math.pow(2, attempt), 60000),
      linear: (attempt: number) => 1000 * attempt,
      fixed: () => error.retryAfter || 5000,
    };

    const strategy = context.subscription.backoffStrategy || 'exponential';
    const delay = backoffStrategies[strategy](context.retryAttempt);

    await this.delay(delay);

    // Downgrade model if necessary
    if (context.retryAttempt > 2) {
      context.model = this.downgradeModel(context.model);
    }

    return context.retry();
  }
}
```

### 3. Error Reporting

```typescript
interface ErrorReport {
  timestamp: Date;
  error: {
    type: string;
    message: string;
    code: string;
    stack?: string;
  };
  context: {
    command: string;
    args: any;
    user?: string;
    project?: string;
    platform: string;
  };
  system: {
    nodeVersion: string;
    platform: string;
    memory: number;
    cpu: number;
  };
  recovery?: {
    attempted: boolean;
    successful: boolean;
    strategy?: string;
  };
}

class ErrorReporter {
  async report(error: Error, context: ExecutionContext): Promise<void> {
    const report: ErrorReport = {
      timestamp: new Date(),
      error: {
        type: error.constructor.name,
        message: error.message,
        code: error instanceof GeminiCliError ? error.code : 'UNKNOWN',
        stack: error.stack,
      },
      context: {
        command: context.command,
        args: this.sanitizeArgs(context.args),
        user: context.user?.id,
        project: context.project?.name,
        platform: process.platform,
      },
      system: {
        nodeVersion: process.version,
        platform: process.platform,
        memory: process.memoryUsage().heapUsed,
        cpu: process.cpuUsage().user,
      },
    };

    // Log locally
    await this.logger.error(report);

    // Send telemetry (if enabled)
    if (context.config.telemetry?.enabled) {
      await this.sendTelemetry(report);
    }
  }

  private sanitizeArgs(args: any): any {
    // Remove sensitive information
    const sanitized = { ...args };
    const sensitiveKeys = ['apiKey', 'token', 'password', 'secret'];

    for (const key of sensitiveKeys) {
      if (key in sanitized) {
        sanitized[key] = '[REDACTED]';
      }
    }

    return sanitized;
  }
}
```

---

## Configuration Specifications

### 1. Configuration Hierarchy

```typescript
class ConfigurationManager {
  private layers: ConfigurationLayer[] = [
    new DefaultConfiguration(), // Lowest priority
    new GlobalConfiguration(), // ~/.gemini/config.yaml
    new ProjectConfiguration(), // ./.gemini/config.yaml
    new EnvironmentConfiguration(), // Environment variables
    new CommandLineConfiguration(), // Highest priority
  ];

  async load(): Promise<Configuration> {
    let config: Configuration = {};

    for (const layer of this.layers) {
      if (await layer.exists()) {
        const layerConfig = await layer.load();
        config = this.merge(config, layerConfig);
      }
    }

    return this.validate(config);
  }

  private merge(base: Configuration, overlay: Configuration): Configuration {
    return deepMerge(base, overlay, {
      arrays: 'replace',
      objects: 'merge',
    });
  }
}
```

### 2. Environment Variables

```bash
# Authentication
GEMINI_API_KEY=your-api-key
GEMINI_SERVICE_ACCOUNT_PATH=/path/to/service-account.json
GEMINI_SUBSCRIPTION_TIER=pro  # Override tier detection (free|pro|enterprise)

# API Configuration
GEMINI_MODEL=gemini-2.5-flash
GEMINI_TEMPERATURE=0.7
GEMINI_MAX_TOKENS=4096

# Cache Configuration
GEMINI_CACHE_ENABLED=true
GEMINI_CACHE_TTL=3600
GEMINI_CACHE_STRATEGY=multi-layer

# Logging
GEMINI_LOG_LEVEL=info
GEMINI_LOG_FORMAT=json

# Performance
GEMINI_TIMEOUT=30000
GEMINI_MAX_RETRIES=3
GEMINI_PARALLELISM=5

# Security
GEMINI_ENABLE_AUDIT=true
GEMINI_ENCRYPT_CACHE=true
JWT_SECRET=your-jwt-secret-key
ENCRYPTION_PASSWORD=your-encryption-password
```

### 3. Platform-Specific Configuration

```typescript
class PlatformConfiguration {
  private configs = {
    win32: {
      shell: 'powershell.exe',
      configPath: '%USERPROFILE%\\.gemini',
      tempDir: '%TEMP%\\gemini',
      lineEnding: '\r\n',
    },
    darwin: {
      shell: '/bin/zsh',
      configPath: '~/.gemini',
      tempDir: '/tmp/gemini',
      lineEnding: '\n',
    },
    linux: {
      shell: '/bin/bash',
      configPath: '~/.gemini',
      tempDir: '/tmp/gemini',
      lineEnding: '\n',
    },
  };

  get(): PlatformConfig {
    const platform = process.platform;
    return this.configs[platform] || this.configs.linux;
  }

  resolvePath(path: string): string {
    const config = this.get();
    return path.replace(/^~/, process.env.HOME || '').replace(/%([^%]+)%/g, (_, key) => process.env[key] || '');
  }
}
```

---

## Conclusion

This comprehensive technical specification provides the detailed implementation requirements for the Gemini CLI AI Developer Toolkit. The specifications cover all critical aspects including:

1. **Cross-Platform Support**: Native implementations for Windows, macOS, and Linux with platform-specific optimizations
2. **Gemini API Integration**: Complete specification for authentication, model selection, and rate limiting
3. **Performance Optimization**: Detailed caching strategies, compression algorithms, and resource management
4. **Security Framework**: Comprehensive security measures including authentication, authorization, and input validation
5. **Error Handling**: Robust error recovery and reporting mechanisms
6. **Configuration Management**: Hierarchical configuration system with multiple override layers

These specifications ensure that the implementation will deliver a production-grade, enterprise-ready toolkit that meets the highest standards of quality, performance, and security while providing an exceptional developer experience across all supported platforms.

The modular architecture and extensive plugin system enable future expansion while maintaining backward compatibility. The subscription-aware features ensure optimal performance and cost efficiency for all user tiers, from free users to enterprise deployments.

**Next Steps:**

1. Review and approve specifications with stakeholder
2. Set up development environment with cross-platform CI/CD
3. Begin implementation following the phased approach in CLAUDE-BUILD-PLAN.md
4. Establish testing framework for cross-platform validation
5. Create API contracts and integration tests
