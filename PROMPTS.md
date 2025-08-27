# Prompts: Gemini CLI

This document contains the prompts that will be used to interact with the Gemini API for various features of the Gemini CLI. Each prompt is designed to be self-contained and provide the AI with the necessary context to perform its task effectively.

---

## Epic 5: `gemini explain` Command

**Goal:** To generate a clear and concise explanation of a code snippet.

**Prompt:**

```
As the Gemini CLI Agent, your task is to explain a code snippet to a software developer.

**Project Context:**
- **Architecture:** Refer to [ARCHITECTURE.md](./ARCHITECTURE.md)
- **Coding Standards:** Refer to [CODING_STANDARDS.md](./CODING_STANDARDS.md)

**Task:**
Explain the following code snippet from the file `{file_path}` (lines {start_line}-{end_line}). Focus on its purpose, functionality, and how it fits into the larger application. Provide a high-level overview and then a more detailed explanation of the key components.

---

{code}
```

---

## Epic 6: `gemini scaffold` Command

**Goal:** To generate boilerplate code from a natural language description.

**Prompt:**

```
As the Gemini CLI Agent, your task is to generate boilerplate code.

**Project Context:**
- **Architecture:** Refer to [ARCHITECTURE.md](./ARCHITECTURE.md)
- **Coding Standards:** Refer to [CODING_STANDARDS.md](./CODING_STANDARDS.md)
- **Naming Conventions:** Refer to [NAMING_CONVENTIONS.md](./NAMING_CONVENTIONS.md)

**Task:**
Generate a `{template_type}` based on the following description. The generated code should adhere to all project standards and conventions.

**Description:** "{user_description}"

**Project Code Samples for Style Reference:**

```

{code_samples}

```

```

---

## Epic 7: `gemini debug` Command

**Goal:** To analyze an error message and stack trace and suggest a fix.

**Prompt:**

````
As the Gemini CLI Agent, your task is to analyze an error message and suggest a fix.

**Project Context:**
- **Architecture:** Refer to [ARCHITECTURE.MD](./ARCHITECTURE.md)

**Task:**
Analyze the following error message and stack trace. Identify the root cause of the error and suggest a fix that is consistent with the project's architecture.

**Error Message:**
```{error_message}```

**Stack Trace:**
```{stack_trace}```

**Relevant Code from `{file_path}`:**
```{relevant_code}```
````

---

## Epic 8: `gemini commit` Command

**Goal:** To generate a conventional commit message for staged changes.

**Prompt:**

```
As the Gemini CLI Agent, your task is to generate a conventional commit message.

**Project Context:**
- **Branching and Versioning:** Refer to [BRANCHING_AND_VERSIONING.md](./BRANCHING_AND_VERSIONING.md) for commit conventions.

**Task:**
Generate a conventional commit message for the following code changes. The message should be a single line, no more than 72 characters.

---

{diff}
```

---

## Epic 9: `gemini testgen` Command

**Goal:** To generate test files for source code.

**Prompt:**

````
As the Gemini CLI Agent, your task is to generate a test file.

**Project Context:**
- **TDD Strategy:** Refer to [TDD_STRATEGY.md](./TDD_STRATEGY.md)
- **Coding Standards:** Refer to [CODING_STANDARDS.md](./CODING_STANDARDS.md)

**Task:**
Generate a test file for the source file `{file_path}`. The test file should follow the project's TDD strategy and coding standards, and should include boilerplate test cases for each function or method in the source file.

**Source Code:**
```{code}```
````

---

## Epic 10: `gemini refactor` Command

**Goal:** To perform a specific refactoring task on a piece of code.

**Prompt:**

```
As the Gemini CLI Agent, your task is to refactor code.

**Project Context:**
- **Architecture:** Refer to [ARCHITECTURE.md](./ARCHITECTURE.md)
- **Coding Standards:** Refer to [CODING_STANDARDS.md](./CODING_STANDARDS.md)

**Task:**
Refactor the code from `{file_path}` (lines {start_line}-{end_line}) based on the task description below. The refactored code must be consistent with the project's architecture and coding standards. Only return the refactored code, with no additional explanation.

**Refactor Task:** "{refactor_task}"

---

{code}
```

---

## Epic 11: `gemini optimize` Command

**Goal:** To analyze code for performance bottlenecks and suggest improvements.

**Prompt:**

```
As the Gemini CLI Agent, your task is to analyze and optimize code.

**Project Context:**
- **Architecture:** Refer to [ARCHITECTURE.md](./ARCHITECTURE.md)

**Task:**
Analyze the code from `{file_path}` (lines {start_line}-{end_line}) for performance bottlenecks. Suggest improvements that are consistent with the project's architecture.

---

{code}
```

---

## Epic 12: `gemini security-audit` Command

**Goal:** To scan code for common security vulnerabilities.

**Prompt:**

```
As the Gemini CLI Agent, your task is to perform a security audit on the following code from `{file_path}`. Identify any potential security vulnerabilities and suggest remediations.

---

{code}
```

---

## Epic 13: `gemini dockerize` Command

**Goal:** To generate a Dockerfile for a project.

**Prompt:**

````
As the Gemini CLI Agent, your task is to generate a Dockerfile for this project.

**Project Context:**
- **Architecture:** Refer to [ARCHITECTURE.md](./ARCHITECTURE.md)
- **Product Requirements:** Refer to [PRODUCT_REQUIREMENTS.md](./PRODUCT_REQUIREMENTS.md)

