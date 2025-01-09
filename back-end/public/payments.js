function selectPayment(pagamento) {
  const divPagamento = document.getElementById("divPagamento");
  let content = "";

  if (pagamento === "Cartão de Crédito") {
    content = `
      <h4>Pagamento com Cartão</h4>
      <form>
        <div class="mb-3">
          <label for="cardNumber" class="form-label">Número do Cartão</label>
          <input type="text" id="cardNumber" class="form-control" placeholder="1234 5678 9012 3456">
        </div>
        <div class="mb-3">
          <label for="expiry" class="form-label">Validade</label>
          <input type="text" id="expiry" class="form-control" placeholder="MM/AA">
        </div>
        <div class="mb-3">
          <label for="cvv" class="form-label">CVV</label>
          <input type="text" id="cvv" class="form-control" placeholder="123">
        </div>
        <button type="button" class="btnConfirma btn btn-primary">Confirmar</button>
      </form>
    `;
  } else if (pagamento === "Pix") {
    content = `
      <h4>Pagamento com Pix</h4>
      <p>Use o QR Code abaixo para realizar o pagamento:</p>
      <img src="https://via.placeholder.com/200" alt="QR Code" class="img-fluid">
      <button type="button" class="btnConfirma btn btn-primary">Confirmar</button>
    `;
  } else if (pagamento === "Boleto") {
    content = `
      <h4>Pagamento com Boleto</h4>
      <p>Gerando o boleto...</p>
      <button class="btn btn-warning">Baixar Boleto</button>
      <button type="button" class="btnConfirma btn btn-primary">Confirmar</button>
    `;
  }

  divPagamento.innerHTML = content;

  // Reatribuir o evento aos botões de confirmar após atualizar o HTML
  confirmarPagamento();
}

function confirmarPagamento() {
  const btnConfirma = document.querySelectorAll('.btnConfirma');
  btnConfirma.forEach(x => {
    x.addEventListener('click', () => {
      // Limpa o carrinho e redireciona
      localStorage.setItem('carrinho', JSON.stringify([]));
      window.location.href = 'http://localhost:3000';
    });
  });
}
