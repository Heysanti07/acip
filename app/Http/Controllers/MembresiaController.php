<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class MembresiaController extends Controller
{
    public function index()
    {
        // 👈 asegúrate de que la ruta corresponde al archivo React
        return Inertia::render('Membresias/Index');
    }

    public function estudiante()
    {
        return Inertia::render('Membresias/Estudiante');
    }

    public function academico()
    {
        return Inertia::render('Membresias/Academico');
    }

    public function profesional()
    {
        return Inertia::render('Membresias/Profesional');
    }
}
