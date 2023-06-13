import React, { useState, useEffect } from "react";
import { P, H3, H5, H4, H6, H2, A, H1 } from "../../components/Texts";
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
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/router";

export default function () {
  const API = process.env.NEXT_PUBLIC_FRESHLYY_API;
  const [coupons, setCoupons] = useState([]);
  useEffect(() => {
    fetchCoupons();
  }, []);
  const fetchCoupons = async () => {
    const response = await fetch(API + "/admin/coupons/");
    const data = await response.json();
    setCoupons(data.coupons);
  };
  console.log(coupons);

  const [couponCode, setCouponCode] = useState("");
  const [createedate, setcreatedate] = useState("");
  const [percentage, setpercentage] = useState("");
  const [expiredate, setexpiredate] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleCouponCode = async (value) => {
    // formik.setFieldValue("couponCode", value);

    formik.setFieldValue("couponCode", value);
    try {
      const response = await axios.post(API + "/admin/verifyCouponCode", {
        cCode: value,
      });
      const { isExist, message } = response.data;
      if (isExist) {
        formik.setFieldError("couponCode", message);
      } else {
        formik.setFieldError("couponCode", "");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateDate = (value) => {
    formik.setFieldValue("createedate", value);
  };
  const handlepercentage = (value) => {
    formik.setFieldValue("percentage", value);
  };
  const handleExpireDate = (value) => {
    formik.setFieldValue("expiredate", value);
  };
  function handleChange(event) {
    console.log(event.target.value);
  }

  console.log(couponCode, createedate, percentage, expiredate);

  const handleSubmit = async () => {
    const dataurl = API + "/admin/createCoupons";
    const data = {
      userEmail: "harini@freshlyy.com",
      presentage: formik.values.percentage,
      cCode: formik.values.couponCode,
      cDate: formik.values.createedate,
      eDate: formik.values.expiredate,
      status: "Paused",
    };
    try {
      const response = await axios.post(dataurl, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      formik.resetForm();
      // Show a success message to the user
      setSuccessMessage("Coupon created successfully!");
    } catch (error) {
      console.log(error);
      window.alert("Coupon Code already exits");
    }
  };
  const validationSchema = Yup.object().shape({
    couponCode: Yup.string()
      .matches(
        /^CP\d{4}$/,
        "Coupon code must start with 'CP' and end with 4 digits"
      )
      .required("Coupon code is required"),
    createedate: Yup.string().required("Date Created is required"),
    percentage: Yup.number()
      .test("is-number", "Percentage must be a number", (value) => {
        return !isNaN(value);
      })
      .required("Percentage is required")
      .min(1, "Percentage must be greater than or equal to 1")
      .max(100, "Percentage cannot be more than 100"),
    expiredate: Yup.string()
      .required("Expire Date is required")
      .test({
        name: "dateValidation",
        message: "Expire Date must be after the Created Date",
        test: function (value) {
          const createedate = this.resolve(Yup.ref("createedate"));
          return moment(value).isAfter(createedate);
        },
      }),
  });
  const moment = require("moment");
  const formik = useFormik({
    initialValues: {
      couponCode: "",
      createedate: "",
      percentage: "",
      expiredate: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/SupportTicketCoupons");
  };

  const handleListClick = () => {
    router.push("/couponedit");
  };
  const [couponCodeError, setCouponCodeError] = useState("");

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
              <Button
                size='normal'
                color='shadedPrimary'
                title='Coupon List ->'
                onClick={handleListClick}
              ></Button>
            </div>

            <div className={styles.box}>
              <div className={styles.form}>
                <H3 className={styles.cu}> Create Farmer Requested Coupon</H3>
                {/* <CouponCard admintitle='Hey'></CouponCard> */}
                <div className={styles.couponcard}>
                  {coupons.map((coupon) => (
                    <CouponCard
                      percentage={coupon.presentage}
                      couponcode={coupon.cCode}
                      expiredate={coupon.eDate}
                      createddate={coupon.cDate}
                      status={coupon.status}
                    />
                  ))}
                </div>
                <div className={styles.buttonview}>
                  <Button
                    size='normal'
                    color='filledPrimary'
                    title='View Requests'
                    onClick={handleButtonClick}
                  ></Button>
                </div>
              </div>
              <div className={styles.form1}>
                <H3 className={styles.cu}> Create New Coupon</H3>
                <TextInput
                  type='text'
                  name='couponCode'
                  placeholder='CPXXXX'
                  domName='Coupon code'
                  // error={formik.errors.couponCode}
                  error={formik.errors.couponCode}
                  onChange={handleCouponCode}
                  value={formik.values.couponCode}
                />
                <TextInput
                  type='date'
                  name='createedate'
                  placeholder='Select the date created'
                  domName='Date Created'
                  error={formik.errors.createedate}
                  onChange={handleCreateDate}
                  value={formik.values.createedate}
                  onBlur={formik.handleBlur}
                />
                <TextInput
                  type='number'
                  name='percentage'
                  placeholder='Amount in percentage'
                  domName='Amount (Percentage)'
                  error={formik.errors.percentage}
                  onChange={handlepercentage}
                  value={formik.values.percentage}
                  onBlur={formik.handleBlur}
                />
                <TextInput
                  type='date'
                  name='expiredate'
                  placeholder='Select the expire date'
                  domName='Expire Date'
                  error={formik.errors.expiredate}
                  onChange={handleExpireDate}
                  value={formik.values.expiredate}
                  onBlur={formik.handleBlur}
                />

                <Button
                  size='normal'
                  color='filledPrimary'
                  title='Create Coupon'
                  onClick={formik.handleSubmit}
                ></Button>
                {/* </div> */}
                <div className={styles.eMeassage}>
                  {successMessage && <H6>{successMessage}</H6>}
                </div>
              </div>
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
