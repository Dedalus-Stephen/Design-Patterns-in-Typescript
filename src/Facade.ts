namespace LibraryPackage {
    interface Entity { doSomething(): any };

    export class FeatureOne implements Entity { doSomething() {} };
    
    export class FeatureTwo implements Entity { doSomething() {} };
    
    export class FeatureThree implements Entity { doSomething() {} };    
}

class FacadeFeatureOne {
    doFeatureOne() {
        new LibraryPackage.FeatureOne().doSomething();
    }
}

new FacadeFeatureOne().doFeatureOne()
