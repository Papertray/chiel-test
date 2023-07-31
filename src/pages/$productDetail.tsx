import {useQuery} from '@tanstack/react-query';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {ImageContainerComponent} from '@/components/ImageContainer.tsx';
import {ProductModelComponent} from '@/components/Product/ProductModel.tsx';
import {SAMSUNG_API, urlProtocol} from '@/constants.ts';
import {fetchSamsungData} from '@/requests/samsungRequests.ts';
import {ModelList, ProductList, SamsungRequest} from '@/types.ts';

// some explanation. Some of the useEffect and useState code is a result of the API call not being segmentented and lazy loaded, really this should be done by react queries tied to a specific key to also keep track of the specific call and refresh when it's stale
// Considering the call is not split up the most straightforward solution to keep track of the data is to select it from the complete call and keep track in (local) state

export default function ProductDetail() {
  // comes from param
  const {productdetail} = useParams();

  const {data, isSuccess} = useQuery<SamsungRequest>([SAMSUNG_API.name], fetchSamsungData);
  const findCurrentProduct = (familyRecord: string | undefined): ProductList | undefined => {
    return data?.response?.resultData?.productList.find(product => product.familyRecord === familyRecord)
  }

  const findProductModel = (modelCode: string | undefined): ModelList | undefined => {
    return currentProductGroup?.modelList.find(model => model.modelCode === modelCode)
  }

  const [currentProductGroup, setCurrentProductGroup] = useState<ProductList | undefined>(undefined);
  const [selectedModel, setSelectedModel] = useState<ModelList | undefined>(undefined);
  const [loadingLargeImage, setLoadingLargeImage] = useState(true);
  const updateProductModelByModelCode = (model: string) => {
    if (model !== selectedModel?.modelCode) {
      setLoadingLargeImage(true);
    }
    setSelectedModel(findProductModel(model));
  }

  useEffect(() => {
    if (isSuccess) {
      const productGroup = findCurrentProduct(productdetail)
      setCurrentProductGroup(productGroup);
      if (selectedModel === undefined) {
        setSelectedModel(productGroup?.modelList[0] || undefined)
      }
    }
  }, [data])

  const onLoadedLargeImage = () => {
    setLoadingLargeImage(false)
  }

  const calculateRating = (ratingString: string) => {
    const ratingNumber = Number.parseFloat(ratingString) * 10
    return (Math.round(ratingNumber)) / 10
  }

  return (
    <div className="flex flex-col content-center bg-white h-full w-full overflow-y-scroll">
      {currentProductGroup &&
        <>
          <div className="h-fit bg-black">
            <div className="md:p-12 py-12 px-2 text-6xl">
              <p
                className="flex w-full text-4xl px-6 py-24 text-white self-center justify-center">Check out everything
                there is to know about the {currentProductGroup.fmyMarketingName}</p>
            </div>
          </div>
          <div className="max-w-6xl w-full self-center px-4 text-black my-24 flex text-2xl flex-col">
            <p>{currentProductGroup.fmyMarketingName}</p>
            <ImageContainerComponent alt={selectedModel?.displayName} isLoading={loadingLargeImage}
                                     onLoaded={onLoadedLargeImage}
                                     source={`${urlProtocol()}:${selectedModel?.galleryImageLarge[0]}`}/>
            {selectedModel?.reviewCount && selectedModel.ratings &&
              <a className="underline text-black text-lg" href={`https://samsung.com/${selectedModel?.reviewUrl}`}
                 target="_blank">Reviews
                ({selectedModel?.reviewCount}): {calculateRating(selectedModel?.ratings)}</a>
            }
            {selectedModel?.usp.map(uspPart => <p key={uspPart} className="text-lg md:text-xl">{uspPart}</p>)}
            <p className="text-lg md:text-xl">Product code: {selectedModel?.modelCode}</p>
          </div>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Variants</h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {currentProductGroup.modelList.map(model => {
                return (<ProductModelComponent key={model.modelCode} productModel={model}
                                               updateProductModel={updateProductModelByModelCode}/>)
              })}
            </div>
          </div>
        </>
      }
    </div>
  )
}
