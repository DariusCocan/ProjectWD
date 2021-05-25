const itemL = document.getElementById('item');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    additem();
}) 
function additem(item){
    let itemtxt = input.value
    if (item){
        itemtxt = item.text
    }
    if(itemtxt){
        const itemelement = document.createElement('li')
        if(item && item.completed){
            itemelement.classList.add('item')
        }

        itemelement.innerText=itemtxt
        itemelement.addEventListener('click', ()=>itemelement.classList.toggle('done'))
        itemelement.addEventListener('contextmenu', (e)=>{
            e.preventDefault()
            itemelement.remove()
        })


        itemL.appendChild(itemelement);
        input.value='';
    }
}
