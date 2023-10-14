//fetch fake store api data to save products.
const apiURL = "https://fakestoreapi.com/products";
const res = await fetch(`${apiURL}`);

if(!res.ok) {console.log("Error al hacer fecth");}

const products = await res.json();
export const filterCategory = products.filter(p => {
    return p.category === "women's clothing" || p.category === "men's clothing"
});

