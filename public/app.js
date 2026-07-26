async function loadProducts() {

    const container = document.getElementById("product-grid");

    try {

        const response = await fetch("http://127.0.0.1:8000/products");
        const products = await response.json();

        container.innerHTML = "";

        products.forEach(product => {

            container.innerHTML += `
                <div class="product-card">

                    <h3>${product.name}</h3>

                    <p class="price">
                        ${product.price} ${product.currency}
                    </p>

                    <div class="product-actions">
                        <button class="buy-button">
                            Add to Cart
                        </button>

                        <button class="details-button">
                            Buy Now
                        </button>
                    </div>

                </div>
            `;

        });

    } catch (error) {

        container.innerHTML = `
            <div class="loading-card">
                Unable to load products.
            </div>
        `;

        console.error(error);

    }

}

loadProducts();
