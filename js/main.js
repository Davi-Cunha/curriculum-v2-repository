var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ContantManager = /** @class */ (function (_super) {
    __extends(ContantManager, _super);
    function ContantManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ContantManager;
}(Contact));
