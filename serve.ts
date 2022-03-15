var neo4j = require('neo4j-driver');

var driver = neo4j.driver(
    'bolt://localhost:7687',
    neo4j.auth.basic('neo4j', 'teste132')
)

var session = driver.session();

var filmes =
    //Filmes
    'CREATE (capitao_america_1 :Movie {title:"capitao america", tagLine:"o primeiro vingador"}) ' +
    'CREATE (capita_marvel_1 :Movie {title:"capita marvel"}) ' +
    'CREATE (homem_de_ferro_1 :Movie {title:"homem de ferro 1"}) ' +
    'CREATE (o_incrivel_hulk_1 :Movie {title:"o incrivel hulk"}) ' +
    'CREATE (homem_de_ferro_2 :Movie {title:"homem de ferro 2"}) ' +
    'CREATE (thor_1 :Movie {title:"thor"}) ' +
    'CREATE (vingadores_1 :Movie {title:"vingadores 1"}) ' +
    'CREATE (homem_de_ferro_3 :Movie {title:"homem de ferro 3"}) ' +
    'CREATE (thor_2 :Movie {title:"thor 2", tagLine:"o mundo sombrio"}) ' +
    'CREATE (capitao_america_2 :Movie {title:"capitao america 2", tagLine:"o soldado invernal"}) ' +
    'CREATE (guardioes_da_galaxia_1 :Movie {title:"guardioes da galaxia 1"}) ' +
    'CREATE (guardioes_da_galaxia_2 :Movie {title:"guardioes da galaxia 2", tagLine:"vol. 2"}) ' +
    'CREATE (vingadores_2 :Movie {title:"vingadores 2", tagLine:"a era de ultron"}) ' +
    'CREATE (homem_formiga_1 :Movie {title:"homem-formiga 1"}) ' +
    'CREATE (capitao_america_3 :Movie {title:"capitao america 3", tagLine:"guerra civil"}) ' +
    'CREATE (homem_aranha_1 :Movie {title:"homem-aranha 1", tagLine:"de volta ao lar"}) ' +
    'CREATE (viuva_negra_1 :Movie {title:"viuva negra 1"}) ' +
    'CREATE (doutor_estranho_1 :Movie {title:"doutor estranho 1"}) ' +
    'CREATE (pantera_negra_1 :Movie {title:"pantera negra 1"}) ' +
    'CREATE (homem_formiga_2 :Movie {title:"homem-formiga e a vespa", tagLine:""}) ' +
    'CREATE (thor_3 :Movie {title:"thor 3", tagLine:"ragnarok"}) ' +
    'CREATE (vingadores_3 :Movie {title:"vingadores 3", tagLine:"guerra infinita"}) ' +
    'CREATE (vingadores_4 :Movie {title:"vingadores 4", tagLine:"ultimato"}) ' +
    'CREATE (homem_aranha_2 :Movie {title:"homem-aranha 2", tagLine:"longe de casa"}) ' +
    'CREATE (shang_chi_1 :Movie {title:"shang-chi 1", tagLine:"e a lenda dos dez aneis"}) '
    ;



