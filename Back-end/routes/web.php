<?php

use App\Http\Controllers\NossaEquipeController;
use App\Http\Controllers\SobrenosController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('api/sobre', [SobrenosController::class, 'index']);

/* api equipes daqui para baixo*/
Route::get('api/nossaequipe', [NossaEquipeController::class, 'index']);
