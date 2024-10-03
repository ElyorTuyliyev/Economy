import React from "react";
import Header from "../../components/header";

import MainImg from "./assets/logo3.jpg";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Header />
      <main className="main">
        <section className="home"></section>
      </main>
    </>
  );
};

export default Home;
