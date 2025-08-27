# CLAUDE AI Prompts: Complete Implementation Strategy

**Document Version:** 1.0  
**Date:** 2025-01-27  
**Status:** Implementation Ready  
**Alignment:** CLAUDE-BUILD-PLAN.md v2.0 MVP + CLAUDE-EPICS-AND-STORIES.md  
**Philosophy:** Simple, Not Over-Engineered Solutions

---

## ⚠️ MANDATORY READING - DO NOT SKIP

**Please ensure every AI agent reads this entire section before starting any epic**

### 🎯 Project Mission

Build the **Gemini CLI AI Developer Toolkit** with 11 MVP commands in 6 weeks, then expand to 42+ commands. **Keep it simple** - no over-engineering, no unnecessary complexity.

### 📚 Required Reading Documents

Before starting any epic, please ensure AI agents read and understand:

1. **[CLAUDE-BUILD-PLAN.md](./CLAUDE-BUILD-PLAN.md)** - MVP scope and timeline
2. **[CLAUDE-EPICS-AND-STORIES.md](./CLAUDE-EPICS-AND-STORIES.md)** - Complete feature breakdown
3. **[CLAUDE-QUICK-START.md](./CLAUDE-QUICK-START.md)** - Simple setup requirements
4. **[CLAUDE-SECURITY-ARCHITECTURE.md](./CLAUDE-SECURITY-ARCHITECTURE.md)** - Security requirements
5. **[CLAUDE-CODING-STANDARDS.md](./CLAUDE-CODING-STANDARDS.md)** - Development standards
6. **[CLAUDE-TDD-STRATEGY.md](./CLAUDE-TDD-STRATEGY.md)** - Testing approach
7. **[BRANCHING_AND_VERSIONING.md](./BRANCHING_AND_VERSIONING.md)** - Git workflow

---

## 🧠 Context Window Management Strategy

### One Epic per Session Rule

- **Each prompt handles ONE epic only** (A1, B1, C1, D1, F1 for MVP)
- **Maximum focus** - no jumping between epics
- **Clear handoffs** between sessions with detailed summaries
- **Validation checkpoints** before moving to next epic

### Required MCP Tools Usage

## Please Use MCP Server Tools for Enhanced Analysis

It's highly recommended to use MCP server tools like Context7, Sequential Thinking, Fetch, and others to enhance your analysis capabilities. Consider using ultrathink when working on complex or confusing tasks.

## 📚 Research Best Practices & Community Standards

**Before implementing any feature, please ensure you research and follow established patterns:**

**For Every Epic Implementation:**

- 🧠 **mcp\_\_sequential-thinking** - Complex problem analysis and step-by-step planning
- 📖 **mcp\_\_context7** - Library documentation and best practices research
- 🌐 **mcp\_\_fetch** / **WebFetch** - **OFFICIAL documentation and community standards**
- 🔍 **mcp\_\_brave-search** - **Current best practices, RFC standards, and community patterns**
- 🛠️ **Task** agents - Specialized agents for specific tasks (security, testing, etc.)
- 🔍 **USE PROBLEM-SOLVER-SPECIALIST AGENT** for any and all problems where you are stuck

**🎯 Best Practices Research Requirements:**

1. **Official Documentation First** - Always check official docs for libraries/frameworks
2. **Community Standards** - Research established patterns in the relevant community
3. **RFC Standards** - Follow industry RFCs and specifications where applicable
4. **Security Best Practices** - Research OWASP, NIST, and security community standards
5. **Keep It Simple** - Choose simple, proven solutions over complex architectures

**📋 Required Research Pattern for Every Feature:**

```bash
1. Use sequential-thinking to break down the epic and identify research needs
2. Use fetch to get OFFICIAL documentation for libraries/frameworks
3. Use brave-search to find established community patterns and best practices
4. Use context7 to research specific implementation approaches
5. Validate approaches against community standards and RFCs
6. Use specialized task agents for implementation following researched patterns
7. Double-check final implementation against best practices
```

**🔍 Specific Research Requirements:**

- **CLI Libraries**: Research Commander.js, Yargs, Oclif official docs and patterns
- **Testing**: Research Jest, Mocha community testing patterns and standards
- **Security**: Research OWASP CLI security guidelines and NIST standards
- **Node.js**: Follow Node.js official best practices and community conventions
- **TypeScript**: Follow TypeScript handbook and community style guides
- **Git Workflows**: Research conventional commits and semantic versioning standards

