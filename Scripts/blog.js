console.log("script ran");

// gets the blog post html element for html insertion
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

        // Get the existing content of the element
        let existingContent = blogPost.innerHTML;

        // Append the new content to the existing content
        blogPost.innerHTML = existingContent + `<h1>${blogTitle}</h1>
            <h2>${blogUserID}</h2>
            <h2>${blogID}</h2>
            <p>${blogBody}</p>`;

        i++;
    }
}

// Calling the async function which holds the rest of the code
fetchData();
