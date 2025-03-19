<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Solicitacaos extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome',
        'email',
        'vaga',
        'status'
    ];

    // Definindo a relação belongsTo com o modelo Vaga
    public function vaga()
    {
        return $this->belongsTo(Vagas::class, 'vaga', 'id');
    }
}

