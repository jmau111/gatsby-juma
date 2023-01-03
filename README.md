# Gatsby Juma

A very minimalist blue theme built with Typescript and Gatsby.

[See live demo](https://demos.julien-maury.dev/gatsby-juma)

No option, but it's easy to start. To add content, just open the `./content` folder and add markdown files. There are practical examples for your inspiration.
Featured images for posts are mandatory for now.

You can customize fonts here `./src/utils/typography.js`.

## 🎃 Change styles

If you know what you're doing, you can tweak stylews in `./src/styles`. The theme does not use styled components but basic CSS that I hook (~ add) in `./gatsby-browser.js`.

## 🌪 Starting Juma

```
git clone https://github.com/jmau111/gatsby-juma.git and cd gatsby-juma && yarn && yarn dev
```

Then customize the favicon in `./images/`.

## Archive pages

There's a default `/posts/` page with all posts and pagination. You have to manually rename it in files for now if you don't want this URL.

## Change siteURL

Open `./gatsby-config.js` and modify it with your information:

```js
  siteMetadata: {
    title: ``,
    author: ``,
    about: ``,
    description: ``,
    siteUrl: ``,
  },
```

For more advanced users, there's the dotenv module, but it's not configured yet.

## Google Analytics

If you need google, add the plugin:

```
npm i gatsby-plugin-google-analytics
```

Then, add the entry in `./gatsby-config.js`:

```js
   {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `XXXX`,// replace with yours
      },
    },
```

Also consider alternatives such as [Gatsby Matomo](https://www.gatsbyjs.com/plugins/gatsby-plugin-matomo/) instead.

## humans.txt

We are humans, not machines. The humans.txt file is a tribute to the people who have contributed to the building of a website.
Go modify `./static/humans.txt` with your team info.

## Weird issues

If you have some issues with static images and queries, you might save a lot of time by using the custom npm command:

```
yarn cleandev
``` 

It will execute `gatsby clean` before `gatsby develop`, which deletes the cache folder and ensures there's no outdated stuff that can jam your app.

## Todo

This theme is barebone (on purpose). However, some additional feature might be interesting:

* json-ld and additional meta
* submenus

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying this theme starter.

    ```shell
    # create a new Gatsby site using this theme starter
    gatsby new my-themed-site https://github.com/jmau111/gatsby-juma
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-themed-site/
    yarn dev
    ```

3.  **Open the code and start customizing!**

    Your site is now running at `http://localhost:8000`!

    To get started, check out the guide to [getting started with using multiple themes](https://github.com/jmau111/gatsby-juma), or the [general themes docs](https://gatsbyjs.com/docs/themes).

## 🧐 What's inside?

1.  **`/content`**: A content folder holding assets that the blog and notes themes expect to exist. Check out the README for each theme to learn more about the demo content.

2.  **`/src`**: You will probably want to customize your site to personalize it.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This file tells [Prettier](https://prettier.io/) which configuration it should use to lint files.

5.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. When using themes, it's where you'll include the theme plugin, and any customization options the theme provides.

6.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

7.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

8.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

9.  **`README.md`**: A text file containing useful reference information about your project.

## About Preact

The theme uses [Preact](https://preactjs.com/), a much lighter alternative of React. Most gatsby websites and plugins will work fine, but some of them might be incompatible with it.

Be careful.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/).

Here are some places to start:

### Themes

- To learn more about Gatsby themes specifically, we recommend checking out the [theme docs](https://www.gatsbyjs.com/docs/themes/).

### General

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
