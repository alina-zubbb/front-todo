import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    return (
      <input
        className={this.props.className}
        type={this.props.type}
        value={this.props.value}
        autoFocus={this.props.autoFocus}
        placeholder={this.props.placeholder}
        onChange={this.props.changeHandler}
        required={this.props.isRequired}
        checked={this.props.checked}
        id={this.props.id}
      />
    );
  }
}

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  autoFocus: PropTypes.bool,
  changeHandler: PropTypes.func
};

export default Input;
