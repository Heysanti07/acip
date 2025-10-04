import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import { Home, User, Users, Menu, BookOpen } from "lucide-react"; // 👈 agregué BookOpen para Membresías

export default function AuthenticatedLayout({ children }) {
    const user = usePage().props.auth.user;
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const menuItems = [
        { name: "Dashboard", route: "dashboard", icon: <Home size={20} /> },
        { name: "Perfil", route: "profile.edit", icon: <User size={20} /> },
        { name: "Usuarios", route: "users.index", icon: <Users size={20} /> },
        { name: "Membresías", route: "membresias.index", icon: <BookOpen size={20} /> }, // 👈 nueva ruta
    ];

    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Sidebar */}
            <aside
                className={`${
                    sidebarOpen ? "w-64" : "w-20"
                } bg-white text-gray-800 flex flex-col transition-all duration-300 border-r`}
            >
                {/* Logo */}
                <div className="flex items-center justify-center p-4 border-b">
                    <Link href="/">
                        <img
                            src="/img/Logo1.jpg"
                            alt="Logo"
                            className="h-12 w-auto"
                        />
                    </Link>
                </div>

                {/* Menú */}
                <nav className="flex-1 p-2 space-y-2">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={route(item.route)}
                            className={`flex items-center gap-3 p-2 rounded border transition-all
                                ${
                                    route().current(item.route)
                                        ? "border-green-500 bg-green-100"
                                        : "border-transparent hover:border-green-500 hover:bg-white"
                                }`}
                        >
                            <span>{item.icon}</span>
                            {sidebarOpen && (
                                <span className="text-sm font-medium">
                                    {item.name}
                                </span>
                            )}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Contenido principal */}
            <div className="flex-1 flex flex-col">
                {/* Topbar */}
                <header className="flex justify-between items-center bg-white shadow px-6 h-16">
                    {/* Botón abrir/cerrar sidebar */}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="p-2 rounded hover:bg-gray-100"
                    >
                        <Menu size={20} />
                    </button>

                    {/* Usuario */}
                    <Dropdown>
                        <Dropdown.Trigger>
                            <span className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
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