---

## 📋 Epic Summary System (MANDATORY)

### Summary Folder Structure

```
epic-summaries/
├── EP-A1/                    # Core Code Understanding Epic
│   ├── EPIC-SUMMARY.md       # Main comprehensive summary (max 1 page)
│   ├── HANDOFF.md           # Brief handoff to next epic (max 1/2 page)
│   └── SUB-AGENTS/          # Sub-agent work summaries
│       ├── security-scanner-01.md
│       ├── test-agent-01.md
│       └── code-review-02.md
├── EP-B1/, EP-C1/, EP-D1/, EP-F1/  # Same structure for each epic
```

### Summary Requirements

1. **Summaries are Essential** - Please ensure all epics include complete summaries
2. **Brevity is Critical** - Keep summaries short but comprehensive
3. **Create Immediately** - Upon epic/sub-agent task completion
4. **Sequential Naming** - Use numbers for multiple sub-agent summaries

### EPIC-SUMMARY.md Template (Main Agent)

```markdown
# Epic [ID]: [Name] - Implementation Summary

**Date:** [completion date] | **Duration:** [actual vs estimated] | **Status:** COMPLETE

## What Was Built

- [Feature 1 with key details]
- [Feature 2 with key details]
- [Feature 3 with key details]

## Key Technical Decisions

- [Decision 1]: [Rationale]
- [Decision 2]: [Rationale]
- [Decision 3]: [Rationale]

## Quality Metrics

- Test Coverage: X%
- Security Scan: Clean/[X issues]
- Performance: Xs response time
- Cross-Platform: ✅ Windows/macOS/Linux

## Challenges & Solutions

1. **[Challenge]**: [How resolved]
2. **[Challenge]**: [How resolved]

## Technical Debt / Watch-Outs

[Any shortcuts or important notes for future]

## Files Created/Modified

[Key files with brief descriptions]
```

### HANDOFF.md Template (Main Agent)

```markdown
# Handoff to Epic [Next-ID]: [Next Epic Name]

## Critical Context for Next Epic

1. [Key thing #1 next epic needs to know]
2. [Key thing #2 next epic needs to know]
3. [Key thing #3 next epic needs to know]

## Dependencies Created

- [Component/Module]: [What it does, how next epic uses it]
- [API/Interface]: [How to integrate with it]

## Architecture Decisions Impact

- [Decision that affects next epic]
- [Pattern established that should be followed]

## Watch Out For

- [Gotcha #1]: [Why it matters]
- [Gotcha #2]: [How to handle]
```

### Sub-Agent Summary Template

```markdown
# Sub-Agent: [agent-name-task-number]

**Agent:** [specific agent used] | **Task:** [what was done] | **Date:** [completion date]

## Task Result

[Outcome in 1-2 sentences]

## Key Implementation

- [Approach used]
- [Key technical choice]

## Files Created/Modified

- [file1.ts]: [brief description]
- [file2.test.ts]: [brief description]

## Notes for Future Work

[Any important context for later tasks]
```

### Summary Creation Workflow

1. **Sub-agents**: Create summary immediately after completing task
2. **Main agent**: Review all sub-agent summaries before creating EPIC-SUMMARY.md
3. **Main agent**: Create HANDOFF.md with insights for next epic
4. **Validation**: Ensure all summaries exist before marking epic complete

---

## 🏗️ Epic Implementation Prompts

### Epic A1: Core Code Understanding (P0)

**Duration:** 2-3 weeks | **Commands:** explain, debug, scaffold

#### Phase 1: Foundation & Planning

