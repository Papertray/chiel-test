import {FC, PropsWithChildren} from 'react'

import {Spinner} from '@/components/Spinner.tsx';

interface ImageContainerProps extends PropsWithChildren {
  alt?: string,
  isLoading?: boolean,
  onLoaded: () => void
  source?: string
}

export const ImageContainerComponent: FC<ImageContainerProps> = ({alt, isLoading, onLoaded, source}) => {
  return (
    <div className="flex justify-center items-center">
      {isLoading && <Spinner className="w-96 h-96 my-48" classNameIcon="w-48 h-48"/>}
      <img alt={alt} onLoad={onLoaded} src={source} style={{display: isLoading ? "none" : "block"}}/>
    </div>)
}
