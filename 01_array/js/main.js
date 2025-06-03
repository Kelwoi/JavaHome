// 1
class Selector {
    constructor(name) {
        this.name = name;
        this.styles = {};
    }

    addProperty(name, value) {
        this.styles[name] = value;
    }

    removeProperty(name) {
        delete this.styles[name];
    }

    getCSS() {
        let properties = "";
        for (let key in this.styles) {
            properties += ` ${key}: ${this.styles[key]};`;
        }
        return `.${this.name} {${properties} }`;
    }
}

const selector = new Selector("name");
selector.addProperty("color", "red");
selector.addProperty("font-size", "14px");
console.log(selector.getCSS());
//2
class Button {
    constructor(width, height, text) {
        this.width = width;
        this.height = height;
        this.text = text;
    }

    showBtn() {
        const btn = document.createElement("button");
        btn.innerText = this.text;
        btn.style.width = this.width;
        btn.style.height = this.height;
        document.body.appendChild(btn);
    }
}

class BootstrapButton extends Button {
    constructor(width, height, text, color) {
        super(width, height, text);
        this.color = color;
    }

    showBtn() {
        const btn = document.createElement("button");
        btn.innerText = this.text;
        btn.style.width = this.width;
        btn.style.height = this.height;
        btn.style.backgroundColor = this.color;
        btn.classList.add("btn", "btn-primary");
        document.body.appendChild(btn);
    }
}


const simpleBtn = new Button("150px", "40px", "Здоров я тато кнопка");
simpleBtn.showBtn();

const styledBtn = new BootstrapButton("150px", "40px", "Привіт, я його син кнопка", "green");
styledBtn.showBtn();
