// 65130500020 Nathaphat Lertsiriphongphan

// const createGuestList = require('./data/guestdata.js')

import { createGuestList } from './data/guestdata.js'


const guestList = createGuestList()

function guestForm() {
  //provide initial guests data list created from GuestManagement class
  let guests = guestList

  // 1. register event for searching and adding
  function registerEventHandling() {
    // register an event listener on the "keyup" event of the "Search" input field for searching guests. The handler function is "searchGuest" function
    const searchInput = document.getElementById('search-input')
    searchInput.addEventListener('keyup', searchGuest)

    // register an event listener on the "click" event of the "Add" button for adding a new guest. The handler function is "addGuest" function
    const addBtn = document.getElementById('add-guest-btn')
    addBtn.addEventListener('click', addGuest)
  }


  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {
    //  create elements to display a guest
    const guestDiv = document.createElement('div')
    const guestSpan = document.createElement('span')
    const removeSpan = document.createElement('span')

    // set text content for the elements
    guestSpan.textContent = `${guestItem.firstname} ${guestItem.lastname}`
    removeSpan.textContent = ' [x]'

    // set attributes for the elements
    removeSpan.setAttribute('class', 'remove-icon')
    removeSpan.setAttribute('id', `${guestItem.firstname}-${guestItem.lastname}`)
    removeSpan.setAttribute('style', 'cursor:pointer;color:red')

    // register event for removing a guest
    removeSpan.addEventListener('click', removeGuest)

    // append elements to the display area
    guestDiv.appendChild(guestSpan)
    guestDiv.appendChild(removeSpan)

    // get the display area and append the guest div to it
    const displayArea = document.getElementById('display-area')
    displayArea.appendChild(guestDiv)
  }


  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) {
    // get the display area and remove all existing guests
    const displayArea = document.getElementById('display-area')
    while (displayArea.firstChild) {
      displayArea.removeChild(displayArea.firstChild)
    }

    // display all guests in the display area
    guestResult.forEach((guest) => {
      displayGuest(guest)
    })
  }


  // 4. Function to search and display matching guests
  function searchGuest(event) {
    // get the keyword from the search input field
    const searchInput = document.getElementById('search-input')
    const keyWord = searchInput.value

    // search guests by the keyword and display the result
    const guestReuslt = guests.searchGuests(keyWord)
    displayGuests(guestReuslt)
  }


  // 5. Function to add a new guest
  function addGuest() {
    // get the firstname and lastname from the input fields
    const firstnameInput = document.getElementById('firstname-input')
    const lastnameInput = document.getElementById('lastname-input')
    // put value of input fields into variables
    const firstname = firstnameInput.value
    const lastname = lastnameInput.value

    // add a new guest
    const addGuest = guests.addNewGuest(firstname, lastname)

    // display all guests
    displayGuests(addGuest)

    // clear input fields
    firstnameInput.value = ''
    lastnameInput.value = ''
  }

  // 6. Function to remove a guest
  function removeGuest(event) {
    // get the id of the guest to be removed
    const id = event.target.id

    // split the id into firstname and lastname
    const [firstname, lastname] = id.split('-')
    // or use the following code instead
    // const fullname = id.split('-')
    // const firstname = fullname[0]
    // const lastname = fullname[1]

    // remove the guest
    guests.removeGuest({ firstname, lastname })

    // display all guests
    displayGuests(guests.getAllGuests())
  }

  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest
  }
}
// module.exports = guestForm
export { guestForm }
const { registerEventHandling, displayGuests } = guestForm()
registerEventHandling()
displayGuests(guestList.getAllGuests())
