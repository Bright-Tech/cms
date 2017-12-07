<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Property
 * @package App\Models
 */
class Property extends Model
{
    //

    /**
     * 对应表名
     *
     * @var string
     */
    public $table = 'property';


    /**
     * The attributes that are mass assignable.
     *
     * @var string
     */
    protected $fillable = ['key', 'value', 'label'];
}
