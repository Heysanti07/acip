import Dropdown from "@/Components/Dropdown";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function AuthenticatedLayout({ children }) {
    const user = usePage().props.auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white text-gray-800 flex flex-col shadow-md">
                {/* Logo */}
                <div className="flex items-center justify-start p-4">
                    <Link href="/">
                        <img
                            src="/img/Logo1.jpg"
                            alt="Logo"
                            className="h-12 w-auto"
                        />
                    </Link>
                </div>

                {/* Menú */}
                <nav className="flex-1 p-4 space-y-2">
                    <Link
                        href={route("dashboard")}
                        className={`block p-2 rounded hover:bg-green-500 transition-colors ${
                            route().current("dashboard") ? "bg-green-100" : ""
                        }`}
                    >
                        Dashboard
                    </Link>
                    <Link
                        href={route("profile.edit")}
                        className={`block p-2 rounded hover:bg-green-500 transition-colors ${
                            route().current("profile.edit")
                                ? "bg-green-100"
                                : ""
                        }`}
                    >
                        Perfil
                    </Link>
                    <Link
                        href={route("users.index")}
                        className={`block p-2 rounded hover:bg-green-500 transition-colors
        ${
            route().current("users.index")
                ? "border-green-500 bg-green-100"
                : "border-transparent hover:border-green-500 hover:bg-white"
        }`}
                    >
                        Listado de Usuarios
                    </Link>
                </nav>
            </aside>

            {/* Contenido principal */}
            <div className="flex-1 flex flex-col">
                {/* Barra superior con usuario */}
                <header className="flex justify-end items-center bg-white px-6 h-16">
                    <Dropdown>
                        <Dropdown.Trigger>
                            <span className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium leading-4 text-gray-700 hover:bg-gray-100">
                                {user.name}
                                <svg
                                    className="h-4 w-4 ml-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </Dropdown.Trigger>

                        <Dropdown.Content>
                            <Dropdown.Link href={route("profile.edit")}>
                                Profile
                            </Dropdown.Link>
                            <Dropdown.Link
                                href={route("logout")}
                                method="post"
                                as="button"
                            >
                                Log Out
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </header>

                {/* Contenido */}
                <main className="flex-1 p-6">{children}</main>
            </div>
        </div>
    );
}
