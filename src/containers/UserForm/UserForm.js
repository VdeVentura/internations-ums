import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import _ from "lodash";
import moment from "moment";
import Select from "react-select";
import "react-select/dist/react-select.css";
import "./UserForm.css";

import Button from "../../components/Button/Button";

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

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  }
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.birthdate) {
    errors.birthdate = "Required";
  }
  if (!values.gender) {
    errors.gender = "Required";
  }
  return errors;
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
    const groupOptions = _.map(this.props.groups, (group, index) => {
      return { label: _.capitalize(group.name), value: index };
    });

    // Trust me I believe in sexual diversity but for the sake of simplicity
    // I limited this to just girls and boys (sorry)
    const genderOptions = [
      { label: "Boy", value: "boy" },
      { label: "Girl", value: "girl" }
    ];

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
          <Field name="description" component={MDInput} label="Description" />
          <Field
            placeholder="Gender"
            name="gender"
            options={genderOptions}
            component={MultiSelect}
          />
          <Field
            placeholder="Groups"
            name="groups"
            options={groupOptions}
            component={MultiSelect}
            multi
          />
          <Field
            name="avatar"
            component={MDInput}
            label="Profile Image (url)"
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
  const birthdate = state.users.editing
    ? moment.unix(state.users.editing.birthdate).format("YY-MM-DD")
    : "";

  const groups = state.users.editing
    ? _.map(state.users.editing.groups, group => {
        return { label: state.groups.array[group].name, value: group };
      })
    : null;
  const gender = state.users.editing
    ? state.users.editing.gender === "boy"
      ? { label: "Boy", value: "boy" }
      : { label: "Girl", value: "girl" }
    : null;

  return {
    groups: state.groups.array,
    initialValues: {
      ...state.users.editing,
      birthdate,
      groups,
      gender
    },
    validate
  };
}

UserForm = reduxForm({ form: "user" })(UserForm);
export default connect(mapStateToProps)(UserForm);
