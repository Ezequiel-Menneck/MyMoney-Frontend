import axios from 'axios'
const BASE_URL = 'http://localhosT:3003/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLE_FETCHED',
        payload: request
    }
}
