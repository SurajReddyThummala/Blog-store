
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { newpost } from "../actions";
import TextField from 'material-ui/TextField'

 import asyncValidate from './asyncValidate'

class PostsNew extends Component {
  renderField(field) {
    const { meta: {label, touched, error , input , ...custom } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;
    <TextField hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
    return (
      <div className={className}>
        <div>
        <label>{field.label}</label>
        </div>
        <TextField hintText={label}
          floatingLabelText={label} type="text" {...field.input} />

        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.newpost(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit , pristine , reset, submitting } = this.props;

    return (
       <div className = "centerform" >
       <h3 className = "header" >New Post </h3>
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

      <Field label="Title" name="title" component={this.renderField}  />
      <Field
        label="Tag"
        name="categories"
        component={this.renderField}
      />
      <Field
        label="Description"
        name="content"
        component={this.renderField}  multiLine={true} rows = {5}
      />

        <button className = "btn btn-primary" type="submit" disabled={pristine || submitting}>Submit</button>
        <button className ="btn btn-danger" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values   </button>
      </form>
      </div>
    );
  }
}


  function validate(values) {
     const errors = {}
       const requiredFields = [ 'title', 'categories','content' ]
       requiredFields.forEach(field => {
         if (!values[ field ]) {
           errors[ field ] = 'Required'
         }
       })
       return errors
  }

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(connect(null, { newpost })(PostsNew));
