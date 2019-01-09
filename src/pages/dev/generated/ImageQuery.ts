/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ImageQuery
// ====================================================

export interface ImageQuery_image_childImageSharp_fluid {
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
  base64: string | null;
  tracedSVG: string | null;
  srcWebp: string | null;
  srcSetWebp: string | null;
}

export interface ImageQuery_image_childImageSharp {
  fluid: ImageQuery_image_childImageSharp_fluid | null;
}

export interface ImageQuery_image {
  /**
   * The child of this node of type imageSharp
   */
  childImageSharp: ImageQuery_image_childImageSharp | null;
}

export interface ImageQuery {
  image: ImageQuery_image | null;
}