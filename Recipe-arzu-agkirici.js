/*********************************************************************************
* I confirm that this assignment is my own work in accordance with college Academic
Policy. No part of this assignment has been copied manually or electronically from any
other source (including web sites) or distributed to any person or website.
**
Name: Arzu Gizem Kirici Student ID: 135304210 Date: 02/16/2022
**
*******************************************************************************/

// The functions
const isPopular = (recipe) => {
   if(recipe.averageRating <= 3.5 && recipe.numOfRatings <= 300){
       return false
   }else {
       return true
   }  
}
const showAll = (listOfRecipes) => {
    for(let i = 0; i < listOfRecipes.length ; i++){
        console.log(`${listOfRecipes[i].RecipeName} (${listOfRecipes[i].averageRating} stars from ${listOfRecipes[i].numOfRatings} reviews)`)
        console.log(`Difficulty: ${listOfRecipes[i].difficulty}\n`)
    }
}


const findRecipe = (keyword, listOfRecipes) => {
    let searchResult = []
    for(let i = 0; i <listOfRecipes.lenght ; i++){
        if (listOfRecipes[i].RecipeName.search(keyword) != null){
        searchResult.push(listOfRecipes[i])
        }
    }  
    return searchResult
}

const leaveRating = (recipe, newRatingValue) => {
    console.log(`Average Rating: ${recipe.averageRating}, Number of Ratings: ${recipe.numOfRatings}\n`)
    console.log(`New Rating:`)
    if(newRatingValue > 5 || newRatingValue < 1){
       newRatingValue = 1 
    }
    recipe.averageRating = ((recipe.averageRating*(recipe.numOfRatings -1))+newRatingValue) / (recipe.numOfRatings + 1)
    recipe.numOfRatings = recipe.numOfRatings + 1
    console.log(`Average Rating: ${recipe.averageRating}, Number of Ratings: ${recipe.numOfRatings}`)
}

//----------------------------------------------------------------
//List of Recipes:

let listOfRecipes = [
    {RecipeName:"Mom's Banana Cake", averageRating:4.5,numOfRatings:1000,difficulty:"Easy"},
    {RecipeName:"Pulled Pork Sandwich", averageRating:5.0,numOfRatings:825,difficulty:"Hard"},
    {RecipeName:"Old Fashioned Chocolate Milkshake", averageRating:2.0,numOfRatings:375,difficulty:"Easy"},
    {RecipeName:"Pork and Beans on Rice", averageRating:3.5, numOfRatings:20, difficulty:"Medium"},
]

//Main Program
console.log("Welcome to our Cooking Website")
console.log("------------------------------")
console.log("The most preferred 4 recipes are:")


showAll (listOfRecipes)

console.log(`Describing the most popular Recipe in array and adding new rating of 2 to it.\n`)

leaveRating(listOfRecipes[0], 2)

console.log(`Is recipe popular? ${isPopular(listOfRecipes[0])}\n`)

console.log(`Searching for recipes with the keyword 'ake' \n`)
 
const searchResult = findRecipe("ake",listOfRecipes)
showAll(searchResult)

// End Main Program
console.log("Thank you for choosing our cooking website!")
console.log("Do not forget to leave review!")