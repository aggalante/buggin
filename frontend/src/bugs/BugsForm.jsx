import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field, formValueSelector } from "redux-form";

import { init } from "./bugsActions";

import LabelAndInput from "../common/form/LabelAndInput";

class BugsForm extends Component {
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
            readOnly={readOnly}
          />
          <Field
            name='description'
            component={LabelAndInput}
            label='Description'
            cols='12 4'
            placeholder='Insert bug description'
            readOnly={readOnly}
          />
          <Field
            name='comments'
            component={LabelAndInput}
            label='Comments'
            cols='12 4'
            placeholder='Insert comments'
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

BugsForm = reduxForm({
  form: "BugsForm",
  destroyOnUnmount: false,
})(BugsForm);
const selector = formValueSelector("BugsForm");
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BugsForm);
