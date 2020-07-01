class Media {
    constructor (title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    set isCheckedOut(isIt) {
        this._isCheckedOut = isIt;
    }
    getAverageRating() {
        return this.ratings.reduce((accumulator, rating) => accumulator + rating) / this.ratings.length;
    }
    toggleCheckOutStatus() {
        if (this.isCheckedOut){
            this.isCheckedOut = false;
        } else {
            this.isCheckedOut = true;
        }
    }
    addRating(rating) {
        if (typeof rating !== 'number') {
            return console.log('Correct rating format is a number between 1 and 5. Please try again');
        } else if (rating > 5) {
            rating = 5;
        } else if (rating < 1) {
            rating = 1
        };
        this.ratings.push(Math.round(rating));        
    }
}

class Book extends Media {
    constructor (author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}

class CD extends Media {
    constructor(artist, title) {
        super(title);
        this._artist = artist;
        this._songs = [];
    }
    get artist() {
        return this._artist;
    }
    get songs() {
        return this._songs;
    }
    set songs(songsArr) {
        this._songs = songsArr;
    }
    addSongTitle(song) {
        this.songs.push(song);
    }
    shuffle() {
        let shuffledSongs = [];
        let shuffledIndexArr = [];
        for (let i = 0; i < this.songs.length; i++) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * this.songs.length);
            } while (shuffledIndexArr.indexOf(randomIndex) > -1);
            shuffledIndexArr.push(randomIndex);       
        };
        for (let i = 0; i < shuffledIndexArr.length; i++) {
            let shuffledSong = this.songs[shuffledIndexArr[i]];
            shuffledSongs.push(shuffledSong);
        };
        this.songs = shuffledSongs;
    }
}

class Catalog {
    constructor() {
        this._media = [];
    }
    get media() {
        return this._media;
    }
    addMedia(object) {
        this.media.push(object);
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.isCheckedOut);
console.log(historyOfEverything);
console.log('Average rating: ' + historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut, speed);
console.log(speed.getAverageRating());
console.log(Book, typeof Book, Media, typeof Media);

const supposedFormerInfatuationJunkie = new CD('Alanis Morrisette', 'Supposed Former Infatuation Junkie');
supposedFormerInfatuationJunkie.addSongTitle('Front Row');
supposedFormerInfatuationJunkie.addSongTitle('Baba');
supposedFormerInfatuationJunkie.addSongTitle('Thank U');
supposedFormerInfatuationJunkie.addSongTitle('Are You Still Mad');
supposedFormerInfatuationJunkie.addSongTitle('Sympathetic Character');
supposedFormerInfatuationJunkie.addSongTitle('That I would Be Good');
supposedFormerInfatuationJunkie.addSongTitle('The Couch');
supposedFormerInfatuationJunkie.addSongTitle("Can't Not");
supposedFormerInfatuationJunkie.addSongTitle('UR');
supposedFormerInfatuationJunkie.addSongTitle('I Was Hoping');
supposedFormerInfatuationJunkie.addSongTitle('One');
supposedFormerInfatuationJunkie.addSongTitle('Would Not Come');
supposedFormerInfatuationJunkie.addSongTitle('Unsent');
supposedFormerInfatuationJunkie.addSongTitle('So Pure');
supposedFormerInfatuationJunkie.addSongTitle('Joining You');
supposedFormerInfatuationJunkie.addSongTitle('Heart Of The House');
supposedFormerInfatuationJunkie.addSongTitle('Your Congratulations');
supposedFormerInfatuationJunkie.addRating(0);
supposedFormerInfatuationJunkie.addRating('h');
supposedFormerInfatuationJunkie.addRating(9);
supposedFormerInfatuationJunkie.addRating(2.7);
supposedFormerInfatuationJunkie.addRating(4);
console.log(supposedFormerInfatuationJunkie);
supposedFormerInfatuationJunkie.shuffle();
console.log(supposedFormerInfatuationJunkie);

const catalogOne = new Catalog;
catalogOne.addMedia(supposedFormerInfatuationJunkie);
catalogOne.addMedia(speed);
catalogOne.addMedia(historyOfEverything);

console.log(catalogOne);

console.log(catalogOne.media[0]);