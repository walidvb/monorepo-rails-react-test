Minimal example demonstrating this issue: https://github.com/rails/webpacker/issues/2641

## Set up local environment
```
cd app; 
yarn;
rails server;
```

## Set up heroku

```
  heroku create;
  heroku buildpacks:set https://github.com/jan-tee/heroku-buildpack-monorepo
  heroku buildpacks:add heroku/ruby
  heroku buildpacks:add heroku/nodejs
  git push heroku
```