<?php

namespace App\Models;


class Teaching
{

    /**
     * Teaching constructor.
     * @param array $data
     */

    /**
     * @var string
     */
    public $position;

    /**
     * @var string
     */
    public $period;

    /**
     * @var string
     */
    public $description;


    public function __construct($data)
    {
        $this->period       = isset($data['period']) ? $data['period'] : '';
        $this->position       = isset($data['position']) ? $data['position'] : '';
        $this->description = isset($data['description']) ? $data['description'] : '';
    }
}