import React from 'react'

const LoadingModal = props => {
  const modalClasses = props.isActive ? 'modal is-active' : 'modal'

  return (
    <div className={ modalClasses }>
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box has-text-centered	">
          <div className="fa-3x">
            <i className="fas fa-spinner fa-spin"></i>
          </div>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  )
}

export default LoadingModal
