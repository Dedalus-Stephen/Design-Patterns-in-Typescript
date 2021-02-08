interface Subject {
    doSomething: Function; 
}

class Faux implements Subject{
    doSomething() {};
}

class RealSubject implements Subject {
    doSomething() { return 1 };
}

class Proxy extends Faux implements Subject {
    private rSubject = new RealSubject();

    // @Override
    doSomething() {
        this.rSubject.doSomething();
    }
}