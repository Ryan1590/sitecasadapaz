<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contato extends Model
{
    use HasFactory;

    protected $fillable = [
        "whatsapp",
        "instagram",
        "fanpage",
        "email",
        "endereco_sede",
        "endereco_bazar",
        "instagram_bazar"
    ];
}
