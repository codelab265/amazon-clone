import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout'
import data from '../../util/data';

function ProductScreen() {
    const {query} = useRouter();
    const {slug} = query
    const product = data.products.find((item)=>item.slug===slug)
    if(!product){
        return <div>No product found</div>
    }
  return (
    <Layout title={product.name}></Layout>
  )
}

export default ProductScreen