import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
import Navbars from "../../layouts/Navbars";
import Footers from "../../layouts/Footers";

function Performers() {
  const [performers, setPerformers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get('http://ec2-3-129-61-255.us-east-2.compute.amazonaws.com:8081/events/getAllPerformers')
            .then(response => {
                // console.log('Received data:', response.data);
                // console.log('Type of received data:', typeof response.data);

                if(response.data && Array.isArray(response.data.performers)){
                    setPerformers(response.data.performers);
                }else{
                    setError('Data recieved is not in the expected format');
                }
                
            })
            .catch(error => {
                console.error('Error fetching performer data:', error);
                setError('Error fetching performer data');
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
        <h1 class="display-5">List of all performers</h1>
        </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {performers.map((performer) => (
            <tr key={performer.id}>
              <td>{performer.id}</td>
              <td>{performer.type}</td>
              <td>{performer.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
    <Footers />
    </div>
  );
}

export default Performers;