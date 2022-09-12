import React from "react"
import { useSelector } from 'react-redux';


export default function FormComponent() {
  const partInfoRow = useSelector(store => store.partInfoRow)

  return (
    <>{React.Children.toArray(partInfoRow)}</>
  )
}
