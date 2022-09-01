
const toDoSection = document.getElementById('to-do-sec')
const titleInput = document.getElementById('title-input')
const descriptionInput = document.getElementById('description-input')
const popUp = document.getElementById('pop-up')
const editeForm = document.getElementById('edite-form')
const editetitleInput = document.getElementById('edite-title-input')
const editedescriptionInput = document.getElementById('edite-description-input')
var editeID = ''
const time = new Date

if (localStorage.length!=0) {
    var getItem = JSON.parse(localStorage.getItem('value'))
    var array = [...getItem]
}
else{
    var array = []
}


if (localStorage.getItem('value')!=null) loadLocalStorage()

function inputFocus(){
    titleInput.focus()
    
}

function addNewItem(){
if (titleInput.value == '' || descriptionInput.value == '') {
    popUp.style.animation='fade-in alternate 2s'
    popUp.style.display='flex'
} else {
    createNewItem()
}
}

function closePopUp(){
    popUp.style.animation='fade-out alternate 2s'
    setTimeout(function(){popUp.style.display='none'} , 2000)
}

function createNewItem(){
    const divCart = document.createElement('div')
    const divsection1 = document.createElement('div')
    const divsection2 = document.createElement('div')
    const divsection3 = document.createElement('div')
    const divsection4 = document.createElement('div')
    const divsection5 = document.createElement('div')
    const tiggleDiv = document.createElement('div')
    const tiggleBtn = document.createElement('div')
    const editeBtn = document.createElement('button')
    const deleteBtn = document.createElement('button')
    const title = document.createElement('p')
    const description = document.createElement('p')
    const date = document.createElement('p')
    const checked = document.createElement('p')
    divsection1.className = 'flex-row justify-content-space-between align-items-start flex-column-gap-one-half'
    divsection2.className = 'flex-row justify-content-start align-items-start flex-column-gap-one-half'
    divsection3.className = 'flex-row justify-content-start align-items-start flex-column-gap-one-half'
    divsection4.className = 'flex-row justify-content-start align-items-start flex-column-gap-two'
    divsection5.className = 'flex-row justify-content-end align-items-center flex-grow font-size-24'
    tiggleDiv.className = 'toggle-div'
    tiggleBtn.className = 'toggle-btn'
    editeBtn.className = 'btn-primary'
    deleteBtn.className = 'btn-delete'
    divCart.className = 'div-cart'
    title.className = 'font-family font-size-24 font-weight-500'
    description.className = 'font-family font-size-20 font-weight-500'
    date.className = 'font-family font-size-18 font-weight-500'
    checked.className = 'font-family font-size-24 font-weight-500'
    title.innerHTML = `Title : ${titleInput.value}`
    description.innerHTML = `Description : ${descriptionInput.value}`
    date.innerHTML = `Date : ${time.getFullYear()} / ${time.getMonth()} / ${time.getDate()}`
    editeBtn.innerHTML = 'Edite'
    deleteBtn.innerHTML = 'Delete'
    checked.innerHTML = 'Checked'
    checked.style.display = 'none'
    divCart.id = Math.round(Math.random()*10000)
    const id = divCart.id
    toDoSection.appendChild(divCart)
    divCart.appendChild(divsection1)
    divCart.appendChild(divsection2)
    divCart.appendChild(divsection3)
    divCart.appendChild(divsection4)
    divsection1.appendChild(title)
    divsection1.appendChild(checked)
    divsection2.appendChild(description)
    divsection3.appendChild(date)
    divsection4.appendChild(editeBtn)
    divsection4.appendChild(deleteBtn)
    divsection4.appendChild(divsection5)
    divsection5.appendChild(tiggleDiv)
    tiggleDiv.appendChild(tiggleBtn)
    tiggleBtn.addEventListener("click" , checkedItem);
    deleteBtn.addEventListener("click" , deleteItem);
    editeBtn.addEventListener("click" , editeItem);
 
    function editeItem(){
        editeForm.style.animation='fade-in alternate 2s'
        editeForm.style.display='flex'
    

        for (let index = 0; index < array.length; index++) {

            if (array[index].ID == id) {
                
                editetitleInput.value =  array[index].Title      
                editedescriptionInput.value =  array[index].Description 
                editeID =  array[index].ID
            }
            
        }
    }
    function checkedItem(){
 
        for (let index = 0; index < array.length; index++) {

            if (array[index].ID == id) {
                
                if (array[index].Checked == 'false') {
                    
                    array[index].Checked ="true"
                    divCart.style.backgroundColor = '#cec17575'
                    tiggleDiv.style.backgroundColor = '#779880'
                    tiggleBtn.style.backgroundColor = '#396445'
                    tiggleBtn.style.right = '22px'
                    checked.style.display = 'flex'
                }
                else{
                    array[index].Checked ="false"
                    divCart.style.backgroundColor = '#FFFFFF'
                    tiggleDiv.style.backgroundColor = '#FFFFFF'
                    tiggleBtn.style.backgroundColor = '#779880'
                    tiggleBtn.style.right = '4px'
                    checked.style.display = 'none'
                }
            }
            
        }
        localStorage.setItem('value' ,JSON.stringify(array))
    }

    function deleteItem(){
        
        document.getElementById(id).remove()
        for (let index = 0; index < array.length; index++) {
    
            if (array[index].ID == id) {
                array.splice(index , 1)
            }
            
        }
        localStorage.setItem('value' ,JSON.stringify(array))
    }

    saveInLocalStorage(titleInput , descriptionInput , id)
}

