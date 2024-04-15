import { collection, addDoc, Timestamp } from "firebase/firestore/lite";
import { db } from "@/config/fireBase-config/firebase";
import axios from "axios";
const sendContactForm = async (payload) => {

  try {
    payload.sentAt = Timestamp.now().toDate();
   const response = await axios({
      method: "POST",
      url: "https://ctinstitute-contact-form-default-rtdb.firebaseio.com/Contacts.json",
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(payload)
    });
    return { code: 200, message: "Thank you for your valuable comment!"}
  } catch (error) {
    return {
      code: error.code,
      message: "Something went wrong! Please try again",
      error,
    };
  }
};

export { sendContactForm };
