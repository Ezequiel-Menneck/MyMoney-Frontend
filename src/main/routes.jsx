import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboar from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props => {
    return (
        <Router history={hashHistory}>
            <Route path='/' component={Dashboar} />
            <Route path='billingCycles' component={BillingCycle} />
            <Redirect from='*' to='/' />
        </Router>
    )
}