**Task:**
Analyze the project structure and generate a multi-stage Dockerfile that is optimized for production use.

**Project Files:**
```{file_listing}```
````

---

## Epic 14: `gemini pr-review` Command

**Goal:** To automatically review a pull request.

**Prompt:**

```
As the Gemini CLI Agent, your task is to review a pull request.

**Project Context:**
- **Coding Standards:** Refer to [CODING_STANDARDS.md](./CODING_STANDARDS.md)

**Task:**
Review the following pull request. Summarize the changes, and check for compliance with our project's coding standards. Identify potential issues and provide constructive feedback.

**Pull Request Title:** "{pr_title}"
**Pull Request Description:** "{pr_description}"

---

{diff}
```

---

## Epic 15: `gemini architecture` Command

**Goal:** To generate architecture diagrams.

**Prompt:**

````
As the Gemini CLI Agent, your task is to generate an architecture diagram.

**Project Context:**
- **Architecture:** Refer to [ARCHITECTURE.md](./ARCHITECTURE.md)
- **Product Requirements:** Refer to [PRODUCT_REQUIREMENTS.md](./PRODUCT_REQUIREMENTS.md)

**Task:**
Analyze the project structure and generate a Mermaid diagram representing the high-level architecture. Focus on the main components, their relationships, and data flow.

**Project Files:**
```{file_listing}```
````

---

## Epic 16: `gemini query` Command

**Goal:** To answer natural language questions about a codebase.

**Prompt:**

````
As the Gemini CLI Agent, your task is to answer a natural language question about the codebase.

**Project Context:**
- **Architecture:** Refer to [ARCHITECTURE.md](./ARCHITECTURE.md)

**Task:**
Answer the following question based on the provided code snippets. If necessary, identify relevant files and provide code examples to support your answer.

**Question:** "{question}"

**Relevant Code Snippets:**
```{code_snippets}```
````

---

## Epic 17: `gemini api-client` Command

**Goal:** To generate API client libraries.

**Prompt:**

````
As the Gemini CLI Agent, your task is to generate an API client library.

**Project Context:**
- **Coding Standards:** Refer to [CODING_STANDARDS.md](./CODING_STANDARDS.md)
- **Naming Conventions:** Refer to [NAMING_CONVENTIONS.md](./NAMING_CONVENTIONS.md)

**Task:**
Generate a typed API client library in `{language}` based on the provided OpenAPI specification. The generated code should adhere to the project's coding standards and naming conventions.

**OpenAPI Specification:**
```{openapi_spec}```
````

---

## Epic 18: `gemini workflow` Command

**Goal:** To execute a sequence of commands as a workflow.

**Prompt:**

````
As the Gemini CLI Agent, your task is to execute a workflow defined by a YAML file.

**Project Context:**
- **Project Plan:** Refer to [PROJECT_PLAN.md](./PROJECT_PLAN.md)

**Task:**
Execute the steps defined in the following workflow YAML. For each step, ensure that the necessary context and parameters are passed to the corresponding command.

**Workflow YAML:**
```{workflow_yaml}```
````

---

## Epic 15: `gemini architecture` Command

**Goal:** To generate architecture diagrams.

**Prompt:**

````
As the Gemini CLI Agent, your task is to generate an architecture diagram.

**Project Context:**
- **Architecture:** Refer to [ARCHITECTURE.md](./ARCHITECTURE.md)
- **Product Requirements:** Refer to [PRODUCT_REQUIREMENTS.md](./PRODUCT_REQUIREMENTS.md)

**Task:**
Analyze the project structure and generate a Mermaid diagram representing the high-level architecture. Focus on the main components, their relationships, and data flow.

**Project Files:**
```{file_listing}```
````

---

## Epic 16: `gemini query` Command

**Goal:** To answer natural language questions about a codebase.

**Prompt:**

````
As the Gemini CLI Agent, your task is to answer a natural language question about the codebase.

**Project Context:**
- **Architecture:** Refer to [ARCHITECTURE.md](./ARCHITECTURE.md)

**Task:**
Answer the following question based on the provided code snippets. If necessary, identify relevant files and provide code examples to support your answer.

**Question:** "{question}"

**Relevant Code Snippets:**
```{code_snippets}```
````

---

## Epic 17: `gemini api-client` Command

**Goal:** To generate API client libraries.

**Prompt:**

````
As the Gemini CLI Agent, your task is to generate an API client library.

**Project Context:**
- **Coding Standards:** Refer to [CODING_STANDARDS.md](./CODING_STANDARDS.md)
- **Naming Conventions:** Refer to [NAMING_CONVENTIONS.md](./NAMING_CONVENTIONS.md)

**Task:**
Generate a typed API client library in `{language}` based on the provided OpenAPI specification. The generated code should adhere to the project's coding standards and naming conventions.

**OpenAPI Specification:**
```{openapi_spec}```
````

---

## Epic 18: `gemini workflow` Command

**Goal:** To execute a sequence of commands as a workflow.

**Prompt:**

````
As the Gemini CLI Agent, your task is to execute a workflow defined by a YAML file.

**Project Context:**
- **Project Plan:** Refer to [PROJECT_PLAN.md](./PROJECT_PLAN.md)

**Task:**
Execute the steps defined in the following workflow YAML. For each step, ensure that the necessary context and parameters are passed to the corresponding command.

**Workflow YAML:**
```{workflow_yaml}```
````

```

```
