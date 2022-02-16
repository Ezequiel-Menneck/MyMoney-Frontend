import React from "react";

import Grid from "../common/layout/grid";
import Row from "../common/layout/row";
import ValueBox from "../common/widget/valueBox";

export default ({ credit, debt }) => {
    return (
        <Grid cols="12">
            <fieldset>
                <legend>Resumo</legend>
            </fieldset>
            <Row>
                <ValueBox
                    cols="12 4"
                    color="green"
                    icon="bank"
                    value={`R$ ${credit}`}
                    text='Total de Créditos'
                />
                <ValueBox
                    cols="12 4"
                    color="red"
                    icon="credit"
                    value={`R$ ${debt}`}
                    text='Total de Créditos'
                />
                <ValueBox
                    cols="12 4"
                    color="blue"
                    icon="money"
                    value={`R$ ${credit - debt}`}
                    text='Valor Consolidado'
                />
            </Row>
        </Grid>
    );
};
