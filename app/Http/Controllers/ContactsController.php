<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Exceptions;


class ContactsController extends Controller
{
    public function getContacts() {
        try {
            return DB::table('contacts')->orderBy('orden', 'asc')->get();
        } catch (Exception $e) {
            return $e;
        }
    }

    public function saveContact(Request $data) {
        try {
            DB::table('contacts')->insert([
                'nombre' => $data['nombre'],
                'apellido' => $data['apellido'],
                'codigo_area' => $data['codigo_area'],
                'numero' => $data['numero'],
                'color' => $data['color']
            ]);
        } catch (Exception $e) {
            return $e;
        }
    }

    public function updateContact(Request $data) {
        try {
            DB::table('contacts')->where('id', $data['id'])->update([
                'id' => $data['nuevoId'],
                'nombre' => $data['nombre'],
                'apellido' => $data['apellido'],
                'codigo_area' => $data['codigo_area'],
                'numero' => $data['numero'],
                'color' => $data['color']
            ]);
        } catch (Exception $e) {
            return $e;
        }
    }

    public function removeContact(Request $data) {
        try {
            DB::table('contacts')->where('id', $data['id'])->delete();
        } catch (Exception $e) {
            return $e;
        }
    }

    public function assignOrderToContact(Request $data) {        
        DB::table('contacts')->where('id', $data['contactId'])->update([
            'orden' => $data['currentContextIndexOnArray']
        ]);
    }
}
