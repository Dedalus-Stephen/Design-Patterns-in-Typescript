class Singleton {
    private static instance: Singleton;
    private constructor() {};
    
    public static get(): Singleton {
        if(!Singleton.instance) Singleton.instance = new Singleton();
        return Singleton.instance;
    }
}