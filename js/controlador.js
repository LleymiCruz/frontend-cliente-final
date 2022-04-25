function login(){
    $.ajax({
        url:'../Backend/api/login.php',
        method:'post',
        data:JSON.stringify({
            correo:document.getElementById('correo').value,
            password:document.getElementById('password').value
        }),
        dataType:'json',
        success:function(res){
            if (res.codigoResultado==1) {
                window.location.href="menuCategorias.html"
                
            }else{
                document.getElementById('error').style.display='block';
                document.getElementById('error').innerHTML=res.mensaje;
            }
            console.log(res)
        },
        error:function (error) {
            console.error(error);
            
        }

    });

}
function registrarCliente(){
    let cantidadClientes=null;
    let id=null;
    $.ajax({
        url:'../Backend/api/usuarios.php',
        method:'get',
        data:'',
        dataType:'json',
        success:function(res){
            for (let i = 0; i < res.length; i++) {
                 cantidadClientes+=1;
                
            }
            id=cantidadClientes+1;
            $.ajax({
                url:'../Backend/api/usuarios.php',
                method:'post',
                data:JSON.stringify({
                        idUsuario: id,
                        nombreUsuario: document.getElementById('nombre').value,
                        apellidoUsuario: document.getElementById('apellido').value,
                        correo: document.getElementById('usuario').value,
                        contrasena: document.getElementById('contrasena').value,
                        ordenes: ''
            
                }),
                dataType:'json',
                success:function(res){
                    if (res.codigoResultado==1) {
                        
                        window.location.href="credenciales.html"
                       
                    }
                    
                    console.log(res)
                },
                error:function (error) {
                    console.error(error);
                    
                }
        
            });
           
        },
        error:function (error) {
            console.error(error);  
        }
    });

   
}

