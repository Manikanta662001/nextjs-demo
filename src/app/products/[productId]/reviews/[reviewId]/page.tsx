import React from "react";
import { notFound } from "next/navigation";

interface Params {
  params: {
    productId: string;
    reviewId: string;
  };
}

function ReviewDetails({ params }: Params) {
  if (Number(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for Product {params.productId}
    </h1>
  );
}

export default ReviewDetails;
