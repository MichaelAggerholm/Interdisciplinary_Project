<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/api/hardwarePlacement' => [
            [['_route' => 'api_hardwarePlacement_index', '_controller' => 'App\\Controller\\HardwarePlacementController::index'], null, ['GET' => 0, 'HEAD' => 1], null, false, false, null],
            [['_route' => 'api_hardwarePlacement_new', '_controller' => 'App\\Controller\\HardwarePlacementController::new'], null, ['POST' => 0], null, false, false, null],
        ],
        '/api/hardwareUnit' => [
            [['_route' => 'api_hardwareUnit_index', '_controller' => 'App\\Controller\\HardwareUnitController::index'], null, ['GET' => 0, 'HEAD' => 1], null, false, false, null],
            [['_route' => 'api_hardwareUnit_new', '_controller' => 'App\\Controller\\HardwareUnitController::new'], null, ['POST' => 0], null, false, false, null],
        ],
        '/api/hardwareUnitType' => [
            [['_route' => 'api_hardwareUnitType_index', '_controller' => 'App\\Controller\\HardwareUnitTypeController::index'], null, ['GET' => 0, 'HEAD' => 1], null, false, false, null],
            [['_route' => 'api_hardwareUnitType_new', '_controller' => 'App\\Controller\\HardwareUnitTypeController::new'], null, ['POST' => 0], null, false, false, null],
        ],
        '/api/measurement' => [
            [['_route' => 'api_measurement_index', '_controller' => 'App\\Controller\\MeasurementController::index'], null, ['GET' => 0, 'HEAD' => 1], null, false, false, null],
            [['_route' => 'api_measurement_new', '_controller' => 'App\\Controller\\MeasurementController::new'], null, ['POST' => 0], null, false, false, null],
        ],
        '/api/measurementType' => [
            [['_route' => 'api_measurementType_index', '_controller' => 'App\\Controller\\MeasurementTypeController::index'], null, ['GET' => 0, 'HEAD' => 1], null, false, false, null],
            [['_route' => 'api_measurementType_new', '_controller' => 'App\\Controller\\MeasurementTypeController::new'], null, ['POST' => 0], null, false, false, null],
        ],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_error/(\\d+)(?:\\.([^/]++))?(*:35)'
                .'|/api/(?'
                    .'|hardware(?'
                        .'|Placement/([^/]++)(?'
                            .'|(*:82)'
                        .')'
                        .'|Unit(?'
                            .'|/([^/]++)(?'
                                .'|(*:109)'
                            .')'
                            .'|Type/([^/]++)(?'
                                .'|(*:134)'
                            .')'
                        .')'
                    .')'
                    .'|measurement(?'
                        .'|/([^/]++)(?'
                            .'|(*:171)'
                        .')'
                        .'|Type/([^/]++)(?'
                            .'|(*:196)'
                        .')'
                    .')'
                .')'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        35 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        82 => [
            [['_route' => 'api_hardwarePlacement_show', '_controller' => 'App\\Controller\\HardwarePlacementController::show'], ['id'], ['GET' => 0], null, false, true, null],
            [['_route' => 'api_hardwarePlacement_edit', '_controller' => 'App\\Controller\\HardwarePlacementController::edit'], ['id'], ['PUT' => 0], null, false, true, null],
            [['_route' => 'api_hardwarePlacement_delete', '_controller' => 'App\\Controller\\HardwarePlacementController::delete'], ['id'], ['DELETE' => 0], null, false, true, null],
        ],
        109 => [
            [['_route' => 'api_hardwareUnit_show', '_controller' => 'App\\Controller\\HardwareUnitController::show'], ['id'], ['GET' => 0], null, false, true, null],
            [['_route' => 'api_hardwareUnit_edit', '_controller' => 'App\\Controller\\HardwareUnitController::edit'], ['id'], ['PUT' => 0], null, false, true, null],
            [['_route' => 'api_hardwareUnit_delete', '_controller' => 'App\\Controller\\HardwareUnitController::delete'], ['id'], ['DELETE' => 0], null, false, true, null],
        ],
        134 => [
            [['_route' => 'api_hardwareUnitType_show', '_controller' => 'App\\Controller\\HardwareUnitTypeController::show'], ['id'], ['GET' => 0], null, false, true, null],
            [['_route' => 'api_hardwareUnitType_edit', '_controller' => 'App\\Controller\\HardwareUnitTypeController::edit'], ['id'], ['PUT' => 0], null, false, true, null],
            [['_route' => 'api_hardwareUnitType_delete', '_controller' => 'App\\Controller\\HardwareUnitTypeController::delete'], ['id'], ['DELETE' => 0], null, false, true, null],
        ],
        171 => [
            [['_route' => 'api_measurement_show', '_controller' => 'App\\Controller\\MeasurementController::show'], ['id'], ['GET' => 0], null, false, true, null],
            [['_route' => 'api_measurement_edit', '_controller' => 'App\\Controller\\MeasurementController::edit'], ['id'], ['PUT' => 0], null, false, true, null],
            [['_route' => 'api_measurement_delete', '_controller' => 'App\\Controller\\MeasurementController::delete'], ['id'], ['DELETE' => 0], null, false, true, null],
        ],
        196 => [
            [['_route' => 'api_measurementType_show', '_controller' => 'App\\Controller\\MeasurementTypeController::show'], ['id'], ['GET' => 0], null, false, true, null],
            [['_route' => 'api_measurementType_edit', '_controller' => 'App\\Controller\\MeasurementTypeController::edit'], ['id'], ['PUT' => 0], null, false, true, null],
            [['_route' => 'api_measurementType_delete', '_controller' => 'App\\Controller\\MeasurementTypeController::delete'], ['id'], ['DELETE' => 0], null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
