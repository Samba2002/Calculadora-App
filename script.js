//constantes del documento HTML
const botonesNumeros=document.querySelectorAll('.numeros');
const valorAnterior=document.querySelector("#valor-anterior");
const valorActual=document.querySelector("#valor-actual");
const botonesOperadores=document.querySelectorAll('.operador');
const borrarBtn=document.querySelector('#borrar');
const borrar=document.querySelector('#clear');

//variables contadoras
var i=0;
var u=0;
var j=0;
var g='';



//Funciones de la calculadora
class pantalla{
    constructor(){
        this.pantallaValorAnterior=g;
        this.pantallaValorActual='';
        this.operador=''
    }

    agregar(x){
        j=0;

        if(this.operador==''){
            if(x=='.'&&this.pantallaValorAnterior.includes('.')){
            return''
            }
        
        this.pantallaValorAnterior=this.pantallaValorAnterior+x;
        this.mostrar();}
    }

    agregarSegundo(x){
        if(this.operador!=''){
            i=0;
            if(x=='.'&&this.pantallaValorActual.includes('.')){
                return ''}
        
            this.pantallaValorActual=this.pantallaValorActual+x;
            this.mostrar();}
            
    }

    definirOperador(x){
        if(x!=='='){
        this.operador=x;
        this.mostrar();
        j=0;
        }
    }

    mostrar(){
        valorAnterior.innerHTML=this.pantallaValorAnterior;
        valorActual.innerHTML=this.operador+this.pantallaValorActual;
    }

    borrar(){
        if(this.operador==""){
        this.pantallaValorAnterior=this.pantallaValorAnterior.toString().slice(0,-1);
        this.mostrar();}

        else if(this.operador!=""){
        this.pantallaValorActual=this.pantallaValorActual.toString().slice(0,-1);
        this.mostrar();}
    }

    borrarTodo(){
        this.pantallaValorAnterior='';
        this.pantallaValorActual='';
        this.operador='';
        this.mostrar();
    }

    calcular(z=0,l=0){
        if(z==''){z=0}
            if(this.operador=="+"){ 
            g=(parseFloat(z)+parseFloat(l)).toFixed(4);
            this.pantallaValorActual='';
            this.operador='';

            if(g<=9999999999){
            this.pantallaValorAnterior=g;
            this.mostrar();
            i=0;
            j=0;}

            else(this.pantallaValorAnterior='Desbordamiento',this.mostrar(),this.pantallaValorAnterior="")
        }
            else if(this.operador=="-"){ 
            g=(parseFloat(z)-parseFloat(l)).toFixed(4);
            this.pantallaValorActual='';
            this.operador='';
                if(g<=9999999999){
                    this.pantallaValorAnterior=g;
                    this.mostrar();
                    i=0;
                    j=0;} 

                else(this.pantallaValorAnterior='Desbordamiento',this.mostrar(),this.pantallaValorAnterior="")
    }
        
            else if(this.operador=="/"){ 
                if(l!=0){
                    g=(parseFloat(z)/parseFloat(l)).toFixed(4);
                    this.pantallaValorActual='';
                    this.operador='';
                    if(g<=9999999999){
                        this.pantallaValorAnterior=g;
                        this.mostrar();
                        i=0;
                        j=0;}

            else(this.pantallaValorAnterior='Desbordamiento',this.mostrar(),this.pantallaValorAnterior="")
            }

            else if(l==0){
                g="Syntax Error";
                this.pantallaValorActual='';
                this.operador='';
                this.pantallaValorAnterior=g;
                this.mostrar();
                this.pantallaValorAnterior="";
                i=0;
                j=0;
            }
            
        }
            else if(this.operador=="X"){ 
                g=(parseFloat(z)*parseFloat(l)).toFixed(4);
                this.pantallaValorActual='';
                this.operador='';
                if(g<=9999999999){
                this.pantallaValorAnterior=g;
                this.mostrar();
                i=0;
                j=0;
        }
        else(this.pantallaValorAnterior='Desbordamiento',this.mostrar(),this.pantallaValorAnterior="")
    } 
    }
}
//calculadora creada
const pantallaDisplay=new pantalla()

//Eventos de boton

//numeros primera cifra
botonesNumeros.forEach(btn=>btn.addEventListener('click',e=>{
    i++
    if(btn.textContent=="."){
    i=i-1}
    if(i<=10){
        if(pantallaDisplay.pantallaValorActual==''){
            pantallaDisplay.agregar(btn.innerHTML)
            pantallaDisplay.mostrar()}

        else if(pantallaDisplay.pantallaValorActual!=''){
            return ""
        }}

    else if(i>10){
        pantallaDisplay.mostrar();
    }}))

//botones operaciones
botonesOperadores.forEach(btn=>btn.addEventListener('click',e=>{

        
    if(pantallaDisplay.operador==''){
        pantallaDisplay.definirOperador(btn.innerHTML)
        }
    
    else  if(pantallaDisplay.operador!=''&&btn.innerHTML!='='){
        pantallaDisplay.pantallaValorAnterior=pantallaDisplay.pantallaValorAnterior
    }

    else if(btn.innerHTML=='='){
        pantallaDisplay.calcular(pantallaDisplay.pantallaValorAnterior,pantallaDisplay.pantallaValorActual);
    }
    
    }))
    
//borrar
borrarBtn.addEventListener('click',e=>{
        if(pantallaDisplay.operador==""){
            pantallaDisplay.borrar();
            i=i-1
            if(i<0){
            i=0
    }}
    
        else if(pantallaDisplay.operador!=''){
            pantallaDisplay.borrar();
            j=j-1
            if(j<0){
                j=0
            }
        }})

//borrar todo
borrar.addEventListener('click',e=>{
    pantallaDisplay.borrarTodo()
        i=0
        j=0});

//definir segunda cifra
if(pantallaDisplay.operador!=""||pantallaDisplay.operador!='='){
    
    botonesNumeros.forEach(btn=>btn.addEventListener('click',e=>{
        j++
        if(btn.textContent=="."){j=j-1};

        if(j<=10){
            pantallaDisplay.agregarSegundo(btn.innerHTML)
            pantallaDisplay.mostrar()
            }
    
        else if(j>10){
            pantallaDisplay.mostrar();
        }
        }))}


