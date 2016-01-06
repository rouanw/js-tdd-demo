var zoo = {
  addAnimal: function(animalName) {
    animalService.addAnimal(animalName);
  },
  getAnimalList: function() {
    var shortAnimalList = animalService.getAnimalList();
    if (shortAnimalList.length > 3) {
      shortAnimalList.pop();
    }
    return shortAnimalList;
  }
};

var animalService = {
  addAnimal: function() {},
  getAnimalList: function() {}
};

describe('Jozi zoo', function() {

  it('should call the animalService when adding an animal', function() {
    spyOn(animalService, 'addAnimal');
    zoo.addAnimal();

    expect(animalService.addAnimal).toHaveBeenCalled();
  });

  it('should pass the animal name to the add animal function', function() {
    spyOn(animalService, 'addAnimal');
    var anAnimal = 'tame chicken';
    zoo.addAnimal(anAnimal);

    expect(animalService.addAnimal).toHaveBeenCalledWith('tame chicken');
  });

  it('should return a list of animals', function() {
    spyOn(animalService, 'getAnimalList').and.returnValue(['cat', 'dog']);
    var animalList = zoo.getAnimalList();

    expect(animalList).toEqual(['cat', 'dog']);
  });

  it('should return a maximum of 3 animals', function() {
    spyOn(animalService, 'getAnimalList').and.returnValue(['cat', 'dog', 'mouse', 'wolf']);
    var animalList = zoo.getAnimalList();

    expect(animalList.length).toBe(3);
  });
});
