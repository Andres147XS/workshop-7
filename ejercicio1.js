class ave {
    constructor (tipoDePico, tipoDeAlas, hábitat, sexo, nombre, edad, estaVivo){
        this.tipoDePico = tipoDePico;
        this.tipoDeAlas = tipoDeAlas;
        this.hábitat = hábitat;
        this.sexo = sexo;
        this.nombre = nombre;
        this.edad = edad;
        this.estaVivo = estaVivo;
    }
    //volar, cantar, construirNido, comer, dormir, darLuz, incubarHuevos
    volar(){
        console.log("Algunas aves pueden volar")
    }
    cantar(){
        console.log("Las aves pueden cantar")
    }
    construirNido(){
        console.log("las aves pueden construir nidos")
    }
    comer(){
        console.log("Las aves pueden comer")
    }
    dormir(){
        console.log("Las aves pueden dormir")        
    }
    darLuz(){
        console.log("las aves pueden dar luz")
    }
    incubarHuevos(){
        console.log("Las aves pueden incubar huevos")
    }
}

class felino {
    constructor(tipoDePelaje, hábitat, tipoDeGarras, sexo, nombre, edad, estaVivo, placenta){
        this.tipoDePelaje = tipoDePelaje;
        this.hábitat =hábitat;
        this.tipoDeGarras = tipoDeGarras;
        this.sexo = sexo;
        this.nombre = nombre;
        this.edad = edad;
        this.estaVivo = estaVivo;
        this.placenta =placenta;
    }
    cazar(){
        console.log("Los felinos cazan")
    }
    trepar(){
        console.log("Los felinos trepan")
    }
    ronronear(){
        console.log("Los felinos ronronean")
    }
    comer(){
        console.log("Los felinos comen")
    }
    dormir(){
        console.log("Los felinos duermen")
    }
    darLuz(){
        console.log("Los felinos dan a luz")
    }
    amamantar(){
        console.log("Los felinos amamantan")
    }
}

class pez {
    constructor(tipoAletas, tipoEscamas, hábitat, sexo, nombre, edad, estaVivo, tipoHuevo){
        this.tipoAletas = tipoAletas;
        this.tipoEscamas = tipoEscamas;
        this.hábitat = hábitat;
        this.sexo = sexo;
        this.nombre = nombre;
        this.edad = edad;
        this.estaVivo = estaVivo
        this.tipoHuevo = tipoHuevo
    }
    nadar(){
        console.log("Los peces pueden nadar")
    }
    respirar(){
        console.log("Los peces pueden respirar")
    }
    comer(){
        console.log("Los peces pueden comer")
    }
    dormir(){
        console.log("Los peces pueden dormir")
    }
    darLuz(){
        console.log("Los peces pueden dar luz")
    }
    incubarHuevos(){
        console.log("Los peces pueden incubar huevos")
    }
}

class paquidermo {
    constructor(tipoDePiel, tipoDePatas, hábitat, sexo, nombre, edad, estaVivo, placenta){
        this.tipoDePiel = tipoDePiel;
        this.tipoDePatas = tipoDePatas;
        this.hábitat = hábitat;
        this.sexo = sexo;
        this.nombre = nombre;
        this.edad = edad;
        this.estaVivo = estaVivo;
        this.placenta = placenta;
    }
    nadar(){
        console.log("Los paquidermos pueden nadar")
    }
    comer(){
        console.log("Los paquidermos pueden comer")
    }
    dormir(){
        console.log("Los paquidermos pueden dormir")
    }
    darLuz(){
        console.log("Los paquidermos pueden dar luz")
    }
    amamantar(){
        console.log("Los paquidermos pueden amamantar")
    }
}