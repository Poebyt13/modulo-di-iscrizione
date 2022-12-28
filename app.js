

var buttone = document.querySelector(".form-button");
var inputFormulario = document.querySelectorAll(".formulario__input");
var fraseError = document.querySelectorAll(".error");
var iconError = document.querySelectorAll(".icon-error");
var risposta = document.querySelector(".risposta");
var a = document.querySelector(".firstA");

var giusto = [["firstName",false],["lastName",false],["email",false],["password",false]];
var quantita = 0;

/*CANCELLO IL RISULTATO*//*
for (let i = 0; i < inputFormulario.length; i++) {
    inputFormulario[i].addEventListener("keydown",()=>{
        a.removeAttribute("href");
        console.log("kozomak");
    })
    
}
*/

//BUTTONE ERRORE OPPURE TUTTO BENE

buttone.addEventListener("click",()=>{
    for (let i = 0; i < inputFormulario.length; i++) {
        let valor = inputFormulario[i].value;
        //STRINGHE MINORE DI 0 O UGUALE A 0 NON SONO ACCETTATE
        if (valor.length <= 0) {
            a.removeAttribute("href");
            if (i == 0) {
                giusto[0][1] = false;
                erroreCompilazione(i);
            } else if (i == 1) {
                giusto[1][1] = false;
                erroreCompilazione(i);
            } else if (i == 2) {
                giusto[2][1] = false;
                erroreCompilazione(i)
            } else if (i == 3) {
                giusto[3][1] = false;
                erroreCompilazione(i);
            }

        } else if (valor.length >= 1) {
            if (i == 0) {
                giusto[0][1] = true;
            } else if (i == 1) {
                giusto[1][1] = true;
            } else if (i == 3) {
                giusto[3][1] = true;
            } 
        }

        //VALIDARE EMAIL

        if (i == 2) {
            let validareChiocciola = valor.includes("@");
            let validarePunto = valor.includes(".");

            if (validareChiocciola == false || validarePunto == false) {
                erroreCompilazione(2);
            } else if (validareChiocciola == true && validarePunto == true) {
                giusto[2][1] = true;
            }
        }

            
        //MOSTRO IL RISULTATO
        for (let i = 0; i < giusto.length; i++) {
            
            if (giusto[i][1] == true) {
                quantita++;
                console.log(quantita);

                if (quantita == 4) {
                    a.setAttribute("href","#risposta");
                    risposta.style.bottom = "auto";
                    risposta.style.top = "2rem";
                    
                    //FALSO ALL
                    giusto[0][1] = false;
                    giusto[1][1] = false;
                    giusto[2][1] = false;
                    giusto[3][1] = false;

                    setTimeout(()=>{
                        risposta.style.top = "-10rem";
                    },2000)   
                }
            }
        }

        //RESETTO LA QUANTITA COSI NON SI PUò SPAMMARE
        quantita = 0;

    }

})


// RIMUOVO TUTTO

for (let i = 0; i < inputFormulario.length; i++) {
    inputFormulario[i].addEventListener("keydown",()=>{
        removeErroreCompilazione(i);
    })
    
}


//FUNZIONE PER CANCELLARE TUTTI GLI ERRORI

const removeErroreCompilazione = (numero)=>{
    fraseError[numero].style.position = "absolute";
    fraseError[numero].style.visibility = "hidden";

    inputFormulario[numero].classList.remove("input-error");

    if (numero == 0) {
        inputFormulario[numero].placeholder = "First Name"
    } else if (numero == 1) {
        inputFormulario[numero].placeholder = "Last Email"
    } else if (numero == 2) {
        inputFormulario[2].classList.remove("error__placeholder");
        inputFormulario[2].placeholder = "email@example/com"
    } else if (numero == 3){
        inputFormulario[numero].placeholder = "Password";
    }

    iconError[numero].style.visibility = "hidden";
}


//FUNZIONE PER ATTIVARE TUTTI GLI ERRORI

const erroreCompilazione = (numero)=>{
    fraseError[numero].style.position = "relative";
    fraseError[numero].style.visibility = "visible";

    inputFormulario[numero].classList.add("input-error");
    inputFormulario[numero].placeholder = "";

    if (numero == 2) {
        inputFormulario[2].classList.add("error__placeholder");
        inputFormulario[2].placeholder = "email@example/com"
    }

    iconError[numero].style.visibility = "visible";
}


