cnt.view.createContact = {
    setupUserInterface: function() {
        var saveButton = document.forms['Contact'].commit;

        // load all contacts
        Contact.loadAll();

        // Set an event handler for the save/submit button
        saveButton.addEventListener("click",
            cnt.view.createContact.valforminput);

        window.addEventListener("beforeunload", function() {
            Contact.saveAll();
        });
    },

    //validate the form
    valforminput: function() {
        var InputInfo = document.forms['Contact'];
        var saveButton = document.forms['Contact'].commit;
        var user = {
            name: InputInfo.name.value,
            num: InputInfo.num.value,
            imaage: InputInfo.imaage.value,
            mail: InputInfo.mail.value
        };
        if (InputInfo.name.value === "" && InputInfo.num.value === "") {

            saveButton.disabled = true;
            alert("Ensure you input contact name and number");

        }

        else {
            saveButton.disabled = false;
            // saves user input data
            Contact.add(user);
            InputInfo.reset();
        }

    }



};
