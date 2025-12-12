import type React from "react";
import "./Home.css"
import CButton from "../../components/CButton";
import CInput from "../../components/CInput";

const Home: React.FC = () => {
  return (
    <>
      <h1>Home</h1>
      <CButton title="Click me"></CButton>
      <CInput></CInput>
    </>
  );
};

export default Home;
