import {useQuery} from '@tanstack/react-query';

import {ProductsListComponent} from '@/components/ProductList.tsx';
import {Spinner} from '@/components/Spinner.tsx';
import {SAMSUNG_API} from '@/constants.ts';
import {fetchSamsungData} from '@/requests/samsungRequests.ts';
import {SamsungRequest} from '@/types.ts';

export default function Home() {
  const {data, isLoading, isSuccess} = useQuery<SamsungRequest, any>([SAMSUNG_API.name], fetchSamsungData);

  // add some component library for some quick nice parts

  return (
    <div className="flex flex-col content-center bg-white h-full w-full overflow-y-scroll">
        <div className="h-fit bg-black">
          <div className="md:p-12 py-12 px-2 text-6xl">
            <p
              className="flex w-full text-4xl px-6 py-24 text-white self-center justify-center">Buy the coolest tech and
              explore</p>
          </div>
        </div>
        <div
          className="max-w-6xl self-center text-black my-24 flex text-2xl flex-col">
          <div>
            {isSuccess &&
              <div>
                <ProductsListComponent products={data.response?.resultData?.productList}/>
              </div>
            }
            {isLoading && data &&
              <div className="py-12 flex justify-center content-center">
                <span className="pr-2 text-lg">Loading products</span> <Spinner/>
              </div>
            }
          </div>
        </div>
    </div>
  )
}
