# SSW.Dory Website

## See the Important Documents

- [Instructions - Compile (F5 Experience)](https://github.com/SSWConsulting/SSW.Dory/wiki/Instructions-Compile-(F5-Experience))
- [Instructions - Deployment](https://github.com/SSWConsulting/SSW.Dory/wiki/Instructions-Deployment)

## Architecture Overview
![SSW Dory architecture diagram](../docs/images/dory-website-architecture-diagram.webp)

## Get Started

### Navigate to website code:

```bash
cd content
```

### Install the project's dependencies:

```bash
bun install
```

### Build the project:
```bash
bun run build
```
Note - if an error comes up involving the [installation of the package sharp](https://github.com/lovell/sharp/issues/3511) while the next-image-export-optimizer is running, you'll need to postinstall sharp:
```bash
cd node_modules/sharp
bun install
```

### Run the project locally:

```bash
bun run dev
```

## Local URLs
[http://localhost:8080/](http://localhost:8080/): browse the website
