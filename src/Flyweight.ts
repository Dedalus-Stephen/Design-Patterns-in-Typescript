type dataType = number[] | {}[] | string[] | boolean[];

interface Memo<T, T2> {
    id: number;
    data: dataType;
    getCache: (id: number) => T | false;
    setCache: (data: T2) => number;
}

class ConcreteCacheNumberArray implements Memo<{ data: number[], id: number}, number[]> {
    id: number;
    data: number[];

    constructor(data: number[]) {
        this.data = data;
        this.id = this.idGen();
    }

    private idGen(): number {
        return Math.floor(Math.random()*100);
    }

    private isUpToDate(id: number): boolean {
        return id === this.id;
    }

    getCache(id: number): { data: number[], id: number} | false {
        return this.isUpToDate(id) ? { data: this.data, id: this.id} : false;
    }

    setCache(data: number[]): number {
        this.data = data;
        this.id = this.idGen();
        return this.id;
    }
}

class ConcreteCacheStringArray implements Memo<{ data: string[], id: number}, string[]> {
    id: number;
    data: string[];

    constructor(data: string[]) {
        this.data = data;
        this.id = this.idGen();
    }

    private idGen(): number {
        return Math.floor(Math.random()*100);
    }

    private isUpToDate(id: number) {
        return id === this.id;
    }

    getCache(id: number): { data: string[], id: number} | false {
        return this.isUpToDate(id) ? { data: this.data, id: this.id} : false;
    }

    setCache(data: string[]): number {
        this.data = data;
        this.id = this.idGen();
        return this.id;
    }
}