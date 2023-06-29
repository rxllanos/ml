document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#Inventario').style.display = 'none';
    document.querySelector('#Pendientes').style.display = 'none';
    document.querySelectorAll('button').forEach(button => {button.onclick = function() {
            showPage(this.dataset.page);
        }
    });
});

function showPage(page) {
    document.querySelector('#Pendientes').style.display = 'none';
    document.querySelector('#Inventario').style.display = 'none';

    if(page === 'Pendientes') {
      document.querySelector('#Pendientes').style.display = 'block';
      fPendientes();
      }
    if(page === 'Inventario') {
      document.querySelector('#Inventario').style.display = 'block';
      finventario();
      }  

}

function finventario(){
  console.log("hello");
}


function fPendientes(){
    document.querySelector('#Pendientes').style.display = 'none';
    document.querySelector('#Pendientes').style.display = 'block';
    // document.querySelector('#task_list').innerHTML =''; 
    fetch('/tasks/viewset/')
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
            if (item.title !== undefined) {
                const task_entry = document.createElement('div');
                task_entry.className = 'task_entry';
                task_entry.innerHTML += ` Categoria: ${item.category_name}, Nombre: ${item.title}, Detalle: ${item.description} Completado : ${item.empleado}. `;
    //             var btn = document.createElement("BUTTON");
    //             btn.setAttribute = ("class", "negative ui button");   
    //             btn.class = "negative ui button"; 
    //             btn.innerHTML = "Borrar";   
    //             btn.className = "del";
    //             btn.value = item.id;               
    //             task_entry.appendChild(btn);

    //             var btn1 = document.createElement("BUTTON");
    //             btn1.setAttribute = ("class", "negative ui button");  
    //             btn1.class = "negative ui button";  
    //             if(item.completado==true){
    //             btn1.innerHTML = "No completado?";
    //             }
    //             else {
    //             btn1.innerHTML = "Terminado?";
    //             }   
    //             btn1.className = "comp";
    //             btn1.value = item.id;  
    //             btn1.dataset.section = item.tcompletado; 
    //             console.log(btn1.value);
    //             console.log(btn1.dataset.section);
    //             if (item.tcompletado) {
    //             btn1.dataset.section1 = false 
    //             } else {
    //             btn1.dataset.section1 = true
    //             }          
    //             console.log(btn1.dataset.section1);
    //             task_entry.appendChild(btn1);    
    //             task_entry.innerHTML += "<hr>";
    //             if (item.tcompletado) {
    //                 task_entry.style.textDecorationLine = "line-through";
    //             } 
    //             else {
    //             task_entry.style.backgroundColor = "#FDFEFE";
    //             }
    //             document.querySelector('#task_list').append(task_entry);  
            }
            else {
                document.querySelector('#task_list').innerHTML = 'Invalido.';
            }
        })
    })
    .catch(error => {
        console.log('Error:', error);
    });
}




document.addEventListener('click', event => {
    var csrf_token = document.querySelector('[name=csrfmiddlewaretoken]').value;
    const element = event.target;
    if (element.className === 'del') {
      fetch(`tasks/viewset/${element.value}/`, {
        method: 'DELETE',
        headers: {
              'Content-Type':'application/json',
              'X-CSRFToken': csrf_token,
        },
        body: JSON.stringify({
        })
      }) 
      .then(
        setTimeout(function() {
          window.location.reload();
        }, 3000)
      );   
    }
    
    if (element.className === 'comp') {
        fetch(`tasks/viewset/${element.value}/`, {
          method: 'PUT',
          headers: {
                'Content-Type':'application/json',
                'X-CSRFToken': csrf_token,
          },
          body: JSON.stringify({
            tcompletado : element.dataset.section1,
          })
        }) 
        .then(
          setTimeout(function() {
            window.location.reload();
          }, 3000)
        );   
    } 
})