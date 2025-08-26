import { getAuth } from "firebase/auth";

export const checkValidData = (email, password) => {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const passwordRegex =
     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!emailRegex.test(email)) return "check Email";
    if (!passwordRegex.test(password)) return "check Password";
    return null;


}

