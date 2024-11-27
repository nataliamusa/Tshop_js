const getCategories = async ()=>{
    const {data} = await axios.get('https://dummyjson.com/products/category-list');
    return data;
};

const displayCategories = async ()=>{
    const categories = await getCategories();
    const result = categories.map( (category)=>{
        return `
        <div class="category">
        <h2>${category}</h2>
        <a href="categoriesDetails.html?category=${category}">Details</a>
        </div>
        `
        

    }).join('');
    document.querySelector(".categories .row").innerHTML = result;
   
}
const getProducts = async ()=>{
    const {data}= await axios.get('https://dummyjson.com/products');
    return data;
}

displayCategories();
