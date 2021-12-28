export default function validationFormPrueba(){


    let $form = document.querySelector("form");
    let $inputs = document.querySelectorAll("input");



    $form.addEventListener("submit", (event)=>{

        event.preventDefault(); //prevenimos que se envie el formulario todavia


        emptyValidation();        // validamos que no haya campos vacios
        emailValidation();        // validamos el input email
        passwordValidation();      // validamos el input password





        function emptyValidation(){
            
            $inputs.forEach(input =>{   // validamos que esten vacios o que contengan caracteres

                let $warningLogo = input.nextElementSibling;
                let $warningText= input.nextElementSibling.nextElementSibling;

                $warningLogo.classList.remove("active");  // cada vez que se envia el formulario nuevamente se limpian los iconos y el texto de warning
                $warningText.classList.remove("active");  

                input.value = input.value.trim();

                if(input.value == ""){
                    $warningLogo.classList.add("active");
                    $warningText.classList.add("active");
                    $warningText.innerHTML = `${input.placeholder} cannot be empty`;
                }
            })

        }


        function emailValidation(){

            // valido que lo ingresado tenga formato email
            let $emailInput = document.querySelector("#email");
            let $warningLogo = $emailInput.nextElementSibling;
            let $warningText= $emailInput.nextElementSibling.nextElementSibling;

            let regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;   // regex para un correo electronico
            let spacesRegex = /\s/;          // pregunta si tiene al menos un espacio en blanco 

            if($emailInput.value == ""){
                return ;
            }

            if(!regex.test($emailInput.value)){
                $warningLogo.classList.add("active");
                $warningText.classList.add("active");
                $warningText.innerHTML = "Please provide a valid email";
                return; 
            }

        }


        function passwordValidation(){

            //valido que el pasword ingresado tenga letras de Aa-Zz, al menos un numero, no espacios en blanco y al menos 6 caracteres.
            let $passwordlInput = document.querySelector("#password");
            let $warningLogo = $passwordlInput.nextElementSibling;
            let $warningText= $passwordlInput.nextElementSibling.nextElementSibling;

            let numberRegex = /[0-9]+/;      //pregunta si tiene al menos un numero
            let spacesRegex = /\s/;          // pregunta si tiene al menos un espacio en blanco
            let letterRegex = /[A-Za-z]+/;   // pregunta si tiene al menos una letra

            if($passwordlInput.value == ""){
                return;
            }

            if($passwordlInput.value.length < 6){
                $warningLogo.classList.add("active");
                $warningText.classList.add("active");
                $warningText.innerHTML = "Password must have al least 6 characters";
                return;
            }

            if(!numberRegex.test($passwordlInput.value)){
                $warningLogo.classList.add("active");
                $warningText.classList.add("active");
                $warningText.innerHTML = "Password must have al least 1 number";
                return;
            }


            if(spacesRegex.test($passwordlInput.value)){ 
                $warningLogo.classList.add("active");
                $warningText.classList.add("active");
                $warningText.innerHTML = "Password cannot have blank spaces";
                return;
            }

            if(!letterRegex.test($passwordlInput.value)){
                $warningLogo.classList.add("active");
                $warningText.classList.add("active");
                $warningText.innerHTML = "Password must have at least 1 letter";
                return;
            }






        }

    







    })




};

