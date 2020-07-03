const baseUrl = "https://wincacademydatabase.firebaseio.com/nico";

const getData = async () => {
  try {
    const apiUrl = `${baseUrl}/tasks.json`;
    let response = await fetch(apiUrl, {
      method: "GET",
    });
    const result = await response.json();
    // console.log("Result", result);
    let tasks = Object.keys(result).map((key) => ({
      id: key,
      description: result[key].description,
      done: result[key].done,
    }));
    console.log("After the tasks array", tasks);
    return tasks;
  } catch (error) {
    console.log(error);
  }
};

const postData = async (task) => {
  try {
    const apiUrl = `${baseUrl}/tasks.json`;
    let response = await fetch(apiUrl, {
      method: "POST",
      //manier 1
      // body: `{"description": "${task}", "done": false}`
      //manier 2
      body: JSON.stringify({ description: task, done: false })
    });
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};


const removeData = async (hashId) => {
  try {
    const apiUrl = `${baseUrl}/tasks/${hashId}.json`;
    let response = await fetch(apiUrl, { method: "DELETE" });
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};


// const putData = async (id, Description, status) => {
//   if (status) {
//     try {
//       const apiUrl = `${baseUrl}/tasks/${hashId}/done.json`;
//       let response = await fetch(apiUrl, { method: "PUT" });
//       const result = await response.json();
//       console.log(result);
//       return result;
//     } catch (error) {
//       console.log(error);
//     }
//   } else {
//     try {
//       const apiUrl = `${baseUrl}/tasks/${hashId}/done.json`;
//       let response = await fetch(apiUrl, { method: "PUT" });
//       const result = await response.json();
//       console.log(result);
//       return result;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// };
