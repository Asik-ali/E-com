import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import { auth } from '../../fireabase/FirebaseConfig';
import { toast } from 'react-toastify';
import Loader from '../../components/loader/Loader';

function Login() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    let confirmationResult = null;

    const handlePhoneSignIn = async () => {
        setLoading(true);
        try {
            // Send OTP to the user's phone number
            const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber);
            toast.success("OTP sent successfully", {
                // Your toast configuration
            });
    
            // Save the confirmation result to use it later during verification
            window.confirmationResult = confirmationResult;
        } catch (error) {
            console.error(error);
            toast.error("Failed to send OTP", {
                // Your toast configuration for error
            });
        } finally {
            setLoading(false);
        }
    };
    
    const handlePhoneSignInVerification = async () => {
        setLoading(true);
        try {
            // Verify the OTP entered by the user
            const credential = await confirmationResult.confirm(verificationCode);
            // You can use the credential to authenticate the user further if needed
            toast.success("Phone number verification successful", {
                // Your toast configuration
            });
            localStorage.setItem('user', JSON.stringify(credential.user));
            navigate('/');
        } catch (error) {
            console.error(error);
            toast.error("Failed to verify phone number", {
                // Your toast configuration for error
            });
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div className='flex justify-center items-center h-screen'>
            {loading && <Loader />}
            <div className='bg-gray-800 px-10 py-10 rounded-xl '>
                <div>
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
                </div>
                <div>
                    <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Phone Number'
                    />
                    <button
                        onClick={handlePhoneSignIn}
                        className='bg-yellow-500 w-full text-black font-bold px-2 py-2 rounded-lg'
                    >
                        Send OTP
                    </button>
                    <input
                        type="text"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Enter OTP'
                    />
                    <button
                        onClick={handlePhoneSignInVerification}
                        className='bg-yellow-500 w-full text-black font-bold px-2 py-2 rounded-lg'
                    >
                        Verify OTP
                    </button>
                </div>
                <div className='flex justify-center mb-3'>
                    <button
                        className='bg-yellow-500 w-full text-black font-bold px-2 py-2 rounded-lg'
                        onClick={() => navigate('/signup')}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
