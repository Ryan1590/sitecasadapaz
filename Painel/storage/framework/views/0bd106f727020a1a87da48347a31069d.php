<link href="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>

<!-- Botão para adicionar nova vaga -->
<button type="button" class="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target="#addVagaModal">
    <i class="fas fa-plus"></i> Adicionar Nova Vaga
</button>

<!-- Modal para adicionar nova vaga -->
<div class="modal fade" id="addVagaModal" tabindex="-1" aria-labelledby="addVagaModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="addVagaModalLabel">Adicionar Nova Vaga</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form action="<?php echo e(route('vagas.store')); ?>" method="POST">
                    <?php echo csrf_field(); ?>
                    <div class="mb-3">
                        <label for="vaga" class="form-label">Vaga</label>
                        <input type="text" class="form-control" id="vaga" name="vaga" required>
                    </div>
                    <div class="mb-3">
                        <label for="necessidade" class="form-label">Há Necessidade?</label>
                        <select class="form-select" id="necessidade" name="necessidade" required>
                            <option value="" disabled selected>Selecione a necessidade</option>
                            <option value="Sim">Sim</option>
                            <option value="Não">Não</option>
                        </select>
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
                <th class="text-center">Vaga</th>
                <th class="text-center" style="max-width: 500px;">Necessidade</th>
                <th class="text-center">Ações</th>
            </tr>
        </thead>
        <tbody>
            <?php if(isset($vagas) && $vagas->isNotEmpty()): ?>
                <?php $__currentLoopData = $vagas; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $vaga): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <tr>
                    <td><?php echo e($vaga->vaga); ?></td>
                    <td class="text-center" style="max-width: 500px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                        <button class="btn btn-sm <?php echo e($vaga->necessidade == 'Sim' ? 'btn-success' : 'btn-danger'); ?>">
                            <?php echo e($vaga->necessidade); ?>

                        </button>
                    </td>
                    <td class="text-center">
                        <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editVagaModal<?php echo e($vaga->id); ?>">
                            Editar
                        </button>
                        <form action="<?php echo e(route('vagas.destroy', $vaga->id)); ?>" method="POST" class="delete-form d-inline">
                                <?php echo csrf_field(); ?>
                                <?php echo method_field('DELETE'); ?>
                                <button type="button" class="btn btn-danger delete-btn">Excluir</button>
                        </form>
                    </td>
                </tr>
                <div class="modal fade" id="editVagaModal<?php echo e($vaga->id); ?>" tabindex="-1" aria-labelledby="editVagaModalLabel<?php echo e($vaga->id); ?>" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="editVagaModalLabel">Editar Vaga</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form action="<?php echo e(route('vagas.update', $vaga->id)); ?>" method="POST">
                                    <?php echo csrf_field(); ?>
                                    <?php echo method_field('PUT'); ?>
                                    <div class="mb-3">
                                        <label for="vaga" class="form-label">Vaga</label>
                                        <input type="text" class="form-control" id="vaga" value="<?php echo e($vaga->vaga); ?>" name="vaga" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="necessidade" class="form-label">Necessidade</label>
                                        <select class="form-select" id="necessidade" name="necessidade" required>
                                            <option value="" disabled>Selecione a necessidade</option>
                                            <option value="Sim" <?php if($vaga->necessidade == 'Sim'): echo 'selected'; endif; ?>>Sim</option>
                                            <option value="Não" <?php if($vaga->necessidade == 'Não'): echo 'selected'; endif; ?>>Não</option>
                                        </select>
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
                    <td colspan="3" class="text-center">Não existem vagas cadastradas.</td>
                </tr>
            <?php endif; ?>
        </tbody>
    </table>
</div>

<?php /**PATH C:\Users\ryan.rodrigues\Documents\PainelAdmCasadapaz\resources\views/como_ajudar/vagas.blade.php ENDPATH**/ ?>