<?php

namespace App\Http\Controllers;

use App\Models\Solicitacaos;
use App\Models\Vagas;
use Illuminate\Http\Request;

class CandidaturaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        // Validação dos dados do formulário
        $data = $request->validate([
            'nome' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'vaga' => 'required|exists:vagas,id', // Verifica se a vaga existe na tabela "vagas"
        ]);

        // Obtendo a vaga associada
        $vaga = Vagas::find($data['vaga']);

        if ($vaga) {
            // Criar a nova solicitação
            $solicitacao = new Solicitacaos();
            $solicitacao->nome = $data['nome'];
            $solicitacao->email = $data['email'];
            $solicitacao->vaga = $vaga->id; // A chave estrangeira para a tabela de vagas
            $solicitacao->status = 'pendente'; // Definindo o status como 'pendente'
            $solicitacao->save(); // Salva a solicitação no banco de dados

            return response()->json(['message' => 'Candidatura realizada com sucesso!']);
        }

        return response()->json(['error' => 'Vaga não encontrada'], 404);
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
