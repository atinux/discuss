# Discuss with Atinux

Demo of using [Nuxt 3](https://v3.nuxtjs.org) with GitHub authentication and creating issues with real-time updates.

[![Screenshot 2021-11-23 at 12 03 19](https://user-images.githubusercontent.com/904724/143013142-4da8d459-6e88-446b-8f1c-98d69ca428a4.png)](https://discuss.atinux.com)

See it live on https://discuss.atinux.com

## Setup

Make sure to install the dependencies

```bash
yarn install
```

And copy the `.env.example` to `.env`

```bash
cp .env.example .env
```

### GitHub

[Create a GitHub OAuth application](https://github.com/settings/applications/new) and make sure to set:

- Homepage URL: http://localhost:3000
- Authorization callback URL: http://localhost:3000/api/github/callback

Fill your `.env` with `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` variables .

### Pipedream

This add the live events when issues are created or updated.

1. Make sure to have an [account on Pipedream](https://typedream.com/?via=atinux).
2. Duplicate [this workflow](https://pipedream.com/@Atinux/github-issues-sse-p_NMCQbeB?via=atinux)
  - Setup the Oauth with your GitHub account
  - Select your repository
3. Retrieve your [workflow's event stream URL](https://pipedream.com/docs/destinations/sse/?via=atinux#receiving-events)

Fill the `ISSUES_SSE_URL` variable in the `.env` with it.

*Url should be similar to `http://sdk.m.pipedream.net/pipelines/[YOUR WORKFLOW ID]/sse`*

## Development

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).
