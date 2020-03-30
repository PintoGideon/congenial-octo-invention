import React from "react";

import { useQuery, useMutation } from "react-apollo";
import { Listing } from "./types";
import { ListingsData, DeleteListingVariables } from "./types";
import { gql } from "apollo-boost";

interface Props {
  title: string;
}

const LISTINGS = gql`
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

const DELETE_LISTING = gql`
  mutation delete_listing($id: ID!) {
    deleteListing(id: $id) {
      id
    }
  }
`;

export const Listings = ({ title }: Props) => {
  const { data, loading, refetch, error } = useQuery<ListingsData>(LISTINGS);

  const [
    deleteListing,
    { loading: deleteListingLoading, error: deleteListingError }
  ] = useMutation<DeleteListingVariables, DeleteListingVariables>(
    DELETE_LISTING
  );

  const handleDelete = async (id: string) => {
    await deleteListing({ variables: { id } });
    refetch();
  };

  const listings = data ? data.listings : null;

  const listingsList = listings ? (
    <ul>
      {listings.map((listing: Listing) => {
        return (
          <li key={listing.id}>
            {listing.title}
            <button onClick={() => handleDelete(listing.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  ) : null;

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Uh oh ! Something went wrong. Please try again later</h1>;
  }

  const deleteListingLoadingMessage = deleteListingLoading ? (
    <h4>Deletion in progress.....</h4>
  ) : null;

  const deleteListingErrorMessage = deleteListingError ? (
    <h4>uh Oh ! Something went wrong</h4>
  ) : null;

  return (
    <div>
      <h2>{title}</h2>
      {listingsList}
      {deleteListingLoadingMessage}
      {deleteListingErrorMessage}
    </div>
  );
};
