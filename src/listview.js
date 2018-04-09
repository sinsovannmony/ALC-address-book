cnt.view.listcontacts = {
    setupUserInterface: function() {
        document.getElementById('second').style.display = "none";
        var tableBodyEl = document.querySelector("table#contacts>tbody");
        var keys = [],
            key = "",
            row = {},
            i = 0;
        Contact.loadAll();
        keys = Object.keys(Contact.instances);
        for (i = 0; i < keys.length; i++) {
            key = keys[i];
            row = tableBodyEl.insertRow();
            row.insertCell(-1).textContent = Contact.instances[key].name;
            row.insertCell(-1).textContent = Contact.instances[key].num;
            row.insertCell(-1).textContent = Contact.instances[key].mail;
            tableBodyEl.rows[i].cells[0].addEventListener('click', function() {
                document.getElementById("first").style.display = "none";
                document.getElementById("second").style.display = "initial";
                document.getElementById("conname").innerHTML = Contact.instances[key].name;
                document.getElementById("connum").innerHTML = Contact.instances[key].num;
                document.getElementById("conmail").innerHTML = Contact.instances[key].mail;
            });

        }

    }
};
