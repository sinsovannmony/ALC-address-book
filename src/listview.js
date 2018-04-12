cnt.view.listcontacts = {
    setupUserInterface: function() {
        document.getElementById('second').style.display = "none";
        var tableBodyEl = document.querySelector("table#contacts>tbody");
        var keys = [],
            key = "",
            row = {},
            i = 0,
            j;
        var mth;

        Contact.loadAll();
        keys = Object.keys(Contact.instances);
        for (i = 0; i < keys.length; i++) {
            key = keys[i];
            row = tableBodyEl.insertRow();
            row.insertCell(-1).textContent = Contact.instances[key].name;
            row.insertCell(-1).textContent = Contact.instances[key].num;
            row.insertCell(-1).textContent = Contact.instances[key].mail;
            mth = tableBodyEl.rows[i].cells[0];
            mth.style.cursor = 'pointer';
                mth.addEventListener('click', function() {
                    var conta, key2 = this.innerHTML;
                    conta = Contact.instances[key2];
                    document.getElementById("first").style.display = "none";
                    document.getElementById("second").style.display = "initial";
                    document.getElementById("conname").innerHTML = conta.name;
                    document.getElementById("connum").innerHTML = conta.num;
                    document.getElementById("conmail").innerHTML = conta.mail;
                    var x = document.getElementById("umage");
                    if (conta.imaage === null || conta.imaage === "")  {
                        x.src = "img/cont.png";
                    }
                    else {
                        x.src = conta.imaage;
                    }
                    x.style.borderRadius='50px';
                    x.setAttribute("width", "80");
                    x.setAttribute("height", "80");
                    x.setAttribute("alt", "contact image");
                });

        }

    }
};
