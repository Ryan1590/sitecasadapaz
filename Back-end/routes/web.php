<?php

use App\Http\Controllers\BannerSobreNosController;
use App\Http\Controllers\NossaEquipeController;
use App\Http\Controllers\SobrenosController;
use App\Http\Controllers\ContatosController;
use App\Http\Controllers\DoacaoController;
use App\Http\Controllers\EventosController;
use App\Http\Controllers\GaleriaBannerController;
use App\Http\Controllers\GaleriaController;
use App\Models\BannerGaleria;
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
/* api doacao*/
Route::get('api/doacao', [DoacaoController::class, 'index']);
/* api sobre nós*/
Route::get('/api/banners/sobrenos', [BannerSobreNosController::class, 'index']);
Route::get('/api/banners/galeria', [GaleriaBannerController::class, 'index']);


// Rota para listar todos os eventos com suas galerias
Route::get('/api/eventos/galerias', [GaleriaController::class, 'index']); // Para listar todos os eventos com galerias

