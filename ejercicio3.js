class client {
    constructor(nombre, email, clave, dirección, teléfono){
        this.nombre = nombre;
        this.email = email;
        this.clave = clave;
        this.dirección = dirección;
        this.teléfono = teléfono;
    }
    realizarPedido(){

    }
    verHistorialPedidos(){

    }
    autenticacion(){

    }
}

class restDigital{
    constructor(nombre, menuQR){
        this.nombre = nombre;
        this.menuQR = menuQR;
    }
    agregarPlato(){

    }
    actualizarPlato(){

    }
}

class restFisico{
    constructor(nombre, dirección, menuFisico){
        this.nombre = nombre;
        this.dirección = dirección;
        this.menuFisico = menuFisico;
    }
    agregarPlato(){

    }
    actualizarPlato(){

    }
    eliminarPlato(){

    }
}

class pedido{
    constructor(cliente, restaurante, detallesPedido, estadoPedido){
        this.cliente = cliente;
        this.restaurante = restaurante;
        this.detallesPedido = detallesPedido;
        this.estadoPedido = estadoPedido;
    }
    actualizarEstado(){

    }
    calcularTotal(){

    }
}

class plato {
    constructor(nombre, precio, ingredientes){
        this.nombre = nombre;
        this.precio = precio;
        this.ingredientes = ingredientes;
    }
    obtenerInfo(){

    }
}

class menuQr {
    constructor(plato, URL){
        this.plato = plato;
        this.URL = URL;
    }
    generarQR(){

    }
}

class menuFisico {
    constructor(plato){
        this.plato = plato;
    }
    impresion(){

    }
    visualizacion(){

    }
}

class repartidor {
    constructor(nombre, email, clave, vehículo, disponibilidad){
        this.nombre = nombre;
        this.email = email;
        this.clave = clave;
        this.vehículo = vehículo;
        this.disponibilidad = disponibilidad;
    }
    aceptarEnvío(){

    }
    actualizarUbicación(){

    }
    completarEntrega(){

    }
    autenticacion(){

    }
    actualizarEstado(){
        
    }
}