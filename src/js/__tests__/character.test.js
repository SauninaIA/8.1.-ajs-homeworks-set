import Character from '../Character';
  
test('Creating a character', () => {
    const character = new Character('Ivan');
    const expected = {name: 'Ivan'};
    expect(character).toEqual(expected);
});
