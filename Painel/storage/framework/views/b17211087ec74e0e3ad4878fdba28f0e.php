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
        <h2 class="text-2xl font-bold mb-4 text-center">Pagina Bazar</h2>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addArquivoModal">
            <i class="fas fa-plus"></i> Adicionar Imagem
        </button>

        <div class="modal fade" id="addArquivoModal" tabindex="-1" aria-labelledby="addArquivoModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <form action="<?php echo e(route('bazar.addImg')); ?>" method="POST" enctype="multipart/form-data">
                        <?php echo csrf_field(); ?>
                        <div class="modal-header">
                            <h5 class="modal-title">Adicionar Imagem</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="imagem_bazar" class="form-label">Escolha as imagens</label>
                                <input type="file" name="imagem_bazar[]" class="form-control" accept="image/*" required multiple>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-success">Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <form id="formExcluirSelecionados" action="<?php echo e(route('bazar.excluir-selecionados')); ?>" method="POST">
            <?php echo csrf_field(); ?>
            <?php echo method_field('DELETE'); ?>

            <!-- Botão acima da galeria -->
            <div class="mt-4 mb-3">
                <button type="submit" class="btn btn-danger" onclick="return confirmarExclusaoSelecionados()">
                    <i class="fa fa-trash"></i> Excluir Selecionados
                </button>
            </div>

            <div class="row">
                <?php $__empty_1 = true; $__currentLoopData = $items; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $id => $imagem): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                    <div class="col-md-3 mb-4 mt-4">
                        <div class="card shadow position-relative" style="border: none; height: 350px;">
                            
                            <!-- Checkbox -->
                            <div class="form-check position-absolute m-2">
                                <input type="checkbox" class="form-check-input imagem-checkbox" name="imagens[]" value="<?php echo e($id); ?>">
                            </div>
            
                            <!-- Imagem com altura fixa e corte proporcional -->
                            <div class="card-img-top" style="height: 100%; overflow: hidden; display: flex; align-items: center;">
                                <img src="<?php echo e(asset('storage/' . $imagem)); ?>" class="img-fluid w-100 h-100" style="object-fit: cover;">
                            </div>
            
                            <!-- Botão -->
                            <button type="button" class="btn btn-danger btn-sm w-100" onclick="confirmDeleteBanner('<?php echo e($id); ?>')">
                                <i class="fa fa-trash"></i> Excluir
                            </button>
                        </div>
                    </div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                    <p class="text-center mt-4">Nenhuma imagem encontrada.</p>
                <?php endif; ?>
            </div>
            
        </form>

        <script>
    function confirmDeleteBanner(id) {
        Swal.fire({
            title: 'Tem certeza?',
            text: "Você não poderá reverter isso!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sim, excluir!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`<?php echo e(url('/bazar/destroy')); ?>/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'X-CSRF-TOKEN': '<?php echo e(csrf_token()); ?>',
                        'Content-Type': 'application/json'
                    },
                })
                .then(response => response.json())  // Aguarde a resposta como JSON
                .then(data => {
                    if (data.message) {
                        Swal.fire(
                            'Excluído!',
                            data.message,  // Use a mensagem retornada pelo backend
                            'success'
                        ).then(() => location.reload());
                    } else {
                        Swal.fire(
                            'Erro!',
                            'Não foi possível excluir a imagem.',
                            'error'
                        );
                    }
                })
                .catch(error => {
                    Swal.fire(
                        'Erro!',
                        'Houve um problema ao excluir a imagem.',
                        'error'
                    );
                    console.error(error);  // Log de erro para facilitar depuração
                });

            }
        });
    }

    function confirmarExclusaoSelecionados() {
        const selecionadas = document.querySelectorAll('.imagem-checkbox:checked');

        if (selecionadas.length === 0) {
            Swal.fire('Nenhuma imagem selecionada', 'Por favor, selecione ao menos uma imagem.', 'warning');
            return false;
        }

        Swal.fire({
            title: 'Tem certeza?',
            text: 'Você deseja excluir as imagens selecionadas?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim, excluir',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                document.getElementById('formExcluirSelecionados').submit();
            }
        });

        return false; // impede envio imediato
    }

</script>

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
<?php /**PATH C:\Users\ryan.rodrigues\Documents\PainelAdmCasadapaz\resources\views/bazar/index.blade.php ENDPATH**/ ?>