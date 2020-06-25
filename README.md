Minimal example demonstrating this issue: https://github.com/rails/webpacker/issues/2641

## Set up local environment
```
  cd app
  yarn
  rails server
```

## Set up heroku

```
  heroku create
  heroku addons:add heroku-postgresql
  heroku buildpacks:set https://github.com/jan-tee/heroku-buildpack-monorepo
  heroku buildpacks:add heroku/ruby
  heroku buildpacks:add heroku/nodejs
  heroku config:set APP_BASE=app
  heroku config:set DEPENDENCIES=dep
  git push heroku
```