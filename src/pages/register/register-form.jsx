// import { sendContactForm } from "@/services";
import { sendContactForm } from "../../services";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css'

function CourseRegister() {
  const [openPopup, setOpenPopup] = useState(false); // pop-up state
  const [contact, setContact] = useState({
    mobile_number: "",
    full_name: "",
    email: "",
  });
  const [initialVal, setInitialVal] = useState({
    mobile_number_err: false,
    full_name_err: false,
    email_err: false,
  });
  const handleChange = (event) => {
    setContact((preProps) => ({
      ...preProps,
      [event.target.name]: event.target.value,
    }));
  };

  //**  */
  useEffect(() => {
    var isRegister = "";
    if (typeof window !== "undefined" && window.localStorage) {
      isRegister = localStorage.getItem("register");
    }
    console.log("isRegister=======", isRegister);
    setInterval(
      () => {
        if (isRegister || isRegister === true) setOpenPopup(false);
        else if (!isRegister || isRegister === undefined || isRegister === null)
          setOpenPopup(true);
      },
      1 * 60 * 1000
      // 10000
    );
  }, []);

  const isValidationCheck = () => {
    let isValid = true;
    if (contact.mobile_number == "" || contact.mobile_number === undefined) {
      isValid = false;
      setInitialVal((preProps) => ({
        ...preProps,
        mobile_number_err: "Mobile number is required",
      }));
    } else {
      setInitialVal((preProps) => ({ ...preProps, mobile_number_err: "" }));
    }
    if (contact.full_name == "" || contact.full_name === undefined) {
      isValid = false;
      setInitialVal((preProps) => ({
        ...preProps,
        full_name_err: "Name is required",
      }));
    } else {
      setInitialVal((preProps) => ({ ...preProps, full_name_err: "" }));
    }
    if (contact.email == "" || contact.email === undefined) {
      isValid = false;
      setInitialVal((preProps) => ({
        ...preProps,
        email_err: "Email is required",
      }));
    } else {
      setInitialVal((preProps) => ({ ...preProps, email_err: "" }));
    }
    return isValid;
  };

  const closePopUp = () => setOpenPopup(false);
  if (openPopup !== true) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { full_name, email, mobile_number } = contact;
    const payload = {
      name: full_name,
      email: email,
      mobileNumber: mobile_number,
    };
    var isValid = isValidationCheck();
    if (isValid) {
      const response = await sendContactForm(payload);
      if (response.code == 200) {
        await toast.success(response.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setContact({
          email: "",
          full_name: "",
          mobile_number: ""
        });
        if (typeof window !== "undefined" && window.localStorage) {
          localStorage.setItem("register", true);
        }
        setOpenPopup(false);
      } else {
        console.log({ error: response.error, message: response.message });
        await toast.error(response.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };
  return (
    <>
    {/* <ToastContainer/> */}
      <div
        // className="fixed top-0 left-0 flex min-h-screen items-center justify-center bg-gray-800 bg-opacity-75"
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm bg-opacity-75"
      >
        {/* <div className="flex min-h-screen backdrop-blur-sm bg-opacity-75"> */}
        <div className="relative flex justify-center max-w-xl py-4 m-auto bg-white-500 shadow-2xl">
          <span
            id="ModelContainer"
            onClick={closePopUp}
            className="absolute top-0 right-0 block w-10 h-5 -mt-2 -mr-4 text-xs text-center text-gray-600 transform rotate-45 bg-white rounded shadow-md cursor-pointer hover:bg-gray-100"
          >
            close
          </span>
          <div
            className="w-1/2 ml-4 bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1601805215126-9df64231459b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=mojtaba-mosayebzadeh-mR_fsL-KbEg-unsplash.jpg&w=640')",
            }}
          ></div>
          <div className="flex flex-col justify-between w-1/2 px-4 space-y-16">
            <div>
              <h1 className="mb-2 text-xl font-bold leading-tight">
                Let&apos;s connect. We are just a click away!
              </h1>
              <p className="text-sm text-gray-700">
                We believe in giving the right guidance. Our team of career
                guide are ready to hear from you.
              </p>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  className={`w-full px-5 py-3 border rounded focus:border-blue-500 focus:outline-none 
                  ${
                    initialVal.full_name_err &&
                    "border-b border-danger shadow-sm shadow-danger"
                  }`}
                  type="text"
                  name="full_name"
                  value={contact.full_name}
                  onChange={(e) => handleChange(e)}
                  placeholder="Enter your name"
                />
                <input
                  // className="w-full px-5 py-3 border rounded focus:border-blue-500 focus:outline-none mt-2"
                  className={`w-full px-5 py-3 border rounded focus:border-blue-500 focus:outline-none mt-2
                  ${
                    initialVal.email_err &&
                    "border-b border-danger shadow-sm shadow-danger"
                  }`}
                  type="email"
                  name="email"
                  value={contact.email}
                  onChange={(e) => handleChange(e)}
                  placeholder="Email address"
                />
                <input
                  // className="w-full px-5 py-3 border rounded focus:border-blue-500 focus:outline-none mt-2"
                  className={`w-full px-5 py-3 border rounded focus:border-blue-500 focus:outline-none mt-2
                  ${
                    initialVal.mobile_number_err &&
                    "border-b border-danger shadow-sm shadow-danger"
                  }`}
                  type="text"
                  name="mobile_number"
                  value={contact.mobile_number}
                  onChange={(e) => handleChange(e)}
                  min={10}
                  placeholder="Enter mobile number"
                />
                <button
                  className="block w-full py-3 mt-3 text-white-300 bg-blue-500 rounded shadow-lg hover:bg-blue-600"
                  type="submit"
                >
                  Register
                </button>
              </form>
              <ul className="flex justify-center mt-4 space-x-3 text-xs text-gray-700">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="w-5 h-5 mr-1 text-green-500 fill-current"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p>No spam</p>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="w-5 h-5 mr-1 text-green-500 fill-current"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p>No hassle</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
export default CourseRegister;
