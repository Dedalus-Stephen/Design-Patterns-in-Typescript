interface Product {}
interface Factory { create(): Product };

interface ProductOneAbstract extends Product {};

class ProductOne implements ProductOneAbstract {};

interface ProductTwoAbstract extends Product {};

class ProductTwo implements ProductTwoAbstract {};

interface ProductOneFactoryAbstract extends Factory {
    create(): ProductOne
}

interface ProductTwoFactoryAbstract extends Factory {
    create(): ProductTwo
}

class ProductOneFactoryConcrete implements ProductOneFactoryAbstract {
    create(): ProductOneAbstract { return new ProductOne() };
}

class ProductTwoFactoryConcrete implements ProductTwoFactoryAbstract {
    create(): ProductTwoAbstract { return new ProductTwo() };
}

console.log(new ProductOneFactoryConcrete().create())