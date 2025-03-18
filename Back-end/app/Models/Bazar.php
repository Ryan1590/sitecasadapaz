<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bazar extends Model
{
    use HasFactory;

    protected $table = 'imagem_bazars';

    protected $fillable = [
        'imagem_bazar'
    ];
}