```
You are implementing Epic A1 (Core Code Understanding) for the Gemini CLI toolkit.

Required Initial Steps:
1. Use sequential-thinking to analyze the epic requirements from CLAUDE-EPICS-AND-STORIES.md
2. Use context7 to research AST parsing libraries for multiple languages
3. Use fetch to get latest Gemini API documentation
4. Review CLAUDE-CODING-STANDARDS.md for security requirements

YOUR GOALS:
- Implement gemini explain, debug, and scaffold commands
- Support 20+ programming languages with AST parsing
- Cross-platform compatibility (Windows, macOS, Linux)
- Security-first input validation and sanitization
- Simple architecture - no over-engineering

EPIC REQUIREMENTS FROM CLAUDE-EPICS-AND-STORIES.md:
- Story A1.1: Universal Code Explainer with 50+ language support
- Story A1.2: Intelligent Code Generator with template system
- Story A1.3: AI Debugging Assistant with stack trace parsing

ARCHITECTURE DECISIONS:
- Use CLAUDE-CODING-STANDARDS.md TypeScript strict mode requirements
- Follow CLAUDE-SECURITY-ARCHITECTURE.md input validation patterns
- Implement CLAUDE-TDD-STRATEGY.md security-first testing

DELIVERABLES:
1. Complete implementation of 3 commands
2. Comprehensive test suite (>90% coverage)
3. Security validation for all inputs
4. Cross-platform compatibility verification
5. Documentation aligned with CLAUDE-QUICK-START.md
6. **Essential**: Complete epic-summaries/EP-A1/ with EPIC-SUMMARY.md, HANDOFF.md, and all SUB-AGENTS/ summaries

USE MCP TOOLS EXTENSIVELY - FOLLOW BEST PRACTICES RESEARCH PATTERN:
- sequential-thinking for complex problem breakdown and research planning
- fetch for OFFICIAL Gemini API documentation and AST parser official docs
- brave-search for established CLI patterns, AST parsing best practices, and community standards
- context7 for specific library research (tree-sitter, babel-parser, etc.)
- Research TypeScript CLI best practices and Node.js community standards
- security-scanner for vulnerability checks following OWASP CLI guidelines

CHECKPOINT: Before marking complete, validate all acceptance criteria from CLAUDE-EPICS-AND-STORIES.md Story A1.1-A1.3 are met.
```

### Epic B1: Core Documentation Generation (P0)

**Duration:** 2-3 weeks | **Commands:** docstring, readme, wiki

#### Phase 1: Documentation System Design

```
You are implementing Epic B1 (Core Documentation Generation) for the Gemini CLI toolkit.

Required Initial Steps:
1. Use sequential-thinking to plan the documentation generation architecture
2. Use context7 to research JSDoc, Python docstrings, and documentation generation tools
3. Use fetch to get examples of high-quality README templates
4. Review CLAUDE-EPICS-AND-STORIES.md stories B1.1-B1.3 requirements

YOUR GOALS:
- Implement gemini docstring, readme, and wiki commands
- Support multiple documentation formats (JSDoc, Sphinx, etc.)
- Generate professional README files with badges and examples
- Create comprehensive wiki generation from codebase analysis
- Keep it simple - avoid over-engineered documentation systems

EPIC REQUIREMENTS:
- Story B1.1: Auto Documentation with AST parsing
- Story B1.2: README Generator with dependency analysis
- Story B1.3: Wiki Generator with GitHub/GitLab integration

ARCHITECTURE PRINCIPLES:
- Follow CLAUDE-CODING-STANDARDS.md for TypeScript implementation
- Use CLAUDE-SECURITY-ARCHITECTURE.md for file system security
- Implement CLAUDE-TDD-STRATEGY.md testing patterns

CRITICAL SUCCESS FACTORS:
- Generate documentation that looks manually crafted
- Support batch processing for entire directories
- Preserve existing documentation when updating
- Cross-platform path handling per BRANCHING_AND_VERSIONING.md standards

MCP TOOL REQUIREMENTS - RESEARCH COMMUNITY STANDARDS:
- sequential-thinking for documentation flow design and research planning
- fetch for OFFICIAL documentation format specifications (JSDoc, TSDoc, etc.)
- brave-search for community README standards, wiki best practices, and documentation patterns
- context7 for specific documentation tool research (TypeDoc, Sphinx, etc.)
- Research GitHub/GitLab documentation standards and community conventions
- security-scanner for file system security validation following OWASP guidelines

DELIVERABLES:
1. Three fully functional documentation commands
2. Support for 10+ documentation formats
3. Template system with customization
4. Integration tests with real repositories
5. Performance benchmarks (handle large codebases)
6. **Essential**: Complete epic-summaries/EP-B1/ with EPIC-SUMMARY.md, HANDOFF.md, and all SUB-AGENTS/ summaries

VALIDATION CHECKPOINT: All acceptance criteria from CLAUDE-EPICS-AND-STORIES.md B1.1-B1.3 must be verified complete.
```

### Epic C1: Test Generation and Analysis (P0)

**Duration:** 2-3 weeks | **Commands:** testgen

#### Phase 1: Testing Framework Integration

