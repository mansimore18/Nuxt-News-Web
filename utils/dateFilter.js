import moment from "moment";
import Vue from "vue";
Vue.filter("formatDate", (value) => {
  if (value) {
    return moment(String(value)).format("YYYY/MM/DD");
  }
});