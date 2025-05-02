<?php if (isset($component)) { $__componentOriginal9ac128a9029c0e4701924bd2d73d7f54 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal9ac128a9029c0e4701924bd2d73d7f54 = $attributes; } ?>
<?php $component = App\View\Components\AppLayout::resolve([] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('app-layout'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\App\View\Components\AppLayout::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
    <div class="container-fluid max-w-none mt-4 p-4">
        <h2 class="text-2xl font-bold mb-4 text-center">Contatos</h2>

        

    <form action="<?php echo e(isset($content) ? route('contato.update', $content->id) : route('contato.store')); ?>" method="POST" enctype="multipart/form-data">
        <?php echo csrf_field(); ?>
        <?php if(isset($content)): ?>
            <?php echo method_field('PATCH'); ?>
        <?php endif; ?>

        <div class="row mb-4 mt-4">
            <div class="col-12 mb-3">
                <div class="card shadow-md rounded-lg p-4">
                    <h5 class="font-semibold text-lg mb-2">Telefone/WhatsApp:</h5>
                    <input type="text" name="whatsapp" class="form-control" value="<?php echo e(isset($content) ? $content->whatsapp : ''); ?>">
                </div>
            </div>

            <div class="col-12 mb-3">
                <div class="card shadow-md rounded-lg p-4">
                    <h5 class="font-semibold text-lg mb-2">Instagram Casa da Paz:</h5>
                    <input type="text" name="instagram" class="form-control" value="<?php echo e(isset($content) ? $content->instagram : ''); ?>">
                </div>
            </div>

            <div class="col-12 mb-3">
                <div class="card shadow-md rounded-lg p-4">
                    <h5 class="font-semibold text-lg mb-2">Fanpage:</h5>
                    <input type="text" name="fanpage" class="form-control" value="<?php echo e(isset($content) ? $content->fanpage : ''); ?>">
                </div>
            </div>

            <div class="col-12 mb-3">
                <div class="card shadow-md rounded-lg p-4">
                    <h5 class="font-semibold text-lg mb-2">E-mail:</h5>
                    <input type="email" name="email" class="form-control" value="<?php echo e(isset($content) ? $content->email : ''); ?>">
                </div>
            </div>

            <div class="col-12 mb-3">
                <div class="card shadow-md rounded-lg p-4">
                    <h5 class="font-semibold text-lg mb-2">Endereço da Sede:</h5>
                    <input type="text" name="endereco_sede" class="form-control" value="<?php echo e(isset($content) ? $content->endereco_sede : ''); ?>">
                </div>
            </div>

            <div class="col-12 mb-3">
                <div class="card shadow-md rounded-lg p-4">
                    <h5 class="font-semibold text-lg mb-2">Endereço do Bazar e SEBO Literário:</h5>
                    <input type="text" name="endereco_bazar" class="form-control" value="<?php echo e(isset($content) ? $content->endereco_bazar : ''); ?>">
                </div>
            </div>

            <div class="col-12 mb-3">
                <div class="card shadow-md rounded-lg p-4">
                    <h5 class="font-semibold text-lg mb-2">Instagram Bazar Beneficente:</h5>
                    <input type="text" name="instagram_bazar" class="form-control" value="<?php echo e(isset($content) ? $content->instagram_bazar : ''); ?>">
                </div>
            </div>
        </div>

        <div class="mt-4">
            <button type="submit" class="btn btn-success">Salvar</button>
        </div>
    </form>
    </div>
 <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal9ac128a9029c0e4701924bd2d73d7f54)): ?>
<?php $attributes = $__attributesOriginal9ac128a9029c0e4701924bd2d73d7f54; ?>
<?php unset($__attributesOriginal9ac128a9029c0e4701924bd2d73d7f54); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal9ac128a9029c0e4701924bd2d73d7f54)): ?>
<?php $component = $__componentOriginal9ac128a9029c0e4701924bd2d73d7f54; ?>
<?php unset($__componentOriginal9ac128a9029c0e4701924bd2d73d7f54); ?>
<?php endif; ?>
<?php /**PATH C:\Users\ryan.rodrigues\Documents\PainelAdmCasadapaz\resources\views/contato/index.blade.php ENDPATH**/ ?>