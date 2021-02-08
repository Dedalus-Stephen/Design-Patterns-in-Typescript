interface Target { methodAOld: Function };
interface Adaptee { methodANew: Function };

class TargetConcrete implements Target {
    methodAOld() {};
}

class AdapteeConcrete implements Adaptee {
    methodANew() {};
}

class AdapterConcrete extends TargetConcrete {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }

    methodAOld() {
        this.adaptee.methodANew();
    }
}


new AdapterConcrete(new AdapteeConcrete()).methodAOld();
