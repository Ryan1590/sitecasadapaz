<p><?php echo $textosEmail['ola']; ?> <?php echo e($solicitacao->nome); ?></p>
<p><?php echo $textosEmail['agradecimento']; ?> <?php echo e($vagaNome->vaga ?? 'Vaga não encontrada'); ?></p>

<?php if($solicitacao->aprovacao === 'aprovada'): ?>
    <p><?php echo $textosEmail['aprovacao']; ?> <?php echo e($endereco->endereco_sede); ?></p>
<?php else: ?>
    <p><?php echo $textosEmail['recusa']; ?></p>
<?php endif; ?>

<?php if(isset($mensagem)): ?>
    <p><?php echo e($mensagem); ?></p>
<?php endif; ?>

<p><?php echo $textosEmail['despedida']; ?></p>
<?php /**PATH C:\Users\ryan.rodrigues\Documents\PainelAdmCasadapaz\resources\views/emails/resposta_solicitacao.blade.php ENDPATH**/ ?>