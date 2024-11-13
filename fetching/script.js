// element selectors
const title = document.getElementById('title');
const category = document.getElementById('category');
const price = document.getElementById('price');
const description = document.getElementById('description');
const image = document.getElementById('image');

const nextButton = document.getElementById('nextButton');
const prevnextButton = document.getElementById('prevButton');

// fetch function to get product data
async function getProductData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    // wait for response json to be parsed and print it to console
    const jsonResponse = response.json()
    console.log(jsonResponse);
    return await jsonResponse;
  } catch (error) {
    console.error(error.message);
  }
}

// render product data to table
const render = async(data) => {
  title.innerHTML = data.title;
  category.innerHTML = data.category;
  price.innerHTML = '$' + data.price;
  description.innerHTML = data.description;
  image.src = data.image;
};


// store product data
const getProducts = async() => {
  const productUrls = ['https://fakestoreapi.com/products/1', 'https://fakestoreapi.com/products/2'];
  // await first product data
  const products = await Promise.all([
    for(let i = 0; i < urls.length; i++) {
      getProductData(urls[i]);
    }
  ]);

  // render first product to page
  render(products[0]);

  nextButton.addEventListener('click', () => render(secondProduct));
  prevButton.addEventListener('click', () => render(secondProduct));
}

getProducts();

