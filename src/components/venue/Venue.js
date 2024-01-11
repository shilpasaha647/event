import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
import "./Venue.css";
import Navbars from "../../layouts/Navbars";
import Footers from "../../layouts/Footers";

function Venue() {
  const [venues, setVenues] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get('http://ec2-3-129-61-255.us-east-2.compute.amazonaws.com:8081/events/getAllVenue')
            .then(response => {
                // console.log('Received data:', response.data);
                // console.log('Type of received data:', typeof response.data);

                if(response.data && Array.isArray(response.data.venues)){
                    setVenues(response.data.venues);
                }else{
                    setError('Data recieved is not in the expected format');
                }
                
            })
            .catch(error => {
                console.error('Error fetching venue data:', error);
                setError('Error fetching venue data');
            });
    }, []);


  if (error) {
    return <Container>Error: {error}</Container>;
  }

  return (
    <div>
        <Navbars />
    <Container>
        <div class="headers">
        <h1 class="display-5">List of all venues</h1>
        </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Country</th>
            <th>State</th>
            <th>Address</th>
            <th>City</th>
            <th>Postal Code</th>
          </tr>
        </thead>
        <tbody>
          {venues.map((venue) => (
            <tr key={venue.id}>
              <td>{venue.id}</td>
              <td>{venue.country}</td>
              <td>{venue.state}</td>
              <td>{venue.city}</td>
              <td>{venue.address}</td>
              <td>{venue.postal_code}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
    <Footers />
    </div>
  );
}

export default Venue;
