import Vue from "Vue";
Vue.use(VeeValidate, {
  classes: true,
  classNames: {
    valid: "is-valid",
    invalid: "is-invalid"
  }
}); // use the validation of veeValidate package
