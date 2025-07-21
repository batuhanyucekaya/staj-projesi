"use client"

import React, { useState } from "react"

export default function AuthCard() {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <div className="bg-white text-black rounded-lg shadow-md p-6 w-full max-w-md mx-auto mt-20">
            <h2 className="text-2xl font-bold mb-4">
                {isLogin ? "Login" : "Register"}
            </h2>

            <form className="space-y-4">
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border rounded"
                    required
                />
                {!isLogin && (
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-2 border rounded"
                        required
                    />
                )}

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
                >
                    {isLogin ? "Login" : "Register"}
                </button>
            </form>

            <p className="text-sm mt-4 text-center">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-blue-600 hover:underline"
                >
                    {isLogin ? "Register" : "Login"}
                </button>
            </p>
        </div>
    )
}
