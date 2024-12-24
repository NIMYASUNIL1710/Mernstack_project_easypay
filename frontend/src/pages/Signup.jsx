import axios from "axios";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { BottomWarning } from "../components/BottomWarning";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div
      className="h-screen flex flex-col overflow-y-auto bg-cover bg-center"
      style={{ backgroundImage: "url('/background3.jpg')" }}
    >
      {/* Signup Form */}
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="rounded-lg bg-white w-80 text-center p-4 shadow-2xl">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
            label={"First Name"}
          />
          <InputBox
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
            label={"Last Name"}
          />
          <InputBox
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your Email"
            label={"Email"}
          />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            label={"Password"}
          />
          <div className="pt-4">
            <Button
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/user/signup",
                  {
                    username,
                    firstName,
                    lastName,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
              }}
              label={"Sign up"}
            />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>

      {/* Additional Content */}
      <div className="mt-10 mx-auto w-4/5 text-center shadow-xl bg-opacity-80 bg-gray-800 p-6 rounded-lg">
        <h1 className="text-xl font-bold text-white">Welcome to EasyPay,</h1>
        <h3 className="text-lg font-semibold text-white mt-4">
          Keep everything protected in one place, no matter where you go with
          the new EasyPay Wallet.
          <br />
          Access essentials like your loyalty cards, concert tickets, boarding
          passes, and more - all from your Android phone.
        </h3>
        <p className="text-white mt-6">
          Manage your account, track transactions, and enjoy secure online
          payments with EasyPay. Log in to explore our services or sign up for
          an account today! With EasyPay Wallet, you’re in control of your Money.
          Protect your personal information wherever you go. EasyPay Wallet
          gives you advanced security and easy-to-use privacy controls so you
          and your information stay safe every day.
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-8 bg-black text-white text-center py-4 shadow-lg">
        <p>&copy; 2024 EasyPay, nimyasunilb | All Rights Reserved</p>
        <div>
          <a href="/privacy-policy" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" className="text-blue-500 hover:underline">
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Signup;
