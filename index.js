const task=document.getElementById('item_box')
const list_container=document.getElementById('list-container')


function addtask(){
    if(task.value===''){
        alert("Write something!!");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=task.value;
        list_container.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    task.value=''
    saveData();

}
list_container.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("Data",list_container.innerHTML)
}
function showTask(){
    list_container.innerHTML.localStorage.getItem("Data")
}
showTask()
list_container.addEventListener('keypress',function(e){
    if (e.key==="Enter"){
        addtask()
    }
})
