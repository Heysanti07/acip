import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import { Home, User, Users } from "lucide-react"; // íconos para los links

export default function AuthenticatedLayout({ children }) {
    const user = usePage().props.auth.user;
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const menuItems = [
        { name: "Dashboard", route: "dashboard", icon: <Home className="w-5 h-5" /> },
        { name: "Perfil", route: "profile.edit", icon: <User className="w-5 h-5" /> },
        { name: "Usuarios", route: "users.index", icon: <Users className="w-5 h-5" /> },
    ];

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside
                className={`flex flex-col bg-white text-gray-800 shadow-md transition-all duration-300 ${
                    sidebarOpen ? "w-64" : "w-16"
                }`}
            >
                {/* Logo */}
                <div className="flex items-center justify-start p-4 border-b border-gray-200">
                    {sidebarOpen && (
                        <Link href="/">
                            <img src="/img/Logo1.jpg" alt="Logo" className="h-12 w-auto" />
                        </Link>
                    )}
                </div>

                {/* Menú */}
                <nav className="flex-1 p-4 space-y-2">
                    {menuItems.map((item) => (
                        <Link
                            key={item.route}
                            href={route(item.route)}
                            className={`flex items-center p-2 rounded border border-transparent hover:border-green-500 hover:bg-white transition-colors ${
                                route().current(item.route)
                                    ? "border-green-500 bg-green-100"
                                    : ""
                            }`}
                        >
                            <span>{item.icon}</span>
                            {sidebarOpen && <span className="ml-3">{item.name}</span>}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Contenido principal */}
            <div className="flex-1 flex flex-col relative">
                {/* Botón para abrir/cerrar sidebar */}
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="absolute top-4 left-4 z-50 bg-green-500 text-white p-2 rounded-md focus:outline-none"
                >
                    {sidebarOpen ? (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>

                {/* Topbar */}
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
