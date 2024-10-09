<?php

use App\Http\Controllers\NossaEquipeController;
use App\Http\Controllers\SobrenosController;
use App\Http\Controllers\ContatosController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

/* api sobre*/
Route::get('api/sobre', [SobrenosController::class, 'index']);
/* api equipes*/
Route::get('api/nossaequipe', [NossaEquipeController::class, 'index']);
/* api contatos*/
Route::get('api/contatos', [ContatosController::class, 'index']);