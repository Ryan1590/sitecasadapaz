<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Galeria extends Model
{
    use HasFactory;

    // Relacionamento "muitos para um" com a tabela evento
    public function evento()
    {
        return $this->belongsTo(Eventos::class, 'evento_id'); // A chave estrangeira é 'evento_id'
    }
}

