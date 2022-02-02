export function selectTab(tabId) {
    console.log(tabId, "Sexo, Muito SEXO")
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}