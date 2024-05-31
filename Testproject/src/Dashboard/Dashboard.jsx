import React from "react";
import BasicCards from "../components/Dashboard/BasicCards";
import Charts from "../components/Dashboard/Charts";
import OrderCard from "../components/Dashboard/OrderCard"


const Dashboard = () => {
  return (
    <>
        <BasicCards />
        <Charts/>
      <OrderCard/>
     </>
    
  );
};

export default Dashboard;
