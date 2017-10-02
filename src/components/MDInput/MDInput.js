import React, { Component } from "react";

const MDInput = field => {
  const baseClass = `form-group label-floating ${field.full ? "full" : ""}`;
  const isEmptyClass = field.input.value === "" ? "is-empty" : "";
  const isFocusedClass = field.meta.active ? "is-focused" : "";
  return (
    <div className={`${baseClass} ${isEmptyClass} ${isFocusedClass} `}>
      <label className="control-label">{field.label}</label>
      <input {...field.input} className="form-control" />
      <span className="error">
        {field.meta.error && field.meta.touched && field.meta.error}
      </span>
    </div>
  );
};

export default MDInput;
