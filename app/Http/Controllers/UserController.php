<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function filterUsers(Request $request)
    {
        Log::info('Received request for filterUsers', ['data' => $request->all()]);

        $filters = $request->all();

        $users = [
            ["id" => 1, "name" => "Joe", "age" => 35, "is_job" => true],
            ["id" => 2, "name" => "Anna", "age" => 28, "is_job" => false],
            ["id" => 3, "name" => "Mike", "age" => 42, "is_job" => true],
            ["id" => 4, "name" => "Sara", "age" => 23, "is_job" => false],
            ["id" => 5, "name" => "David", "age" => 30, "is_job" => true],
            ["id" => 6, "name" => "Emily", "age" => 25, "is_job" => false],
            ["id" => 7, "name" => "Chris", "age" => 40, "is_job" => true],
            ["id" => 8, "name" => "Lisa", "age" => 33, "is_job" => false],
            ["id" => 9, "name" => "Tom", "age" => 29, "is_job" => true],
            ["id" => 10, "name" => "Nina", "age" => 27, "is_job" => false],
        ];


        if (isset($filters['name'])) {
            $users = array_filter($users, function($user) use ($filters) {
                return stripos($user['name'], $filters['name']) !== false;
            });
        }

        Log::info('Filtered users', ['data' => array_values($users)]);

        return response()->json(['data' => array_values($users)]);
    }
}