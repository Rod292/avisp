//BAIRRO X DELEGACIA
document.addEventListener('DOMContentLoaded', function() {

    var cy = window.cy = cytoscape({
        container: document.getElementById('cy'),

        layout: {
            name: 'random',
        },

        style: [{
                selector: 'node',
                css: {
                    'content': 'data(nome)',
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

        elements:

        {
            "nodes": [{
                    "data": {
                        "id": "2d",
                        "nome": "2\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "3d",
                        "nome": "3\u00ba BPM"
                    }
                },
                {
                    "data": {
                        "id": "4d",
                        "nome": "4\u00ba BPM"
                    }
                },
                {
                    "data": {
                        "id": "5d",
                        "nome": "5\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "6d",
                        "nome": "6\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "7d",
                        "nome": "7\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "8d",
                        "nome": "8\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "9d",
                        "nome": "9\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "10d",
                        "nome": "10\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "11d",
                        "nome": "11\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "12d",
                        "nome": "12\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "14d",
                        "nome": "14\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "15d",
                        "nome": "15\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "16d",
                        "nome": "16\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "17d",
                        "nome": "17\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "18d",
                        "nome": "18\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "19d",
                        "nome": "19\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "20d",
                        "nome": "20\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "21d",
                        "nome": "21\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "22d",
                        "nome": "22\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "23d",
                        "nome": "23\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "24d",
                        "nome": "24\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "25d",
                        "nome": "25\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "26d",
                        "nome": "26\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "27d",
                        "nome": "27\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "28d",
                        "nome": "28\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "29d",
                        "nome": "29\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "30d",
                        "nome": "30\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "31d",
                        "nome": "31\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "32d",
                        "nome": "32\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "33d",
                        "nome": "33\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "34d",
                        "nome": "34\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "35d",
                        "nome": "35\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "36d",
                        "nome": "36\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "37d",
                        "nome": "37\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "38d",
                        "nome": "38\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "39d",
                        "nome": "39\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "40d",
                        "nome": "40\u00baBPM"
                    }
                },
                {
                    "data": {
                        "id": "41d",
                        "nome": "41\u00b0BPM"
                    }
                },
                {
                    "data": {
                        "id": "9",
                        "nome": "Catete"
                    }
                },
                {
                    "data": {
                        "id": "9",
                        "nome": "Cosme Velho"
                    }
                },
                {
                    "data": {
                        "id": "9",
                        "nome": "Flamengo"
                    }
                },
                {
                    "data": {
                        "id": "9",
                        "nome": "Gl\u00f3ria"
                    }
                },
                {
                    "data": {
                        "id": "9",
                        "nome": "Laranjeiras"
                    }
                },
                {
                    "data": {
                        "id": "10",
                        "nome": "Botafogo"
                    }
                },
                {
                    "data": {
                        "id": "10",
                        "nome": "Humait\u00e1"
                    }
                },
                {
                    "data": {
                        "id": "10",
                        "nome": "Urca"
                    }
                },
                {
                    "data": {
                        "id": "23",
                        "nome": "Cachambi"
                    }
                },
                {
                    "data": {
                        "id": "23",
                        "nome": "M\u00e9ier"
                    }
                },
                {
                    "data": {
                        "id": "24",
                        "nome": "Aboli\u00e7\u00e3o"
                    }
                },
                {
                    "data": {
                        "id": "24",
                        "nome": "Encantado"
                    }
                },
                {
                    "data": {
                        "id": "24",
                        "nome": "Piedade"
                    }
                },
                {
                    "data": {
                        "id": "24",
                        "nome": "Pilares"
                    }
                },
                {
                    "data": {
                        "id": "25",
                        "nome": "Engenho Novo"
                    }
                },
                {
                    "data": {
                        "id": "25",
                        "nome": "Jacar\u00e9"
                    }
                },
                {
                    "data": {
                        "id": "25",
                        "nome": "Jacarezinho"
                    }
                },
                {
                    "data": {
                        "id": "25",
                        "nome": "Riachuelo"
                    }
                },
                {
                    "data": {
                        "id": "25",
                        "nome": "Rocha"
                    }
                },
                {
                    "data": {
                        "id": "25",
                        "nome": "Sampaio"
                    }
                },
                {
                    "data": {
                        "id": "25",
                        "nome": "S\u00e3o Francisco Xavier"
                    }
                },
                {
                    "data": {
                        "id": "26",
                        "nome": "\u00c1gua Santa"
                    }
                },
                {
                    "data": {
                        "id": "26",
                        "nome": "Engenho de Dentro"
                    }
                },
                {
                    "data": {
                        "id": "26",
                        "nome": "Lins de Vasconcelos"
                    }
                },
                {
                    "data": {
                        "id": "26",
                        "nome": "Todos os Santos"
                    }
                },
                {
                    "data": {
                        "id": "44",
                        "nome": "Del Castilho"
                    }
                },
                {
                    "data": {
                        "id": "44",
                        "nome": "Engeno da Rainha"
                    }
                },
                {
                    "data": {
                        "id": "44",
                        "nome": "Inha\u00fama"
                    }
                },
                {
                    "data": {
                        "id": "44",
                        "nome": "Maria da Gra\u00e7a"
                    }
                },
                {
                    "data": {
                        "id": "44",
                        "nome": "Tom\u00e1s Coelho"
                    }
                },
                {
                    "data": {
                        "id": "6",
                        "nome": "Catumbi"
                    }
                },
                {
                    "data": {
                        "id": "6",
                        "nome": "Cidade Nova"
                    }
                },
                {
                    "data": {
                        "id": "6",
                        "nome": "Est\u00e1cio"
                    }
                },
                {
                    "data": {
                        "id": "6",
                        "nome": "Rio Comprido"
                    }
                },
                {
                    "data": {
                        "id": "6",
                        "nome": "Centro"
                    }
                },
                {
                    "data": {
                        "id": "17",
                        "nome": "Caju"
                    }
                },
                {
                    "data": {
                        "id": "17",
                        "nome": "Mangueira"
                    }
                },
                {
                    "data": {
                        "id": "17",
                        "nome": "S\u00e3o Crist\u00f3v\u00e3o"
                    }
                },
                {
                    "data": {
                        "id": "17",
                        "nome": "Vasco da Gama"
                    }
                },
                {
                    "data": {
                        "id": "18",
                        "nome": "Maracan\u00e3"
                    }
                },
                {
                    "data": {
                        "id": "18",
                        "nome": "Pra\u00e7a da Bandeira"
                    }
                },
                {
                    "data": {
                        "id": "18",
                        "nome": "Tijuca"
                    }
                },
                {
                    "data": {
                        "id": "1",
                        "nome": "Centro"
                    }
                },
                {
                    "data": {
                        "id": "4",
                        "nome": "Centro"
                    }
                },
                {
                    "data": {
                        "id": "4",
                        "nome": "Gamboa"
                    }
                },
                {
                    "data": {
                        "id": "4",
                        "nome": "Santo Cristo"
                    }
                },
                {
                    "data": {
                        "id": "4",
                        "nome": "Sa\u00fade"
                    }
                },
                {
                    "data": {
                        "id": "5",
                        "nome": "Centro"
                    }
                },
                {
                    "data": {
                        "id": "5",
                        "nome": "Lapa"
                    }
                },
                {
                    "data": {
                        "id": "5",
                        "nome": "Paquet\u00e1"
                    }
                },
                {
                    "data": {
                        "id": "7",
                        "nome": "Santa Teresa"
                    }
                },
                {
                    "data": {
                        "id": "19",
                        "nome": "Alto da Boa Vista"
                    }
                },
                {
                    "data": {
                        "id": "19",
                        "nome": "Tijuca"
                    }
                },
                {
                    "data": {
                        "id": "20",
                        "nome": "Andara\u00ed"
                    }
                },
                {
                    "data": {
                        "id": "20",
                        "nome": "Graja\u00fa"
                    }
                },
                {
                    "data": {
                        "id": "20",
                        "nome": "Vila Isabel"
                    }
                },
                {
                    "data": {
                        "id": "72",
                        "nome": "S\u00e3o Gon\u00e7alo"
                    }
                },
                {
                    "data": {
                        "id": "73",
                        "nome": "Neves"
                    }
                },
                {
                    "data": {
                        "id": "74",
                        "nome": "Monjolo"
                    }
                },
                {
                    "data": {
                        "id": "75",
                        "nome": "Ipiiba"
                    }
                },
                {
                    "data": {
                        "id": "75",
                        "nome": "Sete Pontes"
                    }
                },
                {
                    "data": {
                        "id": "134",
                        "nome": "Campos dos Goytacazes"
                    }
                },
                {
                    "data": {
                        "id": "134",
                        "nome": "Ibitipoca"
                    }
                },
                {
                    "data": {
                        "id": "134",
                        "nome": "Dores de Macabu"
                    }
                },
                {
                    "data": {
                        "id": "134",
                        "nome": "Morangaba"
                    }
                },
                {
                    "data": {
                        "id": "134",
                        "nome": "Mussurepe"
                    }
                },
                {
                    "data": {
                        "id": "134",
                        "nome": "Serrinha"
                    }
                },
                {
                    "data": {
                        "id": "134",
                        "nome": "Santo Amaro de Campos"
                    }
                },
                {
                    "data": {
                        "id": "134",
                        "nome": "S\u00e3o Sebati\u00e3o de Campos"
                    }
                },
                {
                    "data": {
                        "id": "134",
                        "nome": "Tocos"
                    }
                },
                {
                    "data": {
                        "id": "146",
                        "nome": "Campos dos Goytacazes"
                    }
                },
                {
                    "data": {
                        "id": "146",
                        "nome": "Santa Mara"
                    }
                },
                {
                    "data": {
                        "id": "146",
                        "nome": "Morro do Coco"
                    }
                },
                {
                    "data": {
                        "id": "146",
                        "nome": "Santo Eduardo"
                    }
                },
                {
                    "data": {
                        "id": "146",
                        "nome": "Travess\u00e3o"
                    }
                },
                {
                    "data": {
                        "id": "146",
                        "nome": "Vila Nova de Campos"
                    }
                },
                {
                    "data": {
                        "id": "147",
                        "nome": "S\u00e3o Francisco de Itabapoana"
                    }
                },
                {
                    "data": {
                        "id": "147",
                        "nome": "Maniva"
                    }
                },
                {
                    "data": {
                        "id": "147",
                        "nome": "Barra Seca"
                    }
                },
                {
                    "data": {
                        "id": "141",
                        "nome": "S\u00e3o Fidelis"
                    }
                },
                {
                    "data": {
                        "id": "141",
                        "nome": "Cambiasca"
                    }
                },
                {
                    "data": {
                        "id": "141",
                        "nome": "Colonia"
                    }
                },
                {
                    "data": {
                        "id": "141",
                        "nome": "Ipuca"
                    }
                },
                {
                    "data": {
                        "id": "141",
                        "nome": "Pureza"
                    }
                },
                {
                    "data": {
                        "id": "145",
                        "nome": "Barcelos"
                    }
                },
                {
                    "data": {
                        "id": "145",
                        "nome": "Atafona"
                    }
                },
                {
                    "data": {
                        "id": "145",
                        "nome": "S\u00e3o Jo\u00e3o da Barra"
                    }
                },
                {
                    "data": {
                        "id": "145",
                        "nome": "Grussa\u00ed,"
                    }
                },
                {
                    "data": {
                        "id": "145",
                        "nome": "Cajueiro"
                    }
                },
                {
                    "data": {
                        "id": "145",
                        "nome": "Pipeiras"
                    }
                },
                {
                    "data": {
                        "id": "28",
                        "nome": "Campinho"
                    }
                },
                {
                    "data": {
                        "id": "28",
                        "nome": "Casacadura"
                    }
                },
                {
                    "data": {
                        "id": "28",
                        "nome": "Pra\u00e7a Seca"
                    }
                },
                {
                    "data": {
                        "id": "28",
                        "nome": "Quintino Bocai\u00fava"
                    }
                },
                {
                    "data": {
                        "id": "28",
                        "nome": "Vila Valqueire"
                    }
                },
                {
                    "data": {
                        "id": "29",
                        "nome": "Cavalcanti"
                    }
                },
                {
                    "data": {
                        "id": "29",
                        "nome": "Engenheiro Leal"
                    }
                },
                {
                    "data": {
                        "id": "29",
                        "nome": "Madureira,"
                    }
                },
                {
                    "data": {
                        "id": "29",
                        "nome": "Turia\u00e7u"
                    }
                },
                {
                    "data": {
                        "id": "29",
                        "nome": "Vaz Lobo"
                    }
                },
                {
                    "data": {
                        "id": "30",
                        "nome": "Bento Ribeiro"
                    }
                },
                {
                    "data": {
                        "id": "30",
                        "nome": "Marechal Hermes"
                    }
                },
                {
                    "data": {
                        "id": "30",
                        "nome": "Oswaldo Cruz"
                    }
                },
                {
                    "data": {
                        "id": "40",
                        "nome": "Coelho Neto"
                    }
                },
                {
                    "data": {
                        "id": "40",
                        "nome": "Col\u00e9gio"
                    }
                },
                {
                    "data": {
                        "id": "40",
                        "nome": "Hon\u00f3rio Gurgel"
                    }
                },
                {
                    "data": {
                        "id": "40",
                        "nome": "Rocha Miranda"
                    }
                },
                {
                    "data": {
                        "id": "88",
                        "nome": "Barra do Pira\u00ed"
                    }
                },
                {
                    "data": {
                        "id": "88",
                        "nome": "Dorandia"
                    }
                },
                {
                    "data": {
                        "id": "88",
                        "nome": "Ipiabas"
                    }
                },
                {
                    "data": {
                        "id": "88",
                        "nome": "S\u00e3o Jos\u00e9 do Turvo"
                    }
                },
                {
                    "data": {
                        "id": "88",
                        "nome": "Vargem Alegre"
                    }
                },
                {
                    "data": {
                        "id": "94",
                        "nome": "Pira\u00ed"
                    }
                },
                {
                    "data": {
                        "id": "94",
                        "nome": "Arrozal"
                    }
                },
                {
                    "data": {
                        "id": "94",
                        "nome": "Monumento"
                    }
                },
                {
                    "data": {
                        "id": "94",
                        "nome": "Santan\u00e9sia"
                    }
                },
                {
                    "data": {
                        "id": "95",
                        "nome": "Vassouras"
                    }
                },
                {
                    "data": {
                        "id": "95",
                        "nome": "Andrade Pinto"
                    }
                },
                {
                    "data": {
                        "id": "95",
                        "nome": "S\u00e3o Sebasti\u00e3o dos Ferreiros"
                    }
                },
                {
                    "data": {
                        "id": "95",
                        "nome": "Sebasti\u00e3o de Lacerda"
                    }
                },
                {
                    "data": {
                        "id": "96",
                        "nome": "Miguel Pereira"
                    }
                },
                {
                    "data": {
                        "id": "96",
                        "nome": "Governador Portela"
                    }
                },
                {
                    "data": {
                        "id": "96",
                        "nome": "Conrado"
                    }
                },
                {
                    "data": {
                        "id": "97",
                        "nome": "Paty do Alferes"
                    }
                },
                {
                    "data": {
                        "id": "97",
                        "nome": "Avelar"
                    }
                },
                {
                    "data": {
                        "id": "98",
                        "nome": "Engenheiro Paulo de Frontin"
                    }
                },
                {
                    "data": {
                        "id": "98",
                        "nome": "Sacra Fam\u00edlia do Tingu\u00e1"
                    }
                },
                {
                    "data": {
                        "id": "151",
                        "nome": "Nova Friburgo Riograndina"
                    }
                },
                {
                    "data": {
                        "id": "151",
                        "nome": "S\u00e3o Pedro da Serra"
                    }
                },
                {
                    "data": {
                        "id": "151",
                        "nome": "Lumiar"
                    }
                },
                {
                    "data": {
                        "id": "151",
                        "nome": "Amparo"
                    }
                },
                {
                    "data": {
                        "id": "151",
                        "nome": "Riograndina"
                    }
                },
                {
                    "data": {
                        "id": "151",
                        "nome": "Conselheiro Paulino"
                    }
                },
                {
                    "data": {
                        "id": "151",
                        "nome": "Campo do Coelho"
                    }
                },
                {
                    "data": {
                        "id": "152",
                        "nome": "Duas Barras"
                    }
                },
                {
                    "data": {
                        "id": "152",
                        "nome": "Monnerat"
                    }
                },
                {
                    "data": {
                        "id": "153",
                        "nome": "Cantagalo"
                    }
                },
                {
                    "data": {
                        "id": "153",
                        "nome": "Santa Rita da Floresta"
                    }
                },
                {
                    "data": {
                        "id": "153",
                        "nome": "Boa Sorte"
                    }
                },
                {
                    "data": {
                        "id": "153",
                        "nome": "Euclidel\u00e2ndia"
                    }
                },
                {
                    "data": {
                        "id": "153",
                        "nome": "S\u00e3o Sebasti\u00e3o do Para\u00edba"
                    }
                },
                {
                    "data": {
                        "id": "154",
                        "nome": "Cordeiro"
                    }
                },
                {
                    "data": {
                        "id": "154",
                        "nome": "Macuco"
                    }
                },
                {
                    "data": {
                        "id": "156",
                        "nome": "Santa Maria Madalena"
                    }
                },
                {
                    "data": {
                        "id": "156",
                        "nome": "Doutor Loreti"
                    }
                },
                {
                    "data": {
                        "id": "156",
                        "nome": "Renascen\u00e7a"
                    }
                },
                {
                    "data": {
                        "id": "156",
                        "nome": "Santo Ant\u00f4nio do Imb\u00e9"
                    }
                },
                {
                    "data": {
                        "id": "156",
                        "nome": "Sossego"
                    }
                },
                {
                    "data": {
                        "id": "156",
                        "nome": "Triunfo"
                    }
                },
                {
                    "data": {
                        "id": "157",
                        "nome": "Trajano de Morais"
                    }
                },
                {
                    "data": {
                        "id": "157",
                        "nome": "Doutor Elias"
                    }
                },
                {
                    "data": {
                        "id": "157",
                        "nome": "Sodrel\u00e2ndia"
                    }
                },
                {
                    "data": {
                        "id": "157",
                        "nome": "Vila da Grama"
                    }
                },
                {
                    "data": {
                        "id": "157",
                        "nome": "Visconde de Imb\u00e9"
                    }
                },
                {
                    "data": {
                        "id": "158",
                        "nome": "Bom Jardim"
                    }
                },
                {
                    "data": {
                        "id": "158",
                        "nome": "Banquete"
                    }
                },
                {
                    "data": {
                        "id": "158",
                        "nome": "Barra Alegre"
                    }
                },
                {
                    "data": {
                        "id": "158",
                        "nome": "S\u00e3o Jos\u00e9 do Ribeir\u00e3o"
                    }
                },
                {
                    "data": {
                        "id": "76",
                        "nome": "Centro"
                    }
                },
                {
                    "data": {
                        "id": "76",
                        "nome": "Ponta da Areia"
                    }
                },
                {
                    "data": {
                        "id": "76",
                        "nome": "Ilha da Concei\u00e7\u00e3o"
                    }
                },
                {
                    "data": {
                        "id": "76",
                        "nome": "S\u00e3o Louren\u00e7o"
                    }
                },
                {
                    "data": {
                        "id": "76",
                        "nome": "F\u00e1tima"
                    }
                },
                {
                    "data": {
                        "id": "76",
                        "nome": "Morro do Estado"
                    }
                },
                {
                    "data": {
                        "id": "76",
                        "nome": "Ing\u00e1"
                    }
                },
                {
                    "data": {
                        "id": "76",
                        "nome": "S\u00e3o Domingos"
                    }
                },
                {
                    "data": {
                        "id": "76",
                        "nome": "Gragoat\u00e1 "
                    }
                },
                {
                    "data": {
                        "id": "76",
                        "nome": "Boa Viagem"
                    }
                },
                {
                    "data": {
                        "id": "77",
                        "nome": "Santa Rosa"
                    }
                },
                {
                    "data": {
                        "id": "77",
                        "nome": "Icara\u00ed"
                    }
                },
                {
                    "data": {
                        "id": "77",
                        "nome": "Vital Brasil"
                    }
                },
                {
                    "data": {
                        "id": "77",
                        "nome": "P\u00e9 Pequeno"
                    }
                },
                {
                    "data": {
                        "id": "77",
                        "nome": "Viradouro"
                    }
                },
                {
                    "data": {
                        "id": "77",
                        "nome": "Cubango"
                    }
                },
                {
                    "data": {
                        "id": "78",
                        "nome": "Fonseca"
                    }
                },
                {
                    "data": {
                        "id": "78",
                        "nome": "Vi\u00e7oso Jardim"
                    }
                },
                {
                    "data": {
                        "id": "78",
                        "nome": "Caramujo"
                    }
                },
                {
                    "data": {
                        "id": "78",
                        "nome": "Baldeador"
                    }
                },
                {
                    "data": {
                        "id": "78",
                        "nome": "Santa B\u00e1rbara"
                    }
                },
                {
                    "data": {
                        "id": "78",
                        "nome": "Tenente Jardim"
                    }
                },
                {
                    "data": {
                        "id": "78",
                        "nome": "Engenhoca"
                    }
                },
                {
                    "data": {
                        "id": "78",
                        "nome": "Santana"
                    }
                },
                {
                    "data": {
                        "id": "78",
                        "nome": "Barreto"
                    }
                },
                {
                    "data": {
                        "id": "79",
                        "nome": "Jurujuba"
                    }
                },
                {
                    "data": {
                        "id": "79",
                        "nome": "Charitas"
                    }
                },
                {
                    "data": {
                        "id": "79",
                        "nome": "S\u00e3o Francisco"
                    }
                },
                {
                    "data": {
                        "id": "79",
                        "nome": "Cachoeiras"
                    }
                },
                {
                    "data": {
                        "id": "79",
                        "nome": "Macei\u00f3"
                    }
                },
                {
                    "data": {
                        "id": "79",
                        "nome": "Largo da Batalha"
                    }
                },
                {
                    "data": {
                        "id": "79",
                        "nome": "Ititioca"
                    }
                },
                {
                    "data": {
                        "id": "79",
                        "nome": "Badu"
                    }
                },
                {
                    "data": {
                        "id": "79",
                        "nome": "Sap\u00ea"
                    }
                },
                {
                    "data": {
                        "id": "79",
                        "nome": "Matapaca"
                    }
                },
                {
                    "data": {
                        "id": "79",
                        "nome": "Vila Progresso"
                    }
                },
                {
                    "data": {
                        "id": "79",
                        "nome": "Muriqui"
                    }
                },
                {
                    "data": {
                        "id": "79",
                        "nome": "Maria Paula"
                    }
                },
                {
                    "data": {
                        "id": "79",
                        "nome": "Cantagalo"
                    }
                },
                {
                    "data": {
                        "id": "81",
                        "nome": "Itaipu"
                    }
                },
                {
                    "data": {
                        "id": "81",
                        "nome": "Camboinhas"
                    }
                },
                {
                    "data": {
                        "id": "81",
                        "nome": "Itacoatiara"
                    }
                },
                {
                    "data": {
                        "id": "81",
                        "nome": "Piratininga"
                    }
                },
                {
                    "data": {
                        "id": "81",
                        "nome": "Cafub\u00e1"
                    }
                },
                {
                    "data": {
                        "id": "81",
                        "nome": "Jacar\u00e9"
                    }
                },
                {
                    "data": {
                        "id": "81",
                        "nome": "Rio do Ouro"
                    }
                },
                {
                    "data": {
                        "id": "81",
                        "nome": "Engenho do Mato"
                    }
                },
                {
                    "data": {
                        "id": "81",
                        "nome": "V\u00e1rzea das Mo\u00e7as"
                    }
                },
                {
                    "data": {
                        "id": "81",
                        "nome": "Jardim Imbu\u00ed"
                    }
                },
                {
                    "data": {
                        "id": "82",
                        "nome": "Maric\u00e1"
                    }
                },
                {
                    "data": {
                        "id": "82",
                        "nome": "Ino\u00e3"
                    }
                },
                {
                    "data": {
                        "id": "33",
                        "nome": "Campo dos Afonsos"
                    }
                },
                {
                    "data": {
                        "id": "33",
                        "nome": "Deodoro"
                    }
                },
                {
                    "data": {
                        "id": "33",
                        "nome": "Jardim Sulacap"
                    }
                },
                {
                    "data": {
                        "id": "33",
                        "nome": "Magalh\u00e3es Bastos"
                    }
                },
                {
                    "data": {
                        "id": "33",
                        "nome": "Realengo"
                    }
                },
                {
                    "data": {
                        "id": "33",
                        "nome": "Vila Militar"
                    }
                },
                {
                    "data": {
                        "id": "34",
                        "nome": "Bangu"
                    }
                },
                {
                    "data": {
                        "id": "34",
                        "nome": "Gericin\u00f3"
                    }
                },
                {
                    "data": {
                        "id": "34",
                        "nome": "Padre Miguel"
                    }
                },
                {
                    "data": {
                        "id": "34",
                        "nome": "Senador Camar\u00e1"
                    }
                },
                {
                    "data": {
                        "id": "59",
                        "nome": "Duque de Caxias"
                    }
                },
                {
                    "data": {
                        "id": "60",
                        "nome": "Campos Elyseos"
                    }
                },
                {
                    "data": {
                        "id": "61",
                        "nome": "Xer\u00e9m"
                    }
                },
                {
                    "data": {
                        "id": "62",
                        "nome": "Imbari\u00ea"
                    }
                },
                {
                    "data": {
                        "id": "22",
                        "nome": "Br\u00e1s de Pina"
                    }
                },
                {
                    "data": {
                        "id": "22",
                        "nome": "Olaria"
                    }
                },
                {
                    "data": {
                        "id": "22",
                        "nome": "Penha"
                    }
                },
                {
                    "data": {
                        "id": "22",
                        "nome": "Penha Circular"
                    }
                },
                {
                    "data": {
                        "id": "38",
                        "nome": "Br\u00e1s de Pina"
                    }
                },
                {
                    "data": {
                        "id": "38",
                        "nome": "Cordovil"
                    }
                },
                {
                    "data": {
                        "id": "38",
                        "nome": "Jardim Am\u00e9rica"
                    }
                },
                {
                    "data": {
                        "id": "38",
                        "nome": "Parada de Lucas"
                    }
                },
                {
                    "data": {
                        "id": "38",
                        "nome": "Penha Circular"
                    }
                },
                {
                    "data": {
                        "id": "38",
                        "nome": "Vig\u00e1rio Geral"
                    }
                },
                {
                    "data": {
                        "id": "45",
                        "nome": "Complexo do Alem\u00e3o"
                    }
                },
                {
                    "data": {
                        "id": "37",
                        "nome": "Banc\u00e1rios"
                    }
                },
                {
                    "data": {
                        "id": "37",
                        "nome": "Cacuia"
                    }
                },
                {
                    "data": {
                        "id": "37",
                        "nome": "Cidade Universit\u00e1ria"
                    }
                },
                {
                    "data": {
                        "id": "37",
                        "nome": "Cocot\u00e1"
                    }
                },
                {
                    "data": {
                        "id": "37",
                        "nome": "Freguesia"
                    }
                },
                {
                    "data": {
                        "id": "37",
                        "nome": "Gale\u00e3o"
                    }
                },
                {
                    "data": {
                        "id": "37",
                        "nome": "Jardim Carioca"
                    }
                },
                {
                    "data": {
                        "id": "37",
                        "nome": "Jardim Guanabara"
                    }
                },
                {
                    "data": {
                        "id": "37",
                        "nome": "Moner\u00f3"
                    }
                },
                {
                    "data": {
                        "id": "37",
                        "nome": "Pitangueiras"
                    }
                },
                {
                    "data": {
                        "id": "37",
                        "nome": "Portuguesa"
                    }
                },
                {
                    "data": {
                        "id": "37",
                        "nome": "Praia da Bandeira"
                    }
                },
                {
                    "data": {
                        "id": "37",
                        "nome": "Ribeira"
                    }
                },
                {
                    "data": {
                        "id": "37",
                        "nome": "Tau\u00e1"
                    }
                },
                {
                    "data": {
                        "id": "37",
                        "nome": "Zumbi"
                    }
                },
                {
                    "data": {
                        "id": "32",
                        "nome": "Anil"
                    }
                },
                {
                    "data": {
                        "id": "32",
                        "nome": "Cidade de Deus"
                    }
                },
                {
                    "data": {
                        "id": "32",
                        "nome": "Curicica"
                    }
                },
                {
                    "data": {
                        "id": "32",
                        "nome": "Gard\u00eania Azul"
                    }
                },
                {
                    "data": {
                        "id": "32",
                        "nome": "Jacarepagu\u00e1"
                    }
                },
                {
                    "data": {
                        "id": "32",
                        "nome": "Taquara"
                    }
                },
                {
                    "data": {
                        "id": "41",
                        "nome": "Freguesia (Jacarepagu\u00e1)"
                    }
                },
                {
                    "data": {
                        "id": "41",
                        "nome": "Pechincha"
                    }
                },
                {
                    "data": {
                        "id": "41",
                        "nome": "Tanque"
                    }
                },
                {
                    "data": {
                        "id": "12",
                        "nome": "Copacabana"
                    }
                },
                {
                    "data": {
                        "id": "12",
                        "nome": "Leme"
                    }
                },
                {
                    "data": {
                        "id": "13",
                        "nome": "Copacabana"
                    }
                },
                {
                    "data": {
                        "id": "52",
                        "nome": "Centro"
                    }
                },
                {
                    "data": {
                        "id": "56",
                        "nome": "Comendador Soares"
                    }
                },
                {
                    "data": {
                        "id": "56",
                        "nome": "Cabu\u00e7\u00fa"
                    }
                },
                {
                    "data": {
                        "id": "56",
                        "nome": "Km32"
                    }
                },
                {
                    "data": {
                        "id": "58",
                        "nome": "Posse"
                    }
                },
                {
                    "data": {
                        "id": "58",
                        "nome": "Austin"
                    }
                },
                {
                    "data": {
                        "id": "58",
                        "nome": "Miguel Couto"
                    }
                },
                {
                    "data": {
                        "id": "58",
                        "nome": "Vila de Cava"
                    }
                },
                {
                    "data": {
                        "id": "58",
                        "nome": "Tingu\u00e1"
                    }
                },
                {
                    "data": {
                        "id": "53",
                        "nome": "Mesquita"
                    }
                },
                {
                    "data": {
                        "id": "53",
                        "nome": "Chatuba"
                    }
                },
                {
                    "data": {
                        "id": "53",
                        "nome": "Banco de Areia"
                    }
                },
                {
                    "data": {
                        "id": "57",
                        "nome": "Nil\u00f3polis"
                    }
                },
                {
                    "data": {
                        "id": "57",
                        "nome": "Olinda"
                    }
                },
                {
                    "data": {
                        "id": "64",
                        "nome": "S\u00e3o Jo\u00e3o de Meriti"
                    }
                },
                {
                    "data": {
                        "id": "64",
                        "nome": "Coelho da Rocha"
                    }
                },
                {
                    "data": {
                        "id": "64",
                        "nome": "S\u00e3o Mateus"
                    }
                },
                {
                    "data": {
                        "id": "21",
                        "nome": "Benfica"
                    }
                },
                {
                    "data": {
                        "id": "21",
                        "nome": "Bonsucesso"
                    }
                },
                {
                    "data": {
                        "id": "21",
                        "nome": "Higien\u00f3polis"
                    }
                },
                {
                    "data": {
                        "id": "21",
                        "nome": "Manguinhos"
                    }
                },
                {
                    "data": {
                        "id": "21",
                        "nome": "Mar\u00e9"
                    }
                },
                {
                    "data": {
                        "id": "21",
                        "nome": "Ramos"
                    }
                },
                {
                    "data": {
                        "id": "11",
                        "nome": "Rocinha"
                    }
                },
                {
                    "data": {
                        "id": "14",
                        "nome": "Ipanema"
                    }
                },
                {
                    "data": {
                        "id": "14",
                        "nome": "Leblon"
                    }
                },
                {
                    "data": {
                        "id": "15",
                        "nome": "G\u00e1vea"
                    }
                },
                {
                    "data": {
                        "id": "15",
                        "nome": "Jardim Bot\u00e2nico"
                    }
                },
                {
                    "data": {
                        "id": "15",
                        "nome": "Lagoa"
                    }
                },
                {
                    "data": {
                        "id": "15",
                        "nome": "S\u00e3o Conrado"
                    }
                },
                {
                    "data": {
                        "id": "15",
                        "nome": "Vidigal"
                    }
                },
                {
                    "data": {
                        "id": "48",
                        "nome": "Serop\u00e9dica"
                    }
                },
                {
                    "data": {
                        "id": "50",
                        "nome": "Itagua\u00ed"
                    }
                },
                {
                    "data": {
                        "id": "50",
                        "nome": "Ibituporanga"
                    }
                },
                {
                    "data": {
                        "id": "51",
                        "nome": "Paracambi"
                    }
                },
                {
                    "data": {
                        "id": "55",
                        "nome": "Centro"
                    }
                },
                {
                    "data": {
                        "id": "55",
                        "nome": "Norte"
                    }
                },
                {
                    "data": {
                        "id": "55",
                        "nome": "Sul. Leste"
                    }
                },
                {
                    "data": {
                        "id": "55",
                        "nome": "Oeste"
                    }
                },
                {
                    "data": {
                        "id": "55",
                        "nome": "Nordeste"
                    }
                },
                {
                    "data": {
                        "id": "63",
                        "nome": "Japeri"
                    }
                },
                {
                    "data": {
                        "id": "63",
                        "nome": "Engenheiro Pedreira"
                    }
                },
                {
                    "data": {
                        "id": "63",
                        "nome": "Marajoara"
                    }
                },
                {
                    "data": {
                        "id": "63",
                        "nome": "Pedra Lisa"
                    }
                },
                {
                    "data": {
                        "id": "63",
                        "nome": "Rio D`Ouro"
                    }
                },
                {
                    "data": {
                        "id": "118",
                        "nome": "Araruama"
                    }
                },
                {
                    "data": {
                        "id": "118",
                        "nome": "Morro Grande"
                    }
                },
                {
                    "data": {
                        "id": "118",
                        "nome": "S\u00e3o Vicente de Paula"
                    }
                },
                {
                    "data": {
                        "id": "124",
                        "nome": "Saquarema"
                    }
                },
                {
                    "data": {
                        "id": "124",
                        "nome": "Bacax\u00e1"
                    }
                },
                {
                    "data": {
                        "id": "124",
                        "nome": "Sampaio Correia"
                    }
                },
                {
                    "data": {
                        "id": "125",
                        "nome": "S\u00e3o Pedro da Aldeia"
                    }
                },
                {
                    "data": {
                        "id": "126",
                        "nome": "Cabo Frio"
                    }
                },
                {
                    "data": {
                        "id": "126",
                        "nome": "Tamoios"
                    }
                },
                {
                    "data": {
                        "id": "127",
                        "nome": "Arma\u00e7\u00e3o dos B\u00fazios"
                    }
                },
                {
                    "data": {
                        "id": "129",
                        "nome": "Iguaba Grande"
                    }
                },
                {
                    "data": {
                        "id": "132",
                        "nome": "Arraial do Cabo"
                    }
                },
                {
                    "data": {
                        "id": "105",
                        "nome": "Petr\u00f3polis"
                    }
                },
                {
                    "data": {
                        "id": "105",
                        "nome": "Cascatinha"
                    }
                },
                {
                    "data": {
                        "id": "106",
                        "nome": "Itaipava"
                    }
                },
                {
                    "data": {
                        "id": "106",
                        "nome": "Pedro do Rio"
                    }
                },
                {
                    "data": {
                        "id": "106",
                        "nome": "Posse"
                    }
                },
                {
                    "data": {
                        "id": "36",
                        "nome": "Paci\u00eancia"
                    }
                },
                {
                    "data": {
                        "id": "36",
                        "nome": "Santa Cruz"
                    }
                },
                {
                    "data": {
                        "id": "43",
                        "nome": "Guaratiba"
                    }
                },
                {
                    "data": {
                        "id": "43",
                        "nome": "Pedra de Guaratiba"
                    }
                },
                {
                    "data": {
                        "id": "43",
                        "nome": "Sepetiba"
                    }
                },
                {
                    "data": {
                        "id": "90",
                        "nome": "Antonio Rocha Floriano"
                    }
                },
                {
                    "data": {
                        "id": "90",
                        "nome": "Nossa Senhora do Amparo"
                    }
                },
                {
                    "data": {
                        "id": "90",
                        "nome": "Rialto"
                    }
                },
                {
                    "data": {
                        "id": "93",
                        "nome": "Volta Redonda"
                    }
                },
                {
                    "data": {
                        "id": "101",
                        "nome": "Pinheiral"
                    }
                },
                {
                    "data": {
                        "id": "138",
                        "nome": "Laje do Muria\u00e9"
                    }
                },
                {
                    "data": {
                        "id": "139",
                        "nome": "Porci\u00fancula"
                    }
                },
                {
                    "data": {
                        "id": "139",
                        "nome": "Puril\u00e2ndia"
                    }
                },
                {
                    "data": {
                        "id": "139",
                        "nome": "Santa Clara"
                    }
                },
                {
                    "data": {
                        "id": "140",
                        "nome": "Natividade"
                    }
                },
                {
                    "data": {
                        "id": "140",
                        "nome": "Ourania"
                    }
                },
                {
                    "data": {
                        "id": "140",
                        "nome": "Bom Jesus do Querendo"
                    }
                },
                {
                    "data": {
                        "id": "140",
                        "nome": "Varre-Sai"
                    }
                },
                {
                    "data": {
                        "id": "143",
                        "nome": "Itaperuna"
                    }
                },
                {
                    "data": {
                        "id": "143",
                        "nome": "Boaventura"
                    }
                },
                {
                    "data": {
                        "id": "143",
                        "nome": "Nossa Senhora da Penha"
                    }
                },
                {
                    "data": {
                        "id": "143",
                        "nome": "Itajara"
                    }
                },
                {
                    "data": {
                        "id": "143",
                        "nome": "Retiro do Muria\u00e9"
                    }
                },
                {
                    "data": {
                        "id": "143",
                        "nome": "Raposo"
                    }
                },
                {
                    "data": {
                        "id": "143",
                        "nome": "Comendador Ven\u00e2ncio"
                    }
                },
                {
                    "data": {
                        "id": "143",
                        "nome": "S\u00e3o Jos\u00e9 de Ub\u00e1"
                    }
                },
                {
                    "data": {
                        "id": "144",
                        "nome": "Bom Jesus de Itabapoana"
                    }
                },
                {
                    "data": {
                        "id": "144",
                        "nome": "Carabu\u00e7\u00fa"
                    }
                },
                {
                    "data": {
                        "id": "144",
                        "nome": "Calheiros"
                    }
                },
                {
                    "data": {
                        "id": "144",
                        "nome": "Pirapetinga de Bom Jesus"
                    }
                },
                {
                    "data": {
                        "id": "144",
                        "nome": "Rosal"
                    }
                },
                {
                    "data": {
                        "id": "144",
                        "nome": "Serrinha"
                    }
                },
                {
                    "data": {
                        "id": "148",
                        "nome": "Cardoso Moreira"
                    }
                },
                {
                    "data": {
                        "id": "148",
                        "nome": "S\u00e3o Joaquim"
                    }
                },
                {
                    "data": {
                        "id": "148",
                        "nome": "Italva"
                    }
                },
                {
                    "data": {
                        "id": "104",
                        "nome": "S\u00e3o Jos\u00e9 do Vale do Rio Preto"
                    }
                },
                {
                    "data": {
                        "id": "110",
                        "nome": "Teres\u00f3polis"
                    }
                },
                {
                    "data": {
                        "id": "110",
                        "nome": "Vale do Bonsucesso"
                    }
                },
                {
                    "data": {
                        "id": "110",
                        "nome": "Vale do Paquequer"
                    }
                },
                {
                    "data": {
                        "id": "111",
                        "nome": "Sumidouro"
                    }
                },
                {
                    "data": {
                        "id": "112",
                        "nome": "Carmo"
                    }
                },
                {
                    "data": {
                        "id": "112",
                        "nome": "C\u00f3rrego da Prata"
                    }
                },
                {
                    "data": {
                        "id": "112",
                        "nome": "Porto Velho do Cunha"
                    }
                },
                {
                    "data": {
                        "id": "16",
                        "nome": "Barra da Tijuca"
                    }
                },
                {
                    "data": {
                        "id": "16",
                        "nome": "Itanhang\u00e1"
                    }
                },
                {
                    "data": {
                        "id": "16",
                        "nome": "Jo\u00e1"
                    }
                },
                {
                    "data": {
                        "id": "42",
                        "nome": "Recreio dos Bandeirantes"
                    }
                },
                {
                    "data": {
                        "id": "42",
                        "nome": "Barra de Guaratiba"
                    }
                },
                {
                    "data": {
                        "id": "42",
                        "nome": "Camorim"
                    }
                },
                {
                    "data": {
                        "id": "42",
                        "nome": "Grumari"
                    }
                },
                {
                    "data": {
                        "id": "42",
                        "nome": "Vargem Grande"
                    }
                },
                {
                    "data": {
                        "id": "42",
                        "nome": "Vargem Pequena"
                    }
                },
                {
                    "data": {
                        "id": "121",
                        "nome": "Casimiro de Abreu"
                    }
                },
                {
                    "data": {
                        "id": "121",
                        "nome": "Professor Souza"
                    }
                },
                {
                    "data": {
                        "id": "121",
                        "nome": "Barra de S\u00e3o Jo\u00e3o"
                    }
                },
                {
                    "data": {
                        "id": "121",
                        "nome": "Rio Dourado"
                    }
                },
                {
                    "data": {
                        "id": "122",
                        "nome": "Concei\u00e7\u00e3o de Macab\u00fa"
                    }
                },
                {
                    "data": {
                        "id": "122",
                        "nome": "Macabuzinho"
                    }
                },
                {
                    "data": {
                        "id": "123",
                        "nome": "Centro"
                    }
                },
                {
                    "data": {
                        "id": "123",
                        "nome": "Cabi\u00fanas"
                    }
                },
                {
                    "data": {
                        "id": "123",
                        "nome": "Barra de Maca\u00e9"
                    }
                },
                {
                    "data": {
                        "id": "123",
                        "nome": "Aeroporto"
                    }
                },
                {
                    "data": {
                        "id": "123",
                        "nome": "Imboassica"
                    }
                },
                {
                    "data": {
                        "id": "128",
                        "nome": "Rio das Ostras"
                    }
                },
                {
                    "data": {
                        "id": "130",
                        "nome": "Quissam\u00e3"
                    }
                },
                {
                    "data": {
                        "id": "130",
                        "nome": "Centro"
                    }
                },
                {
                    "data": {
                        "id": "130",
                        "nome": "UB-S"
                    }
                },
                {
                    "data": {
                        "id": "130",
                        "nome": "Rodagem"
                    }
                },
                {
                    "data": {
                        "id": "130",
                        "nome": "Carapebus"
                    }
                },
                {
                    "data": {
                        "id": "130",
                        "nome": "Praia de Carapebus"
                    }
                },
                {
                    "data": {
                        "id": "165",
                        "nome": "Mangaratiba"
                    }
                },
                {
                    "data": {
                        "id": "165",
                        "nome": "Concei\u00e7\u00e3o de Jacare\u00ed"
                    }
                },
                {
                    "data": {
                        "id": "165",
                        "nome": "Vila Muriqu\u00ed"
                    }
                },
                {
                    "data": {
                        "id": "165",
                        "nome": "Itacuru\u00e7\u00e1"
                    }
                },
                {
                    "data": {
                        "id": "166",
                        "nome": "Angra dos Reis"
                    }
                },
                {
                    "data": {
                        "id": "166",
                        "nome": "Jacuecanga"
                    }
                },
                {
                    "data": {
                        "id": "166",
                        "nome": "Cunhambebe"
                    }
                },
                {
                    "data": {
                        "id": "166",
                        "nome": "Mambucaba"
                    }
                },
                {
                    "data": {
                        "id": "166",
                        "nome": "Abra\u00e3o"
                    }
                },
                {
                    "data": {
                        "id": "166",
                        "nome": "Praia de Ara\u00e7atiba"
                    }
                },
                {
                    "data": {
                        "id": "167",
                        "nome": "Parati"
                    }
                },
                {
                    "data": {
                        "id": "167",
                        "nome": "Parati-Mirim"
                    }
                },
                {
                    "data": {
                        "id": "167",
                        "nome": "Tarituba"
                    }
                },
                {
                    "data": {
                        "id": "168",
                        "nome": "Rio Claro"
                    }
                },
                {
                    "data": {
                        "id": "168",
                        "nome": "Getul\u00e2ndia"
                    }
                },
                {
                    "data": {
                        "id": "168",
                        "nome": "L\u00eddice"
                    }
                },
                {
                    "data": {
                        "id": "168",
                        "nome": "Passa Tr\u00eas"
                    }
                },
                {
                    "data": {
                        "id": "168",
                        "nome": "S\u00e3o Jo\u00e3o Marcos"
                    }
                },
                {
                    "data": {
                        "id": "65",
                        "nome": "Mag\u00e9"
                    }
                },
                {
                    "data": {
                        "id": "65",
                        "nome": "Santo Aleixo"
                    }
                },
                {
                    "data": {
                        "id": "65",
                        "nome": "Suru\u00ed"
                    }
                },
                {
                    "data": {
                        "id": "66",
                        "nome": "Inhomirim"
                    }
                },
                {
                    "data": {
                        "id": "66",
                        "nome": "Guia de Copa\u00edba"
                    }
                },
                {
                    "data": {
                        "id": "67",
                        "nome": "Guapimirim"
                    }
                },
                {
                    "data": {
                        "id": "71",
                        "nome": "Itabora\u00ed"
                    }
                },
                {
                    "data": {
                        "id": "71",
                        "nome": "Cabu\u00e7\u00fa"
                    }
                },
                {
                    "data": {
                        "id": "71",
                        "nome": "Itamb\u00ed"
                    }
                },
                {
                    "data": {
                        "id": "71",
                        "nome": "Porto das Caixas"
                    }
                },
                {
                    "data": {
                        "id": "71",
                        "nome": "Sambaetiba"
                    }
                },
                {
                    "data": {
                        "id": "70",
                        "nome": "Tangu\u00e1"
                    }
                },
                {
                    "data": {
                        "id": "119",
                        "nome": "Rio Bonito"
                    }
                },
                {
                    "data": {
                        "id": "119",
                        "nome": "Boa Esperan\u00e7a"
                    }
                },
                {
                    "data": {
                        "id": "120",
                        "nome": "Silva Jardim"
                    }
                },
                {
                    "data": {
                        "id": "120",
                        "nome": "Aldeia Velha"
                    }
                },
                {
                    "data": {
                        "id": "120",
                        "nome": "Correntezas"
                    }
                },
                {
                    "data": {
                        "id": "120",
                        "nome": "Gavi\u00f5es"
                    }
                },
                {
                    "data": {
                        "id": "159",
                        "nome": "Cachoeiras de Macacu"
                    }
                },
                {
                    "data": {
                        "id": "159",
                        "nome": "Japu\u00edba"
                    }
                },
                {
                    "data": {
                        "id": "159",
                        "nome": "Subaio"
                    }
                },
                {
                    "data": {
                        "id": "135",
                        "nome": "Itaocara"
                    }
                },
                {
                    "data": {
                        "id": "135",
                        "nome": "Portela"
                    }
                },
                {
                    "data": {
                        "id": "135",
                        "nome": "Batatal"
                    }
                },
                {
                    "data": {
                        "id": "135",
                        "nome": "Laranjais"
                    }
                },
                {
                    "data": {
                        "id": "135",
                        "nome": "Jaguarembe"
                    }
                },
                {
                    "data": {
                        "id": "135",
                        "nome": "Estrada Nova"
                    }
                },
                {
                    "data": {
                        "id": "136",
                        "nome": "Santo Ant\u00f4nio de P\u00e1dua"
                    }
                },
                {
                    "data": {
                        "id": "136",
                        "nome": "Campelo"
                    }
                },
                {
                    "data": {
                        "id": "136",
                        "nome": "Paraoquena"
                    }
                },
                {
                    "data": {
                        "id": "136",
                        "nome": "Monte Alegre"
                    }
                },
                {
                    "data": {
                        "id": "136",
                        "nome": "Ibitigua\u00e7\u00fa"
                    }
                },
                {
                    "data": {
                        "id": "136",
                        "nome": "Santa Cruz"
                    }
                },
                {
                    "data": {
                        "id": "136",
                        "nome": "Baltazar"
                    }
                },
                {
                    "data": {
                        "id": "136",
                        "nome": "Marangat\u00fa"
                    }
                },
                {
                    "data": {
                        "id": "136",
                        "nome": "S\u00e3o Pedro de Alc\u00e2ntara"
                    }
                },
                {
                    "data": {
                        "id": "136",
                        "nome": "Aperib\u00e9"
                    }
                },
                {
                    "data": {
                        "id": "137",
                        "nome": "Miracema"
                    }
                },
                {
                    "data": {
                        "id": "137",
                        "nome": "Venda das Flores"
                    }
                },
                {
                    "data": {
                        "id": "137",
                        "nome": "Para\u00edso do Tobias"
                    }
                },
                {
                    "data": {
                        "id": "142",
                        "nome": "Cambuci"
                    }
                },
                {
                    "data": {
                        "id": "142",
                        "nome": "Tr\u00eas Irm\u00e3os"
                    }
                },
                {
                    "data": {
                        "id": "142",
                        "nome": "Funil"
                    }
                },
                {
                    "data": {
                        "id": "142",
                        "nome": "Monte Verde"
                    }
                },
                {
                    "data": {
                        "id": "142",
                        "nome": "S\u00e3o Jo\u00e3o do Para\u00edso"
                    }
                },
                {
                    "data": {
                        "id": "155",
                        "nome": "S\u00e3o Sebasti\u00e3o do Alto"
                    }
                },
                {
                    "data": {
                        "id": "155",
                        "nome": "Val\u00e3o do Barro"
                    }
                },
                {
                    "data": {
                        "id": "155",
                        "nome": "Ipituna"
                    }
                },
                {
                    "data": {
                        "id": "89",
                        "nome": "Resende"
                    }
                },
                {
                    "data": {
                        "id": "89",
                        "nome": "Engenheiro Passos"
                    }
                },
                {
                    "data": {
                        "id": "89",
                        "nome": "Agulhas Negras"
                    }
                },
                {
                    "data": {
                        "id": "89",
                        "nome": "Pedra Selada"
                    }
                },
                {
                    "data": {
                        "id": "89",
                        "nome": "Fuma\u00e7a"
                    }
                },
                {
                    "data": {
                        "id": "99",
                        "nome": "Itatiaia"
                    }
                },
                {
                    "data": {
                        "id": "100",
                        "nome": "Porto Real"
                    }
                },
                {
                    "data": {
                        "id": "100",
                        "nome": "Quatis"
                    }
                },
                {
                    "data": {
                        "id": "100",
                        "nome": "Falc\u00e3o"
                    }
                },
                {
                    "data": {
                        "id": "100",
                        "nome": "Ribeir\u00e3o de S\u00e3o Joaquim"
                    }
                },
                {
                    "data": {
                        "id": "107",
                        "nome": "Para\u00edba do Sul"
                    }
                },
                {
                    "data": {
                        "id": "107",
                        "nome": "Werneck"
                    }
                },
                {
                    "data": {
                        "id": "107",
                        "nome": "Salutaris"
                    }
                },
                {
                    "data": {
                        "id": "107",
                        "nome": "Inconfid\u00eancia"
                    }
                },
                {
                    "data": {
                        "id": "108",
                        "nome": "Comendador Levy Gasparian"
                    }
                },
                {
                    "data": {
                        "id": "108",
                        "nome": "Afonso Arinos"
                    }
                },
                {
                    "data": {
                        "id": "108",
                        "nome": "Areal"
                    }
                },
                {
                    "data": {
                        "id": "108",
                        "nome": "Tr\u00eas Rios"
                    }
                },
                {
                    "data": {
                        "id": "108",
                        "nome": "Bemposta"
                    }
                },
                {
                    "data": {
                        "id": "109",
                        "nome": "Sapucaia"
                    }
                },
                {
                    "data": {
                        "id": "109",
                        "nome": "Anta"
                    }
                },
                {
                    "data": {
                        "id": "109",
                        "nome": "Pi\u00e3o"
                    }
                },
                {
                    "data": {
                        "id": "109",
                        "nome": "Nossa Senhora Aparecida"
                    }
                },
                {
                    "data": {
                        "id": "109",
                        "nome": "Jamapara"
                    }
                },
                {
                    "data": {
                        "id": "54",
                        "nome": "Areia Branca"
                    }
                },
                {
                    "data": {
                        "id": "54",
                        "nome": "Jardim Redentor"
                    }
                },
                {
                    "data": {
                        "id": "54",
                        "nome": "Parque S\u00e3o Jos\u00e9"
                    }
                },
                {
                    "data": {
                        "id": "54",
                        "nome": "Nova Aurora"
                    }
                },
                {
                    "data": {
                        "id": "54",
                        "nome": "Lote XV"
                    }
                },
                {
                    "data": {
                        "id": "35",
                        "nome": "Campo Grande"
                    }
                },
                {
                    "data": {
                        "id": "35",
                        "nome": "Cosmos"
                    }
                },
                {
                    "data": {
                        "id": "35",
                        "nome": "Inhoa\u00edba"
                    }
                },
                {
                    "data": {
                        "id": "35",
                        "nome": "Sant\u00edssimo"
                    }
                },
                {
                    "data": {
                        "id": "35",
                        "nome": "Senador Vasconcelos"
                    }
                },
                {
                    "data": {
                        "id": "27",
                        "nome": "Col\u00e9gio"
                    }
                },
                {
                    "data": {
                        "id": "27",
                        "nome": "Iraj\u00e1"
                    }
                },
                {
                    "data": {
                        "id": "27",
                        "nome": "Vicente de Carvalho"
                    }
                },
                {
                    "data": {
                        "id": "27",
                        "nome": "Vila Kosmos"
                    }
                },
                {
                    "data": {
                        "id": "27",
                        "nome": "Vila da Penha"
                    }
                },
                {
                    "data": {
                        "id": "27",
                        "nome": "Vista Alegre"
                    }
                },
                {
                    "data": {
                        "id": "31",
                        "nome": "Anchieta"
                    }
                },
                {
                    "data": {
                        "id": "31",
                        "nome": "Guadalupe"
                    }
                },
                {
                    "data": {
                        "id": "31",
                        "nome": "Parque Anchieta"
                    }
                },
                {
                    "data": {
                        "id": "31",
                        "nome": "Ricardo de Albuquerque"
                    }
                },
                {
                    "data": {
                        "id": "39",
                        "nome": "Acari"
                    }
                },
                {
                    "data": {
                        "id": "39",
                        "nome": "Barros Filho"
                    }
                },
                {
                    "data": {
                        "id": "39",
                        "nome": "Costa Barros"
                    }
                },
                {
                    "data": {
                        "id": "39",
                        "nome": "Parque Col\u00fambia"
                    }
                },
                {
                    "data": {
                        "id": "39",
                        "nome": "Pavuna"
                    }
                }
            ],
            "edges": [{
                    "data": {
                        "source": "9",
                        "target": "2d"
                    }
                },
                {
                    "data": {
                        "source": "10",
                        "target": "2d"
                    }
                },
                {
                    "data": {
                        "source": "23",
                        "target": "3d"
                    }
                },
                {
                    "data": {
                        "source": "24",
                        "target": "3d"
                    }
                },
                {
                    "data": {
                        "source": "25",
                        "target": "3d"
                    }
                },
                {
                    "data": {
                        "source": "26",
                        "target": "3d"
                    }
                },
                {
                    "data": {
                        "source": "44",
                        "target": "3d"
                    }
                },
                {
                    "data": {
                        "source": "6",
                        "target": "4d"
                    }
                },
                {
                    "data": {
                        "source": "17",
                        "target": "4d"
                    }
                },
                {
                    "data": {
                        "source": "18",
                        "target": "4d"
                    }
                },
                {
                    "data": {
                        "source": "1",
                        "target": "5d"
                    }
                },
                {
                    "data": {
                        "source": "4",
                        "target": "5d"
                    }
                },
                {
                    "data": {
                        "source": "5",
                        "target": "5d"
                    }
                },
                {
                    "data": {
                        "source": "7",
                        "target": "5d"
                    }
                },
                {
                    "data": {
                        "source": "19",
                        "target": "6d"
                    }
                },
                {
                    "data": {
                        "source": "20",
                        "target": "6d"
                    }
                },
                {
                    "data": {
                        "source": "72",
                        "target": "7d"
                    }
                },
                {
                    "data": {
                        "source": "73",
                        "target": "7d"
                    }
                },
                {
                    "data": {
                        "source": "74",
                        "target": "7d"
                    }
                },
                {
                    "data": {
                        "source": "75",
                        "target": "7d"
                    }
                },
                {
                    "data": {
                        "source": "134",
                        "target": "8d"
                    }
                },
                {
                    "data": {
                        "source": "146",
                        "target": "8d"
                    }
                },
                {
                    "data": {
                        "source": "147",
                        "target": "8d"
                    }
                },
                {
                    "data": {
                        "source": "141",
                        "target": "8d"
                    }
                },
                {
                    "data": {
                        "source": "145",
                        "target": "8d"
                    }
                },
                {
                    "data": {
                        "source": "28",
                        "target": "9d"
                    }
                },
                {
                    "data": {
                        "source": "29",
                        "target": "9d"
                    }
                },
                {
                    "data": {
                        "source": "30",
                        "target": "9d"
                    }
                },
                {
                    "data": {
                        "source": "40",
                        "target": "9d"
                    }
                },
                {
                    "data": {
                        "source": "88",
                        "target": "10d"
                    }
                },
                {
                    "data": {
                        "source": "94",
                        "target": "10d"
                    }
                },
                {
                    "data": {
                        "source": "95",
                        "target": "10d"
                    }
                },
                {
                    "data": {
                        "source": "96",
                        "target": "10d"
                    }
                },
                {
                    "data": {
                        "source": "97",
                        "target": "10d"
                    }
                },
                {
                    "data": {
                        "source": "98",
                        "target": "10d"
                    }
                },
                {
                    "data": {
                        "source": "151",
                        "target": "11d"
                    }
                },
                {
                    "data": {
                        "source": "152",
                        "target": "11d"
                    }
                },
                {
                    "data": {
                        "source": "153",
                        "target": "11d"
                    }
                },
                {
                    "data": {
                        "source": "154",
                        "target": "11d"
                    }
                },
                {
                    "data": {
                        "source": "156",
                        "target": "11d"
                    }
                },
                {
                    "data": {
                        "source": "157",
                        "target": "11d"
                    }
                },
                {
                    "data": {
                        "source": "158",
                        "target": "11d"
                    }
                },
                {
                    "data": {
                        "source": "76",
                        "target": "12d"
                    }
                },
                {
                    "data": {
                        "source": "77",
                        "target": "12d"
                    }
                },
                {
                    "data": {
                        "source": "78",
                        "target": "12d"
                    }
                },
                {
                    "data": {
                        "source": "79",
                        "target": "12d"
                    }
                },
                {
                    "data": {
                        "source": "81",
                        "target": "12d"
                    }
                },
                {
                    "data": {
                        "source": "82",
                        "target": "12d"
                    }
                },
                {
                    "data": {
                        "source": "33",
                        "target": "14d"
                    }
                },
                {
                    "data": {
                        "source": "34",
                        "target": "14d"
                    }
                },
                {
                    "data": {
                        "source": "59",
                        "target": "15d"
                    }
                },
                {
                    "data": {
                        "source": "60",
                        "target": "15d"
                    }
                },
                {
                    "data": {
                        "source": "61",
                        "target": "15d"
                    }
                },
                {
                    "data": {
                        "source": "62",
                        "target": "15d"
                    }
                },
                {
                    "data": {
                        "source": "22",
                        "target": "16d"
                    }
                },
                {
                    "data": {
                        "source": "38",
                        "target": "16d"
                    }
                },
                {
                    "data": {
                        "source": "45",
                        "target": "16d"
                    }
                },
                {
                    "data": {
                        "source": "37",
                        "target": "17d"
                    }
                },
                {
                    "data": {
                        "source": "32",
                        "target": "18d"
                    }
                },
                {
                    "data": {
                        "source": "41",
                        "target": "18d"
                    }
                },
                {
                    "data": {
                        "source": "12",
                        "target": "19d"
                    }
                },
                {
                    "data": {
                        "source": "13",
                        "target": "19d"
                    }
                },
                {
                    "data": {
                        "source": "52",
                        "target": "20d"
                    }
                },
                {
                    "data": {
                        "source": "56",
                        "target": "20d"
                    }
                },
                {
                    "data": {
                        "source": "58",
                        "target": "20d"
                    }
                },
                {
                    "data": {
                        "source": "53",
                        "target": "20d"
                    }
                },
                {
                    "data": {
                        "source": "57",
                        "target": "20d"
                    }
                },
                {
                    "data": {
                        "source": "64",
                        "target": "21d"
                    }
                },
                {
                    "data": {
                        "source": "21",
                        "target": "22d"
                    }
                },
                {
                    "data": {
                        "source": "11",
                        "target": "23d"
                    }
                },
                {
                    "data": {
                        "source": "14",
                        "target": "23d"
                    }
                },
                {
                    "data": {
                        "source": "15",
                        "target": "23d"
                    }
                },
                {
                    "data": {
                        "source": "48",
                        "target": "24d"
                    }
                },
                {
                    "data": {
                        "source": "50",
                        "target": "24d"
                    }
                },
                {
                    "data": {
                        "source": "51",
                        "target": "24d"
                    }
                },
                {
                    "data": {
                        "source": "55",
                        "target": "24d"
                    }
                },
                {
                    "data": {
                        "source": "63",
                        "target": "24d"
                    }
                },
                {
                    "data": {
                        "source": "118",
                        "target": "25d"
                    }
                },
                {
                    "data": {
                        "source": "124",
                        "target": "25d"
                    }
                },
                {
                    "data": {
                        "source": "125",
                        "target": "25d"
                    }
                },
                {
                    "data": {
                        "source": "126",
                        "target": "25d"
                    }
                },
                {
                    "data": {
                        "source": "127",
                        "target": "25d"
                    }
                },
                {
                    "data": {
                        "source": "129",
                        "target": "25d"
                    }
                },
                {
                    "data": {
                        "source": "132",
                        "target": "25d"
                    }
                },
                {
                    "data": {
                        "source": "105",
                        "target": "26d"
                    }
                },
                {
                    "data": {
                        "source": "106",
                        "target": "26d"
                    }
                },
                {
                    "data": {
                        "source": "36",
                        "target": "27d"
                    }
                },
                {
                    "data": {
                        "source": "43",
                        "target": "27d"
                    }
                },
                {
                    "data": {
                        "source": "90",
                        "target": "28d"
                    }
                },
                {
                    "data": {
                        "source": "93",
                        "target": "28d"
                    }
                },
                {
                    "data": {
                        "source": "101",
                        "target": "28d"
                    }
                },
                {
                    "data": {
                        "source": "138",
                        "target": "29d"
                    }
                },
                {
                    "data": {
                        "source": "139",
                        "target": "29d"
                    }
                },
                {
                    "data": {
                        "source": "140",
                        "target": "29d"
                    }
                },
                {
                    "data": {
                        "source": "143",
                        "target": "29d"
                    }
                },
                {
                    "data": {
                        "source": "144",
                        "target": "29d"
                    }
                },
                {
                    "data": {
                        "source": "148",
                        "target": "29d"
                    }
                },
                {
                    "data": {
                        "source": "104",
                        "target": "30d"
                    }
                },
                {
                    "data": {
                        "source": "110",
                        "target": "30d"
                    }
                },
                {
                    "data": {
                        "source": "111",
                        "target": "30d"
                    }
                },
                {
                    "data": {
                        "source": "112",
                        "target": "30d"
                    }
                },
                {
                    "data": {
                        "source": "16",
                        "target": "31d"
                    }
                },
                {
                    "data": {
                        "source": "42",
                        "target": "31d"
                    }
                },
                {
                    "data": {
                        "source": "121",
                        "target": "32d"
                    }
                },
                {
                    "data": {
                        "source": "122",
                        "target": "32d"
                    }
                },
                {
                    "data": {
                        "source": "123",
                        "target": "32d"
                    }
                },
                {
                    "data": {
                        "source": "128",
                        "target": "32d"
                    }
                },
                {
                    "data": {
                        "source": "130",
                        "target": "32d"
                    }
                },
                {
                    "data": {
                        "source": "165",
                        "target": "33d"
                    }
                },
                {
                    "data": {
                        "source": "166",
                        "target": "33d"
                    }
                },
                {
                    "data": {
                        "source": "167",
                        "target": "33d"
                    }
                },
                {
                    "data": {
                        "source": "168",
                        "target": "33d"
                    }
                },
                {
                    "data": {
                        "source": "65",
                        "target": "34d"
                    }
                },
                {
                    "data": {
                        "source": "66",
                        "target": "34d"
                    }
                },
                {
                    "data": {
                        "source": "67",
                        "target": "34d"
                    }
                },
                {
                    "data": {
                        "source": "71",
                        "target": "35d"
                    }
                },
                {
                    "data": {
                        "source": "70",
                        "target": "35d"
                    }
                },
                {
                    "data": {
                        "source": "119",
                        "target": "35d"
                    }
                },
                {
                    "data": {
                        "source": "120",
                        "target": "35d"
                    }
                },
                {
                    "data": {
                        "source": "159",
                        "target": "35d"
                    }
                },
                {
                    "data": {
                        "source": "135",
                        "target": "36d"
                    }
                },
                {
                    "data": {
                        "source": "136",
                        "target": "36d"
                    }
                },
                {
                    "data": {
                        "source": "137",
                        "target": "36d"
                    }
                },
                {
                    "data": {
                        "source": "142",
                        "target": "36d"
                    }
                },
                {
                    "data": {
                        "source": "155",
                        "target": "36d"
                    }
                },
                {
                    "data": {
                        "source": "89",
                        "target": "37d"
                    }
                },
                {
                    "data": {
                        "source": "99",
                        "target": "37d"
                    }
                },
                {
                    "data": {
                        "source": "100",
                        "target": "37d"
                    }
                },
                {
                    "data": {
                        "source": "107",
                        "target": "38d"
                    }
                },
                {
                    "data": {
                        "source": "108",
                        "target": "38d"
                    }
                },
                {
                    "data": {
                        "source": "109",
                        "target": "38d"
                    }
                },
                {
                    "data": {
                        "source": "54",
                        "target": "39d"
                    }
                },
                {
                    "data": {
                        "source": "35",
                        "target": "40d"
                    }
                },
                {
                    "data": {
                        "source": "27",
                        "target": "41d"
                    }
                },
                {
                    "data": {
                        "source": "31",
                        "target": "41d"
                    }
                },
                {
                    "data": {
                        "source": "39",
                        "target": "41d"
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