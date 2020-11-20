<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', 'App\Http\Controllers\PagesController@index')->where('any', '.*');

Route::post('/saveContact', 'App\Http\Controllers\ContactsController@saveContact')->name('saveContact');
Route::post('/deleteContact', "App\Http\Controllers\ContactsController@removeContact")->name('removeContact');
