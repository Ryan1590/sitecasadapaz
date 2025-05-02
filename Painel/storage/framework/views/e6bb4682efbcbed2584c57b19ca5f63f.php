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

    <?php if(session('success')): ?>
        <div class="alert alert-success" role="alert">
            <?php echo e(session('success')); ?>

        </div>
    <?php endif; ?>

        <h2 class="text-2xl font-bold mb-4 text-center">Sobre Nós</h2>

        <form action="<?php echo e(route('banners-sobrenos.store')); ?>" method="POST" enctype="multipart/form-data">
            <?php echo csrf_field(); ?>

            <div class="row mb-4">
                <div class="col-md-6 mb-4">
                    <div class="card shadow-md rounded-lg p-4" style="height: 250px;">
                        <h5 class="font-semibold text-lg">Banner Desktop</h5>
                        <h4 class="mb-2 mt-2">Tamanho recomendado da imagem: 1920x472 </h4>
                        <?php if(isset($img) && $img->banner_principal): ?>
                            <img src="<?php echo e(asset('storage/' . $img->banner_principal)); ?>" class="img-fluid mb-2" style="max-width: 400px; max-height: 50px;" />
                            <button type="button" class="btn btn-danger btn-sm mt-3" onclick="removeBanner('<?php echo e($img->id); ?>', 'banner_principal')">
                                <i class="fa fa-trash"></i> Excluir
                            </button>
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

            <div class="card shadow-md rounded-lg p-4 mb-4 align">
                <h5 class="font-semibold text-lg">Imagem da Missão</h5>
                <h4 class="mb-2 mt-2">Tamanho recomendado da imagem: 341x464</h4>
                <?php if(isset($img) && $img->imagem_missao): ?>
                    <img src="<?php echo e(asset('storage/' . $img->imagem_missao)); ?>" class="img-fluid mb-2" style="max-width: 100px;" />
                    <button type="button" class="btn btn-danger btn-sm" onclick="removeBanner('<?php echo e($img->id); ?>', 'imagem_missao')">
                        <i class="fa fa-trash"></i> Excluir
                    </button>
                <?php endif; ?>
                <input type="file" accept="image/*" name="imagem_missao" class="form-control mb-2" />
            </div>

            <button type="submit" class="btn btn-success mb-4 mt-2">Salvar</button>
        </form>

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
                        fetch(`<?php echo e(url('/imagens')); ?>/${id}/remover/sobrenos`, {
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

        <form action="<?php echo e(isset($content) ? route('sobrenos.update', $content->id) : route('sobrenos.store')); ?>" method="POST" enctype="multipart/form-data">
            <?php echo csrf_field(); ?>
            <?php if(isset($content)): ?>
                <?php echo method_field('PATCH'); ?>
            <?php endif; ?>

            <div class="row mb-4 mt-4">
                <div class="col-12 mb-3">
                    <div class="card shadow-md rounded-lg p-4">
                        <h5 class="font-semibold text-lg mb-2">Missão</h5>
                        <textarea name="missao" class="form-control" rows="3"><?php echo e(isset($content) ? $content->missao : ''); ?></textarea>
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <div class="card shadow-md rounded-lg p-4">
                        <h5 class="font-semibold text-lg mb-2">Sobre a Casa da Paz</h5>
                        <textarea name="sobre" class="form-control" rows="3"><?php echo e(isset($content) ? $content->sobre : ''); ?></textarea>
                    </div>
                </div>

                <div class="col-12 mb-3">
                    <div class="card shadow-md rounded-lg p-4">
                        <h5 class="font-semibold text-lg mb-2">No que acreditamos?</h5>
                        <textarea name="no_que_acreditamos" class="form-control" rows="3"><?php echo e(isset($content) ? $content->no_que_acreditamos : ''); ?></textarea>
                    </div>
                </div>

                <div class="col-12 mb-3">
                    <div class="card shadow-md rounded-lg p-4">
                        <h5 class="font-semibold text-lg mb-2">Onde e como as atividades acontecem?</h5>
                        <textarea name="atividades" class="form-control" rows="3"><?php echo e(isset($content) ? $content->atividades : ''); ?></textarea>
                    </div>
                </div>

                <div class="col-12 mb-3">
                    <div class="card shadow-md rounded-lg p-4">
                        <h5 class="font-semibold text-lg mb-2">De onde vêm os recursos?</h5>
                        <textarea name="recursos" class="form-control" rows="3"><?php echo e(isset($content) ? $content->recursos : ''); ?></textarea>
                    </div>
                </div>

                <div class="col-12 mb-3">
                    <div class="card shadow-md rounded-lg p-4">
                        <h5 class="font-semibold text-lg mb-2">Sede própria!</h5>
                        <textarea name="sede" class="form-control" rows="3"><?php echo e(isset($content) ? $content->sede : ''); ?></textarea>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <button type="submit" class="btn btn-success">Salvar</button>
            </div>
        </form>


        <div class="bg-secondary text-white rounded p-4 mx-auto my-5 text-center shadow-lg" style="max-width: 600px;">
            <div>
                <h2 class="fs-2 fw-bold mb-4">Cadastrar Convenios e Parceiros</h2>
                <a href="<?php echo e(route('convenios.index')); ?>" class="btn btn-primary btn-lg px-4 py-2 rounded-pill">
                    Clique Aqui
                </a>
            </div>
        </div>
    
        <h2 class="text-2xl font-bold mb-4 text-center">Equipe</h2>

        <button type="button" class="btn btn-primary mb-4" id="openModalCreate">
            Adicionar Membro
        </button>

    <div class="row">
    <?php if(isset($equipes) && $equipes->isNotEmpty()): ?>
        <?php $__currentLoopData = $equipes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $equipe): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <div class="col-md-3 text-center mb-4">
                <div class="card mb-4 shadow-sm border-light">
                    <div style="overflow: hidden;">
                        <img src="<?php echo e(route('exibir.imagem', ['id' => $equipe->id])); ?>" alt="Foto da equipe" style="width: 100%; height: 400px; object-fit: cover; object-position: center;">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-primary"><?php echo e($equipe->nome); ?></h5>
                        <p class="card-text"><?php echo e($equipe->cargo); ?></p>
                        <p class="card-text text-muted"><?php echo e($equipe->profissao); ?></p>
                        <button class="btn btn-warning open-modal-btn" data-id="<?php echo e($equipe->id); ?>">
                            Editar
                        </button>
                        <form action="<?php echo e(route('equipes.destroy', $equipe->id)); ?>" method="POST" class="d-inline delete-form">
                            <?php echo csrf_field(); ?>
                            <?php echo method_field('DELETE'); ?>
                            <button type="button" class="btn btn-danger delete-btn">Excluir</button>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Modal de Edição -->
            <div class="modal fade" id="modalEdit<?php echo e($equipe->id); ?>" tabindex="-1" aria-labelledby="modalEditLabel<?php echo e($equipe->id); ?>" aria-hidden="true">
                <div class="modal-dialog">
                    <form action="<?php echo e(route('equipes.update', $equipe->id)); ?>" method="POST" enctype="multipart/form-data">
                        <?php echo csrf_field(); ?>
                        <?php echo method_field('PUT'); ?>
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalEditLabel<?php echo e($equipe->id); ?>">Editar Membro</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="mb-3">
                                    <label for="nome" class="form-label">Nome</label>
                                    <input type="text" class="form-control" name="nome" value="<?php echo e($equipe->nome); ?>" required>
                                </div>
                                <div class="mb-3">
                                    <label for="cargo" class="form-label">Cargo</label>
                                    <input type="text" class="form-control" name="cargo" value="<?php echo e($equipe->cargo); ?>" required>
                                </div>
                                <div class="mb-3">
                                    <label for="descricao" class="form-label">Profissão</label>
                                    <textarea class="form-control" name="profissao" required><?php echo e($equipe->profissao); ?></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="foto" class="form-label">Foto</label>
                                    <h5 class="mb-2 mt-2">Tamanho recomendado da imagem: 405x417</h5>
                                    <input type="file" class="form-control" name="foto" accept="image/*">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button type="submit" class="btn btn-success">Salvar Alterações</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    <?php else: ?>
        <div class="col-12 text-center">
            <p class="text-muted">Nenhum membro encontrado.</p>
        </div>
    <?php endif; ?>
</div>

<!-- Script para Abertura do Modal -->
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                var openModalBtns = document.querySelectorAll('.open-modal-btn');

                openModalBtns.forEach(function(btn) {
                    btn.addEventListener('click', function() {
                        var id = this.getAttribute('data-id');
                        var modal = document.getElementById('modalEdit' + id);
                        var modalInstance = new bootstrap.Modal(modal);
                        modalInstance.show();
                    });
                });
            });
        </script>

        <div class="modal fade" id="modalCreate" tabindex="-1" aria-labelledby="modalCreateLabel" aria-hidden="true">
            <div class="modal-dialog">
                <form action="<?php echo e(route('equipes.store')); ?>" method="POST" enctype="multipart/form-data">
                    <?php echo csrf_field(); ?>
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modalCreateLabel">Adicionar Membro</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="nome" class="form-label">Nome</label>
                                <input type="text" class="form-control" name="nome" required>
                            </div>
                            <div class="mb-3">
                                <label for="cargo" class="form-label">Cargo</label>
                                <input type="text" class="form-control" name="cargo" required>
                            </div>
                            <div class="mb-3">
                                <label for="profissao" class="form-label">Profissão</label>
                                <textarea class="form-control" name="profissao" required></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="foto" class="form-label">Foto</label>
                                <h5 class="mb-2 mt-2">Tamanho recomendado da imagem: 325x272</h5>
                                <input type="file" class="form-control" name="foto" accept="image/*" required>
                            </div>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="submit" class="btn btn-success">Adicionar Membro</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // Abre o modal de criação
            document.getElementById('openModalCreate').addEventListener('click', function () {
                const modalCreate = new bootstrap.Modal(document.getElementById('modalCreate'));
                modalCreate.show();
            });

            // Configura os botões de exclusão
            document.querySelectorAll('.delete-btn').forEach(btn => {
                btn.addEventListener('click', function () {
                    const form = this.closest('.delete-form');

                    // Exibe a confirmação de exclusão
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
                            // Envia a requisição DELETE
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
                                    // Alerta de sucesso
                                    Swal.fire({
                                        title: 'Excluído!',
                                        text: 'O membro foi excluído com sucesso.',
                                        icon: 'success',
                                        confirmButtonColor: '#3085d6',
                                    }).then(() => {
                                        location.reload();
                                    });
                                } else {
                                    // Alerta de erro
                                    Swal.fire({
                                        title: 'Erro!',
                                        text: 'Não foi possível excluir o membro.',
                                        icon: 'error',
                                        confirmButtonColor: '#d33',
                                    });
                                }
                            })
                            .catch(error => {
                                console.error('Erro:', error);
                                // Alerta de erro no caso de falha
                                Swal.fire({
                                    title: 'Erro!',
                                    text: 'Ocorreu um erro ao excluir o membro.',
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
<?php /**PATH C:\Users\ryan.rodrigues\Documents\PainelAdmCasadapaz\resources\views/sobre_nos/index.blade.php ENDPATH**/ ?>