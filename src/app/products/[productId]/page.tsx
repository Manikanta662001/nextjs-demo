import { Metadata } from "next";
import React from "react";

interface Params {
  params: {
    productId: string;
  };
}
export const generateMetadata = async ({
  params,
}: Params): Promise<Metadata> => {
  const title = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100);
  });
  return { title: `Product ${title}` };
};

function ProductDetails({ params }: Params) {
  console.log(typeof params.productId, params);
  return <h1>Details of Product {params.productId}</h1>;
}

export default ProductDetails;
