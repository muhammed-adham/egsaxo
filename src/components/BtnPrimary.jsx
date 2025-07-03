import React from 'react'
import './BtnPrimary.css'
import { HiArrowSmRight } from 'react-icons/hi'

const BtnPrimary = ({ label, showIcon = true, className = '' ,onClick}) => {
  return (
    <button className={`cta__primary ${className}`} onClick={onClick}>{label}
      {showIcon && <HiArrowSmRight size={24} />}
      </button>

  )
}

export default BtnPrimary