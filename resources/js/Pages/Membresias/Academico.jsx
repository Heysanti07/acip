import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Academico() {
    return (
        <AuthenticatedLayout>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Vista Académico</h1>
                <p>Contenido de la membresía académico.</p>
            </div>
        </AuthenticatedLayout>
    );
}
