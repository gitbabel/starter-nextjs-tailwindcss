# Next-JS Community Site

## Overview

This repository is the source for the community gitBabel site It was built ontop of [nextjs](https://nextjs.org/)

For our instance of NextJS we opted to use [tailwind-css](https://tailwindcss.com/) instead of the default [styled-components](https://styled-components.com/) that has been our standard on the NextJS Marketing site.

## Install & Run

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

## Env.Local

Make sure you create a `.env.local` which will hold your API configurations

```
# LocalDev
#GRAPHQL_API_URL=http://localhost:4000/graphql
#API_BEARER_TOKEN=
```

<!-- ### Setup LeftHook

```bash
brew install lefthook
lefthook install
``` -->

## Deployment

```bash
git fetch --all

# make sure you get changes
git pull origin staging

# checkout into master
git checkout master

# check for things in master -- should never happen but ya,never know
git pull origin master

# merge staging into master
git merge staging

# push it up to master so we are in sync
git push origin master
```
