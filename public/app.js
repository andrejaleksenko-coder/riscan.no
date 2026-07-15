async function loadProducts() {
    const container = document.getElementById("products");

    try {
        const response = await fetch("http://192.168.10.2:8000/products");
        const products = await response.json();

        container.innerHTML = "";

        products.forEach(product => {
            container.innerHTML += `
                <p>
                    <strong>${product.name}</strong><br>
                    ${product.price} ${product.currency}
                </p>
                <hr>
            `;
        });

    } catch (error) {
        container.innerHTML = "Unable to load products.";
        console.error(error);
    }
}

loadProducts();
