<<<<<<< HEAD
<p align="center">
  <a href="https://www.medusajs.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/59018053/229103275-b5e482bb-4601-46e6-8142-244f531cebdb.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
      <img alt="Medusa logo" src="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg" width=100>
    </picture>
  </a>
  <a href="https://railway.app/template/QvfPwp?referralCode=-Yg50p">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://railway.app/brand/logo-light.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://railway.app/brand/logo-dark.svg">
      <img alt="Railway logo" src="https://railway.app/brand/logo-light.svg" width=100>
    </picture>
  </a>
</p>

<h2 align="center">
  Medusajs open source ecommerce platform<br>
  <a href="https://railway.app/template/QvfPwp?referralCode=-Yg50p">one-click deploy on railway!</a>
</h2>

<h1 align="center">
  Need help?<br>
  <a href="https://funkyton.com/medusajs-free-fully-open-source-ecommerce-solution/">Step by step tutorial, with screenshots and video</a>
</h1>





<p align="center">
Combine Medusa's modules for your commerce backend with the newest Next.js 14 features for a performant storefront.</p>

<p align="center">
  <a href="https://github.com/medusajs/medusa/blob/master/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
  </a>
  <a href="https://discord.gg/xpCwq3Kfn8">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=medusajs">
    <img src="https://img.shields.io/twitter/follow/medusajs.svg?label=Follow%20@medusajs" alt="Follow @medusajs" />
  </a>
</p>

## About this boilerplate
This boilerplate is a monorepo consisting of snapshot of a medusajs backend and storefront app created with `npx create-medusa-app@latest` February 2024. Modified to be plug n' play deployable on [railway.app](https://railway.app?referralCode=-Yg50p)!


# medusajs-backend

### railway setup
Please change the value of environtment variables: `COOCKIE_SECRET` and `JWT_SECRET`.

### local setup
- Install dependencies `yarn`
- Rename `.env.template` ->  `.env`
- To connect to your online database, from local; copy the `DATABASE_URL` value that have been auto generated on railway, and add to your `.env`

### requirements
- **postgres database** (will be automatically generated if using railway template)
- **redis** (will be automatically generated if using railway template)

### optional
 - **cloudinary**: I highly recommend using a proper media service.
   1. Sign up a free account with [cloudinary](https://cloudinary.com/invites/lpov9zyyucivvxsnalc5/yhlpdo1vaw2mq1la0nks?t=default) choose "developer API calls" type of user.
   2. Add your `cloud_name`, `api_key` & `api_secret` to .env.local this will eneable Cloudinary as a file service on local dev environment
   3. Configure the same environment variables in your railway dashboard to enable cloudinary in production.
   4. If the steps above was confusin, visit [https://medusajs.com/plugins/medusa-file-cloudinary/](https://medusajs.com/plugins/medusa-file-cloudinary/) for more setup details. 

### commands
`cd medusajs-backend/`
`yarn build` will compile app.
`yarn dev` will start local admin dashboard app to manage products and orders etc.
`yarn start` will start the backend server, needed for the storefront

# medusa-storefront

### local setup
intall dependencies `yarn`
Rename `.env.local.template` ->  `.env.local`

### requirements
- running backend `npm run start` - needed to fetch products data and more, to build nextjs pages.

### commands
`cd medusajs-storefront/`
`yarn wait` will keep calling backend endpoint until a backend responds.
`yarn build` will build the nextjs app - remember to start backend app prior to running this command.
`yarn start` will serve the frontend web shop.
||||||| (empty tree)
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
<<<<<<< HEAD
>>>>>>> 863deaa (Initialize project using Create React App)
||||||| parent of f0d6d7a (Update .gitignore and README with .env setup instructions)
=======

## Environment Setup

To set up the environment variables for the project, create a `.env` file in the root directory of the project and add the following:

```
REACT_APP_BACKEND_URL=https://medusajs-backend-production-cfe4.up.railway.app
```

Make sure to replace the URL with the appropriate backend URL for your environment.

For local development, you can create a `.env.development` file with a local backend URL:

```
REACT_APP_BACKEND_URL=http://localhost:9000
```

Ensure that the `.env` file is included in the `.gitignore` file to prevent exposing sensitive information in version control.
>>>>>>> f0d6d7a (Update .gitignore and README with .env setup instructions)
