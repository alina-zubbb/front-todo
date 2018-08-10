import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render(){
    return (
      <button onClick={this.props.clickHandler} className={this.props.className}>
        {this.props.text}
      </button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  clickHandler: PropTypes.func
};

export default Button;
