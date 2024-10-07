<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return view('main');
});

Route::get('/users', function () {
    return view('main');
});

Route::post('/api/filter-users', [UserController::class, 'filterUsers']);