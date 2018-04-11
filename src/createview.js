cnt.view.createContact = {
    setupUserInterface: function() {
        var saveButton = document.forms['Contact'].commit;

        // load all contacts
        Contact.loadAll();

        // Set an event handler for the save/submit button
        saveButton.addEventListener("click",
            cnt.view.createContact.handleSaveButtonClickEvent);
        window.addEventListener("beforeunload", function() {
            Contact.saveAll();
        });
    },

    // saves user input data
    handleSaveButtonClickEvent: function() {
        var InputInfo = document.forms['Contact'];
        var user = {
            name: InputInfo.name.value,
            num: InputInfo.num.value,
            imaage: InputInfo.imaage.value,
            mail: InputInfo.mail.value
        };

        Contact.add(user);
        InputInfo.reset();
    }
};
