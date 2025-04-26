# eslint-interactive-monorepo-demo


## Setup

Yarn does not support importing GitHub PNPM projects (see [berry#3169](https://github.com/yarnpkg/berry/issues/3169)), and I don't feel like making a tarball release:
```md
git clone -b feat-eslint-flags-support https://github.com/nmussy/eslint-interactive.git ../eslint-interactive-flags-support
cd ../eslint-interactive-flags-support
pnpm install
pnpm build

cd ../eslint-interactive-monorepo-demo
yarn install
```

## Demo

### Without flags

```md
yarn run eslint-interactive ./packages
```

Output:

```
✔ Linting done.

💚 No error found.
```

### With the `unstable_config_lookup_from_file` flag

```md
yarn run eslint-interactive  --flag unstable_config_lookup_from_file ./packages
```

Output:

```
✔ Linting done.

- 6 files (4 files passed, 2 files failed) checked.
- 4 problems (4 errors, 0 warning) found.
╔══════════════╤═══════╤═════════╤════════════╤═════════════════╗
║ Rule         │ Error │ Warning │ is fixable │ has suggestions ║
╟──────────────┼───────┼─────────┼────────────┼─────────────────╢
║ prefer-const │ 2     │ 0       │ 2          │ 0               ║
╟──────────────┼───────┼─────────┼────────────┼─────────────────╢
║ eqeqeq       │ 1     │ 0       │ 0          │ 0               ║
╟──────────────┼───────┼─────────┼────────────┼─────────────────╢
║ no-console   │ 1     │ 0       │ 0          │ 1               ║
╚══════════════╧═══════╧═════════╧════════════╧═════════════════╝
```