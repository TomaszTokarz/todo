class Header {
    constructor(name) {
        this.name = name;
    }

    getHeaderName() {
        return `This header is ${this.header}`;
    }
}

const header = new Header('header');
console.log(header.getHeaderName());