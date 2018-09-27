# es6 without any babel

[![Build Status](https://travis-ci.org/sebs/es-next-modules.svg?branch=master)](https://travis-ci.org/sebs/es-next-modules)

1. Use a typescript environment that can interpret es6 modules
  * Hello deno 
  * do all the dev and test work there. As it is a platform that supports 100% es6 syntax
2. Write modern javascript
  * just dont think about require
  * have no code relevant package.json 
  * although I like the automation with npm scripts and lerna 
3. Write an adapter to node-js
  * integration test
  * ship to npm 
  * Boom: Result consumable in node/browser and the console

## Setup

## Why do things this way

1. Babel config is hell. 
  * a bit like perl - 50 ways to get things done 
  * dependency hell for just interpreting es-next code 
2. Babel is fine, just not for development 
3. Managing node_modules is a bit over the top
  * not for development 
  * use node_modules only for dependencies not development deps