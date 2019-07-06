/*          JS Advanced - Exam: 17.03.2019
    https://judge.softuni.bg/Contests/Practice/Index/1586#1     */

const FilmStudio = require('./filmStudio');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('filmStudio tests', function () {

    describe('"constructor" tests', function () {
        /*  Instantiation with one parameter - a string representing the film studio name,
            and an additional property called "films" - an empty array by default.*/
        it('should be instantiate one parameter string and empty array', function () {
            const filmStudio = new FilmStudio('testName');

            assert.equal(filmStudio.name, 'testName');
        });

        it('should have empty films property', function () {
            const filmStudio = new FilmStudio('testName');

            assert.equal(filmStudio.films.length, 0);
        });
    });

    describe('"makeMovie()" tests', function () {
        /*•	Function makeMovie() - receives two parameters: a string(filmName) and an array(roles).
        This function creates a film in object format (film name and all roles).
        If the name already exists, the filmName received is a
        sequel to the existing film and its name must be followed by its number in the film series. */

        it('should throw error if more than 2 arguments', function () {
            const filmStudio = new FilmStudio('testName');

            assert.throws(function () {
                filmStudio.makeMovie('someMovie', ['Anna, Ivan'], 'pesho');
            })
        });

        it('should throw error message with invalid filmName', function () {
            const filmStudio = new FilmStudio('testName');

            assert.throws(function () {
                filmStudio.makeMovie(5, ['bad gay', 'good gay']);
            })
        });

        it('should throw error when invalid roles parameter', function () {
            const filmStudio = new FilmStudio('testName');
            assert.throws(function () {
                filmStudio.makeMovie('someMovieName', 'names are not in []');
            })
        });

        it('should returns correctly the movie object', function () {
            let filmStudio = new FilmStudio('Boyana');
            let actual = filmStudio.makeMovie('Batman', ['Jocker', 'Bat']);

            let expected = {
                filmName: 'Batman',
                filmRoles: [{role: 'Jocker', actor: false}, {role: 'Bat', actor: false}]
            };

            expect(actual).to.be.eql(expected, 'makeMovie does not return the movie object corectly');
        });

        it('should add number to the movie name if already exist', () => {
            const filmStudio = new FilmStudio('studioName');
            filmStudio.makeMovie('Batman', ['Jocker', 'Bat']);
            filmStudio.makeMovie('Batman', ['Jocker', 'Bat']);

            let actual = filmStudio.films[1].filmName;
            let expected = 'Batman 2';

            expect(actual).to.be.eql(expected, 'makeMovie does not add the number to filmName if exist');
        })

    });

    describe('"casting()" tests', function () {
        /*  Function casting() - receives two parameters: a string (actor) and another string (role).
            If our film studio contains a film which has that role, the given actor gets it.
            Regardless of the outcome, there will always be a string as output. */

        it('should return correct message with valid parameters', function () {
            const filmStudio = new FilmStudio('Boyana');
            filmStudio.makeMovie('Batman', ['Jocker', 'Bat']);
            // filmStudio.casting('Jack', 'Bat');
            assert.equal(filmStudio.casting('Jack', 'Jocker'),
                'You got the job! Mr. Jack you are next Jocker in the Batman. Congratz!');
        });

        it('should set actor to the role correctly with valid params', function () {
            const filmStudio = new FilmStudio('Boyana');
            filmStudio.makeMovie('Batman', ['Jocker', 'Bat']);
            filmStudio.casting('Jack', 'Jocker');

            const actual = filmStudio.films[0].filmRoles[0];
            const expected = { role: 'Jocker', actor: 'Jack' };

            expect(actual).to.be.eql(expected);
        });

        it('should return correct message with valid parameters', function () {
            const filmStudio = new FilmStudio('Boyana');
            filmStudio.makeMovie('Batman', ['Jocker', 'Bat']);

            assert.equal(filmStudio.casting('Jack', 'Horse'), 'Jack, we cannot find a Horse role...');
        });

        it('should return correct message with empty film array', function () {
            const filmStudio = new FilmStudio('Boyana');

            assert.equal(filmStudio.casting('Jack', 'Horse'),
                'There are no films yet in Boyana.')
        });
    });

    describe('"lookForProducer()" tests', function () {
        /*  Function lookForProducer() - receives one parameter - filmName.
            If the given filmName exists, the function prints its info (film name and cast…).
            Otherwise, an error is thrown. */

        it('should throw error with invalid params', function () {
            const filmStudio = new FilmStudio('Boyana');
            filmStudio.makeMovie('Batman', ['Jocker', 'Bat']);

            // assert.throws(filmStudio.lookForProducer('Indiana Jones'),'Indiana Jones do not exist yet, but we need the money...')
            expect(function () {
                filmStudio.lookForProducer('Indiana Jones');
            }).to.throws('Indiana Jones do not exist yet, but we need the money...')
        });

        it('should return correct out with valid parameter', function () {
            const filmStudio = new FilmStudio('Boyana');
            filmStudio.makeMovie('Batman', ['Jocker', 'Bat']);
            filmStudio.casting('Jack', 'Jocker');

            const actual = filmStudio.lookForProducer('Batman');
            const expected = 'Film name: Batman\nCast:\nJack as Jocker\nfalse as Bat\n';

            assert.equal(actual, expected);
        });
    });
});
