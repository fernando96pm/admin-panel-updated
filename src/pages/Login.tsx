import CrysecLogo from "../assets/CrysecLogo.svg";
import { MdMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FormEvent } from "react";
import { useState } from "react";
import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [enteredPassword, setEnteredPassword] = useState<string>("");
  const [emailTouched, setEmailTouched] = useState<boolean>(false);
  const [passwordTouched, setPasswordTouched] = useState<boolean>(false);
  const navigate = useNavigate()

  const validateEmail = () => {
    let re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if(re.exec(enteredEmail) === null){
      return false
    }
    return true
  }

  let emailValid: boolean = validateEmail();
  let passwordValid: boolean = enteredPassword.trim().length > 0;
  let formIsValid = emailValid && passwordValid;
  
  const enteredEmailHandler = (event: ChangeEvent<HTMLInputElement>) => setEnteredEmail(event.target.value) 
  const enteredPasswordHandler = (event: ChangeEvent<HTMLInputElement>) => setEnteredPassword(event.target.value)
  const emailBlurHandler = () => setEmailTouched(true)
  const passwordBlurHandler = () => setPasswordTouched(true)

  

  let emailHasError = !emailValid && emailTouched
  let passwordHasError = !passwordValid && passwordTouched

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log({ email: enteredEmail, password: enteredPassword})
    setEmailTouched(false);
    setPasswordTouched(false);
    navigate("/admin")
  };

  let inputClasses: string =
    "border border-gray-300 rounded py-2 pr-3 pl-10 w-full focus:border-none focus:outline-[#00d4ff] focus:shadow-md focus:bg-[#e3faff]";
  let invalidInputClassess: string =
    "border border-[#ff1000] bg-[#FFAAAA] rounded py-2 pr-3 pl-10 w-full focus:border-none focus:outline-[#] focus:shadow-md";
    let emailErrorMessage = enteredEmail.trim().length > 0 ? 'Enter a valid email.' : 'Email cannot be empty'
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#215b73] to-[#50b2bf]">
      <form onSubmit={formSubmitHandler}>
        <div className="w-[330px] sm:w-[360px] bg-slate-100 rounded-md p-5 border-[2px] border-[#178997] flex-col justify-center items-center shadow-xl">
          <div className="mt-3 mb-6">
            <img src={CrysecLogo} />
          </div>
          <div className="relative mt-4 rounded shadow-sm text-sm sm:text-base">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <MdMail className="h-4 w-4 mx-3 text-gray-500" />
            </div>
            <input
              id="email"
              type="email"
              value={enteredEmail}
              onChange={enteredEmailHandler}
              onBlur={emailBlurHandler}
              placeholder="Email"
              className={emailHasError ? invalidInputClassess : inputClasses}
            />
          </div>
          {emailHasError && <p className="text-sm text-red-400 font-medium mt-1">{emailErrorMessage}</p>}
          <div className="relative mt-4 rounded shadow-sm text-sm sm:text-base">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <RiLockPasswordFill className="h-4 w-4 mx-3 text-gray-500" />
            </div>
            <input
              id="password"
              type="password"
              value={enteredPassword}
              onChange={enteredPasswordHandler}
              onBlur={passwordBlurHandler}
              placeholder="Password"
              className={passwordHasError ? invalidInputClassess : inputClasses}
            />
          </div>
          {passwordHasError && <p className="text-sm text-red-400 font-medium mt-1">Password cannot be empty.</p>}
          <div className="flex justify-center flex-1 mt-5 mb-2">
            <button
              disabled={!formIsValid}
              className="bg-[#178997] disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer text-base sm:text-lg font-medium text-slate-50 px-6 py-1 rounded-lg tracking-wider text-center hover:bg-[#215b73]"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;
