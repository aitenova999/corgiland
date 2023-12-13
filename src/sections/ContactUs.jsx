//  import React, { useState } from "react";
//  import Button from "../components/Button";

// const initialValues = {
//   user_name: "",
//   user_email: "",
//   //user_address: "", // Added user_address to initialValues
//   message: "",
// };

// //https://docs.google.com/forms/d/e/1FAIpQLSf-AefPh9U76UsdbAk3f3tRJ4VLXSCiaUXypEwe0cenA4t4Zg/formResponse
// //entry.642066414=Aida777
// //entry.2005906017=aida.aitenova@yahoo.com777
// //entry.1663541814=hello777

// const ContactUs = () => {
//   const [values, setValues] = useState(initialValues);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     setValues((prevValues) => ({
//       ...prevValues, // Use prevValues instead of values
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (values) {
//       const { user_name, user_email, user_address, message } = values; // Destructure values object
//       console.log(user_name, user_email, user_address, message); // Example of using the values
//       const formData = {
//         "entry.642066414": user_name,
//         "entry.2005906017": user_email,
//         "entry.1663541814": message,
//       };
//       return formData;
//     }
//   };

//   return (
//     <section className="w-full flex xl:flex-row max-sm:flex-col justify-center min-h-screen gap-10 max-container ">
//       <div className="  flex flex-1 justify-center   flex-col px-4 ml-4 ">
//         <h2 className="flex justify-start mt-4 mb-8 ml-8 font-playfair bold  text-cyan-800  text-4xl max-sm:text-[52px] max-sm:leading-[82px] font-bold">
//           Contact Us
//         </h2>
//         <form
//           action="https://docs.google.com/forms/d/e/1FAIpQLSf-AefPh9U76UsdbAk3f3tRJ4VLXSCiaUXypEwe0cenA4t4Zg/formResponse"
//           method="post"
//           onSubmit={handleSubmit}
//           className="flex flex-col border-solid rounded-md bg-teal-100 font-playfair bold  text-cyan-800 text-lg py-4 px-4 max-md:w-full "
//         >
//           <label className="py-3 px-3">Name</label>
//           <input
//             className="py-3 px-3 rounded-md"
//             type="text"
//             id="name"
//             placeholder="Full Name"
//             name="entry.642066414"
//             value={values.user_name}
//             onChange={handleInputChange}
//             required
//           />
//           <label className="py-4 px-4">Email</label>
//           <input
//             type="email"
//             id="email"
//             placeholder="Email"
//             name="entry.2005906017"
//             value={values.user_email}
//             onChange={handleInputChange}
//             required
//             className="py-4 px-4 rounded-md"
//           />
//           {/* <label className="py-4 px-4">Full address</label>
//           <input
//             type="text"
//             placeholder="Home address"
//             name="user_address"
//             value={values.user_address}
//             onChange={handleInputChange}
//             required
//             className="py-4 px-4 rounded-md"
//           /> */}
//           <label className="py-4 px-4">Message</label>
//           <textarea
//             name="entry.1663541814"
//             id="message"
//             cols="30"
//             rows="10"
//             value={values.message}
//             onChange={handleInputChange}
//           ></textarea>
//           <div className="flex justify-center pt-3">
//             <Button label="Send Message" />
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;
import React, { useState } from "react";
import Button from "../components/Button";

const initialValues = {
  user_name: "",
  user_email: "",
  message: "",
};

const ContactUs = () => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values) {
      const { user_name, user_email, message } = values;
      console.log(user_name, user_email, message);

      //https://docs.google.com/forms/d/e/1FAIpQLSf-AefPh9U76UsdbAk3f3tRJ4VLXSCiaUXypEwe0cenA4t4Zg/viewform?usp=pp_url&entry.642066414=Aida999&entry.2005906017=aida.aitenova@yahoo.com999&entry.1663541814=hi999

      // Submit form data to Google Sheets
      const formUrl =
        // "https://docs.google.com/forms/d/e/AKfycbxmHV7V3ijhMjUJVYuGMhJrUNVCYlEKmEihVYHMy0fXZyZx_R32M-Iq_zIn4xvpyxIScQ/formResponse";
        "https://docs.google.com/forms/d/e/1FAIpQLSf-AefPh9U76UsdbAk3f3tRJ4VLXSCiaUXypEwe0cenA4t4Zg/formResponse";

      const formData = new FormData();
      formData.append("entry.642066414", user_name);
      formData.append("entry.2005906017", user_email);
      formData.append("entry.1663541814", message);

      fetch(formUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      })
        .then((response) => {
          console.log("Form submission successful!");
          // Handle successful submission, e.g., show success message
          // ...
        })
        .catch((error) => {
          console.error("Form submission failed:", error);
          // Handle submission error, e.g., show error message
          // ...
        });
    }
  };

  return (
    <section className="w-full flex xl:flex-row max-sm:flex-col justify-center min-h-screen gap-10 max-container">
      <div className="flex flex-1 justify-center flex-col px-4 ml-4">
        <h2 className="flex justify-start mt-4 mb-8 ml-8 font-playfair bold text-cyan-800 text-4xl max-sm:text-[52px] max-sm:leading-[82px] font-bold">
          Contact Us
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col border-solid rounded-md bg-teal-100 font-playfair bold text-cyan-800 text-lg py-4 px-4 max-w-sm"
        >
          <label className="py-3 px-3">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Full Name"
            name="user_name"
            value={values.user_name}
            onChange={handleInputChange}
            required
            className="py-3 px-3 rounded-md"
          />
          <label className="py-4 px-4">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="user_email"
            value={values.user_email}
            onChange={handleInputChange}
            required
            className="py-4 px-4 rounded-md"
          />
          <label className="py-4 px-4">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={values.message}
            onChange={handleInputChange}
          ></textarea>
          <div className="flex justify-center pt-3">
            <Button label="Send Message" type="submit" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
