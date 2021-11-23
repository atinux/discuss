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

Make sure to have an [account on Pipedream](https://pipedream.com).

1. [Create a source](https://pipedream.com/sources/new)
2. Select GitHub
3. Select New or Updated Issue (Instant)
4. Select your GitHub account and repo
5. Click on Create Source
6. Checkout the API section with SSE, you should see an url with `https://api.pipedream.com/sources/dc_foobar/sse`

Fill the `ISSUES_SSE_URL` variable in the `.env` with it.

https://user-images.githubusercontent.com/904724/143014568-81f605f1-f73a-454d-875e-df0386c80d71.mp4

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
