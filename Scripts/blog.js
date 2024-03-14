console.log("script ran");

let blogPost = document.getElementById("blogInfo");


// async function to utilize fetch
async function fetchData() {
    console.log("async reached");
    // jsonFetch holds the json file data
    let jsonFetch = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    // variables to get the individual information from the json file
    var blogUserID;
    var blogID;
    var blogTitle;
    var blogBody;

    // Convert response to JSON
    let jsonData = await jsonFetch.json(); 

    // i integer for iterating through the data in the json (used in the while loop)
    let i = 0;

    // while loop to iterate through each blog's information in the jsonData json file
    while (i < 20) {
        console.log("While loop reached");
        // assigning the information to the variables
        blogUserID = jsonData[i].userId;
        blogID = jsonData[i].id;
        blogTitle = jsonData[i].title;
        blogBody = jsonData[i].body;
        

        i++;
    }
}

// Call the async function
fetchData();
