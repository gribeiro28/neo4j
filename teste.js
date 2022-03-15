var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var neo4j = require('neo4j-driver');
var xml2js = require("xml2js");
var parse = xml2js.parseString;
var build = new xml2js.Builder();
var fs = require('fs');
var driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', 'teste132'));
var session = driver.session();
var base = __dirname + "/notas";
/*
interface notaOriginalModel {
    identificacao: string,
    numero: number,
    dataEmissao: Date,
    valor: number,
    razaoSocialEmissor: string,
    documentoEmissor: string,
    razaoSocialDestinatario: string,
    documentoDestinatario: string,
    razaoSocialTransportador: string,
    documentoTransportador: string,
    documentoOriginal: string
}

interface produtoModificadoModel {
    nfeProdUniId: number,
    nfeId: number,
    nome: string,
    codigo: string,
    ncmOriginal: string,
    ncmModificado: string,
    cestOriginal: string,
    cestModificado: string,
    cfopOriginal: string,
    cfopModificado: string,
    cstOriginal: string,
    cstModificado: string,
}

interface produtoUnicoModel {
    nome: string,
    codigo: string,
    ncmOriginal: string,
    ncmModificado: string,
    cestOriginal: string,
    cestModificado: string,
    cfopOriginal: string,
    cfopModificado: string,
    cstOriginal: string,
    cstModificado: string,
}
*/
function hue() {
    return __awaiter(this, void 0, void 0, function () {
        var notas, a_1, xmlCompleto;
        return __generator(this, function (_a) {
            notas = fs.readdirSync(base);
            for (a_1 = 0; a_1 < /*notas.length*/ 1; a_1++) {
                xmlCompleto = fs.readFileSync(base + "/" + notas[a_1]);
                parse(xmlCompleto, function (err, nota) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            /*
                            var notaOriginal: notaOriginalModel = {
                                identificacao: (nota.nfeProc.NFe[0].infNFe[0]['$'].Id).substr(3),
                                numero: nota.nfeProc.NFe[0].infNFe[0].ide[0].cNF[0],
                                dataEmissao: nota.nfeProc.NFe[0].infNFe[0].ide[0].dhEmi[0],
                                valor: nota.nfeProc.NFe[0].infNFe[0].total[0].ICMSTot[0].vProd[0],
                                razaoSocialEmissor: nota.nfeProc.NFe[0].infNFe[0].emit[0].xNome[0],
                                documentoEmissor: nota.nfeProc.NFe[0].infNFe[0].emit[0].CNPJ[0],
                                razaoSocialDestinatario: nota.nfeProc.NFe[0].infNFe[0].dest[0].xNome[0],
                                documentoDestinatario: nota.nfeProc.NFe[0].infNFe[0].dest[0].CNPJ[0],
                                razaoSocialTransportador: nota.nfeProc.NFe[0].infNFe[0].transp[0].transporta[0].xNome[0],
                                documentoTransportador: nota.nfeProc.NFe[0].infNFe[0].transp[0].transporta[0].CNPJ[0],
                                documentoOriginal: nota
                            };
                
                            var notaOriginal: produtoModificadoModel = {
                                //nfeProdUniId =
                            };
                
                
                            var notaOriginal: notaOriginalModel = {
                                identificacao: (nota.nfeProc.NFe[0].infNFe[0]['$'].Id).substr(3),
                                numero: nota.nfeProc.NFe[0].infNFe[0].ide[0].cNF[0],
                                dataEmissao: nota.nfeProc.NFe[0].infNFe[0].ide[0].dhEmi[0],
                                valor: nota.nfeProc.NFe[0].infNFe[0].total[0].ICMSTot[0].vProd[0],
                                razaoSocialEmissor: nota.nfeProc.NFe[0].infNFe[0].emit[0].xNome[0],
                                documentoEmissor: nota.nfeProc.NFe[0].infNFe[0].emit[0].CNPJ[0],
                                razaoSocialDestinatario: nota.nfeProc.NFe[0].infNFe[0].dest[0].xNome[0],
                                documentoDestinatario: nota.nfeProc.NFe[0].infNFe[0].dest[0].CNPJ[0],
                                razaoSocialTransportador: nota.nfeProc.NFe[0].infNFe[0].transp[0].transporta[0].xNome[0],
                                documentoTransportador: nota.nfeProc.NFe[0].infNFe[0].transp[0].transporta[0].CNPJ[0],
                                documentoOriginal: nota
                            };
                */
                            //console.log(notaOriginal);
                            return [2 /*return*/, 0];
                        });
                    });
                });
            }
            return [2 /*return*/, 0];
        });
    });
}
var result = hue();
driver.close();
