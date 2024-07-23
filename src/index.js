// index.js

// Callbacks
const handleClick = (ramen) => {
  //get ramen details when clicked
  const ramenImg = document.querySelector(".detail-image")
  const ramenName = document.querySelector(".name")
  const ramenRest = document.querySelector(".restaurant")
  const ramenRating = document.querySelector("#rating-display")
  const ramenComment = document.querySelector("#comment-display")

  //display ramen details
  ramenImg.src = ramen.image
  ramenName.textContent = ramen.name
  ramenRest.textContent = ramen.restaurant
  ramenRating.textContent = ramen.rating
  ramenComment.textContent = ramen.comment

};

const addSubmitListener = () => {
  
  const ramenForm = document.getElementById("new-ramen")

  //when new ramen is submitted through form...
  ramenForm.addEventListener('submit',(event) =>{
    event.preventDefault()

    //get values in the input box
    const newName = ramenForm.querySelector("#new-name")
    const newRest = ramenForm.querySelector("#new-restaurant")
    const newImg = ramenForm.querySelector("#new-image")
    const newRating = ramenForm.querySelector("#new-rating")
    const newComment = ramenForm.querySelector("#new-comment")

    //create new ramen object
    const newRamen = {
        name: newName.value,
        restaurant: newRest.value,
        image: newImg.value,
        rating: newRating.value,
        comment: newComment.value
    }

    //create new image element 
    const ramenElement = document.createElement('img')
    ramenElement.src = newImg.value

    //display new ramen image in ramen menu
    const ramenMenu = document.getElementById('ramen-menu')
    ramenMenu.appendChild(ramenElement)

    //when new image is clicked dispaly its properties 
    ramenElement.addEventListener('click',() =>{
      handleClick(newRamen)
    })
  })

}

const displayRamens = () => {
  const ramenMenu = document.getElementById('ramen-menu')

  //get json data
  fetch("http://localhost:3000/ramens")
  .then((response) => response.json())
  .then((ramens) => {
    //display ramen upon opening
    handleClick(ramens[0])

    ramens.forEach(ramen =>{
    //create img element for each ramen
    const ramenElement = document.createElement('img')
    ramenElement.src = ramen.image

    //append to menu
    ramenMenu.appendChild(ramenElement)
    
    //when clicked...
    ramenElement.addEventListener('click',() =>{
      handleClick(ramen)
    })
    })
  })
};

const addEditListener = () =>{

  const editForm = document.getElementById("edit-ramen")

  //when new ramen is submitted through form...
  editForm.addEventListener('submit',(event) =>{
    event.preventDefault()

    //get values in the input box
    const editRating = editForm.querySelector("#new-rating")
    const editComment = editForm.querySelector("#new-comment")

    //update the current display
    const ramenRating = document.querySelector("#rating-display")
    const ramenComment = document.querySelector("#comment-display")

    ramenRating.textContent = editRating.value
    ramenComment.textContent = editComment.value

  })



}

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
  document.addEventListener("DOMContentLoaded",() =>{
    displayRamens()
    addSubmitListener()
    addEditListener()
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