```
You are implementing Epic C1 (Test Generation and Analysis) for the Gemini CLI toolkit.

Required Preparation:
1. Use sequential-thinking to analyze testing framework landscape
2. Use context7 to research Jest, Mocha, PyTest, JUnit integration patterns
3. Use fetch to get latest testing framework documentation
4. Study CLAUDE-TDD-STRATEGY.md for security-first testing approach

YOUR MISSION:
- Implement gemini testgen command for automatic test generation
- Support 10+ testing frameworks across different languages
- Generate comprehensive test suites with edge cases
- Include security testing patterns from CLAUDE-TDD-STRATEGY.md
- Simple implementation - avoid complex test generation algorithms

EPIC REQUIREMENTS FROM CLAUDE-EPICS-AND-STORIES.md:
- Story C1.1: Test Generator with framework detection
- Generate unit tests for all exported functions/classes
- Include edge case identification and mock generation
- Support property-based testing

IMPLEMENTATION STRATEGY:
- Follow CLAUDE-CODING-STANDARDS.md strict TypeScript requirements
- Implement CLAUDE-SECURITY-ARCHITECTURE.md input validation
- Use CLAUDE-TDD-STRATEGY.md security testing patterns
- Respect BRANCHING_AND_VERSIONING.md git workflow

TECHNICAL REQUIREMENTS:
- AST parsing for test target identification
- Framework detection from package.json/requirements.txt
- Realistic test data generation
- Mock object creation for dependencies
- Edge case identification using AI analysis

MCP TOOLS USAGE - RESEARCH TESTING BEST PRACTICES:
- sequential-thinking for test generation strategy and research planning
- fetch for OFFICIAL testing framework documentation (Jest, Mocha, PyTest, etc.)
- brave-search for community testing patterns, TDD best practices, and industry standards
- context7 for specific testing library research and mocking strategies
- Research community conventions for test naming, structure, and assertions
- test agent for validation of generated tests following established patterns

SUCCESS CRITERIA:
1. Generate tests that pass immediately
2. Achieve >80% code coverage with generated tests
3. Include security validation tests
4. Support cross-platform test execution
5. Integration with CI/CD pipeline from CLAUDE-CICD-PLAN.md
6. **Essential**: Complete epic-summaries/EP-C1/ with EPIC-SUMMARY.md, HANDOFF.md, and all SUB-AGENTS/ summaries

CHECKPOINT: Validate all story acceptance criteria from CLAUDE-EPICS-AND-STORIES.md C1.1 are complete.
```

### Epic D1: Git Workflow Automation (P0)

**Duration:** 1-2 weeks | **Commands:** commit, pr-description

#### Phase 1: Git Integration

```
You are implementing Epic D1 (Git Workflow Automation) for the Gemini CLI toolkit.

PREPARATION REQUIREMENTS:
1. Use sequential-thinking to design git workflow integration
2. Use context7 to research conventional commit standards
3. Use fetch to get GitHub/GitLab PR template examples
4. Review BRANCHING_AND_VERSIONING.md git workflow requirements

YOUR OBJECTIVES:
- Implement gemini commit for intelligent commit message generation
- Implement gemini pr-description for comprehensive PR descriptions
- Support conventional commits and multiple commit conventions
- Analyze git diffs and generate contextual commit messages
- Simple git integration - no complex workflow management

EPIC REQUIREMENTS:
- Story D1.1: Smart Commits with conventional commit format
- Story D1.3: PR Description Generator with change analysis
- Interactive confirmation and multiple convention support

TECHNICAL ARCHITECTURE:
- Follow CLAUDE-CODING-STANDARDS.md for git command execution
- Use CLAUDE-SECURITY-ARCHITECTURE.md for command injection prevention
- Implement CLAUDE-TDD-STRATEGY.md for git operation testing
- Align with BRANCHING_AND_VERSIONING.md workflow

GIT INTEGRATION REQUIREMENTS:
- Parse git diff --staged for commit analysis
- Analyze branch changes for PR descriptions
- Support multiple git hosting platforms
- Include breaking change detection
- Generate conventional commit format messages

MCP TOOLS STRATEGY - RESEARCH GIT BEST PRACTICES:
- sequential-thinking for git workflow analysis and research planning
- fetch for OFFICIAL conventional commits specification and semantic versioning docs
- brave-search for community commit message standards and PR description best practices
- context7 for specific git workflow research and platform integration patterns
- Research GitHub/GitLab community standards and established workflows
- git-github-specialist for advanced git operations following community conventions

DELIVERABLES:
1. Smart commit message generation
2. Comprehensive PR description creation
3. Multiple commit convention support
4. Integration with popular git platforms
5. Interactive CLI workflows
6. **Essential**: Complete epic-summaries/EP-D1/ with EPIC-SUMMARY.md, HANDOFF.md, and all SUB-AGENTS/ summaries

VALIDATION: All acceptance criteria from CLAUDE-EPICS-AND-STORIES.md D1.1 and D1.3 must be verified.
```

