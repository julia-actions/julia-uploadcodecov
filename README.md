# julia-uploadcodecov Action

This action uploads Julia coverage results to [Codecov](https://codecov.io/).

## Deprecation Notice

**This action has been deprecated. It is no longer recommended to use this action in workflows.**

To upload coverage reports to Codecov for Julia packages, use [`julia-actions/julia-processcoverage`](https://github.com/julia-actions/julia-processcoverage) in combination with [`codecov/codecov-action`](https://github.com/codecov/codecov-action). This new approach allows you to upload coverage results from public repos without requiring a token.

You can find updated example workflows in [`julia-actions/julia-processcoverage`](https://github.com/julia-actions/julia-processcoverage), [PkgTemplates.jl](https://github.com/invenia/PkgTemplates.jl), or [PkgButler](https://github.com/davidanthoff/julia-pkgbutler).

## Usage

```yaml
      - uses: julia-actions/julia-uploadcodecov@latest
        env:
          CODECOV_TOKEN: ${{ secrets.CODECOV_TOKEN }}
```

To upload coverage only for one version:

```yaml
      - if: startsWith(matrix.os,'ubuntu') && startsWith(matrix.version,'1.4') 
        uses: julia-actions/julia-uploadcodecov@latest
        env:
          CODECOV_TOKEN: ${{ secrets.CODECOV_TOKEN }}
```
