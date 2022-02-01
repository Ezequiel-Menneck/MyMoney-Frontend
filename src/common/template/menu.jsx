import React from "react";

import MenuItem from "./menuItem";
import MenuTree from "./menuTree";

export default (props) => {
    return (
        <ul className="sidebar-menu">
            <MenuItem path="#" label="Dashboard" icon="dashboard" />
            <MenuTree label="Cadastro" icon="edit">
                <MenuItem
                    path="#billingCycles"
                    label="Cicles de Pagamento"
                    icon="usd"
                />
            </MenuTree>
        </ul>
    );
};
