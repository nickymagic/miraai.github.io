<?php


namespace App\Models;


class Skill
{

    /**
     * @var string
     */
    public $skill;

    /**
     * @var string
     */
    public $level;

    /**
     * @var string
     */
    public $description;

    /**
     * Skill constructor.
     * @param array $data
     */
    public function __construct($data)
    {
        $this->skill = isset($data['skill']) ? $data['skill'] : '';
        $this->level = isset($data['level']) ? $data['level'] : '';
        $this->description = isset($data['description']) ? $data['description'] : null;
    }
}