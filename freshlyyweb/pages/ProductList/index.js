import React, { useState, useEffect } from "react";
import { P, H3, H5, H6, H2, A, H1 } from "../../components/Texts";
import theme from "../../styles/theme";
import logo from "../../images/logo.svg";
import Image from "next/image";
import {} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
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
  const [produts, setProduts] = useState([]);
  useEffect(() => {
    fetchProduts();
  }, []);
  const fetchProduts = async () => {
    const response = await fetch(API + "/admin/getProducts/");
    const data = await response.json();
    setProduts(data.produts);
  };
  console.log(produts);

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
              <H3>Coupon List</H3>
            </div>
            <div className={styles.form}>
              <div className={styles.coupon}>
                {produts.map((product) => (
                  <div className={styles.couponWrap}>
                    <div className={styles.couponcard}>
                      <CouponCard
                        percentage={product.title}
                        couponcode={product.price}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
