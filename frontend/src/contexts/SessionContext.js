import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useHistory } from "react-router";
import { useMutation, useLazyQuery } from "@apollo/client";
import { useCookies } from "react-cookie";

import { ME_QUERY } from "../graphql/meQuery";
import { LOGIN_MUTATION } from "../graphql/loginMutation";
import { UPDATE_CART } from "../graphql/createCart";

const SessionContext = createContext();

export const SessionProvider = (props) => {
  const { children } = props;
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(null);
  const [err, setErr] = useState(null);
  const [, setCookie, removeCookie] = useCookies(["token"]);
  const [loadMe, { loading, data }] = useLazyQuery(ME_QUERY, {
    fetchPolicy: "network-only",
  });
  const [login] = useMutation(LOGIN_MUTATION);
  const [updateCart] = useMutation(UPDATE_CART);
  // const [queryCart] = useMutation(UPDATE_CART);
  const handleLogin = useCallback(
    async (username, password) => {
      try {
        const res = await login({ variables: { username, password } });
        // console.log(res.data.login);
        if (res?.data?.login?.token) {
          setCookie("token", res?.data?.login?.token, { maxAge: 86400 });
          setUser(res?.data?.login?.user);
          setCart(res?.data?.login.user.cart[0]);
          history.push("/");
        }
      } catch (err) {
        setErr(err);
        removeCookie("token", { maxAge: 86400 });
      }
    },
    [login, removeCookie, setCookie, history]
  );
  const handleLogout = useCallback(() => {
    setUser(null);
    setCart(null);
    removeCookie("token", { maxAge: 86400 });
  }, [removeCookie]);
  useEffect(() => {
    if (data?.me) {
      setUser(data?.me);
      setCart(data?.me.cart[0]);
    }
  }, [data]);
  useEffect(() => {
    const loadData = async () => {
      try {
        await loadMe();
      } catch (err) {
        removeCookie("token", { maxAge: 86400 });
      }
    };
    loadData();
  }, [loadMe, removeCookie]);

  // Cart
  const handleAddCart = useCallback(
    async (item) => {
      try {
        await updateCart({
          variables: {
            cartId: cart?._id,
            record: {
              totalPrice: cart?.totalPrice + item.price * item.quantity,
              item: [
                ...cart?.item,
                {
                  media: item.media,
                  name: item.name,
                  price: item.price,
                  quantity: item.quantity,
                  total: item.price * item.quantity,
                },
              ],
            },
          },
        });
        loadMe();
      } catch (err) {
        console.log(err);
      }
    },
    [updateCart, cart, loadMe]
  );

  const removeCart = useCallback(async () => {
    try {
      await updateCart({
        variables: {
          cartId: cart?._id,
          record: {
            totalPrice: 0,
            item: [],
          },
        },
      });
      loadMe();
    } catch (e) {
      console.log(e);
    }
  }, [updateCart, cart, loadMe]);

  return (
    <SessionContext.Provider
      value={{
        loading,
        user,
        err,
        cart,
        login: handleLogin,
        logout: handleLogout,
        addItem: handleAddCart,
        removeItem: removeCart,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);

export default SessionContext;
