let expect = require("chai").expect;

describe('Test FilmStudio class' , () => {

    let filmStudio;

    beforeEach(() => {
        filmStudio = new FilmStudio('Boyana');
    });

    it('test constructor initialize an instance correctly', () => {
        let actual = filmStudio.name;
        let expected = 'Boyana';
        expect(actual).to.be.equal(expected, 'Constructor does not initialize the object')
    });

    it('test constuctor initialize an empty films array', () => {
        let actual = filmStudio.films;
        let expected = [];
        expect(actual).to.eql(expected, 'constructor does not initialize an empty films array')
    });

    describe('test makeMovie function' , () => {
        it('test makeMovie works correctly with valid parameters', () => {
            filmStudio.makeMovie('Batman', ['Jocker', 'Bat']);
            let actual = filmStudio.films[0].filmName;
            let expected = 'Batman';
            expect(actual).to.be.equal(expected, 'makeMove does not work with valid parameters');
        });
        it('test makeMovie sets the roles correctly' , () => {
            filmStudio.makeMovie('Batman', ['Jocker', 'Bat']);
            let actualArray = filmStudio.films[0].filmRoles;
            let expevtedArray =  [ { role: 'Jocker', actor: false }, { role: 'Bat', actor: false }];
            expect(actualArray).to.eql(expevtedArray, 'makeMove filmRoles does not work with valid parameters');
        });

        it('test makeMovie throws an message with less parameters', () => {
            expect(function(){filmStudio.makeMovie('Batman')}).throws('Invalid arguments count', 'makeMovie does not throw invalid arguments count message')
        });

        it('test makeMovie throws an message with less parameters', () => {
            expect(function(){filmStudio.makeMovie(['Jocker', 'Bat'])}).throws('Invalid arguments count', 'makeMovie does not throw invalid arguments count message')
        });

        it('test makeMovie throws an message with more parameters', () => {
            expect(function(){filmStudio.makeMovie('Batman', 1, 2)}).throws('Invalid arguments count', 'makeMovie does not throw invalid arguments count message')
        });

        it('test makeMovie throws an message with invalid filmName parameter', () => {
            expect(function() {filmStudio.makeMovie(5, ['Jocker', 'Bat'])}).to.throw('Invalid arguments', 'makeMovie does not throw invalid arguments message')
        });

        it('test makeMovie throws an message with invalid roles parameter', () => {
            expect(function() {filmStudio.makeMovie('Batman', 'Jocker')}).to.throw('Invalid arguments', 'makeMovie does not throw invalid arguments message')
        });

        it('test makeMoveie returns correctly the movie object', () => {
            let actual = filmStudio.makeMovie('Batman', ['Jocker', 'Bat']);
            let expected = { filmName: 'Batman', filmRoles: [ { role: 'Jocker', actor: false }, { role: 'Bat', actor: false }]};
            expect(actual).to.be.eql(expected, 'makeMovie does not return the movie object corectly');
        });

        it('test makeMovie add number to the movie name if already exist', () => {
            filmStudio.makeMovie('Batman', ['Jocker', 'Bat']);
            filmStudio.makeMovie('Batman', ['Jocker', 'Bat']);
            let actual = filmStudio.films[1].filmName;
            let expected = 'Batman 2';
            expect(actual).to.be.eql(expected, 'makeMovie does not add the number to filmName if exist');
        })
    });

    describe('test casting function', () => {
        it('casting set the actor to the role correctly with valid parameters', () => {
            filmStudio.makeMovie('Batman', ['Jocker', 'Bat']);
            filmStudio.casting('Jack', 'Jocker');
            let actual = filmStudio.films[0].filmRoles[0];
            let expected = { role: 'Jocker', actor: 'Jack' };
            expect(actual).to.be.eql(expected, 'casting does not set the actor to the role corectly');
        });

        it('casting return the correct message with valid parameters', () => {
            filmStudio.makeMovie('Batman', ['Jocker', 'Bat']);
            let actual = filmStudio.casting('Jack', 'Jocker');
            let expected = `You got the job! Mr. Jack you are next Jocker in the Batman. Congratz!`;
            expect(actual).to.be.equal(expected, 'casting does not return the correct message with valid parameters');
        });

        it('casting return the correct message with invalid role parameter', () => {
            filmStudio.makeMovie('Batman', ['Jocker', 'Bat']);
            let actual = filmStudio.casting('Jack', 'Horse');
            let expected = `Jack, we cannot find a Horse role...`;
            expect(actual).to.be.equal(expected, 'casting does not return the correct message with invalid role parameter');
        });

        it('casting return the correct message with an empty films array', () => {
            let actual = filmStudio.casting('Jack', 'Horse');
            let expected = `There are no films yet in Boyana.`;
            expect(actual).to.be.equal(expected, 'casting does not return the correct message with an empty films array');
        });
    });

    describe('test lookForProducer function', () => {
        it('test lookForProducer throws the correct Error with invalid parameter', () => {
            filmStudio.makeMovie('Batman', ['Jocker', 'Bat']);
            expect(function(){filmStudio.lookForProducer('Bashman')}).to.throw(`Bashman do not exist yet, but we need the money...`, 'lookForProducer does not throw the corret Error')
        });
        it('lookForTheProducer returns the correct output with valid parameters', () => {
            filmStudio.makeMovie('Batman', ['Jocker', 'Bat']);
            filmStudio.casting('Jack', 'Jocker');
            let actual = filmStudio.lookForProducer('Batman');
            let expected = 'Film name: Batman\nCast:\nJack as Jocker\nfalse as Bat\n';
            expect(actual).to.equal(expected, 'lookingForProducer does not return the correct message')
        });
    })
});