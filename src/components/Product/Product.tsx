import {FC, PropsWithChildren} from 'react'

import {urlProtocol} from '@/constants.ts';
import {ProductList} from '@/types.ts';

interface ProductComponentProps extends PropsWithChildren {
  className?: string,
  imageProtocol?: string,
  product: ProductList
}

export const ProductComponent: FC<ProductComponentProps> = ({imageProtocol, product}) => {
  // not sure what the different models entail at the moment so let's start by selecting the first one

  const firstModel = product.modelList[0];
  
  return (
    <div className="group relative">
      <div
        className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img src={`${urlProtocol(imageProtocol)}:${firstModel?.thumbUrl}`}/>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={`${product.familyRecord}`}>
              <span aria-hidden="true" className="absolute inset-0"></span>
              {firstModel.displayName}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">variants: {product.modelCount}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{firstModel.priceDisplay}</p>
      </div>
    </div>
  )
}
