
// Dados dos produtos
const products = [
    {
        id: 1,
        name: "Grand Theft Auto VI",
        price: 599.99,
        image: "image/gta.jpg"
    },
    {
        id: 2,
        name: "Far Cry 3",
        price: 59.99,
        image: "image/farcry.avif"
    },
    {
        id: 3,
        name: "Forza Horizon 5",
        price: 149.99,
        image: "image/forza.jpg"
    },
    {
        id: 4,
        name: "Red Dead Redemption ",
        price: 199.99,
        image: "image/read.avif"
    },
    {
        id: 5,
        name: "Assassin's Creed Unity",
        price: 45.99,
        image: "image/assasino.avif"
    },
    {
        id: 6,
        name: "Minecraft java edition",
        price: 59.99,
        image: "image/minecraft.jpg"
    },
    {
        id: 7,
        name: "Rocket League",
        price: 29.99,
        image: "image/rocket.jpg"
    },
    {
        id:8,
        name: "God of War",
        price: 449.99,
        image: "image/god.webp"
    },
    {
        id:9,
        name: "Dead by Daylight",
        price: 49.99,
        image: "image/deadby.jpg"
    },
    {
        id:10,
        name: "Dying Light",
        price: 79.99,
        image: "image/dying.jpg"
    },
    {
        id:11,
        name: "Ghost of Tsushima",
        price: 249.99,
        image: "image/ghost.jpg"
    },
    {
        id:12,
        name: "The last of us",
        price: 329.99,
        image: "image/thelast.jpg"
    },
];



// Elementos DOM
const productsGrid = document.getElementById('products-grid');
const overlay = document.getElementById('overlay');

// Inicializar a página
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCart();
});

// Renderizar produtos
function renderProducts() {
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">R$ ${product.price.toFixed(2)}</p>
                <a href="novidade.html"><button class="add-to-cart" data-id="${product.id}">Adicionar ao Carrinho</button></a>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}
// Mostrar notificação
function showNotification(message) {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #2ecc71;
        color: white;
        padding: 12px 20px;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1001;
        transition: transform 0.3s, opacity 0.3s;
    `;
    
    document.body.appendChild(notification);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateY(20px)';
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}
const botao = document.getElementById("botao");
const codigoInput = document.getElementById("codigo");
const aviso = document.getElementById("aviso-cupom");

const senha = "SENAI123";

botao.addEventListener("click", () => {
    const codigo = codigoInput.value.trim().toUpperCase();

    if(codigo === senha){
        mostrarAviso("Parabéns! Você descobriu o código.", false);
        botao.textContent = "Resgatado";
        botao.disabled = true;
    } else {
        mostrarAviso("Código inválido. Tente novamente.", true);
    }
});

function mostrarAviso(mensagem, erro = false) {
    aviso.textContent = mensagem;
    aviso.classList.remove("erro");
    if(erro) aviso.classList.add("erro");

    aviso.style.display = "block";

    setTimeout(() => {
        aviso.style.display = "none";
    }, 3000);
}