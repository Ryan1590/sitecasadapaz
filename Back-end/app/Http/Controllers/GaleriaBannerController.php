<?php

namespace App\Http\Controllers;

use App\Models\BannerGaleria;
use Illuminate\Http\Request;

class GaleriaBannerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Obtém o primeiro item
        $imagens = BannerGaleria::first();

        if ($imagens) {
            return response()->json([
                'banner_principal' => $imagens->banner_principal ?? null, // Retorna apenas o nome da imagem
                'banner_principal_mobile' => $imagens->banner_principal_mobile ?? null, // Retorna apenas o nome da imagem
            ]);
        }

        return response()->json([]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
