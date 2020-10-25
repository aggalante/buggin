import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field, formValueSelector } from "redux-form";

import LabelAndInput from "../common/form/LabelAndInput";

import { init } from "./projectsActions";

class ProjectsForm extends Component {
  render() {
    const { handleSubmit, readOnly } = this.props;
    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field
            name='name'
            component={LabelAndInput}
            label='Name'
            cols='12 4'
            placeholder='Insert project name'
            readOnly={readOnly}
          />
          <Field
            name='description'
            component={LabelAndInput}
            label='Description'
            cols='12 4'
            placeholder='Insert project description'
            readOnly={readOnly}
          />
        </div>
        <div className='box-footer'>
          <button type='submit' className='btn btn-warning'>
            {this.props.submitLabel}
          </button>
          <button
            type='button'
            className='btn btn-default'
            onClick={this.props.init}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

ProjectsForm = reduxForm({
  form: "ProjectsForm",
  destroyOnUnmount: false,
})(ProjectsForm);
const selector = formValueSelector("ProjectsForm");
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsForm);
