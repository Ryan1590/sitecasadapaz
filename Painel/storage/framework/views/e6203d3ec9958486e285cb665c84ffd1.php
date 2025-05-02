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
    <div class="container-fluid mt-4 p-4">
            <h2 class="text-2xl font-bold mb-4 text-center">Doações</h2>
            

            <form enctype="multipart/form-data">
                <div class="row mb-4 mt-4">
                    <div class="col-12 mb-3">
                        <div class="card shadow-md rounded-lg p-4">
                            <h5 class="font-semibold text-lg mb-2">Banco:</h5>
                            <input type="text" name="banco" class="form-control" value="<?php echo e(isset($content) ? $content->banco : ''); ?>">
                        </div>
                    </div>

                    <div class="col-12 mb-3">
                        <div class="card shadow-md rounded-lg p-4">
                            <h5 class="font-semibold text-lg mb-2">Agência:</h5>
                            <input type="text" name="agencia" class="form-control" value="<?php echo e(isset($content) ? $content->agencia : ''); ?>">
                        </div>
                    </div>

                    <div class="col-12 mb-3">
                        <div class="card shadow-md rounded-lg p-4">
                            <h5 class="font-semibold text-lg mb-2">Conta Corrente:</h5>
                            <input type="text" name="conta_corrente" class="form-control" value="<?php echo e(isset($content) ? $content->conta_corrente : ''); ?>">
                        </div>
                    </div>

                    <div class="col-12 mb-3">
                        <div class="card shadow-md rounded-lg p-4">
                            <h5 class="font-semibold text-lg mb-2">CNPJ:</h5>
                            <input type="text" id="cnpj" name="cnpj" class="form-control cnpj-mask" maxlength="18" value="<?php echo e(isset($content) ? preg_replace('/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/', '$1.$2.$3/$4-$5', $content->cnpj) : ''); ?>">
                        </div>
                    </div>

                    <div class="col-12 mb-3">
                        <div class="card shadow-md rounded-lg p-4">
                            <h5 class="font-semibold text-lg mb-2">Titular:</h5>
                            <input type="text" name="titular" class="form-control" value="<?php echo e(isset($content) ? $content->titular : ''); ?>">
                        </div>
                    </div>

                    <div class="col-12 mb-3">
                        <div class="card shadow-md rounded-lg p-4">
                            <h5 class="font-semibold text-lg mb-2">PIX:</h5>
                            <input type="text" name="pix" class="form-control" value="<?php echo e(isset($content) ? $content->pix : ''); ?>">
                        </div>
                    </div>
                </div>
            </form>
        </div>

        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>

        <script>
            $(document).ready(function() {

                $('.cnpj-mask').mask('00.000.000/0000-00');

                $('form').on('submit', function() {
                    var cnpj = $('#cnpj').val();
                    $('#cnpj').val(cnpj.replace(/\D/g, ''));
                });
            });
        </script>
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
<?php /**PATH C:\Users\ryan.rodrigues\Documents\PainelAdmCasadapaz\resources\views/doacoes/index.blade.php ENDPATH**/ ?>