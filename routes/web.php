<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ExampleController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/example-data', [ExampleController::class, 'getData']);
