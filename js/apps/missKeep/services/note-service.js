
import {storageService} from './local-storage-service'
import {makeId} from './util.service.js'


export const dogService = {
    getDogs,
    removeDog,
    saveDog,
    getDogById,
    getEmptyDog,
    getNextDogId
}

const STORAGE_KEY = 'DogsApp'
var gDogs;

getDogs();

function getDogs() {
    var dogs = storageService.load(STORAGE_KEY)
    if (!dogs || dogs.length === 0) {
        dogs = [_createDog('Toshi'), _createDog('BoTo'), _createDog('Pinchilada')]
        storageService.store(STORAGE_KEY, dogs)
    }

    // Add the reviews property to all dogs
    // another way: 
    // Vue.set(this.dogs[2], 'reviews', [8, 9]);
    dogs.forEach(dog => {
        dog.reviews = []
    });

    gDogs = dogs;
    // console.log(dogs);
    window.dogs = gDogs;
    // return gDogs;
    return Promise.resolve(gDogs);
}

function getDogById(dogId) {
    const dog = gDogs.find(dog => dog.id === dogId)
    return Promise.resolve(dog);
}

function saveDog(dog) {
    // NEW DOG
    if (!dog.id) {
        dog.id = makeId()
        gDogs.unshift(dog);
    } else {
        // EXISTING DOG
        const idx = gDogs.findIndex(currDog => currDog.id === dog.id);
        gDogs.splice(idx, 1, dog);
        // The following line is not supported by Vue's reactivity system
        // gDogs[idx] = dog;
    }

    storageService.store(STORAGE_KEY, gDogs)
    return Promise.resolve(dog)
    // return Promise.reject('Big Badabum')
}

function removeDog(dogId) {
    var idx = gDogs.findIndex(dog =>dog.id === dogId);
    if (idx !== -1)  gDogs.splice(idx, 1)
    storageService.store(STORAGE_KEY, gDogs)
    return Promise.resolve();
}

function getEmptyDog() {
    return {
        name: '',
        weight: 0,
         bio: '', 
         nickNames: [], 
         gender: 'F', 
         features: [],
         url : ''
        };
}

function _createDog(name) {
    var weight =  parseInt(Math.random() * 10) + 10
    return {
        id: makeId(),
        name,
        weight: weight,
        bio : '',
        nickNames: [],
        gender: null,
        features: [],
        url: '' 
    }
}

function getNextDogId(dogId) {
    var idx = gDogs.findIndex(dog => dog.id === dogId);
    idx++;
    if ( idx === gDogs.length) idx = 0;
    
    return gDogs[idx].id;
}


