import React from "react";
import { P, H3, H5, H6, H2, A } from "../../components/Texts";
import theme from "../../styles/theme";
import logo from "../../images/logo.svg";
import Image from "next/image";
import {} from "@fortawesome/free-brands-svg-icons";

import FooterSpecial from "../../components/FooterSpecial";
import Adminmain from "../../images/Adminmain.png.png";
import Admincard from "../../components/Admincard";
import styles from "./index.module.scss";
import AdminNavbar from "../../components/AdminNavbar";
import createcoupon from "../../images/Createcoupon.png";
import { TextInput } from "../../components/Inputs";
import { Button } from "../../components/Buttons";

export default function () {
  const API = process.env.NEXT_PUBLIC_FRESHLYY_API;
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    fetch(API + "/farmer/adminDashboard/", {
      //getting data from the backend (all products)
      method: "GET",
      headers: {
        useremail: "harini@freshlyy.com",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message != "Success") throw new Error("Something went wrong");
        setData(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {" "}
      <div className={styles.container}>
        <div className={styles.navbar}>
          <AdminNavbar />
        </div>
        <div className={styles.line}>
          <H3>Pending NIC Requests</H3>
        </div>
        <div className={styles.maincont}></div>
        <div className={styles.application}>
          <div className={styles.form}>
            <TextInput
              type="text"
              name="Coupon Code"
              placeholder="Enter the coupon code"
              domName="Coupon code"
              error=""
            />
            <TextInput
              type="date"
              name="date created"
              placeholder="Select the date created"
              domName="Date Created"
              error=""
            />
            <TextInput
              type="number"
              name="Amount"
              placeholder="Amount in percentage"
              domName="Amount (Percentage)"
              error=""
            />
            <TextInput
              type="date"
              name="expire date"
              placeholder="Select the expire date"
              domName="Expire Date"
              error=""
            />

            <Button
              size="normal"
              color="filledPrimary"
              title="Create Coupon"

              // onClick={() => alert("Button clicked!")}
            >
              {" "}
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.foot}>
        <FooterSpecial />
      </div>
    </>
  );
}
