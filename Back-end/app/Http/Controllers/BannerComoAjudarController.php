<?php

namespace App\Http\Controllers;

use App\Models\BannerComoAjudar;
use Illuminate\Http\Request;

class BannerComoAjudarController extends Controller
{
    public function index()
    {
        $imagens = BannerComoAjudar::first();

        if ($imagens) {
            return response()->json([
                'banner_principal' => $imagens->banner_principal ?? null, // Retorna apenas o nome da imagem
                'banner_principal_mobile' => $imagens->banner_principal_mobile ?? null, // Retorna apenas o nome da imagem
                'imagem_missao' => $imagens->imagem_missao ?? null, // Retorna apenas o nome da imagem
            ]);
        }

        return response()->json([]);
    }
}
