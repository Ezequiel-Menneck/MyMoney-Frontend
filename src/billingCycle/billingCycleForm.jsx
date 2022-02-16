import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field, formValueSelector } from "redux-form";

import "./button.css";

import { init } from "./billingCycleActions";
import labelAndInput from "../common/form/labelAndInput";
import ItemList from "./itemList";
import Summary from "./summary";

class BillingCycleForm extends Component {
    calculateSummary() {
        const sum = (t, v) => t + v;
        return {
            sumOfCredits: this.props.credits.map((c) => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map((d) => +d.value || 0).reduce(sum)
        };
    }

    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props;
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()
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
                    <Summary credit={sumOfCredits} debt={sumOfDebts} />
                    <ItemList
                        field="credits"
                        legend="Créditos"
                        cols="12 6"
                        list={credits}
                        readOnly={readOnly}
                    />
                    <ItemList
                        field="debts"
                        legend="Débitos"
                        cols="12 6"
                        list={debts}
                        readOnly={readOnly}
                        showStatus={true}
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
const selector = formValueSelector("billingCycleForm");
const mapStateToProps = (state) => ({
    credits: selector(state, "credits"),
    debts: selector(state, "debts"),
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);
