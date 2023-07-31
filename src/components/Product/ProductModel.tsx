import {FC, PropsWithChildren} from 'react'

import {ModelList} from '@/types.ts';

interface ProductModelComponentProps extends PropsWithChildren {
  className?: string,
  imageProtocol?: string,
  productModel: ModelList,
  updateProductModel: (model: string) => void
}

export const ProductModelComponent: FC<ProductModelComponentProps> = ({imageProtocol, productModel, updateProductModel}) => {
  const protocol = imageProtocol || 'https';

  return (
    <div className="group relative" onClick={() => updateProductModel(productModel.modelCode)}>
      <div
        className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
        <img src={`${protocol}:${productModel?.thumbUrl}`}/>
      </div>
      <div className="mt-4 flex justify-start">
        <p className="text-sm font-medium text-gray-900">{productModel.displayName}</p>
      </div>
    </div>
  )
}
