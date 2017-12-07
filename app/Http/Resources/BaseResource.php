<?php
namespace App\Http\Resources;
use Illuminate\Http\Request;

/**
 * Created by PhpStorm.
 * User: 都大爽
 * Date: 2017/10/16
 * Time: 12:00
 */

trait BaseResource
{
    public function hasInclude(Request $request, $option)
    {
        if (in_array($option, (array) $request->get('include', null))){
            return true;
        }else{
            return false;
        }
    }
}
