import Vue from "vue";
export default Vue.extend({
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v: any) => !!v || "Name is required",
      (v: any) =>
        (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      (v: any) => !!v || "E-mail is required",
      (v: any) => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false as Boolean,
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
