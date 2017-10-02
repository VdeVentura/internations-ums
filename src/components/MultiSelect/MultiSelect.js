import React, { Component } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";

const MultiSelect = props => {
  return (
    <div className={`form-group ${props.full ? "full" : ""}`}>
      <Select
        {...props}
        value={props.input.value}
        onChange={value => props.input.onChange(value)}
        onBlur={() => props.input.onBlur(props.input.value)}
        options={props.options}
      />
    </div>
  );
};

export default MultiSelect;
