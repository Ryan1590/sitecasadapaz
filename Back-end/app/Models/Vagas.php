<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vagas extends Model
{
    use HasFactory;

    protected $fillable = [
        'vaga',
    ];

    // Definindo a relação hasMany com o modelo Solicitacaos
    public function solicitacoes()
    {
        return $this->hasMany(Solicitacaos::class, 'vaga', 'id');
    }
}

