# julia-uploadcodecov Action

This action uploads Julia coverage results to [Codecov](https://codecov.io/).

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
