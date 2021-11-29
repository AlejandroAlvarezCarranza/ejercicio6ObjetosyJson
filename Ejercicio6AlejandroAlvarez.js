//ELABORADO POR: ALEJANDRO CRUZ ALVAREZ CARRANZA
//Creacion Objeto
let objetoPrincipal = new Object();
    //Atributos
    objetoPrincipal.kind = "youtube#searchListResponse";
    objetoPrincipal.etag = "\"m2yskBQFythfE4irbTIeOgYYfBU/PaiEDiVxOyCWelLPuuwa9LKz3Gk\"";
    objetoPrincipal.nextPageToken = "CAUQAA";
    objetoPrincipal.regionCode = "KE";
    //Atributo tipo objeto y sus atributos
    objetoPrincipal.pageInfo = new Object();
        objetoPrincipal.pageInfo.totalResults = 4249;
        objetoPrincipal.pageInfo.resultsPerPage = 5;
    //atributo tipo arreglo de objetos
    objetoPrincipal.items = new Array();
        //primero objeto del array
        objetoPrincipal.items[0] = new Object();
            //atributos primero objeto array
            objetoPrincipal.items[0].kind = "youtube#searchResult";
            objetoPrincipal.items[0].etag = "\"m2yskBQFythfE4irbTIeOgYYfBU/QpOIr3QKlV5EUlzfFcVvDiJT0hw\"";
            //objeto dentro del objeto array y atributos
            objetoPrincipal.items[0].id = new Object();
                objetoPrincipal.items[0].id.kind = "youtube#channel";
                objetoPrincipal.items[0].id.channelId = "UCJowOS1R0FnhipXVqEnYU1A";
        //segundo objeto del array
        objetoPrincipal.items[1] = new Object();
            //atributos segundo objeto array
            objetoPrincipal.items[1].kind = "youtube#searchResult";
            objetoPrincipal.items[1].etag = "\"m2yskBQFythfE4irbTIeOgYYfBU/AWutzVOt_5p1iLVifyBdfoSTf9E\"";
            //objeto dentro del objeto array y atributos
            objetoPrincipal.items[1].id = new Object();
                objetoPrincipal.items[1].id.kind = "youtube#video";
                objetoPrincipal.items[1].id.videoId = "Eqa2nAAhHN0";
        //tercer objeto del array
        objetoPrincipal.items[2] = new Object();
            //atributos tercer objeto array
            objetoPrincipal.items[2].kind = "youtube#searchResult";
            objetoPrincipal.items[2].etag = "\"m2yskBQFythfE4irbTIeOgYYfBU/2dIR9BTfr7QphpBuY3hPU-h5u-4\"";
            //objeto dentro del objeto array y atributos
            objetoPrincipal.items[2].id = new Object();
                objetoPrincipal.items[2].id.kind = "youtube#video";
                objetoPrincipal.items[2].id.videoId = "IirngItQuVs";
//Final del JSON

    //Impresion para comprobar que el codigo este correcto
    console.log(objetoPrincipal);
    console.log("ejemplo id");
    console.log(objetoPrincipal.items[0].id);

/*
--Creacion Objeto
{
    --Atributos
x    "kind": "youtube#searchListResponse",
x    "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/PaiEDiVxOyCWelLPuuwa9LKz3Gk\"",
x    "nextPageToken": "CAUQAA",
x    "regionCode": "KE",
    --Atributo tipo objeto y sus atributos
x    "pageInfo": {
x      "totalResults": 4249,
x      "resultsPerPage": 5
x    },
    --atributo tipo arreglo de objetos
x    "items": [
        --primero objeto del array
x      {
        --atributos primero objeto array
x        "kind": "youtube#searchResult",
x        "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/QpOIr3QKlV5EUlzfFcVvDiJT0hw\"",
        --objeto dentro del objeto array y atributos
x        "id": {
x          "kind": "youtube#channel",
x          "channelId": "UCJowOS1R0FnhipXVqEnYU1A"
x        }
x      },
        --segundo objeto del array
x      {
        --atributos segundo objeto array
x        "kind": "youtube#searchResult",
x        "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/AWutzVOt_5p1iLVifyBdfoSTf9E\"",
        --objeto dentro del objeto array y atributos
x        "id": {
x          "kind": "youtube#video",
x          "videoId": "Eqa2nAAhHN0"
x        }
x      },
        --tercer objeto del array
x      {
        --atributos tercer objeto array
x        "kind": "youtube#searchResult",
x        "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/2dIR9BTfr7QphpBuY3hPU-h5u-4\"",
        --objeto dentro del objeto array y atributos
x        "id": {
          "kind": "youtube#video",
          "videoId": "IirngItQuVs"
        }
      }
    ]
}
*/