/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Listings
// ====================================================

export interface Listing {
  __typename: "Listing";
  id: string;
  title: string;
  image: string;
  address: string;
  price: string;
  numOfGuests: number;
  numOfBeds: number;
  numOfBaths: number;
  rating: number;
}

export interface Listings {
  listings: Listing[];
}
