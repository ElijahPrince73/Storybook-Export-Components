import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {
  render() {
    const { onClick, text, primary, danger, secondary, floatRight } = this.props;
    return (
      <div>
        {primary ? (
          <button
            className={`btn btn-outline-primary btn-ghost ${floatRight ? 'float-tight' : ''}`}
            type="button"
            onClick={onClick}
          >
            {text}
          </button>
        ) : null}

        {secondary ? (
          <button
            className={`btn-no-style btn-anchor mx-3 ${floatRight ? 'float-tight' : ''}`}
            type="button"
            onClick={onClick}
          >
            {text}
          </button>
        ) : null}

        {danger ? (
          <button
            className={`btn btn-outline-danger btn-ghost ${floatRight ? 'float-tight' : ''}`}
            type="button"
            onClick={onClick}
          >
            {text}
          </button>
        ) : null}
      </div>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  floatRight: PropTypes.bool,
  primary: PropTypes.bool.isRequired,
  danger: PropTypes.bool.isRequired,
  secondary: PropTypes.bool.isRequired
};

export default Button;
