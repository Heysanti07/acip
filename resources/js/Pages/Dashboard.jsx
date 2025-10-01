import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { Camera } from 'lucide-react';

export default function Dashboard() {
    const { user } = usePage().props.auth;

    const { data, setData, post, processing, errors } = useForm({
        profile_photo: null,
    });

    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('profile_photo', data.profile_photo);
        post(route('profile.updatePhoto'), formData);
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-lg overflow-hidden">
                        {/* Portada */}
                        <div className="relative h-80 bg-gray-200"> {/* Portada más alta */}
    <img
        src="/img/Diapositiva1.JPG"
        alt="Portada"
        className="w-full h-full object-cover"
    />
    {/* Foto de perfil centrada */}
    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
        <div className="relative">
            <img
                src="img/perfil.png" // {user.profile_photo_url || '/images/avatar-placeholder.png'}
                alt="Perfil"
                className="h-32 w-32 rounded-full border-4 border-white object-cover"
            />
            {/* Botón de cambio de foto sobre la imagen */}
            <form onSubmit={submit} className="absolute bottom-0 right-0">
                <label className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full cursor-pointer shadow-lg flex items-center justify-center">
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                            setData('profile_photo', e.target.files[0]);
                            submit(e);
                        }}
                    />
                    <Camera className="h-5 w-5" /> {/* Ícono profesional */}
                </label>
            </form>
        </div>
    </div>
</div>

                        {/* Información del usuario */}
                        <div className="mt-20 text-center p-6">
                            <h1 className="text-3xl font-bold">{user.name}</h1>
                            <p className="text-gray-600">{user.email}</p>
                            <p className="mt-2 text-gray-500">
                                Bienvenido a tu dashboard. Aquí puedes ver y actualizar tu perfil.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
