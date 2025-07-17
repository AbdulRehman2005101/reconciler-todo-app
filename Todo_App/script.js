let state={};
let id="0";

function render(){
    let main=document.querySelector("#main");
    main.innerHTML = "";
    const adding_area=document.createElement("div");
    adding_area.classList.add("app-input");

    const add_text=document.createElement("input");
    add_text.type="text";
    add_text.id="title";
    add_text.placeholder="Add title";

    adding_area.appendChild(add_text);

    const add_description=document.createElement("input");
     add_description.type="text";
    add_description.id="description";
    add_description.placeholder="Add description";

    adding_area.appendChild(add_description);

    const add_button=document.createElement("button");
    add_button.classList.add("add-todo");
    add_button.onclick = addTodo;
    add_button.innerText="Add"

    adding_area.appendChild(add_button)

    main.appendChild(adding_area);

    for(let key in state){
        const part=document.createElement("div");
        part.classList.add("my-todos");

        const data=document.createElement("div");
        data.classList.add("show");

        const title=document.createElement("div");
        title.classList.add("my-title");
        title.innerText=state[key].title;

        data.appendChild(title);

        const description=document.createElement("div");
        description.classList.add("my-des");
        description.innerText=state[key].description;

        data.appendChild(description)

        part.appendChild(data);

        const buttons=document.createElement("div");
        buttons.classList.add("remove-done");

        const delete_todo =document.createElement("button");
        delete_todo.classList.add("delete");
        delete_todo.setAttribute("data-type",key);
        delete_todo.innerText="delete"
        delete_todo.addEventListener("click",removetodo);

        buttons.appendChild(delete_todo);

        const done_todo=document.createElement("button");
        done_todo.classList.add("done");
        done_todo.setAttribute("data-type",key);
        done_todo.innerText="Done";
        done_todo.addEventListener("click",removetodo);

        buttons.appendChild(done_todo);

        part.appendChild(buttons);

        main.appendChild(part);

        console.log(part.innerHTML)

    }
}


function addTodo(){
    let title=document.getElementById("title");
    title=title.value;
    let description=document.getElementById("description");
    description=description.value;

    if(title=="" || description==""){
        alert("Please enter title or description.");
        return;
    }
    let new_state={
        "title":title,
        "description":description
    }
    state[id]=new_state;
    id=parseInt(id);
    id=id+1;
    id=id.toString();

    render();
}

function removetodo(event){
    const btn= event.currentTarget;
    let value = btn.getAttribute("data-type");

    delete state[value];
    render();
}

render();