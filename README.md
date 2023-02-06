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

Fill your `.env` with `NUXT_PUBLIC_GITHUB_CLIENT_ID` and `NUXT_GITHUB_CLIENT_SECRET` variables .

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
