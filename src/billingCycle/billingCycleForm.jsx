import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field } from "redux-form";

import "./button.css";

import { init } from "./billingCycleActions";
import labelAndInput from "../common/form/labelAndInput";

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit, readOnly } = this.props;
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field
                        readOnly={readOnly}
                        name="name"
                        component={labelAndInput}
                        label="Nome"
                        cols="12 4"
                        placeholder="Informe o Nome"
                    />
                    <Field
                        readOnly={readOnly}
                        name="month"
                        component={labelAndInput}
                        type="number"
                        label="Mês"
                        cols="12 4"
                        placeholder="Informe o mês"
                    />
                    <Field
                        readOnly={readOnly}
                        name="year"
                        component={labelAndInput}
                        type="number"
                        label="Ano"
                        cols="12 4"
                        placeholder="Informe o ano"
                    />
                </div>
                <div className="box-footer">
                    <button
                        type="submit"
                        className={`btn btn-${this.props.submitClass} margin-btn`}
                    >
                        {this.props.submitLabel}
                    </button>
                    <button
                        type="button"
                        className="btn btn-default margin-btn"
                        onClick={this.props.init}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        );
    }
}

BillingCycleForm = reduxForm({
    form: "billingCycleForm",
    destroyOnUnmount: false,
})(BillingCycleForm);
const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycleForm);
