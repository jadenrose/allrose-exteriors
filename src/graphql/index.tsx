import { gql } from '@/__generated__'

export const PAGE_QUERY = gql(`
  query Page($id: ID) {
    page (where: { id: $id }) {
      ...LayoutFields
    }
  }
`)

export const LAYOUT_FRAGMENT = gql(`
  fragment LayoutFields on Page {
    header {
        ...HeaderFields
      }
      hero {
        ...HeroFields
      }
      introSection {
        ...BasicContentFields
      }
      cardsSection {
        ...CardsSectionFields
      }
      whatWeDo {
        ...WhatWeDoFields
      }
      article {
        ...BasicContentFields
      }
      brandingSection {
        ...BrandingSectionFields
      }
      gallery {
        ...GalleryFields
      }
      contactSection {
        ...ContactSectionFields
      }
      footer {
        ...FooterFields
      }
  }
`)

export const HEADER_FRAGMENT = gql(`
  fragment HeaderFields on Header {
    name
    logo {
      ...AssetFields
    }
    cto {
      ...ButtonFields
    }
  }
`)

export const HERO_FRAGMENT = gql(`
  fragment HeroFields on Hero {
    title
    body {
      html
    }
    subtitle
    button {
      ...ButtonFields
    }
    backgroundImage {
      ...AssetFields
    }
  }
`)

export const CARDS_SECTION_FRAGMENT = gql(`
  fragment CardsSectionFields on CardsSection {
    title
    description
    miniCards {
      ...BasicContentFields
    }
    cards {
      ...BasicContentFields
    }
  }
`)

export const WHAT_WE_DO_FRAGMENT = gql(`
  fragment WhatWeDoFields on WhatWeDo {
    title
    description
    items {
      ...BasicContentFields
    }
  }
`)

export const BRANDING_SECTION_FRAGMENT = gql(`
  fragment BrandingSectionFields on BrandingSection {
    title
    cards (first: 500) {
      ...BasicContentFields
    }
  }
`)

export const GALLERY_FRAGMENT = gql(`
  fragment GalleryFields on Gallery {
    title
    items {
      ...BasicContentFields
    }
  }
`)

export const CONTACT_SECTION_FRAGMENT = gql(`
  fragment ContactSectionFields on ContactSection {
    title
    items {
      ...BasicContentFields
    }
    footer
  }
`)

export const FOOTER_FRAGMENT = gql(`
  fragment FooterFields on Footer {
    logo {
      ...AssetFields
    }
    contactInfo {
      ...BasicContentFields
    }
    businessHours {
      ...BasicContentFields
    }
    serviceArea {
      ...BasicContentFields
    }
  }
`)

export const ASSET_FRAGMENT = gql(`
  fragment AssetFields on Asset {
    url
    alt
    width
    height
  }
`)

export const BUTTON_FRAGMENT = gql(`
  fragment ButtonFields on Button {
    label
    prefix {
      ...AssetFields
    }
    suffix {
      ...AssetFields
    }
    link
  }
`)

export const BASIC_CONTENT_FIELDS = gql(`
  fragment BasicContentFields on BasicContent {
    id
    image {
      ...AssetFields
    }
    title
    subtitle
    description
    body {
      html
    }
    link
    button {
      ...ButtonFields
    }
  }
`)