var herois = "" + 'CREATE (chris_evans :People {name:"chris evans", personagem:"capitao america", raca:"humano"}) ' +

    'CREATE (chris_evans)-[:ACTED_IN {habilidades:"luta, forca, agilidade, resistencia, cura, reflexo, imunidade fisiologica",' +
    'cores_uniforme: "azul, branco, vermelho", tendencia: "heroi", grupo: "exercito americano", nivel:"protagonista"}]-> (capitao_america_1) ' +

    'CREATE (chris_evans)-[:ACTED_IN {habilidades:"luta, forca, agilidade, resistencia, cura, reflexo, imunidade fisiologica",' +
    'cores_uniforme: "azul, branco, vermelho", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (vingadores_1) ' +

    'CREATE (chris_evans)-[:ACTED_IN {habilidades:"luta, forca, agilidade, resistencia, cura, reflexo, imunidade fisiologica",' +
    'cores_uniforme: "azul, branco, vermelho", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (thor_2) ' +

    'CREATE (chris_evans)-[:ACTED_IN { habilidades:"luta, forca, agilidade, resistencia, cura, reflexo, imunidade fisiologica",' +
    'cores_uniforme: "azul, branco, vermelho", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (capitao_america_2) ' +

    'CREATE (chris_evans)-[:ACTED_IN { habilidades:"luta, forca, agilidade, resistencia, cura, reflexo, imunidade fisiologica",' +
    'cores_uniforme: "azul, branco, vermelho", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (vingadores_2) ' +

    'CREATE (chris_evans)-[:ACTED_IN { habilidades:"luta, forca, agilidade, resistencia, cura, reflexo, imunidade fisiologica",' +
    'cores_uniforme: "azul, branco, vermelho", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (homem_formiga_1) ' +

    'CREATE (chris_evans)-[:ACTED_IN { habilidades:"luta, forca, agilidade, resistencia, cura, reflexo, imunidade fisiologica",' +
    'cores_uniforme: "azul, branco, vermelho", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (capitao_america_3) ' +

    'CREATE (chris_evans)-[:ACTED_IN { habilidades:"luta, forca, agilidade, resistencia, cura, reflexo, imunidade fisiologica",' +
    'cores_uniforme: "azul, branco, vermelho", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (homem_aranha_1) ' +

    'CREATE (chris_evans)-[:ACTED_IN { habilidades:"luta, forca, agilidade, resistencia, cura, reflexo, imunidade fisiologica",' +
    'cores_uniforme: "azul, branco, vermelho", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (vingadores_3) ' +

    'CREATE (chris_evans)-[:ACTED_IN { habilidades:"luta, forca, agilidade, resistencia, cura, reflexo, imunidade fisiologica",' +
    'cores_uniforme: "azul, branco, vermelho", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (capita_marvel_1) ' +

    'CREATE (chris_evans)-[:ACTED_IN { habilidades:"luta, forca, agilidade, resistencia, cura, reflexo, imunidade fisiologica",' +
    'cores_uniforme: "azul, branco, vermelho", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (vingadores_4) ' +


    //Homem de Ferro
    'CREATE (robert_downey_jr :People {name:"robert downey jr", personagem:"Homem de Ferro", raca:"humano"}) ' +

    'CREATE (robert_downey_jr)-[:ACTED_IN {habilidades:"voar, inteligencia, reflexo, luta",' +
    'cores_uniforme: "vermelho, armarelo", tendencia: "heroi", grupo: "exercito americano", nivel:"protagonista"}]-> (homem_de_ferro_1) ' +

    'CREATE (robert_downey_jr)-[:ACTED_IN {habilidades:"voar, inteligencia, reflexo, luta",' +
    'cores_uniforme: "vermelho, armarelo", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (o_incrivel_hulk_1) ' +

    'CREATE (robert_downey_jr)-[:ACTED_IN {habilidades:"voar, inteligencia, reflexo, luta",' +
    'cores_uniforme: "vermelho, armarelo", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (homem_de_ferro_2) ' +

    'CREATE (robert_downey_jr)-[:ACTED_IN {habilidades:"voar, inteligencia, reflexo, luta",' +
    'cores_uniforme: "azul, branco, vermelho", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (vingadores_1) ' +

    'CREATE (robert_downey_jr)-[:ACTED_IN {habilidades:"voar, inteligencia, reflexo, luta",' +
    'cores_uniforme: "vermelho, armarelo", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (homem_de_ferro_3) ' +

    'CREATE (robert_downey_jr)-[:ACTED_IN {habilidades:"voar, inteligencia, reflexo, luta",' +
    'cores_uniforme: "azul, branco, vermelho", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (vingadores_2) ' +

    'CREATE (robert_downey_jr)-[:ACTED_IN {habilidades:"voar, inteligencia, reflexo, luta",' +
    'cores_uniforme: "azul, branco, vermelho", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (capitao_america_3) ' +

    'CREATE (robert_downey_jr)-[:ACTED_IN {habilidades:"voar, inteligencia, reflexo, luta",' +
    'cores_uniforme: "azul, branco, vermelho", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (homem_aranha_1) ' +

    'CREATE (robert_downey_jr)-[:ACTED_IN {habilidades:"voar, inteligencia, reflexo, luta",' +
    'cores_uniforme: "azul, branco, vermelho", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (vingadores_3) ' +

    'CREATE (robert_downey_jr)-[:ACTED_IN {habilidades:"voar, inteligencia, reflexo, luta",' +
    'cores_uniforme: "azul, branco, vermelho", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (vingadores_4) ' +

    'CREATE (robert_downey_jr)-[:ACTED_IN {habilidades:"voar, inteligencia, reflexo, luta",' +
    'cores_uniforme: "azul, branco, vermelho", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (viuva_negra_1) ' +

    //Hulk
    'CREATE (edward_norton :People {name:"edward norton", personagem:"hulk0", raca:"humano"}) ' +
    'CREATE (mark_ruffalo :People {name:"mark ruffalo", personagem:"hulk1", raca:"humano"}) ' +

    'CREATE (edward_norton)-[:ACTED_IN {habilidades:"luta, forca ilimitada, agilidade, resistencia, regeneracao, imunidade, vigor, invulnerabilidade",' +
    'cores_uniforme: "roxo", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (o_incrivel_hulk_1) ' +

    'CREATE (mark_ruffalo)-[:ACTED_IN {habilidades:"luta, forca ilimitada, agilidade, resistencia, regeneracao, imunidade, vigor, invulnerabilidade",' +
    'cores_uniforme: "roxo", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (vingadores_1) ' +

    'CREATE (mark_ruffalo)-[:ACTED_IN {habilidades:"luta, forca ilimitada, agilidade, resistencia, regeneracao, imunidade, vigor, invulnerabilidade",' +
    'cores_uniforme: "roxo", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (homem_de_ferro_3) ' +

    'CREATE (mark_ruffalo)-[:ACTED_IN {habilidades:"luta, forca ilimitada, agilidade, resistencia, regeneracao, imunidade, vigor, invulnerabilidade",' +
    'cores_uniforme: "roxo", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (vingadores_2) ' +

    'CREATE (mark_ruffalo)-[:ACTED_IN {habilidades:"luta, forca ilimitada, agilidade, resistencia, regeneracao, imunidade, vigor, invulnerabilidade",' +
    'cores_uniforme: "roxo", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (thor_3) ' +

    'CREATE (mark_ruffalo)-[:ACTED_IN {habilidades:"luta, forca ilimitada, agilidade, resistencia, regeneracao, imunidade, vigor, invulnerabilidade",' +
    'cores_uniforme: "roxo", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (vingadores_3) ' +

    'CREATE (mark_ruffalo)-[:ACTED_IN {habilidades:"luta, forca ilimitada, agilidade, resistencia, regeneracao, imunidade, vigor, invulnerabilidade",' +
    'cores_uniforme: "roxo", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (capita_marvel_1) ' +

    'CREATE (mark_ruffalo)-[:ACTED_IN {habilidades:"luta, forca ilimitada, agilidade, resistencia, regeneracao, imunidade, vigor, invulnerabilidade",' +
    'cores_uniforme: "roxo", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (vingadores_4) ' +

    //Thor
    'CREATE (chris_hemsworth :People {name:"chris hemsworth", personagem:"thor", raca:"divindade asgardianos"}) ' +

    'CREATE (chris_hemsworth)-[:ACTED_IN {habilidades:"luta, forca, agilidade, velocidade, resistencia, regeneracao, vigor, invulnerabilidade, regeneracao, longevidade, manipulacao de energia",' +
    'cores_uniforme: "preto, vermelho, prata", tendencia: "heroi", grupo: "asgard", nivel:"protagonista"}]-> (thor_1) ' +

    'CREATE (chris_hemsworth)-[:ACTED_IN {habilidades:"luta, forca, agilidade, velocidade, resistencia, regeneracao, vigor, invulnerabilidade, regeneracao, longevidade, manipulacao de energia",' +
    'cores_uniforme: "preto, vermelho, prata", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (vingadores_1) ' +

    'CREATE (chris_hemsworth)-[:ACTED_IN {habilidades:"luta, forca, agilidade, velocidade, resistencia, regeneracao, vigor, invulnerabilidade, regeneracao, longevidade, manipulacao de energia",' +
    'cores_uniforme: "preto, vermelho, prata", tendencia: "heroi", grupo: "asgard", nivel:"protagonista"}]-> (thor_2) ' +

    'CREATE (chris_hemsworth)-[:ACTED_IN {habilidades:"luta, forca, agilidade, velocidade, resistencia, regeneracao, vigor, invulnerabilidade, regeneracao, longevidade, manipulacao de energia",' +
    'cores_uniforme: "preto, vermelho, prata", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (vingadores_2) ' +

    'CREATE (chris_hemsworth)-[:ACTED_IN {habilidades:"luta, forca, agilidade, velocidade, resistencia, regeneracao, vigor, invulnerabilidade, regeneracao, longevidade, manipulacao de energia",' +
    'cores_uniforme: "preto, vermelho, prata", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (doutor_estranho_1) ' +

    'CREATE (chris_hemsworth)-[:ACTED_IN {habilidades:"luta, forca, agilidade, velocidade, resistencia, regeneracao, vigor, invulnerabilidade, regeneracao, longevidade, manipulacao de energia",' +
    'cores_uniforme: "preto, vermelho, prata", tendencia: "heroi", grupo: "asgard", nivel:"protagonista"}]-> (thor_3) ' +

    'CREATE (chris_hemsworth)-[:ACTED_IN {habilidades:"luta, forca, agilidade, velocidade, resistencia, regeneracao, vigor, invulnerabilidade, regeneracao, longevidade, manipulacao de energia",' +
    'cores_uniforme: "preto, vermelho, prata", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (vingadores_3) ' +

    'CREATE (chris_hemsworth)-[:ACTED_IN {habilidades:"luta, forca, agilidade, velocidade, resistencia, regeneracao, vigor, invulnerabilidade, regeneracao, longevidade, manipulacao de energia",' +
    'cores_uniforme: "preto, vermelho, prata", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (vingadores_4) ' +

    //Viuva negra
    'CREATE (scarlett_johansson :People {name:"scarlett johansson", personagem:"viuva negra", raca:"humano"}) ' +

    'CREATE (scarlett_johansson)-[:ACTED_IN { habilidades:"luta, agilidade, reflexo, longevidade, regeneracao, imunidade fisiologica",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (homem_de_ferro_2) ' +

    'CREATE (scarlett_johansson)-[:ACTED_IN { habilidades:"luta, agilidade, reflexo, longevidade, regeneracao, imunidade fisiologica",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (vingadores_1) ' +

    'CREATE (scarlett_johansson)-[:ACTED_IN { habilidades:"luta, agilidade, reflexo, longevidade, regeneracao, imunidade fisiologica",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (capitao_america_2) ' +

    'CREATE (scarlett_johansson)-[:ACTED_IN { habilidades:"luta, agilidade, reflexo, longevidade, regeneracao, imunidade fisiologica",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (vingadores_2) ' +

    'CREATE (scarlett_johansson)-[:ACTED_IN { habilidades:"luta, agilidade, reflexo, longevidade, regeneracao, imunidade fisiologica",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "capitao", nivel:"protagonista"}]-> (capitao_america_3) ' +

    'CREATE (scarlett_johansson)-[:ACTED_IN { habilidades:"luta, agilidade, reflexo, longevidade, regeneracao, imunidade fisiologica",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (thor_3) ' +

    'CREATE (scarlett_johansson)-[:ACTED_IN { habilidades:"luta, agilidade, reflexo, longevidade, regeneracao, imunidade fisiologica",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "capitao", nivel:"protagonista"}]-> (vingadores_3) ' +

    'CREATE (scarlett_johansson)-[:ACTED_IN { habilidades:"luta, agilidade, reflexo, longevidade, regeneracao, imunidade fisiologica",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (capita_marvel_1) ' +

    'CREATE (scarlett_johansson)-[:ACTED_IN { habilidades:"luta, agilidade, reflexo, longevidade, regeneracao, imunidade fisiologica",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (vingadores_4) ' +


    //GaviGOD
    'CREATE (jeremy_renner :People {name:"jeremy renner", personagem:"gaviGod", raca:"humano"}) ' +

    'CREATE (jeremy_renner)-[:ACTED_IN { habilidades:"luta, agilidade, reflexo, visao",' +
    'cores_uniforme: "preto, roxo", tendencia: "heroi", grupo: "shield", nivel:"protagonista"}]-> (thor_1) ' +

    'CREATE (jeremy_renner)-[:ACTED_IN { habilidades:"luta, agilidade, reflexo, visao",' +
    'cores_uniforme: "preto, roxo", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (vingadores_1) ' +

    'CREATE (jeremy_renner)-[:ACTED_IN { habilidades:"luta, agilidade, reflexo, visao",' +
    'cores_uniforme: "preto, roxo", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (vingadores_2) ' +

    'CREATE (jeremy_renner)-[:ACTED_IN { habilidades:"luta, agilidade, reflexo, visao",' +
    'cores_uniforme: "preto, roxo", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (capitao_america_3) ' +

    'CREATE (jeremy_renner)-[:ACTED_IN { habilidades:"luta, agilidade, reflexo, visao",' +
    'cores_uniforme: "preto, roxo", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (vingadores_4) ' +

    'CREATE (jeremy_renner)-[:ACTED_IN { habilidades:"luta, agilidade, reflexo, visao",' +
    'cores_uniforme: "preto, roxo", tendencia: "heroi", grupo: "vingadores", nivel:"protagonista"}]-> (viuva_negra_1) ' +



    //Nick Fury
    'CREATE (samuel_jackson :People {name:"samuel jackson", personagem:"nick fury", raca:"humano"}) ' +

    'CREATE (samuel_jackson)-[:ACTED_IN {  habilidades:"luta, agilidade, reflexo",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (homem_de_ferro_1) ' +

    'CREATE (samuel_jackson)-[:ACTED_IN {  habilidades:"luta, agilidade, reflexo",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (homem_de_ferro_2) ' +

    'CREATE (samuel_jackson)-[:ACTED_IN {  habilidades:"luta, agilidade, reflexo",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (thor_1) ' +

    'CREATE (samuel_jackson)-[:ACTED_IN {  habilidades:"luta, agilidade, reflexo",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (capitao_america_1) ' +

    'CREATE (samuel_jackson)-[:ACTED_IN {  habilidades:"luta, agilidade, reflexo",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (vingadores_1) ' +

    'CREATE (samuel_jackson)-[:ACTED_IN {  habilidades:"luta, agilidade, reflexo",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (capitao_america_2) ' +

    'CREATE (samuel_jackson)-[:ACTED_IN {  habilidades:"luta, agilidade, reflexo",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (vingadores_2) ' +

    'CREATE (samuel_jackson)-[:ACTED_IN {  habilidades:"luta, agilidade, reflexo",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (homem_de_ferro_3) ' +

    'CREATE (samuel_jackson)-[:ACTED_IN {  habilidades:"luta, agilidade, reflexo",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (vingadores_3) ' +

    'CREATE (samuel_jackson)-[:ACTED_IN {  habilidades:"luta, agilidade, reflexo",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (capita_marvel_1) ' +

    'CREATE (samuel_jackson)-[:ACTED_IN {  habilidades:"luta, agilidade, reflexo",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (vingadores_4) ' +

    'CREATE (samuel_jackson)-[:ACTED_IN {  habilidades:"luta, agilidade, reflexo",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (homem_aranha_2) ' +

    //Máquina de combate
    'CREATE (don_cheadle :People {name:"don headle", personagem:"maquina de combate", raca:"humano"}) ' +

    'CREATE (don_cheadle)-[:ACTED_IN {  habilidades:"luta, reflexo, voar",' +
    'cores_uniforme: "cinza", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (homem_de_ferro_2) ' +

    'CREATE (don_cheadle)-[:ACTED_IN {  habilidades:"luta, reflexo, voar",' +
    'cores_uniforme: "cinza", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (homem_de_ferro_3) ' +

    'CREATE (don_cheadle)-[:ACTED_IN {  habilidades:"luta, reflexo, voar",' +
    'cores_uniforme: "cinza", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (vingadores_2) ' +

    'CREATE (don_cheadle)-[:ACTED_IN {  habilidades:"luta, reflexo, voar",' +
    'cores_uniforme: "cinza", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (capitao_america_3) ' +

    'CREATE (don_cheadle)-[:ACTED_IN {  habilidades:"luta, reflexo, voar",' +
    'cores_uniforme: "cinza", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (vingadores_3) ' +

    'CREATE (don_cheadle)-[:ACTED_IN {  habilidades:"luta, reflexo, voar",' +
    'cores_uniforme: "cinza", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (capita_marvel_1) ' +

    'CREATE (don_cheadle)-[:ACTED_IN {  habilidades:"luta, reflexo, voar",' +
    'cores_uniforme: "cinza", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (vingadores_4) ' +

    //Homem-Formiga
    'CREATE (paul_rudd :People {name:"paul rudd", personagem:"homem-formiga", raca:"humano"}) ' +

    'CREATE (paul_rudd)-[:ACTED_IN { habilidades:"luta, forca, agilidade, encolher, ",' +
    'cores_uniforme: "preto, vermelho", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (homem_formiga_1) ' +

    'CREATE (paul_rudd)-[:ACTED_IN { habilidades:"luta, forca, agilidade, encolher, ",' +
    'cores_uniforme: "preto, vermelho", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (capitao_america_3) ' +

    'CREATE (paul_rudd)-[:ACTED_IN { habilidades:"luta, forca, agilidade, encolher, ",' +
    'cores_uniforme: "preto, vermelho", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (homem_formiga_2) ' +

    'CREATE (paul_rudd)-[:ACTED_IN { habilidades:"luta, forca, agilidade, encolher, ",' +
    'cores_uniforme: "preto, vermelho", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (vingadores_4) ' +

    //Falcao
    'CREATE (anthony_mackie :People {name:"anthony mackie", personagem:"falcao", raca:"humano"}) ' +

    'CREATE (anthony_mackie)-[:ACTED_IN { habilidades:"luta, agilidade, reflexo, voar",' +
    'cores_uniforme: "preto, vermelho", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (capitao_america_2) ' +

    'CREATE (anthony_mackie)-[:ACTED_IN { habilidades:"luta, agilidade, reflexo, voar",' +
    'cores_uniforme: "preto, vermelho", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (vingadores_2) ' +

    'CREATE (anthony_mackie)-[:ACTED_IN { habilidades:"luta, agilidade, reflexo, voar",' +
    'cores_uniforme: "preto, vermelho", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (homem_formiga_1) ' +

    'CREATE (anthony_mackie)-[:ACTED_IN { habilidades:"luta, agilidade, reflexo, voar",' +
    'cores_uniforme: "preto, vermelho", tendencia: "heroi", grupo: "capitao", nivel:"protagonista"}]-> (capitao_america_3) ' +

    'CREATE (anthony_mackie)-[:ACTED_IN { habilidades:"luta, agilidade, reflexo, voar",' +
    'cores_uniforme: "preto, vermelho", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (vingadores_3) ' +

    'CREATE (anthony_mackie)-[:ACTED_IN { habilidades:"luta, agilidade, reflexo, voar",' +
    'cores_uniforme: "preto, vermelho", tendencia: "heroi", grupo: "vingadores", nivel:"coadjuvante"}]-> (vingadores_4) ' +

    //Bucky
    'CREATE (sebastian_stan :People {name:"sebastian stan", personagem:"bucky barnes", raca:"humano"}) ' +

    'CREATE (sebastian_stan)-[:ACTED_IN { habilidades:"luta, forca, resistencia",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "exercito americano", nivel:"coadjuvante"}]-> (capitao_america_1) ' +

    'CREATE (sebastian_stan)-[:ACTED_IN {  habilidades:"luta, forca, agilidade, resistencia, cura, reflexo, imunidade fisiologica",' +
    'cores_uniforme: "preto", tendencia: "vilao", grupo: "hidra", nivel:"antagonista"}]-> (capitao_america_2) ' +

    'CREATE (sebastian_stan)-[:ACTED_IN {  habilidades:"luta, forca, agilidade, resistencia, cura, reflexo, imunidade fisiologica",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "capitao", nivel:"protagonista"}]-> (capitao_america_3) ' +

    'CREATE (sebastian_stan)-[:ACTED_IN {  habilidades:"luta, forca, agilidade, resistencia, cura, reflexo, imunidade fisiologica",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "capitao", nivel:"protagonista"}]-> (homem_formiga_1) ' +

    'CREATE (sebastian_stan)-[:ACTED_IN {  habilidades:"luta, forca, agilidade, resistencia, cura, reflexo, imunidade fisiologica",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "capitao", nivel:"protagonista"}]-> (pantera_negra_1) ' +

    'CREATE (sebastian_stan)-[:ACTED_IN {  habilidades:"luta, forca, agilidade, resistencia, cura, reflexo, imunidade fisiologica",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "capitao", nivel:"protagonista"}]-> (vingadores_3) ' +

    'CREATE (sebastian_stan)-[:ACTED_IN {  habilidades:"luta, forca, agilidade, resistencia, cura, reflexo, imunidade fisiologica",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "capitao", nivel:"protagonista"}]-> (vingadores_4) ' +

    //Peggy Carter
    'CREATE (hayley_atwell :People {name:"hayley_atwell", personagem:"peggy carter", raca:"humano"}) ' +

    'CREATE (hayley_atwell)-[:ACTED_IN {  habilidades:"luta, agilidade",' +
    'cores_uniforme: "marrom", tendencia: "heroi", grupo: "shield", nivel:"coadjuvante"}]-> (capitao_america_1) ' +

    'CREATE (hayley_atwell)-[:ACTED_IN {  habilidades:"luta, agilidade",' +
    'cores_uniforme: "marrom", tendencia: "heroi", grupo: "shield", nivel:"coadjuvante"}]-> (capitao_america_2) ' +

    'CREATE (hayley_atwell)-[:ACTED_IN {  habilidades:"luta, agilidade",' +
    'cores_uniforme: "marrom", tendencia: "heroi", grupo: "shield", nivel:"coadjuvante"}]-> (vingadores_2) ' +

    'CREATE (hayley_atwell)-[:ACTED_IN {  habilidades:"luta, agilidade",' +
    'cores_uniforme: "marrom", tendencia: "heroi", grupo: "shield", nivel:"coadjuvante"}]-> (homem_formiga_1) ' +

    'CREATE (hayley_atwell)-[:ACTED_IN {  habilidades:"luta, agilidade",' +
    'cores_uniforme: "marrom", tendencia: "heroi", grupo: "shield", nivel:"coadjuvante"}]-> (capitao_america_3) ' +

    'CREATE (hayley_atwell)-[:ACTED_IN {  habilidades:"luta, agilidade",' +
    'cores_uniforme: "marrom", tendencia: "heroi", grupo: "shield", nivel:"coadjuvante"}]-> (vingadores_4) ' +

    //capitã marvel
    'CREATE (brie_larson :People {name:"brie larson", personagem:"capita marvel", raca:"humano, kree"}) ' +

    'CREATE (brie_larson)-[:ACTED_IN {  habilidades:"luta, forca, vigor, durabilidade, agilidade, reflexo, voar, regeneracao,absorcao de energia, manipulacao de energia",' +
    'cores_uniforme: "azul, vermelho, amarelo", tendencia: "heroi", grupo: "shield", nivel:"protagonista"}]-> (capita_marvel_1) ' +

    'CREATE (brie_larson)-[:ACTED_IN {  habilidades:"luta, forca, vigor, durabilidade, agilidade, reflexo, voar, regeneracao,absorcao de energia, manipulacao de energia",' +
    'cores_uniforme: "azul, vermelho, amarelo", tendencia: "heroi", grupo: "shield", nivel:"protagonista"}]-> (vingadores_4) ' +

    //senhor das estrelas
    'CREATE (chris_pratt :People {name:"chris pratt", personagem:"senhor das estrelas", raca:"humano, celestial, spartoi"}) ' +

    'CREATE (chris_pratt)-[:ACTED_IN {  habilidades:"forca, resistencia, agilidade, vigor, visao, inteligencia",' +
    'cores_uniforme: "azul, vermelho, preto", tendencia: "heroi", grupo: "guardioes da galaxia", nivel:"protagonista"}]-> (guardioes_da_galaxia_1) ' +

    'CREATE (chris_pratt)-[:ACTED_IN {  habilidades:"forca, resistencia, agilidade, vigor, visao, inteligencia",' +
    'cores_uniforme: "azul, vermelho, preto", tendencia: "heroi", grupo: "guardioes da galaxia", nivel:"protagonista"}]-> (guardioes_da_galaxia_2) ' +

    'CREATE (chris_pratt)-[:ACTED_IN {  habilidades:"forca, resistencia, agilidade, vigor, visao, inteligencia",' +
    'cores_uniforme: "azul, vermelho, preto", tendencia: "heroi", grupo: "guardioes da galaxia", nivel:"protagonista"}]-> (vingadores_3) ' +

    'CREATE (chris_pratt)-[:ACTED_IN {  habilidades:"forca, resistencia, agilidade, vigor, visao, inteligencia",' +
    'cores_uniforme: "azul, vermelho, preto", tendencia: "heroi", grupo: "guardioes da galaxia", nivel:"protagonista"}]-> (vingadores_4) ' +

    //gamora
    'CREATE (zoe_saldana :People {name:"zoe saldana", personagem:"gamora", raca:"zen whoberi"}) ' +

    'CREATE (zoe_saldana)-[:ACTED_IN {  habilidades:"forca, resistencia, agilidade, vigor, visao, inteligencia",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "guardioes da galaxia", nivel:"protagonista"}]-> (guardioes_da_galaxia_1) ' +

    'CREATE (zoe_saldana)-[:ACTED_IN {  habilidades:"forca, resistencia, agilidade, vigor, visao, inteligencia",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "guardioes da galaxia", nivel:"protagonista"}]-> (guardioes_da_galaxia_2) ' +

    'CREATE (zoe_saldana)-[:ACTED_IN {  habilidades:"forca, resistencia, agilidade, vigor, visao, inteligencia",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "guardioes da galaxia", nivel:"protagonista"}]-> (vingadores_3) ' +

    'CREATE (zoe_saldana)-[:ACTED_IN {  habilidades:"forca, resistencia, agilidade, vigor, visao, inteligencia",' +
    'cores_uniforme: "preto", tendencia: "heroi", grupo: "guardioes da galaxia", nivel:"protagonista"}]-> (vingadores_4) ' +

    //rocket Raccon
    'CREATE (bradley_cooper :People {name:"bradley cooper", personagem:"rocket raccon", raca:"halfworlder"}) ' +

    'CREATE (bradley_cooper)-[:ACTED_IN {  habilidades:"agilidade, contrutor",' +
    'cores_uniforme: "marrom", tendencia: "heroi", grupo: "guardioes da galaxia", nivel:"protagonista"}]-> (guardioes_da_galaxia_1) ' +

    'CREATE (bradley_cooper)-[:ACTED_IN {  habilidades:"agilidade, contrutor",' +
    'cores_uniforme: "marrom", tendencia: "heroi", grupo: "guardioes da galaxia", nivel:"protagonista"}]-> (guardioes_da_galaxia_2) ' +

    'CREATE (bradley_cooper)-[:ACTED_IN {  habilidades:"agilidade, contrutor",' +
    'cores_uniforme: "marrom", tendencia: "heroi", grupo: "guardioes da galaxia", nivel:"protagonista"}]-> (vingadores_3) ' +

    'CREATE (bradley_cooper)-[:ACTED_IN {  habilidades:"agilidade, contrutor",' +
    'cores_uniforme: "marrom", tendencia: "heroi", grupo: "guardioes da galaxia", nivel:"protagonista"}]-> (vingadores_4) ' +

    //Drax
    'CREATE (dave_bautista :People {name:"dave bautista", personagem:"drax o destruidor", raca:"kylosian"}) ' +

    'CREATE (dave_bautista)-[:ACTED_IN {  habilidades:"luta, forca, vigor, resistencia, agilidade, regeneracao ",' +
    'cores_uniforme: "marrom", tendencia: "heroi", grupo: "guardioes da galaxia", nivel:"protagonista"}]-> (guardioes_da_galaxia_1) ' +

    'CREATE (dave_bautista)-[:ACTED_IN {  habilidades:"luta, forca, vigor, resistencia, agilidade, regeneracao ",' +
    'cores_uniforme: "azul", tendencia: "heroi", grupo: "guardioes da galaxia", nivel:"protagonista"}]-> (guardioes_da_galaxia_2) ' +

    'CREATE (dave_bautista)-[:ACTED_IN {  habilidades:"luta, forca, vigor, resistencia, agilidade, regeneracao ",' +
    'cores_uniforme: "azul", tendencia: "heroi", grupo: "guardioes da galaxia", nivel:"protagonista"}]-> (vingadores_3) ' +

    'CREATE (dave_bautista)-[:ACTED_IN {  habilidades:"luta, forca, vigor, resistencia, agilidade, regeneracao ",' +
    'cores_uniforme: "azul", tendencia: "heroi", grupo: "guardioes da galaxia", nivel:"protagonista"}]-> (vingadores_4) ' +

    //groot
    'CREATE (vin_diesel :People {name:"vin diesel", personagem:"groot", raca:"flora colossus"}) ' +

    'CREATE (vin_diesel)-[:ACTED_IN {  habilidades:"luta, forca, vigor, resistencia, regeneracao ",' +
    'cores_uniforme: "nenhum", tendencia: "heroi", grupo: "guardioes da galaxia", nivel:"protagonista"}]-> (guardioes_da_galaxia_1) ' +

    'CREATE (vin_diesel)-[:ACTED_IN {  habilidades:"luta, forca, vigor, resistencia, regeneracao ",' +
    'cores_uniforme: "azul", tendencia: "heroi", grupo: "guardioes da galaxia", nivel:"protagonista"}]-> (guardioes_da_galaxia_2) ' +

    'CREATE (vin_diesel)-[:ACTED_IN {  habilidades:"luta, forca, vigor, resistencia, regeneracao ",' +
    'cores_uniforme: "azul", tendencia: "heroi", grupo: "guardioes da galaxia", nivel:"protagonista"}]-> (vingadores_3) ' +

    'CREATE (vin_diesel)-[:ACTED_IN {  habilidades:"luta, forca, vigor, resistencia, regeneracao ",' +
    'cores_uniforme: "azul", tendencia: "heroi", grupo: "guardioes da galaxia", nivel:"protagonista"}]-> (vingadores_4) ' +

    //nebulosa
    'CREATE (karen_gillan :People {name:"karen gillas", personagem:"groot", raca:"luphomoid"}) ' +

    'CREATE (karen_gillan)-[:ACTED_IN {  habilidades:"forca, resistencia, agilidade, vigor, visao, inteligencia",' +
    'cores_uniforme: "roxo", tendencia: "vila", grupo: "thanos", nivel:"protagonista"}]-> (guardioes_da_galaxia_1) ' +

    'CREATE (karen_gillan)-[:ACTED_IN {  habilidades:"forca, resistencia, agilidade, vigor, visao, inteligencia",' +
    'cores_uniforme: "roxo", tendencia: "vila", grupo: "thanos", nivel:"protagonista"}]-> (guardioes_da_galaxia_2) ' +

    'CREATE (karen_gillan)-[:ACTED_IN {  habilidades:"forca, resistencia, agilidade, vigor, visao, inteligencia",' +
    'cores_uniforme: "roxo", tendencia: "vila", grupo: "guardioes da galaxia", nivel:"protagonista"}]-> (vingadores_3) ' +

    'CREATE (karen_gillan)-[:ACTED_IN {  habilidades:"forca, resistencia, agilidade, vigor, visao, inteligencia",' +
    'cores_uniforme: "roxo", tendencia: "vila", grupo: "guardioes da galaxia", nivel:"protagonista"}]-> (vingadores_4) ' +

    //youdu
    'CREATE (michael_rooker :People {name:"michael rooker", personagem:"youdu udonta", raca:"centauriano"}) ' +

    'CREATE (michael_rooker)-[:ACTED_IN {  habilidades:"forca, resistencia, agilidade, vigor, visao, inteligencia",' +
    'cores_uniforme: "marrom", tendencia: "vilao", grupo: "piratas do espaço", nivel:"protagonista"}]-> (guardioes_da_galaxia_1) ' +

    'CREATE (michael_rooker)-[:ACTED_IN {  habilidades:"forca, resistencia, agilidade, vigor, visao, inteligencia",' +
    'cores_uniforme: "marrom", tendencia: "vilao", grupo: "piratas do espaço", nivel:"protagonista"}]-> (guardioes_da_galaxia_1) ' +

    'CREATE (michael_rooker)-[:ACTED_IN {  habilidades:"forca, resistencia, agilidade, vigor, visao, inteligencia",' +
    'cores_uniforme: "marrom", tendencia: "heroi", grupo: "piratas do espaço", nivel:"protagonista"}]-> (vingadores_4) ' +

    //shang-chi
    'CREATE (simu_liu :People {name:"simu liu", personagem:"shang-chi", raca:"humano"}) ' +

    'CREATE (simu_liu)-[:ACTED_IN {  habilidades:"luta, forca, velocidade, agilidade, vigor, reflexo,manipulacao de energia",' +
    'cores_uniforme: "vermelho", tendencia: "heroi", grupo: "nenhum", nivel:"protagonista"}]-> (shang_chi_1) ' +

    //Katy
    'CREATE (nora_lum :People {name:"nora lum", personagem:"katy", raca:"humano"}) ' +

    'CREATE (nora_lum)-[:ACTED_IN {  habilidades:"nenhuma",' +
    'cores_uniforme: "vermelho", tendencia: "heroi", grupo: "nenhum", nivel:"coadjuvante"}]-> (shang_chi_1) ' +

    //xu Xialing
    'CREATE (menger_zhang :People {name:"menger zhang", personagem:"xu xialing", raca:"humano"}) ' +

    'CREATE (menger_zhang)-[:ACTED_IN {  habilidades:"luta, agilidade,resistencia, velocidade",' +
    'cores_uniforme: "branco, preto", tendencia: "heroi", grupo: "nenhum", nivel:"coadjuvante"}]-> (shang_chi_1) ' +

    //ying li
    'CREATE (fala_chen :People {name:"fala chen", personagem:"ying li", raca:"humano"}) ' +

    'CREATE (fala_chen)-[:ACTED_IN {  habilidades:"luta, agilidade,resistencia, velocidade, controle dos elementos",' +
    'cores_uniforme: "nenhum", tendencia: "heroi", grupo: "nenhum", nivel:"coadjuvante"}]-> (shang_chi_1) ' +

    //wong
    'CREATE (benedict_wong :People {name:"benedict wong", personagem:"wong", raca:"humano"}) ' +

    'CREATE (benedict_wong)-[:ACTED_IN {  habilidades:"magia",' +
    'cores_uniforme: "vermelho", tendencia: "heroi", grupo: "nenhum", nivel:"coadjuvante"}]-> (shang_chi_1) ' +

    'CREATE (benedict_wong)-[:ACTED_IN {  habilidades:"magia",' +
    'cores_uniforme: "vermelho", tendencia: "heroi", grupo: "nenhum", nivel:"coadjuvante"}]-> (doutor_estranho_1) ' +

    //miranha
    'CREATE (tom_holland :People {name:"tom holland", personagem:"homem-aranha", raca:"humano"}) ' +

    'CREATE (tom_holland)-[:ACTED_IN {  habilidades:"velocidade, agilidade, reflexo, sentido aranha, forca",' +
    'cores_uniforme: "vermelho", tendencia: "heroi", grupo: "nenhum", nivel:"coadjuvante"}]-> (homem_aranha_1) ' +

    'CREATE (tom_holland)-[:ACTED_IN {  habilidades:"velocidade, agilidade, reflexo, sentido aranha, forca",' +
    'cores_uniforme: "vermelho", tendencia: "heroi", grupo: "nenhum", nivel:"coadjuvante"}]-> (homem_aranha_2) '

    ;


