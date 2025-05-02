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
    <div class="container my-5">

        <div class="card shadow-sm border-0 mb-5">
            <div class="card-body p-4">
                <h2 class="text-primary fw-bold text-center mb-4">Cadastrar Convênio ou Parceiro</h2>

                <?php if(session('success')): ?>
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <?php echo e(session('success')); ?>

                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fechar"></button>
                    </div>
                <?php endif; ?>

                <form action="<?php echo e(route('convenios.store')); ?>" method="POST">
                    <?php echo csrf_field(); ?>
                    <div class="row g-3">
                        <div class="col-md-8">
                            <div class="form-floating">
                                <input type="text" name="nome" id="nome" class="form-control" placeholder="Nome" required>
                                <label for="nome">Nome</label>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-floating">
                                <select name="tipo" id="tipo" class="form-select" required>
                                    <option value="Parceria">Parceria</option>
                                    <option value="Convenio">Convênio</option>
                                </select>
                                <label for="tipo">Tipo</label>
                            </div>
                        </div>
                    </div>
                    <div class="text-end mt-4">
                        <button type="submit" class="btn btn-primary px-4 py-2 rounded-pill">
                            <i class="bi bi-plus-circle me-1"></i> Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </div>

        
        <div class="card shadow-sm border-0">
            <div class="card-body p-4">
                <h3 class="text-dark fw-bold text-center mb-4">Lista de Convênios e Parcerias</h3>

                <div class="table-responsive">
                    <table class="table table-hover align-middle mb-0">
                        <thead class="table-light">
                            <tr>
                                <th>Nome</th>
                                <th>Tipo</th>
                                <th class="text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php $__currentLoopData = $convenios; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $convenio): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <tr>
                                    <td><?php echo e($convenio->nome); ?></td>
                                    <td><?php echo e($convenio->tipo); ?></td>
                                    <td class="text-center">
                                        <button class="btn btn-sm btn-warning me-2" data-bs-toggle="modal" data-bs-target="#editModal<?php echo e($convenio->id); ?>">
                                            <i class="bi bi-pencil-square me-1"></i> Editar
                                        </button>
                                        <form id="delete-form-<?php echo e($convenio->id); ?>" action="<?php echo e(route('convenios.destroy', $convenio->id)); ?>" method="POST" class="d-inline">
                                            <?php echo csrf_field(); ?>
                                            <?php echo method_field('DELETE'); ?>
                                            <button type="button" class="btn btn-sm btn-danger" onclick="confirmDelete('<?php echo e($convenio->id); ?>')">
                                                <i class="bi bi-trash me-1"></i> Excluir
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </tbody>
                    </table>
                     <!-- Paginação -->
                    <div class="d-flex justify-content-center">
                        <?php echo e($convenios->links()); ?>

                    </div>
                </div>

                
                <?php $__currentLoopData = $convenios; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $convenio): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <div class="modal fade" id="editModal<?php echo e($convenio->id); ?>" tabindex="-1" aria-labelledby="editModalLabel<?php echo e($convenio->id); ?>" aria-hidden="true">
                        <div class="modal-dialog">
                            <form action="<?php echo e(route('convenios.update', $convenio->id)); ?>" method="POST">
                                <?php echo csrf_field(); ?>
                                <?php echo method_field('PUT'); ?>
                                <div class="modal-content rounded">
                                    <div class="modal-header bg-primary text-white">
                                        <h5 class="modal-title">Editar Convênio/Parceria</h5>
                                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Fechar"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="form-floating mb-3">
                                            <input type="text" name="nome" class="form-control" id="nome<?php echo e($convenio->id); ?>" value="<?php echo e($convenio->nome); ?>" required>
                                            <label for="nome<?php echo e($convenio->id); ?>">Nome</label>
                                        </div>
                                        <div class="form-floating">
                                            <select name="tipo" id="tipo<?php echo e($convenio->id); ?>" class="form-select" required>
                                                <option value="Parceria" <?php echo e($convenio->tipo === 'Parceria' ? 'selected' : ''); ?>>Parceria</option>
                                                <option value="Convenio" <?php echo e($convenio->tipo === 'Convenio' ? 'selected' : ''); ?>>Convênio</option>
                                            </select>
                                            <label for="tipo<?php echo e($convenio->id); ?>">Tipo</label>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                        <button type="submit" class="btn btn-primary">
                                            <i class="bi bi-check-circle me-1"></i> Salvar
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

            </div>
        </div>

    </div>

    <script>
        function confirmDelete(id) {
            Swal.fire({
                title: 'Tem certeza?',
                text: "Essa ação não poderá ser desfeita!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#6c757d',
                confirmButtonText: 'Sim, excluir',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    document.getElementById('delete-form-' + id).submit();
                }
            });
        }
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
<?php /**PATH C:\Users\ryan.rodrigues\Documents\PainelAdmCasadapaz\resources\views/convenios/index.blade.php ENDPATH**/ ?>