function saveInLocalStorage(titleInput , descriptionInput , id){
    const value = {
        ID:id,
        Title : titleInput.value ,
        Description : descriptionInput.value,
        Date : `${time.getFullYear()} / ${time.getMonth()} / ${time.getDate()}`,
        Checked : 'false'
    }
    
array.push(value)
localStorage.setItem('value' ,JSON.stringify(array))
}

function loadLocalStorage(){

for (let index = 0; index < getItem.length; index++) {
    old(getItem[index])
}
}

function old(items) {

    const divCart = document.createElement('div')
    const divsection1 = document.createElement('div')
    const divsection2 = document.createElement('div')
    const divsection3 = document.createElement('div')
    const divsection4 = document.createElement('div')
    const divsection5 = document.createElement('div')
    const tiggleDiv = document.createElement('div')
    const tiggleBtn = document.createElement('div')
    const editeBtn = document.createElement('button')
    const deleteBtn = document.createElement('button')
    const title = document.createElement('p')
    const description = document.createElement('p')
    const date = document.createElement('p')
    const checked = document.createElement('p')
    divsection1.className = 'flex-row justify-content-space-between align-items-start flex-column-gap-one-half'
    divsection2.className = 'flex-row justify-content-start align-items-start flex-column-gap-one-half'
    divsection3.className = 'flex-row justify-content-start align-items-start flex-column-gap-one-half'
    divsection4.className = 'flex-row justify-content-start align-items-start flex-column-gap-two'
    divsection5.className = 'flex-row justify-content-end align-items-center flex-grow font-size-24'
    tiggleDiv.className = 'toggle-div'
    tiggleBtn.className = 'toggle-btn'
    editeBtn.className = 'btn-primary'
    deleteBtn.className = 'btn-delete'
    divCart.className = 'div-cart'
    title.className = 'font-family font-size-24 font-weight-500'
    description.className = 'font-family font-size-20 font-weight-500'
    date.className = 'font-family font-size-18 font-weight-500'
    checked.className = 'font-family font-size-24 font-weight-500'
    title.innerHTML = `Title : ${items.Title}`
    description.innerHTML = `Description : ${items.Description}`
    date.innerHTML = `Date : ${items.Date}`
    editeBtn.innerHTML = 'Edite'
    deleteBtn.innerHTML = 'Delete'
    checked.innerHTML = 'Checked'
    checked.style.display = 'none'
    divCart.id = items.ID
    const id = divCart.id
    toDoSection.appendChild(divCart)
    divCart.appendChild(divsection1)
    divCart.appendChild(divsection2)
    divCart.appendChild(divsection3)
    divCart.appendChild(divsection4)
    divsection1.appendChild(title)
    divsection1.appendChild(checked)
    divsection2.appendChild(description)
    divsection3.appendChild(date)
    divsection4.appendChild(editeBtn)
    divsection4.appendChild(deleteBtn)
    divsection4.appendChild(divsection5)
    divsection5.appendChild(tiggleDiv)
    tiggleDiv.appendChild(tiggleBtn)
    tiggleBtn.addEventListener("click" , checkedItem);
    deleteBtn.addEventListener("click" , deleteItem);
    editeBtn.addEventListener("click" , editeItem);

    if (items.Checked == "true") {
        divCart.style.backgroundColor = '#cec17575'
        tiggleDiv.style.backgroundColor = '#779880'
        tiggleBtn.style.backgroundColor = '#396445'
        tiggleBtn.style.right = '22px'
        checked.style.display = 'flex'
    }
 
    function editeItem(){
        editeForm.style.animation='fade-in alternate 2s'
        editeForm.style.display='flex'
    

        for (let index = 0; index < array.length; index++) {

            if (array[index].ID == id) {
                
                editetitleInput.value =  array[index].Title      
                editedescriptionInput.value =  array[index].Description  
                editeID =  array[index].ID
            }
            
        }
    }

    function checkedItem(){
 
        for (let index = 0; index < array.length; index++) {

            if (array[index].ID == id) {
                
                if (array[index].Checked == 'false') {
                    
                    array[index].Checked ="true"
                    divCart.style.backgroundColor = '#cec17575'
                    tiggleDiv.style.backgroundColor = '#779880'
                    tiggleBtn.style.backgroundColor = '#396445'
                    tiggleBtn.style.right = '22px'
                    checked.style.display = 'flex'
                }
                else{
                    array[index].Checked ="false"
                    divCart.style.backgroundColor = '#FFFFFF'
                    tiggleDiv.style.backgroundColor = '#FFFFFF'
                    tiggleBtn.style.backgroundColor = '#779880'
                    tiggleBtn.style.right = '4px'
                    checked.style.display = 'none'
                }
            }
            
        }
        localStorage.setItem('value' ,JSON.stringify(array))
    }


    function deleteItem(){
        document.getElementById(id).remove()
        for (let index = 0; index < array.length; index++) {
    
            if (array[index].ID == id) {
                array.splice(index, 1)
            }
            
        }
        localStorage.setItem('value' ,JSON.stringify(array))
    }

}

