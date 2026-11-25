/* Crea src/saludo.js que exporte una función obtenerEstado() 
que devuelva { estado: "Online", version: "1.0.0", fecha: new Date().
toLocaleDateString() }. */
export function obtenerEstado() {
    return {
        estado: "Online",
        version: "1.0.0",
        fecha: new Date().toLocaleDateString()
    };
}