# sample-app-node

[![CI](https://github.com/mruthyunjaya-lakkappanavar/sample-app-node/actions/workflows/ci.yml/badge.svg)](https://github.com/mruthyunjaya-lakkappanavar/sample-app-node/actions/workflows/ci.yml)
[![Release](https://github.com/mruthyunjaya-lakkappanavar/sample-app-node/actions/workflows/release.yml/badge.svg)](https://github.com/mruthyunjaya-lakkappanavar/sample-app-node/actions/workflows/release.yml)

> Sample Node.js Express TypeScript application using [GitHub shared reusable workflows](https://github.com/mruthyunjaya-lakkappanavar/github-shared-workflows).

## Overview

This is a minimal Express + TypeScript app that demonstrates how a consumer repository can leverage centralized CI/CD pipelines with just ~15 lines of workflow YAML.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Health check — returns `{"status": "ok", "version": "x.y.z"}` |
| GET | `/api/greet?name=X` | Greeting — returns `{"message": "Hello, X!"}` |

## Local Development

```bash
# Install dependencies
npm install

# Run in dev mode (ts-node)
npm run dev

# Build TypeScript
npm run build

# Run compiled app
npm start

# Run tests
npm test

# Run linter
npm run lint
```

## CI/CD

This repo uses **reusable workflows** from `github-shared-workflows`:

- **CI** (`ci.yml`): Lint (ESLint) → Test (Jest + ts-jest) → Security scan (Trivy)
- **Release** (`release.yml`): Semantic versioning → Changelog → GitHub Release → Slack notify

Both workflows are ~15 lines each — all logic lives in the central shared repo.

## License

Apache 2.0
