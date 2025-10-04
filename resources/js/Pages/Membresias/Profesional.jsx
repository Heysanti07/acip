import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Profesional() {
    return (
        <AuthenticatedLayout>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Vista Profesional</h1>
                <p>Contenido de la membresía profesional.</p>
            </div>
        </AuthenticatedLayout>
    );
}
