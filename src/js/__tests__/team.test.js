import Team from '../Team';
import Character from '../Character';

let team, character1, character2, character3;

beforeEach(() => {
    team = new Team();
    character1 = new Character('Character1');
    character2 = new Character('Character2');
    character3 = new Character('Character3');
});

test('should add a character to the team', () => {
    team.add(character1);
    expect(team.toArray()).toEqual([character1]);
});

test('should throw an error if trying to add the same character twice', () => {
    team.add(character1);
    expect(() => team.add(character1)).toThrow('This character has already been added to this team.');
});

test('should add unique characters to the team', () => {
    team.addAll(character1, character2, character3, character2, character3);
    expect(team.toArray()).toEqual([character1, character2, character3]);
});

test('should return an array of characters in the team', () => {
    team.addAll(character1, character2, character3);
    expect(team.toArray()).toEqual([character1, character2, character3]);
});
