import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Row, Col, ListGroup,Button,Form } from "react-bootstrap";
import Swal from "sweetalert2";
import Navbars from "../../layouts/Navbars";
import Footers from "../../layouts/Footers";
//import{useNavigate} from "react-router-dom";



function Events() {
  const [events, setEvents] = useState([]);
  // const [id, setSearch] = useState('');

  // const navigate = useNavigate();

  const fetchEvents = () => {
    return axios.get("http://ec2-3-129-61-255.us-east-2.compute.amazonaws.com:8084/events/getAll");
  };
  useEffect(() => {
    fetchEvents()
      .then((response) => {
        setEvents(response.data.events);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const addToWishlist = (id) =>{
    const email = localStorage.getItem("email");
    if(!email){
      alert("No email address found");
      return;
    }

    axios.get(`http://ec2-3-129-61-255.us-east-2.compute.amazonaws.com:8086/wishlist/addtowishlist/${id}/${email}`)
    .then(() =>{

      // alert message
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Wow!',
        text: 'Event added to wishlist successfully!',
        showConfirmButton: true,
        timer: 10000
      })
    })
    .catch(error => {
      console.error("Error adding event to wishlist : ",error);
    });
  };


  // const handleSearch = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:8084/events/getEventDetails/${id}`);
  //     setEvents(response?.data);
  //   } catch (error) {
  //     console.error(error);
  //     navigate('/event')
  //     Swal.fire({
  //       position: 'center',
  //       icon: 'error',
  //       title: 'Oops! Something went wrong!',
  //       text: 'Please enter a valid event id',
  //       showConfirmButton: true,
  //       timer: 10000
  //     })
  //   }
  // };

  return (
    <>
    <Navbars />
    <div>
        {/* <Form className="d-flex">
          <Form.Control
            type="id"
            placeholder="Search Events By Id"
            className="me-2 rounded-pill"
            aria-label="Search"
            value={id}
            style={{ width: "400px", height: "40px", marginLeft: "70px", marginTop: "20px" }}
            onChange={(e) => {
              setSearch(e.target.value);
              // setContent("");
            }}
          />
          <Button
            className="rounded-pill"
            style={{ width: "100px", height: "42px", marginTop: "20px" }}
            onClick={handleSearch}
            variant="info"
          >
            Search
          </Button>
        </Form> */}
      </div>
      <h4 className="text-center" style={{ marginBottom: 5, marginTop: 20 }}>LIST OF EVENTS</h4>
    <Container>
      <Row md={3}>
        {events.map((event) => (
          <Col key={event.id}>
            <Card style={{ margin: "10px" }}>
              <Card.Img variant="top" src={event.performers[0].image} />
              <Card.Body>
                <Card.Title>{event.performers[0].name}</Card.Title>
                <Card.Text>
                <strong>Event ID:</strong> {event.id} <br />
                  <strong>Event Name:</strong> {event.type} <br />
                  <ListGroup><b>Venue:</b>
                    <ListGroup.Item>
                    <b>Country: </b>
                    {event.venue.country}
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <b>State: </b>
                    {event.venue.state}
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <b>City: </b>
                    {event.venue.city}
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <b>Address: </b>
                    {event.venue.address}
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <b>Postal Code: </b>
                    {event.venue.postal_code}
                    </ListGroup.Item>
                    <Button variant="primary" onClick={() => addToWishlist(event.id)} style={{marginTop:"20px",borderRadius:20}}>Add to Wishlist</Button>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <Footers />
    </>
  );
}

export default Events;



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Button, Container, Table } from "react-bootstrap";
// import Navbars from "../../layouts/Navbars";
// import Footers from "../../layouts/Footers";
// import Swal from "sweetalert2";

// function Events() {
//   const [events, setEvents] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     axios.get('http://localhost:8081/events/getAllEvents')
//             .then(response => {
//                 // console.log('Received data:', response.data);
//                 // console.log('Type of received data:', typeof response.data);

//                 if(response.data && Array.isArray(response.data.events)){
//                     setEvents(response.data.events);
//                 }else{
//                     setError('Data recieved is not in the expected format');
//                 }
                
//             })
//             .catch(error => {
//                 console.error('Error fetching event data:', error);
//                 setError('Error fetching event data');
//             });
//     }, []);


//   if (error) {
//     return <Container>Error: {error}</Container>;
//   }

//   const addToWishlist = (id) =>{
//     const email = localStorage.getItem("email");
//     if(!email){
//       alert("No email address found");
//       return;
//     }

//     axios.get(`http://localhost:8086/wishlist/addtowishlist/${id}/${email}`)
//     .then(() =>{

//       // alert message
//       Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: 'Wow!',
//         text: 'Event added to wishlist successfully!',
//         showConfirmButton: true,
//         timer: 10000
//       })
//     })
//     .catch(error => {
//       console.error("Error adding event to wishlist : ",error);
//     });
//   };

//   return (
//     <div>
//         <Navbars />
//     <Container>
//         <div class="headers">
//         <h1 class="display-5">List of all events</h1>
//         </div>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Event ID</th>
//             <th>Event Name</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {events.map((event) => (
//             <tr key={event.id}>
//               <td>{event.id}</td>
//               <td>{event.type}</td>
//               <td><Button variant="primary" onClick={() => addToWishlist(event.id)}>Add to Wishlist</Button></td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </Container>
//     <Footers />
//     </div>
//   );
// }

// export default Events;