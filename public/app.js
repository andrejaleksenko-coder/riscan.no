 async function loadProducts() {

    const container = document.getElementById("product-grid");

    try {

        const response = await fetch("/api/products");

        const products = await response.json();

        container.innerHTML = "";

        products.forEach(product => {

            container.innerHTML += `
                <article class="product-card">
                <div class="product-image-wrap">
    <img
        src="/images/hero/Samsung%20990%20PRO%202TB.webp"
        alt="Samsung 990 PRO 2TB"
        class="product-image"
    >
</div>

                    <div class="product-info">

                        <p class="product-meta">
                            ${product.brand} · ${product.category}
                        </p>

                        <h3>${product.name}</h3>

                        <p class="product-store">
                            Available from ${product.store}
                        </p>

                        <p class="price">
                            ${Number(product.price).toLocaleString("nb-NO")}
                            ${product.currency}
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

                </article>
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

