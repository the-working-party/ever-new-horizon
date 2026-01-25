---
name: scaffold
description: Scaffold Shopify section development projects using task templates. Use when creating new Shopify sections, modifying existing sections, or when the user wants to start a structured section build workflow with TWP standards. Triggers task creation with specialized agents.
---

# Shopify Section Scaffold

Scaffold structured task workflows for Shopify section development using TWP (The Working Party) best practices.

## Overview

This skill loads task templates and creates dependency-aware task lists for Shopify section development. It combines:

- **Requirements Gathering**: Uses AskUserQuestion to understand the full scope
- **Compositional Analysis**: Maximizes reuse of existing blocks
- **Specialized Agents**: Each task is owned by a domain-expert agent
- **TWP Standards**: All agents encode CRITICAL and HIGH rules from TWP Best Practices

## Quick Start

```
/scaffold shopify-section-new --section-name hero-banner
```

Or interactively:
```
/scaffold
```

## Workflow

### Step 1: Load Template

Available templates:
- `shopify-section-new` - Create a new section from scratch
- `shopify-section-modify` - Modify an existing section (coming soon)
- `shopify-section-clone` - Clone and customize a section (coming soon)

### Step 2: Gather Variables

The skill will prompt for required variables:
- `section_name` - The section identifier (kebab-case)
- `figma_url` - Figma design URL (optional, enables design review tasks)
- `local_url` - Local dev server URL (default: http://localhost:9292)
- `theme_path` - Path to theme directory (default: .)

### Step 3: Requirements Gathering

Using AskUserQuestion, gather:
1. **Work Type**: New, modify, or clone existing section
2. **Purpose**: What problem does this section solve?
3. **Documentation**: Client docs needed?
4. **Interactivity**: JavaScript requirements
5. **Content Elements**: Heading, images, video, CTAs, etc.
6. **Responsive Behavior**: Mobile-specific layouts
7. **Edge Cases**: Empty states, placeholders, errors

### Step 4: Create Tasks

Based on template and requirements, create tasks with:
- Proper dependencies (blockedBy)
- Specialized agent owners
- Success criteria in metadata
- Out of scope boundaries
- Conditional task creation (e.g., skip JS if static-only)

### Step 5: Execute Tasks

Tasks execute in dependency order with approval milestones:
1. **Analysis Phase**: Theme composition, Figma extraction
2. **Build Phase**: Blocks, Liquid, schema, JS, CSS, docs
3. **Review Phase**: Design comparison, fix discrepancies
4. **Test Phase**: QA in theme customizer
5. **Document Phase**: Client documentation

## Template Structure

Templates are JSON files in `.claude/templates/`:

```json
{
  "name": "shopify-section-new",
  "description": "Create a new Shopify section from scratch",
  "version": "1.0.0",
  "variables": {
    "section_name": { "required": true, "prompt": "..." }
  },
  "requirements_gathering": {
    "work_type": { "question": "...", "options": [...] }
  },
  "agents": {
    "liquid-dev": { "model": "sonnet", "prompt": "..." }
  },
  "tasks": [
    {
      "id": "1",
      "subject": "...",
      "owner": "liquid-dev",
      "blockedBy": [],
      "metadata": {
        "success_criteria": [...],
        "out_of_scope": [...]
      }
    }
  ]
}
```

## Execution Instructions

When `/scaffold` is invoked:

### 1. List Available Templates

```
Read all .json files from .claude/templates/ directory.
Present options to user if no template specified.
```

### 2. Load Selected Template

```
Read the template JSON file.
Parse variables, requirements_gathering, agents, and tasks.
```

### 3. Prompt for Variables

For each variable in template.variables:
- If required and no default: prompt user
- If has validation: validate user input
- Store value for template interpolation

### 4. Requirements Gathering Phase

For each question in template.requirements_gathering:
- Use AskUserQuestion tool with the question and options
- Store answers for conditional task creation
- Answers inform which tasks are created and how agents behave

Example AskUserQuestion call:
```json
{
  "questions": [
    {
      "question": "What type of work is this?",
      "header": "Work Type",
      "options": [
        {"label": "New section", "description": "Create from scratch"},
        {"label": "Modify existing", "description": "Update existing section"},
        {"label": "Clone section", "description": "Copy and customize"}
      ],
      "multiSelect": false
    }
  ]
}
```

### 5. Create Tasks

For each task in template.tasks:
1. Check `condition` - skip if evaluates to false
2. Interpolate variables in subject, description
3. Create task using TaskCreate tool
4. Set up dependencies with TaskUpdate (addBlockedBy)
5. Store task ID mapping for dependency resolution

### 6. Display Task Summary

Show the user:
- Total tasks created
- Dependency graph (which tasks block which)
- Approval milestones
- Agent assignments

### 7. Begin Execution

Start with tasks that have no blockedBy:
1. Mark task as in_progress
2. Launch agent with Task tool using agent's prompt
3. On completion, mark task as completed
4. Check for newly unblocked tasks
5. At approval milestones, pause for user confirmation

## Agent Prompts

Each agent in the template has a comprehensive prompt encoding TWP standards.
When spawning an agent, use the Task tool:

```json
{
  "subagent_type": "general-purpose",
  "description": "Creating section Liquid",
  "prompt": "<agent prompt from template with variables interpolated>",
  "model": "sonnet"
}
```

## Approval Milestones

Templates define approval points:

1. **After Composition Analysis** (task #1)
   - Review block reuse decisions
   - Confirm new blocks needed
   - Approve before build phase

2. **After QA Testing** (task #11)
   - Confirm design matches Figma
   - Verify all settings work
   - Approve before documentation

## Error Handling

- If a task fails, do NOT auto-retry
- Mark task as still in_progress
- Report failure to user
- Ask how to proceed (retry, skip, modify)

## Success Criteria

The scaffold is complete when:
- All tasks reach "completed" status
- All approval milestones passed
- Theme Check passes with zero CRITICAL/HIGH errors
- Client documentation created (if requested)

## Shopify CLI Integration

The scaffold workflow integrates with Shopify CLI for theme development, testing, and deployment.

### Authentication

Before using CLI commands, ensure you're logged in:

```bash
# Login to Shopify
shopify auth login

# Verify login status
shopify auth logout  # if needed to switch accounts
```

### Theme Development Commands

#### Start Development Server

```bash
# Start dev server with live reload
shopify theme dev

# With specific store
shopify theme dev --store your-store.myshopify.com

# With specific theme
shopify theme dev --theme 123456789
```

The dev server provides:
- Live preview at `http://localhost:9292` (default)
- Hot reload on file changes
- Access to theme editor

#### Theme Check (Linting)

Run Theme Check to validate code against Shopify standards:

```bash
# Check entire theme
shopify theme check

# Check specific files
shopify theme check sections/hero-banner.liquid

# Auto-fix where possible
shopify theme check --auto-correct
```

**Integration Point**: Run after each build task to validate CRITICAL/HIGH rules.

#### Pull/Push Themes

```bash
# Pull theme from store
shopify theme pull

# Pull specific theme
shopify theme pull --theme 123456789

# Push local changes to theme
shopify theme push

# Push to specific theme
shopify theme push --theme 123456789

# Push and publish
shopify theme push --publish
```

#### List Themes

```bash
# List all themes in store
shopify theme list
```

Output shows theme ID, name, and status (live/unpublished/development).

### Workflow Integration

#### During Development (Step 5)

1. Start dev server before build tasks:
   ```bash
   shopify theme dev --store {{store_url}}
   ```

2. After each Liquid/CSS/JS task, changes auto-reload

3. Run Theme Check after completion:
   ```bash
   shopify theme check sections/{{section_name}}.liquid
   ```

#### During QA Testing (Task #11)

1. Verify dev server is running
2. Test in theme customizer via dev preview URL
3. Run full Theme Check:
   ```bash
   shopify theme check
   ```

#### After Completion

1. Push to development theme:
   ```bash
   shopify theme push --theme-editor-sync
   ```

2. Share preview with client:
   ```bash
   shopify theme share
   ```

3. When approved, publish:
   ```bash
   shopify theme publish --theme 123456789
   ```

### Additional CLI Commands

| Command                 | Use Case                            |
| ----------------------- | ----------------------------------- |
| `shopify theme info`    | Show current theme environment      |
| `shopify theme console` | Interactive Liquid REPL for testing |
| `shopify theme package` | Create ZIP for manual upload        |
| `shopify theme open`    | Open theme preview in browser       |
| `shopify theme rename`  | Rename theme in store               |
| `shopify theme delete`  | Remove theme from store             |
| `shopify theme profile` | Analyze Liquid performance          |

### Environment Setup

Add to your project's `.env` or configure in CLI:

```bash
# Set default store
shopify config set store your-store.myshopify.com

# Or use environment variable
export SHOPIFY_FLAG_STORE=your-store.myshopify.com
```

### CLI in Agent Tasks

Agents can execute CLI commands via Bash tool:

```json
{
  "qa-tester": {
    "tools": ["Bash", "mcp__playwright__*"],
    "cli_commands": [
      "shopify theme check",
      "shopify theme info"
    ]
  }
}
```

Example agent usage:
```bash
# Run theme check and capture output
shopify theme check --output json > theme-check-results.json

# Check specific section
shopify theme check sections/{{section_name}}.liquid blocks/*.liquid
```

## Reference Files

- [Template Schema](../templates/template-schema.json)
- [New Section Template](../templates/shopify-section-new.json)
- [TWP Best Practices](/Users/calwilson/business/Obsidian/Shopify%20Theme%20Best%20Practices.md)
- [Shopify CLI Theme Commands](https://shopify.dev/docs/api/shopify-cli/theme)
- [Shopify CLI General Commands](https://shopify.dev/docs/api/shopify-cli/general-commands)
