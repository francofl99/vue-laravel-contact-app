<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SaveContactController extends Controller
{
    public function saveContact(Request $data) {
        try {
            DB::table('contacts')->insert([
                'nombre' => $data['nombre'],
                'apellido' => $data['apellido'],
                'codigo_area' => $data['codigo_area'],
                'numero' => $data['numero']
            ]);
        } catch (Exception $e) {
            return $e;
        }

    }
}
