function openPopup(infoType) {
    const popup = document.getElementById("popup");
    const title = document.getElementById("popup-title");
    const message = document.getElementById("popup-message");

    if (infoType === 'info1') {
        title.textContent = "Hidrogênio";
        message.textContent = "O hidrogênio é o elemento químico de símbolo H e número atômico 1 da tabela periódica. Trata-se do elemento mais simples conhecido, cujo átomo é formado apenas por um próton e nenhum nêutron. Embora esteja localizado no primeiro período e acima dos metais alcalinos (grupo 1), este elemento não é um metal.";
    }
    //=========================================//
    else if (infoType === 'info2') {
        title.textContent = "Hélio";
        message.textContent = "O hélio é um elemento químico presente na tabela periódica, com o símbolo He e número atômico 2. É um gás nobre, incolor, inodoro e insípido, que se encontra em pequenas quantidades na atmosfera terrestre. O nome hélio deriva da palavra grega “helios”, que significa sol, pois foi descoberto pela primeira vez no espectro solar";
    }
    //=========================================//
    else if (infoType === 'info3') {
        title.textContent = "Lítio";
        message.textContent = "O lítio é um elemento químico de símbolo Li, número atômico 3 e massa atômica 7, contendo, na sua estrutura, três prótons e três elétrons. Na tabela periódica dos elementos químicos, pertencente ao grupo 1, dos elementos alcalinos. Sob condições normais de temperatura e pressão, é o metal mais leve e menos denso entre os elementos sólidos.";
    }
    //=========================================//
    else if (infoType === 'info4') {
        title.textContent = "Berílio";
        message.textContent = "O berílio (do grego βερυλλoς, berilo) é um elemento químico de símbolo Be, com número atômico 4 (4 prótons e 4 elétrons) e massa atômica 9 u. É um elemento alcalino-terroso, bivalente, tóxico, de coloração cinza, duro, leve, quebradiço e sólido na temperatura ambiente.";
    }
    //=========================================//
    else if (infoType === 'info5') {
        title.textContent = "Boro";
        message.textContent = "O boro é um elemento químico de símbolo B, número atômico 5 (5 prótons e 5 elétrons) com massa atómica 11 u. Ele é exclusivamente produzido pela espalação de raios cósmicos e não pela nucleossíntese estelar e, por esse motivo, é um elemento escasso tanto no sistema solar quanto na crosta terrestre. Concentra-se nas regiões com alta solubilidade hídrica de seus compostos naturais, os boratos.";
    }
    //=========================================//
    else if (infoType === 'info6') {
        title.textContent = "Carbono";
        message.textContent = "O carbono é um elemento químico, símbolo C, número atômico 6, massa atómica 12 u, sólido à temperatura ambiente. Como um membro do grupo 14 da tabela periódica, ele é um não metal e tetravalente — portando quatro elétrons disponíveis na forma de ligações covalentes. Há três isótopos com formação natural, com o ¹²C e ¹³C sendo estável, onde o ¹⁴C é radioativo, decompondo com uma meia-vida de aproximadamente 5730 anos. Ele é um dos poucos elementos químicos que já foram descobertos na antiguidade.";
    }
    //=========================================//
    else if (infoType === 'info7') {
        title.textContent = "Nitrogênio";
        message.textContent = "O nitrogênio é um elemento químico encontrado na tabela periódica e seu símbolo é representado pela letra N. Sua massa atômica é 14 u e seu número atômico é 7. Quando dois átomos de nitrogênio se ligam formam a molécula N2. Essa substância é encontrada no estado gasoso na atmosfera em 78% e é insípida, inodora e incolor. É um elemento essencial para a vida, pois constitui muitas moléculas orgânicas como, por exemplo, as proteínas, o DNA e o RNA.";
    }
    //=========================================//
    else if (infoType === 'info8') {
        title.textContent = "Oxigênio";
        message.textContent = "O oxigénio ou oxigênio é um elemento químico de número atómico 8 e símbolo O representando com massa atómica 16 u. Constitui parte do grupo dos calcogénios e é um não metal reactivo e um forte agente oxidante que facilmente forma compostos com a maioria doutros elementos, principalmente óxidos. Tem a segunda electronegatividade mais elevada de todos os elementos químicos, superado apenas pelo flúor. Medido pela sua massa, o oxigénio é o terceiro elemento mais abundante do universo, atrás do hidrogénio e hélio, e o mais abundante na crosta terrestre como parte de compostos óxidos, formando praticamente metade da sua massa.";
    }
    //=========================================//
    else if (infoType === 'info9') {
        title.textContent = "Flúor";
        message.textContent = "Flúor é um elemento químico, símbolo F, de número atômico 9 de massa atómica 19 u, situado no grupo dos halogênios da tabela periódica. Em sua forma biatômica e em CNTP, é um gás de coloração amarelo-pálido. É o mais eletronegativo e reativo de todos os elementos. Em sua forma ionizada é extremamente perigoso, podendo ocasionar graves queimaduras químicas se em contato com tecidos vivos.";
    }
    //=========================================//
    else if (infoType === 'info10') {
        title.textContent = "Neônio";
        message.textContent = "O neônio é um gás nobre do segundo período da Tabela Periódica. Dentre os elementos desse grupo, é o segundo mais abundante da atmosfera terrestre, ficando atrás do Ar, e o que possui o segundo menor ponto de ebulição, ficando atrás do He. É caracterizado pela alta energia de ionização, além de ser incolor, inodoro, insípido e quimicamente inerte.Esse elemento é obtido como subproduto da liquefação do ar atmosférico seguido pela sua destilação fracionada. É um elemento de poucos usos, mas muito conhecido pela sua utilização em sinais e avisos luminosos. Em sua forma líquida possui um grande potencial refrigerante, bem maior que o hélio e o hidrogênio, por exemplo. Foi descoberto já no final do século XIX, por Sir William Ramsay e Lord Rayleigh.";
    }
    //=========================================//
    else if (infoType === 'info11') {
        title.textContent = "Sódio";
        message.textContent = "O sódio é um elemento químico de símbolo Na (Natrium em latim), de número atômico 11 (11 prótons e 11 elétrons), massa atômica 23 u (nº de protões + nº de neutrões). É um metal alcalino, sólido na temperatura ambiente, macio, untuoso, de coloração branca, ligeiramente prateada. Foi isolado em 1807 por Sir Humphry Davy por meio da eletrólise da soda cáustica fundida (se a eletrólise for feita com solução de soda cáustica, irá se obter hidrogênio e oxigênio apenas). O sódio metálico emprega-se em síntese orgânica como agente redutor. É também componente do cloreto de sódio (NaCl) necessário para a vida.";
    }
    //=========================================//
    else if (infoType === 'info12') {
        title.textContent = "Magnésio";
        message.textContent = "O magnésio é um elemento químico de símbolo Mg de número atômico 12 com massa atômica 24 u. É um metal alcalinoterroso, pertencente ao grupo 2, sólido nas condições ambientais. É o oitavo elemento mais abundante na crosta terrestre, onde constitui cerca de 2,5% da sua massa, e o nono no Universo conhecido, no seu todo. Esta abundância do magnésio está relacionada com o facto de se formar facilmente em supernovas através da adição sequencial de três núcleos de hélio ao carbono. A alta solubilidade dos iões de magnésio na água assegura-lhe a posição como terceiro elemento mais abundante na água do mar.";
    }
    //=========================================//
    else if (infoType === 'info13') {
        title.textContent = "Alumínio";
        message.textContent = "O alumínio é um elemento químico de símbolo Al e número atômico 13 com massa 27 u. Na temperatura ambiente é sólido, sendo o elemento metálico mais abundante da crosta terrestre. Sua leveza, condutividade elétrica, resistência à corrosão e baixo ponto de fusão lhe conferem uma multiplicidade de aplicações, especialmente nas soluções de engenharia aeronáutica. Entretanto, mesmo com o baixo custo para a sua reciclagem, o que aumenta sua vida útil e a estabilidade do seu valor, a elevada quantidade de energia necessária para a sua obtenção reduz sobremaneira o seu campo de aplicação, além das implicações ecológicas negativas no rejeito dos subprodutos do processo de reciclagem, ou mesmo de produção do alumínio primário.";
    }
    //=========================================//
    else if (infoType === 'info14') {
        title.textContent = "Silício";
        message.textContent = "O silício é um elemento químico pertencente ao grupo 14 da Tabela Periódica. É um elemento considerado como semimetal, pois reúne propriedades tanto dos metais quanto dos ametais, embora algumas tabelas periódicas o classifiquem como um ametal. Destaca-se pela sua semicondutibilidade e pelo seu estado de oxidação igual a +4 quando forma compostos. Trata-se do segundo elemento mais abundante da crosta terrestre, ficando atrás apenas do oxigênio. Pode ser obtido principalmente pela redução do quartzo (SiO2) com carbono em altas temperaturas, mas para a fabricação de dispostivos eletrônicos, é necessário que seja mais puro. O silício pode ser aplicado em diversas áreas da indústria, principalmente no campo dos eletrônicos, além de ser o principal constituinte do vidro, da cerâmica, do cimento e também do silicone.";
    }
    //=========================================//
    else if (infoType === 'info15') {
        title.textContent = "Fósforo";
        message.textContent = "O fósforo é um elemento químico com símbolo P, número atômico 15, massa atômica 30,97. Pertence ao grupo 15 ou 5A e terceiro período da tabela periódica. O seu nome deriva do latim phosphorus que significa luz brilhante, portador ou fonte de luz.";
    }
    //=========================================//
    else if (infoType === 'info16') {
        title.textContent = "Enxofre";
        message.textContent = "O enxofre ou súlfur é um elemento químico de símbolo S, com número atômico 16 e massa atômica 32 u. À temperatura ambiente, o enxofre encontra-se no estado sólido. É um não metal insípido e inodoro, facilmente reconhecido na forma de cristais amarelos que ocorrem em diversos minerais de sulfito e sulfato, ou mesmo na sua forma pura. O enxofre é um elemento químico essencial para todos os organismos vivos, sendo constituinte importante de muitos aminoácidos. É utilizado em fertilizantes, além de ser constituinte da pólvora, de medicamentos laxantes, de palitos de fósforos e de inseticidas.";
    }
    //=========================================//
    else if (infoType === 'info17') {
        title.textContent = "Cloro";
        message.textContent = "O cloro é um elemento químico com símbolo Cl, número atômico 17, massa atômica 35,5. Ele pertence a família dos halogênios, grupo 17 ou 7A e ao terceiro período da tabela periódica. O seu nome deriva do grego khlorós, que significa esverdeado. Isso porque em condições normais de temperatura e pressão, o cloro caracteriza-se por ser um gás amarelo-esverdeado e com cheiro forte.";
    }
    //=========================================//
    else if (infoType === 'info18') {
        title.textContent = "Argônio";
        message.textContent = "O argônio, símbolo Ar, é um gás nobre do terceiro período da Tabela Periódica. É majoritariamente composto pelo isótopo de massa 40. Como os demais gases nobres, o argônio apresenta-se, em condições ambientes, como um gás incolor, inodoro, insípido e inerte quimicamente. Esse elemento possui uma alta energia de ionização, a maior de seu período, o que dificulta a formação de compostos de Ar. Assim sendo, a química desse elemento se centra na sua forma monoatômica. O argônio pode ser usado como atmosfera inerte e como gás de proteção em soldas. No ar atmosférico, é o terceiro maior constituinte, ficando atrás apenas de N2 e O2. Foi descoberto no final do século XIX por Lord Reyligh e William Ramsay.";
    }
    //=========================================//
    else if (infoType === 'info19') {
        title.textContent = "Potássio";
        message.textContent = "O potássio é um elemento químico de símbolo K, número atômico 19, distribuição eletrónica 2-8-8-1, metal alcalino, de massa atómica 39 u, coloração branco prateado, abundante na natureza, encontrado principalmente nas águas salgadas e outros minerais. Oxida-se rapidamente com o oxigênio do ar, é muito reativo especialmente com a água e se parece quimicamente com o sódio.";
    }
    //=========================================//
    else if (infoType === 'info20') {
        title.textContent = "Cálcio";
        message.textContent = "O cálcio é um elemento químico, símbolo Ca, de número atómico 20 (20 prótons e 20 elétrons) e massa atómica 40u. É um metal da família dos alcalino-terrosos, pertencente ao grupo 2 da classificação periódica dos elementos químicos. Foi isolado pela primeira vez em 1808, em uma forma impura, pelo químico britânico Humphry Davy mediante a eletrólise de uma amálgama de mercúrio (HgO) e cal (CaO).";
    }
    //=========================================//
    else if (infoType === 'info21') {
        title.textContent = "Escândio";
        message.textContent = "O escândio, símbolo Sc, número atômico 21, é um metal de transição que abre o grupo 3 da Tabela Periódica. Ele foi um dos elementos previstos por Mendeleev em sua versão da Tabela Periódica. Ele deixou um espaço entre o cálcio e o titânio para um elemento que, à época, chamou de ekaboro. O escândio é mais abundante no Sol do que na crosta terrestre, e poucos são os minérios com alto teor de escândio. A thortveitita é um exemplo desses minerais e, por conta de sua raridade, chegou a ser mais cara que o ouro na década de 1950. Poucos são os usos para o escândio, mas sabe-se que ele é capaz de melhorar as propriedades do alumínio quando formam uma liga. Nos Estados Unidos, vem sendo utilizado na fabricação de equipamentos esportivos, como capacetes e tacos de beisebol.";
    }
    //=========================================//
    else if (infoType === 'info22') {
        title.textContent = "Titânio";
        message.textContent = "O titânio é um elemento químico de símbolo Ti, número atômico 22 com massa atômica 47,90 u. Trata-se de um metal de transição leve, forte, de cor cinza e aspecto metálico e lustroso, de baixa densidade, sólido na temperatura ambiente e resistente à corrosão pela água do mar, água régia e cloro. O titânio é muito utilizado em ligas leves e no pigmento muito branco.";
    }
    //=========================================//
    else if (infoType === 'info23') {
        title.textContent = "Vanádio";
        message.textContent = "Vanádio é um elemento químico, símbolo V, número atômico 23 de massa atómica 50,94 u que, nas condições ambientes, é encontrado no estado sólido. Foi descoberto pelo mineralogista espanhol Andrés Manuel del Río, no México, em 1801, num mineral de chumbo. Em 1830, o sueco Nils Gabriel Sefström descobriu o elemento num óxido que encontrou enquanto trabalhava numa mina de ferro e deu-lhe o nome pelo qual é conhecido atualmente. Está situado no grupo 5 da tabela periódica dos elementos.";
    }
    //=========================================//
    else if (infoType === 'info24') {
        title.textContent = "Crômio";
        message.textContent = "O cromo, número atômico 24, é um metal de transição localizado no grupo 6 da Tabela Periódica. Sua coloração é acinzentada, mas ele é também um metal muito lustroso. Existe principalmente nos estados de oxidação +2, +3 e +6 e possui a característica de que todos os seus compostos são coloridos. Não à toa, seu nome deriva do grego chroma, que significa cor. Esse elemento é obtido por meio da cromita e tem grande utilização na indústria metalúrgica, na produção do aço inoxidável e outras ligas especiais. O cromo também pode ser eletrodepositado sobre objetos, em um efeito conhecido como cromagem, que garante, além de beleza, grande resistência química. Os compostos de cromo também são utilizados em pigmentos e tintas, além de materiais refratários.";
    }
    //=========================================//
    else if (infoType === 'info25') {
        title.textContent = "Manganês";
        message.textContent = "O manganês ou manganés ou manganésio é um elemento químico, símbolo Mn, número atômico 25 e massa atómica 55 u, sólido em temperatura ambiente. Situa-se no grupo 7 da classificação periódica dos elementos, sendo um metal de transição externa. Usado em ligas principalmente na do aço e, também, para a produção de pilhas. Foi descoberto em 1774 pelo sueco Johan Gottlieb Gahn, reduzindo o seu óxido com carbono. Sua principal aplicação é na fabricação de ligas metálicas no qual é um agente removedor de enxofre e oxigênio e outros usos de seus principais compostos incluem o dióxido de manganês na confecção de pilhas secas e o permanganato de potássio em laboratório como agente oxidante em várias reações químicas.";
    }
    //=========================================//
    else if (infoType === 'info26') {
        title.textContent = "Ferro";
        message.textContent = "O ferro é um elemento químico, símbolo Fe, de número atômico 26 e massa atômica 56 u. À temperatura ambiente, o ferro encontra-se no estado sólido. É extraído da natureza sob a forma de minério de ferro que, depois de passado para o estágio de ferro-gusa, através de processos de transformação, é usado na forma de lingotes. Controlando-se o teor de carbono, dá-se origem a vários tipos de aço.";
    }
    //=========================================//
    else if (infoType === 'info27') {
        title.textContent = "Cobalto";
        message.textContent = "Cobalto é um elemento químico, símbolo Co, número atômico 27 e massa atómica 58,93 uma, encontrado em temperatura ambiente no estado sólido. É um metal de transição situado no grupo 9 da Classificação Periódica dos Elementos. É utilizado para a produção de superligas usadas em turbinas de gás de aviões, ligas resistentes a corrosão, aços rápidos, carbetos, ferramentas de diamante e baterias de íon lítio. O Co-60, radioisótopo é usado como fonte de radiação gama em radioterapia e esterilização de alimentos.";
    }
    //=========================================//
    else if (infoType === 'info28') {
        title.textContent = "Níquel";
        message.textContent = "O níquel é um metal de transição de número atômico 28. No estado metálico, é brilhante e apresenta coloração branca-prateada. Uma de suas características mais importantes é a alta resistência à corrosão, o que o torna um componente de muitos tipos de ligas metálicas, inclusive do aço inoxidável, aplicação que ocupa a maior parte do níquel extraído. Na natureza, o níquel está associado a minérios sulfetados e lateríticos, sendo encontrado em regiões profundas, vulcânicas ou em ambientes atingidos por meteoritos.";
    }
    //=========================================//
    else if (infoType === 'info29') {
        title.textContent = "Cobre";
        message.textContent = "O cobre é um elemento químico de símbolo Cu, número atômico 29 e de massa atómica 63,54 u. À temperatura ambiente o cobre encontra-se no estado sólido. Classificado como metal de transição, pertence ao grupo 11 da Classificação Periódica dos Elementos. É um dos metais mais importantes industrialmente, de coloração avermelhada, dúctil, maleável e bom condutor de eletricidade.";
    }
    //=========================================//
    else if (infoType === 'info30') {
        title.textContent = "Zinco";
        message.textContent = "O zinco é um metal prateado com um aspecto branco azulado que pertence à série dos metais de transição (bloco d) e ocupa a décima segunda posição no quarto período da tabela periódica. É um elemento que possui reatividade moderada e uma boa capacidade para formar ligas, como o bronze. Além disso, é sólido em temperatura ambiente e reage com ácidos diluídos, liberando gás hidrogênio. Nesse contexto, quando exposto ao ar, desenvolve uma fina camada de óxido de zinco que o protege da corrosão, tornando-o valioso para revestimentos protetores em objetos de metal.";
    }
    //=========================================//
    else if (infoType === 'info31') {
        title.textContent = "Gálio";
        message.textContent = "O gálio, número atômico 31, é um metal pertencente ao grupo 13 da Tabela Periódica. Destaca-se pelo seu baixo ponto de fusão, na faixa dos 30 °C. Contudo, como apenas entra em ebulição aos 2204 °C, é o elemento de maior intervalo líquido da Tabela Periódica. Quimicamente, é semelhante ao zinco (vizinho na Tabela Periódica) e ao alumínio (elemento logo acima no grupo 13). É o 34º elemento mais abundante da crosta terrestre, porém bem espaçado. O gálio é comumente obtido dos rejeitos de mineração da esfalerita e da bauxita, pois os minérios que o possuem como elemento principal são raros. Sua principal aplicação está no campo dos semicondutores, muito por conta do arseneto de gálio (GaAs) e nitreto de gálio (GaN), utilizados para a fabricação de LED, lasers, smartphones, entre outros.";
    }
    //=========================================//
    else if (infoType === 'info32') {
        title.textContent = "Germânio";
        message.textContent = "O germânio (Ge) é o elemento químico de número atômico 32 da Tabela Periódica e está posicionado logo após o silício no grupo 14. É um semimetal (possui propriedades de metais e de ametais) que, na forma sólida, apresenta brilho metálico e é quebradiço. Quimicamente, é semelhante ao silício, embora seja mais reativo e mais eletropositivo do que ele. O germânio figura em poucos minerais, sendo raro na crosta terrestre (embora seja bem distribuído ao longo dela). É obtido a partir de rejeitos de minérios de zinco e, posteriormente, é purificado. É aplicado em dispositivos ópticos e em catalisadores para reações de polimerização e tem propriedades transmissoras de radiação infravermelha. Não é considerado um elemento tóxico, contudo, a ingestão recorrente pode causar sérios danos à saúde. Foi descoberto em 1886 por Clemens Winkler.";
    }
    //=========================================//
    else if (infoType === 'info33') {
        title.textContent = "Arsênio";
        message.textContent = "O arsênio ou arsénio é um elemento químico de símbolo As com número atômico 33 e com massa atómica 75 u. É um semimetal encontrado no grupo 15 da Classificação Periódica dos Elementos. Como conservante da madeira numa fórmula de arseniato de cobre e crômio, é o uso que representa, segundo algumas estimativas, cerca de 70% do seu consumo mundial. Foi descoberto em 1250 por Santo Alberto Magno.";
    }
    //=========================================//
    else if (infoType === 'info34') {
        title.textContent = "Selênio";
        message.textContent = "O selênio, Se, é um ametal de número atômico 34 e pertencente ao grupo dos calcogênios (grupo 16 da Tabela Periódica). Possui diversas formas alotrópicas, sendo a mais estável a cristalina hexagonal, em que apresenta coloração cinza metálica ou até mesmo preta. O selênio possui pouca presença na crosta terrestre, sendo mais fácil encontrá-lo como elemento minoritário de outros minerais. O selênio em sua forma elementar é relativamente atóxico, mas os seus compostos, como o H2Se, são muito tóxicos. Mesmo assim, é considerado um elemento-traço essencial, cuja ingestão diária é recomendada na faixa de 55 microgramas por dia, não podendo exceder os 800 microgramas. Isso porque o Se é um importante antioxidante, impedindo a ação de radicais livres e do oxigênio sobre as células, prevenindo-nos de envelhecimento precoce e outras doenças.";
    }
    //=========================================//
    else if (infoType === 'info35') {
        title.textContent = "Bromo";
        message.textContent = "O bromo é um elemento químico classificado como não metal, identificado pelo símbolo Br e número atômico (Z) 35. Tem uma massa molar de 79,90 g/mol e eletronegatividade de 2,96 na escala de Pauling. Esse elemento está situado na família VII A (halogênios) da tabela periódica. Sua configuração eletrônica é 1s2 2s2 2p6 3s2 3p6 4s2 3d10 4s2 4p5, com 7 elétrons na última camada e ao formar ligações químicas necessita apenas de 1 elétron para atingir a estabilidade. Não é encontrado no estado elementar na natureza, mas sim na forma de sais, sendo extraído comercialmente dos oceanos no qual está presente em uma concentração de 67 mg/L. Foi extraído pela primeira vez em 1826 por Antonie-Jérôme Balard a partir da concentração residual da água das salinas, que obteve uma substância líquida avermelhada e de odor penetrante. Um dos principais minerais que contém bromo é a bromargirita (AgBr).";
    }
    //=========================================//
    else if (infoType === 'info36') {
        title.textContent = "Criptônio";
        message.textContent = "O criptônio, símbolo Kr, é um gás nobre de número atômico 36. Localiza-se no quarto período da Tabela Periódica, e, como os demais do seu grupo, é incolor, inodoro e ocorre em pequenas quantidades na atmosfera terrestre. Sua descoberta se deu, em 1898, por Sir William Ramsay e Morris Travers. O criptônio é o gás nobre mais leve a fazer compostos que podem ser isolados em quantidades macroscópicas, sendo o principal composto o KrF2, um oxidante fortíssimo, cujo comportamento químico chama a atenção de pesquisadores da área. Sua produção comercial se dá por destilação fracionada do ar liquefeito, mas o isótopo 85 desse elemento é produto da fissão do urânio.";
    }
    //=========================================//
    else if (infoType === 'info37') {
        title.textContent = "Rubídio";
        message.textContent = "O rubídio, de número atômico 37 e massa atômica de 85,5 u, é um metal alcalino bastante macio, de coloração branca ou prateada. Assim como outros metais alcalinos, esse elemento reage violentamente com a água e o ar. Seu ponto de fusão é de 39 °C, enquanto seu ponto de ebulição é de 688 °C. Foi descoberto em 1861 pelos cientistas alemães Gustav Kirchhoff e Robert Bunsen durante análises do mineral lepidolita com um espectroscópio. Pode ser utilizado na fabricação de fotocélulas, vidros especiais e como propelente em motores iônicos de espaçonaves. O rubídio forma uma grande quantidade de compostos, embora nenhum deles ainda tenha uma aplicação comercial significante.";
    }
    //=========================================//
    else if (infoType === 'info38') {
        title.textContent = "Estrôncio";
        message.textContent = "O estrôncio, símbolo Sr e número atômico 38, é um metal alcalino-terroso, de coloração acinzentada, cujo comportamento químico se assemelha aos demais elementos do grupo 2. Apesar de ser um dos elementos mais presentes na crosta terrestre, são poucos os minérios de estrôncio conhecidos. Em décadas anteriores, havia grande demanda por estrôncio, pois era aplicado em tubos de raios catódicos das clássicas televisões coloridas de tubo. Contudo, a tomada pelos modelos mais modernos de tela plana diminuíram substancialmente a demanda por esse metal. Hoje, seu maior uso está na pirotecnia, por conta da chama vermelha característica produzida quando queimado.";
    }
    //=========================================//
    else if (infoType === 'info39') {
        title.textContent = "Ítrio";
        message.textContent = "A história do elemento Ítrio inicia-se no final do século XVIII, mais precisamente em 1787. Em viagem pela região do condado de Ytterby, próximo a Estocolmo, Karl Arrhenius deparou-se com um mineral de cor escura, bastante incomum e deveras semelhante a outros minerais do elemento tungstênio. Denominando inicialmente o mineral como iterbita, e por conta desta semelhança entre os minerais, Karl Arrhenius decidiu enviar o mineral ao mineralogista finlandês Johan Gadolin, para que este realizasse testes mais concisos e precisos, visando à determinação de suas propriedades básicas e composição. Em 1794, Johan Gadolin anunciou, após a realização de diversos ensaios e testes mineralógicos e químicos, que as amostras enviadas por Arrhenius continham uma nova “terra”. Por se tratar de um óxido metálico que não pôde ser reduzido com os procedimentos normais de aquecimento com carvão, denominou-se este material “terra”. A “terra” em questão apresenta-se como uma mistura contendo aproximadamente 38% de óxido de ítrio (Y2O3) em massa. Gadolin concluiu então que este novo minério possuía um elemento novo, ao qual Anders Gustav Ekeberg denominou ítrio.";
    }
    //=========================================//
    else if (infoType === 'info40') {
        title.textContent = "Zircônio";
        message.textContent = "O zircônio, símbolo Zr, número atômico 40, é um elemento químico pertencente ao grupo 5 da Tabela Periódica. Destaca-se por sua grande resistência à corrosão, além de boa estabilidade térmica. O elemento é quimicamente muito semelhante ao háfnio, e, por conta disso, toda amostra natural de zircônio possui um pequeno teor de háfnio. É abundante na crosta terrestre, com um teor muito maior que o de elementos amplamente usados, como cobre, zinco e chumbo. O zircônio tem grande aplicação na indústria nuclear, pois sua baixa absorção de nêutrons faz dele um excelente revestimento para o combustível, rico em dióxido de urânio. Além disso, por ser considerado atóxico e muito biocompatível, o zircônio é aplicado em próteses e implantes cirúrgicos.";
    }
    //=========================================//
    else if (infoType === 'info41') {
        title.textContent = "Nióbio";
        message.textContent = "O nióbio foi descoberto pelo químico inglês Charles Hatchett em 1801, a partir de estudos do mineral columbita. Ele nomeou o novo elemento encontrado de columbium (Cb). Posteriormente, em 1846, de forma independente, o químico alemão Henrich Rose descobriu o elemento e nomeou-o de nióbio, nome adotado pela comunidade internacional a partir de 1950. O nióbio é um metal brilhante, extraído principalmente do mineral columbita, e considerado de baixa dureza. No decorrer do texto, falaremos um pouco mais sobre suas propriedades químicas e físicas.";
    }
    //=========================================//
    else if (infoType === 'info42') {
        title.textContent = "Molibdênio";
        message.textContent = "O molibdênio ou molibdénio é um elemento químico de símbolo Mo e número atômico 42. O nome é derivado do neolatim Molybdaenum, do grego antigo Μόλυβδος molybdos que significa chumbo, uma vez que seus minérios eram confundidos com os de chumbo. Minerais de molibdênio são conhecidos ao longo da história, mas o elemento só foi descoberto em 1778 por Carl Wilhelm Scheele. O metal foi isolado pela primeira vez em 1781 por Peter Jacob Hjelm. O molibdênio não é encontrado naturalmente como um metal livre na Terra, mas em vários estados de oxidação em minerais.";
    }
    //=========================================//
    else if (infoType === 'info43') {
        title.textContent = "Tecnécio";
        message.textContent = "O tecnécio é um elemento de número atômico 43 pertencente ao grupo 7 da Tabela Periódica. É um metal de transição e foi o primeiro elemento a ser produzido artificialmente na história da humanidade. Até hoje debate-se se o metal pode ser encontrado naturalmente na crosta terrestre. Esse elemento tem grande utilização na medicina nuclear, visto que possui um isótopo capaz de produzir imagens utilizadas para o diagnóstico de tumores em diversos órgãos do corpo humano. Embora sua química não seja tão desenvolvida, o interesse nele se dá por causa da medicina nuclear.";
    }
    //=========================================//
    else if (infoType === 'info44') {
        title.textContent = "Rutênio";
        message.textContent = "O rutênio, número atômico 44, é um metal localizado no grupo 8 da Tabela Periódica. Faz parte do que conhecemos como Metais do Grupo da Platina, junto do ósmio, paládio, irídio, ródio e, claro, a platina. Ele é capaz de possuir diversos estados de oxidação, alcançando inclusive a carga formal de +8, a maior da Tabela Periódica. Por conta de sua nobreza, o rutênio apresenta boas propriedades físico-químicas, como baixa reatividade e ampla resistência à corrosão. Por isso, ele é usado em ligas metálicas para aumentar suas propriedades mecânicas e também melhorar sua proteção anticorrosiva. Além disso, o rutênio e seus compostos vêm sendo empregados em reações químicas modernas e também no desenvolvimento de células solares mais baratas.";
    }
    //=========================================//
    else if (infoType === 'info45') {
        title.textContent = "Ródio";
        message.textContent = "O ródio é um elemento químico de símbolo Rh de número atômico 45 e de massa atômica igual a 102,9 u. À temperatura ambiente, o ródio encontra-se no estado sólido. Está situado no grupo 9 da Classificação Periódica dos Elementos. É um metal de transição, pouco abundante, do grupo da platina. É encontrado normalmente em minas de platina e é empregado como catalisador e em ligas de alta resistência com a platina. Foi descoberto em 1803 por William Hyde Wollaston.";
    }
    //=========================================//
    else if (infoType === 'info46') {
        title.textContent = "Paládio";
        message.textContent = "O paládio (Pd) é o elemento químico de número atômico 46 da Tabela Periódica. É um metal nobre, pertencente aos “metais do grupo da platina” (MGPs), que apresenta coloração branco-prateada, sendo também dúctil e maleável. É pouco reativo e bastante resistente à corrosão e tem a capacidade de absorver gás hidrogênio em até 900 vezes o seu volume. É um metal que pode ser encontrado associado a outros metais nobres, além de cobre e níquel. O paládio pode ser obtido, principalmente, como subproduto das rotas de produção de cobre e de níquel. É um metal cujas propriedades catalítas são amplamente exploradas tanto em veículos automotores quanto em sínteses químicas. Foi descoberto na primeira década do século XIX pelo cientista inglês William Wollaston.";
    }
    //=========================================//
    else if (infoType === 'info47') {
        title.textContent = "Prata";
        message.textContent = "A prata é um metal de transição, com símbolo químico Ag e número atômico 47, localizado no grupo 11 e 5º período da Tabela Periódica. O nome “prata” tem suas raízes etimológicas no latim, em que argentum é a origem do símbolo químico Ag, que significa “brilhar” ou “branco”. Esse termo reflete as características mais notáveis do metal, que são seu brilho intenso e sua cor branca metálica. Os antigos romanos, gregos e egípcios valorizaram a prata, tanto por suas propriedades decorativas quanto utilitárias. Por exemplo, na Roma Antiga, esse metal era amplamente usado para cunhar moedas, produzir utensílios e criar ornamentos.";
    }
    //=========================================//
    else if (infoType === 'info48') {
        title.textContent = "Cádmio";
        message.textContent = "O cádmio, símbolo Cd e número atômico 48, é um metal pertencente ao grupo 12 da Tabela Periódica. É quimicamente semelhante ao zinco e apresenta, quase sempre, o número de oxidação igual a +2. É geralmente encontrado em minerais de zinco (esfalerita), chumbo (galena) e cobre (calcopirita). O cádmio e seus compostos são tóxicos, e ele é considerado um metal pesado. Por isso, pessoas que manipulam esse elemento devem ter cuidado para não desenvolver doenças ou problemas graves de saúde.";
    }
    //=========================================//
    else if (infoType === 'info49') {
        title.textContent = "Índio";
        message.textContent = "O índio é um elemento químico cujo símbolo In tem número atômico 49 e de massa atómica igual a 114,8 u. À temperatura ambiente, o índio encontra-se no estado sólido. É um metal do grupo 13 da classificação periódica dos elementos. É pouco abundante, maleável, facilmente fundível, quimicamente similar ao alumínio e gálio, porém mais parecido com o zinco. A principal fonte de obtenção do índio é a partir das minas de zinco. Usado na fabricação de telas de cristais líquidos e na formação de películas delgadas que servem como lubrificantes. Foi descoberto por Ferdinand Reich e Theodor Richter em 1863 quando estavam buscando tálio em minas de zinco.";
    }
    //=========================================//
    else if (infoType === 'info50') {
        title.textContent = "Estanho";
        message.textContent = "O estanho, de símbolo Sn, é um metal de número atômico 50, pertencente ao Grupo 14 da Tabela Periódica. Esse metal está intimamente ligado à história do desenvolvimento de diversas sociedades, já que, associado ao cobre, forma o bronze, liga metálica bastante explorada durante a chamada Era do Bronze, por volta do ano 3500 a.C. O estanho também é muito utilizado na fabricação de latas para o acondicionamento de alimentos. O estanho é considerado por alguns autores como um metal pesado, e alguns de seus compostos possuem certa toxicidade. Além dos usos já citados, o estanho é empregado na fabricação de folhas de flandres, soldas, outras ligas metálicas, como o peltre, produtos químicos em geral e outras aplicações de menor importância. Usos mais modernos, como fabricação de painéis de celulares, computadores e televisores, sensíveis ao toque, têm ajudado no aumento da demanda por estanho.";
    }
    //=========================================//
    else if (infoType === 'info51') {
        title.textContent = "Antimônio";
        message.textContent = "O antimônio, símbolo Sb e número atômico 51, é um elemento químico pertencente ao Grupo 15 (grupo do nitrogênio) da Tabela Periódica. Apesar de já ter sido considerado um semimetal, é mais adequado classificá-lo como um metal. Em sua forma metálica, o antimônio é prateado, escamoso e bastante quebradiço. Apesar de raro, possui um mineral que o tem como elemento principal, a estibina (ou estibinita), de fórmula Sb2S3. Esse elemento é usado desde a Idade Antiga, quando egípcios e hindus utilizavam a estibina para fazer a maquiagem preta de seus olhos. Contudo, atualmente é mais empregado na confecção de baterias automotivas, em retardantes de chama e na indústria de semicondutores.";
    }
    //=========================================//
    else if (infoType === 'info52') {
        title.textContent = "Telúrio";
        message.textContent = "O telúrio, que é o elemento de número atômico 52 e um ametal do grupo do oxigênio, possui seis elétrons em sua camada de valência. Raro, ele ocupa a 70ª posição de abundância na crosta terrestre, com concentração de aproximadamente 0,001 ppm (parte por milhão). Existe na forma nativa, mas é mais comumente encontrado em minerais, como a calaverita, krennerita, telurita e melonita.";
    }
    //=========================================//
    else if (infoType === 'info53') {
        title.textContent = "Iodo";
        message.textContent = "O iodo (I) é um elemento químico ametal que pertence à serie dos halogênios e está localizado no grupo 17 (antiga família 7A) e 5º período da Tabela Periódica. Ele faz parte de um grupo de elementos essenciais para a saúde humana, desempenhando um papel crucial no funcionamento da glândula tireoide, que regula o metabolismo e diversas funções vitais do corpo. Sua presença na alimentação é indispensável para prevenir doenças como o hipotireoidismo e o bócio. Encontrado principalmente em frutos do mar, algas e no sal iodado, ele tem também importantes aplicações médicas, como antisséptico.";
    }
    //=========================================//
    else if (infoType === 'info54') {
        title.textContent = "Xenônio";
        message.textContent = "O xenônio, número atômico 54, é um gás nobre de baixa ocorrência na atmosfera terrestre. Descoberto quase acidentalmente, foi encontrado pela primeira vez no ano de 1898. Embora os gases nobres sejam reconhecidos por sua inércia química, foi com o xenônio que se iniciou o estudo dos compostos de gases nobres, quando foi percebida a sua reação com o PtF6, em 1962. Ao sofrer descarga elétrica, o xenônio emite um brilho azul característico. Sua obtenção comercial se dá por meio da liquefação fracionada. Por conta de suas características luminosas, o xenônio é principalmente empregado na fabricação de lâmpadas, como bactericidas, estroboscópicas e de veículos automotores.";
    }
    //=========================================//
    else if (infoType === 'info55') {
        title.textContent = "Césio";
        message.textContent = "O césio é um elemento metálico pertencente ao grupo 1 da Tabela Periódica. Possui aparência prateada, é reativo com água e possui uma série de isótopos. Alguns desses isótopos são radioativos e possuem tempo de meia-vida na escala de anos a milhões de anos. A fonte natural de césio é o mineral polucita, encontrado em grande quantidade em uma determinada região do Canadá. O isótopo do césio mais conhecido é o césio-137, o qual foi responsável pelo acidente radioativo ocorrido em Goiânia em 1987. Apesar de ser tóxico aos animais e pessoas, quando manipulado da forma correta, os isótopos radioativos do césio trazem benefícios, podendo ser empregados na área médica, na Física e até mesmo na esterilização de lodos e de alimentos.";
    }
    //=========================================//
    else if (infoType === 'info56') {
        title.textContent = "Bário";
        message.textContent = "O bário é um elemento químico com símbolo Ba, número atômico 56 e massa atômica 137.327, pertencente ao grupo 2 (Família 2A) da tabela periódica, sendo um metal alcalino terroso. O seu nome deriva do grego barys e significa pesado.";
    }
    //=========================================//
    else if (infoType === 'info57') {
        title.textContent = "Lantânio";
        message.textContent = "Lantânio (La) é o elemento químico de número atômico 57 e é um dos lantanídeos da Tabela Periódica, também conhecidos como metais terras raras. É um metal macio (a ponto de ser possível cortá-lo com uma faca), de coloração branca e com brilho metálico. As propriedades químicas do lantânio são semelhantes às dos demais lantanídeos, como a adoção da carga +3 em solução, com a pequena diferença de ser mais reativo. O lantânio é encontrado, basicamente, em três fontes minerais: a monazita, a bastnasita e a xenotima. A China é a principal consumidora de lantânio, que utiliza o elemento para produção de eletrônicos, abastacendo não só o mercado interno, mas externo também. O La não é um elemento tóxico, não sendo essencial para nosso organismo. O metal foi descoberto no século XIX, através dos trabalhos do sueco Carl Gustaf Mosander.";
    }
    //=========================================//
    else if (infoType === 'info58') {
        title.textContent = "Cério";
        message.textContent = "O cério, símbolo Ce e número atômico 58, é um metal pertencente ao grupo dos lantanídeos, também conhecidos como metais terras-raras. Os lantanídeos ocupam o sexto período do grupo 3 da Tabela Periódica e também podem ser chamados de elementos de transição interna. Embora chamado de metal terra-rara, o cério é abundante na crosta terrestre. A indústria de vidros utiliza o cério para vários usos, como em polimento, descoloração e pigmentação. O elemento também possui aplicação no campo dos catalisadores, como no controle da emissão automotiva, tratamento de rejeitos líquidos, craqueamento do petróleo e diversos processos orgânicos.";
    }
    //=========================================//
    else if (infoType === 'info59') {
        title.textContent = "Praseodímio";
        message.textContent = "O praseodímio é um elemento químico de símbolo Pr e número atômico 59 com massa atómica 140,9 u que à temperatura ambiente se encontra no estado sólido. Faz parte do grupo das terras raras, ocorrendo naturalmente nos minerais monazita e bastnasita. Foi isolado em 1885, pelo químico austríaco barão Carl Auer von Welsbach, a partir do didímio.";
    }
    //=========================================//
    else if (infoType === 'info60') {
        title.textContent = "Neodímio";
        message.textContent = "O neodímio é um metal de transição que pertencente à série dos lantanídeos, com símbolo químico “Nd” e número atômico 60. Tem cor prateada, é maleável e pode ser encontrado principalmente em minerais como a monazita e a bastnasita. Descoberto em 1885, ele ficou conhecido pelas suas propriedades magnéticas, sendo utilizado predominantemente na fabricação de ímãs permanentes de alta performance, como os ímãs de neodímio-ferro-boro (NdFeB). Em vista disso, ele passou a ter uma vasta aplicação em motores de veículos elétricos, em turbinas eólicas, em dispositivos de armazenamento de dados, em aparelhos eletrônicos e em lasers, sendo estes últimos empregados na medicina, contribuindo para procedimentos cirúrgicos precisos e para tratamentos terapêuticos. Diante disso, a sustentabilidade e a reciclagem de ímãs de neodímio são áreas de pesquisa que estão cada vez mais em evidência, buscando mitigar os impactos ambientais e promover o uso responsável deste recurso crucial na transição para uma economia mais ecológica.";
    }
    //=========================================//
    else if (infoType === 'info61') {
        title.textContent = "Promécio";
        message.textContent = "O promécio é um elemento químico raro e radioativo, pertencente à série dos lantanídeos, com número atômico 61 e símbolo “Pm”. Descoberto em 1945, não é encontrado naturalmente em grandes quantidades na Terra, sendo geralmente produzido artificialmente em reatores nucleares como subproduto do processamento de urânio. Contudo, apesar de sua escassez natural, ele desempenha um papel significativo em campos que requerem fontes de radiação beta, como em painéis solares, tintas luminescentes e em dispositivos de medição de espessura, contribuindo, dessa forma, para avanços na ciência e na tecnologia.";
    }
    //=========================================//
    else if (infoType === 'info62') {
        title.textContent = "Samário";
        message.textContent = "O samário é um elemento químico pertencente ao grupo dos lantanídeos, também conhecidos como metais terras-raras. O samário apresenta o estado de oxidação +3 clássico dos lantanídeos, mas também apresenta o estado de oxidação +2 estável. Apresenta boa resistência à corrosão, pois sua forma metálica produz uma capa que o protege de processos corrosivos mais profundos. Em sua forma metálica, é obtido via redução com lantânio, em altas temperaturas, em um processo industrial descontínuo com duração de aproximadamente dez horas. O samário é principalmente empregado na produção de ímãs permanentes, na forma da liga samário e cobalto, SmCo. É um ímã que mantém suas propriedades magnéticas em boas temperaturas, com preço acessível e sendo resistente à corrosão. Também é aplicado como hastes de controle de nêutrons em reatores nucleares.";
    }
    //=========================================//
    else if (infoType === 'info63') {
        title.textContent = "Európio";
        message.textContent = "O európio é um elemento químico pertencente à série dos lantanídeos, com símbolo “Eu” e número atômico 63, conhecido por suas propriedades luminescentes, pois emite uma luz vermelha brilhante quando excitado por radiação ultravioleta, o que o torna essencial em tecnologias de iluminação e exibição, como televisores, monitores e LEDs. Descoberto pelo químico francês Demarçay em 1901, esse metal tem um papel significativo na indústria moderna devido à sua capacidade de absorver nêutrons, sendo utilizado em barras de controle de reatores nucleares. Além de suas aplicações tecnológicas, o európio é um elemento reativo, oxidando rapidamente ao ar e reagindo com água para formar hidróxidos. Ademais, é encontrado principalmente em minerais de terras raras, como monazita e bastnaesita, e extraído através de processos complexos de separação e purificação. Em vista disso, apesar de ser relativamente raro, ele é um elemento indispensável em diversos segmentos, contribuindo significativamente para avanços na eletrônica, iluminação e segurança nuclear.";
    }
    //=========================================//
    else if (infoType === 'info64') {
        title.textContent = "Gadolínio";
        message.textContent = "O gadolínio é um elemento químico pertencente à série dos lantanídeos, caracterizado por seu brilho metálico branco-prateado e por se apresentar no estado sólido em temperatura ambiente. Além disso, esse metal é encontrado principalmente em minerais como monazita e bastnasita, dos quais é extraído por meio de processos de separação e refino. Embora seja relativamente estável ao ar seco, ele oxida rapidamente quando exposto à umidade, formando uma camada de óxido que protege o metal subjacente de oxidação adicional, ou seja, pode ser usado como metal de sacrifício.";
    }
    //=========================================//
    else if (infoType === 'info65') {
        title.textContent = "Térbio";
        message.textContent = "O térbio é um metal de transição interna, branco prateado levemente acinzentado, pertencente aos lantanídeos ou terras-raras. È um metal macio, mole e flexível que é facilmente cortado com uma faca afiada. Foi descoberto no ano de 1943 por Monsander, no minério de ítrio juntamente com o érbio cujo, as impurezas restantes da purificação do érbio em 1942, continham o térbio, o metal foi nomeado em homenagem a cidade de Ytterby na Suécia. São conhecidos 21 isótopos de térbio que variam de 145Tb  a 166Tb , somente o isotopo159Tb, é estável para formação do elemento.";
    }
    //=========================================//
    else if (infoType === 'info66') {
        title.textContent = "Disprósio";
        message.textContent = "O disprósio é um metal de transição interna pertencente a família dos lantanídeos, é branco prateado maleável extremamente mole podendo ser facilmente cortado com uma faca pelo simples ato de pressioná-la sobre o metal. O disprósio foi descoberto no ano de 1886 pelo cientista francês Boisbaldran, porém só foi isolado em forma pura em 1950 pela Speeding & Associados, com o desenvolvimento de técnicas metalográficas através da redução e troca iônica. O nome disprósio é originado da palavra grega “dysprositos” que significa difícil de chegar.";
    }
    //=========================================//
    else if (infoType === 'info67') {
        title.textContent = "Hólmio";
        message.textContent = "O hólmio é um elemento de transição interna pertencente ao grupo dos lantanídeos ou terras-raras. É um metal branco prateado brilhante, é relativamente macio, mole e flexível. A descoberta do hólmio iniciou-se através dos químicos suíços Delafontaine e Soret, quando eles observaram espectros diferentes na banda de absorção de outros metais, suspeitando assim tratar-se de um elemento “X”, que se encontrava na amostra que eles estavam analisando em 1978. Não obstante e de maneira independente o cientista sueco Cleve descobriu o metal durante sua pesquisa com a érbia, a comprovação de que realmente tratava-se de um novo elemento veio em 1911 quando Homberg preparou o óxido de hólmio, que é um composto amarelo intenso. O elemento recebeu este nome em homenagem a cidade de Cleve, Hólmia na Suécia, palavra latina de onde também deriva o nome Estocolmo, capital sueca.";
    }
    //=========================================//
    else if (infoType === 'info68') {
        title.textContent = "Érbio";
        message.textContent = "O érbio (Er) é um lantanídeo, pertencente, então, aos metais terras-raras. Como os demais lantanídeos, apresenta semelhanças nas características químicas e físicas, como a coloração prateada e a baixa dureza de sua forma metálica. A reatividade dos lantanídeos também é bem semelhante, embora o érbio, mais pesado, seja menos reativo que os lantanídeos mais leves. O érbio também se estabiliza na forma de um cátion trivalente em solução. O érbio é comercialmente extraído da monazita, bastnasita e xenotima, sendo esta última a que possui maior concentração de érbio. O érbio metálico pode ser obtido via redução com cálcio metálico. Há poucas aplicações para o érbio, porém destaca-se o seu óxido, responsável por prover coloração rosa para vidros e porcelanas. O érbio não é considerado um elemento tóxico e foi descoberto por Carl Gustaf Mosander, baseado nas análises da rocha yttria.";
    }
    //=========================================//
    else if (infoType === 'info69') {
        title.textContent = "Túlio";
        message.textContent = "O túlio, símbolo Tm e número atômico 69, é um dos lantanídeos (conhecidos como metais terras-raras). Dentre os lantanídeos, é um dos mais raros e, por isso, tem alto custo e aplicações limitadas. Na sua forma metálica, apresenta coloração acinzentada e um brilho prateado característico, resistindo bem à corrosão. Em solução, como os demais lantanídeos, o túlio adota o número de oxidação igual a +3. O elemento tem esse nome em referência à região de Thule ou Tile, muito comum em mapas da Idade Média para descrever regiões como a Islândia ou a Escandinávia. Foi descoberto em 1879 por um químico sueco chamado Per Teodor Cleve, que fazia análises e estudos acerca do minério erbia, da cidade sueca de Ytterby. Aplica-se o túlio basicamente na medicina, embora tintas com Tm3+ em sua composição estejam presentes nas cédulas de euro para evitar falsificações.";
    }
    //=========================================//
    else if (infoType === 'info70') {
        title.textContent = "Itérbio";
        message.textContent = "O itérbio, símbolo Yb e número atômico 70, é um lantanídeo (ou metal terra-rara). É um metal de coloração prateada, dúctil e maleável. Diferentemente dos demais lantanídeos, o itérbio pode apresentar, em solução e em compostos, o número de oxidação igual a +2 (enquanto a maioria dos lantanídeos apresenta apenas o NOx igual a +3). O itérbio é um elemento de poucas utilizações, porém pode ser aplicado como melhorador do aço inoxidável, em aparelhos portáteis de raios-X e na composição de relógios atômicos. Sua produção se dá por redução metalotérmica, empregando-se o lantânio como metal redutor. Sua descoberta se deu entre os séculos XVIII e XIX, com base em minérios oriundos da cidade de Ytterby, Suécia, lar de praticamente todos os metais terras-raras. Contudo, seu nome só foi oficializado no começo do século XX, mais precisamente em 1909.";
    }
    //=========================================//
    else if (infoType === 'info71') {
        title.textContent = "Lutécio";
        message.textContent = "O lutécio foi descoberto por um químico chamado Jean-Charles Marignac 1878 em Genève - Suíça, quando o mesmo descobriu um novo elemento o qual deu a nomenclatura de terra iterbia (atualmente chamado de érbia) o qual ele acreditava ser um metal puro. Mais tarde em 1907 um químico francês Georges Urbain conseguiu separar as impurezas da itérbia em dois outros compostos na tentativa de purificá-los para obter as características físicas e químicas do mesmo, mas sem muito sucesso, aos quais deu o nome de neoiterbia e lutércia, respectivamente chamados de itérbio e lutécio atualmente. Até o final do século XX não havia se conseguido obter o metal puro, pois este possui elevada dificuldade de separação do mineral ao qual está presente, a monazita (que contem 0,03% de lutécio presente em sua composição), usando-se atualmente de troca iônica para obter a separação desse metal que é o menos abundante na natureza, este metal possui elevado preço no mercado, mas mesmo assim possui aplicação na indústria do petróleo.";
    }
    //=========================================//
    else if (infoType === 'info72') {
        title.textContent = "Háfnio";
        message.textContent = "O háfnio é um elemento químico de símbolo Hf, de número atômico 72 e de massa atómica igual a 178,5 u. À temperatura ambiente, o háfnio encontra-se no estado sólido. É um metal de transição situado no grupo 4 da classificação periódica dos elementos. Forma ligas com o tungstênio usadas em filamentos de lâmpadas e em eletrodos. Também se usa como material de barras de controle de reatores nucleares devido a sua alta capacidade de absorção de nêutrons.";
    }
    //=========================================//
    else if (infoType === 'info73') {
        title.textContent = "Tântalo";
        message.textContent = "tântalo é um metal com número atômico 73 localizado no grupo 5 da tabela periódica. Possui aparência metálica clássica, mas se destaca pelo elevado ponto de fusão e alta resistência à corrosão. Em razão dessa propriedade, o tântalo é muito utilizado em ligas metálicas. Esse elemento possui importante capacidade de acumulação de carga elétricas, sendo empregado na construção de capacitores, que, por sua vez, compõem diversos tipos de dispositivos eletrônicos. Em razão de sua biocompatibilidade, o tântalo é usado na construção de enxertos e em próteses médicas/odontológicas. Na natureza, o elemento tântalo é encontrado no mineral columbita-tantalita, normalmente em combinação com o nióbio, sendo esses dois elementos muito parecidos quimicamente.";
    }
    //=========================================//
    else if (infoType === 'info74') {
        title.textContent = "Tungstênio";
        message.textContent = "O Tungstênio, conhecido por ser utilizado na fabricação do filamento de lâmpadas incandescentes, é um metal de transição externa muito resistente à corrosão. É sólido, apresenta coloração branco-acizentado e brilhante nas condições ambiente e, é o elemento com o maior ponto de fusão e de ebulição da tabela periódica: respectivamente, 3422°C e 5657°C. Seu símbolo químico é W.";
    }
    //=========================================//
    else if (infoType === 'info75') {
        title.textContent = "Rênio";
        message.textContent = "O elemento rênio raramente é encontrado. Ele difere do manganês por ter uma química de cátions pobre, por seu estado de oxidação elevado ser muito mais estável, e por formar agregados e compostos com ligações metal-metal nos estados de oxidação (+II), (+III) e (+IV). O rênio é um elemento muito raro e ocorre em pequenas quantidades em minérios de sulfeto de molibdênio. É recuperado da poeira resultante da calcinação desses minérios, na forma de Re2O7. Este dissolvido em NaOH, formando uma solução contendo íons perrenato, ReI4–. Esta é concentrada e o rênio é precipitado como perrenato de potássio. Parte da produção mundial é usada na fabricação de ligas Pt-Re. Estas são utilizadas como catalisadores na obtenção de combustíveis com baixo teor ou isento de chumbo. Pequenas quantidades encontram emprego como catalisadores para reações de hidrogenação e desidrogenação. Por causa de seu ponto de fusão muito elevado (3180°C) é usado em pares termoelétricos, espiras de fornos elétricos e filamentos de espectrômetros de massa.";
    }
    //=========================================//
    else if (infoType === 'info76') {
        title.textContent = "Ósmio";
        message.textContent = "O ósmio, número atômico 76, é um metal de coloração branco-azulada pertencente ao grupo 8 da Tabela Periódica. É também considerado um Metal do Grupo da Platina (MGP), junto da própria platina, além de paládio, rutênio, irídio e ródio. Dentre os metais, o ósmio é o que apresenta a maior densidade. Suas propriedades químicas são semelhantes ao do rutênio, outro elemento do grupo 8 e também um MGP. O ósmio é o elemento estável mais raro da crosta terrestre e, por conta disso, a sua produção e seus usos são bem limitados. Mesmo assim, o ósmio pode ser utilizado como melhorador de ligas metálicas, bem como na produção de pontas de canetas-tinteiro. O OsO4, tetróxido de ósmio, possui ampla utilização como contraste em microscópios, na detecção de digitais e como catalisador.";
    }
    //=========================================//
    else if (infoType === 'info77') {
        title.textContent = "Irídio";
        message.textContent = "O irídio é um metal pertencente ao grupo 9 da Tabela Periódica. Apesar disso, é mais comumente associado aos chamados metais do grupo da platina, que envolvem, além do próprio, os metais platina, ósmio, rutênio, ródio e paládio. O irídio é muito conhecido por sua grande resistência à corrosão, alta densidade e pouca presença na crosta terrestre. É um metal que tem adquirido valorização bastante nos últimos anos, sendo mais caro que o ouro, inclusive. Seu alto ponto de fusão e sua boa resistência à corrosão o coloca como importante agente na fabricação de ligas, bem como em componentes de motores de aeronaves. Foi descoberto em 1803 por Smithson Tennant, junto com o ósmio.";
    }
    //=========================================//
    else if (infoType === 'info78') {
        title.textContent = "Platina";
        message.textContent = "A platina é um elemento químico de símbolo Pt de número atômico 78, e de massa atômica igual a 195,08 u. Ele é um elemento químico denso, maleável, dúctil, tem pouca reatividade, precioso, tem coloração prata branqueada e é um metal de transição. Seu nome deriva do termo espanhol platina, do qual sua tradução literal é pequena prata.";
    }
    //=========================================//
    else if (infoType === 'info79') {
        title.textContent = "Ouro";
        message.textContent = "O ouro é um elemento químico com o símbolo Au e número atômico 79. É um metal brilhante, levemente amarelo-alaranjado, denso, macio, maleável e dúctil na sua forma pura. Quimicamente, o ouro é um metal de transição e um elemento do grupo 11 da tabela periódica, e de massa atómica 197 u. É um dos elementos químicos menos reativos e é sólido em condições padrão. Na natureza, o ouro é produzido a partir da colisão de duas estrelas de nêutrons. O ouro é utilizado de forma generalizada em joalharia, indústria e eletrônica, bem como reserva de valor.";
    }
    //=========================================//
    else if (infoType === 'info80') {
        title.textContent = "Mercúrio";
        message.textContent = "Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. O periélio da órbita de Mercúrio apresenta uma precessão de 5 600 segundos de arco por século, um fenômeno completamente explicado apenas a partir do século XX pela Teoria da Relatividade Geral formulada por Albert Einstein. A sua aparência é brilhante quando observado da Terra, tendo uma magnitude aparente que varia de −2,6 a 5,7, embora não seja facilmente observado pois sua separação angular do Sol é de apenas 28,3º.";
    }
    //=========================================//
    else if (infoType === 'info81') {
        title.textContent = "Tálio";
        message.textContent = "O tálio (símbolo químico Tl, número atômico 81) é um metal macio e maleável. Quando recém cortado, parece com estanho, mas fica cinza quando exposto ao ar. Este elemento e seus compostos são altamente tóxicos e precisam ser manuseados com extremo cuidado. Ele tem sido usado em vários assassinatos, ganhando o apelido de “pó de herança”, juntamente com arsênico.";
    }
    //=========================================//
    else if (infoType === 'info82') {
        title.textContent = "Chumbo";
        message.textContent = "O chumbo é um elemento químico de número atômico 82, massa atômica 207,2 e pertencente ao grupo 14 da tabela periódica. Ele caracteriza-se por ser um metal pesado, tóxico e maleável. Em temperatura ambiente, é encontrado no estado sólido, com coloração branco-azulada e que em contato com ar torna-se acinzentado. É ainda mau condutor de eletricidade e bastante resistente à corrosão. O chumbo em sua forma elementar raramente é encontrado na natureza. Assim, é mais comum encontrá-lo em minerais como galena, anglesita e cerusita.";
    }
    //=========================================//
    else if (infoType === 'info83') {
        title.textContent = "Bismuto";
        message.textContent = "O bismuto é um metal pertencente ao grupo 15 da Tabela Periódica que possui símbolo Bi e número atômico 83. Tem uma coloração branca prateada, com uma coloração rosa em sua superfície. É um metal quebradiço, e, apesar de ser um metal pesado, não é nem um pouco tóxico. O bismuto é empregado em ligas metálicas, assim como na indústria de cosméticos e em medicamentos. É muito conhecido pela sua propriedade diamagnética e é um dos poucos materiais que se expandem ao solidificar-se (tal qual a água). É encontrado na forma de sulfetos ou óxidos mas também na forma de cristais elementares, que formam pequenas camadas de óxidos na superfície e refletem tonalidades furta-cor.";
    }
    //=========================================//
    else if (infoType === 'info84') {
        title.textContent = "Polônio";
        message.textContent = "O polônio é um elemento químico da tabela periódica, que pode ser localizado através da sigla “Po”. Esse elemento foi pouco notado até a invenção da bomba atômica. Ele é, portanto, o gatilho necessário para que haja explosão. Um fato interessante sobre o polônio é que o mesmo foi descoberto por um casal polonês. Marie Sklodowska Curie e PierreCurie notaram a presença radioativa do elemento no urânio. Sendo assim, houve a identificação do mais novo material de curta meia-vida para a história da ciência.";
    }
    //=========================================//
    else if (infoType === 'info85') {
        title.textContent = "Ástato";
        message.textContent = "O astato é um elemento químico de símbolo “At” e número atômico 85 que pertence ao grupo dos halogênios, localizado no grupo 17 e quinto período da tabela periódica, com uma ocorrência na crosta terrestre estimada em menos de um grama. Embora possua algumas características de metais, ele é quimicamente um ametal com capacidade de formar ligações covalentes. Além disso, devido à sua radioatividade e difícil obtenção, sua química é teórica e baseada principalmente em modelagens, já que a quantidade disponível para experimentos é muito pequena e a maioria dos seus isótopos tem uma vida útil muito curta.";
    }
    //=========================================//
    else if (infoType === 'info86') {
        title.textContent = "Radônio";
        message.textContent = "O radônio, de número atômico 86, é um gás nobre pertencente ao sexto período da Tabela Periódica. Com uma densidade nove vezes maior que a do ar, trata-se do gás mais denso de que se tem conhecimento. Mais de 30 isótopos do Rn são conhecidos, sendo o isótopo 222 o mais estável, com tempo de meia-vida de 3,8 dias. O radônio é utilizado em alguns tratamentos de câncer, porém o que chama atenção é seu grande risco. Quando inalado, a sua desintegração radioativa pode causar sérios danos aos pulmões, e, além disso, os elementos gerados em sua desintegração são extremamente tóxicos. O radônio foi intitulado inicialmente como um mero isótopo, mas depois teve seu status elevado para elemento.";
    }
    //=========================================//
    else if (infoType === 'info87') {
        title.textContent = "Frâncio";
        message.textContent = "O frâncio, símbolo Fr, número atômico 87, é um elemento pertencente ao Grupo 1 da Tabela Periódica, os metais alcalinos. Contudo, diferentemente dos demais elementos do grupo, o frâncio não apresenta isótopos estáveis, o que, inclusive, dificultou a sua descoberta. Aliás, o frâncio foi o último elemento a ser descoberto e isolado em amostras naturais. Sua grande instabilidade atômica não permite obter amostras visíveis e pesáveis, sendo assim, suas propriedades físico-químicas são extrapoladas a partir dos dados dos demais metais alcalinos. Estima-se que só haja 30 gramas de frâncio na crosta terrestre, o que faz dele o segundo elemento mais raro do planeta, atrás apenas do ástato.";
    }
    //=========================================//
    else if (infoType === 'info88') {
        title.textContent = "Rádio";
        message.textContent = "O rádio, símbolo Ra, número atômico 88, é o mais pesado dos metais alcalinoterrosos conhecidos até então. Ele é muito radioativo e, por isso, bastante perigoso. O rádio aparece em minérios de tório e urânio, pois é formado durante a desintegração radioativa desses elementos. Seu isótopo mais estável é o 226, com 1599 anos de meia-vida. O rádio foi descoberto pelo célebre casal Pierre e Marie Curie, no começo do século XX. Os estudos acerca desse elemento impulsionaram o campo da radioatividade, fazendo com que Pierre ganhasse um prêmio Nobel em 1903 e Marie ganhasse dois prêmios Nobel, em 1903 e em 1911. Atualmente, o rádio é utilizado na medicina para o tratamento de alguns tipos de câncer e também na obtenção da liga metálica berílio-rádio.";
    }
    //=========================================//
    else if (infoType === 'info89') {
        title.textContent = "Actínio";
        message.textContent = "O actínio é um elemento químico de símbolo Ac, de número atômico 89 com massa atómica 227,0 u. À temperatura ambiente, o actínio encontra-se no estado sólido. É uma das terras raras e dá nome a um grupo de metais de transição interna denominados actinídeos. Pertence ao grupo 3 da classificação periódica dos elementos. Foi descoberto em 1899 pelo francês André-Louis Debierne. Tem como principais aplicações em radioterapia e como fonte de nêutrons.";
    }
    //=========================================//
    else if (infoType === 'info90') {
        title.textContent = "Tório";
        message.textContent = "O tório, símbolo Th e número atômico 90, é um actinídeo. É um elemento com cerca de 30 isótopos ao todo, sendo seis deles encontrados na natureza. Apresenta o estado de oxidação +4 e forma compostos com boa parte dos ametais da Tabela Periódica. Apresenta abundância comparável à do chumbo na crosta terrestre e pode ser comercialmente extraído de alguns minerais, como a monazita. O tório é produzido quase sempre como subproduto da obtenção de outros metais e se destaca por sua boa resistência térmica, o que o habilita para espaçonaves e mísseis. O óxido de tório, ThO2, é o de maior ponto de fusão, além de ter um alto índice de refração. O tório também vem sendo estudado como combustível para usinas nucleares, cuja aplicação apresenta vantagens sobre o urânio convencionalmente usado.";
    }
    //=========================================//
    else if (infoType === 'info91') {
        title.textContent = "Protactínio";
        message.textContent = "O protactínio é um elemento químico do grupo 3 (metais de transição) que pertence ao sétimo período da tabela periódica.É um produto da fissão do tório, plutônio e urânio. O protactínio é um actinídeo e é o mais raro dos elementos de ocorrência natural. Apresenta-se metálico prateado, com lustre metálico brilhante que se conserva no ar por poucas horas. Quando exposto a temperaturas abaixo de 1,4 K, transforma-se em um supercondutor. Atualmente, por causa de sua escassez, alta radioatividade e toxicidade, não há nenhum uso para o protactínio fora do âmbito da pesquisa científica básica.";
    }
    //=========================================//
    else if (infoType === 'info92') {
        title.textContent = "Urânio";
        message.textContent = "O urânio é um elemento químico de símbolo U e de massa atômica igual a 238 u, apresenta número atômico 92, é um elemento natural e comum, muito mais abundante que a prata, abundância comparável à do molibdênio e arsênio, porém, quatro vezes menos abundante que o tório.";
    }
    //=========================================//
    else if (infoType === 'info93') {
        title.textContent = "Netúnio";
        message.textContent = "O neptúnio é um metal de aspecto prateado, razoavelmente reativo. Tem a posição de quarto elemento da família dos actinídeos. Sua massa atômica é 237.0482 u. À temperatura ambiente, o neptúnio encontra-se no estado sólido. Seu isótopo mais estável, Np-237, é um subproduto de reatores nucleares e produção de plutônio, que por sua vez possui aplicabilidade na composição de equipamentos para a detecção de nêutrons e como combustível nuclear.";
    }
    //=========================================//
    else if (infoType === 'info94') {
        title.textContent = "Plutônio";
        message.textContent = "O plutônio é um metal de transição interna pertencente ao grupo dos actinídeos, seu número atômico é 94, e sua massa atômica é de 244 u, seu símbolo é Pu, é um elemento transurânico. Radioativo uma porção do metal é capaz de levar água a ebulição em virtude da energia durante decaimento de radiação alfa, é um metal prateado que em contato com o ar obseva-se a formação de uma película amarela de óxido de plutônio, além de óxidos forma outros compostos com o nitrogênio, carbono e silício. Foi sintetizado por Seaborg, Edwin, Joseph Kennedy e Arthur Wahl, no ano de 1940, através do bombardeio nuclear do urânio com o deutério. Porém logo depois foi encontrado, em resíduos da purificação de urânio e em quantidades mínimas nos seus minérios. Seu nome foi dado em alusão ao planeta Plutão, assim como outros metais.";
    }
    //=========================================//
    else if (infoType === 'info95') {
        title.textContent = "Amerício";
        message.textContent = "O amerício, símbolo Am, é um metal pertencente ao grupo dos actinídeos, localizado no sétimo período da Tabela Periódica. É um elemento sintético, isto é, só pode ser produzido em laboratório, não tendo sido encontrado na natureza até então. Apesar de ser um elemento radioativo, é muito utilizado em detectores de fumaça. Esse elemento apresenta diversas cargas possíveis nos compostos que forma, contudo, a carga +3 é a mais comum. Sua produção se dá por irradiação de isótopos de plutônio com nêutrons, enquanto a forma metálica pode ser obtida via reações de oxirredução ou decomposição térmica. Foi descoberto, na década de 1940, pelos cientistas Glenn Seaborg, Albert Ghiorso, Ralph James e Leon Morgan.";
    }
    //=========================================//
    else if (infoType === 'info96') {
        title.textContent = "Cúrio";
        message.textContent = "O cúrio é um elemento químico de símbolo Cm, de número atômico 96 com massa atômica 247 u. É um elemento metálico, sintético, transurânico, do grupo dos actinídeos. Foi descoberto em 1944 por uma equipe de estadunidenses composta por Glenn Seaborg, Ralph James, e Albert Ghiorso, produzido pelo bombardeamento do plutônio com partículas alfa. O cúrio-242 e o cúrio-244 podem ser utilizados como fontes de energia portátil, em marcapassos e instrumentos de localização remotos. O cúrio é um metal prateado-branco com o ponto de fusão de 1340 °C e uma densidade de 13,5 g por centímetro cúbico. O cúrio é um tanto semelhante ao elemento terra rara gadolínio, porém com uma estrutura cristalina mais complexa. Quimicamente reativo, é um metal de aspecto branco-prateado, maleável e, devido a sua elevada radioatividade, brilha no escuro.";
    }
    //=========================================//
    else if (infoType === 'info97') {
        title.textContent = "Berquélio";
        message.textContent = "O berquélio foi descoberto em 1949, na Universidade da Califórnia, em Berkeley, cidade que foi homenageada no nome do elemento. Os responsáveis pela primeira sintetização do berquélio foram os cientistas Seaborg, Ghiorso e Thompson, que o produziram em ciclotron a partir do bombardeio de miligramas de Am-241 com partículas alfa. O isótopo Bk-249 possui meia-vida de 314 dias, o que possibilitou que ele fosse isolado em quantidades ponderáveis. Somente em 1962 foi sintetizado pela primeira vez um composto visível de berquélio, o BkCl3. Desde então, compostos de berquélio com outros elementos foram produzidos, mas nunca se conseguiu isolar o elemento em sua forma elementar. Pelo que já foi possível analisar, acredita-se que o berquélio tenha aspecto prateado metálico, seja facilmente oxidável quando exposto ao ar e a temperaturas elevadas e seja solúvel em ácidos minerais diluídos.";
    }
    //=========================================//
    else if (infoType === 'info98') {
        title.textContent = "Califórnio";
        message.textContent = "O califórnio é um elemento químico de símbolo Cf, número atômico 98 e de massa atómica igual a u. É um elemento metálico, sintético, transurânico, sólido, provavelmente de aspecto prateado, encontrado no grupo dos actinídeos da tabela periódica dos elementos. Foi descoberto em 1950 por uma equipe de pesquisadores estadunidense na Universidade da Califórnia, Berkeley, bombardeando o elemento cúrio com partículas alfa. O seu principal uso é como fonte de nêutrons para a análise do solo terrestre ou de outros planetas através de sondas espaciais. É o metal mais caro que pode ser comprado, custando aproximadamente US$ 27 milhões o grama e só pode ser comprado por uma organização internacional. O califórnio-252 é um forte emissor de nêutrons, por isso, extremamente radioativo e prejudicial. O decaimento do califórnio-254 pode ter sido detectado através de telescópios em resíduos de supernovas.";
    }
    //=========================================//
    else if (infoType === 'info99') {
        title.textContent = "Einstênio";
        message.textContent = "O einstênio é um elemento químico sintético que não ocorre naturalmente na Terra e é pertencente à série dos actinídeos. Dessa forma, suas características físicas e químicas são conhecidas principalmente por meio de experimentos e cálculos teóricos, uma vez que ele é produzido em quantidades muito pequenas. Desse modo, sua presença é extremamente rara e se dá exclusivamente em condições controladas e artificiais como resultado de experimentos científicos em reatores nucleares ou aceleradores de partículas, onde elementos mais pesados, como cúrio ou plutônio, são irradiados com nêutrons para capturar partículas e formar novos núcleos. O einstênio é representado pelo símbolo Es e tem número atômico 99.";
    }
    //=========================================//
    else if (infoType === 'info100') {
        title.textContent = "Férmio";
        message.textContent = "O férmio é um elemento químico sintético transurânico, de símbolo Fm e número atômico 100, pertencente à série dos actinídeos, altamente radioativo e não ocorre naturalmente na crosta terrestre. Em solução aquosa, ele forma complexos com diversos ligantes e, como outros elementos pesados, pode ser tóxico. Nesse contexto, a eletronegatividade dele é relativamente baixa, com um valor de 1,3 na escala de Pauling, indicando uma moderada tendência em atrair elétrons. Ademais, devido à sua radioatividade, ele é utilizado principalmente para fins de pesquisa científica, não possuindo aplicações práticas comerciais.";
    }
    //=========================================//
    else if (infoType === 'info101') {
        title.textContent = "Mendelévio";
        message.textContent = "O mendelévio, símbolo Md e número atômico 101, é um elemento químico pertencente ao grupo dos actinídeos. Possui 17 isótopos conhecidos, sendo o de maior meia-vida com 51 dias. Em solução e em compostos, o Md apresenta os números de oxidação +3 e +2. Por conta da baixa meia-vida, não se encontra o elemento 101 na natureza, sendo necessário que sua produção seja feita em laboratório por meio de reações de fusão nuclear. O mendelévio foi descoberto, em 1955, pelos cientistas liderados por Albert Ghiorso e Gleen Seaborg, dos laboratórios da Universidade da Califórnia, em Berkeley, nos Estados Unidos. Sua síntese inicial ocorreu por meio do bombardeamento de partículas alfa em núcleos de einstênio.";
    }
    //=========================================//
    else if (infoType === 'info102') {
        title.textContent = "Nobélio";
        message.textContent = "Nobélio é um elemento químico da Tabela Periódica, símbolo No, número atômico 102, de massa atómica 259 u. É metálico, radioativo, transurânico, do grupo dos actinídeos. É sintetizado bombardeando o cúrio-248 ou califórnio-249 com íons carbono. Foi identificado pela primeira vez por uma equipe liderada por Albert Ghiorso e Glenn T. Seaborg em 1958.";
    }
    //=========================================//
    else if (infoType === 'info103') {
        title.textContent = "Laurêncio";
        message.textContent = "O Laurêncio é um elemento químico de símbolo “Lr” encontrado no grupo 3 da Tabela Periódica e é o último elemento na família dos actinídeos. Tem este nome em homenagem a Ernest Lawrence um cientista nuclear americano inventor de um acelerador de partículas e ganhador de um prêmio Nobel por esse feito. Ele é sintético, provavelmente metálico, radioativo, considerado um metal pesado altamente tóxico e transurânico como a maioria dos elementos químicos deste grupo ou família. Os actinídeos estão localizados no período sete da Tabela Periódica e são chamados de elementos de transição interna juntamente com os Lantanídeos.";
    }
    //=========================================//
    else if (infoType === 'info104') {
        title.textContent = "Rutherfórdio";
        message.textContent = "O rutherfórdio tem símbolo químico 'Rf' com número atômico 104. Este elemento é altamente radioativo, com a maioria dos seus isótopos com meias-vidas abaixo de 70 segundos. Consequentemente, este elemento não apresenta qualquer aplicação conhecida e pouco se conhece sobre ele. O elemento é o primeiro transactinídeo e se prevê que apresente propriedades químicas semelhantes ao elemento háfnio.";
    }
    //=========================================//
    else if (infoType === 'info105') {
        title.textContent = "Dúbnio";
        message.textContent = "O Dúbnio é sólido à temperatura ambiente, é considerado um metal do bloco “d” ou metal de transição aos quais são atribuídos altos pontos de fusão, ebulição, elevada dureza e boa condutividade elétrica e térmica. Este elemento é obtido a partir do bombardeamento de núcleos de Chumbo e Bismuto. A primeira vez que foi obtido ocorreu através do processo de uma reação nuclear com um isótopo de Califórnio com Nitrogênio. É um elemento químico artificial, de difícil obtenção e que não possui aplicações fora da pesquisa que inclusive também é escassa.";
    }
    //=========================================//
    else if (infoType === 'info106') {
        title.textContent = "Seabórgio";
        message.textContent = "O seabórgio, símbolo Sg e número atômico 106, é um elemento químico sintético localizado no grupo 6 da Tabela Periódica. Sua descoberta data de 1974, sendo creditada ao grupo americano liderado por Albert Ghiorso e que tinha a contribuição de Glenn Seaborg, cujo nome originou o termo seabórgio. Assim como muitos elementos dessa região da Tabela Periódica, o seabórgio só teve seu nome oficializado em 1997, por conta de disputas e negociações entre grupos de cientistas. Embora existam pesquisadores empenhados em estudá-lo, o seabórgio tem pouca utilidade em termos práticos. Isso se dá por causa das dificuldades de síntese de isótopos desse elemento, bem como a baixa estabilidade destes. O isótopo mais estável do seabórgio, por exemplo, tem tempo de meia-vida de aproximadamente cinco minutos.";
    }
    //=========================================//
    else if (infoType === 'info107') {
        title.textContent = "Bóhrio";
        message.textContent = "O bóhrio ou Eka-Rênio é um elemento químico sintético, símbolo Bh, número atômico 107 que apresenta massa atómica u. É um elemento de transição, pertencente ao grupo 7 da tabela periódica, radioativo, transurânico, provavelmente metálico, sólido, de aspecto prateado, cujo isótopo mais estável, Bh-262, apresenta meia-vida de 102 minutos.";
    }
    //=========================================//
    else if (infoType === 'info108') {
        title.textContent = "Hássio";
        message.textContent = "Hássio é um elemento artificial e radioativo, seu decaimento em partículas alfa é extremamente rápido, sendo em questões de segundos,  impossibilitando assim que se colete dados muito precisos sobre o mesmo. Possui numero atômico 108, massa atômica de 269 e símbolo químico Hs, com estado físico sólido, sendo um metal de transição externa, pertencente ao grupo oito da tabela periódica. Como o mesmo não possui amostra física devido ao seu decaimento acelerado, suspeita-se que seja de cor prateada e metálico, e semelhante ao ósmio.";
    }
    //=========================================//
    else if (infoType === 'info109') {
        title.textContent = "Meitnério";
        message.textContent = "O meitnério é um elemento químico na tabela periódica com o símbolo Mt e número atômico 109 cuja massa atómica é de u. É um elemento sintético cujo isótopo mais estável é o Mt-266 com uma meia-vida de 3.4 milissegundos. É um metal de transição do grupo 9 da Classificação Periódica dos Elementos, provavelmente sólido em temperatura ambiente. Não é encontrado na crosta terrestre e sua única forma de obtenção é sintética, por meio de reações de fusão nuclear.";
    }
    //=========================================//
    else if (infoType === 'info110') {
        title.textContent = "Darmstádtio";
        message.textContent = "O Darmstádtio é um elemento químico sintético e razoavelmente novo, pois foi descoberto em 1994 por um grupo de cientistas na Alemanha. Seu nome foi dado devido à cidade em que foi produzido e descoberto pela primeira vez, chamada Darmstadt. Possui número atômico (Z) 110 e número de massa (A) 281. Possui símbolo químico “Ds” e é um elemento artificial, transurânico, sólido a temperatura ambiente, e possui pontos de fusão e ebulição desconhecidos. Este elemento químico é encontrado na Tabela Periódica no grupo 10 e no período 7 do bloco “d” dos metais de transição. Sua configuração eletrônica é a seguinte: [Rn] 5f146d97s1";
    }
    //=========================================//
    else if (infoType === 'info111') {
        title.textContent = "Roentgênio";
        message.textContent = "O roentgênio (Rg) é um elemento químico sintético de número atômico 111 e massa atômica 282, localizado no grupo 11 e sétimo período da tabela periódica. Pertence ao grupo dos metais de transição e, devido à sua instabilidade, muitas de suas propriedades físicas permanecem pouco conhecidas. Prevê-se, entretanto, que, como um metal de transição pesado, ele teria um alto ponto de fusão e uma densidade significativa, embora esses valores ainda não tenham sido medidos diretamente. Ademais, ele se desintegra rapidamente em outros elementos, o que torna sua detecção e estudo um desafio, sendo difícil observar seu estado físico e outras propriedades sob condições normais.";
    }
    //=========================================//
    else if (infoType === 'info112') {
        title.textContent = "Copemício";
        message.textContent = "O copernício (Cn) é um elemento químico de número atômico 112. É um elemento superpesado e radioativo, localizado no sétimo período da Tabela Periódica, no grupo 12. Suas características químicas são pouco conhecidas, mas suspeita-se de que seu comportamento se aproxime mais dos gases nobres do que dos demais elementos de seu grupo. O copernício pode ser sintetizado via reações de fusão em aceleradores de partículas. Sua sintetização necessita de grande energia e tem uma baixíssima taxa de produção: cerca de um átomo por semana. Seu nome faz alusão ao famoso astrônomo Nicolau Copérnico.";
    }
    //=========================================//
    else if (infoType === 'info113') {
        title.textContent = "Nihônio";
        message.textContent = "O nihônio, número atômico 113 e símbolo Nh, é um elemento químico pertencente ao grupo 13 da Tabela Periódica. Além disso, é um elemento superpesado não encontrado na natureza. Dessa forma, sua obtenção só pode ser feita de forma artificial, por meio de reações de fusão nuclear. As características químicas do nihônio ainda não são tão claras, mas especula-se que apresente comportamento semelhante ao seu homólogo mais leve, o tálio, em alguns casos. O nihônio foi inicialmente obtido pela fusão do 70Zn com o 209Bi, no instituto Riken, Japão, no ano de 2003. Apesar de cientistas russos e norte-americanos também terem pedido para serem reconhecidos como descobridores do elemento 113, a Iupac reconheceu os cientistas japoneses. O nome faz referência à palavra Nihon, como os japoneses chamam o seu país natal.";
    }
    //=========================================//
    else if (infoType === 'info114') {
        title.textContent = "Fleróvio";
        message.textContent = "O fleróvio é um elemento químico sintético com símbolo “Fl” e número atômico 114, altamente radioativo, pertencente à categoria dos metais pós-transição do grupo 14 e ao sétimo período da Tabela Periódica. Nesse sentido, ele não ocorre naturalmente na crosta terrestre, sendo, portanto, produzido em aceleradores de partículas por meio da fusão de núcleos de cálcio e de plutônio. Além disso, cabe ressaltar que ele é um dos últimos elementos que foram descobertos e que pouco se sabe sobre suas propriedades e sobre suas características devido às dificuldades ainda enfrentadas pelos cientistas em relação à sua instabilidade e aos seus meios de obtenção.";
    }
    //=========================================//
    else if (infoType === 'info115') {
        title.textContent = "Moscóvio";
        message.textContent = "O moscóvio, número atômico 115, localizado no grupo 15 da Tabela Periódica, é um dos últimos elementos incluídos nela, em 2015, junto aos elementos 113, 117 e 118. Seu nome é uma referência à região de Moscou, capital russa. O moscóvio, contudo, foi produzido inicialmente, em 2003, por meio do trabalho conjunto de cientistas russos e norte-americanos. Mesmo assim, quase 20 anos após sua síntese inicial, suas propriedades básicas ainda estão sendo determinadas. Desse modo, muito se especula e pouco se sabe sobre as suas propriedades.";
    }
    //=========================================//
    else if (infoType === 'info116') {
        title.textContent = "Livermório";
        message.textContent = "O livermório é um elemento químico sintético, símbolo Lv, número atômico 116, com provável massa atómica de u, pertencente ao grupo 16 da tabela periódica. O nome foi adotado pela IUPAC em 31 de maio de 2012. Antes disso era conhecido pelo nome sistemático Unun-héxio. É um elemento transurânico, radioativo, superpesado, provavelmente metálico, sólido e com aspecto prateado. A descoberta foi relatada por cientistas norte-americanos em 1999 e russos em 2001. Em 1999, pesquisadores do Laboratório Nacional de Lawrence Livermore anunciaram o descobrimento do elemento 116, em um artigo publicado na revista norte-americana Physical Review Letters, explicando o decaimento α de um átomo de maior número atômico. No ano seguinte, publicaram uma retratação depois de não conseguirem obter novamente o elemento em laboratório. Em junho de 2002, o diretor do laboratório anunciou que os dados experimentais foram distorcidos pelo autor Victor Ninov.";
    }
    //=========================================//
    else if (infoType === 'info117') {
        title.textContent = "Tenesso";
        message.textContent = "O tenesso (ou tennesso), símbolo Ts, é o elemento de número atômico 117 da Tabela Periódica. Sua descoberta foi muito recente, ocorrida em 2009, com sua inclusão na Tabela Periódica apenas no fim de 2015. Não é encontrado na natureza na forma de nenhum isótopo e, por isso, deve ser produzido em laboratório, sendo portanto um elemento químico sintético. As propriedades do tenesso ainda estão sendo estudadas por meio da química teórica e dos cálculos matemáticos, tendo em vista sua baixa taxa de produção. Sua produção se dá pela reação entre o 48Ca e o 249Bk, sendo possível produzir o isótopo 294 ou 293 do elemento. O nome faz referência ao estado norte-americano do Tennessee, local de origem de alguns cientistas envolvidos na descoberta e também da produção do isótopo 249Bk, tão importante para a síntese desse novo elemento.";
    }
    //=========================================//
    else if (infoType === 'info118') {
        title.textContent = "Oganessônio";
        message.textContent = "O oganessônio, símbolo Og, número atômico 118, é o elemento químico de maior número atômico existente na Tabela Periódica até agora. Não pode ser encontrado na natureza, e sua produção é artificial, sendo então considerado um elemento sintético. Mesmo assim, sua produção é muito difícil, e ele é considerado um elemento muito raro, tendo sido sintetizado pouquíssimas vezes. Apesar de estar no mesmo grupo dos gases nobres, o oganessônio não apresenta muitas características que remetam a esses elementos, conforme os cálculos matemáticos demonstram, por consequência dos efeitos relativísticos que os elementos superpesados sofrem. O elemento 118 foi sintetizado pela primeira vez em 2002, por meio da reação de íons 48Ca com átomos de 249Cf. Seu nome é uma homenagem ao cientista russo Yuri Oganessian, um dos mais respeitados e reconhecidos na área de elementos superpesados.";
    }







    //=========================================//
    else if (infoType === 'info') {
        title.textContent = "";
        message.textContent = "";
    }
    //onclick="openPopup('info')" class="popup-cell"

    popup.style.display = "block";
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}