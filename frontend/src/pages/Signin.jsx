import { useState } from "react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState(""); // To store error messages

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
        return emailRegex.test(email);
    };

    const handleSignin = async () => {
        if (!isValidEmail(username)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (!password) {
            setError("Password is required.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                username,
                password,
            });
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
        } catch (error) {
            console.error("Signin failed", error);
            setError("Invalid email or password.");
        }
    };

    return (
        <div
            className="min-h-screen"
            style={{
                backgroundImage: "url('background2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="flex flex-col justify-between min-h-screen">
                {/* Signin Form */}
                <div className="mt-8 mx-auto w-full max-w-md px-4">
                    <div className="rounded-lg bg-white text-center p-6 shadow-lg">
                        <Heading label={"Sign in"} />
                        <SubHeading label={"Enter your credentials to access your account"} />

                        {/* Email Input */}
                        <InputBox
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder={"Enter your registered email"}
                            label={"Email"}
                        />

                        {/* Password Input */}
                        <div className="relative mt-4">
                            <InputBox
                                type={passwordVisible ? "text" : "password"}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder={"Enter your password"}
                                label={"Password"}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-blue-500"
                            >
                                {passwordVisible ? "Hide" : "Show"}
                            </button>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <p className="text-red-500 text-sm mt-2">{error}</p>
                        )}

                        {/* Signin Button */}
                        <div className="pt-4">
                            <Button onClick={handleSignin} label={"Sign in"} />
                        </div>

                        <p className="mt-2">
                            Don't have an account?{" "}
                            <span
                                style={{ cursor: "pointer" }}
                                onClick={() => navigate("/signup")}
                                className="text-blue-500 hover:underline"
                            >
                                Signup
                            </span>
                        </p>
                    </div>
                </div>
                                {/* Additional Content Section */}
<div
    className="mt-10 mx-auto w-full max-w-4xl px-6 text-center bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/background5.jpg')" }}
>
    <h1 className="text-2xl font-bold text-black mb-4">
        Why Choose EasyPay?
    </h1>
    <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 w-full">
        <p className="text-lg text-black">
            EasyPay simplifies your financial transactions with state-of-the-art security, 
            seamless usability, and lightning-fast performance. Here’s why thousands of users 
            trust EasyPay:
        </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Feature 1 */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-black">Secure Payments</h3>
            <p className="text-black mt-2">
                With advanced encryption and privacy controls, your data and transactions 
                are always secure.
            </p>
        </div>
        {/* Feature 2 */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-black">Real-Time Tracking</h3>
            <p className="text-black mt-2">
                Stay updated with instant notifications and real-time transaction tracking.
            </p>
        </div>
        {/* Feature 3 */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-black">All-in-One Wallet</h3>
            <p className="text-black mt-2">
                Manage loyalty cards, tickets, boarding passes, and payments all in one 
                place.
            </p>
        </div>
    </div>
    <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 w-full mt-6">
    <p className="text-lg text-black">
        Join our community of happy users and take control of your finances today. Whether 
        you’re shopping online, booking a ticket, or simply paying a friend, EasyPay is your 
        trusted companion.
    </p>
</div>

</div>
         

                {/* Footer */}
                <footer className="mt-8 bg-black text-white text-center py-4">
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
        </div>
    );
};

export default Signin;
