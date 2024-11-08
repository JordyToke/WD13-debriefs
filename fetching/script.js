// fetch function to get book data
async function getProductData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    // wait for response json to be parsed and print it to console
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse;
  } catch (error) {
    console.error(error.message);
  }
}

// selectors
const title = document.getElementById('title');

const category = document.getElementById('category');

const price = document.getElementById('price');

const description = document.getElementById('description');

const image = document.getElementById('image');

// put book data to table fields
const bookData = getProductData('https://fakestoreapi.com/products/1').then(data => {
  title.innerHTML = data.title;
  category.innerHTML = data.category;
  price.innerHTML = '$' + data.price;
  description.innerHTML = data.description;
  image.src = data.image;
});

// put second product data to table fields
const nextProduct = async () => getProductData('https://fakestoreapi.com/products/2').then(data => {
  title.innerHTML = data.title;
  category.innerHTML = data.category;
  price.innerHTML = '$' + data.price;
  description.innerHTML = data.description;
  image.src = data.image;
});

const nextButton = document.getElementById('nextButton');

nextButton.addEventListener('click', nextProduct);