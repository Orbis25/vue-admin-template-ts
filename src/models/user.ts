export default interface User { 
  gender: String;
  name: {
    first: String;
    last: String;
  };
  email: String;
  picture: {
    large: String;
  };
}
