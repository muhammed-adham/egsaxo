import React from 'react'
import './BtnOutline.css'

const BtnOutline = ({label}) => {
  return (
    <button className="cta__outline">{label}</button>
  )
}

export default BtnOutline