<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Watson\Validating\ValidatingTrait;

/**
 * Class Assets
 * @package App\Models
 */
class Assets extends Model
{
//    use ValidatingTrait;

    //
    /**
     * 对应表名
     *
     * @var string
     */
    public $table = 'assets';

}
