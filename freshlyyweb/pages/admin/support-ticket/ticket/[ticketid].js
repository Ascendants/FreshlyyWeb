import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {
  P,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  H7,
  H8,
  H9,
  Pr,
} from '../../../../components/Texts';
import { motion } from 'framer-motion';

import Footer from '../../../../components/FooterSpecial';
import Header from '../../../../components/Header';
import theme from '../../../../styles/theme';
import { useRouter } from 'next/router';

export default function Home() {
  const API = process.env.NEXT_PUBLIC_FRESHLYY_API;

  const router = useRouter();
  // const ticketId = router.query.ticketid;

  const [ticket, setTicket] = useState({});
  const [order, setOrder] = useState([]);

  useEffect(() => {
    if (!router.query?.ticketid) {
      return;
    }
    getTicket(router.query.ticketid);
    getOrder(router.query.ticketid);
    // {ticket.orderId && getOrder()};
  }, [router.query]);

  const getTicket = async (ticketId) => {
    const response = await fetch(API + '/farmer/support-ticket/' + ticketId);
    const data = await response.json();
    console.log(data.supportTicket);
    setTicket(data.supportTicket);
    console.log(ticket);
  };

  const getOrder = async (ticketId) => {
    console.log('im here');
    const response = await fetch(
      API + '/customer/getSpecificOrder/' + ticket.orderId
    );
    const data = await response.json();
    console.log(data.order);
    setOrder(data.order);
    console.log(order);
  };

  async function deleteTicket(id) {
    try {
      await fetch(API + `/farmer/delete-support-ticket/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.log(error);
    }
  }

  const ticketStatus = ticket.status;
  const updatedStatus = () => {
    if (ticketStatus === 'Pending') {
      return 'Progress';
    } else {
      return 'Completed';
    }
  };

  async function updateTicketStatus(id, status) {
    try {
      await fetch(API + `/farmer/update-support-ticket/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
    } catch (error) {
      console.log(error);
    }
  }

  const inView = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: 'spring',
      },
    },
  };
  return (
    <>
      <div style={styles.backgroundGreen}></div>
      <Header />
      <main style={styles.main}>
        <H3 style={styles.mainTopic}>Support Ticket Details</H3>
        <div style={styles.container}>
          <motion.div variants={inView} initial='hidden' animate='enter'>
            <H5>User Details</H5>
            <P>ID: {ticket._id}</P>
            <P>User-Email: {ticket.userEmail}</P>
            <P>Name: {ticket.name}</P>
            <P>Contact Number: {ticket.number}</P>
            <P>Issue: {ticket.issue}</P>
            {ticket.orderId && <P>Order ID: {ticket.orderId}</P>}
            <P>Description: {ticket.description}</P>
            <P>Status: {ticket.status}</P>
          </motion.div>
          {ticket.orderId && (
            <motion.div variants={inView} initial='hidden' animate='enter'>
              <H5>Farmer Details</H5>
              <P>ID: #{order._id}</P>
              <P>Farmer: {order.farmer}</P>
              <P>Customer: {order.customer}</P>
              <P>Is Delivery: {order.isDelivery}</P>
              <P>Farmer Rating: {order.farmerRating}</P>
              {/* <P>Farmer: {order.farmer}</P> */}
            </motion.div>
          )}
        </div>
        <div style={styles.btnContainer}>
          <button style={styles.btn} onClick={() => deleteTicket(ticket._id)}>
            <H9 style={{ color: theme.contrastTextColor, textAlign: 'center' }}>
              Delete
            </H9>
          </button>
          {ticket.status !== 'Completed' && (
            <button
              style={styles.btn2}
              onClick={() => updateTicketStatus(ticket._id, updatedStatus())}
            >
              <H9
                style={{ color: theme.contrastTextColor, textAlign: 'center' }}
              >
                Update status
              </H9>
            </button>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

const styles = {
  backgroundGreen: {
    backgroundColor: theme.primaryShadeLighter,
    // height: '80vh',
    width: '100%',
    position: 'absolute',
    zIndex: -1999,
  },
  main: {
    width: '70vw',
    margin: 'auto',
  },
  sectionTitle: {
    textAlign: 'center',
    margin: 100,
  },
  mainTopic: {
    textAlign: 'center',
    color: theme.primary,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  btn: {
    backgroundColor: theme.danger,
    borderRadius: 10,
    minWidth: 70,
  },
  btn2: {
    backgroundColor: theme.primary,
    borderRadius: 10,
    minWidth: 70,
    marginLeft: 10,
  },
};
