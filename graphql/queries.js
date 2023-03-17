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
