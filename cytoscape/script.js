//REGIAO X DELEGACIA
document.addEventListener('DOMContentLoaded', function() {

    var cy = window.cy = cytoscape({
        container: document.getElementById('cy'),

        layout: {
            name: 'random',
        },

        style: [{
                selector: 'node',
                css: {
                    'content': 'data(local)',
                    'text-valign': 'center',
                    'color': 'yellow',
                    'text-outline-width': 2,
                    'text-outline-color': '#000'
                }
            },

            {
                selector: 'edge',
                css: {
                    'target-arrow-shape': 'triangle'
                }
            }
        ],

        elements: {
            "nodes": [{
                    "data": {
                        "id": "1000",
                        "local": "Capital (Zona Sul, Centro e parte da Norte)",
                    }
                },
                {
                    "data": {
                        "id": "2000",
                        "local": "Capital (Zona Oeste e parte da Norte)",
                    }
                },
                {
                    "data": {
                        "id": "3000",
                        "local": "Baixada Fluminense",
                    }
                },
                {
                    "data": {
                        "id": "4000",
                        "local": "Niterói e Região dos Lagos",
                    }
                },
                {
                    "data": {
                        "id": "5000",
                        "local": "Sul Fluminense",
                    }
                },
                {
                    "data": {
                        "id": "6000",
                        "local": "Norte Fluminense e Noroeste",
                    }
                },
                {
                    "data": {
                        "id": "7000",
                        "local": "Região Serrana",
                    }
                },
                //acaba aqui
                {
                    "data": {
                        "id": "1",
                        "local": " Pra\u00e7a Mau\u00e1",
                        "area": "5",
                        "risp": "1",
                        "bpm": "5\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "4",
                        "local": " Pra\u00e7a da Rep\u00fablica",
                        "area": "5",
                        "risp": "1",
                        "bpm": "5\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "5",
                        "local": " Mem de S\u00e1",
                        "area": "5",
                        "risp": "1",
                        "bpm": "5\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "6",
                        "local": " Cidade Nova",
                        "area": "4",
                        "risp": "1",
                        "bpm": "4\u00ba BPM"
                    }
                },
                {
                    "data": {
                        "id": "7",
                        "local": " Santa Teresa",
                        "area": "5",
                        "risp": "1",
                        "bpm": "5\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "9",
                        "local": " Catete",
                        "area": "2",
                        "risp": "1",
                        "bpm": "2\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "10",
                        "local": " Botafogo",
                        "area": "2",
                        "risp": "1",
                        "bpm": "2\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "11",
                        "local": " Rocinha",
                        "area": "23",
                        "risp": "1",
                        "bpm": "23\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "12",
                        "local": " Copacabana",
                        "area": "19",
                        "risp": "1",
                        "bpm": "19\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "13",
                        "local": " Ipanema",
                        "area": "19",
                        "risp": "1",
                        "bpm": "19\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "14",
                        "local": " Leblon",
                        "area": "23",
                        "risp": "1",
                        "bpm": "23\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "15",
                        "local": " G\u00e1vea\u00a0",
                        "area": "23",
                        "risp": "1",
                        "bpm": "23\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "17",
                        "local": " S\u00e3o Crist\u00f3v\u00e3o\u00a0",
                        "area": "4",
                        "risp": "1",
                        "bpm": "4\u00ba BPM"
                    }
                },
                {
                    "data": {
                        "id": "18",
                        "local": " Pra\u00e7a da Bandeira\u00a0",
                        "area": "4",
                        "risp": "1",
                        "bpm": "4\u00ba BPM"
                    }
                },
                {
                    "data": {
                        "id": "19",
                        "local": " Tijuca\u00a0",
                        "area": "6",
                        "risp": "1",
                        "bpm": "6\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "20",
                        "local": " Vila Isabel\u00a0",
                        "area": "6",
                        "risp": "1",
                        "bpm": "6\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "21",
                        "local": " Bonsucesso\u00a0",
                        "area": "22",
                        "risp": "1",
                        "bpm": "22\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "22",
                        "local": " Penha\u00a0",
                        "area": "16",
                        "risp": "1",
                        "bpm": "16\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "23",
                        "local": " M\u00e9ier\u00a0",
                        "area": "3",
                        "risp": "1",
                        "bpm": "3\u00ba BPM"
                    }
                },
                {
                    "data": {
                        "id": "24",
                        "local": " Piedade\u00a0",
                        "area": "3",
                        "risp": "1",
                        "bpm": "3\u00ba BPM"
                    }
                },
                {
                    "data": {
                        "id": "25",
                        "local": " Engenho Novo",
                        "area": "3",
                        "risp": "1",
                        "bpm": "3\u00ba BPM"
                    }
                },
                {
                    "data": {
                        "id": "26",
                        "local": " Todos os Santos",
                        "area": "3",
                        "risp": "1",
                        "bpm": "3\u00ba BPM"
                    }
                },
                {
                    "data": {
                        "id": "37",
                        "local": " Ilha do Governador",
                        "area": "17",
                        "risp": "1",
                        "bpm": "17\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "38",
                        "local": " Iraj\u00e1\u00a0",
                        "area": "16",
                        "risp": "1",
                        "bpm": "16\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "44",
                        "local": " Inha\u00fama",
                        "area": "3",
                        "risp": "1",
                        "bpm": "3\u00ba BPM"
                    }
                },
                {
                    "data": {
                        "id": "45",
                        "local": "Complexo do Alem\u00e3o",
                        "area": "16",
                        "risp": "1",
                        "bpm": "16\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "16",
                        "local": " Barra da Tijuca\u00a0",
                        "area": "31",
                        "risp": "2",
                        "bpm": "31\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "27",
                        "local": " Vicente de Carvalho\u00a0",
                        "area": "41",
                        "risp": "2",
                        "bpm": "41\u00b0BPM"
                    }
                },
                {
                    "data": {
                        "id": "28",
                        "local": " Campinho\u00a0",
                        "area": "9",
                        "risp": "2",
                        "bpm": "9\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "29",
                        "local": " Madureira\u00a0",
                        "area": "9",
                        "risp": "2",
                        "bpm": "9\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "30",
                        "local": " Marechal Hermes\u00a0",
                        "area": "9",
                        "risp": "2",
                        "bpm": "9\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "31",
                        "local": "Ricardo de Albuquerque",
                        "area": "41",
                        "risp": "2",
                        "bpm": "41\u00b0BPM"
                    }
                },
                {
                    "data": {
                        "id": "32",
                        "local": " Taquara",
                        "area": "18",
                        "risp": "2",
                        "bpm": "18\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "33",
                        "local": " Realengo\u00a0",
                        "area": "14",
                        "risp": "2",
                        "bpm": "14\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "34",
                        "local": " Bangu\u00a0",
                        "area": "14",
                        "risp": "2",
                        "bpm": "14\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "35",
                        "local": " Campo Grande",
                        "area": "40",
                        "risp": "2",
                        "bpm": "40\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "36",
                        "local": " Santa Cruz\u00a0",
                        "area": "27",
                        "risp": "2",
                        "bpm": "27\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "39",
                        "local": " Pavuna\u00a0",
                        "area": "41",
                        "risp": "2",
                        "bpm": "41\u00b0BPM"
                    }
                },
                {
                    "data": {
                        "id": "40",
                        "local": " Hon\u00f3rio Gurgel",
                        "area": "9",
                        "risp": "2",
                        "bpm": "9\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "41",
                        "local": " Tanque\u00a0",
                        "area": "18",
                        "risp": "2",
                        "bpm": "18\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "42",
                        "local": "Recreio",
                        "area": "31",
                        "risp": "2",
                        "bpm": "31\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "43",
                        "local": " Guaratiba\u00a0",
                        "area": "27",
                        "risp": "2",
                        "bpm": "27\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "48",
                        "local": " Serop\u00e9dica\u00a0",
                        "area": "24",
                        "risp": "3",
                        "bpm": "24\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "50",
                        "local": " Itagua\u00ed\u00a0",
                        "area": "24",
                        "risp": "3",
                        "bpm": "24\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "51",
                        "local": " Paracambi\u00a0",
                        "area": "24",
                        "risp": "3",
                        "bpm": "24\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "52",
                        "local": " Nova Igua\u00e7u\u00a0",
                        "area": "20",
                        "risp": "3",
                        "bpm": "20\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "53",
                        "local": " Mesquita\u00a0",
                        "area": "20",
                        "risp": "3",
                        "bpm": "20\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "54",
                        "local": " Belford Roxo\u00a0",
                        "area": "39",
                        "risp": "3",
                        "bpm": "39\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "55",
                        "local": " Queimados\u00a0",
                        "area": "24",
                        "risp": "3",
                        "bpm": "24\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "56",
                        "local": " Comendador Soares",
                        "area": "20",
                        "risp": "3",
                        "bpm": "20\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "57",
                        "local": " Nil\u00f3polis\u00a0",
                        "area": "20",
                        "risp": "3",
                        "bpm": "20\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "58",
                        "local": " Posse",
                        "area": "20",
                        "risp": "3",
                        "bpm": "20\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "59",
                        "local": " Duque de Caxias\u00a0",
                        "area": "15",
                        "risp": "3",
                        "bpm": "15\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "60",
                        "local": " Campos El\u00edseos\u00a0",
                        "area": "15",
                        "risp": "3",
                        "bpm": "15\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "61",
                        "local": " Xer\u00e9m\u00a0",
                        "area": "15",
                        "risp": "3",
                        "bpm": "15\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "62",
                        "local": " Imbari\u00ea\u00a0",
                        "area": "15",
                        "risp": "3",
                        "bpm": "15\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "63",
                        "local": " Japeri\u00a0",
                        "area": "24",
                        "risp": "3",
                        "bpm": "24\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "64",
                        "local": " S. J.Meriti",
                        "area": "21",
                        "risp": "3",
                        "bpm": "21\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "65",
                        "local": " Mag\u00e9\u00a0",
                        "area": "34",
                        "risp": "3",
                        "bpm": "34\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "66",
                        "local": " Piabet\u00e1\u00a0",
                        "area": "34",
                        "risp": "3",
                        "bpm": "34\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "67",
                        "local": " Guapimirim",
                        "area": "34",
                        "risp": "3",
                        "bpm": "34\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "70",
                        "local": " Tangu\u00e1",
                        "area": "35",
                        "risp": "4",
                        "bpm": "35\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "71",
                        "local": " Itabora\u00ed\u00a0",
                        "area": "35",
                        "risp": "4",
                        "bpm": "35\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "72",
                        "local": " S\u00e3o Gon\u00e7alo\u00a0",
                        "area": "7",
                        "risp": "4",
                        "bpm": "7\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "73",
                        "local": " Neves\u00a0",
                        "area": "7",
                        "risp": "4",
                        "bpm": "7\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "74",
                        "local": " Alc\u00e2ntara\u00a0",
                        "area": "7",
                        "risp": "4",
                        "bpm": "7\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "75",
                        "local": " Rio do Ouro\u00a0",
                        "area": "7",
                        "risp": "4",
                        "bpm": "7\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "76",
                        "local": " Niter\u00f3i\u00a0",
                        "area": "12",
                        "risp": "4",
                        "bpm": "12\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "77",
                        "local": " Icara\u00ed\u00a0",
                        "area": "12",
                        "risp": "4",
                        "bpm": "12\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "78",
                        "local": " Fonseca\u00a0",
                        "area": "12",
                        "risp": "4",
                        "bpm": "12\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "79",
                        "local": " Jurujuba\u00a0",
                        "area": "12",
                        "risp": "4",
                        "bpm": "12\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "81",
                        "local": " Itaipu\u00a0",
                        "area": "12",
                        "risp": "4",
                        "bpm": "12\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "82",
                        "local": " Maric\u00e1\u00a0",
                        "area": "12",
                        "risp": "4",
                        "bpm": "12\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "118",
                        "local": " Araruama\u00a0",
                        "area": "25",
                        "risp": "4",
                        "bpm": "25\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "119",
                        "local": " Rio Bonito\u00a0",
                        "area": "35",
                        "risp": "4",
                        "bpm": "35\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "120",
                        "local": " Silva Jardim\u00a0",
                        "area": "35",
                        "risp": "4",
                        "bpm": "35\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "124",
                        "local": " Saquarema\u00a0",
                        "area": "25",
                        "risp": "4",
                        "bpm": "25\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "125",
                        "local": "S\u00e3o Pedro D\u00b4Adeia",
                        "area": "25",
                        "risp": "4",
                        "bpm": "25\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "126",
                        "local": " Cabo Frio\u00a0",
                        "area": "25",
                        "risp": "4",
                        "bpm": "25\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "127",
                        "local": " Arma\u00e7\u00e3o de B\u00fazios\u00a0",
                        "area": "25",
                        "risp": "4",
                        "bpm": "25\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "129",
                        "local": " Iguaba Grande",
                        "area": "25",
                        "risp": "4",
                        "bpm": "25\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "132",
                        "local": " Arraial do Cabo",
                        "area": "25",
                        "risp": "4",
                        "bpm": "25\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "159",
                        "local": " Cachoeira de Macacu\u00a0",
                        "area": "35",
                        "risp": "4",
                        "bpm": "35\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "88",
                        "local": " Barra do Pira\u00ed\u00a0",
                        "area": "10",
                        "risp": "5",
                        "bpm": "10\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "89",
                        "local": " Resende\u00a0",
                        "area": "37",
                        "risp": "5",
                        "bpm": "37\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "90",
                        "local": " Barra Mansa\u00a0",
                        "area": "28",
                        "risp": "5",
                        "bpm": "28\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "91",
                        "local": " Valen\u00e7a\u00a0",
                        "area": "10",
                        "risp": "5",
                        "bpm": "10\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "92",
                        "local": " Rio das Flores\u00a0",
                        "area": "10",
                        "risp": "5",
                        "bpm": "10\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "93",
                        "local": " Volta Redonda\u00a0",
                        "area": "28",
                        "risp": "5",
                        "bpm": "28\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "94",
                        "local": " Pira\u00ed\u00a0",
                        "area": "10",
                        "risp": "5",
                        "bpm": "10\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "95",
                        "local": " Vassouras\u00a0",
                        "area": "10",
                        "risp": "5",
                        "bpm": "10\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "96",
                        "local": " Miguel Pereira\u00a0",
                        "area": "10",
                        "risp": "5",
                        "bpm": "10\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "97",
                        "local": " Mendes\u00a0",
                        "area": "10",
                        "risp": "5",
                        "bpm": "10\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "98",
                        "local": " Eng. Paulo de Frontin",
                        "area": "10",
                        "risp": "5",
                        "bpm": "10\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "99",
                        "local": " Itatiaia\u00a0",
                        "area": "37",
                        "risp": "5",
                        "bpm": "37\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "100",
                        "local": " Porto Real\u00a0",
                        "area": "37",
                        "risp": "5",
                        "bpm": "37\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "101",
                        "local": " Pinheiral\u00a0",
                        "area": "28",
                        "risp": "5",
                        "bpm": "28\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "165",
                        "local": " Mangaratiba\u00a0",
                        "area": "33",
                        "risp": "5",
                        "bpm": "33\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "166",
                        "local": " Angra dos Reis\u00a0",
                        "area": "33",
                        "risp": "5",
                        "bpm": "33\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "167",
                        "local": " Paraty",
                        "area": "33",
                        "risp": "5",
                        "bpm": "33\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "168",
                        "local": " Rio Claro\u00a0",
                        "area": "33",
                        "risp": "5",
                        "bpm": "33\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "121",
                        "local": " Casemiro de Abreu\u00a0",
                        "area": "32",
                        "risp": "6",
                        "bpm": "32\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "122",
                        "local": " Concei\u00e7\u00e3o de Macabu\u00a0",
                        "area": "32",
                        "risp": "6",
                        "bpm": "32\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "123",
                        "local": " Maca\u00e9\u00a0",
                        "area": "32",
                        "risp": "6",
                        "bpm": "32\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "128",
                        "local": " Rio das Ostras\u00a0",
                        "area": "32",
                        "risp": "6",
                        "bpm": "32\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "130",
                        "local": " Quissam\u00e3",
                        "area": "32",
                        "risp": "6",
                        "bpm": "32\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "134",
                        "local": " Campos\u00a0",
                        "area": "8",
                        "risp": "6",
                        "bpm": "8\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "135",
                        "local": " Itaocara\u00a0",
                        "area": "36",
                        "risp": "6",
                        "bpm": "36\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "136",
                        "local": " S. Ant\u00f4nio de P\u00e1dua\u00a0",
                        "area": "36",
                        "risp": "6",
                        "bpm": "36\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "137",
                        "local": " Miracema\u00a0",
                        "area": "36",
                        "risp": "6",
                        "bpm": "36\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "138",
                        "local": " Laje do Muria\u00e9\u00a0",
                        "area": "29",
                        "risp": "6",
                        "bpm": "29\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "139",
                        "local": " Porci\u00fancula\u00a0",
                        "area": "29",
                        "risp": "6",
                        "bpm": "29\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "140",
                        "local": " Natividade\u00a0",
                        "area": "29",
                        "risp": "6",
                        "bpm": "29\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "141",
                        "local": " S\u00e3o Fidelis\u00a0",
                        "area": "8",
                        "risp": "6",
                        "bpm": "8\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "142",
                        "local": " Cambuci\u00a0",
                        "area": "36",
                        "risp": "6",
                        "bpm": "36\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "143",
                        "local": " Itaperuna\u00a0",
                        "area": "29",
                        "risp": "6",
                        "bpm": "29\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "144",
                        "local": " B. Jesus Itabapoana\u00a0",
                        "area": "29",
                        "risp": "6",
                        "bpm": "29\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "145",
                        "local": " S\u00e3o Jo\u00e3o da Barra",
                        "area": "8",
                        "risp": "6",
                        "bpm": "8\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "146",
                        "local": " Guarus",
                        "area": "8",
                        "risp": "6",
                        "bpm": "8\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "147",
                        "local": " S Francisco Itabapoana\u00a0",
                        "area": "8",
                        "risp": "6",
                        "bpm": "8\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "148",
                        "local": " Italva",
                        "area": "29",
                        "risp": "6",
                        "bpm": "29\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "155",
                        "local": " S\u00e3o Sebasti\u00e3o do Alto",
                        "area": "36",
                        "risp": "6",
                        "bpm": "36\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "104",
                        "local": " S\u00e3o J. V. Rio Preto\u00a0",
                        "area": "30",
                        "risp": "7",
                        "bpm": "30\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "105",
                        "local": " Petr\u00f3polis\u00a0",
                        "area": "26",
                        "risp": "7",
                        "bpm": "26\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "106",
                        "local": " Itaipava\u00a0",
                        "area": "26",
                        "risp": "7",
                        "bpm": "26\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "107",
                        "local": " Para\u00edba do Sul\u00a0",
                        "area": "38",
                        "risp": "7",
                        "bpm": "38\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "108",
                        "local": " Tr\u00eas Rios\u00a0",
                        "area": "38",
                        "risp": "7",
                        "bpm": "38\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "109",
                        "local": " Sapucaia\u00a0",
                        "area": "38",
                        "risp": "7",
                        "bpm": "38\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "110",
                        "local": " Teres\u00f3polis\u00a0",
                        "area": "30",
                        "risp": "7",
                        "bpm": "30\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "111",
                        "local": " Sumidouro\u00a0",
                        "area": "30",
                        "risp": "7",
                        "bpm": "30\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "112",
                        "local": " Carmo\u00a0",
                        "area": "30",
                        "risp": "7",
                        "bpm": "30\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "151",
                        "local": " Nova Friburgo",
                        "area": "11",
                        "risp": "7",
                        "bpm": "11\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "152",
                        "local": " Duas Barras\u00a0",
                        "area": "11",
                        "risp": "7",
                        "bpm": "11\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "153",
                        "local": " Cantagalo\u00a0",
                        "area": "11",
                        "risp": "7",
                        "bpm": "11\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "154",
                        "local": " Cordeiro",
                        "area": "11",
                        "risp": "7",
                        "bpm": "11\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "156",
                        "local": " Santa Maria Madalena\u00a0",
                        "area": "11",
                        "risp": "7",
                        "bpm": "11\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "157",
                        "local": " Trajano de Moraes\u00a0",
                        "area": "11",
                        "risp": "7",
                        "bpm": "11\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "158",
                        "local": " Bom Jardim\u00a0",
                        "area": "11",
                        "risp": "7",
                        "bpm": "11\u00baBPM"
                    }
                }
            ],
            "edges": [{
                    "data": {
                        "source": "1",
                        "target": "1000"
                    }
                },
                {
                    "data": {
                        "source": "4",
                        "target": "1000"
                    }
                },
                {
                    "data": {
                        "source": "5",
                        "target": "1000"
                    }
                },
                {
                    "data": {
                        "source": "6",
                        "target": "1000"
                    }
                },
                {
                    "data": {
                        "source": "7",
                        "target": "1000"
                    }
                },
                {
                    "data": {
                        "source": "9",
                        "target": "1000"
                    }
                },
                {
                    "data": {
                        "source": "10",
                        "target": "1000"
                    }
                },
                {
                    "data": {
                        "source": "11",
                        "target": "1000"
                    }
                },
                {
                    "data": {
                        "source": "12",
                        "target": "1000"
                    }
                },
                {
                    "data": {
                        "source": "13",
                        "target": "1000"
                    }
                },
                {
                    "data": {
                        "source": "14",
                        "target": "1000"
                    }
                },
                {
                    "data": {
                        "source": "15",
                        "target": "1000"
                    }
                },
                {
                    "data": {
                        "source": "17",
                        "target": "1000"
                    }
                },
                {
                    "data": {
                        "source": "18",
                        "target": "1000"
                    }
                },
                {
                    "data": {
                        "source": "19",
                        "target": "1000"
                    }
                },
                {
                    "data": {
                        "source": "20",
                        "target": "1000"
                    }
                },
                {
                    "data": {
                        "source": "21",
                        "target": "1000"
                    }
                },
                {
                    "data": {
                        "source": "22",
                        "target": "1000"
                    }
                },
                {
                    "data": {
                        "source": "23",
                        "target": "1000"
                    }
                },
                {
                    "data": {
                        "source": "24",
                        "target": "1000"
                    }
                },
                {
                    "data": {
                        "source": "25",
                        "target": "1000"
                    }
                },
                {
                    "data": {
                        "source": "26",
                        "target": "1000"
                    }
                },
                {
                    "data": {
                        "source": "37",
                        "target": "1000"
                    }
                },
                {
                    "data": {
                        "source": "38",
                        "target": "1000"
                    }
                },
                {
                    "data": {
                        "source": "44",
                        "target": "1000"
                    }
                },
                {
                    "data": {
                        "source": "45",
                        "target": "1000"
                    }
                },
                {
                    "data": {
                        "source": "16",
                        "target": "2000"
                    }
                },
                {
                    "data": {
                        "source": "27",
                        "target": "2000"
                    }
                },
                {
                    "data": {
                        "source": "28",
                        "target": "2000"
                    }
                },
                {
                    "data": {
                        "source": "29",
                        "target": "2000"
                    }
                },
                {
                    "data": {
                        "source": "30",
                        "target": "2000"
                    }
                },
                {
                    "data": {
                        "source": "31",
                        "target": "2000"
                    }
                },
                {
                    "data": {
                        "source": "32",
                        "target": "2000"
                    }
                },
                {
                    "data": {
                        "source": "33",
                        "target": "2000"
                    }
                },
                {
                    "data": {
                        "source": "34",
                        "target": "2000"
                    }
                },
                {
                    "data": {
                        "source": "35",
                        "target": "2000"
                    }
                },
                {
                    "data": {
                        "source": "36",
                        "target": "2000"
                    }
                },
                {
                    "data": {
                        "source": "39",
                        "target": "2000"
                    }
                },
                {
                    "data": {
                        "source": "40",
                        "target": "2000"
                    }
                },
                {
                    "data": {
                        "source": "41",
                        "target": "2000"
                    }
                },
                {
                    "data": {
                        "source": "42",
                        "target": "2000"
                    }
                },
                {
                    "data": {
                        "source": "43",
                        "target": "2000"
                    }
                },
                {
                    "data": {
                        "source": "48",
                        "target": "3000"
                    }
                },
                {
                    "data": {
                        "source": "50",
                        "target": "3000"
                    }
                },
                {
                    "data": {
                        "source": "51",
                        "target": "3000"
                    }
                },
                {
                    "data": {
                        "source": "52",
                        "target": "3000"
                    }
                },
                {
                    "data": {
                        "source": "53",
                        "target": "3000"
                    }
                },
                {
                    "data": {
                        "source": "54",
                        "target": "3000"
                    }
                },
                {
                    "data": {
                        "source": "55",
                        "target": "3000"
                    }
                },
                {
                    "data": {
                        "source": "56",
                        "target": "3000"
                    }
                },
                {
                    "data": {
                        "source": "57",
                        "target": "3000"
                    }
                },
                {
                    "data": {
                        "source": "58",
                        "target": "3000"
                    }
                },
                {
                    "data": {
                        "source": "59",
                        "target": "3000"
                    }
                },
                {
                    "data": {
                        "source": "60",
                        "target": "3000"
                    }
                },
                {
                    "data": {
                        "source": "61",
                        "target": "3000"
                    }
                },
                {
                    "data": {
                        "source": "62",
                        "target": "3000"
                    }
                },
                {
                    "data": {
                        "source": "63",
                        "target": "3000"
                    }
                },
                {
                    "data": {
                        "source": "64",
                        "target": "3000"
                    }
                },
                {
                    "data": {
                        "source": "65",
                        "target": "3000"
                    }
                },
                {
                    "data": {
                        "source": "66",
                        "target": "3000"
                    }
                },
                {
                    "data": {
                        "source": "67",
                        "target": "3000"
                    }
                },
                {
                    "data": {
                        "source": "70",
                        "target": "4000"
                    }
                },
                {
                    "data": {
                        "source": "71",
                        "target": "4000"
                    }
                },
                {
                    "data": {
                        "source": "72",
                        "target": "4000"
                    }
                },
                {
                    "data": {
                        "source": "73",
                        "target": "4000"
                    }
                },
                {
                    "data": {
                        "source": "74",
                        "target": "4000"
                    }
                },
                {
                    "data": {
                        "source": "75",
                        "target": "4000"
                    }
                },
                {
                    "data": {
                        "source": "76",
                        "target": "4000"
                    }
                },
                {
                    "data": {
                        "source": "77",
                        "target": "4000"
                    }
                },
                {
                    "data": {
                        "source": "78",
                        "target": "4000"
                    }
                },
                {
                    "data": {
                        "source": "79",
                        "target": "4000"
                    }
                },
                {
                    "data": {
                        "source": "81",
                        "target": "4000"
                    }
                },
                {
                    "data": {
                        "source": "82",
                        "target": "4000"
                    }
                },
                {
                    "data": {
                        "source": "118",
                        "target": "4000"
                    }
                },
                {
                    "data": {
                        "source": "119",
                        "target": "4000"
                    }
                },
                {
                    "data": {
                        "source": "120",
                        "target": "4000"
                    }
                },
                {
                    "data": {
                        "source": "124",
                        "target": "4000"
                    }
                },
                {
                    "data": {
                        "source": "125",
                        "target": "4000"
                    }
                },
                {
                    "data": {
                        "source": "126",
                        "target": "4000"
                    }
                },
                {
                    "data": {
                        "source": "127",
                        "target": "4000"
                    }
                },
                {
                    "data": {
                        "source": "129",
                        "target": "4000"
                    }
                },
                {
                    "data": {
                        "source": "132",
                        "target": "4000"
                    }
                },
                {
                    "data": {
                        "source": "159",
                        "target": "4000"
                    }
                },
                {
                    "data": {
                        "source": "88",
                        "target": "5000"
                    }
                },
                {
                    "data": {
                        "source": "89",
                        "target": "5000"
                    }
                },
                {
                    "data": {
                        "source": "90",
                        "target": "5000"
                    }
                },
                {
                    "data": {
                        "source": "91",
                        "target": "5000"
                    }
                },
                {
                    "data": {
                        "source": "92",
                        "target": "5000"
                    }
                },
                {
                    "data": {
                        "source": "93",
                        "target": "5000"
                    }
                },
                {
                    "data": {
                        "source": "94",
                        "target": "5000"
                    }
                },
                {
                    "data": {
                        "source": "95",
                        "target": "5000"
                    }
                },
                {
                    "data": {
                        "source": "96",
                        "target": "5000"
                    }
                },
                {
                    "data": {
                        "source": "97",
                        "target": "5000"
                    }
                },
                {
                    "data": {
                        "source": "98",
                        "target": "5000"
                    }
                },
                {
                    "data": {
                        "source": "99",
                        "target": "5000"
                    }
                },
                {
                    "data": {
                        "source": "100",
                        "target": "5000"
                    }
                },
                {
                    "data": {
                        "source": "101",
                        "target": "5000"
                    }
                },
                {
                    "data": {
                        "source": "165",
                        "target": "5000"
                    }
                },
                {
                    "data": {
                        "source": "166",
                        "target": "5000"
                    }
                },
                {
                    "data": {
                        "source": "167",
                        "target": "5000"
                    }
                },
                {
                    "data": {
                        "source": "168",
                        "target": "5000"
                    }
                },
                {
                    "data": {
                        "source": "121",
                        "target": "6000"
                    }
                },
                {
                    "data": {
                        "source": "122",
                        "target": "6000"
                    }
                },
                {
                    "data": {
                        "source": "123",
                        "target": "6000"
                    }
                },
                {
                    "data": {
                        "source": "128",
                        "target": "6000"
                    }
                },
                {
                    "data": {
                        "source": "130",
                        "target": "6000"
                    }
                },
                {
                    "data": {
                        "source": "134",
                        "target": "6000"
                    }
                },
                {
                    "data": {
                        "source": "135",
                        "target": "6000"
                    }
                },
                {
                    "data": {
                        "source": "136",
                        "target": "6000"
                    }
                },
                {
                    "data": {
                        "source": "137",
                        "target": "6000"
                    }
                },
                {
                    "data": {
                        "source": "138",
                        "target": "6000"
                    }
                },
                {
                    "data": {
                        "source": "139",
                        "target": "6000"
                    }
                },
                {
                    "data": {
                        "source": "140",
                        "target": "6000"
                    }
                },
                {
                    "data": {
                        "source": "141",
                        "target": "6000"
                    }
                },
                {
                    "data": {
                        "source": "142",
                        "target": "6000"
                    }
                },
                {
                    "data": {
                        "source": "143",
                        "target": "6000"
                    }
                },
                {
                    "data": {
                        "source": "144",
                        "target": "6000"
                    }
                },
                {
                    "data": {
                        "source": "145",
                        "target": "6000"
                    }
                },
                {
                    "data": {
                        "source": "146",
                        "target": "6000"
                    }
                },
                {
                    "data": {
                        "source": "147",
                        "target": "6000"
                    }
                },
                {
                    "data": {
                        "source": "148",
                        "target": "6000"
                    }
                },
                {
                    "data": {
                        "source": "155",
                        "target": "6000"
                    }
                },
                {
                    "data": {
                        "source": "104",
                        "target": "7000"
                    }
                },
                {
                    "data": {
                        "source": "105",
                        "target": "7000"
                    }
                },
                {
                    "data": {
                        "source": "106",
                        "target": "7000"
                    }
                },
                {
                    "data": {
                        "source": "107",
                        "target": "7000"
                    }
                },
                {
                    "data": {
                        "source": "108",
                        "target": "7000"
                    }
                },
                {
                    "data": {
                        "source": "109",
                        "target": "7000"
                    }
                },
                {
                    "data": {
                        "source": "110",
                        "target": "7000"
                    }
                },
                {
                    "data": {
                        "source": "111",
                        "target": "7000"
                    }
                },
                {
                    "data": {
                        "source": "112",
                        "target": "7000"
                    }
                },
                {
                    "data": {
                        "source": "151",
                        "target": "7000"
                    }
                },
                {
                    "data": {
                        "source": "152",
                        "target": "7000"
                    }
                },
                {
                    "data": {
                        "source": "153",
                        "target": "7000"
                    }
                },
                {
                    "data": {
                        "source": "154",
                        "target": "7000"
                    }
                },
                {
                    "data": {
                        "source": "156",
                        "target": "7000"
                    }
                },
                {
                    "data": {
                        "source": "157",
                        "target": "7000"
                    }
                },
                {
                    "data": {
                        "source": "158",
                        "target": "7000"
                    }
                }
            ]
        }
    });

    cy.panzoom({

    });

    var api = cy.viewUtilities({
        neighbor: function(node) {
            return node.closedNeighborhood();
        },
        neighborSelectTime: 1000
    });

    var layout = cy.layout({
        name: 'concentric',
        randomize: false,
        fit: false
    });

    // Increase border width to show nodes with hidden neighbors
    function thickenBorder(eles) {
        eles.forEach(function(ele) {
            var defaultBorderWidth = Number(ele.css("border-width").substring(0, ele.css("border-width").length - 2));
            ele.css("border-width", defaultBorderWidth + 2);
        });
        return eles;
    }
    // Decrease border width when hidden neighbors of the nodes become visible
    function thinBorder(eles) {
        eles.forEach(function(ele) {
            var defaultBorderWidth = Number(ele.css("border-width").substring(0, ele.css("border-width").length - 2));
            ele.css("border-width", defaultBorderWidth - 2);
        });
        return eles;
    }

    $("#hide").click(function() {
        var nodesWithHiddenNeighbor = cy.edges(":hidden").connectedNodes(':visible');
        thinBorder(nodesWithHiddenNeighbor);
        api.hide(cy.$(":selected"));
        nodesWithHiddenNeighbor = cy.edges(":hidden").connectedNodes(':visible');
        thickenBorder(nodesWithHiddenNeighbor);
        if (document.getElementById('layout').checked) {
            layout.run();
        }
    });

    $("#showAll").click(function() {
        var nodesWithHiddenNeighbor = cy.edges(":hidden").connectedNodes(':visible');
        thinBorder(nodesWithHiddenNeighbor);
        api.show(cy.elements());
        if (document.getElementById('layout').checked) {
            layout.run();
        }
    });

    var tappedBefore;

    cy.on('tap', 'node', function(event) {
        var node = this;

        var tappedNow = node;
        setTimeout(function() {
            tappedBefore = null;
        }, 300);
        if (tappedBefore && tappedBefore.id() === tappedNow.id()) {
            tappedNow.trigger('doubleTap');
            tappedBefore = null;
        } else {
            tappedBefore = tappedNow;
        }
    });

    cy.on('doubleTap', 'node', function(event) {
        var nodesWithHiddenNeighbor = cy.edges(":hidden").connectedNodes(':visible');
        thinBorder(nodesWithHiddenNeighbor);
        api.show(cy.nodes(":selected").neighborhood().union(cy.nodes(":selected").neighborhood().parent()));
        nodesWithHiddenNeighbor = cy.edges(":hidden").connectedNodes(':visible');
        thickenBorder(nodesWithHiddenNeighbor);
        if (document.getElementById('layout').checked) {
            layout.run();
        }
    });

    $("#highlightNeighbors").click(function() {
        if (cy.$(":selected").length > 0)
            api.highlightNeighbors(cy.$(":selected"));
    });

    $("#removeHighlights").click(function() {
        api.removeHighlights();
    });

});