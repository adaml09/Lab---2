/**
 * Program: Lab-2-app
 * Programmer: Adam LeBlanc
 * Date Updated: 2024-02-20
 * Version: 2.0
 */

class User {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    // Getter and setter methods for firstName
    getFirstName() {
        return this.firstName;
    }

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    // Getter and setter methods for lastName
    getLastName() {
        return this.lastName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    // Getter and setter methods for email
    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    // Getter and setter methods for password
    getPassword() {
        return this.password;
    }

    setPassword(password) {
        this.password = password;
    }
}

//$(document).ready(function (){
    console.log("Script is running");

    // adding text to the fixed bottom navbar
    const bottomNav = document.getElementById('bottomNav');
    bottomNav.innerHTML = "&copy; 2024 Adam LeBlanc";

    // creating heading for all pages
    var headingIndex = document.getElementsByTagName('h1');
    if (headingIndex.length > 0) {
        headingIndex[0].innerHTML = "Lab 2 - Adam LeBlanc";
    }

    // getting the element for the welcome message
    var welcome = document.getElementById('welcome');
    if (welcome) {
        welcome.innerHTML = "Welcome to my Lab-1 website ! :>";
    }

    // getting the element for the products description
    document.addEventListener("DOMContentLoaded", function() {
    var productsP = document.querySelector('.productsP');
    
    if (productsP) {
        productsP.innerHTML = `
            <h3>These are some of my favorite pieces of media.</h3> <br />
            
            First, one of my main hobbies is video games, and probably the best one I have ever played is Rockstar Game's Red Dead Redemption 2. 
            This is one of the most immersive and complete open-world games I've ever experienced. The story is incredible and gripped me to the very end. 
            The ending, which has to be one of the best while also the saddest in any game I've played. It's the only piece of fictional media that has actually brought me to tears. <br />
            
            Next also relates to one of my hobbies, cars. Growing up, it feels like I've always been into cars. One show has been at the center of this, the BBC's Top Gear. 
            With the original trio of Clarkson, Hammond, and May, Top Gear was the perfect blend of cars, comedy, and chaos! I still love rewatching episodes to this day. <br />
            
            Lastly, and relating to my other hobby, is my favorite podcast, Spittin Chiclets. Just like Top Gear with cars, Chiclets combines hilarious comedy and great hockey analysis. 
            They have interviewed some of the greats of the game, including Gretzky, twice! As well as covering the day-to-day of the NHL and hockey culture.
        `;
    }
    
    });

    // Code to inject the text into the h1 tags of the corresponding HTML pages
    if(document.getElementsByClassName('indexHeading').length > 0){
        headingIndex[0].innerHTML = "Lab 2 - Adam LeBlanc";
    }

    // function to console log the contact info data
    function contactLog() {
        let fName = document.getElementsByName("fname")[0].value;
        console.log(fName);

        let lName = document.getElementsByName("lname")[0].value;
        console.log(lName);

        let email = document.getElementsByName("email")[0].value;
        console.log(email);

        let message = document.getElementsByName("shortMessage")[0].value;
        console.log(shortMessage);

        // Set a timer before redirection
        setTimeout(function() {
            window.location.href = './index.html';
        }, 3000);

        // Return false to prevent the form from submitting immediately
        return false;
    }


    document.addEventListener('DOMContentLoaded', function () {
        // Update heading text using id
        var servicesHeading = document.getElementById('services-heading');
        if (servicesHeading) {
            servicesHeading.innerHTML = "<h1>Services<h1>";
        }

        // Update content using id
        var servicesContent = document.getElementById('services');
        if (servicesContent) {
            servicesContent.innerHTML = "<p>Skills: HTML CSS PHP Java JavaScript C C++ Python</p>";

            // Adding a link within the 'services' element
            var servicesLink = document.createElement('a');
            servicesLink.href = "https://docs.google.com/document/d/19zAHeLL2FLOuWtIKlwxdIHxIP_jiZaIM/edit?usp=sharing&ouid=106618540955096717445&rtpof=true&sd=true";
            servicesLink.textContent = "My Resume";
            servicesContent.appendChild(servicesLink);
        }
    });

    document.addEventListener("DOMContentLoaded", function() {
        var aboutMe = document.getElementById('aboutMe');
        if (aboutMe) {
            aboutMe.innerHTML = "My name is Adam LeBlanc and I'm a 20-year-old student currently in my fourth semester at Durham College for computer programming." + 
            "<br />I've grown up in the Durham Region my whole life. <br />"+
            "Some of my hobbies are Cars, video games, and hockey. " +
            "I played hockey growing up, which was a great way to meet people and learn about being part of a team. " + 
            "Cars are something that feels like has always been a part of me. " + 
            "Every summer I spend the weekends at car meets with my dad and friends. <br />" +
            "Volunteer work is required for high school, but for me, it ended up being an experience I really enjoyed." +
            " I ran card Bingo at an old age home, and it was CHAOS, which made it super fun!" + 
            " It would get super competitive!";
        } 
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        var product = document.getElementById('product');
        if(product){
            // Function to add images to the productsP div
            function addImages() {
                // Get the productsP div
                const productsDiv = document.getElementById('productsP');
  
                // Create and add the first image
                const image1 = document.createElement('img');
                image1.src = './images/chiclets-logo.avif';
                productsDiv.appendChild(image1);
  
                // Create and add the second image
                const image2 = document.createElement('img');
                image2.src = './images/RDR2-logo.avif';
                productsDiv.appendChild(image2);
  
                // Create and add the third image
                const image3 = document.createElement('img');
                image3.src = './images/top-gear-logo.jpg';
                productsDiv.appendChild(image3);
            }
        }
        
        // Call the function to add the images when the page loads
        window.onload = addImages;
    });

    

    document.addEventListener('DOMContentLoaded', function() {
        document.querySelector('a[href="./product.html"]').textContent = 'Interests';
    });



    const newNavItem = document.createElement('li');
    newNavItem.classList.add('nav-item');
  
    // Create a link element for "Human Resources"
    const newNavLink = document.createElement('a');
    newNavLink.classList.add('nav-link');
    newNavLink.href = './human-resources.html'; // Replace with the appropriate href
    newNavLink.textContent = 'Human Resources';
  
    // Create a span element for the Font Awesome icon
    const iconSpan = document.createElement('span');
    iconSpan.classList.add('fa', 'fa-users'); // Replace 'fa-users' with the appropriate Font Awesome icon class
  
    // Append the icon span to the link
    newNavLink.appendChild(iconSpan);
  
    // Append the link to the list item
    newNavItem.appendChild(newNavLink);
  
    // Insert the new list item before the "Contact" list item
    const contactNavItem = document.querySelector('.nav-item:last-child');
    contactNavItem.parentNode.insertBefore(newNavItem, contactNavItem);

    document.addEventListener("DOMContentLoaded", function() {
        
        document.getElementById('login_btn').addEventListener('click', function(event){
            e.preventDefault(); // Prevent form submission
            console.log("function reached");
            // Get input values
            var username = $('#exampleInputEmail1').val();
            var password = $('#exampleInputPassword1').val();
                
            // Log values to console 
            console.log('Username: ' + username);
            console.log('Password: ' + password);
        });
        document.getElementById('register_btn').addEventListener('click', function(event){
            e.preventDefault(); // Prevent form submission
                
            // Get input values
            var username = $('#exampleInputEmail1').val();
            var password = $('#exampleInputPassword1').val();
                
            // Log values to console 
            console.log('Username: ' + username);
            console.log('Password: ' + password);
        });
    }); 
    
//});
