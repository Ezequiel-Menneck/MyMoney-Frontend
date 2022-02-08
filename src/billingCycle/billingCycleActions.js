import axios from "axios";
import { toastr } from "react-redux-toastr";
import { reset as resetForm } from "redux-form";
import { showTabs, selectTab } from "./../common/tab/tabActions";

const BASE_URL = "http://localhosT:3003/api";

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`);
    return {
        type: "BILLING_CYCLE_FETCHED",
        payload: request,
    };
}

export function create(values) {
    return (dispath) => {
        axios
            .post(`${BASE_URL}/billingCycles`, values)
            .then((res) => {
                toastr.success("Sucesso", "Operação realizada com sucesso");
                dispath([
                    resetForm('billingCycleForm'),
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ]);
            })
            .catch((e) => {
                e.response.data.errors.forEach((error) =>
                    toastr.error("Erro", error)
                );
            });
    };
}
