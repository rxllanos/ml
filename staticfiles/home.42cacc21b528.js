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


function fPendientes(){
    document.querySelector('#task_list').innerHTML =''; 
    fetch('/tasks/viewset/')
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
            if (item.title !== undefined) {
                const task_entry = document.createElement('div');
                task_entry.className = 'task_entry';
                task_entry.innerHTML += ` Categoria: ${item.category}, Nombre: ${item.title} Completado : ${item.tcompletado}. `;
                var btn = document.createElement("BUTTON");
                btn.setAttribute = ("class", "negative ui button");   
                btn.class = "negative ui button"; 
                btn.innerHTML = "Borrar";   
                btn.className = "del";
                btn.value = item.id;               
                task_entry.appendChild(btn);
                var btn1 = document.createElement("BUTTON");
                btn1.class = "negative ui button";  
                if(item.tcompletado){
                btn1.innerHTML = "Cambiar a no completado.";
                }
                else {
                btn1.innerHTML = "Cambiar a terminado.";
                }   
                btn1.className = "comp";
                btn1.value = item.id;  
                btn1.dataset.section = item.pendiente; 
                if (item.tcompletado) {
                btn1.dataset.section1 = false 
                } else {
                btn1.dataset.section1 = true
                }          
                task_entry.appendChild(btn1);    
                task_entry.innerHTML += "<hr>";
                if (item.tcompletado) {
                    task_entry.style.textDecorationLine = "line-through";
                } 
                else {
                task_entry.style.backgroundColor = "#FDFEFE";
                }
                document.querySelector('#task_list').append(task_entry);  
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
