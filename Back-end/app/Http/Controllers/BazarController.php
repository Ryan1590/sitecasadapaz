<?php

namespace App\Http\Controllers;

use App\Models\Bazar;
use Illuminate\Http\Request;

class BazarController extends Controller
{
    public function index()
    {
        // Obtém todos os itens da tabela Bazar
        $imagens = Bazar::all();

        // Verifica se há registros e mapeia para retornar apenas o nome da imagem
        if ($imagens->isNotEmpty()) {
            return response()->json(
                $imagens->map(function ($bazar) {
                    return [
                        'id' => $bazar->id ?? null,
                        'imagem_bazar' => $bazar->imagem_bazar ?? null, // Retorna apenas o nome da imagem
                    ];
                })
            );
        }

        // Caso não tenha registros, retorna um array vazio
        return response()->json([]);
    }
}
