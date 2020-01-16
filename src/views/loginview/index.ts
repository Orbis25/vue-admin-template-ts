import Vue from "vue";
import { Login } from "@/models/viewModels/login";
import { home } from "../../router/routes.json";
export default Vue.extend({
  data: () => ({
    valid: true,
    login: { userName: "admin@admin.com", password: "admin" } as Login,
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
        this.$router.push(home.path);
      }
    }
  }
});
