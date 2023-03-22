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
    nodeByUri(uri: "/") {
      ... on Page {
        id
        title
        blocksJSON
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
      }
    }
    destinos {
      edges {
        node {
          id
          title
          uri
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
export const GET_ABOUT_CONTENT = gql`
  query get_about_content {
    nodeByUri(uri: "/about") {
      ... on Page {
        id
        title
        blocksJSON
      }
    }
  }
`
