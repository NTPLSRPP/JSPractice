// 65130500020 Nathaphat Lertsiriphongphan

function addNewProduct() {
    
    const productInput = document.getElementById('product-input')
    const keyword = productInput.value
 	if(keyword.value.trim().length > 0) {
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

    const displayArea = document.getElementById('product-list')
    displayArea.appendChild(div)

    productInput.value = ''
    }
}

function removeProduct(productId) {
    const id = productId.target.parentNode.id
    const targetIdEle = document.getElementById(id)
    const displayArea = document.getElementById('product-list')
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
    removeAllBtn.addEventListener('click', removeAllProduct)}

registerEvent()
