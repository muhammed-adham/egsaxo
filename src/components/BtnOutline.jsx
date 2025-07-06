import React from 'react'
import './BtnOutline.css'

const BtnOutline = ({ label, disabled = false, className = '', onClick }) => {
  return (
    <button disabled={disabled} className={`cta__outline ${className}`} onClick={onClick}>{label}
    </button>
  )
}

export default BtnOutline