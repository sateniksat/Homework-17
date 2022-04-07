import React from "react";
import PropTypes from "prop-types";

export default function List({ id, title }) {
  return <li key={id}>{title}</li>;
}
List.prototype = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
