### This is a POC for builting MFS with lit and import-maps.

## How to run

run
```bash
pnpm run serve
```
on each folder.

Note: currently there is no way to run the app in an actual dev mode since the imported scripts are in the lib mode,
which I have yet to find a way to serve outside of the build folder.
So for now I am doing a built with watch, which requires a refresh.

## How to build

```bash
pnpm run build 
```
