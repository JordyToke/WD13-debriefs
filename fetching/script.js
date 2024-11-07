
// fetch function to get book data
async function getBookData() {
  const url = "https://fakestoreapi.com/products/1";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    // wait for response json to be parsed and print it to console
    const responseJson = await response.json();
    console.log(responseJson);
  } catch (error) {
    console.error(error.message);
  }
}