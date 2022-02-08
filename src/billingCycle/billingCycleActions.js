import axios from "axios";
import { toastr } from "react-redux-toastr";
import { reset as resetForm, initialize } from "redux-form";
import { showTabs, selectTab } from "./../common/tab/tabActions";

const BASE_URL = "http://localhost:3003/api";
const INITIAL_VALUES = {} 

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`);
    return {
        type: "BILLING_CYCLE_FETCHED",
        payload: request,
    };
}

export function create(values) {
   return submit(values, 'post')
}

export function update(values) {
   return submit(values, 'put')
}

function submit(values, method) {
    return (dispath) => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then((res) => {
                toastr.success("Sucesso", "Operação realizada com sucesso");
                dispath(init());
            })
            .catch((e) => {
                e.response.data.errors.forEach((error) =>
                    toastr.error("Erro", error)
                );
            });
    };
}

export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}