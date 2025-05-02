<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Galeria extends Model
{
    use HasFactory;

    protected $fillable = [
        'evento_id',
        'tipo',
        'arquivo'
    ];

    public function evento()
    {
        return $this->belongsTo(Evento::class);
    }
}
