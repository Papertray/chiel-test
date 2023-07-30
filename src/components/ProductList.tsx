import {FC} from 'react'

import {ProductComponent} from '@/components/Card/Product.tsx';
import { ProductList } from '@/types.ts';

interface ProductListProps {
  products?: ProductList[],
}

export const ProductsListComponent: FC<ProductListProps> = ({products}) => {
  // not 100% sure what the unique id of a product is so even though it's not correct we'll use the index as a key for the ProductComponent

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products ? products.map((product: ProductList, i) => {
            return <ProductComponent key={i} product={product} />;
          }) : 'No products available'}
        </div>
      </div>
    </div>
  )
}







