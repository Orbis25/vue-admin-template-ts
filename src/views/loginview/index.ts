import Vue from "vue";
import { Login } from "@/models/viewModels/login";
export default Vue.extend({
  data: () => ({
    valid: true,
    login: { userName: "", password: "" } as Login,
    passwordRules: [(v: any) => !!v || "is required"],
    userNameRules: [
      (v: any) => !!v || "userName is required",
      (v: any) => /.+@.+\..+/.test(v) || "userName must be valid"
    ],
    snackbar: false as Boolean
  }),

  methods: {
    validate() {
      if ((this.$refs.form as Vue & { validate: () => Boolean }).validate()) {
        this.snackbar = true;
      }
    }
  }
});
