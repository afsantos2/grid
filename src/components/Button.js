import React from "react";
import PropTypes from "prop-types";

export default function Button({ label, classe }) {
  return (
    <button className={classe}>{label}</button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
}

Button.defaultProps = {
  label: 'Valor Padrão'
}