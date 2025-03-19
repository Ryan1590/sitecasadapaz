<?php

return [

    /*
    |----------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |----------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    'paths' => ['api/*', 'sanctum/csrf-cookie'], // Defina as rotas que precisam de CORS

    'allowed_methods' => ['*'], // Permite todos os métodos HTTP (GET, POST, etc.)

    'allowed_origins' => [
        'http://localhost:3000', // Adicione o URL do seu frontend aqui
        // Adicione outros domínios do frontend, se necessário
    ],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'], // Permite todos os cabeçalhos

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true, // Defina como true se você precisar enviar cookies ou credenciais

];
