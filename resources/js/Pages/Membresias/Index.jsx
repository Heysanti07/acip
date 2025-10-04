import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";

export default function Index() {
    // Estado para activar/desactivar las convocatorias
    const [activo, setActivo] = useState(true);

    return (
        <AuthenticatedLayout>
            <div className="flex flex-col items-center justify-center min-h-[80vh] p-6">
                <h1 className="text-3xl font-bold mb-6">Membresías</h1>

                {/* Botón para activar/desactivar */}
                <button
                    onClick={() => setActivo(!activo)}
                    className={`mb-6 px-4 py-2 rounded-lg text-white ${
                        activo ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
                    } transition`}
                >
                    {activo ? "Desactivar convocatorias" : "Activar convocatorias"}
                </button>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card Estudiante */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h2 className="text-xl font-semibold mb-4">Estudiante</h2>
                        <p className="text-gray-600 mb-4">
                            Información sobre la membresía Estudiante.
                        </p>
                        <Link
                            href={activo ? route("membresia.estudiante") : "#"}
                            className={`px-4 py-2 rounded text-white transition ${
                                activo
                                    ? "bg-green-600 hover:bg-green-700"
                                    : "bg-gray-400 cursor-not-allowed"
                            }`}
                        >
                            Ver más
                        </Link>
                    </div>

                    {/* Card Académico */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h2 className="text-xl font-semibold mb-4">Académico</h2>
                        <p className="text-gray-600 mb-4">
                            Información sobre la membresía Académico.
                        </p>
                        <Link
                            href={activo ? route("membresia.academico") : "#"}
                            className={`px-4 py-2 rounded text-white transition ${
                                activo
                                    ? "bg-green-600 hover:bg-green-700"
                                    : "bg-gray-400 cursor-not-allowed"
                            }`}
                        >
                            Ver más
                        </Link>
                    </div>

                    {/* Card Profesional */}
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h2 className="text-xl font-semibold mb-4">Profesional</h2>
                        <p className="text-gray-600 mb-4">
                            Información sobre la membresía Profesional.
                        </p>
                        <Link
                            href={activo ? route("membresia.profesional") : "#"}
                            className={`px-4 py-2 rounded text-white transition ${
                                activo
                                    ? "bg-green-600 hover:bg-green-700"
                                    : "bg-gray-400 cursor-not-allowed"
                            }`}
                        >
                            Ver más
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