### Epic F1: Custom Command System (P0)

**Duration:** 1-2 weeks | **Commands:** run, context

#### Phase 1: Command Framework

```
You are implementing Epic F1 (Custom Command System) for the Gemini CLI toolkit.

INITIAL ANALYSIS:
1. Use sequential-thinking to design the custom command architecture
2. Use context7 to research TOML configuration and command execution patterns
3. Use fetch to get CLI framework documentation (Commander.js, etc.)
4. Study CLAUDE-EPICS-AND-STORIES.md F1.1-F1.2 requirements

YOUR MISSION:
- Implement gemini run for custom script execution with TOML configuration
- Implement gemini context for project analysis and token optimization
- Support global and local command definitions
- Enable persona overrides and argument interpolation
- Keep architecture simple - avoid over-engineered command systems

EPIC REQUIREMENTS:
- Story F1.1: Custom Script Executor with TOML definitions
- Story F1.2: Context Analyzer for token usage optimization
- Support for ./.gemini/scripts/ and ~/.gemini/scripts/ directories

IMPLEMENTATION APPROACH:
- Follow CLAUDE-CODING-STANDARDS.md security standards
- Use CLAUDE-SECURITY-ARCHITECTURE.md command execution security
- Implement CLAUDE-TDD-STRATEGY.md testing for custom commands
- Respect BRANCHING_AND_VERSIONING.md for development workflow

TECHNICAL SPECIFICATIONS:
- TOML configuration parsing for command definitions
- Secure argument interpolation with validation
- Shell command integration with !{...} syntax
- Context analysis for token usage and optimization
- Subscription tier recommendations

SECURITY REQUIREMENTS:
- Command injection prevention
- Path traversal protection
- Input sanitization for custom scripts
- Secure execution sandboxing
- Audit logging for custom command execution

MCP TOOLS UTILIZATION - RESEARCH CLI AND SECURITY STANDARDS:
- sequential-thinking for command system design and research planning
- fetch for OFFICIAL TOML specification and CLI framework documentation
- brave-search for community CLI patterns, configuration best practices, and security standards
- context7 for specific CLI framework research and secure execution patterns
- Research OWASP CLI security guidelines and Node.js security best practices
- security-scanner for command injection testing following established security standards

SUCCESS METRICS:
1. Custom commands execute securely across platforms
2. TOML configuration system works intuitively
3. Context analysis provides actionable insights
4. Integration with subscription tier system
5. Performance meets <2 second response time requirement
6. **Essential**: Complete epic-summaries/EP-F1/ with EPIC-SUMMARY.md, HANDOFF.md, and all SUB-AGENTS/ summaries

FINAL CHECKPOINT: Validate all F1.1-F1.2 acceptance criteria from CLAUDE-EPICS-AND-STORIES.md are complete.
```

---

## 🔒 Security-First Implementation Requirements

### Security Checklist (ALL EPICS)

Before marking any epic complete, please ensure you validate:

- [ ] **Input Validation**: All user inputs validated per CLAUDE-SECURITY-ARCHITECTURE.md
- [ ] **Command Injection Prevention**: No shell injection vulnerabilities
- [ ] **Path Traversal Protection**: File system access properly restricted
- [ ] **Credential Security**: API keys and tokens encrypted at rest
- [ ] **Audit Logging**: All operations logged for security monitoring
- [ ] **Cross-Platform Security**: Security measures work on all platforms

### Security Testing Requirements

- [ ] Use security-scanner agent for vulnerability assessment
- [ ] Implement security tests from CLAUDE-TDD-STRATEGY.md
- [ ] Validate against OWASP Top 10 for CLI applications
- [ ] Test with malicious inputs and edge cases
- [ ] Verify secure defaults for all configurations

---

