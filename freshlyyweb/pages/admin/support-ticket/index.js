import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { P, H1, H2, H3, H4, H5, H6, H7, H8, H9, Pr } from '../../../components/Texts';
import { motion } from 'framer-motion';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import dynamic from 'next/dynamic';


import Footer from '../../../components/FooterSpecial';
import Header from '../../../components/Header';
import theme from '../../../styles/theme';

const DragDropContext = dynamic(
  () =>
    import('react-beautiful-dnd').then(mod => {
      return mod.DragDropContext;
    }),
  {ssr: false},
);
const Droppable = dynamic(
  () =>
    import('react-beautiful-dnd').then(mod => {
      return mod.Droppable;
    }),
  {ssr: false},
);
const Draggable = dynamic(
  () =>
    import('react-beautiful-dnd').then(mod => {
      return mod.Draggable;
    }),
  {ssr: false},
);


export default function Home() {
  const API = process.env.NEXT_PUBLIC_FRESHLYY_API;
  
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    const response = await fetch(API + '/farmer/get-support-tickets');
    const data = await response.json();
    setTickets(data.supportTicket);
  }

  async function updateTicketStatus(id, status){
    try {
      await fetch(API + `/farmer/update-support-ticket/${id}`,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });
      const updatedTickets = tickets.map((ticket) => 
      ticket._id === id ? {...ticket, status} : ticket
      );
      setTickets(updatedTickets);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTicket(id) {
    try {
      await fetch(API + `/farmer/delete-support-ticket/${id}`,{
        method: "DELETE",
      });
      const updatedTickets = tickets.filter((ticket) => ticket._id !== id);
      setTickets(updatedTickets);
    } catch (error) {
      console.log(error);
    }
  }

  
  function onDragEnd(result) {
    if(!result.destination){
      return;
    }

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;

    if(sourceIndex === destinationIndex){
      return;
    }

    const ticketToUpdate = tickets[sourceIndex];
    const updatedTickets = Array.from(tickets);
    updatedTickets.splice(sourceIndex, 1);
    updatedTickets.splice(destinationIndex, 0, ticketToUpdate);

    setTickets(updatedTickets);

    updateTicketStatus(ticketToUpdate._id, result.destination.droppableId);
  }



  const inView = {
    hidden: {
      opacity: 0,
      y: 200,
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
        <H3 style={styles.topic}>Support Ticket Managment</H3>
        <div style={styles.container}>
          <DragDropContext onDragEnd={onDragEnd}>
          <div style={styles.column}>
            <H4 style={styles.columnTopic}>Pending</H4>
            <Droppable droppableId='Pending'>
              {(provided) => (
                <ul
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={styles.ul}
                >
                  {tickets
                    .filter((ticket) => ticket.status === "Pending")
                    .map((ticket, index) => (
                      <Draggable key={ticket._id} draggableId={ticket._id} index={index}>
                        {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={styles.card}
                        >
                          <H9>ID: {ticket._id}</H9>
                          <H9>UserEmail: {ticket.userEmail}</H9>
                          <H9>Name: {ticket.name}</H9>
                          <H9>Contact Number: {ticket.number}</H9>
                          <H9>Issue: {ticket.issue}</H9>
                          <H9>Description: {ticket.description}</H9>
                          <H9>Status: {ticket.status}</H9>
                          <button onClick={() => deleteTicket(ticket._id)}>Delete</button>
                        </li>
                      )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>
          <div style={styles.column}>
            <H4 style={styles.columnTopic}>Processing</H4>
            <Droppable droppableId='Processing'>
              {(provided) => (
                <ul
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={styles.ul}
                >
                  {tickets
                    .filter((ticket) => ticket.status === "Processing")
                    .map((ticket, index) => (
                      <Draggable key={ticket._id} draggableId={ticket._id} index={index}>
                        {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={styles.card}
                        >
                          <H9>ID: {ticket._id}</H9>
                          <H9>UserEmail: {ticket.userEmail}</H9>
                          <H9>Name: {ticket.name}</H9>
                          <H9>Contact Number: {ticket.number}</H9>
                          <H9>Issue: {ticket.issue}</H9>
                          <H9>Description: {ticket.description}</H9>
                          <H9>Status: {ticket.status}</H9>
                          <button onClick={() => deleteTicket(ticket._id)}>Delete</button>
                        </li>
                      )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>
          <div style={styles.column}>
            <H4 style={styles.columnTopic}>Complete</H4>
            <Droppable droppableId='Complete'>
              {(provided) => (
                <ul
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={styles.ul}
                >
                  {tickets
                    .filter((ticket) => ticket.status === "Complete")
                    .map((ticket, index) => (
                      <Draggable key={ticket._id} draggableId={ticket._id} index={index}>
                        {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={styles.card}
                        >
                          <H9>ID: {ticket._id}</H9>
                          <H9>UserEmail: {ticket.userEmail}</H9>
                          <H9>Name: {ticket.name}</H9>
                          <H9>Contact Number: {ticket.number}</H9>
                          <H9>Issue: {ticket.issue}</H9>
                          <H9>Description: {ticket.description}</H9>
                          <H9>Status: {ticket.status}</H9>
                          <button onClick={() => deleteTicket(ticket._id)}>Delete</button>
                        </li>
                      )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>
          </DragDropContext>
        </div>
      </main>
      <Footer />
    </>
  );
}

const styles = {
  backgroundGreen: {
    backgroundColor: theme.primaryShadeLighter,
    // height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: -1999,
  },
  main: {
    width: '90vw',
    margin: 'auto',
  },
  sectionTitle: {
    textAlign: 'center',
    margin: 100,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  column: {
    // width: '20vw',
    // backgroundColor: 'red',
    textAlign: 'center',
  },
  topic: {
    textAlign: 'center',
  },
  columnTopic:{
    color: theme.primary,
  },
  ul: {
    listStyleType: 'none',
    margin:0,
    padding: 0,
  },
  card: {
    backgroundColor: theme.primaryShadeLighter,
    borderRadius: 10,
    marginBottom: 20,
    textAlign: 'left',
    padding: 5,
  },
};

export async function getServerSideProps() {
  
  return {
    props: {},
  };
}
