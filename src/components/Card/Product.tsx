import {FC, PropsWithChildren} from 'react'

import {ProductList} from '@/types.ts';

interface ProductComponentProps extends PropsWithChildren {
  className?: string,
  imageProtocol?: string,
  product: ProductList
}

export const ProductComponent: FC<ProductComponentProps> = ({imageProtocol, product}) => {
  // not sure what the different models entail at the moment so let's start by selecting the first one

  const protocol = imageProtocol || 'https';

  return (
    <div className="group relative">
      <div
        className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img src={`${protocol}:${product.modelList[0]?.thumbUrl}`}/>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0"></span>
              SOME INFO
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">SOME TEXT</p>
        </div>
        <p className="text-sm font-medium text-gray-900">SOME PRICE</p>
      </div>
    </div>
  )
}