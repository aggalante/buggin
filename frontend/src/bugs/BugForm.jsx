import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field, formValueSelector } from "redux-form";

import LabelAndInput from "../common/form/LabelAndInput";

import { init } from "./bugsActions";

class BugForm extends Component {
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
            placeholder='Insert bug name'
          />
          <Field
            name='description'
            component={LabelAndInput}
            label='Description'
            cols='12 8'
            placeholder='Insert bug description'
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

BugForm = reduxForm({
  form: "BugForm",
  destroyOnUnmount: false,
})(BugForm);
const selector = formValueSelector("BugForm");
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BugForm);
