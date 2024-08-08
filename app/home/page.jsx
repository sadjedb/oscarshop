"use client";
import Categories from "@/components/home/Categories";
import Hero from "@/components/home/Hero";
import Informations from "@/components/home/Informations";
import OnsSale from "@/components/home/OnsSale";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const page = () => {
  const [creds, setCreds] = useState("loading");
  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios({
      method: "GET",
      url: "http://localhost:3001/login",
      withCredentials: true,
    })
      .then((res) => {
        console.log(res.data);
        setCreds(res.data.username);
      })

      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Logged in as : {creds} </h1>
      <Hero />
      <Categories />
      <OnsSale />
      <Informations />
    </div>
  );
};

export default page;
