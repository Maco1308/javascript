function init()
{
    mostrarMenu();
}

function mostrarMenu()
{
    let op="";
    while(op!=="FIN"){
        op=prompt(`Seleccionar una Categoria:
                    CPU
                    NOTEBOOKS
                    MONITORES
                    ACCESORIOS
                    FIN Para salir`)
        if(op!=="FIN")
        {
            mostrarProductos(op);
        }
        else if(op=="FIN"){
            alert("GRACIAS POR VISITARNOS");
            
        }
    }
}

function mostrarProductos(op){
    console.log(op);
    if(op==="CPU"){
        mostrarCpu();
    }
    else if(op==="NOTEBOOKS"){
        mostrarNotebooks();
    }
    else if(op==="MONITORES"){
        mostrarMonitores();
    }
    else if(op==="ACCESORIOS"){
        mostrarAccesorios();
    }
    else{
        alert("LA OPCION INGRESADA NO ES CORRECTA");
    }

}

function mostrarCpu(){
    let op="";
    let totalCompra = 0;
    while(op!=="VOLVER"){
        op=prompt(`Seleccionar una Categoria:
                        GAMERS: $10,000
                        ESCRITORIO: $8,000
                        VOLVER`);
        if(op==="VOLVER"){
            alert(`Su total de la Compra es de ${totalCompra}`);
            
        }
        else if(op==="GAMERS"){
            totalCompra+=10000;
        } 
        else if(op==="ESCRITORIO"){
            totalCompra+=8000;
        } 
    }
    
}
function mostrarNotebooks(){
    let op="";
    let totalCompra = 0;
    while(op!=="VOLVER"){
        op=prompt(`Seleccionar una Categoria:
                        ASUS: $20000
                        DELL: $18000
                        HP: $21000
                        VOLVER`);
        if(op==="VOLVER"){
            alert(`Su total de la Compra es de ${totalCompra}`);
            
        }
        else if(op==="ASUS"){
            totalCompra+=20000;
        } 
        else if(op==="DELL"){
            totalCompra+=18000;
        } 
        else if(op==="HP"){
            totalCompra+=21000;
        }

    }
}
function mostrarMonitores(){
    let op="";
    let totalCompra = 0;
    while(op!="VOLVER"){
        op=prompt(`Seleccionar una Categoria:
                    CURVO: $10000
                    LED: $5000
                    VOLVER`);
        if(op==="VOLVER"){
            alert(`Su total de la Compra es de ${totalCompra}`);
            
        }
        else if(op==="CURVO"){
            totalCompra+=10000;
        }
        else if(op==="LED"){
            totalCompra+=5000;
        }

    }
}
function mostrarAccesorios(){
    let op="";
    let totalCompra = 0;
    while(op!="VOLVER"){
        op=prompt(`Seleccionar una Categoria:
                        TECLADO: $1000
                        MOUSE: $2000
                        CABLE: $800
                        PARLANTES: $5000
                        VOLVER`);
        if(op==="VOLVER"){
            alert(`Su total de la Compra es de ${totalCompra}`);
        
        }
        else if(op==="TECLADO"){
            totalCompra+=1000;
        }
        else if(op==="MOUSE"){
            totalCompra+=2000;
        }
        else if(op==="CABLE"){
            totalCompra+=800;
        }
        else if(op==="PARLANTES"){
            totalCompra+=5000;
        }          
    }
}

init();