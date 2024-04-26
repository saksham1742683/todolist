const btn = document.querySelector('button')
const ul = document.querySelector('ul')
const input = document.querySelector('input')

btn.addEventListener("click", function(){
    let item = document.createElement('li')
    item.innerText= input.value;

    let delBtn = document.createElement("button")
    delBtn.innerText= "delete"
    delBtn.classList.add("delete");

    item.appendChild(delBtn) 
    ul.appendChild(item);
    
    input.value= ""
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove()
    }
})



// let delbtns= document.querySelectorAll(".delete")            this method is commented bcz this is not working for the new element generated , bcz of the addEventlistner property is not working for new element .
// for(delbtn of delbtns)
// {
//     delbtn.addEventListener("click",function(){        // deleting element from todo list by removing list elemnt
//         let par = this.parentElement;
//         console.log(par)
//         par.remove( )
//     })
// }