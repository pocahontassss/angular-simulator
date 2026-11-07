export class Collection <T> {
    collection : T[] = []

    getAllElements () {
        return this.collection
    }

    getOneElement (index: number) {
        return this.collection[index]
    }

    clearCollection () {
        this.collection = []
    }

    deleteElement (index: number){
        this.collection.splice(index, 1)
    }

    replaceElement (index: number, newValue: T){
        this.collection[index] = newValue
    }
}

