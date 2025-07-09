import React from 'react'
import BtnPrimary from './BtnPrimary'

const ModalOverlay = ({ onClose, title, msg, cta }) => {
  return (
    <div className="modal-overlay" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div className="modal-content" style={{
        background: '#fff',
        borderRadius: '12px',
        padding: '2rem',
        maxWidth: '90vw',
        width: '400px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
        textAlign: 'center',
        position: 'relative'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#888'
          }}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 style={{ marginBottom: '1rem' }}>{title}</h2>
        <p style={{ marginBottom: '2rem' }}>{msg}</p>
        <BtnPrimary
          className='request-btn-wide'
          showIcon={false}
          label={cta}
          onClick={onClose}
        />
      </div>
    </div>
  )
}

export default ModalOverlay