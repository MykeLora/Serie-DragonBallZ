// Función para mostrar la ventana modal con detalles del personaje seleccionado
function mostrarModal(nombre, apellido, fechaNacimiento, descripcion, habilidad) {
    const modal = document.getElementById('modal');
    const modalNombreElemento = document.getElementById('modalNombre');
    const modalApellidoElemento = document.getElementById('modalApellido');
    const modalFechaNacimientoElemento = document.getElementById('modalFechaNacimiento');
    const modalDescripcionElemento = document.getElementById('modalDescripcion');
    const modalHabilidadElemento = document.getElementById('modalHabilidad');

    // Mostrar detalles en la ventana modal
    modalNombreElemento.textContent = nombre;
    modalApellidoElemento.textContent = apellido;
    modalFechaNacimientoElemento.textContent = fechaNacimiento;
    modalDescripcionElemento.textContent = descripcion;
    modalHabilidadElemento.textContent = habilidad;

    // Mostrar la ventana modal
    modal.style.display = 'block';
}

// Función para cerrar la ventana modal
function cerrarModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}