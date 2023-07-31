import {FC} from 'react'
import {ImSpinner8} from "react-icons/im";

interface SpinnerProps {
  className?: string,
  classNameIcon?: string
}

export const Spinner: FC<SpinnerProps> = ({className, classNameIcon}) => {
  return (
    <div
      className={`flex justify-center items-center self-center ${className}`}
    >
      <ImSpinner8 className={`animate-spin ${classNameIcon}`}/>
    </div>
  )
}
