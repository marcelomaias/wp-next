import { gql } from 'graphql-request'

export const GET_MAIN_NAV = gql`
  query get_main_nav {
    menuItems(where: { location: HEADLESS_PRIMARY_MENU }) {
      edges {
        node {
          label
          uri
        }
      }
    }
  }
`

export const GET_HOME_CONTENT = gql`
  query get_home_content {
    sliders {
      nodes {
        id
        homeSlider {
          sliderHeading
          sliderText
          sliderImage {
            sourceUrl
          }
        }
      }
    }
    nodeByUri(uri: "/") {
      ... on Page {
        destaque1 {
          titulo1
          titulo2
          texto1
          texto2
          icone1 {
            mediaItemUrl
          }
          icone2 {
            mediaItemUrl
          }
        }
        destaque2 {
          title
          texto
          thumbmail {
            mediaItemUrl
          }
          video
          authorName
          authorTitle
          authorPicture {
            mediaItemUrl
          }
        }
        destaque4 {
          dest4Tex1
          dest4Tex2
          dest4Tit1
          dest4Tit2
        }
      }
    }
    destinos {
      edges {
        node {
          id
          title
          excerpt
          uri
          featuredImage {
            node {
              sourceUrl
            }
          }
          destinoFieldGroup {
            image {
              altText
              mediaItemUrl
            }
          }
          places {
            edges {
              node {
                id
                name
                uri
              }
            }
          }
        }
      }
    }
  }
`
export const GET_PAGES_CONTENT = gql`
  query get_pages_content($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on Page {
        id
        title
        blocksJSON
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
      ... on Destino {
        id
        title
        blocksJSON
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
    menuItems(where: { location: HEADLESS_PRIMARY_MENU }) {
      edges {
        node {
          label
          uri
        }
      }
    }
  }
`
