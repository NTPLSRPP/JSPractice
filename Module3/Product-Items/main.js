// 65130500020 Nathaphat Lertsiriphongphan

//input field
const productInput = document.getElementById('product-input')
//display area
const displayArea = document.getElementById('product-list')

function addNewProduct() {
    if (productInput.value.trim().length > 0) {
        addProduct()
    } else {
        alert('Please enter a product name')
        productInput.value = ''
    }
}

function addProduct() {
    const keyword = productInput.value
    const div = document.createElement('div')
    const p = document.createElement('p')
    const button = document.createElement('button')

    div.setAttribute('id', `${keyword}`)
    div.setAttribute('class', 'product-item')

    p.textContent = keyword

    button.textContent = 'Remove'
    button.addEventListener('click', removeProduct)

    div.appendChild(p)
    div.appendChild(button)

    displayArea.appendChild(div)

    productInput.value = ''
}

function removeProduct(productId) {
    const id = productId.target.parentNode.id
    const targetIdEle = document.getElementById(id)
    displayArea.removeChild(targetIdEle)
}

function removeAllProduct() {
    const displayArea = document.getElementById('product-list')
    while (displayArea.firstChild) {
        displayArea.removeChild(displayArea.firstChild)
    }
}

function registerEvent() {
    const addBtn = document.getElementById('add-button')
    addBtn.addEventListener('click', addNewProduct)
    const removeAllBtn = document.getElementById('removeAll-button')
    removeAllBtn.addEventListener('click', removeAllProduct)
}

registerEvent()
