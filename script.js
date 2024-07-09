const input = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");
function addTask()
{
   if(input.value === '') //checks whether you have entered text or not in input box
   {
    alert('you must write something');
   }
   else{
    let li = document.createElement('li'); //creates new li element
    li.innerHTML = input.value; //it assigns the innerHTML of li the content of input field
    listContainer.appendChild(li); //adds the li new li element to list container
    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span);
   }
   input.value = ''; //makes the input box empty after inserting task
   saveData();
}
listContainer.addEventListener('click',function(e)
{
    if(e.target.tagName === 'LI')
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN')
    {
        e.target.parentElement.remove();
        saveData();
    }
},false)
function saveData()//function to save the data in local storage
{
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();