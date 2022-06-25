import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
const Order = () => {
  const [order, setOrder] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    const getOrder = async () => {
      const email = user.email;
      const url = `http://localhost:5000/order?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setOrder(data);
      } catch (error) {
        console.log(error);
        if (error.response.status === 403) {
          navigate("/login");
          signOut(auth);
        }
      }
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
