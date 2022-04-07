import React from "react";
import PropTypes from "prop-types";

function List({ title }) {
  return <li>{title}</li>;
}
List.prototype = {
  title: PropTypes.string.isRequired,
};
export default  List