var viloes =
    //Caveira vermelha
    'CREATE (hugo_weaving :People {name:"hugo weaving", personagem:"caveira vermelha", raca:"humano"}) ' +

    'CREATE (hugo_weaving)-[:ACTED_IN {  habilidades:"luta, forca, agilidade, resistencia, cura, reflexo, imunidade fisiologica, inteligencia",' +
    'cores_uniforme: "preto, vermelho", tendencia: "vilao", grupo: "hidra", nivel:"antagonista"}]-> (capitao_america_1) ' +

    //mandarim
    'CREATE (tony_leung :People {name:"tony leung", personagem:"mandarim", raca:"humano"}) ' +

    'CREATE (tony_leung)-[:ACTED_IN {  habilidades:"luta, forca, velocidade, agilidade, vigor, reflexo,manipulacao de energia",' +
    'cores_uniforme: "preto, vermelho", tendencia: "vilao", grupo: "hidra", nivel:"antagonista"}]-> (capitao_america_1) ' +

    //Mandarim falso 
    'CREATE (ben_kingsley :People {name:"ben_kingsley", personagem:"mandarim falso", raca:"humano"}) ' +

    'CREATE (ben_kingsley)-[:ACTED_IN {  habilidades:"nenhum",' +
    'cores_uniforme: "verde", tendencia: "vilao", grupo: "nenhum", nivel:"antagonista"}]-> (homem_de_ferro_3) ' +

    'CREATE (ben_kingsley)-[:ACTED_IN {  habilidades:"nenhum",' +
    'cores_uniforme: "marrom", tendencia: "heroi", grupo: "nenhum", nivel:"antagonista"}]-> (shang_chi_1) ' +

    //Ronan o Acusador
    'CREATE (lee_pace :People {name:"lee pace", personagem:"capita marvel", raca:"kree"}) ' +

    'CREATE (lee_pace)-[:ACTED_IN {  habilidades:"luta, forca, resistencia, cura, reflexo, imunidade fisiologica, inteligencia",' +
    'cores_uniforme: "preto, verde", tendencia: "vilao", grupo: "thanos", nivel:"antagonista"}]-> (guardioes_da_galaxia_1) ' +

    'CREATE (lee_pace)-[:ACTED_IN {  habilidades:"luta, forca, resistencia, cura, reflexo, imunidade fisiologica, inteligencia",' +
    'cores_uniforme: "preto, verde", tendencia: "vilao", grupo: "thanos", nivel:"antagonista"}]-> (capita_marvel_1) ' +

    //Monge de Ferro
    'CREATE (jeff_bridges :People {name:"jeff bridges", personagem:"monge de ferro", raca:"humano"}) ' +

    'CREATE (jeff_bridges)-[:ACTED_IN {  habilidades:"luta, forca, resistencia",' +
    'cores_uniforme: "cinza", tendencia: "vilao", grupo: "nenhum", nivel:"antagonista"}]-> (homem_de_ferro_1) ' +


    //abominavel
    'CREATE (tim_roth :People {name:"tim roth", personagem:"monge de ferro", raca:"humano"}) ' +

    'CREATE (tim_roth)-[:ACTED_IN {  habilidades:"luta, forca, resistencia",' +
    'cores_uniforme: "cinza", tendencia: "vilao", grupo: "nenhum", nivel:"antagonista"}]-> (homem_de_ferro_1) ' +

    //Justin Hammer
    'CREATE (sam_rockwell :People {name:"sam rockwell", personagem:"justin hammer", raca:"humano"}) ' +

    'CREATE (sam_rockwell)-[:ACTED_IN {  habilidades:"contrutor",' +
    'cores_uniforme: "cinza", tendencia: "vilao", grupo: "nenhum", nivel:"antagonista"}]-> (homem_de_ferro_2) ' +

    //Chicote negro
    'CREATE (mickey_rourke :People {name:"mickey rourke", personagem:"chicote negro", raca:"humano"}) ' +

    'CREATE (mickey_rourke)-[:ACTED_IN {  habilidades:"luta, agilidade, reflexo, resistencia",' +
    'cores_uniforme: "cinza, laranja", tendencia: "vilao", grupo: "nenhum", nivel:"antagonista"}]-> (homem_de_ferro_2) ' +

    //ego
    'CREATE (kurt_russel :People {name:"kurt russel", personagem:"ego", raca:"celestial"}) ' +

    'CREATE (kurt_russel)-[:ACTED_IN {  habilidades:"manipulacao de energia, controle mental fraco, vigor, regenercao, forca, luta, imortalidade, manipulacao molecular",' +
    'cores_uniforme: "preto, marrom", tendencia: "vilao", grupo: "nenhum", nivel:"antagonista"}]-> (guardioes_da_galaxia_2) ' +

    //Laufey
    'CREATE (colm_feore :People {name:"colm feore", personagem:"laufey", raca:"gigante de gelo"}) ' +


    'CREATE (colm_feore)-[:ACTED_IN {  habilidades:"luta, resistencia, vigor, gelo",' +
    'cores_uniforme: "preto", tendencia: "vilao", grupo: "gigantes de gelo", nivel:"antagonista"}]-> (thor_1) ' +


    //Loki
    'CREATE (tom_hiddleston :People {name:"tom_hiddleston", personagem:"loki", raca:"divindade asgardiano"}) ' +

    'CREATE (tom_hiddleston)-[:ACTED_IN {  habilidades:"luta, agilidade, reflexo, resistencia, ilusoes, magia",' +
    'cores_uniforme: "verde, preto", tendencia: "vilao", grupo: "nenhum", nivel:"antagonista"}]-> (thor_1) ' +

    'CREATE (tom_hiddleston)-[:ACTED_IN {  habilidades:"luta, agilidade, reflexo, resistencia, ilusoes, magia",' +
    'cores_uniforme: "verde, preto", tendencia: "vilao", grupo: "nenhum", nivel:"antagonista"}]-> (vingadores_1) ' +

    'CREATE (tom_hiddleston)-[:ACTED_IN {  habilidades:"luta, agilidade, reflexo, resistencia, ilusoes, magia",' +
    'cores_uniforme: "verde, preto", tendencia: "vilao", grupo: "nenhum", nivel:"antagonista"}]-> (thor_2) ' +

    'CREATE (tom_hiddleston)-[:ACTED_IN {  habilidades:"luta, agilidade, reflexo, resistencia, ilusoes, magia",' +
    'cores_uniforme: "verde, preto", tendencia: "vilao", grupo: "nenhum", nivel:"antagonista"}]-> (thor_3) ' +

    //razorfirst
    'CREATE (florian_munteanu :People {name:"florian munteanu", personagem:"razorfirst", raca:"humano"}) ' +

    'CREATE (florian_munteanu)-[:ACTED_IN {  habilidades:"luta, resistencia, velocidade, ",' +
    'cores_uniforme: "preto", tendencia: "vilao", grupo: "nenhum", nivel:"coadjuvante"}]-> (shang_chi_1) '
    ;


