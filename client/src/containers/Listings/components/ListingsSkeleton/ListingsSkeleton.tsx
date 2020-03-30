import React from "react";

import { Alert, Divider, Skeleton, Avatar } from "antd";
import "./styles/ListingsSkeleton.css";

interface Props {
  title?: string;
  error?: boolean;
}

export const ListingsSkeleton = ({ title, error = false }: Props) => {
  const errorMessage = error ? (
    <Alert
      type="error"
      message="uh Oh ! Something went wrong"
      className="listings-skeleton alert__alert"
    />
  ) : null;
  return (
    <div className="listings-skeleton">
      {errorMessage}
      <h2>{title}</h2>
      <Skeleton active paragraph={{ rows: 1 }} />
      <Divider />
      <Skeleton active paragraph={{ rows: 1 }} />
      <Divider />
      <Skeleton active paragraph={{ rows: 1 }} />
    </div>
  );
};
