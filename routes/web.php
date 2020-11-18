<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', 'App\Http\Controllers\PagesController@index')->where('any', '.*');

Route::post('/saveContact', 'App\Http\Controllers\SaveContactController@saveContact')->name('saveContact');
