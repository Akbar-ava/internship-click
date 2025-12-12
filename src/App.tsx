import React from "react";
import Router  from "./routes/Router";

const App: React.FC = () => {
  /* const fetchProducts = async () => {
    try {
      const response = await apiClient.get("/products");
      const data = response.data;
      return data;
    } catch (error) {
      console.log("Error fetching products", error);
    }
  }; */
  return <Router/>;
};

export default App;
