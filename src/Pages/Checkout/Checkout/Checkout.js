import React from "react";
import { useParams } from "react-router-dom";
import useServiceDetails from "../../../hooks/useServiceDetails";
const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);

  return (
    <div>
      <h2>Please Book {service.name}</h2>
    </div>
  );
};

export default Checkout;
