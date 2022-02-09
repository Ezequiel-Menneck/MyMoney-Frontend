import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field, formValueSelector } from "redux-form";

import "./button.css";

import { init } from "./billingCycleActions";
import labelAndInput from "../common/form/labelAndInput";
import CreditList from "./creditList";

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit, readOnly, credits } = this.props;
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
                    <CreditList cols='12 6' list={credits} readOnly={readOnly} />
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
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({ credits: selector(state, 'credits') })
const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);