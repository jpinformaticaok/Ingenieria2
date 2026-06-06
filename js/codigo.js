const boton=document.querySelector("#btnAgregarFila");
// agregamos una fila a la tabla cada vez que se hace click en el boton
boton.addEventListener("click",()=>{
    const tabla=document.querySelector("#tabla1 tbody");
    const nuevaFila=document.createElement("tr");
    nuevaFila.innerHTML=`
        <td>Nuevo dato 1</td>
        <td>Nuevo dato 2</td>
        <td>Nuevo dato 3</td>
    `;
    tabla.appendChild(nuevaFila);
});