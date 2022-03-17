// const bcrypt = require('bcrypt');
// import bcrypt from '../node_modules/bcrypt';
// const saltRounds = 14;

window.onload = () =>  {
    // Already an account
    document.getElementById("oldAccount").addEventListener("click", () => {
        // https://www.codegrepper.com/code-examples/javascript/forward+to+new+page+onclick+js
        location.href = "login.html";
    })

    document.getElementById("newAccountForm").addEventListener("submit", async(e)  =>  {
        e.preventDefault();

        if(document.getElementById("password").value == document.getElementById("repeatPassword").value)  {
            let user = {
                email: document.getElementById("email").value,
                password: document.getElementById("password").value,
                department: document.getElementById("department").value
            }

            let newUser = await postUser(user);
            localStorage.setItem("id", newUser.insertedId)

            // https://www.codegrepper.com/code-examples/javascript/forward+to+new+page+onclick+js
            location.href = "login.html";
        }  else  {
            document.getElementById("wrongInput").innerText = "De wachtwoorden zijn niet hetzelfde";
        }

        
    })

    async function postUser(user)  {
        console.log(user);

        // bcrypt.genSalt(saltRounds, async function(err, salt) {
        //     bcrypt.hash(user.password, salt, async function(err, hash) {
        //         // Store hash in your password DB.
        //         console.log(hash);

                let resp = await fetch(`https://web2-backend-davidbaekeland.herokuapp.com/newUser`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: user.email,
                        password: hash,
                        department: user.department
                    })
                });

                return await resp.json();
        //     });
        // });

        
        
    }
}