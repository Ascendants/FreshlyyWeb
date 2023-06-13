import React, { useState, useEffect } from "react";
import { P, H3, H5, H6, H2, A, H1 } from "../../components/Texts";
import theme from "../../styles/theme";
import logo from "../../images/logo.svg";
import Image from "next/image";
import { } from "@fortawesome/free-brands-svg-icons";
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
  const [coupons, setCoupons] = useState([]);
  useEffect(() => {
    fetchCoupons();
  }, []);
  const fetchCoupons = async () => {
    const response = await fetch(API + "/admin/editCoupons/");
    const data = await response.json();
    setCoupons(data.coupon);
  };
  console.log(coupons);

  const updateCouponStatus = async (id, newStatus) => {
    const dataurl = API + `/admin/updateCoupons/${id}`;
    await axios.put(
      dataurl,
      { status: newStatus },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    fetchCoupons();
  };

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
                {coupons.map((coupon) => (
                  <div className={styles.couponWrap}>
                    <div className={styles.couponcard}>
                      <CouponCard
                        percentage={coupon.presentage}
                        couponcode={coupon.cCode}
                        expiredate={coupon.eDate}
                        createddate={coupon.cDate}
                        status={coupon.status}
                      />
                    </div>

                    <div className={styles.buttonWrapper}>
                      {coupon.status == "Active" && (
                        <div
                          onClick={() =>
                            updateCouponStatus(coupon._id, "Deactive")
                          }
                        >
                          <Button
                            size='normal'
                            color='shadedDanger'
                            title='Deactivate'
                          ></Button>
                        </div>
                      )}
                      {(coupon.status == "Pending" ||
                        coupon.status == "Deactive" ||
                        coupon.status == "Paused") && (
                          <div
                            onClick={() =>
                              updateCouponStatus(coupon._id, "Active")
                            }
                          >
                            <Button
                              size='normal'
                              color='shadedPrimary'
                              title='Activate'
                            ></Button>
                          </div>
                        )}
                      <div
                        onClick={() => updateCouponStatus(coupon._id, "delete")}
                      >
                        <Button
                          size='normal'
                          color='filledDanger'
                          title='Delete'
                        ></Button>
                      </div>
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
