
export function formatearFecha(fecha) {
    let fechaObj = new Date(fecha * 1000);
    let opcionesFecha = { year: '2-digit', month: '2-digit', day: '2-digit' };
    let opcionesHora = { hour: '2-digit', minute: '2-digit' };
    let fechaFormateada = fechaObj.toLocaleDateString('es-ES', opcionesFecha).replace(/\//g, '.') + ' a las ' + fechaObj.toLocaleTimeString('es-ES', opcionesHora);
    
    return fechaFormateada
}

export function convertirDuracion(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    const minutosStr = minutos.toString().padStart(2, '0');
    const segundosStr = segundosRestantes.toString().padStart(2, '0');
    return `${minutosStr}:${segundosStr}`;
  }