const path = require(`path`);
const {createFilePath} = require(`gatsby-source-filesystem`);

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;

  const Post = path.resolve(`./src/views/post.tsx`);
  const List = path.resolve(`./src/views/list.tsx`);
  
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: post.node.fields.slug,
        component: Post,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
          tag: post.node.frontmatter.tags,
        },
      });
    });

    const postsPerPage = 6;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({length: numPages}).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/posts/` : `/posts/page/${i + 1}`,
        component: List,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      });
    });

    return null;
  });
};

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions;

  if (node.internal.type === `MarkdownRemark`) {
    if (typeof node.frontmatter.slug !== 'undefined') {
      createNodeField({
        node,
        name: 'slug',
        value: node.frontmatter.slug,
      });
    } else {
      const value = createFilePath({node, getNode});
      createNodeField({
        node,
        name: 'slug',
        value,
      });
    }
  }
};