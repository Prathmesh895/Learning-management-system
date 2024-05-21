'use client'
import Image from "next/image";
import LogImg from '/public/login-security.gif';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation"; 
import { getSession } from "next-auth/react";
import { toast } from "react-toastify";

function LoginForm() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        general: ''
    });

    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let newErrors = {};
        if (!email) newErrors.email = "Enter the email";
        if (!password) newErrors.password = "Enter the password"

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setErrors(prevState => ({ ...prevState, general: 'All fields are necessary' }));
            return;
        }
    
        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (res.error) {
                setError("Invalid Credentials !");
                toast.error("Invalid Credentials");
                return;
            } else {
                setError("");
            }

            // Get session after successful sign-in
            const session = await getSession();

            if (session) {
                // Check user role and redirect accordingly
                const isAdmin = session.user.role;
                if (isAdmin === 'admin') {
                    router.replace("/admin");
                    toast.success("Welcome Admin")
                } else {
                    router.replace("/");
                    toast.success("Login Sucessfully");
                    toast.success('Welcome')
                }
            } else {
                setError("Session not found");
            }
        } catch (error) {
            console.log(error);
            toast.error(error)
        }
    }

    return (
        <main className='md:m-28 '>
            <section className='md:flex md:m-0 lg:m-8'>
                <div className='md:w-1/2 h-[100%] w-[90%] md:flex md:justify-center flex justify-center ml-4'>
                    <Image src={LogImg} alt="" className="md:w-2/3" />
                </div>
                {/* code for right side login form */}
                <div className='md:w-1/2 md:mt-0 mt-10 bg-white lg:flex lg:justify-center lg:w-[40%]'>
                    <div className="m-5">
                        <h1 className="text-3xl font-bold text-gray-500">Log in <span className="text-indigo-600">!</span></h1><br />
                        <p>Explore, learn, and grow with us. enjoy a seamless and enriching educational journey. lets begin!</p><br /><br />
                        <form onSubmit={handleSubmit} className="flex flex-col justify-center">
                            <label htmlFor="">Your email</label>
                            <input type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`${errors.email && "border-red-500"}`}
                                placeholder="Enter your email"
                            />
                            <span className="text-red-600 text-sm">{errors.email}</span><br />

                            {/* Password & show password code */}
                            <label htmlFor="">Password</label>
                            <div className="relative">
                                <input type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    value={password}
                                    className={` w-[100%] focus:shadow-outline ${errors.password ? "border-red-500 " : 'focus:ring-indigo-500 focus:border-indigo-500 border-gray-300'}`}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span className="text-red-600 text-sm">{errors.password}</span>
                                <button onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 mr-3 mb-5">
                                    {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                                </button>
                                <br />
                                <span className="relative right-0"><Link href=''>Forgot password?</Link></span>
                            </div>
                            <center>
                                <div className=" text-red-500 w-fit text-sm py-1 px-3 rounded-md mt-2">
                                    {errors.general}
                                </div>
                            </center>
                            <center>
                                <div className=" text-red-500 w-fit text-sm py-1 px-3 rounded-md mt-2">
                                    {error}
                                </div>
                            </center>

                            <button className="bg-indigo-600  text-white p-2 my-5 rounded font-bold">Log in</button>

                        </form>
                        <h1>Don't have an account? <span className="text-blue-600"><Link href='/register'>Sign up</Link></span></h1><br />
                        <div className="flex items-center">
                            <hr className="flex-grow border-gray-400 h-0" />
                            <span className="px-4 text-gray-700">Or</span>
                            <hr className="flex-grow border-gray-400 h-0" />
                        </div><br />
                        <div className="flex justify-center bg-indigo-600  text-white font-bold  p-2 rounded ">Continue with Google</div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default LoginForm;
