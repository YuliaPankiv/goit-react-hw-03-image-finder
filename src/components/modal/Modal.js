import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    e.target === e.currentTarget && this.props.onClose();
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">{this.props.children} </div>
      </div>,
      modalRoot
    );
  }
}
Modal.propType = {
  onClose: PropTypes.func.isRequired,
};
