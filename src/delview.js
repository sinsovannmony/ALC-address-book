cnt.view.deleteContact = {
    setupUserInterface: function() {
        var deleteButton = document.forms['Contact'].commit;
        var selectEl = document.forms['Contact'].selectContact;
        var key = "",
            keys = [],
            contact = null,
            optionEl = null,
            i = 0;
        // load all the contact objects
        Contact.loadAll();
        keys = Object.keys(Contact.instances);
        // populate the selection list with all the contacts
        for (i = 0; i < keys.length; i++) {
            key = keys[i];
            contact = Contact.instances[key];
            optionEl = document.createElement("option");
            optionEl.text = contact.name;
            optionEl.value = contact.name;
            selectEl.add(optionEl, null);
        }

        deleteButton.addEventListener("click",
            cnt.view.deleteContact.handleDeleteButtonClickEvent);
        window.addEventListener("beforeunload", function() {
            Contact.saveAll();
        });
    },
    // Event handler for deleting a contact
    handleDeleteButtonClickEvent: function() {
        var selectEl = document.forms['Contact'].selectContact;
        var name = selectEl.value;
        if (name) {
            Contact.destroy(name);
            // remove deleted contact from select options
            selectEl.remove(selectEl.selectedIndex);
        }
    }
};
