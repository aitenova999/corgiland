import { useRef, useState } from "react";
//import "./contact.css";
import { db } from "../firebase";
import { addDoc, collection, where, query, getDocs } from "firebase/firestore";
import Button from "../components/Button";
import { group2 } from "../assets/images";

const initialValues = {
  user_name: "",
  user_email: "",
  user_address: "",
  message: "",
};

const Contact = () => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values) {
      try {
        await addDoc(collection(db, "contacts"), {
          user_name: values.user_name,
          user_email: values.user_email,
          user_address: values.user_address,
          message: values.message,
        });
        //alert("Message was sent!");
      } catch (error) {
        console.error("Error submitting the form:", error);
      } finally {
        setValues(initialValues);
      }
    }
  };
  // const email = "aida.aitenova@yahoo.com.com";
  // const querySnapshot = await getDocs(
  //   query(collection(db, "contacts"), where("user_email", "==", email))
  // );

  // querySnapshot.forEach((doc) => {
  //   // Access each document's data here...
  // });

  return (
    <section className="w-full flex xl:flex-row max-sm:flex-col justify-center min-h-screen gap-10 max-container ">
      <div className="  flex flex-1 justify-center   flex-col px-4 ml-4 ">
        <h2 className="flex justify-start mt-4 mb-8 ml-8 font-playfair bold  text-cyan-800  text-4xl max-sm:text-[52px] max-sm:leading-[82px] font-bold">
          Contact Us
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col border-solid rounded-md bg-teal-100 font-playfair bold  text-cyan-800 text-lg py-4 px-4 max-md:w-full "
        >
          <label className="py-3 px-3">Name</label>
          <input
            className="py-3 px-3 rounded-md"
            type="text"
            placeholder="Full Name"
            name="user_name"
            value={values.user_name}
            onChange={handleInputChange}
            required
          />
          <label className="py-4 px-4">Email</label>
          <input
            type="email"
            placeholder="Email"
            name="user_email"
            value={values.user_email}
            onChange={handleInputChange}
            required
            className="py-4 px-4 rounded-md"
          />
          <label className="py-4 px-4">Full address</label>
          <input
            type="text"
            placeholder="Home address"
            name="user_address"
            value={values.user_address}
            onChange={handleInputChange}
            required
            className="py-4 px-4 rounded-md"
          />
          <label className="py-4 px-4">Message</label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            value={values.message}
            onChange={handleInputChange}
          ></textarea>
          {/* <button
            type="submit"
            className="py-4 hover:text-white  rounded-md border-white "
          >
            Send Message
          </button> */}
          <div className="flex justify-center pt-3">
            <Button label="Send Message" />
          </div>
        </form>
      </div>
      <div className="flex flex-1 justify-center   flex-col px-4 ml-4 my-8 max-sm:mt-3">
        <img src={group2} className="rounded-lg" />
      </div>
    </section>
  );
};

export default Contact;
