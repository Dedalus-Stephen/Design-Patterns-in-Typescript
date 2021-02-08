interface Component {
    n(): number;
}

interface Decorator extends Component {};

class ConcreteComponent implements Component {
    n() { return 0 };
}

class ConcreteDecorator implements Decorator {
    private comp: Component;

    constructor(comp: Component){
        this.comp = comp;
    }

    n(){ return this.comp.n() + 1 };
}

console.log(new ConcreteDecorator(new ConcreteComponent()).n()); // 2