function menu () {
    document.getElementById('regresar').innerHTML=`<a href="login.html"><div><img class="m-1"src="img/Regresar.png" alt=""></div></a>
    <img class="posicionLogo"src="img/planet express 1.png" alt="">`
    document.getElementById('div-secundario').innerHTML='';

    let stringHTML=`
        <div class="mt-2 text-center fs-1 fw-bold" >¡Hola Sherril!</div>
        <div class="mt-2 text-center fs-6 fw-bold" >¿Qué servicio necesitas hoy?</div>
        
        <div class="container-fluid" style="background-color:#A8A7A7" >
            <div class="row">`;
        
    $.ajax({
        url:'../Backend/api/categorias.php',
        method:'get',
        data:'',
        dataType:'json',
        success:function(categorias){
            categorias.forEach(function(categoria){
                stringHTML+=
                `<div id="${categoria.nombreCategoria}"class="col-6 categorias" onclick="generarEmpresas(id, ${categoria.idCategoria})">
                <img src="${categoria.imagenCategoria}" alt="${categoria.nombreCategoria}">
                <div class="col-12 mt-2 text-center fs-5 fw-bold">${categoria.nombreCategoria}</div>
                </div>`
        
            })
                stringHTML+=
                    ` <div class="col-2 col-lg-1 perfil-ordenes">
                        <a href="perfil.html"> <img src="img/Perfil.png" alt=""></a>
                        <a href="ordenes.html"><img src="img/Ordenes.png" alt=""></a>
                    </div>
                </div>
            </div>`
            document.getElementById('div-secundario').innerHTML=stringHTML
            
            console.log(categorias);
        },
        error:function (error) {
            console.error(error);
            
        }

    });
        
    
}
menu();
function generarEmpresas(identificador, id) {
    document.getElementById('regresar').innerHTML=`<div><img class="m-1"src="img/Regresar.png" alt="regresar" onclick="menu()"></div>
    <img class="posicionLogo"src="img/planet express 1.png" alt="">`
    document.getElementById('div-secundario').innerHTML='';
    console.log(identificador)
    console.log(id)
    let stringHTML=` <div  class="mt-2 text-center fs-1 fw-bold">${identificador}</div>
    <div  class="text-center fs-6 fw-bold">Elige tu preferencia</div>
    <div  class="container-fluid">
        <div class="p-2 row">`

        $.ajax({
            url:'../Backend/api/empresas.php?idCategoria='+id,
            method:'get',
            data:'',
            dataType:'json',
            success:function(empresas){
                empresas.forEach(function(empresa) {
                    let estrellas=""
                    for(i=0; i<empresa.calificacion; i++){
                        estrellas+=`<i class="fa-solid fa-star"></i>`
                    }
                    for(i=0; i<(5-empresa.calificacion); i++){
                        estrellas+=`<i class="fa-regular fa-star"></i>`
                    }
                    stringHTML+=`
                    <div id="${empresa.idEmpresa}"class="m-1 col-12 col-lg-3 col-sm-6 p-0 cardEmpresa" onclick="generarProductos(id, '${identificador}', '${id}')">
                        <img class="baner col-12" src="${empresa.baner}" alt="">
                        <div>
                            <img style="position:absolute" class=""src="${empresa.logo}" alt="">
                            <div class="text-center fs-2 fw-bold">${empresa.nombreEmpresa}</div>
                            <div class="text-center text-warning">
                            ${estrellas}
                            </div>
                        </div>   
                    </div>`
                        
                    
                    
                });
                stringHTML+=`</div>
                </div>`
                document.getElementById('div-secundario').innerHTML=stringHTML

                
                console.log(empresas);
            },
            error:function (error) {
                console.error(error);
                
            }
    
        });
            
        
        
    
}
function generarProductos(empresaSeleccionada, categoriaActual, id) {
    console.log(categoriaActual)
    document.getElementById('regresar').innerHTML=`<div><img class="m-1"src="img/Regresar.png" alt="regresar" onclick="generarEmpresas('${categoriaActual}','${id}' )"></div>
    <img class="posicionLogo"src="img/planet express 1.png" alt="">`
    document.getElementById('div-secundario').innerHTML='';
    console.log(empresaSeleccionada) 
    let stringHTML=''
    $.ajax({
        url:'../Backend/api/empresas.php?idEmpresa='+empresaSeleccionada,
        method:'get',
        data:'',
        dataType:'json',
        success:function(empresa){
            let estrellas=""
            for(i=0; i<empresa.calificacion; i++){
                estrellas+=`<i class="fa-solid fa-star"></i>`
            }
            for(i=0; i<(5-empresa.calificacion); i++){
                estrellas+=`<i class="fa-regular fa-star"></i>`
            }
            stringHTML+=`
            <div>
                <img style="position:absolute" class="m-4"src="${empresa.logo}" alt="">
                <div class="text-center fs-1 fw-bold">${empresa.nombreEmpresa}</div>
                <div class="text-center text-warning">
                    ${estrellas}
                </div>
                <div class="text-center fs-6 fw-bold">Haz tu orden:</div>
                <div class="mt-1 espacio-btns">
                    <button class="btn-fin-orden fs-6 fw-bold" type="button"><i class="fa-solid fa-cart-shopping"></i> <------ 1</button>
                    <a href="confirmarDireccion.html"><button class="btn-fin-orden fs-6 fw-bold" type="button">Finalizar Orden</button></a>
                </div>
                <div class=" container">
                    <div class="row">`
                  
                    $.ajax({
                        url:'../Backend/api/productos.php?idEmpresa='+empresaSeleccionada,
                        method:'get',
                        data:'',
                        dataType:'json',
                        success:function(productos){
                            productos.forEach(function (producto) {
                                stringHTML+=`
                                <div class="col-12 col-xl-4 col-md-6">
                                    <div class="mt-3 row ">
                                        <img class="col-6" src="${producto.imagenProducto}" alt="">
                                        <div class="col-6">
                                            <div class=" fs-3 fw-bold">${producto.nombreProducto}</div>
                                            <div class="fs-5 fw-bold">L${producto.precio}</div>
                                            <button class="btn-fin-orden fs-6 fw-bold" type="button" data-bs-toggle="modal" data-bs-target="#agregarCarrito">Agregar al carrito</button>
                                        </div>
                                    </div>
                                </div>`
            
                                           
                            });
                                        stringHTML+=`
                                        </div>
                                    </div> 
                                </div> 
                            </div>
                            `
                            document.getElementById('div-secundario').innerHTML=stringHTML
                            
                        } ,
                        error:function (error) {
                            console.error(error);
            
                           }
                    });
                   
           
        },
        error:function (error) {
            console.error(error);
            
        }


    });
   
    
}