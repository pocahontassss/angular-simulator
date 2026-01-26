class Collection<T> {

  collection: T[] = [];

	constructor(collection: T[]) {
		this.collection = collection;
	}

	getAll(): T[] {
	  return this.collection
	}

	getSpecificElement(index: number): T {
		return this.collection[index]
	}

	clearCollection(): T[] {
    return this.collection = []
	}

	removeSpecificElement(index: number): T[] {
		this.collection.splice(index, 1);
    return this.collection
	}

	replaceSpecificElement(index: number, newElement: T): T[] {
    this.collection.splice(index, 1, newElement);
    return this.collection 
    
	}
}

const products: string[] = ['яблоки', 'банана', 'груши', 'мандарин']
const number: number[] = [1, 2, 3, 4, 5]

const productss: Collection<string> = new Collection<string>(products)
const numberr: Collection<number> = new Collection<number>(number)