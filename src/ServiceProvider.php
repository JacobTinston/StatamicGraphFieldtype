<?php

namespace Surgems\GraphFieldtype;

use Statamic\Providers\AddonServiceProvider;
use Statamic\Statamic;
use Surgems\GraphFieldtype\Fieldtypes\Graph;

class ServiceProvider extends AddonServiceProvider
{
    protected $fieldtypes = [
        Graph::class,
    ];

    protected $scripts = [
        __DIR__.'/../resources/dist/js/graph-fieldtype.js',
        __DIR__.'/../resources/dist/js/config.js'
    ];

    public function bootAddon()
    {
        Statamic::afterInstalled(function ($command) {
            $file_path = 'public/vendor/graph-fieldtype/js/config.js';
            $template = include(__DIR__.'/templates/graph-fieldtype-config.php');

            if(! file_exists($file_path))
            {
                file_put_contents($file_path, $template);
            }

            return false;
        });
    }
}
