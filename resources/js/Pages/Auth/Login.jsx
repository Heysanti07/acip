import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <>
            <Head title="Login" />

            {/* Botón ACIPTUR arriba a la izquierda */}
            <div className="absolute top-4 left-4">
                <Link
                    href="/"
                    className="px-4 py-2 bg-green-600 text-white font-bold rounded hover:bg-green-700 transition"
                >
                    ACIPTUR
                </Link>
            </div>

            <div className="min-h-screen flex">
                {/* Sección izquierda: login */}
                <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-8">
                    <div className="max-w-md w-full">
                        <h1 className="text-2xl font-bold mb-6 text-green-700">Inicie Sesión</h1>

                        <form onSubmit={submit} className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-green-700">
                                    Correo Electrónico
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData("email", e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-green-200 focus:border-green-500"
                                    required
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-green-700">
                                    Contraseña
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    value={data.password}
                                    onChange={(e) => setData("password", e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-green-200 focus:border-green-500"
                                    required
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                                )}
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={data.remember}
                                        onChange={(e) => setData("remember", e.target.checked)}
                                        className="rounded border-gray-300 text-green-600 shadow-sm focus:ring-green-500"
                                    />
                                    <span className="ml-2 text-sm text-green-700">Recuérdame</span>
                                </label>

                                {/* <Link
                                    href={route("password.request")}
                                    className="text-sm text-green-600 hover:underline"
                                >
                                    Forgot password?
                                </Link> */}
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
                            >
                                Inicie Sesion
                            </button>
                        </form>
                    </div>
                </div>

                {/* Sección derecha: imagen */}
                <div className="hidden md:flex w-1/2 bg-gray-100">
                    <img
                        src="img/Diapositiva1.JPG"
                        alt="Login illustration"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </>
    );
}
