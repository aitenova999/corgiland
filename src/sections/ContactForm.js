// import React, { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";

// // const ContactForm = () => {
// //   const handleSubmit = (e) => {
// //     const formEle = document.querySelector("form");
// //     e.preventDefault();
// //     // console.log("submitted");
// //     const formData = new FormData(formEle);
// //     fetch(
// //       "https://script.google.com/macros/s/AKfycbw0MxEvMYRIOw1ZdxMnqn9Cma0cHxw7G_bOJ8sV9cvCREuSqak2M0hEqhlsSZftPLUL/exec",
// //       {
// //         method: "POST",
// //         mode: "no-cors",
// //         body: formData,
// //       }
// //     )
// //       .then((res) => res.json())
// //       .then((data) => {
// //         console.log(data);
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //       });
// //   };

// const ContactForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [data, setData] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const data = {
//       Name: name,
//       Email: email,
//       Message: message,
//     };
//     axios
//       .post(
//         "https://sheet.best/api/sheets/a7bdcbbf-1842-460c-b36a-3558a794a732",
//         data
//       )
//       .then((response) => {
//         setName("");
//         setEmail("");
//         setMessage("");
//       });
//   };

//   const getData = () => {
//     axios
//       .get("https://sheet.best/api/sheets/a7bdcbbf-1842-460c-b36a-3558a794a732")
//       .then((response) => {
//         setData(response.data);
//       });
//   };

//   useEffect(() => {
//     getData();
//   }, [data]);
//   return (
//     <div>
//       <h1>Contact Us</h1>
//       <form
//         autoComplete="off"
//         className=" form flex flex-col w-16"
//         onSubmit={handleSubmit}
//       >
//         <input
//           placeholder="Name"
//           name="name"
//           type="text"
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           placeholder="Email"
//           name="email"
//           type="email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           placeholder="Message"
//           name="message"
//           type="text"
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;
