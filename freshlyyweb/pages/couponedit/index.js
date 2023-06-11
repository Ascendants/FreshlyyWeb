import React, { useState, useEffect } from "react";
import { P, H3, H5, H6, H2, A, H1 } from "../../components/Texts";
import theme from "../../styles/theme";
import logo from "../../images/logo.svg";
import Image from "next/image";
import {} from "@fortawesome/free-brands-svg-icons";

import Adminmain from "../../images/Adminmain.png.png";
import Admincard from "../../components/Admincard";
import styles from "./index.module.scss";
import AdminNavbar from "../../components/AdminNavbar";
import createcoupon from "../../images/Createcoupon.png";
import { TextInput } from "../../components/Inputs";
import { Button } from "../../components/Buttons";
import CouponCard from "../../components/CouponCard";
import FooterSpecial from "../../components/FooterSpecial";

export default function () {
  const API = process.env.NEXT_PUBLIC_FRESHLYY_API;
  const [coupons, setCoupons] = useState([]);
  useEffect(() => {
    fetchCoupons();
    // const interval = setInterval(() => {
    //   fetchCoupons();
    // }, );
    // return () => clearInterval(interval);
  }, []);
  const fetchCoupons = async () => {
    const response = await fetch(API + "/admin/coupons/");
    const data = await response.json();
    setCoupons(data.coupons);
  };
  console.log(coupons);

  //   const [couponCode, setCouponCode] = useState("");
  //   const [createedate, setcreatedate] = useState("");
  //   const [percentage, setpercentage] = useState("");
  //   const [expiredate, setexpiredate] = useState("");
  //   const handleCouponCode = (value) => {
  //     setCouponCode(value);

  //     setpercentage(value);
  //     setexpiredate(value);
  //   };
  //   const handleCreateDate = (value) => {
  //     setcreatedate(value);
  //   };
  //   const handlepercentage = (value) => {
  //     setpercentage(value);
  //   };
  //   const handleExpireDate = (value) => {
  //     setexpiredate(value);
  //   };

  return (
    <>
      {" "}
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.navbar}>
            <AdminNavbar />
          </div>
          <div className={styles.maincont}>
            <div className={styles.mainImg}>
              <Image
                src={createcoupon}
                className={styles.sideimage}
                alt='Main'
              />
            </div>
            <div className={styles.line}>
              <H2>Coupons</H2>
            </div>
            <div className={styles.box}>
              <div className={styles.form}>
                <H3 className={styles.cu}> Create Farmer Requested Coupon</H3>
                {/* <CouponCard admintitle='Hey'></CouponCard> */}
                <div className={styles.couponcard}>
                  {coupons.map((coupon) => (
                    <a>
                      <CouponCard
                        percentage={coupon.presentage}
                        couponcode={coupon.cCode}
                        expiredate={coupon.eDate}
                        createddate={coupon.cDate}
                      />
                    </a>
                  ))}
                  <Button
                    size='normal'
                    color='filledPrimary'
                    title='Create Coupon'

                    // onPress={handleSubmit}
                    // onClick={() => alert("Button clicked!")}
                  ></Button>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </main>
      {/* <div className={styles.foot}>
        <FooterSpecial />
      </div> */}
    </>
  );
}
