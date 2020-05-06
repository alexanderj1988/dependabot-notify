# dependabot-notify
Github action for notifieing Dependabot of a private dependency release

## Inputs

### `github-access-token`

**Required** GitHub access token with `repo` permissions.

### `dependency-name`

**Required** Your dependency name for example: `org.kohsuke:github-api`

### `dependency-version`

**Required** Your dependency version for example: `1.5.0`

### `dependency-package-manager`
**Required** Your dependency manager for example: `npm_and_yarn`. 

Possible values: 
- `bundler`
- `composer`
- `docker`
- `maven`
- `npm_and_yarn`
- `elm`
- `submodules`
- `hex`
- `cargo`
- `gradle`
- `nuget`
- `dep`
- `go_modules`
- `pip`
- `terraform`
- `github_actions`

## Example usage
```
- uses:  alexanderj1988/dependabot-notify@1.0.0
  with:
    github-access-token: ${{secrets.GITHUB_TOKEN}}
    dependency-name: "@scope/your-package-name"
    dependency-version: "1.0.0"
```
  