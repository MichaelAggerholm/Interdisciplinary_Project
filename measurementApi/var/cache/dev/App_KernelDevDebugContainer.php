<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\Container314sbo6\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/Container314sbo6/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/Container314sbo6.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\Container314sbo6\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \Container314sbo6\App_KernelDevDebugContainer([
    'container.build_hash' => '314sbo6',
    'container.build_id' => 'd0db73dd',
    'container.build_time' => 1676456628,
], __DIR__.\DIRECTORY_SEPARATOR.'Container314sbo6');
