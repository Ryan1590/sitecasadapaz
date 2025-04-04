<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Convenio;

class ConvenioController extends Controller
{
    public function index ()
    {
        $convenios = Convenio::all();
        return response()->json($convenios);
    }
}