var coadjuvantesLegais =
    //pepper potts
    'CREATE (gwyneth_paltrow :People {name:"gwyneth paltrow", personagem:"pepper potts", raca:"humano"}) ' +

    'CREATE (gwyneth_paltrow)-[:ACTED_IN {  habilidades:"legal (y)",' +
    'cores_uniforme: "nenhum", tendencia: "heroi", grupo: "shield", nivel:"coadjuvante"}]-> (homem_de_ferro_1) ' +

    'CREATE (gwyneth_paltrow)-[:ACTED_IN {  habilidades:"legal (y)",' +
    'cores_uniforme: "nenhum", tendencia: "heroi", grupo: "shield", nivel:"coadjuvante"}]-> (homem_de_ferro_2) ' +

    'CREATE (gwyneth_paltrow)-[:ACTED_IN {  habilidades:"legal (y)",' +
    'cores_uniforme: "nenhum", tendencia: "heroi", grupo: "shield", nivel:"coadjuvante"}]-> (vingadores_1) ' +

    'CREATE (gwyneth_paltrow)-[:ACTED_IN {  habilidades:"legal (y)",' +
    'cores_uniforme: "nenhum", tendencia: "heroi", grupo: "shield", nivel:"coadjuvante"}]-> (homem_de_ferro_3) ' +

    'CREATE (gwyneth_paltrow)-[:ACTED_IN {  habilidades:"legal (y)",' +
    'cores_uniforme: "nenhum", tendencia: "heroi", grupo: "shield", nivel:"coadjuvante"}]-> (homem_aranha_1) ' +

    'CREATE (gwyneth_paltrow)-[:ACTED_IN {  habilidades:"legal (y)",' +
    'cores_uniforme: "nenhum", tendencia: "heroi", grupo: "shield", nivel:"coadjuvante"}]-> (homem_aranha_2) ' +

    'CREATE (gwyneth_paltrow)-[:ACTED_IN {  habilidades:"legal (y)",' +
    'cores_uniforme: "nenhum", tendencia: "heroi", grupo: "shield", nivel:"coadjuvante"}]-> (vingadores_3) ' +

    'CREATE (gwyneth_paltrow)-[:ACTED_IN {  habilidades:"legal (y)",' +
    'cores_uniforme: "nenhum", tendencia: "heroi", grupo: "shield", nivel:"coadjuvante"}]-> (vingadores_4) ' +

    //Jane Foster
    'CREATE (natalie_portman :People {name:"natalie portman", personagem:"jane foster", raca:"humano"}) ' +

    'CREATE (natalie_portman)-[:ACTED_IN {  habilidades:"legal (y)",' +
    'cores_uniforme: "nenhum", tendencia: "heroi", grupo: "nenhum", nivel:"coadjuvante"}]-> (thor_1) ' +

    'CREATE (natalie_portman)-[:ACTED_IN {  habilidades:"legal (y)",' +
    'cores_uniforme: "nenhum", tendencia: "heroi", grupo: "nenhum", nivel:"coadjuvante"}]-> (thor_2) ' +

    //Darcy Lewis
    'CREATE (kat_dennings :People {name:"kat dennings", personagem:"darcy lewis", raca:"humano"}) ' +

    'CREATE (kat_dennings)-[:ACTED_IN {  habilidades:"legal (y)",' +
    'cores_uniforme: "nenhum", tendencia: "heroi", grupo: "nenhum", nivel:"coadjuvante"}]-> (thor_1) ' +

    'CREATE (kat_dennings)-[:ACTED_IN {  habilidades:"legal (y)",' +
    'cores_uniforme: "nenhum", tendencia: "heroi", grupo: "nenhum", nivel:"coadjuvante"}]-> (thor_2) ' +


    //Heimdall
    'CREATE (idris_elba :People {name:"idris elba", personagem:"Heimdall", raca:"asgardiano"}) ' +

    'CREATE (idris_elba)-[:ACTED_IN {  habilidades:"controle da bifrost, luta, agilidade, reflexo, forca, visao infinita, conhecimento de intensoes",' +
    'cores_uniforme: "dourada", tendencia: "heroi", grupo: "asgardianos", nivel:"coadjuvante"}]-> (thor_1) ' +

    'CREATE (idris_elba)-[:ACTED_IN {  habilidades:"controle da bifrost, luta, agilidade, reflexo, forca, visao infinita, conhecimento de intensoes",' +
    'cores_uniforme: "dourada", tendencia: "heroi", grupo: "asgardianos", nivel:"coadjuvante"}]-> (thor_2) ' +

    'CREATE (idris_elba)-[:ACTED_IN {  habilidades:"controle da bifrost, luta, agilidade, reflexo, forca, visao infinita, conhecimento de intensoes",' +
    'cores_uniforme: "dourada", tendencia: "heroi", grupo: "asgardianos", nivel:"coadjuvante"}]-> (thor_3) ' +

    'CREATE (idris_elba)-[:ACTED_IN {  habilidades:"controle da bifrost, luta, agilidade, reflexo, forca, visao infinita, conhecimento de intensoes",' +
    'cores_uniforme: "dourada", tendencia: "heroi", grupo: "asgardianos", nivel:"coadjuvante"}]-> (vingadores_4) ' +

    //Frigga
    'CREATE (rene_russo :People {name:"rene_russo", personagem:"frigga", raca:"asgardiano"}) ' +

    'CREATE (rene_russo)-[:ACTED_IN {  habilidades:"legal (y)",' +
    'cores_uniforme: "nenhum", tendencia: "heroi", grupo: "asgardianos", nivel:"coadjuvante"}]-> (thor_1) ' +

    'CREATE (rene_russo)-[:ACTED_IN {  habilidades:"legal (y)",' +
    'cores_uniforme: "nenhum", tendencia: "heroi", grupo: "asgardianos", nivel:"coadjuvante"}]-> (thor_2) ' +

    //odin
    'CREATE (anthony_hopkins :People {name:"anthony hopkins", personagem:"odin", raca:"asgardiano"}) ' +

    'CREATE (anthony_hopkins)-[:ACTED_IN {  habilidades:"forca, agilidade, inteligencia, reflexo, velocidade, voar, ",' +
    'cores_uniforme: "nenhum", tendencia: "heroi", grupo: "asgardianos", nivel:"coadjuvante"}]-> (thor_1) ' +

    'CREATE (anthony_hopkins)-[:ACTED_IN {  habilidades:"forca, agilidade, inteligencia, reflexo, velocidade, voar, ",' +
    'cores_uniforme: "nenhum", tendencia: "heroi", grupo: "asgardianos", nivel:"coadjuvante"}]-> (thor_2) ' +

    'CREATE (anthony_hopkins)-[:ACTED_IN {  habilidades:"forca, agilidade, inteligencia, reflexo, velocidade, voar, ",' +
    'cores_uniforme: "nenhum", tendencia: "heroi", grupo: "asgardianos", nivel:"coadjuvante"}]-> (thor_3) '

    ;



async function teste() {

    var envio = 'use teste ' + filmes + " " + herois + " " + "\n\n\n\n" + viloes + coadjuvantesLegais;

    console.log(envio);

    var a = await session.run(
        envio
    ).then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    })
    return a;
}

var res = teste();

driver.close();


