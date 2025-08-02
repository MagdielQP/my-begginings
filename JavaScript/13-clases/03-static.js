class Restaurants{
    constructor (name){
        this.name = name;
    }

    getTimeable(){
        console.log('horario restaurante')
    }

    static getRestaurant(id){
        return new Restaurants('BBQ');
    }
}

const r = Restaurants.getRestaurant(12);
console.log(r);