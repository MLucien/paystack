/*
Paystack API - Customer
*/

const route = "/customer";

module.exports = {
  /*
  Create customer
  */
  create: {
    method: "post",
    route: route,
    params: ["email"],
  },

  /*
  List customers
  */
  list: {
    method: "get",
    route: route,
    args: ["perPage", "page", "from", "to"],
  },

  /*
  Get customer
  */
  get: {
    method: "get",
    route: `${route}/{id}`,
  },

  /*
  Update customer
  */
  update: {
    method: "put",
    route: `${route}/{id}`,
  },

  /*
  Validate customer
  */
  validate: {
    method: "post",
    route: `${route}/{id}/identification`,
    params: ["first_name", "last_name", "type", "value", "country", "bvn"],
  },

  /*
  White/Blacklist customer
  */
  setRiskAction: {
    method: "post",
    route: `${route}/set_risk_action`,
    params: ["customer"],
  },

  /*
  Deactivate Authorization for customer
  */
  deactivateAuth: {
    method: "post",
    route: `${route}/deactivate_authorization`,
    params: ["authorization_code"],
  },
};
