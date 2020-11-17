<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Exceptions;


class ContactsController extends Controller
{
    public function getContacts() {
        try {
            return DB::table('contacts')->get();
        } catch (Exception $e) {
            return $e;
        }
    }
}
