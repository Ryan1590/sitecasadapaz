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
    <?php if(session('success')): ?>
        <div class="alert alert-success" role="alert">
            <?php echo e(session('success')); ?>

        </div>
    <?php endif; ?>
    <div class="container-fluid mt-4 p-4">
        <h2 class="text-2xl font-bold mb-4 text-center">Página Como Ajudar</h2>

                <form action="<?php echo e(route('banners-comoajudar.store')); ?>" method="POST" enctype="multipart/form-data">
                    <?php echo csrf_field(); ?>

                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <div class="card shadow-md rounded-lg p-4" style="height: 250px;">
                                <h5 class="font-semibold text-lg">Banner Desktop</h5>
                                <h4 class="mb-2 mt-2">Tamanho recomendado da imagem: 1920x472</h4>
                                <?php if(isset($img) && $img->banner_principal): ?>
                                    <img src="<?php echo e(asset('storage/' . $img->banner_principal)); ?>" class="img-fluid mb-2" style="max-width: 400px; max-height: 50px;" />
                                    <button type="button" class="btn btn-danger btn-sm mt-3" onclick="removeBanner('<?php echo e($img->id); ?>', 'banner_principal')">
                                        <i class="fa fa-trash"></i> Excluir</button>
                                <?php endif; ?>
                                <input type="file" accept="image/*" name="banner_principal" class="form-control mb-2" />
                            </div>
                        </div>

                        <div class="col-md-6 mb-4">
                            <div class="card shadow-md rounded-lg p-4" style="height: 250px;">
                                <h5 class="font-semibold text-lg">Banner Mobile</h5>
                                <h4 class="mb-2 mt-2">Tamanho recomendado da imagem: 1000x500</h4>
                                <?php if(isset($img) && $img->banner_principal_mobile): ?>
                                    <img src="<?php echo e(asset('storage/' . $img->banner_principal_mobile)); ?>" class="img-fluid mb-2" style="max-width: 120px; max-height: 50px;" />
                                    <button type="button" class="btn btn-danger btn-sm" onclick="removeBanner('<?php echo e($img->id); ?>', 'banner_principal_mobile')">
                                        <i class="fa fa-trash"></i> Excluir
                                    </button>
                                <?php endif; ?>
                                <input type="file" accept="image/*" name="banner_principal_mobile" class="form-control mb-2" />
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-success mb-4 mt-2">Salvar</button>
                </form>

                <ul class="nav nav-tabs mb-4 mt-4" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="como-ajudar-tab" data-bs-toggle="tab" href="#como-ajudar" role="tab" aria-controls="como-ajudar" aria-selected="true">Conteúdo da Página</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="nova-aba-tab" data-bs-toggle="tab" href="#nova-aba" role="tab" aria-controls="nova-aba" aria-selected="false">Vagas Disponíveis</a>
                    </li>
                </ul>

            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="como-ajudar" role="tabpanel" aria-labelledby="como-ajudar-tab">

                <button type="button" class="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target="#addItemModal">
                    <i class="fas fa-plus"></i> Adicionar Novo Item
                </button>

                <!-- Modal para adicionar item -->
                <div class="modal fade" id="addItemModal" tabindex="-1" aria-labelledby="addItemModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="addItemModalLabel">Adicionar Novo Item</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form action="<?php echo e(route('como-ajudar.store')); ?>" method="POST">
                                    <?php echo csrf_field(); ?>
                                    <div class="mb-3">
                                        <label for="titulo" class="form-label">Título</label>
                                        <input type="text" class="form-control" id="titulo" name="titulo" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="descricao" class="form-label">Descrição</label>
                                        <textarea class="form-control" id="descricao" name="descricao" rows="3" required></textarea>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                        <button type="submit" class="btn btn-success">Salvar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-4 table-responsive">
                    <table class="table table-striped table-bordered">
                        <thead class="table-dark">
                            <tr>
                                <th class="text-center">Título</th>
                                <th class="text-center" style="max-width: 500px;">Descrição</th>
                                <th class="text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php if(isset($content) && $content->isNotEmpty()): ?>
                                <?php $__currentLoopData = $content; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <tr>
                                    <td class="text-center"><?php echo e($item->titulo); ?></td>
                                    <td class="text-center" style="max-width: 500px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                                        <?php echo e($item->descricao); ?>

                                    </td>
                                    <td class="text-center">
                                        <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editItemModal<?php echo e($item->id); ?>">
                                            Editar
                                        </button>

                                        <form action="<?php echo e(route('como-ajudar.destroy', $item->id)); ?>" method="POST" class="delete-form d-inline">
                                            <?php echo csrf_field(); ?>
                                            <?php echo method_field('DELETE'); ?>
                                            <button type="button" class="btn btn-danger delete-btn">Excluir</button>
                                        </form>
                                    </td>
                                </tr>

                                <!-- Modal para edição -->
                                <div class="modal fade" id="editItemModal<?php echo e($item->id); ?>" tabindex="-1" aria-labelledby="editItemModalLabel<?php echo e($item->id); ?>" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="editItemModalLabel">Editar Item</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <form action="<?php echo e(route('como-ajudar.update', $item->id)); ?>" method="POST">
                                                    <?php echo csrf_field(); ?>
                                                    <?php echo method_field('PUT'); ?>
                                                    <div class="mb-3">
                                                        <label for="titulo" class="form-label">Título</label>
                                                        <input type="text" class="form-control" id="titulo" value="<?php echo e($item->titulo); ?>" name="titulo" required>
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="descricao" class="form-label">Descrição</label>
                                                        <textarea class="form-control" id="descricao" name="descricao" rows="3" required><?php echo e($item->descricao); ?></textarea>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                                        <button type="submit" class="btn btn-success">Salvar</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            <?php else: ?>
                                <tr>
                                    <td colspan="3" class="text-center">Não existem dados cadastrados.</td>
                                </tr>
                            <?php endif; ?>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="tab-pane fade" id="nova-aba" role="tabpanel" aria-labelledby="nova-aba-tab">
                <?php echo $__env->make('como_ajudar.vagas', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
            </div>
        </div>

        <script>
            function removeBanner(id, type) {
                Swal.fire({
                    title: 'Tem certeza?',
                    text: 'Você não poderá reverter isso!',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#d33',
                    cancelButtonColor: '#3085d6',
                    confirmButtonText: 'Sim, excluir!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        fetch(`<?php echo e(url('/imagens')); ?>/${id}/remover/como-ajudar`, {
                            method: 'POST',
                            headers: {
                                'X-CSRF-TOKEN': '<?php echo e(csrf_token()); ?>',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ type: type })
                        })
                        .then(response => {
                            if (response.ok) {
                                Swal.fire(
                                    'Excluído!',
                                    'O banner foi excluído com sucesso.',
                                    'success'
                                ).then(() => location.reload());
                            } else {
                                Swal.fire(
                                    'Erro!',
                                    'Não foi possível excluir o banner.',
                                    'error'
                                );
                            }
                        })
                        .catch(error => console.error('Erro:', error));
                    }
                });
            }
        </script>
        <script>
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', function () {
                const form = this.closest('.delete-form');

                // Exibe o alerta de confirmação
                Swal.fire({
                    title: 'Tem certeza?',
                    text: 'Você não poderá reverter isso!',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#d33',
                    cancelButtonColor: '#3085d6',
                    confirmButtonText: 'Sim, excluir!',
                    cancelButtonText: 'Cancelar'
                }).then(result => {
                    if (result.isConfirmed) {
                        // Envia a requisição DELETE usando fetch
                        fetch(form.action, {
                            method: 'POST',
                            headers: {
                                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                _method: 'DELETE',
                            }),
                        })
                        .then(response => {
                            if (response.ok) {
                                // Alerta de sucesso e recarrega a página
                                Swal.fire({
                                    title: 'Excluído!',
                                    text: 'A Exclusão foi feita com sucesso.',
                                    icon: 'success',
                                    confirmButtonColor: '#3085d6',
                                }).then(() => {
                                    location.reload();
                                });
                            } else {
                                // Alerta de erro
                                Swal.fire({
                                    title: 'Erro!',
                                    text: 'Não é possível excluir vagas que estejam vinculadas a solicitações de candidatura.',
                                    icon: 'error',
                                    confirmButtonColor: '#d33',
                                });
                            }
                        })
                        .catch(error => {
                            console.error('Erro:', error);
                            // Alerta no caso de falha inesperada
                            Swal.fire({
                                title: 'Erro!',
                                text: 'Ocorreu um erro ao realizar a exclusão.',
                                icon: 'error',
                                confirmButtonColor: '#d33',
                            });
                        });
                    }
                });
            });
        });
    });
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
<?php /**PATH C:\Users\ryan.rodrigues\Documents\PainelAdmCasadapaz\resources\views/como_ajudar/index.blade.php ENDPATH**/ ?>