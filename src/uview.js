cnt.view.updateContact = {
    setupUserInterface: function() {
        var formEl = document.forms['Contact'],
            saveButton = formEl.commit,
            selectContactEl = formEl.selectContact;
        var key = "",
            keys = [],
            contact = null,
            optionEl = null,
            i = 0;
        // load all contact objects
        Contact.loadAll();
        // populate the selection list with contacts
        keys = Object.keys(Contact.instances);
        for (i = 0; i < keys.length; i++) {
            key = keys[i];
            contact = Contact.instances[key];
            optionEl = document.createElement("option");
            optionEl.text = contact.name;
            optionEl.value = contact.name;
            selectContactEl.add(optionEl, null);
        }
        // when a contact is selected, populate the form with the contact data
        selectContactEl.addEventListener("change", function() {
            var contact = null,
                key = selectContactEl.value;
            if (key) {
                contact = Contact.instances[key];
                formEl.number.value = contact.num;
                formEl.contactname.value = contact.name;
                formEl.email.value = contact.mail;
            } else {
                formEl.reset();
            }
        });
        saveButton.addEventListener("click",
            cnt.view.updateContact.handleSaveButtonClickEvent);
        window.addEventListener("beforeunload", function() {
            Contact.saveAll();
        });
    },
    // save data
    handleSaveButtonClickEvent: function() {
        var formEl = document.forms['Contact'];
        var user = {
            name: formEl.contactname.value,
            num: formEl.number.value,
            mail: formEl.email.value
        };
        Contact.update(user);
        formEl.reset();
    }
};