function saveChange(){
    if (editetitleInput.value == '' || editedescriptionInput.value == '') {
        popUp.style.animation='fade-in alternate 2s'
        popUp.style.display='flex'
        editeForm.style.animation='fade-out alternate 2s'
        setTimeout(function(){editeForm.style.display='none'} , 2000)
    } else {
        editeForm.style.animation='fade-out alternate 2s'
        setTimeout(function(){editeForm.style.display='none'} , 2000)
        var getItemInSaveChangeFunction = JSON.parse(localStorage.getItem('value'))
        var arrayInSaveChangeFunction = [...getItemInSaveChangeFunction]
            
            for (let index = 0; index < arrayInSaveChangeFunction.length; index++) {
        
                if (arrayInSaveChangeFunction[index].ID == editeID) {
                    const editevalue = {
                        ID:arrayInSaveChangeFunction[index].ID,
                        Title : editetitleInput.value ,
                        Description : editedescriptionInput.value,
                        Date : `${time.getFullYear()} / ${time.getMonth()} / ${time.getDate()}`,
                        Checked : arrayInSaveChangeFunction[index].Checked
                    }
                    arrayInSaveChangeFunction.splice(index , 1,editevalue)
                }
                
            }
            localStorage.setItem('value' ,JSON.stringify(arrayInSaveChangeFunction))
            window.location.reload();
    }
    

}

