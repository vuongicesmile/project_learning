<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ExampleController extends Controller
{
    //
    public function getData()
    {
        return response()->json([
            'message' => 'Hello from Laravel API!',
            'data' => [1, 2, 3, 4, 5, 6]
        ]);
    }
}
