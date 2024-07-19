import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function LoginForm({ onLoginSuccess }) {
    const {
        register, 
        handleSubmit, 
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => { 
        axios.post('http://localhost:3000/auth/login', data, { withCredentials: true })
            .then(response => {
                console.log(response);
                if (onLoginSuccess) {
                    onLoginSuccess(); 
                }
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-12 bg-white shadow-md rounded-md space-y-4">
                <h2 className="text-2xl font-bold text-[#3778c2] pb-4">LOGIN</h2>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...register("email", { 
                            required: true,
                            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        })}
                    />
                    {errors.email && <span className="text-red-500">Invalid email</span>}
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...register("password", {
                            required: true,
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        })}
                    />
                    {errors.password && <span className="text-red-500">Invalid password</span>}
                </div>

                <div>
                    <input
                        type="submit"
                        value="Login"
                        className="w-full bg-[#3778c2] text-white py-2 px-4 rounded-md hover:bg-[#2e69ac] focus:outline-none focus:bg-[#2e69ac]"
                    />
                </div>
                <div className="mt-4 text-center">
                    <p className="text-sm">Don't have an account? <a href="/signup" className="text-blue-500">Sign Up here</a>.</p>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
