<?php

namespace App\Http\Controllers;

use App\Models\Eventos;
use App\Models\Galeria;
use Illuminate\Http\Request;

class GaleriaController extends Controller
{
    /**
     * Display a listing of the resource.
     */

     public function index()
     {
         // Recuperar todas as galerias com os eventos associados
    $galerias = Galeria::with('evento')->get();

    // Formatar a resposta para incluir o título do evento em vez do evento_id
    $response = $galerias->map(function ($galeria) {
        return [
            'id' => $galeria->id,
            'tipo' => $galeria->tipo,
            'arquivo' => $galeria->arquivo,
            'created_at' => $galeria->created_at,
            'updated_at' => $galeria->updated_at,
            'evento' => [
                'titulo' => $galeria->evento->titulo, // Aqui retornamos apenas o nome do evento
                'descricao' => $galeria->evento->descricao,
                'data' => $galeria->evento->data,
            ]
        ];
    });

    // Retornar as galerias com os eventos formatados
    return response()->json($response);
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
