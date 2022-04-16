
var categorias=[
    {
        nombreCategoria:'Comida',
        imagenCategoria:'img/Comida.png',
        empresas:[
            {
                nombreEmpresa:'McDonalds',
                baner:'img/Comida/McDonalds/BanerMcDonalds.png',
                logo:'img/Comida/McDonalds/LogoMcDonalds.png',
                calificacion:4,
                productos:[
                    {
                        nombreProducto:'Duo Crispy',
                        precio:129.00,
                        imagenProducto:'img/Comida/McDonalds/Crispy.png',
                    }

                ]
            },
            {
                nombreEmpresa:'Domino´s Pizza',
                baner:'img/Comida/Dominos pizza/BanerDominos.png',
                logo:'img/Comida/Dominos pizza/LogoDominos.png',
                calificacion:5,
                productos:[
                    {
                        nombreProducto:'Hawaiana',
                        precio:129.00,
                        imagenProducto:'img/Comida/Dominos pizza/Hawaiana.png',
                    }

                ]
            }

        ]


    },
    {
        nombreCategoria:'Útiles',
        imagenCategoria:'img/Utiles.png',
        empresas:[
            {
                nombreEmpresa:'',
                baner:'',
                logo:'',
                calificacion:4,
                productos:[
                    {
                        nombreProducto:'',
                        precio:'',
                        imagenProducto:'',
                    }

                ]
            }

        ]


    },
    {
        nombreCategoria:'Farmacia',
        imagenCategoria:'img/Farmacia.png',
        empresas:[
            {
                nombreEmpresa:'',
                baner:'',
                logo:'',
                calificacion:4,
                productos:[
                    {
                        nombreProducto:'',
                        precio:'',
                        imagenProducto:'',
                    }

                ]
            }

        ]


    },
    {
        nombreCategoria:'Supermercado',
        imagenCategoria:'img/Supermercado.png',
        empresas:[
            {
                nombreEmpresa:'',
                baner:'',
                logo:'',
                calificacion:4,
                productos:[
                    {
                        nombreProducto:'',
                        precio:'',
                        imagenProducto:'',
                    }

                ]
            }

        ]


    },
    {
        nombreCategoria:'Paquete',
        imagenCategoria:'img/Mandado-Paquete.png',
        empresas:[
            {
                nombreEmpresa:'',
                baner:'',
                logo:'',
                calificacion:4,
                productos:[
                    {
                        nombreProducto:'',
                        precio:'',
                        imagenProducto:'',
                    }

                ]
            }

        ]


    },
   
   
    
];
function menu () {
    document.getElementById('regresar').innerHTML=`<a href="login.html"><div><img class="m-1"src="img/Regresar.png" alt=""></div></a>
    <img class="posicionLogo"src="img/planet express 1.png" alt="">`
    document.getElementById('div-secundario').innerHTML='';
    let stringHTML=`
        <div class="mt-2 text-center fs-1 fw-bold" >¡Hola Sherril!</div>
        <div class="mt-2 text-center fs-6 fw-bold" >¿Qué servicio necesitas hoy?</div>
        
        <div class="container-fluid" style="background-color:#A8A7A7" >
            <div class="row">`;
    categorias.forEach(function(categoria){
        stringHTML+=
        `<div id="${categoria.nombreCategoria}"class="col-6 categorias" onclick="generarEmpresas(id)">
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
}
menu();
function generarEmpresas(identificador) {
    document.getElementById('regresar').innerHTML=`<div><img class="m-1"src="img/Regresar.png" alt="regresar" onclick="menu()"></div>
    <img class="posicionLogo"src="img/planet express 1.png" alt="">`
    document.getElementById('div-secundario').innerHTML='';
    console.log(identificador)
    let stringHTML=` <div  class="mt-2 text-center fs-1 fw-bold">${identificador}</div>
    <div  class="text-center fs-6 fw-bold">Elige tu preferencia</div>
    <div  class="container-fluid">
        <div class="p-2 row">`
        categorias.forEach(function(categoria){
            if (categoria.nombreCategoria==identificador) {
                categoria.empresas.forEach(function(empresa) {
                    let estrellas=""
                    for(i=0; i<empresa.calificacion; i++){
                        estrellas+=`<i class="fa-solid fa-star"></i>`
                    }
                    for(i=0; i<(5-empresa.calificacion); i++){
                        estrellas+=`<i class="fa-regular fa-star"></i>`
                    }
                    stringHTML+=`
                    <div id="${empresa.nombreEmpresa}"class="m-1 col-12 col-lg-3 col-sm-6 p-0 cardEmpresa" onclick="generarProductos(id, '${categoria.nombreCategoria}')">
                        <img class="baner col-12" src="${empresa.baner}" alt="">
                        <div>
                            <img style="position:absolute" class=""src="${empresa.logo}" alt="">
                            <div class="text-center fs-2 fw-bold">${empresa.nombreEmpresa}</div>
                            <div class="text-center text-warning">
                            ${estrellas}
                            </div>
                        </div>   
                    </div>`
                        
                    
                    
                })
            }
        })
        stringHTML+=`</div>
        </div>`
        document.getElementById('div-secundario').innerHTML=stringHTML
    
}
function generarProductos(empresaSeleccionada, categoriaActual) {
    console.log(categoriaActual)
    document.getElementById('regresar').innerHTML=`<div><img class="m-1"src="img/Regresar.png" alt="regresar" onclick="generarEmpresas('${categoriaActual}')"></div>
    <img class="posicionLogo"src="img/planet express 1.png" alt="">`
    document.getElementById('div-secundario').innerHTML='';
    console.log(empresaSeleccionada) 
    let stringHTML=''
    categorias.forEach(function(categoria) {
        categoria.empresas.forEach(function (empresa) {
            if (empresa.nombreEmpresa==empresaSeleccionada) {
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
                empresa.productos.forEach(function (producto) {
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
                })
            }
            
        })
    })
    stringHTML+=`
                    </div>
                </div> 
            </div> 
        </div>
    `
    document.getElementById('div-secundario').innerHTML=stringHTML
}