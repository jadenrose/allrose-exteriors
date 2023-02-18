/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  query Page($id: ID) {\n    page (where: { id: $id }) {\n      ...LayoutFields\n    }\n  }\n": types.PageDocument,
    "\n  fragment LayoutFields on Page {\n    header {\n        ...HeaderFields\n      }\n      hero {\n        ...HeroFields\n      }\n      introSection {\n        ...BasicContentFields\n      }\n      cardsSection {\n        ...CardsSectionFields\n      }\n      whatWeDo {\n        ...WhatWeDoFields\n      }\n      article {\n        ...BasicContentFields\n      }\n      brandingSection {\n        ...BrandingSectionFields\n      }\n      gallery {\n        ...GalleryFields\n      }\n      contactSection {\n        ...ContactSectionFields\n      }\n      footer {\n        ...FooterFields\n      }\n  }\n": types.LayoutFieldsFragmentDoc,
    "\n  fragment HeaderFields on Header {\n    name\n    logo {\n      ...AssetFields\n    }\n    cto {\n      ...ButtonFields\n    }\n  }\n": types.HeaderFieldsFragmentDoc,
    "\n  fragment HeroFields on Hero {\n    title\n    body {\n      html\n    }\n    subtitle\n    button {\n      ...ButtonFields\n    }\n    backgroundImage {\n      ...AssetFields\n    }\n  }\n": types.HeroFieldsFragmentDoc,
    "\n  fragment CardsSectionFields on CardsSection {\n    title\n    description\n    miniCards {\n      ...BasicContentFields\n    }\n    cards {\n      ...BasicContentFields\n    }\n  }\n": types.CardsSectionFieldsFragmentDoc,
    "\n  fragment WhatWeDoFields on WhatWeDo {\n    title\n    description\n    items {\n      ...BasicContentFields\n    }\n  }\n": types.WhatWeDoFieldsFragmentDoc,
    "\n  fragment BrandingSectionFields on BrandingSection {\n    title\n    cards (first: 500) {\n      ...BasicContentFields\n    }\n  }\n": types.BrandingSectionFieldsFragmentDoc,
    "\n  fragment GalleryFields on Gallery {\n    title\n    items {\n      ...BasicContentFields\n    }\n  }\n": types.GalleryFieldsFragmentDoc,
    "\n  fragment ContactSectionFields on ContactSection {\n    title\n    items {\n      ...BasicContentFields\n    }\n    footer\n  }\n": types.ContactSectionFieldsFragmentDoc,
    "\n  fragment FooterFields on Footer {\n    logo {\n      ...AssetFields\n    }\n    contactInfo {\n      ...BasicContentFields\n    }\n    businessHours {\n      ...BasicContentFields\n    }\n    serviceArea {\n      ...BasicContentFields\n    }\n  }\n": types.FooterFieldsFragmentDoc,
    "\n  fragment AssetFields on Asset {\n    url\n    alt\n    width\n    height\n  }\n": types.AssetFieldsFragmentDoc,
    "\n  fragment ButtonFields on Button {\n    label\n    prefix {\n      ...AssetFields\n    }\n    suffix {\n      ...AssetFields\n    }\n    link\n  }\n": types.ButtonFieldsFragmentDoc,
    "\n  fragment BasicContentFields on BasicContent {\n    id\n    image {\n      ...AssetFields\n    }\n    title\n    subtitle\n    description\n    body {\n      html\n    }\n    link\n    button {\n      ...ButtonFields\n    }\n  }\n": types.BasicContentFieldsFragmentDoc,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Page($id: ID) {\n    page (where: { id: $id }) {\n      ...LayoutFields\n    }\n  }\n"): (typeof documents)["\n  query Page($id: ID) {\n    page (where: { id: $id }) {\n      ...LayoutFields\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment LayoutFields on Page {\n    header {\n        ...HeaderFields\n      }\n      hero {\n        ...HeroFields\n      }\n      introSection {\n        ...BasicContentFields\n      }\n      cardsSection {\n        ...CardsSectionFields\n      }\n      whatWeDo {\n        ...WhatWeDoFields\n      }\n      article {\n        ...BasicContentFields\n      }\n      brandingSection {\n        ...BrandingSectionFields\n      }\n      gallery {\n        ...GalleryFields\n      }\n      contactSection {\n        ...ContactSectionFields\n      }\n      footer {\n        ...FooterFields\n      }\n  }\n"): (typeof documents)["\n  fragment LayoutFields on Page {\n    header {\n        ...HeaderFields\n      }\n      hero {\n        ...HeroFields\n      }\n      introSection {\n        ...BasicContentFields\n      }\n      cardsSection {\n        ...CardsSectionFields\n      }\n      whatWeDo {\n        ...WhatWeDoFields\n      }\n      article {\n        ...BasicContentFields\n      }\n      brandingSection {\n        ...BrandingSectionFields\n      }\n      gallery {\n        ...GalleryFields\n      }\n      contactSection {\n        ...ContactSectionFields\n      }\n      footer {\n        ...FooterFields\n      }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment HeaderFields on Header {\n    name\n    logo {\n      ...AssetFields\n    }\n    cto {\n      ...ButtonFields\n    }\n  }\n"): (typeof documents)["\n  fragment HeaderFields on Header {\n    name\n    logo {\n      ...AssetFields\n    }\n    cto {\n      ...ButtonFields\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment HeroFields on Hero {\n    title\n    body {\n      html\n    }\n    subtitle\n    button {\n      ...ButtonFields\n    }\n    backgroundImage {\n      ...AssetFields\n    }\n  }\n"): (typeof documents)["\n  fragment HeroFields on Hero {\n    title\n    body {\n      html\n    }\n    subtitle\n    button {\n      ...ButtonFields\n    }\n    backgroundImage {\n      ...AssetFields\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment CardsSectionFields on CardsSection {\n    title\n    description\n    miniCards {\n      ...BasicContentFields\n    }\n    cards {\n      ...BasicContentFields\n    }\n  }\n"): (typeof documents)["\n  fragment CardsSectionFields on CardsSection {\n    title\n    description\n    miniCards {\n      ...BasicContentFields\n    }\n    cards {\n      ...BasicContentFields\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment WhatWeDoFields on WhatWeDo {\n    title\n    description\n    items {\n      ...BasicContentFields\n    }\n  }\n"): (typeof documents)["\n  fragment WhatWeDoFields on WhatWeDo {\n    title\n    description\n    items {\n      ...BasicContentFields\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment BrandingSectionFields on BrandingSection {\n    title\n    cards (first: 500) {\n      ...BasicContentFields\n    }\n  }\n"): (typeof documents)["\n  fragment BrandingSectionFields on BrandingSection {\n    title\n    cards (first: 500) {\n      ...BasicContentFields\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment GalleryFields on Gallery {\n    title\n    items {\n      ...BasicContentFields\n    }\n  }\n"): (typeof documents)["\n  fragment GalleryFields on Gallery {\n    title\n    items {\n      ...BasicContentFields\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment ContactSectionFields on ContactSection {\n    title\n    items {\n      ...BasicContentFields\n    }\n    footer\n  }\n"): (typeof documents)["\n  fragment ContactSectionFields on ContactSection {\n    title\n    items {\n      ...BasicContentFields\n    }\n    footer\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment FooterFields on Footer {\n    logo {\n      ...AssetFields\n    }\n    contactInfo {\n      ...BasicContentFields\n    }\n    businessHours {\n      ...BasicContentFields\n    }\n    serviceArea {\n      ...BasicContentFields\n    }\n  }\n"): (typeof documents)["\n  fragment FooterFields on Footer {\n    logo {\n      ...AssetFields\n    }\n    contactInfo {\n      ...BasicContentFields\n    }\n    businessHours {\n      ...BasicContentFields\n    }\n    serviceArea {\n      ...BasicContentFields\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AssetFields on Asset {\n    url\n    alt\n    width\n    height\n  }\n"): (typeof documents)["\n  fragment AssetFields on Asset {\n    url\n    alt\n    width\n    height\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment ButtonFields on Button {\n    label\n    prefix {\n      ...AssetFields\n    }\n    suffix {\n      ...AssetFields\n    }\n    link\n  }\n"): (typeof documents)["\n  fragment ButtonFields on Button {\n    label\n    prefix {\n      ...AssetFields\n    }\n    suffix {\n      ...AssetFields\n    }\n    link\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment BasicContentFields on BasicContent {\n    id\n    image {\n      ...AssetFields\n    }\n    title\n    subtitle\n    description\n    body {\n      html\n    }\n    link\n    button {\n      ...ButtonFields\n    }\n  }\n"): (typeof documents)["\n  fragment BasicContentFields on BasicContent {\n    id\n    image {\n      ...AssetFields\n    }\n    title\n    subtitle\n    description\n    body {\n      html\n    }\n    link\n    button {\n      ...ButtonFields\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;