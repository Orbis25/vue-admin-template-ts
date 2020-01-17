import Vue from "vue";
import AxiosExampleService from "@/services/implementations/AxiosExampleService";
import User from "@/models/user";

export default Vue.extend({
  data: () => ({
    data: {} as User
  }),
  mounted() {
    this.getUser();
  },
  methods: {
    getUser(): void {
      const service = new AxiosExampleService();
      service
        .getRamdonUser()
        .then(r => {
          this.data = r;
        })
        .catch(e => alert("error"));
    }
  }
});
