async function fetchTodo1() {
  try {
    const url = "https://jsonplaceholder.typicode.com/todos/1";

    const response = await fetch(url);
    const data = await response.json();
    // const title = data.title;
    // return title;
    // if (!data) {
    //   console.log("Loading");
    // }
    console.log("FROM THE FETCH FUNCTION ", data);
    return data;
  } catch (e) {
    console.log("Fetching failed ", e.message);
    throw new Error("Failed to fetch data");
  }
}

export { fetchTodo1 };

export const printTitle = async (getTitle) => {
  try {
    const data = await getTitle;
    console.log(data.title);
    return data.title;
  } catch (e) {
    console.error("Error in printTitle: ", e.message);
  }
};

export const loadTitle = async (toUpperCaseTodo) => {
  try {
    const data = await toUpperCaseTodo;
    const title = data.title;
    const transformedTitle = title.toUpperCase();
    return transformedTitle;
  } catch (e) {
    console.error("Error in printTitle: ", e.message);
  }

  // return fetchTodo1().then((extractedData) => {
  //   const title = extractedData.title;
  //   const trasnformedTitle = title.toUpperCase();
  //   return trasnformedTitle;
  // });
};
