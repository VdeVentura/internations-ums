import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import _ from "lodash";
import Select from "react-select";
import "react-select/dist/react-select.css";
import "./UserForm.css";

import Button from "../../components/Button/Button";

const MultiSelect = props => {
  return (
    <div className={`form-group full`}>
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

const MDInput = field => {
  const baseClass = `form-group label-floating ${field.full ? "full" : ""}`;
  const isEmptyClass = field.input.value === "" ? "is-empty" : "";
  const isFocusedClass = field.meta.active ? "is-focused" : "";
  return (
    <div className={`${baseClass} ${isEmptyClass} ${isFocusedClass} `}>
      <label className="control-label">{field.label}</label>
      <input {...field.input} className="form-control" />
    </div>
  );
};

const normalizeDate = value => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, "");
  if (onlyNums.length <= 2) {
    return onlyNums;
  }
  if (onlyNums.length <= 4) {
    return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2)}`;
  }
  return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2, 4)}/${onlyNums.slice(
    4,
    6
  )}`;
};

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = { focusInput: "" };
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.focusInput = this.focusInput.bind(this);
  }

  focusInput(input) {
    this.setState({ focusInput: input });
  }

  render() {
    const options = _.map(this.props.groups, (group, index) => {
      return { label: _.capitalize(group.name), value: index };
    });

    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="fields-container">
          <Field name="firstName" component={MDInput} label="First Name" />
          <Field name="lastName" component={MDInput} label="Last Name" />
          <Field name="username" component={MDInput} label="Username" />
          <Field
            name="birthdate"
            component={MDInput}
            label="Birthdate (YY/MM/DD)"
            normalize={normalizeDate}
          />
          <Field
            full
            name="description"
            component={MDInput}
            label="Description"
          />
          <Field
            placeholder="Groups"
            name="groups"
            options={options}
            component={MultiSelect}
            multi
          />
        </div>
        <Button type="submit" className="action" icon="fa-paper-plane">
          Submit
        </Button>
      </form>
    );
  }
}
function mapStateToProps(state) {
  return {
    groups: state.groups.array
  };
}

UserForm = connect(mapStateToProps)(UserForm);
export default reduxForm({ form: "user" }, mapStateToProps)(UserForm);
