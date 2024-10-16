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











    popup.style.display = "block";
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}