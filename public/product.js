async function loadProduct() {

    const container = document.getElementById("product-detail");

    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");

    if (!productId) {
        container.innerHTML = `
            <p>Product ID is missing.</p>
        `;
        return;
    }

    try {

        const response = await fetch(`/api/products/${productId}`);

        if (!response.ok) {
            throw new Error("Product not found");
        }

        const product = await response.json();

        container.innerHTML = `
            <article class="product-detail-card">

                <p class="product-meta">
                    ${product.brand} · ${product.category}
                </p>

                <h1>${product.name}</h1>

                

   

                <div class="product-actions">

                    <button class="buy-button">
                        Add to Cart
                    </button>

                    <button class="details-button">
                        Buy Now
                    </button>

                </div>

            </article>
        `;

    } catch (error) {

        container.innerHTML = `
            <p>Unable to load product.</p>
        `;

        console.error(error);
    }
}

loadProduct();