import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Index() {
    return (
        <AuthenticatedLayout>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Usuarios</h1>
                {/* Aquí después agregaremos la tabla */}
                <p>Lista de usuarios se mostrará aquí.</p>
            </div>
        </AuthenticatedLayout>
    );
}
