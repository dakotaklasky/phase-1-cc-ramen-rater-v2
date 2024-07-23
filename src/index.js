// index.js

// Callbacks
const handleClick = (ramen) => {
  // Add code
  const ramenImg = document.querySelector(".detail-image")
  const ramenName = document.querySelector(".name")
  const ramenRest = document.querySelector(".restaurant")
  const ramenRating = document.querySelector("#rating-display")
  const ramenComment = document.querySelector("#comment-display")

  ramenImg.src = ramen.image
  ramenName.textContent = ramen.name
  ramenRest.textContent = ramen.restaurant
  ramenRating.textContent = ramen.rating
  ramenComment.textContent = ramen.comment

};

const addSubmitListener = () => {
  // Add code
  const ramenForm = document.getElementById("new-ramen")
  ramenForm.addEventListener('submit',(event) =>{
    event.preventDefault()

    //get values in the input box
    const newName = document.getElementById("new-name")
    const newRest = document.getElementById("new-restaurant")
    const newImg = document.getElementById("new-image")
    const newRating = document.getElementById("new-rating")
    const newComment = document.getElementById("new-comment")

    //add those to a new ramen element
    //append the new ramen element to the images
    const ramenElement = document.createElement('img')
    console.log(newImg.value)
    ramenElement.src = newImg.value

    const ramenMenu = document.getElementById('ramen-menu')
    ramenMenu.appendChild(ramenElement)

    // does the new ramen element need to get added to the json database? maybe that's advanced
  })
  //add a new ramen and add it to the ramen menu div

}

const displayRamens = () => {
  // Add code

  const ramenMenu = document.getElementById('ramen-menu')

  fetch("http://localhost:3000/ramens")
  .then((response) => response.json())
  .then((ramens) => {
    //create element
    ramens.forEach(ramen =>{
    const ramenElement = document.createElement('img')
    ramenElement.src = ramen.image

    //append child
    ramenMenu.appendChild(ramenElement)
    
    //click

    ramenElement.addEventListener('click',() =>{
      handleClick(ramen)
    })

    })
  })
};

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here

  //domcontentloaded listener
  document.addEventListener("DOMContentLoaded",() =>{
    displayRamens()
    addSubmitListener()
  })
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
