import React from "react";
import axios from "axios";

const ProductFeed = async ({ pageNo = 1 }) => {
  return await axios({
    url: "https://api.chec.io/v1/products",
    params: {
      limit: 25,
      page: pageNo,
    },
    headers: {
      "X-Authorization": "pk_185066f1f96affca255ca48cd4a64803a4b791d6d0d5b",
    },
  });
};
export default ProductFeed;