## 🧪 Quality Assurance Standards

### Testing Requirements (ALL EPICS)

- [ ] **Unit Tests**: >95% code coverage per CLAUDE-TDD-STRATEGY.md
- [ ] **Integration Tests**: All API integrations tested
- [ ] **Security Tests**: 100% coverage of security-critical functions
- [ ] **Cross-Platform Tests**: All platforms tested in CI/CD
- [ ] **Performance Tests**: <2 second response time validated

### Code Quality Gates

- [ ] **TypeScript Strict**: Zero `any` types per CLAUDE-CODING-STANDARDS.md
- [ ] **ESLint Clean**: Zero linting errors
- [ ] **Security Scan Clean**: Zero high/critical vulnerabilities
- [ ] **Documentation Complete**: All public APIs documented
- [ ] **CI/CD Passing**: All pipeline stages successful

---

## 📋 Epic Handoff Documentation

### Epic Completion Checklist

When completing an epic, provide:

1. **Implementation Summary**: What was built and how
2. **Architecture Decisions**: Key technical choices made
3. **Security Validation**: Confirmation all security requirements met
4. **Test Results**: Coverage and performance metrics
5. **Known Issues**: Any limitations or technical debt
6. **Next Epic Recommendations**: Insights for following epics

### Epic Completion Template

```markdown
# Epic [ID] Implementation Complete

## Summary

[Brief description of what was implemented]

## Architecture

[Key technical decisions and rationale]

## Security Validation

- [ ] All inputs validated and sanitized
- [ ] No command injection vulnerabilities
- [ ] Secure credential handling implemented
- [ ] Cross-platform security verified

## Quality Metrics

- Test Coverage: [percentage]%
- Performance: [response times]
- Security Scan: [clean/issues found]
- Cross-Platform: [status on Windows/macOS/Linux]

## Handoff Notes

[Important information for next epic implementation]
```

---

## 🎯 Success Criteria & Validation

### MVP Completion Criteria

All MVP epics (A1, B1, C1, D1, F1) must achieve:

- [ ] **Functionality**: All acceptance criteria met
- [ ] **Security**: Zero high/critical vulnerabilities
- [ ] **Performance**: <2 second response times
- [ ] **Quality**: >90% test coverage
- [ ] **Cross-Platform**: Windows/macOS/Linux compatibility
- [ ] **Documentation**: Complete user and developer docs

### Post-MVP Expansion Criteria

For additional epics (A2, B2, C2, D2, E1, E2, F2):

- [ ] **Integration**: Seamless integration with MVP commands
- [ ] **Scalability**: Handle large codebases efficiently
- [ ] **User Experience**: Intuitive and consistent interface
- [ ] **Enterprise Ready**: Support for enterprise requirements
- [ ] **Maintainable**: Clear architecture for future development

---

## 🚀 Implementation Timeline

### Week 1-2: Epic A1 (Core Code Understanding)

- Set up project foundation and security architecture
- Implement explain, debug, scaffold commands
- Establish testing and CI/CD pipeline

### Week 3-4: Epic B1 (Core Documentation) + Epic C1 (Test Generation)

- Parallel implementation of documentation and testing commands
- Integration testing between commands
- Performance optimization

### Week 5-6: Epic D1 (Git Workflow) + Epic F1 (Custom Commands)

- Git integration and custom command system
- Final MVP integration testing
- Production readiness validation

### Post-MVP: Advanced Features

- Continue with remaining epics based on user feedback
- Scale system for enterprise requirements
- Add advanced AI capabilities

---

## 🔧 Development Guidelines

### Keep It Simple Philosophy

- **No Over-Engineering**: Choose simple, proven solutions over complex architectures
- **Minimal Dependencies**: Only include essential dependencies
- **Clear Interfaces**: Simple, intuitive command interfaces
- **Direct Implementation**: Avoid unnecessary abstraction layers
- **Practical Solutions**: Focus on solving real developer problems

### Technical Constraints

- **Performance**: <2 second response for most commands
- **Memory**: <512MB typical usage
- **Dependencies**: Minimal dependency footprint
- **Cross-Platform**: Identical behavior across platforms
- **Security**: No compromises on security for simplicity

This comprehensive prompt strategy ensures systematic, secure, and high-quality implementation of the complete Gemini CLI AI Developer Toolkit while maintaining focus on simplicity and practical developer needs. 🚀🔒
