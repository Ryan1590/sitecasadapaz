<?php

namespace App\Http\Controllers;

use App\Models\Premio;
use Illuminate\Http\Request;

class PremiosController extends Controller
{
    public function index()
    {
        $premios = Premio::all()->map(function ($premio) {
            return [
                'id' => $premio->id,
                'nome' => $premio->nome,
                'descricao' => $premio->descricao,
                'imagem' => basename($premio->imagem) // Retorna apenas o nome do arquivo da imagem
            ];
        });

        return response()->json($premios);
    }

}
