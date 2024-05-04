class user{
    constructor(nombre, email, puntosAcumulados, clave){
        this.nombre = nombre;
        this.email = email;
        this.puntosAcumulados = puntosAcumulados;
        this.clave = clave;
    }
    acumularPuntos(){

    }
    canjearPuntos(){

    }
}

class phisicalProduct {
    constructor(nombre, puntosNecesarios, cantidadDisponible, precio, stock){
        this.nombre = nombre;
        this.puntosNecesarios = puntosNecesarios;
        this.cantidadDisponible = cantidadDisponible;
        this.precio = precio;
        this.stock = stock;
    }
    actualizarStock(){

    }
    obtenerInfo(){

    }
    enviarProducto(){

    }
}

class digitalProduct{
    constructor(nombre, puntosNecesarios, URL, cantidadDisponible, stock){
        this.nombre = nombre;
        this.puntosNecesarios = puntosNecesarios;
        this.URL = URL;
        this.cantidadDisponible = cantidadDisponible;
        this.stock = stock;
    }
    obtenerInfo(){

    }
    descargar(){

    }
    obtenerProductoEmail(){

    }
}

class activity{
    constructor(tipo, puntosOtorgados){
        this.tipo = tipo;
        this.puntosOtorgados = puntosOtorgados;
    }
    completarActividad(){

    }
}

class categoryProduct {
    constructor(nombre, descripción){
        this.nombre = nombre;
        this.descripción = descripción;
    }
    listarProductos(){

    }
}

class changeOrder {
    constructor(usuario, producto, fecha){
        this.usuario = usuario;
        this.producto = producto;
        this.fecha = fecha;
    }
    confirmarOrden(){

    }
    cancelarOrden(){

    }
}

class manager {
    constructor(nombre, email, clave){
        this.nombre = nombre;
        this.email = email;
        this.clave = clave;
    }
    agregarProducto(){

    }
    modificarProducto(){
        
    }
    eliminarUsuario(){

    }
}