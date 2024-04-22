'use client'
import React, { Suspense } from 'react';

import productData from '@/util/product'
import {  Layers } from 'lucide-react';
import Product from '@/interfaces/product.interface';
import Loading from './loading';

import AddProduct from '@/components/product/AddProduct';
import UpdateProduct from '@/components/product/UpdateProduct';
import ProductDetail from '@/components/product/ProductDetail';
import usePermission from '@/hooks/hasPermission';

const ProductPage = () => {


    const {products} = productData;


  return (
    <div className='h-screen w-full bg-slate-100 rounded-l-3xl mt-4'>

<div className='p-4'>
  <div className='flex justify-between items-center'>
  <h1 className='text-2xl text-gray-600 font-bold mb-4'>Product List</h1>
   {usePermission('add_product') && <AddProduct />}

  </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
    <Suspense fallback={<Loading />}>
    {products.map((product: Product) => (
  <div className="h-full border-2 relative border-gray-200 border-opacity-60 rounded-xl bg-white overflow-hidden" key={product.product_id}>
  <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={product.images[0]} alt="blog" />
  <div className='absolute top-5 right-5'>
  {usePermission('update_product') && <UpdateProduct />}
  </div>

  <div className="p-6">
    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{product.category}</h2>
    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{product.name}</h1>
    <p className="leading-relaxed mb-3">{product.description}</p>
    <div className="flex items-center flex-wrap">

   <ProductDetail id={product.product_id}/>

      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
        <Layers className='w-4 mr-1'/>{product.stock_quantity}
      </span>
      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
        </svg>6
      </span>
    </div>
  </div>
</div>
          ))}

    </Suspense>
     
 
          
          </div>
       
</div>
    
  

    </div>
  );
};

export default ProductPage;
