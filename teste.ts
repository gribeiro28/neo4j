var neo4j = require('neo4j-driver');

var xml2js = require("xml2js");
var parse = xml2js.parseString;
var build = new xml2js.Builder();

var fs = require('fs');

var driver = neo4j.driver(
    'bolt://localhost:7687',
    neo4j.auth.basic('neo4j', 'teste132')
)

var session = driver.session();

var base = __dirname + "/notas";

async function hue() {
    let notas = fs.readdirSync(base);

    for (let a = 0; a < /*notas.length*/1; a++) {

        var xmlCompleto = fs.readFileSync(base + "/" + notas[a]);

        parse(xmlCompleto, async function (err, nota) {

            return 0;
        });

    }

    return 0;
}

var result = hue();
driver.close();