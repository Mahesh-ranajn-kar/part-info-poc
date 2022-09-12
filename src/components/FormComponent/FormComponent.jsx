import React from "react"


export default function FormComponent({formBody}) {
  return (
    <>{React.Children.toArray(formBody)}</>
  )
}
