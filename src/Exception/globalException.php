<?php


namespace AtSoft\SingPHP\Exception;


use Throwable;

class globalException extends \Exception
{
    public function __construct($message = "", $code = 0, Throwable $previous = null)
    {
        parent::__construct($message, $code, $previous);
    }
}