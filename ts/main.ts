let backgroundVideo: any = document.querySelector("#background-video");
let titleWrap: any = document.querySelector("#title-wrap");
let videoHeight: number;

backgroundVideo.addEventListener('loadedmetadata', () => {
    videoHeight = backgroundVideo.videoHeight;
    console.log(videoHeight);
});

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

class ContantManager {
    contactList: any[];
    constructor() {
        this.contactList = [];
    }

    add(contact) {
        this.contactList.push(contact);
    }

    removeLast() {
        this.contactList.pop();
    }

    removeSpecificContact(contact) {
        let index: number = this.getContactIndex(contact);
    }

    getContactIndex(contact): number {
        return 0;
    }
}


