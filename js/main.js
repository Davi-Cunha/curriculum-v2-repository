var div = document.querySelector("#firstDiv");
var h1 = document.createElement("h1");
h1.innerHTML = "Initial Commit";
div.appendChild(h1);
var Contact = /** @class */ (function () {
    function Contact(name, email, phone, id) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.id = id;
    }
    return Contact;
}());
var ContantManager = /** @class */ (function () {
    function ContantManager() {
        this.contactList = [];
    }
    ContantManager.prototype.add = function (contact) {
        this.contactList.push(contact);
    };
    ContantManager.prototype.removeLast = function () {
        this.contactList.pop();
    };
    ContantManager.prototype.removeSpecificContact = function (contact) {
        var index = this.getContactIndex(contact);
    };
    ContantManager.prototype.getContactIndex = function (contact) {
        return 0;
    };
    return ContantManager;
}());
