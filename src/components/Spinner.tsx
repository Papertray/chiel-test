import {FC,} from 'react'
import {ImSpinner8} from "react-icons/im";

interface SpinnerProps {
  className?: string,
}

export const Spinner: FC<SpinnerProps> = ({className}) => {
  return (
    <div
      className={`flex justify-center self-center ${className}`}
    >
      <ImSpinner8 className="animate-spin"/>
    </div>
  )
}
