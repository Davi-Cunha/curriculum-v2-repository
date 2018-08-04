let div = document.querySelector("#firstDiv");
let h1 = document.createElement("h1");
h1.innerHTML = "Initial Commit";
div.appendChild(h1);

class Contact {
    name: string;
    email: string;
    phone: number;
    id: string;
    constructor(name, email, phone, id) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.id = id;
    }
}

class ContantManager extends Contact{
    
}