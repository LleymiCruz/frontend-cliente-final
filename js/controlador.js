
var categorias=[
    {
        nombreCategoria:'Comida',
        imagenCategoria:'img/Comida.png',
        empresas:[
            {
                nombreEmpresa:'McDonalds',
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
        nombreCategoria:'Útiles',
        imagenCategoria:'img/Utiles.png',
        empresas:[
            {
                nombreEmpresa:'McDonalds',
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
                nombreEmpresa:'McDonalds',
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
                nombreEmpresa:'McDonalds',
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
                nombreEmpresa:'McDonalds',
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
    document.getElementById('regresar').innerHTML=`<div><img class="m-1"src="img/Regresar.png" alt=""></div>
    <img class="posicionLogo"src="img/planet express 1.png" alt="">`
    document.getElementById('div-secundario').innerHTML+='';
    let stringHTML=`
        <div class="mt-2 text-center fs-1 fw-bold" >¡Hola Sherril!</div>
        <div class="mt-2 text-center fs-6 fw-bold" >¿Qué servicio necesitas hoy?</div>
        
        <div class="container-fluid" style="background-color:#A8A7A7" >
            <div class="row">`;
    categorias.forEach(function(categoria){
        stringHTML+=
        `<div class="col-6 categorias">
        <img src="${categoria.imagenCategoria}" alt="${categoria.nombreCategoria}">
        <div class="col-12 mt-2 text-center fs-5 fw-bold">${categoria.nombreCategoria}</div>
        </div>`

    })
    stringHTML+=
                ` <div class="col-2 col-lg-1 perfil-ordenes">
                    <img src="img/Perfil.png" alt="">
                    <img src="img/Ordenes.png" alt="">
                </div>
             </div>
        </div>`
    document.getElementById('div-secundario').innerHTML=stringHTML
}
menu();