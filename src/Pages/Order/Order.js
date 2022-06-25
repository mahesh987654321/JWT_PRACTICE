import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { async } from "@firebase/util";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Order = () => {
  const [order, setOrder] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const getOrder = async () => {
      const email = user.email;
      const url = `http://localhost:5000/order?email=${email}`;
      const { data } = await axios.get(url);
      setOrder(data);
    };
    getOrder();
  }, [user]);
  return (
    <div>
      <p>Order is {order?.length}</p>
    </div>
  );
};

export default Order;
