//create the contact object
function Contact(user) {
    this.name = user.name;
    this.num = user.num;
    this.imaage = user.imaage;
    this.mail = user.mail;
}

// contact instance
Contact.instances = {};

//create new object for new contact row
Contact.convertRow2Obj = function(controw) {
    var contact = new Contact(controw);
    return contact;
};

//load all the contact
Contact.loadAll = function() {
    var key = "",
        keys = [],
        contactsString = "",
        contacts = {},
        i = 0;
    try {
        if (localStorage.getItem("contacts")) {
            contactsString = localStorage.getItem("contacts");
        }
    } catch (e) {
        alert("Error when reading from Local Storage\n" + e);
    }
    if (contactsString) {
        contacts = JSON.parse(contactsString);
        keys = Object.keys(contacts);
        console.log(keys.length + " contacts loaded.");
        for (i = 0; i < keys.length; i++) {
            key = keys[i];
            Contact.instances[key] = Contact.convertRow2Obj(contacts[key]);
        }
    }
};

//save all input.
Contact.saveAll = function() {
    var contactStr = "",
        error = false,
        nmrOfContact = Object.keys(Contact.instances).length;
    try {
        contactStr = JSON.stringify(Contact.instances);
        localStorage.setItem("contacts", contactStr);
    } catch (e) {
        alert("Error when writing to Local Storage\n" + e);
        error = true;
    }
    if (!error) console.log(nmrOfContact + " Details saved.");
};

//add new contact info
Contact.add = function(user) {
    var contact = new Contact(user);
    Contact.instances[user.name] = contact;
    console.log("Contact " + user.name + " created!");
};

//  Delete a contact from the object
Contact.destroy = function(name) {
    if (Contact.instances[name]) {
        console.log("Contact " + name + " deleted");
        delete Contact.instances[name];
    } else {
        console.log("There is no contact with this name " + name + " in the database!");
    }
};

//update contact info
Contact.update = function(user) {
    var contact = Contact.instances[user.name];
    if (contact.num !== user.num) {
        contact.num = user.num;
    }
    if (contact.mail !== user.mail) {
        contact.mail = user.mail;
    }
    if (contact.imaage !== user.imaage) {
        contact.imaage = user.imaage;
    }
    console.log("Contact" + user.name + " modified!");
};

