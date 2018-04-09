function Contact(user) {
    this.name = user.name;
    this.num = user.num;
    this.mail = user.mail;
}
Contact.instances = {};
Contact.convertRow2Obj = function(controw) {
    var contact = new Contact(controw);
    return contact;
};

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
Contact.add = function(user) {
    var contact = new Contact(user);
    Contact.instances[user.name] = contact;
    console.log("Contact " + user.name + " created!");
};
Contact.update = function(user) {
    var contact = Contact.instances[user.name];
    if (contact.num !== user.num) {
        contact.num = user.num;
    }
    if (contact.mail !== user.mail) {
        contact.mail = user.mail;
    }
    console.log("Contact" + user.name + " modified!");
};
//  Delete a book row from persistent storage
Contact.destroy = function(name) {
    if (Contact.instances[name]) {
        console.log("Contact " + name + " deleted");
        delete Contact.instances[name];
    } else {
        console.log("There is no contact with this name " + name + " in the database!");
    }
};