# Javascript Challenge v.1.3.0

Included in this repository is a blank HTML file containing the list of items stored in the *info* variable. This is a sample data that you might get when you are requesting data from a REST API endpoint.

Using the provided HTML file, please create a mobile web prototype that will list *ALL* the items separated by category. Please see the wireframe as a guide (wireframe.png). 

### Regarding the Wireframe:
Please note that this is just a "wireframe" and we would expect you to apply some designs. Using Bootstrap or Foundation should suffice.

## Requirements:
* HTML5 and CSS3 required.
* Items should be dynamically added when the page loads.
* Please use Javascript only. We can reconsider jQuery... no other frameworks (ReactJS, AngularJS, Vue.js, etc...)

## Please answer the following questions:
* Please explain how did you come up with the solution. We would like to see your train of thought.
    - Basically, I have to rebuild the data in a way I can use it in a loop and get all nescessary details as I've noticed that categories and products are both included in the items array and so i came up with this format
    obj = {
        category-id: {
            category-name: name,
            products: []
        }
    }
    I've noticed in the items array that a category's id starts with character "c" while product's id starts with "p" so I used this as basis to determine what is category and products and just used the parent to assign all products to the correct category.
* Please explain any design decisions made (why you chose the design/framework, etc.)
    - I used Bootstrap framework for the styles since this is what I'm comfortable using with and quite popular in terms of responsiveness. As for the colors I used a combination of the company's logo.
* Please indicate tools that you used for coming up with your solution.
    - Visual Studio Code
    - Chrome
* Choose one: Star Wars or Star Trek? Why?
    Star Wars. I'm not a fan of both but I know Star Wars better in terms of characters and the stories and Star Wars is much more popular than Star Trek.