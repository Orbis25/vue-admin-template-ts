import User from "../../models/user";
import axios from "axios";
export default class AxiosExampleService {
  private readonly Api_URL: string = "https://randomuser.me/api/";
  public async getRamdonUser(): Promise<User> {
    const httpResponse = await axios.get<User>(this.Api_URL);
    return httpResponse.data;
  }
}
