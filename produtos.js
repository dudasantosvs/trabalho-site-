const items = [
    {
    id: 0,
    nome: 'sabonete liquido',
    img: 'https://cf.shopee.com.br/file/4b64c45bb0701ee80b954183dac031db',
    quantidade: 0
},
{
    id: 1,
    nome: 'mascara esfoliante',
    img: 'https://img.lojasrenner.com.br/item/565157831/zoom/1.jpg',
    quantidade: 0
},
{
  id: 2,
    nome: 'serum facial',
    img: 'https://drogariasp.vteximg.com.br/arquivos/ids/411150-1000-1000/Serum-Facial-Adcos-Acqua-Hidratacao-Intensiva-30ml-Drogaria-SP-713341.jpg?v=637332984634400000',
    quantidade: 0
},
]

 iniciarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val)=>{
        console.log(val)
        containerProdutos.innerHTML+= `
        <div class="produto-single">
        <img src="`+val.img+`"  />
        <p> ` +val.nome+`</p>
        <a key="`+val.id+`" href="#"> Adicionar ao carrinho! <a/>
        </div>
        `;
    })
 }
 iniciarLoja();

 atualizarcarrinho = () => {
    console.log()
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";
    items.map((val)=>{
        if(val.quantidade > 0){
            containerCarrinho.innerHTML += `
            <p>` +val.nome+` | quantidade: `+val.quantidade+`</p>
            <hr>

            `;
        }
    })
  }

  var links = document.querySelectorAll('a');
  for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click", function(){
        let key = this.getAttribute ('key');
        items[key].quantidade++;
        atualizarcarrinho();
        return false;
    })
  }
  