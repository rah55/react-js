import { createContext } from "react";

//it is basicall a function ,it take some data which we require all across the application
const UserContext = createContext({
  user: {
    //taking the default value
    name: "Rahul",
    email: "Rahul@gmail.com",
  },
});

export default UserContext;
