# Libslm (Life is boring so let's make) Guard

![Version](https://img.shields.io/github/package-json/v/Hulle107/libslm-guard?style=for-the-badge)
![License](https://img.shields.io/github/license/Hulle107/libslm-guard?style=for-the-badge)

## Indexing
- [Libslm (Life is boring so let's make) Guard](#libslm-life-is-boring-so-lets-make-guard)
  - [Indexing](#indexing)
  - [Introduction](#introduction)
  - [Guard](#guard)
    - [Features](#features)
    - [Available Guard Methods](#available-guard-methods)
    - [Usage Example](#usage-example)
    - [Roadmap](#roadmap)
    - [Notes](#notes)

## Introduction
Welcome to this library—a chaotic collection of experiments, half-baked ideas, and random bursts of inspiration. This is not a polished, production-ready framework but rather a playground for concepts that may or may not evolve into something useful.

Because of its experimental nature, stability is not guaranteed. Features may change, disappear, or break without warning. If you're looking for a dependable tool, you might want to look elsewhere. But if you're here for curiosity, exploration, or sheer madness, welcome aboard!

Use at your own risk, and enjoy the ride.

## Guard
This library provides a simple yet flexible implementation of guard clauses to enforce preconditions and fail fast when encountering invalid input. Instead of cluttering your functions with nested conditionals, these guard clauses help keep code clean, readable, and robust.

### Features
- **Concise and expressive** – Reduce boilerplate validation code.
- **Extensible** – Easily add custom guards for specific use cases.
- **Fail-fast approach** – Stop execution immediately when invalid data is detected.

### Available Guard Methods
- `guard.against.null(variables, message?, options?)`
- `guard.against.undefined(variables, message?, options?)`
- `guard.against.empty(variables, message?, options?)`
- `guard.against.outOfRange(variables, minimum, maximum, message?, options?)`
- `guard.against.less(variables, minimum, message?, options?)`
- `guard.against.bigger(variables, maximum, message?, options?)`
- `guard.is.number(variables, message?, options?)`
- `guard.is.string(variables, message?, options?)`
- `guard.is.boolean(variables, message?, options?)`
- `guard.is.object(variables, message?, options?)`
- `guard.is.bigint(variables, message?, options?)`
- `guard.is.symbol(variables, message?, options?)`
- `guard.is.undefined(variables, message?, options?)`
- `guard.is.null(variables, message?, options?)`

### Usage Example
Here’s how the built-in guard clauses can be used:
```typescript
import {guard} from 'libslm-guard';

function foo(value: unknown) {
  guard.against.null({value})       // throws if value is null
  guard.against.undefined({value})  // throws if value is undefined
  guard.is.string({value})          // throws if value is not a string

  console.info(typeof value)        // string
}
```

### Roadmap
- ✅ Basic implementation of concept
- 🔲 More methods (future consideration)

### Notes
Since this library is experimental, these implementations may change or expand over time. Use them as needed, tweak them as desired, and embrace the chaos.