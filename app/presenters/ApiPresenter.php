<?php


namespace App\Presenters;


use Nette\Application\Responses\JsonResponse;
use Nette\Application\UI\Presenter;

class ApiPresenter extends Presenter
{

    public function actionCv()
    {
        $data = [];
        if( file_exists(APP_DIR . '/data/en/cv.json') ) {
            $data = json_decode( file_get_contents(APP_DIR . '/data/en/cv.json'), true );
        }

        header('Access-Control-Allow-Origin: *');

        $this->sendResponse(new JsonResponse($data));
    }

}