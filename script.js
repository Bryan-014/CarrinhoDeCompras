var litleCarr = [];

function addProduct() {
    if (litleCarr.length == 0) {
        document.getElementById('head').innerHTML = `<tr><th>Quantidade</th><th class="w-74">Produto</th><tr>`;
    }

    if (document.getElementById('product').value == '') {
        alert("Você precisa informar o produto!");
        return;
    }
    if (document.getElementById('qtd').value == '') {
        alert("Você precisa informar a quantidade!");
        return;
    }

    let productInfo = {
        description: document.getElementById('product').value,
        qtd: document.getElementById('qtd').value
    }
    let {description, qtd} = productInfo;

    litleCarr.push(productInfo);

    document.getElementById('table').innerHTML += `<tr><td>${qtd}</td><td>${description}</td></tr>`;

    document.getElementById('product').value = '';
    document.getElementById('qtd').value = '';
    document.getElementById('product').focus();
}