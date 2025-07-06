import React from 'react'
import './BtnPrimary.css'
import { HiArrowSmRight } from 'react-icons/hi'
import { GiSaxophone } from 'react-icons/gi'

const BtnPrimary = ({ label, showIcon = true, disabled = false, className = '', onClick }) => {
  return (
    <button disabled={disabled} className={`cta__primary ${className}`} onClick={onClick}>
      {label}
    {showIcon && <GiSaxophone  size={24} />}
    </button>

  )
}

export default BtnPrimary