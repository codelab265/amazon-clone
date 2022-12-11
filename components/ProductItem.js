/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function ProductItem({ product }) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <img
          className="rounded shadow"
          src={product.image}
          alt={product.name}
        ></img>
      </Link>
      <div className="flex flex-col justify-center items-center p-5">
        <Link href={`/product/${product.slug}`} className="mb-1">
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p className="mb-1">{product.brand}</p>
        <p className="mb-1" >MWK {parseFloat(product.price).toFixed(2)}</p>
        <button className="primary-button" type="button">
            <i className="fa fa-plus-circle mr-1"></i>
          Add to cart
        </button>
      </div>
    </div>
  );
}
