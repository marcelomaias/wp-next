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
      }
    }
  }
`
