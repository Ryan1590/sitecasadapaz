<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Eventos extends Model
{
    use HasFactory;

     // Definir o relacionamento de "um para muitos"
     public function galerias()
     {
         return $this->hasMany(Galeria::class);  // Um evento tem muitas galerias

     }
}
