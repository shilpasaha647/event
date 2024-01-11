// import ListGroup from "react-bootstrap/ListGroup";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Table, Form, Button } from "react-bootstrap";
// import Navbars from "../../layouts/Navbars";
// import Swal from "sweetalert2";

// function WishlistPage() {
//   const [email, setEmail] = useState("");
//   const [wishList, setWishList] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const fetchWishlist = () => {
    
//     setIsLoading(true);
//     axios
//       .get(`http://localhost:8086/wishlist/${email}`)
//       .then((response) => {
//         setWishList(response.data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data: ", error);
//         setIsLoading(false);
//       });
//   };

//   const deleteWishlistItem = async (eventid,email) => {
//     try {
//         Swal.fire({
//             title: 'Are you sure?',
//             text: "You won't be able to revert this!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, delete it!'
//         }).then(async (result) => {
//             if (result.isConfirmed) {
//                 await axios.delete(`http://localhost:8086/wishlist/delete/${eventid}/${email}`); // Replace with your backend API endpoint
//                 fetchWishlist();
//                 Swal.fire(
//                     'Deleted!',
//                     'Your file has been deleted.',
//                     'success'
//                 )
//             }
//         })
//     } catch (error) {
//         console.error(error);
//         // Handle error, e.g., show an error message
//     }
//       };

//   useEffect(() => {
//     // Optionally, you can fetch the wishlist for a default email on component mount
//     // fetchWishlist('default@email.com');
//   }, []);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     fetchWishlist();
//   };

//   return (
//     <>
//       <Navbars />
      
//         <div>
//         <Form  className="d-flex" onSubmit={handleSearch}>
//             <Form.Control
//               type="email"
//               placeholder="Please enter email to find wishlist item"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               style={{marginTop:10,width:300,marginBottom:20,marginLeft:40}}
//             />
//             <Button variant="primary" type="submit" disabled={isLoading} style={{height:"38px",marginLeft:10,marginTop:10}}>
//             {isLoading ? "Loading…" : "Search"}
//           </Button>
//         </Form>
//         </div>
//         <div class="headers">
//         <h1 class="display-6">Wishlist</h1>
//         </div>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Event ID</th>
//             {/* <th>Email</th> */}
//             <th>Event Name</th>
//             <th>Country</th>
//             <th>City</th>
//             <th>Address</th>
//             <th>Postal Code</th>
//             <th>Performers</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {wishList.map((item) => (
//             <tr key={item.eventid}>
//               <td>{item.eventid}</td>
//               {/* <td>{item.email}</td> */}
//               <td>{item.eventtype}</td>
//               <td>{item.country}</td>
//               <td>{item.city}</td>
//               <td>{item.address}</td>
//               <td>{item.postalcode}</td>
//               <td>
//                 {item.performers.map((performer, index) => (
//                   // <div key={index}>
//                   <ListGroup key={index}>
//                     <ListGroup.Item>
//                       <b>Id : </b>
//                       {performer.id}
//                     </ListGroup.Item>
//                     <ListGroup.Item>
//                       <b>Type : </b>
//                       {performer.type}
//                     </ListGroup.Item>
//                     <ListGroup.Item>
//                       <b>Name : </b>
//                       {performer.name}
//                     </ListGroup.Item>
//                   </ListGroup>
//                   //   {performer.id} - {performer.type} - {performer.name}
//                   // </div>
//                 ))}
//               </td>
//               <td>
//             <Button variant="danger" onClick={()=> deleteWishlistItem(item.eventid,item.email)}>Delete</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </>
//   );
// }

// export default WishlistPage;

import ListGroup from "react-bootstrap/ListGroup";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import Navbars from "../../layouts/Navbars";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

function WishlistPage() {
  //const [email, setEmail] = useState("");
  const [wishList, setWishList] = useState([]);
 // const navigate= useNavigate();
  const fetchWishlist = () => {
    const email = localStorage.getItem("email");
    if(!email){
      alert("No email address found");
      return;
     //navigate("/login");
    }
    axios
      .get(`http://ec2-3-129-61-255.us-east-2.compute.amazonaws.com:8086/wishlist/${email}`)
      .then((response) => {
        setWishList(response.data);
       
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
    
      });
  };

  const deleteWishlistItem = async (eventid,email) => {
    try {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(`http://ec2-3-129-61-255.us-east-2.compute.amazonaws.com:8086/wishlist/delete/${eventid}/${email}`); // Replace with your backend API endpoint
                fetchWishlist();
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    } catch (error) {
        console.error(error);
        // Handle error, e.g., show an error message
    }
      };

  useEffect(() => {
    fetchWishlist();
    // Optionally, you can fetch the wishlist for a default email on component mount
    // fetchWishlist('default@email.com');
  }, []);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     fetchWishlist();
//   };

  return (
    <>
      <Navbars />
      
        <div>
        {/* <Form  className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="email"
              placeholder="Please enter email to find wishlist item"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{marginTop:10,width:300,marginBottom:20,marginLeft:40}}
            />
            <Button variant="primary" type="submit" disabled={isLoading} style={{height:"38px",marginLeft:10,marginTop:10}}>
            {isLoading ? "Loading…" : "Search"}
          </Button>
        </Form> */}
        </div>
        <div class="headers">
        <h1 class="display-6">Wishlist</h1>
        </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Event ID</th>
            {/* <th>Email</th> */}
            <th>Event Name</th>
            <th>Country</th>
            <th>City</th>
            <th>Address</th>
            <th>Postal Code</th>
            <th>Performers</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {wishList.map((item) => (
            <tr key={item.eventid}>
              <td>{item.eventid}</td>
              {/* <td>{item.email}</td> */}
              <td>{item.eventtype}</td>
              <td>{item.country}</td>
              <td>{item.city}</td>
              <td>{item.address}</td>
              <td>{item.postalcode}</td>
              <td>
                {item.performers.map((performer, index) => (
                  // <div key={index}>
                  <ListGroup key={index}>
                    <ListGroup.Item>
                      <b>Id : </b>
                      {performer.id}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <b>Type : </b>
                      {performer.type}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <b>Name : </b>
                      {performer.name}
                    </ListGroup.Item>
                  </ListGroup>
                  //   {performer.id} - {performer.type} - {performer.name}
                  // </div>
                ))}
              </td>
              <td>
            <Button variant="danger" onClick={()=> deleteWishlistItem(item.eventid,item.email)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default WishlistPage;