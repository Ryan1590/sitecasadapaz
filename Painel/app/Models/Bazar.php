<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bazar extends Model
{
    use HasFactory;

    protected $fillable = [
        'localizacao',
        'doacoes',
        'voluntariado',
        'para_a_comunidade',
        'para_a_casa_da_paz'
    ];
}
