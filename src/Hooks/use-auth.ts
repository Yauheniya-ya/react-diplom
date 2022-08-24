
import { useSelector } from "react-redux";
import { UserSelectors } from "../Redux/redusers/user";

const useAuth = () => {
  const user = useSelector(UserSelectors.getUser);

  return {
    isAuth:!! user.email,
    email: user.email,
    token: user.token,
    id: user.id,
  };
};

export default useAuth;