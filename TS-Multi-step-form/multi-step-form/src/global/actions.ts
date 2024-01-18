export interface IGlobalActions {
    SET_NAME: "setName";
    SET_EMAIL: "setEmail";
    SET_PHONE: "setPhone";
    SET_PLAN: "setPlan";
    SET_BILLING: "setBilling";
    SET_ADD_ONS: "setAddOns";
    INCREASE_COUNTER: "increaseCounter";
    DECREASE_COUNTER: "decreaseCounter";
    REDIRECT_COUNTER: "redirectCounter";
}

const globalActions:IGlobalActions = {
    SET_NAME: "setName",
    SET_EMAIL: "setEmail",
    SET_PHONE: "setPhone",
    SET_PLAN: "setPlan",
    SET_BILLING: "setBilling",
    SET_ADD_ONS: "setAddOns",
    INCREASE_COUNTER:"increaseCounter",
    DECREASE_COUNTER:"decreaseCounter",
    REDIRECT_COUNTER: "redirectCounter"
}

export default globalActions;