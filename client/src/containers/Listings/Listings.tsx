import React from "react";
import { server } from "../../lib/api/server";
import {
  ListingsData,
  DeleteListingData,
  DeleteListingVariables
} from "./types";

interface Props {
  title: string;
}

const LISTINGS = `
query Listings {
    listings {
        id
        title
        image
        address
        price
        numOfGuests
        numOfBeds
        numOfBaths
        rating
    }
}
`;

const DELETE_LISTING = `
mutation delete_listing($id:ID!){
    deleteListing(id:$id){
        id
    }
}
`;

export const Listings = ({ title }: Props) => {
  const fetchListings = async () => {
    const listings = await server.fetch<ListingsData>({
      query: LISTINGS
    });

    console.log("Listings", listings);
  };

  const deleteListing = async () => {
    const listing = await server.fetch<
      DeleteListingData,
      DeleteListingVariables
    >({
      query: DELETE_LISTING,
      variables: {
        id: "5e7f51b380747c29e72880c8"
      }
    });

    console.log("Delete_Listing", listing);
  };

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={fetchListings}>Query Listings</button>
      <button onClick={deleteListing}>Delete a Listing</button>
    </div>
  );
};
