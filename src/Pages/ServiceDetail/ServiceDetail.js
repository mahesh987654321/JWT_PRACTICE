import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetails from "../../hooks/useServiceDetails";
import useServices from "../../hooks/useServices";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const [service] = useServiceDetails(serviceId);
  return (
    <div>
      <h2>You are about to book: {service.name}</h2>
      <div className="text-center">
        <Link to={`/checkout/${serviceId}`}>
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
