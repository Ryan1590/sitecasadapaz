<?php

namespace App\Http\Controllers;

use App\Models\BannerSobreNos;
use Illuminate\Http\Request;

class BannerSobreNosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $imagens = BannerSobreNos::all()->map(function ($item) {
            return [
                'id' => $item->id,
                'banner_principal' => $item->banner_principal ? 'data:image/jpeg;base64,' . base64_encode($item->banner_principal) : null,
                'banner_principal_mobile' => $item->banner_principal_mobile ? 'data:image/jpeg;base64,' . base64_encode($item->banner_principal_mobile) : null,
                'imagem_missao' => $item->imagem_missao ? 'data:image/jpeg;base64,' . base64_encode($item->imagem_missao) : null,
            ];
        })->first(); // Para retornar apenas o primeiro banner

        return response()->json($imagens);
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
