<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('Users/Index'); // Apunta a resources/js/Pages/Users/Index.jsx
    }
}
