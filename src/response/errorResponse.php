<?php


namespace AtSoft\SingPHP\response;


class errorResponse extends response
{
    public static function result($error=500, $message = "error", $data = [])
    {
        return parent::result($error, $message, $data);
    }
}