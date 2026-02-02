use cinema
switched to db cinema
db.users.countDocuments({})
185
db.theatres.countDocuments({state:{"CA"}})
SyntaxError: Unexpected token (1:39)

> 1 | db.theatres.countDocuments({state:{"CA"}})
    |                                        ^
db.theatres.countDocuments({state:{'CA'}})
SyntaxError: Unexpected token (1:39)

> 1 | db.theatres.countDocuments({state:{'CA'}})
    |                                        ^
db.theatres.countDocuments({state:"CA"})
0
db.theatres.countDocuments({state:"MN"})
0
db.theatres.countDocuments({ "location.address.state": "CA" })
169
db.comments.find().limit(2)
{
  _id: ObjectId('5a9427648b0beebeb69579cc'),
  name: 'Andrea Le',
  email: 'andrea_le@fakegmail.com',
  movie_id: ObjectId('573a1390f29313caabcd418c'),
  text: 'Rem officiis eaque repellendus amet eos doloribus. Porro dolor voluptatum voluptates neque culpa molestias. Voluptate unde nulla temporibus ullam.',
  date: 2012-03-26T23:20:16.000Z
}
{
  _id: ObjectId('5a9427648b0beebeb69579cf'),
  name: 'Greg Powell',
  email: 'greg_powell@fakegmail.com',
  movie_id: ObjectId('573a1390f29313caabcd41b1'),
  text: 'Tenetur dolorum molestiae ea. Eligendi praesentium unde quod porro. Commodi nisi sit placeat rerum vero cupiditate neque. Dolorum nihil vero animi.',
  date: 1987-02-10T00:29:36.000Z
}
db.users.find().sort({ _id: 1 }).limit(1)
{
  _id: ObjectId('59b99db4cfa9a34dcd7885b6'),
  name: 'Ned Stark',
  email: 'sean_bean@gameofthron.es',
  password: '$2b$12$UREFwsRUoyF0CRqGNK0LzO0HM/jLhgUCNNIJ9RJAqMUQ74crlJ1Vu'
}
db.movies.countDocuments({ genres: "Comedy" })
7024
db.movies.find({year:1932, $or:[{genres:"Drama"}, {languages:"French"}]})
{
  _id: ObjectId('573a1391f29313caabcd9458'),
  plot: 'A young artist draws a face at a canvas on his easel. Suddenly the mouth on the drawing comes into life and starts talking. The artist tries to wipe it away with his hand, but when he looks...',
  runtime: 55,
  rated: 'UNRATED',
  cast: [
    'Enrique Rivero',
    'Elizabeth Lee Miller',
    'Pauline Carton',
    'Odette Talazac'
  ],
  num_mflix_comments: 1,
  poster: 'https://m.media-amazon.com/images/M/MV5BYWY3ODE5ZWEtYjlmYi00NjA4LTk4ZWYtMzBhZDE5MjY0YTYxXkEyXkFqcGdeQXVyNzI4MDMyMTU@._V1_SY1000_SX677_AL_.jpg',
  title: 'The Blood of a Poet',
  lastupdated: '2015-09-16 13:13:05.537000000',
  languages: [
    'French'
  ],
  released: 2010-05-20T00:00:00.000Z,
  directors: [
    'Jean Cocteau'
  ],
  writers: [
    'Jean Cocteau'
  ],
  awards: {
    wins: 1,
    nominations: 0,
    text: '1 win.'
  },
  year: 1932,
  imdb: {
    rating: 7.5,
    votes: 3903,
    id: 21331
  },
  countries: [
    'France'
  ],
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: 3.9,
      numReviews: 2865,
      meter: 86
    },
    dvd: 2008-04-29T00:00:00.000Z,
    critic: {
      rating: 7.7,
      numReviews: 18,
      meter: 94
    },
    lastUpdated: 2015-08-19T19:22:08.000Z,
    rotten: 1,
    production: 'Home Vision Entertainment',
    fresh: 17
  }
}
{
    'Mystery'
  ],
  runtime: 85,
  cast: [
    'Leni Riefenstahl',
    'Mathias Wieman',
    'Beni Fèhrer',
    'Max Holzboer'
  ],
  poster: 'https://m.media-amazon.com/images/M/MV5BNTQ1NTMzMTQtODIyYS00MTAxLWE1NTgtZGFkZTE2YmZkZmNjXkEyXkFqcGdeQXVyNTA2NDc4OA@@._V1_SY1000_SX677_AL_.jpg',
  title: 'The Blue Light',
  fullplot: 'Junta is hated by the people in the village where she lives, especially by the women, who suspect her of being a witch. Only she can climb the nearby mountains to a cave high up, whence a mysterious blue light glows when the moon is full. Many young men of the village have died trying to follow her. She is driven out of town, and takes to living in the mountains. Eventually she shares the secret of the blue light with one man, and he betrays it.',
  languages: [
    'German',
    'Italian'
  ],
  released: 1934-05-08T00:00:00.000Z,
  directors: [
    'Leni Riefenstahl',
    'Bèla Balèzs'
  ],
  writers: [
    'Bèla Balèzs',
    'Leni Riefenstahl (story)'
  ],
  awards: {
    wins: 1,
    nominations: 1,
    text: '1 win & 1 nomination.'
  },
  lastupdated: '2015-08-03 01:02:12.350000000',
  year: 1932,
  imdb: {
    rating: 7,
    votes: 727,
    id: 22694
  },
  countries: [
    'Germany'
  ],
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: 3.7,
      numReviews: 325,
      meter: 61
    },
    dvd: 2006-08-22T00:00:00.000Z,
    critic: {
      rating: 5.6,
      numReviews: 8,
      meter: 75
    },
    lastUpdated: 2015-08-14T18:39:12.000Z,
    rotten: 2,
    fresh: 6
  }
}
{
  _id: ObjectId('573a1392f29313caabcd99e3'),
  plot: 'A young French soldier in World War I is overcome with guilt when he kills a German soldier who, like himself, is a musically gifted conscript, each having attended the same musical ...',
  genres: [
    'Drama'
  ],
  runtime: 76,
  cast: [
    'Lionel Barrymore',
    'Nancy Carroll',
    'Phillips Holmes',
    'Louise Carter'
  ],
  num_mflix_comments: 2,
  poster: 'https://m.media-amazon.com/images/M/MV5BYzJlMDZjM2QtNWU4Ny00ZGRiLTljNjctZGZjNGM2ZmIzN2I1XkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_SY1000_SX677_AL_.jpg',
  title: 'Broken Lullaby',
  fullplot: "A young French soldier in World War I is overcome with guilt when he kills a German soldier who, like himself, is a musically gifted conscript, each having attended the same musical conservatory in France. The fact that the incident occurred in war does not assuage his guilt. He travels to Germany to meet the man's family.",
  languages: [
    'English'
  ],
  released: 1932-01-24T00:00:00.000Z,
  directors: [
    'Ernst Lubitsch'
  ],
  writers: [
    'Maurice Rostand (play)',
    'Reginald Berkeley (adaptation)',
    'Samson Raphaelson (screenplay)',
    'Ernest Vajda (screenplay)'
  ],
  awards: {
    wins: 0,
    nominations: 1,
    text: '1 nomination.'
  },
  lastupdated: '2015-08-19 00:33:29.483000000',
  year: 1932,
  imdb: {
    rating: 7.6,
    votes: 499,
    id: 22725
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: 4,
      numReviews: 119,
      meter: 100
    },
    production: 'Paramount Pictures',
    lastUpdated: 2015-08-09T18:15:06.000Z
  }
}
{
  _id: ObjectId('573a1392f29313caabcd9a10'),
  plot: 'Famous motor-racing champion Joe Greer returns to his hometown to compete in a local race. He discovers his younger brother has aspirations to become a racing champion and during the race ...',
  genres: [
    'Drama',
    'Action'
  ],
  runtime: 85,
  cast: [
    'James Cagney',
    'Joan Blondell',
    'Ann Dvorak',
    'Eric Linden'
  ],
  num_mflix_comments: 1,
  poster: 'https://m.media-amazon.com/images/M/MV5BMDg0OTc2YjUtYWMzZi00YWIxLTkwMjEtODFjYjhkOGI2ZWQwXkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_SY1000_SX677_AL_.jpg',
  title: 'The Crowd Roars',
  fullplot: "Famous motor-racing champion Joe Greer returns to his hometown to compete in a local race. He discovers his younger brother has aspirations to become a racing champion and during the race Joe loses his nerve when another driver his killed, leaving his brother to win. Joe's luck takes a plunge while his brother rises to height of fame.",
  languages: [
    'English'
  ],
  released: 1932-04-16T00:00:00.000Z,
  directors: [
    'Howard Hawks'
  ],
  writers: [
    'John Bright',
    'Niven Busch',
    'Kubec Glasmon',
    'Howard Hawks (story)',
    'Seton I. Miller'
  ],
  awards: {
    wins: 0,
    nominations: 1,
    text: '1 nomination.'
  },
  lastupdated: '2015-08-25 00:03:34.743000000',
  year: 1932,
  imdb: {
    rating: 6.4,
    votes: 663,
    id: 22792
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: 2.9,
      numReviews: 40,
      meter: 25
    },
    production: 'MGM',
    lastUpdated: 2015-06-28T19:58:39.000Z
  }
}
{
  runtime: 80,
  rated: 'UNRATED',
  cast: [
    'Helen Hayes',
    'Gary Cooper',
    'Adolphe Menjou',
    'Mary Philips'
  ],
  num_mflix_comments: 1,
  poster: 'https://m.media-amazon.com/images/M/MV5BMzM2ODc0NTY3OF5BMl5BanBnXkFtZTgwMjQwNzkzMjE@._V1_SY1000_SX677_AL_.jpg',
  title: 'A Farewell to Arms',
  fullplot: "A tale of the love between ambulance driver Lt. Henry and Nurse Catherine Barkley during World War I. The action takes place in Italy and the two fall in love during the war and will stop at nothing to be together. The film also analyses Lt. Henry's feelings on war and the purpose of fighting.",
  languages: [
    'English'
  ],
  released: 1932-12-08T00:00:00.000Z,
  directors: [
    'Frank Borzage'
  ],
  writers: [
    'Benjamin Glazer (screenplay)',
    'Oliver H.P. Garrett (screenplay)',
    'Ernest Hemingway (novel)'
  ],
  awards: {
    wins: 3,
    nominations: 2,
    text: 'Won 2 Oscars. Another 1 win & 2 nominations.'
  },
  lastupdated: '2015-08-30 00:01:29.900000000',
  year: 1932,
  imdb: {
    rating: 6.6,
    votes: 3260,
    id: 22879
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: 3.2,
      numReviews: 5622,
      meter: 52
    },
    dvd: 1998-06-12T00:00:00.000Z,
    critic: {
      rating: 7.8,
      numReviews: 13,
      meter: 92
    },
    lastUpdated: 2015-09-01T18:04:16.000Z,
    rotten: 1,
    production: 'Gravitas',
    fresh: 12
  }
}
{
  _id: ObjectId('573a1392f29313caabcd9a76'),
  plot: 'In this romance a librarian takes a cruise and falls for an unobtainable man, a district attorney married to a crippled woman.',
  genres: [
    'Drama',
    'Romance'
  ],
  runtime: 85,
  rated: 'APPROVED',
  cast: [
    'Barbara Stanwyck',
    'Adolphe Menjou',
    'Ralph Bellamy',
    'Dorothy Peterson'
  ],
  num_mflix_comments: 3,
  poster: 'https://m.media-amazon.com/images/M/MV5BMjEzNTU5NTk2N15BMl5BanBnXkFtZTgwMzA2NTAwMjE@._V1_SY1000_SX677_AL_.jpg',
  title: 'Forbidden',
  fullplot: "On a cruise to Cuba, Lulu Smith falls in love with Bob Grover. Back home, she breaks off the romance when he tells her he is married. Lulu has a baby, but doesn't tell Bob, who turns out to be a rising politician. She passes herself off as the baby's nanny. When Bob learns what is going on, he adopts the little girl, not telling his wife or anyone else where she came from. Lulu gets a job at a newspaper. Things get complicated when the editor gets the dirt on Grover, but also wants to marry Lulu.",
  languages: [
    'English',
    'French'
  ],
  released: 1932-01-15T00:00:00.000Z,
  directors: [
    'Frank Capra'
  ],
  writers: [
    'Frank Capra (story)',
    'Jo Swerling (adaptation)'
  ],
  awards: {
    wins: 0,
    nominations: 1,
    text: '1 nomination.'
  },
  lastupdated: '2015-09-05 00:24:21.237000000',
  year: 1932,
  imdb: {
    rating: 7,
    votes: 831,
    id: 22905
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: 3.5,
      numReviews: 154,
      meter: 63
    },
    production: 'Columbia Pictures',
    lastUpdated: 2015-08-23T18:57:35.000Z
  }
}
{
  rated: 'UNRATED',
  cast: [
    'Wallace Ford',
    'Leila Hyams',
    'Olga Baclanova',
    'Roscoe Ates'
  ],
  num_mflix_comments: 1,
  poster: 'https://m.media-amazon.com/images/M/MV5BMjMyYjgyOTQtZDVlZS00NTQ0LWJiNDItNGRlZmM3Yzc0N2Y0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_SX677_AL_.jpg',
  title: 'Freaks',
  fullplot: "A circus trapeze artist, Cleopatra, takes an interest in Hans, a midget who works in the circus sideshow. Her interest however is in the money Hans will be inheriting and she is actually carrying on an affair with another circus performer, Hercules. Hans's fiancèe does her best to convince him that he is being used but to no avail. At their wedding party, a drunken Cleopatra tells the sideshow freaks just what she thinks of them. Together, the freaks decide to make her one of their own.",
  languages: [
    'English',
    'German',
    'French'
  ],
  released: 1932-02-20T00:00:00.000Z,
  directors: [
    'Tod Browning'
  ],
  writers: [
    `Clarence Aaron 'Tod' Robbins (suggested by story: "Spurs")`
  ],
  awards: {
    wins: 1,
    nominations: 1,
    text: '1 win & 1 nomination.'
  },
  lastupdated: '2015-09-15 01:36:35.213000000',
  year: 1932,
  imdb: {
    rating: 8,
    votes: 29972,
    id: 22913
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: 4,
      numReviews: 23831,
      meter: 88
    },
    dvd: 2004-08-10T00:00:00.000Z,
    critic: {
      rating: 8.4,
      numReviews: 49,
      meter: 94
    },
    lastUpdated: 2015-09-13T17:12:35.000Z,
    consensus: 'Time has been kind to this horror legend: Freaks manages to frighten, shock, and even touch viewers in ways that contemporary viewers missed.',
    rotten: 3,
    production: 'MGM',
    fresh: 46
  }
}
{
  rated: 'PASSED',
  cast: [
    'Greta Garbo',
    'John Barrymore',
    'Joan Crawford',
    'Wallace Beery'
  ],
  poster: 'https://m.media-amazon.com/images/M/MV5BODc5OWY0MWQtZjgzMS00YTA1LTk1ZmEtY2VmYTgwYmU4ZjAwXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SY1000_SX677_AL_.jpg',
  title: 'Grand Hotel',
  fullplot: `Berlin's plushest, most expensive hotel is the setting where in the words of Dr. Otternschlag "People come, people go. Nothing ever happens.". The doctor is usually drunk so he missed the fact that Baron von Geigern is broke and trying to steal eccentric dancer Grusinskaya's pearls. He ends up stealing her heart instead. Powerful German businessman Preysing brow beats Kringelein, one of his company's lowly bookkeepers but it is the terminally ill Kringelein who holds all the cards in the end. Meanwhile, the Baron also steals the heart of Preysing's mistress, Flaemmchen, but she doesn't end up with either one of them in the end...`,
  languages: [
    'English',
    'Russian'
  ],
  released: 1932-09-11T00:00:00.000Z,
  directors: [
    'Edmund Goulding'
  ],
  writers: [
    'Vicki Baum (by)',
    'William Absalom Drake (play)'
  ],
  awards: {
    wins: 2,
    nominations: 1,
    text: 'Won 1 Oscar. Another 1 win & 1 nomination.'
  },
  lastupdated: '2015-08-24 00:02:32.743000000',
  year: 1932,
  imdb: {
    rating: 7.6,
    votes: 12001,
    id: 22958
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: 3.8,
      numReviews: 6809,
      meter: 77
    },
    dvd: 2004-02-03T00:00:00.000Z,
    critic: {
      rating: 7.8,
      numReviews: 35,
      meter: 86
    },
    lastUpdated: 2015-09-10T19:09:54.000Z,
    consensus: 'Perhaps less a true film than a series of star-studded vignettes, Grand Hotel still remains an entertaining look back at a bygone Hollywood era.',
    rotten: 5,
    production: 'MGM Home Entertainment',
    fresh: 30
  }
}
{
  _id: ObjectId('573a1392f29313caabcd9aff'),
  plot: 'Wrongly convicted James Allen serves in the intolerable conditions of a southern chain gang, which later comes back to haunt him.',
  genres: [
    'Crime',
    'Drama',
    'Film-Noir'
  ],
  runtime: 92,
  rated: 'NOT RATED',
  cast: [
    'Paul Muni',
    'Glenda Farrell',
    'Helen Vinson',
    'Noel Francis'
  ],
  poster: 'https://m.media-amazon.com/images/M/MV5BMDllMDA4YWQtYzdmNC00OGYxLWE0N2QtZmNjM2QxMTgxYzFkXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SY1000_SX677_AL_.jpg',
  title: 'I Am a Fugitive from a Chain Gang',
  fullplot: "Having returned from fighting in World War I, James Allen doesn't want to settle into a humdrum life and decides to set off to find his fortune. He travels the length and breadth of America, working as a skilled tradesman in the construction industry. When times get tough however, he finds himself living in a shelter where an acquaintance suggests they go out for a hamburger. What the friend really has in mind is to rob the diner and Allen soon finds himself working on a chain gang with a long jail sentence. Allen manages to escape however and heads to Chicago where over several years he slowly but surely works his way up the ladder to become one of the most respected construction engineers in the city. His past catches up with him and despite protestations from civic leaders and his many friends in Chicago, he finds himself again on the chain gang. Escaping for a second time, he accepts that to survive, he must lead a life of crime.",
  languages: [
    'English'
  ],
  released: 1932-11-19T00:00:00.000Z,
  directors: [
    'Mervyn LeRoy'
  ],
  writers: [
    'Robert E. Burns (by)',
    'Howard J. Green (screen play)',
    'Brown Holmes (screen play)'
  ],
  awards: {
    wins: 6,
    nominations: 0,
    text: 'Nominated for 3 Oscars. Another 3 wins.'
  },
  lastupdated: '2015-09-15 03:22:11.277000000',
  year: 1932,
  imdb: {
    rating: 8.1,
    votes: 8696,
    id: 23042
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: 4.1,
      numReviews: 3095,
      meter: 91
    },
    dvd: 2005-05-10T00:00:00.000Z,
    critic: {
      rating: 8.3,
      numReviews: 21,
      meter: 100
    },
    lastUpdated: 2015-09-15T17:02:53.000Z,
    rotten: 0,
    production: 'Vitaphone Corporation',
    fresh: 21
  }
}
{
    'Boris Karloff',
    'Zita Johann',
    'David Manners',
    'Arthur Byron'
  ],
  num_mflix_comments: 1,
  poster: 'https://m.media-amazon.com/images/M/MV5BMjEyNTIzNzcyMV5BMl5BanBnXkFtZTgwOTgwODY2MTE@._V1_SY1000_SX677_AL_.jpg',
  title: 'The Mummy',
  fullplot: 'In 1921 a field expedition in Egypt discovers the mummy of ancient Egyptian prince Im-Ho-Tep, who was condemned and buried alive for sacrilege. Also found in the tomb is the Scroll of Thoth, which can bring the dead back to life. One night a young member of the expedition reads the Scroll out loud, and then goes insane, realizing that he has brought Im-Ho-Tep back to life. Ten years later, disguised as a modern Egyptian, the mummy attempts to reunite with his lost love, an ancient princess who has been reincarnated into a beautiful young woman.',
  languages: [
    'English',
    'Arabic',
    'French'
  ],
  released: 1932-12-22T00:00:00.000Z,
  directors: [
    'Karl Freund'
  ],
  writers: [
    'Nina Wilcox Putnam (from a story by)',
    'Richard Schayer (from a story by)',
    'John L. Balderston (screen play)'
  ],
  awards: {
    wins: 1,
    nominations: 1,
    text: '1 win & 1 nomination.'
  },
  lastupdated: '2015-08-31 00:24:56.293000000',
  year: 1932,
  imdb: {
    rating: 7.2,
    votes: 14424,
    id: 23245
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: 3.5,
      numReviews: 11906,
      meter: 72
    },
    dvd: 2001-08-28T00:00:00.000Z,
    critic: {
      rating: 7.9,
      numReviews: 27,
      meter: 93
    },
    lastUpdated: 2015-08-19T19:09:04.000Z,
    consensus: "Relying more on mood and atmosphere than the thrills typical of modern horror fare, Universal's The Mummy sets a masterful template for mummy-themed films to follow.",
    rotten: 2,
    production: 'Universal Pictures',
    fresh: 25
  }
}
{
  _id: ObjectId('573a1392f29313caabcd9c1b'),
  plot: "Bank clerk William Marble is desperate for money to pay his family's bills. When his wealthy nephew visits, Marble asks him for a loan, but the young man refuses. Marble decides to kill his...",
  genres: [
    'Crime',
    'Drama'
  ],
  runtime: 81,
  rated: 'PASSED',
  cast: [
    'Charles Laughton',
    "Maureen O'Sullivan",
    'Dorothy Peterson',
    'Verree Teasdale'
  ],
  num_mflix_comments: 1,
  title: 'Payment Deferred',
  fullplot: "Bank clerk William Marble is desperate for money to pay his family's bills. When his wealthy nephew visits, Marble asks him for a loan, but the young man refuses. Marble decides to kill his nephew. It is a twisted path to justice after Marble is transformed by the crime he committed and the wealth he gains.",
  languages: [
    'English'
  ],
  released: 1932-11-07T00:00:00.000Z,
  directors: [
    'Lothar Mendes'
  ],
  writers: [
    'Ernest Vajda (screen play)',
    'Claudine West (screen play)',
    'Jeffrey Dell (based upon the play by)'
  ],
  awards: {
    wins: 1,
    nominations: 0,
    text: '1 win.'
  },
  lastupdated: '2015-06-24 00:22:17.033000000',
  year: 1932,
  imdb: {
    rating: 7,
    votes: 411,
    id: 23326
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: 3.4,
      numReviews: 94,
      meter: 82
    },
    production: 'MGM',
    lastUpdated: 2015-09-16T17:50:11.000Z
  }
}
{
  _id: ObjectId('573a1392f29313caabcd9c4c'),
  countries: [
    'France'
  ],
  genres: [
    'Drama'
  ],
  runtime: 91,
  cast: [
    'Harry Baur',
    'Robert Lynen',
    'Louis Gauthier',
    'Simone Aubry'
  ],
  num_mflix_comments: 3,
  poster: 'https://m.media-amazon.com/images/M/MV5BMzZiOWVhNDgtOGJjYy00OWI5LThiMTMtYTZjYjIyYzU2MDJiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMDI3OTIzOA@@._V1_SY1000_SX677_AL_.jpg',
  title: 'The Red Head',
  lastupdated: '2015-06-03 00:02:33.337000000',
  languages: [
    'French'
  ],
  released: 1934-03-07T00:00:00.000Z,
  directors: [
    'Julien Duvivier'
  ],
  writers: [
    'Jules Renard (novel)',
    'Julien Duvivier (screenplay)'
  ],
  awards: {
    wins: 1,
    nominations: 0,
    text: '1 win.'
  },
  year: 1932,
  imdb: {
    rating: 7.6,
    votes: 272,
    id: 23345
  },
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: 4.2,
      numReviews: 104,
      meter: 100
    },
    dvd: 2009-02-24T00:00:00.000Z,
    production: 'Divisa Home Video',
    lastUpdated: 2015-09-01T18:51:07.000Z
  }
}
{
  _id: ObjectId('573a1392f29313caabcd9c5d'),
  plot: 'The owner of a rubber plantation becomes involved with the new wife of one of his employees.',
  genres: [
    'Drama',
    'Romance'
  ],
  runtime: 83,
  rated: 'PASSED',
  cast: [
    'Clark Gable',
    'Jean Harlow',
    'Gene Raymond',
    'Mary Astor'
  ],
  num_mflix_comments: 2,
  poster: 'https://m.media-amazon.com/images/M/MV5BOWY4OWMxM2QtOTJmNi00NDJiLTk2MjQtZTJhNmY2MmZkMDgzXkEyXkFqcGdeQXVyNjc0MzMzNjA@._V1_SY1000_SX677_AL_.jpg',
  title: 'Red Dust',
  fullplot: "Conditions are spartan on Dennis Carson's Indochina rubber plantation during a dusty dry monsoon. The latest boat upriver brings Carson an unwelcome guest: Vantine, a floozy from Saigon, hoping to evade the police by a stay upcountry. But Carson, initially uninterested, soon succumbs to Vantine's ostentatious charms...until the arrival of surveyor Gary Willis, ill with malaria, and his refined but sensuous wife Barbara. Now the rains begin, and passion flows like water...",
  languages: [
    'English'
  ],
  released: 1932-10-22T00:00:00.000Z,
  directors: [
    'Victor Fleming'
  ],
  writers: [
    'John Lee Mahin (screen play)',
    'Wilson Collison (from the play by)'
  ],
  awards: {
    wins: 1,
    nominations: 0,
    text: '1 win.'
  },
  lastupdated: '2015-07-13 00:10:45.307000000',
  year: 1932,
  imdb: {
    rating: 7.4,
    votes: 2530,
    id: 23382
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: 2.9,
      numReviews: 8
    },
    production: 'Tower Pictures',
    lastUpdated: 2015-09-15T19:42:56.000Z
  }
}
{
  ],
  runtime: 93,
  rated: 'PASSED',
  cast: [
    'Paul Muni',
    'Ann Dvorak',
    'Karen Morley',
    'Osgood Perkins'
  ],
  num_mflix_comments: 1,
  poster: 'https://m.media-amazon.com/images/M/MV5BYmMxZTU2ZDUtM2Y1MS00ZWFmLWJlN2UtNzI0OTJiOTYzMTk3XkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_SY1000_SX677_AL_.jpg',
  title: 'Scarface',
  fullplot: "Johnny Lovo rises to the head of the bootlegging crime syndicate on the south side of Chicago following the murder of former head, Big Louis Costillo. Johnny contracted Big Louis' bodyguard, Tony Camonte, to make the hit on his boss. Tony becomes Johnny's second in command. Johnny is not averse to killing anyone who gets in his and Johnny's way. As Tony is thinking bigger than Johnny and is not afraid of anyone or anything, Tony increasingly makes decisions on his own instead of following Johnny's orders, especially in not treading on the north side run by an Irish gang led by a man named O'Hara, of whom Johnny is afraid. Tony's murder spree increases, he taking out anyone who stands in his and Johnny's way of absolute control on the south side, and in Tony's view absolute control of the entire city. Tony's actions place an unspoken strain between Tony and Johnny to the point of the two knowing that they can't exist in their idealized world with the other. Tony's ultimate downfall may be one of two women in his life: Poppy, Johnny's girlfriend to who Tony is attracted; and Tony's eighteen year old sister, Cesca, who is self-professed to be older mentally than her years much to Tony's chagrin, he who will do anything to protect her innocence. Cesca ultimately comes to the realization that she is a lot more similar to her brother than she first imagined.",
  languages: [
    'English'
  ],
  released: 1932-04-09T00:00:00.000Z,
  directors: [
    'Howard Hawks',
    'Richard Rosson'
  ],
  writers: [
    'Armitage Trail (novel)',
    'Ben Hecht (screen story)',
    'Seton I. Miller (continuity)',
    'John Lee Mahin (continuity)',
    'W.R. Burnett (continuity)',
    'Seton I. Miller (dialogue)',
    'John Lee Mahin (dialogue)',
    'W.R. Burnett (dialogue)'
  ],
  awards: {
    wins: 2,
    nominations: 0,
    text: '2 wins.'
  },
  lastupdated: '2015-09-03 00:32:16.227000000',
  year: 1932,
  imdb: {
    rating: 7.8,
    votes: 18334,
    id: 23427
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: 3.9,
      numReviews: 25579,
      meter: 86
    },
    dvd: 2007-05-22T00:00:00.000Z,
    critic: {
      rating: 8.7,
      numReviews: 34,
      meter: 100
    },
    lastUpdated: 2015-09-14T19:30:50.000Z,
    rotten: 0,
    production: 'Universal Pictures',
    fresh: 34
  }
}
{
  ],
  num_mflix_comments: 2,
  poster: 'https://m.media-amazon.com/images/M/MV5BMDc3ODRlZDktY2M2MC00Y2UxLWI1MWMtODkyYjI1NzQyNjIwXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SY1000_SX677_AL_.jpg',
  title: 'Shanghai Express',
  fullplot: `Many passengers on the Shanghai Express are more concerned that the notorious Shanghai Lil is on board than the fact that a civil war is going on that may make the trip take more than three days. The British Army doctor, Donald Harvey, knew Lil before she became a famous "coaster." A fellow passenger defines a coaster as "a woman who lives by her wits along the China coast." When Chinese guerillas stop the train, Dr. Harvey is selected as the hostage. Lil saves him, but can she make him believe that she really hasn't changed from the woman he loved five years before?`,
  languages: [
    'English',
    'French',
    'Cantonese',
    'German'
  ],
  released: 1932-02-12T00:00:00.000Z,
  directors: [
    'Josef von Sternberg'
  ],
  writers: [
    'Jules Furthman (screen play by)',
    'Harry Hervey (based on the story by)'
  ],
  awards: {
    wins: 0,
    nominations: 3,
    text: 'Won 1 Oscar. Another 2 nominations.'
  },
  lastupdated: '2015-08-09 00:18:18.943000000',
  year: 1932,
  imdb: {
    rating: 7.5,
    votes: 4288,
    id: 23458
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: 3.9,
      numReviews: 1452,
      meter: 82
    },
    dvd: 1993-10-20T00:00:00.000Z,
    critic: {
      rating: 8.6,
      numReviews: 15,
      meter: 100
    },
    lastUpdated: 2015-09-10T19:14:21.000Z,
    rotten: 0,
    production: 'Paramount Pictures',
    fresh: 15
  }
}
{
  _id: ObjectId('573a1392f29313caabcd9cce'),
  plot: 'John has lead a solitary life for thirty years since the death of Moonyeen Clare. But now Owens, a close friend, insists that he care for his niece, Kathleen, orphaned when her parents were...',
  genres: [
    'Drama',
    'Romance'
  ],
  runtime: 98,
  rated: 'APPROVED',
  cast: [
    'Norma Shearer',
    'Fredric March',
    'Leslie Howard',
    'O.P. Heggie'
  ],
  poster: 'https://m.media-amazon.com/images/M/MV5BNDAyZjgyOTctMmI0OC00NjBhLTk5OGItYWZmMDBjMTMzNjg0XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SY1000_SX677_AL_.jpg',
  title: "Smilin' Through",
  fullplot: "John has lead a solitary life for thirty years since the death of Moonyeen Clare. But now Owens, a close friend, insists that he care for his niece, Kathleen, orphaned when her parents were lost at sea. Kathleen is five, but the years pass and now she is a young woman who is the image of Moonyeen. Willy wants Kathleen for his wife, but Sparks fly when she meets Kenneth Wayne one dark and stormy night. John is horrified for it was Wayne's father who shot Moonyeen dead on her wedding day and John has never found him or forgiven the family. When Ken goes off to war, John forbids any marriage and Ken agrees, while Kathleen does not. When Ken returns four years later when the war is over, he is crippled. He conceals his condition and makes plans to leave for America.",
  languages: [
    'English'
  ],
  released: 1932-09-24T00:00:00.000Z,
  directors: [
    'Sidney Franklin'
  ],
  writers: [
    'Jane Cowl (play)',
    'James B. Fagan (dialogue)',
    'Jane Murfin (play)',
    'Donald Ogden Stewart (dialogue)',
    'Ernest Vajda',
    'Claudine West'
  ],
  awards: {
    wins: 2,
    nominations: 0,
    text: 'Nominated for 1 Oscar. Another 1 win.'
  },
  lastupdated: '2015-04-19 00:49:42.517000000',
  year: 1932,
  imdb: {
    rating: 7,
    votes: 546,
    id: 23488
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: 3.7,
      numReviews: 145,
      meter: 80
    },
    dvd: 1993-12-15T00:00:00.000Z,
    lastUpdated: 2015-07-04T19:20:43.000Z
  }
}
{
  _id: ObjectId('573a1392f29313caabcd9d4a'),
  plot: 'A condemned murderer, in the process of being executed, relives the events that led to his being sentenced to die in the electric chair.',
  genres: [
    'Drama',
    'Thriller'
  ],
  runtime: 67,
  cast: [
    'Edward G. Robinson',
    'Vivienne Osborne',
    'Guy Kibbee',
    'Preston Foster'
  ],
  poster: 'https://m.media-amazon.com/images/M/MV5BZWFjM2JmYjQtODY3YS00M2Q1LTliNjctYmJjOWI0NzUwYjg5XkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_SY1000_SX677_AL_.jpg',
  title: 'Two Seconds',
  fullplot: 'Allen claims he his being executed for the wrong murder. Flashbacks show him working with Clark as a riveter. When he makes a killing on the horses he meets Shirley and gets married. When Clark tells him Shirley is unfaithful they fight and Clark falls to his death. Later he finds that Clark was telling the truth.',
  languages: [
    'English'
  ],
  released: 1932-05-28T00:00:00.000Z,
  directors: [
    'Mervyn LeRoy'
  ],
  writers: [
    'Elliott Lester (play)',
    'Harvey F. Thew (adaptation)'
  ],
  awards: {
    wins: 1,
    nominations: 0,
    text: '1 win.'
  },
  lastupdated: '2015-09-04 00:30:22.147000000',
  year: 1932,
  imdb: {
    rating: 6.9,
    votes: 528,
    id: 23629
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: 3.6,
      numReviews: 105,
      meter: 75
    },
    production: 'Warner Bros.',
    lastUpdated: 2015-08-27T18:01:11.000Z
  }
}
{
  metacritic: 91,
  rated: 'NOT RATED',
  cast: [
    'Tatsuo Saitè',
    'Tomio Aoki',
    'Mitsuko Yoshikawa',
    'Hideo Sugawara'
  ],
  poster: 'https://m.media-amazon.com/images/M/MV5BMzZkOTVjY2MtZDhlMS00MjUyLTkyZWUtZmMzYWY0MTRjNWQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_SX677_AL_.jpg',
  title: 'I Was Born, But...',
  fullplot: "Two young brothers become the leaders of a gang of kids in their neighborhood. Their father is an office clerk who tries for advancement by playing up his boss. When the boys visit the boss' house with their father, they discover that their dad has been making a fool of himself to please his boss, who's son is an outwitted member of the boys' gang. The brothers' revolt claiming that hierarchy should be based on ability, not on social background. Ozu's charming film is a social satire that draws from the antics of childhood as well as the tragedy of maturity.",
  countries: [
    'Japan'
  ],
  released: 1932-06-03T00:00:00.000Z,
  directors: [
    'Yasujirè Ozu'
  ],
  writers: [
    'Akira Fushimi (scenario)',
    'Geibei Ibushiya (adaptation)',
    'Yasujirè Ozu (idea)'
  ],
  awards: {
    wins: 1,
    nominations: 0,
    text: '1 win.'
  },
  lastupdated: '2015-08-20 01:02:13.173000000',
  year: 1932,
  imdb: {
    rating: 8,
    votes: 2967,
    id: 23634
  },
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: 4.1,
      numReviews: 925,
      meter: 90
    },
    dvd: 2008-04-22T00:00:00.000Z,
    critic: {
      rating: 8,
      numReviews: 21,
      meter: 100
    },
    lastUpdated: 2015-08-14T18:49:33.000Z,
    rotten: 0,
    production: 'Janus Films',
    fresh: 21
  }
}
db.movies.countDocuments({year:1932, $or:[{genres:"Drama"}, {languages:"French"}]})
18
db.movies.countDocuments({countries:"USA", awards.win:{$gte:5}, awards.win:{$lte:9}, year:{$gte:2012}, year:{$lte:2014}})
SyntaxError: Unexpected token, expected "," (1:49)

> 1 | db.movies.countDocuments({countries:"USA", awards.win:{$gte:5}, awards.win:{$lte:9}, year:{$gte:2012}, year:{$lte:2014}})
    |                                                  ^
db.movies.countDocuments({countries:"USA", awards.win:{$gte:5, $lte:9}, year:{$gte:2012, $lte:2014}})
SyntaxError: Unexpected token, expected "," (1:49)

> 1 | db.movies.countDocuments({countries:"USA", awards.win:{$gte:5, $lte:9}, year:{$gte:2012, $lte:2014}})
    |                                                  ^
db.movies.countDocuments({countries: "USA", "awards.win": {$gte: 5, $lte: 9}, year: {$gte: 2012, $lte: 2014}})
0
db.movies.countDocuments({countries: ["USA"], "awards.wins": {$gte: 5, $lte: 9}, year: {$gte: 2012, $lte: 2014}})
110
db.movies.find({countries: ["USA"], "awards.wins": {$gte: 5, $lte: 9}, year: {$gte: 2012, $lte: 2014}})
{
  metacritic: 55,
  rated: 'PG',
  cast: [
    'Nicolas Cage',
    'Emma Stone',
    'Ryan Reynolds',
    'Catherine Keener'
  ],
  poster: 'https://m.media-amazon.com/images/M/MV5BMTcyOTc2OTA1Ml5BMl5BanBnXkFtZTcwOTI1MjkzOQ@@._V1_SY1000_SX677_AL_.jpg',
  title: 'The Croods',
  fullplot: "The Croods is a prehistoric comedy adventure that follows the world's first family as they embark on a journey of a lifetime when the cave that has always shielded them from danger is destroyed. Traveling across a spectacular landscape, the Croods discover an incredible new world filled with fantastic creatures -- and their outlook is changed forever.",
  languages: [
    'English'
  ],
  released: 2013-03-22T00:00:00.000Z,
  directors: [
    'Kirk De Micco',
    'Chris Sanders'
  ],
  writers: [
    'Chris Sanders (screenplay)',
    'Kirk De Micco (screenplay)',
    'John Cleese (story)',
    'Kirk De Micco (story)',
    'Chris Sanders (story)'
  ],
  awards: {
    wins: 8,
    nominations: 39,
    text: 'Nominated for 1 Oscar. Another 7 wins & 39 nominations.'
  },
  lastupdated: '2015-09-10 17:45:48.560000000',
  year: 2013,
  imdb: {
    rating: 7.3,
    votes: 134568,
    id: 481499
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    website: 'http://www.thecroodsmovie.com/',
    viewer: {
      rating: 4,
      numReviews: 192270,
      meter: 78
    },
    dvd: 2013-10-01T00:00:00.000Z,
    critic: {
      rating: 6.5,
      numReviews: 134,
      meter: 70
    },
    boxOffice: '$187.2M',
    consensus: 'While it may not be as (ahem) evolved as the best modern animated fare, The Croods will prove solidly entertaining for families seeking a fast-paced, funny cartoon adventure.',
    rotten: 40,
    production: '20th Century Fox',
    lastUpdated: 2015-09-12T17:34:49.000Z,
    fresh: 94
  }
}
{
  _id: ObjectId('573a13bbf29313caabd5271d'),
  plot: 'The story of the 1973 hockey season when aging legend Gordie Howe returned to the ice at the age of 44.',
  genres: [
    'Biography',
    'Drama',
    'Sport'
  ],
  countries: [
    'USA'
  ],
  rated: 'PG',
  cast: [
    'Michael Shanks',
    'Kathleen Robertson',
    'Martin Cummins',
    'Dylan Playfair'
  ],
  num_mflix_comments: 1,
  poster: 'https://m.media-amazon.com/images/M/MV5BMTY1NzkwNDc5MV5BMl5BanBnXkFtZTgwMTg0MTA2MDE@._V1_SY1000_SX677_AL_.jpg',
  title: 'Mr Hockey: The Gordie Howe Story',
  fullplot: 'The story of the 1973 hockey season when aging legend Gordie Howe returned to the ice at the age of 44.',
  languages: [
    'English'
  ],
  released: 2013-05-04T00:00:00.000Z,
  directors: [
    'Andy Mikita'
  ],
  writers: [
    'Malcolm MacRury'
  ],
  awards: {
    wins: 5,
    nominations: 5,
    text: '5 wins & 5 nominations.'
  },
  lastupdated: '2015-09-04 00:02:34.833000000',
  year: 2013,
  imdb: {
    rating: 6.9,
    votes: 529,
    id: 883391
  },
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: 2.2,
      numReviews: 289,
      meter: 23
    },
    dvd: 2009-03-10T00:00:00.000Z,
    website: 'http://www.darkreel.com/',
    production: 'Barhotltz Entertainment',
    lastUpdated: 2015-08-18T18:05:42.000Z
  }
}
{
  year: 2013,
  plot: 'Marcus Luttrell and his team set out on a mission to capture or kill notorious Taliban leader Ahmad Shah, in late June 2005. Marcus and his team are left to fight for their lives in one of the most valiant efforts of modern warfare.',
  genres: [
    'Action',
    'Biography',
    'Drama'
  ],
  rated: 'R',
  metacritic: 60,
  title: 'Lone Survivor',
  lastupdated: '2015-09-04 00:33:33.273000000',
  languages: [
    'English',
    'Pushto'
  ],
  writers: [
    'Peter Berg',
    'Marcus Luttrell (book)',
    'Patrick Robinson (book)'
  ],
  type: 'movie',
  tomatoes: {
    website: 'http://www.lonesurvivorfilm.com/',
    viewer: {
      rating: 4.2,
      numReviews: 111111,
      meter: 87
    },
    dvd: 2014-06-03T00:00:00.000Z,
    critic: {
      rating: 6.6,
      numReviews: 202,
      meter: 75
    },
    boxOffice: '$125.1M',
    consensus: 'A true account of military courage and survival, Lone Survivor wields enough visceral power to mitigate its heavy-handed jingoism.',
    rotten: 50,
    production: 'Universal Studios',
    lastUpdated: 2015-09-10T17:23:29.000Z,
    fresh: 152
  },
  poster: 'https://m.media-amazon.com/images/M/MV5BMjA0NTgwOTk5Ml5BMl5BanBnXkFtZTcwMjE3NDc5OQ@@._V1_SY1000_SX677_AL_.jpg',
  num_mflix_comments: 1,
  released: 2014-01-10T00:00:00.000Z,
  awards: {
    wins: 7,
    nominations: 14,
    text: 'Nominated for 2 Oscars. Another 5 wins & 14 nominations.'
  },
  countries: [
    'USA'
  ],
  cast: [
    'Mark Wahlberg',
    'Taylor Kitsch',
    'Emile Hirsch',
    'Ben Foster'
  ],
  directors: [
    'Peter Berg'
  ],
  runtime: 121
}
{
  title: 'The Lone Ranger',
  lastupdated: '2015-08-31 00:07:58.123000000',
  languages: [
    'English',
    'North American Indian'
  ],
  writers: [
    'Justin Haythe (screenplay)',
    'Ted Elliott (screenplay)',
    'Terry Rossio (screenplay)',
    'Ted Elliott (screen story)',
    'Terry Rossio (screen story)',
    'Justin Haythe (screen story)'
  ],
  type: 'movie',
  tomatoes: {
    website: 'http://disney.go.com/the-lone-ranger/',
    viewer: {
      rating: 3.3,
      numReviews: 136197,
      meter: 51
    },
    dvd: 2013-12-17T00:00:00.000Z,
    critic: {
      rating: 4.9,
      numReviews: 220,
      meter: 31
    },
    boxOffice: '$89.3M',
    consensus: "Armie Hammer and Johnny Depp make for an appealing pair of leads, but they're not enough to make up for The Lone Ranger's bland script, bloated length, and blaring action overkill.",
    rotten: 151,
    production: 'Walt Disney Pictures',
    lastUpdated: 2015-09-16T17:48:13.000Z,
    fresh: 69
  },
  poster: 'https://m.media-amazon.com/images/M/MV5BZjFiMTc2MTAtZDA0My00OGRmLTk5M2ItNTlmYTUwZmU2YmRiXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_SX677_AL_.jpg',
  num_mflix_comments: 1,
  released: 2013-07-03T00:00:00.000Z,
  awards: {
    wins: 6,
    nominations: 19,
    text: 'Nominated for 2 Oscars. Another 4 wins & 19 nominations.'
  },
  countries: [
    'USA'
  ],
  cast: [
    'Johnny Depp',
    'Armie Hammer',
    'William Fichtner',
    'Tom Wilkinson'
  ],
  directors: [
    'Gore Verbinski'
  ],
  runtime: 149
}
{
  },
  year: 2012,
  plot: "While in his teens, Donny fathered a son, Todd, and raised him as a single parent up until Todd's 18th birthday. Now, after not seeing each other for years, Todd's world comes crashing down when Donny resurfaces just before Todd's wedding.",
  genres: [
    'Comedy'
  ],
  rated: 'R',
  metacritic: 31,
  title: "That's My Boy",
  lastupdated: '2015-09-01 00:19:51.270000000',
  languages: [
    'English'
  ],
  writers: [
    'David Caspe'
  ],
  type: 'movie',
  tomatoes: {
    website: 'http://thatsmyboy-movie.com/',
    viewer: {
      rating: 3.2,
      numReviews: 120938,
      meter: 52
    },
    dvd: 2012-10-16T00:00:00.000Z,
    critic: {
      rating: 3.4,
      numReviews: 113,
      meter: 20
    },
    boxOffice: '$36.9M',
    consensus: "While it does represent a new foray into raunch for the normally PG-13 Sandler, That's My Boy finds him repeating himself to diminishing effect - and dragging Andy Samberg down with him.",
    rotten: 90,
    production: 'Sony Pictures',
    lastUpdated: 2015-09-16T17:37:21.000Z,
    fresh: 23
  },
  poster: 'https://m.media-amazon.com/images/M/MV5BMTM3NDMyNzgzMV5BMl5BanBnXkFtZTcwMjIyMTA1Nw@@._V1_SY1000_SX677_AL_.jpg',
  num_mflix_comments: 2,
  released: 2012-06-15T00:00:00.000Z,
  awards: {
    wins: 6,
    nominations: 10,
    text: '6 wins & 10 nominations.'
  },
  countries: [
    'USA'
  ],
  cast: [
    'Adam Sandler',
    'Andy Samberg',
    'Leighton Meester',
    'Vanilla Ice'
  ],
  directors: [
    'Sean Anders'
  ],
  runtime: 116
}
{
    'Dave Franco'
  ],
  poster: 'https://m.media-amazon.com/images/M/MV5BMTc3NzQ3OTg3NF5BMl5BanBnXkFtZTcwMjk5OTcxNw@@._V1_SY1000_SX677_AL_.jpg',
  title: '21 Jump Street',
  fullplot: 'In high school, Schmidt (Jonah Hill) was a dork and Jenko (Channing Tatum) was the popular jock. After graduation, both of them joined the police force and ended up as partners riding bicycles in the city park. Since they are young and look like high school students, they are assigned to an undercover unit to infiltrate a drug ring that is supplying high school students synthetic drugs.',
  languages: [
    'English'
  ],
  released: 2012-03-16T00:00:00.000Z,
  directors: [
    'Phil Lord',
    'Christopher Miller'
  ],
  writers: [
    'Michael Bacall (screenplay)',
    'Michael Bacall (story)',
    'Jonah Hill (story)',
    'Patrick Hasburgh (television series)',
    'Stephen J. Cannell (television series)'
  ],
  awards: {
    wins: 8,
    nominations: 20,
    text: '8 wins & 20 nominations.'
  },
  lastupdated: '2015-09-10 17:13:00.867000000',
  year: 2012,
  imdb: {
    rating: 7.2,
    votes: 369346,
    id: 1232829
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    website: 'http://www.21jumpstreet-movie.com/site/',
    viewer: {
      rating: 4,
      numReviews: 254679,
      meter: 82
    },
    dvd: 2012-06-26T00:00:00.000Z,
    critic: {
      rating: 7.2,
      numReviews: 209,
      meter: 85
    },
    boxOffice: '$138.4M',
    consensus: "A smart, affectionate satire of '80s nostalgia and teen movie tropes, 21 Jump Street offers rowdy mainstream comedy with a surprisingly satisfying bite.",
    rotten: 32,
    production: 'Sony Pictures',
    lastUpdated: 2015-09-12T18:07:46.000Z,
    fresh: 177
  }
}
{
  ],
  runtime: 104,
  metacritic: 65,
  rated: 'R',
  cast: [
    'Daniel Radcliffe',
    'Dane DeHaan',
    'Michael C. Hall',
    'Jack Huston'
  ],
  poster: 'https://m.media-amazon.com/images/M/MV5BMjA4MzAxMTE1N15BMl5BanBnXkFtZTgwMDY2OTIxMDE@._V1_SY1000_SX677_AL_.jpg',
  title: 'Kill Your Darlings',
  fullplot: 'In the early 1940s, Allen Ginsberg is an English major at Columbia University, only to learn more than he bargained for. Dissatisfied by the orthodox attitudes of the school, Allen finds himself drawn to iconoclastic colleagues like Lucien Carr, William S. Burroughs and Jack Kerouac. Together, this gang would explore bold new literary ideas that would challenge the sensibilities of their time as the future Beat Generation. However, for all their creativity, their very appetites and choices lead to more serious transgressions that would mark their lives forever.',
  languages: [
    'English'
  ],
  released: 2013-09-19T00:00:00.000Z,
  directors: [
    'John Krokidas'
  ],
  writers: [
    'Austin Bunn (screenplay)',
    'Austin Bunn (story)',
    'John Krokidas (screenplay)'
  ],
  awards: {
    wins: 5,
    nominations: 11,
    text: '5 wins & 11 nominations.'
  },
  lastupdated: '2015-08-16 00:14:43.400000000',
  year: 2013,
  imdb: {
    rating: 6.5,
    votes: 21501,
    id: 1311071
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    website: 'http://sonyclassics.com/killyourdarlings/',
    viewer: {
      rating: 3.4,
      numReviews: 18331,
      meter: 60
    },
    dvd: 2014-03-18T00:00:00.000Z,
    critic: {
      rating: 6.6,
      numReviews: 131,
      meter: 76
    },
    boxOffice: '$1.0M',
    consensus: 'Bolstered by the tremendous chemistry between Daniel Radcliffe and Dane DeHaan, Kill Your Darlings casts a vivid spotlight on an early chapter in the story of the Beat Generation.',
    rotten: 32,
    production: 'Sony Pictures Classics',
    lastUpdated: 2015-08-20T18:11:41.000Z,
    fresh: 99
  }
}
{
  year: 2012,
  plot: 'A Marine travels to Louisiana after serving three tours in Iraq and searches for the unknown woman he believes was his good luck charm during the war.',
  genres: [
    'Drama',
    'Romance'
  ],
  rated: 'PG-13',
  metacritic: 39,
  title: 'The Lucky One',
  lastupdated: '2015-08-23 00:06:07.030000000',
  languages: [
    'English'
  ],
  writers: [
    'Will Fetters (screenplay)',
    'Nicholas Sparks (novel)'
  ],
  type: 'movie',
  tomatoes: {
    website: 'http://theluckyonemovie.warnerbros.com/index.html',
    viewer: {
      rating: 3.7,
      numReviews: 193308,
      meter: 67
    },
    dvd: 2012-08-28T00:00:00.000Z,
    critic: {
      rating: 4.2,
      numReviews: 141,
      meter: 20
    },
    boxOffice: '$60.4M',
    consensus: 'While it provides the requisite amount of escapist melodrama, The Lucky One ultimately relies on too many schmaltzy clichès to appeal to anyone not already familiar with the Nicholas Sparks formula.',
    rotten: 113,
    production: 'Warner Bros. Pictures',
    lastUpdated: 2015-09-13T18:06:06.000Z,
    fresh: 28
  },
  poster: 'https://m.media-amazon.com/images/M/MV5BMTg5NDk3MjAzMF5BMl5BanBnXkFtZTcwMjUyNzExNw@@._V1_SY1000_SX677_AL_.jpg',
  num_mflix_comments: 3,
  released: 2012-04-20T00:00:00.000Z,
  awards: {
    wins: 6,
    nominations: 7,
    text: '6 wins & 7 nominations.'
  },
  countries: [
    'USA'
  ],
  cast: [
    'Zac Efron',
    'Taylor Schilling',
    'Blythe Danner',
    'Riley Thomas Stewart'
  ],
  directors: [
    'Scott Hicks'
  ],
  runtime: 101
}
{
    'Martin Aleksa',
    'Nima Arkani-Hamed',
    'Savas Dimopoulos',
    'Monica Dunford'
  ],
  poster: 'https://m.media-amazon.com/images/M/MV5BODg3MTM3NTY1OF5BMl5BanBnXkFtZTcwNDg5NTM2OQ@@._V1_SY1000_SX677_AL_.jpg',
  title: 'Particle Fever',
  fullplot: 'As the Large Hadron Collider is about to be launched for the first time, physicists are on the cusp of the greatest scientific discovery of all time -- or perhaps their greatest failure.',
  languages: [
    'English'
  ],
  released: 2014-09-03T00:00:00.000Z,
  directors: [
    'Mark Levinson'
  ],
  awards: {
    wins: 5,
    nominations: 3,
    text: '5 wins & 3 nominations.'
  },
  lastupdated: '2015-09-15 05:15:13.053000000',
  year: 2013,
  imdb: {
    rating: 7.4,
    votes: 4074,
    id: 1385956
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    website: 'http://particlefever.com/',
    viewer: {
      rating: 4,
      numReviews: 4752,
      meter: 84
    },
    critic: {
      rating: 7.9,
      numReviews: 44,
      meter: 95
    },
    boxOffice: '$0.9M',
    consensus: 'The concepts behind its heady subject matter may fly over the heads of most viewers, but Particle Fever presents it in such a way that even the least science-inclined viewers will find themselves enraptured.',
    rotten: 2,
    production: 'BOND360',
    lastUpdated: 2015-08-19T18:28:14.000Z,
    fresh: 42
  }
}
{
  metacritic: 72,
  title: 'Star Trek Into Darkness',
  lastupdated: '2015-09-10 17:46:02.550000000',
  languages: [
    'English',
    'Klingon'
  ],
  writers: [
    'Roberto Orci',
    'Alex Kurtzman',
    'Damon Lindelof',
    'Gene Roddenberry (television series "Star Trek")'
  ],
  type: 'movie',
  tomatoes: {
    website: 'http://www.startrekmovie.com/',
    viewer: {
      rating: 4.2,
      numReviews: 308990,
      meter: 90
    },
    dvd: 2013-09-10T00:00:00.000Z,
    critic: {
      rating: 7.6,
      numReviews: 249,
      meter: 87
    },
    boxOffice: '$228.8M',
    consensus: "Visually spectacular and suitably action packed, Star Trek Into Darkness is a rock-solid installment in the venerable sci-fi franchise, even if it's not as fresh as its predecessor.",
    rotten: 33,
    production: 'Paramount',
    lastUpdated: 2015-09-12T17:20:07.000Z,
    fresh: 216
  },
  poster: 'https://m.media-amazon.com/images/M/MV5BMTk2NzczOTgxNF5BMl5BanBnXkFtZTcwODQ5ODczOQ@@._V1_SY1000_SX677_AL_.jpg',
  num_mflix_comments: 1,
  released: 2013-05-16T00:00:00.000Z,
  awards: {
    wins: 9,
    nominations: 42,
    text: 'Nominated for 1 Oscar. Another 8 wins & 42 nominations.'
  },
  countries: [
    'USA'
  ],
  cast: [
    'Chris Pine',
    'Zachary Quinto',
    'Zoe Saldana',
    'Karl Urban'
  ],
  directors: [
    'J.J. Abrams'
  ],
  runtime: 132
}
{
  _id: ObjectId('573a13c8f29313caabd778e9'),
  plot: 'A reporter returns to his Florida home-town to investigate a case involving a death row inmate.',
  genres: [
    'Drama',
    'Thriller'
  ],
  runtime: 107,
  metacritic: 45,
  rated: 'R',
  cast: [
    'Zac Efron',
    'Matthew McConaughey',
    'Nicole Kidman',
    'John Cusack'
  ],
  poster: 'https://m.media-amazon.com/images/M/MV5BMTcxMzI3OTQ5MF5BMl5BanBnXkFtZTcwMzA0NzcxOA@@._V1_SY1000_SX677_AL_.jpg',
  title: 'The Paperboy',
  fullplot: "Eldest son Ward Jansen is a star reporter for a Miami newspaper and has returned home with close friend Yardley to investigate a racial murder case. Younger brother Jack Jansen has returned home after a failed stint at university as a star swimmer. To help give his life some direction, Ward gives Jack a job on their investigation as their driver. But into the mix comes the fiancèe of the imprisoned convict who stirs up confusing feelings of love and lust for the young Jack. Meanwhile, Ward and Yardley's investigation stirs up deep-rooted issues of race and acceptance which could cause serious consequences for everyone involved.",
  languages: [
    'English'
  ],
  released: 2012-10-17T00:00:00.000Z,
  directors: [
    'Lee Daniels'
  ],
  writers: [
    'Peter Dexter (screenplay)',
    'Lee Daniels (screenplay)',
    'Peter Dexter (based on the novel by)'
  ],
  awards: {
    wins: 6,
    nominations: 11,
    text: 'Nominated for 1 Golden Globe. Another 5 wins & 11 nominations.'
  },
  lastupdated: '2015-09-14 23:47:43.820000000',
  year: 2012,
  imdb: {
    rating: 5.8,
    votes: 26885,
    id: 1496422
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    website: 'http://www.thepaperboy-movie.com/',
    viewer: {
      rating: 2.8,
      numReviews: 16762,
      meter: 33
    },
    dvd: 2013-01-22T00:00:00.000Z,
    critic: {
      rating: 5.1,
      numReviews: 138,
      meter: 43
    },
    boxOffice: '$0.7M',
    consensus: "Trashy and melodramatic, The Paperboy is enlivened by a strong cast and a steamy, sordid plot, but it's uneven and often veers into camp.",
    rotten: 78,
    production: 'Millenium Films',
    lastUpdated: 2015-09-13T18:11:17.000Z,
    fresh: 60
  }
}
{
  _id: ObjectId('573a13c8f29313caabd78900'),
  plot: 'In the Old West, lawmen, drifters, and hired gunman converge on an isolated ranch, believing its Chinese owners possess stolen gold.',
  genres: [
    'Mystery',
    'Thriller',
    'Western'
  ],
  rated: 'R',
  title: 'Heathens and Thieves',
  num_mflix_comments: 1,
  poster: 'https://m.media-amazon.com/images/M/MV5BMjE3NDAwMTQ0NV5BMl5BanBnXkFtZTcwNjIyMDg4Nw@@._V1_SY1000_SX677_AL_.jpg',
  countries: [
    'USA'
  ],
  fullplot: 'In the Old West, lawmen, drifters, and hired gunman converge on an isolated ranch, believing its Chinese owners possess stolen gold.',
  languages: [
    'English'
  ],
  cast: [
    'Andrew Simpson',
    'Gwendoline Yeo',
    'Don Swayze',
    'Richard Doyle'
  ],
  directors: [
    'Megan Peterson',
    'John Douglas Sinclair'
  ],
  writers: [
    'John Douglas Sinclair'
  ],
  awards: {
    wins: 5,
    nominations: 0,
    text: '5 wins.'
  },
  lastupdated: '2015-09-01 00:26:22.787000000',
  year: 2012,
  imdb: {
    rating: 5.1,
    votes: 320,
    id: 1510983
  },
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: 2.4,
      numReviews: 22,
      meter: 25
    },
    lastUpdated: 2015-08-23T18:06:18.000Z
  }
}
{
  ],
  rated: 'R',
  metacritic: 24,
  title: 'Line of Duty',
  lastupdated: '2015-09-14 23:47:41.547000000',
  languages: [
    'English',
    'Spanish'
  ],
  writers: [
    'Bryan Ramirez (screenplay)'
  ],
  type: 'movie',
  tomatoes: {
    website: 'http://www.missionparkfilm.com',
    viewer: {
      rating: 3.7,
      numReviews: 208,
      meter: 59
    },
    dvd: 2013-12-16T00:00:00.000Z,
    critic: {
      rating: 4,
      numReviews: 5,
      meter: 0
    },
    lastUpdated: 2015-09-15T17:44:37.000Z,
    rotten: 5,
    production: 'Armando Montelongo Productions',
    fresh: 0
  },
  poster: 'https://m.media-amazon.com/images/M/MV5BNDAyODQ2MTc1MF5BMl5BanBnXkFtZTgwODA0MjE0MDE@._V1_SY1000_SX677_AL_.jpg',
  num_mflix_comments: 1,
  released: 2013-02-23T00:00:00.000Z,
  awards: {
    wins: 5,
    nominations: 0,
    text: '5 wins.'
  },
  countries: [
    'USA'
  ],
  cast: [
    'Jeremy Ray Valdez',
    'Walter Perez',
    'Fernanda Romero',
    'Will Rothhaar'
  ],
  directors: [
    'Bryan Ramirez'
  ],
  runtime: 100
}
{
  _id: ObjectId('573a13cbf29313caabd7f77a'),
  plot: "After falling in love in Paris, Marina and Neil come to Oklahoma, where problems arise. Their church's Spanish-born pastor struggles with his faith, while Neil encounters a woman from his childhood.",
  genres: [
    'Drama',
    'Romance'
  ],
  runtime: 112,
  metacritic: 58,
  rated: 'R',
  cast: [
    'Ben Affleck',
    'Olga Kurylenko',
    'Rachel McAdams',
    'Javier Bardem'
  ],
  num_mflix_comments: 1,
  poster: 'https://m.media-amazon.com/images/M/MV5BMTAwNzk1NjM2ODZeQTJeQWpwZ15BbWU3MDE1MjQwMjk@._V1_SY1000_SX677_AL_.jpg',
  title: 'To the Wonder',
  fullplot: 'Neil (Ben Affleck) is an American traveling in Europe who meets and falls in love with Marina (Olga Kurylenko), a Ukrainian divorcèe who is raising her 10-year-old daughter Tatiana in Paris. The lovers travel to Mont St. Michel, the island abbey off the coast of Normandy, basking in the wonder of their newfound romance. Neil makes a commitment to Marina, inviting her to relocate to his native Oklahoma with Tatiana. He takes a job as an environmental inspector and Marina settles into her new life in America with passion and vigor. After a holding pattern, their relationship cools. Marina finds solace in the company of another exile, the Catholic priest Father Quintana (Javier Bardem), who is undergoing a crisis of faith. Work pressures and increasing doubt pull Neil further apart from Marina, who returns to France with Tatiana when her visa expires. Neil reconnects with Jane (Rachel McAdams), an old flame. They fall in love until Neil learns that Marina has fallen on hard times. Gripped by a sense of responsibility - and his own crisis of faith - he rekindles with Marina after another trip to France. She returns with him to Oklahoma, resuming her American life. But the old sorrows eventually return.',
  languages: [
    'English',
    'French',
    'Spanish',
    'Italian',
    'Sign Languages',
    'Russian'
  ],
  released: 2013-02-22T00:00:00.000Z,
  directors: [
    'Terrence Malick'
  ],
  writers: [
    'Terrence Malick'
  ],
  awards: {
    wins: 5,
    nominations: 8,
    text: '5 wins & 8 nominations.'
  },
  lastupdated: '2015-09-14 05:38:04.433000000',
  year: 2012,
  imdb: {
    rating: 6,
    votes: 18788,
    id: 1595656
  },
  countries: [
    'USA'
  ],
  type: 'movie'
}
{
  _id: ObjectId('573a13cbf29313caabd81353'),
  plot: 'Go behind the doors of an American public hospital struggling to care for a community of largely uninsured patients.',
  genres: [
    'Documentary'
  ],
  runtime: 81,
  metacritic: 84,
  title: 'The Waiting Room',
  poster: 'https://m.media-amazon.com/images/M/MV5BMTQxMDYwMDM2OF5BMl5BanBnXkFtZTcwMzI3MzcyOA@@._V1_SY1000_SX677_AL_.jpg',
  countries: [
    'USA'
  ],
  fullplot: "The Waiting Room is a character-driven documentary film that uses extraordinary access to go behind the doors of an American public hospital struggling to care for a community of largely uninsured patients. The film - using a blend of cinema veritè and characters' voice over - offers a raw, intimate, and even uplifting look at how patients, executive staff and caregivers each cope with disease, bureaucracy and hard choices. It is a film about fighting for survival when the odds are stacked against you.",
  languages: [
    'English'
  ],
  released: 2014-04-29T00:00:00.000Z,
  directors: [
    'Peter Nicks'
  ],
  rated: 'NOT RATED',
  awards: {
    wins: 5,
    nominations: 4,
    text: '5 wins & 4 nominations.'
  },
  lastupdated: '2015-08-07 00:10:31.240000000',
  year: 2012,
  imdb: {
    rating: 6.9,
    votes: 567,
    id: 1618399
  },
  type: 'movie'
}
{
  _id: ObjectId('573a13ccf29313caabd819c6'),
  plot: 'A small-time magician is swept away to an enchanted land and is forced into a power struggle between three witches.',
  genres: [
    'Adventure',
    'Family',
    'Fantasy'
  ],
  runtime: 130,
  metacritic: 44,
  rated: 'PG',
  cast: [
    'James Franco',
    'Mila Kunis',
    'Rachel Weisz',
    'Michelle Williams'
  ],
  num_mflix_comments: 1,
  poster: 'https://m.media-amazon.com/images/M/MV5BMjMyMzQ1ODM1MF5BMl5BanBnXkFtZTcwMjE2MTQxOQ@@._V1_SY1000_SX677_AL_.jpg',
  title: 'Oz the Great and Powerful',
  fullplot: "Oscar Diggs (James Franco), a small-time circus magician with dubious ethics, is hurled away from dusty Kansas to the vibrant Land of Oz. At first he thinks he's hit the jackpot-fame and fortune are his for the taking. That all changes, however, when he meets three witches, Theodora (Mila Kunis), Evanora (Rachel Weisz), and Glinda (Michelle Williams), who are not convinced he is the great wizard everyone's been expecting. Reluctantly drawn into the epic problems facing the Land of Oz and its inhabitants, Oscar must find out who is good and who is evil before it is too late. Putting his magical arts to use through illusion, ingenuity-and even a bit of wizardry-Oscar transforms himself not only into the great and powerful Wizard of Oz but into a better man as well.",
  languages: [
    'English'
  ],
  released: 2013-03-08T00:00:00.000Z,
  directors: [
    'Sam Raimi'
  ],
  writers: [
    'Mitchell Kapner (screenplay)',
    'David Lindsay-Abaire (screenplay)',
    'Mitchell Kapner (screen story)',
    'L. Frank Baum ("Oz" works)'
  ],
  awards: {
    wins: 6,
    nominations: 30,
    text: '6 wins & 30 nominations.'
  },
  lastupdated: '2015-09-01 00:17:58.333000000',
  year: 2013,
  imdb: {
    rating: 6.4,
    votes: 166093,
    id: 1623205
  },
  countries: [
    'USA'
  ],
  type: 'movie'
}
{
  title: 'Battlestar Galactica: Blood & Chrome',
  fullplot: "The first Cylon war has been raging for 10 years and a young Ensign William Adama joins the fleet. He's disappointed not to be assigned to a fighter but to a freighter. His co-pilot, Lt. Coker Fasjovic, isn't too keen on having a rookie flying his aircraft as he has only a short time before he again becomes a civilian. Their cargo is a civilian scientist, Dr. Becca Kelly, but they no sooner leave than she has new orders for them and a new destination. She is less than forthcoming about just what her secret mission is but Adama is keen, particularly as it involves going into Cylon controlled space. Nothing is as it seems however.",
  languages: [
    'English'
  ],
  released: 2012-11-09T00:00:00.000Z,
  directors: [
    'Jonas Pate'
  ],
  writers: [
    'Michael Taylor (creator)',
    'David Eick (creator)',
    'Michael Taylor (teleplay)',
    'David Eick (story)',
    'Bradley Thompson (story)',
    'David Weddle (story)',
    'Glen A. Larson (creator)'
  ],
  awards: {
    wins: 6,
    nominations: 3,
    text: 'Nominated for 3 Primetime Emmys. Another 3 wins & 3 nominations.'
  },
  lastupdated: '2015-08-18 00:51:35.110000000',
  year: 2012,
  imdb: {
    rating: 7.1,
    votes: 11843,
    id: 1704292
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    website: 'http://bernie-the-movie.com/',
    viewer: {
      rating: 3.7,
      numReviews: 40181,
      meter: 72
    },
    dvd: 2012-08-21T00:00:00.000Z,
    critic: {
      rating: 7.5,
      numReviews: 148,
      meter: 90
    },
    boxOffice: '$5.9M',
    consensus: "Richard Linklater's Bernie is a gently told and unexpectedly amusing true-crime comedy that benefits from an impressive performance by Jack Black.",
    rotten: 15,
    production: 'Millenium Entertainment',
    lastUpdated: 2015-09-14T18:12:50.000Z,
    fresh: 133
  }
}
{
    'Griffin Dunne',
    'Madeleine Martin',
    'Cara Buono',
    'John C. McGinley'
  ],
  poster: 'https://m.media-amazon.com/images/M/MV5BMTg3NDg2NTkzMV5BMl5BanBnXkFtZTgwOTc0ODU3MTE@._V1_SY1000_SX677_AL_.jpg',
  title: 'The Discoverers',
  fullplot: 'A road movie about a dysfunctional family who embark on a Lewis and Clark re-enactment trek and discover themselves and each other in the process.',
  languages: [
    'English'
  ],
  released: 2014-05-16T00:00:00.000Z,
  directors: [
    'Justin Schwarz'
  ],
  writers: [
    'Justin Schwarz'
  ],
  awards: {
    wins: 8,
    nominations: 0,
    text: '8 wins.'
  },
  lastupdated: '2015-09-01 01:08:36.287000000',
  year: 2012,
  imdb: {
    rating: 5.6,
    votes: 300,
    id: 1715876
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    website: 'http://discoverersmovie.com/',
    viewer: {
      rating: 3.5,
      numReviews: 372,
      meter: 61
    },
    critic: {
      rating: 6.2,
      numReviews: 26,
      meter: 88
    },
    lastUpdated: 2015-08-23T18:49:42.000Z,
    consensus: 'The Discoverers is occasionally guilty of contrived silliness, but its humor and genuine warmth are more than enough to compensate for its modest shortcomings.',
    rotten: 3,
    production: 'Quadratic Media',
    fresh: 23
  }
}
{
  year: 2013,
  plot: "Shy 14-year-old Duncan goes on summer vacation with his mother, her overbearing boyfriend, and her boyfriend's daughter. Having a rough time fitting in, Duncan finds an unexpected friend in Owen, manager of the Water Wizz water park.",
  genres: [
    'Comedy',
    'Drama'
  ],
  rated: 'PG-13',
  metacritic: 68,
  title: 'The Way Way Back',
  lastupdated: '2015-09-15 05:15:19.933000000',
  languages: [
    'English'
  ],
  writers: [
    'Nat Faxon',
    'Jim Rash'
  ],
  type: 'movie',
  tomatoes: {
    website: 'http://www.foxsearchlight.com/thewaywayback/',
    viewer: {
      rating: 4,
      numReviews: 54267,
      meter: 84
    },
    dvd: 2013-10-22T00:00:00.000Z,
    critic: {
      rating: 7.3,
      numReviews: 169,
      meter: 85
    },
    boxOffice: '$21.5M',
    consensus: 'Despite its familiar themes, The Way Way Back makes use of its talented cast, finely tuned script, and an abundance of charm to deliver a funny and satisfying coming-of-age story.',
    rotten: 26,
    production: 'Fox Searchlight',
    lastUpdated: 2015-09-16T19:17:36.000Z,
    fresh: 143
  },
  poster: 'https://m.media-amazon.com/images/M/MV5BNTU5ODk5NDg0Nl5BMl5BanBnXkFtZTcwNzQwMjI1OQ@@._V1_SY1000_SX677_AL_.jpg',
  num_mflix_comments: 1,
  released: 2013-07-26T00:00:00.000Z,
  awards: {
    wins: 5,
    nominations: 25,
    text: '5 wins & 25 nominations.'
  },
  countries: [
    'USA'
  ],
  cast: [
    'Steve Carell',
    'Toni Collette',
    'Allison Janney',
    'AnnaSophia Robb'
  ],
  directors: [
    'Nat Faxon',
    'Jim Rash'
  ],
  runtime: 103
}
{
  _id: ObjectId('573a13cff29313caabd8a55e'),
  plot: 'Chris is a psychic who lives his life out of order - experiencing past, present and future as a jigsaw puzzle. But when he commits a murder in the future, he has to change his past and present in order to prevent it from happening.',
  genres: [
    'Sci-Fi',
    'Thriller'
  ],
  countries: [
    'USA'
  ],
  cast: [
    'MacLeod Andrews',
    'Mina Vesper Gokal',
    'Kelly Sullivan',
    'Derek Morgan'
  ],
  poster: 'https://m.media-amazon.com/images/M/MV5BMTAyMzgxODczNDReQTJeQWpwZ15BbWU3MDc3MTc1OTY@._V1_SY1000_SX677_AL_.jpg',
  title: 'Found in Time',
  fullplot: 'Chris is a psychic who lives his life out of order - experiencing past, present and future as a jigsaw puzzle. But when he commits a murder in the future, he has to change his past and present in order to prevent it from happening.',
  languages: [
    'English'
  ],
  released: 2012-10-06T00:00:00.000Z,
  directors: [
    'Arthur Vincie'
  ],
  writers: [
    'Arthur Vincie'
  ],
  awards: {
    wins: 5,
    nominations: 0,
    text: '5 wins.'
  },
  lastupdated: '2015-07-31 00:44:21.037000000',
  year: 2012,
  imdb: {
    rating: 5.5,
    votes: 57,
    id: 1745701
  },
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: 2.7,
      numReviews: 4,
      meter: 33
    },
    dvd: 2014-06-30T00:00:00.000Z,
    lastUpdated: 2015-06-05T19:35:27.000Z
  }
}
Type "it" for more
db.comments.countDocuments({email:{$regex: /@gameofthron\.es$/i}})
22841
db.comments.aggregate([{$match:{email:{$regex: /@gameofthron\.es$/i}}}, {$group: {_id: "$email", total_comments:{$sum:1}}}])
{
  _id: 'emilia_clarke@gameofthron.es',
  total_comments: 269
}
{
  _id: 'aidan_gillen@gameofthron.es',
  total_comments: 291
}
{
  _id: 'anton_lesser@gameofthron.es',
  total_comments: 295
}
{
  _id: 'brian_fortune@gameofthron.es',
  total_comments: 260
}
{
  _id: 'nell_tiger_free@gameofthron.es',
  total_comments: 279
}
{
  _id: 'ron_donachie@gameofthron.es',
  total_comments: 305
}
{
  _id: 'joe_dempsie@gameofthron.es',
  total_comments: 289
}
{
  _id: 'harry_lloyd@gameofthron.es',
  total_comments: 285
}
{
  _id: 'hannah_murray@gameofthron.es',
  total_comments: 265
}
{
  _id: 'jacob_anderson@gameofthron.es',
  total_comments: 276
}
{
  _id: 'kit_harington@gameofthron.es',
  total_comments: 251
}
{
  _id: 'peter_dinklage@gameofthron.es',
  total_comments: 266
}
{
  _id: 'ian_gelder@gameofthron.es',
  total_comments: 267
}
{
  _id: 'michelle_fairley@gameofthron.es',
  total_comments: 259
}
{
  _id: 'dean-charles_chapman@gameofthron.es',
  total_comments: 291
}
{
  _id: 'john_bradley-west@gameofthron.es',
  total_comments: 271
}
{
  _id: 'faye_marsay@gameofthron.es',
  total_comments: 276
}
{
  _id: 'natalia_tena@gameofthron.es',
  total_comments: 271
}
{
  _id: 'paul_kaye@gameofthron.es',
  total_comments: 304
}
{
  _id: 'mark_stanley@gameofthron.es',
  total_comments: 261
}
Type "it" for more
db.comments.aggregate([{$match:{email:{$regex: /@gameofthron\.es$/i}}}, {$group: {email: "$email", total_comments:{$sum:1}}}])
MongoServerError[Location40234]: The field 'email' must be an accumulator object
db.comments.aggregate([{$match:{email:{$regex: /@gameofthron\.es$/i}}}, {$group: {_email: "$email", total_comments:{$sum:1}}}])
MongoServerError[Location40234]: The field '_email' must be an accumulator object
db.comments.aggregate([{$match:{email:{$regex: /@gameofthron\.es$/i}}}, {$group: {_id: "$email", total_comments:{$sum:1}}}])
{
  _id: 'kristian_nairn@gameofthron.es',
  total_comments: 291
}
{
  _id: "brenock_o'connor@gameofthron.es",
  total_comments: 259
}
{
  _id: 'esme_bianco@gameofthron.es',
  total_comments: 273
}
{
  _id: 'ian_beattie@gameofthron.es',
  total_comments: 278
}
{
  _id: 'jerome_flynn@gameofthron.es',
  total_comments: 259
}
{
  _id: 'natalie_dormer@gameofthron.es',
  total_comments: 291
}
{
  _id: 'tom_wlaschiha@gameofthron.es',
  total_comments: 273
}
{
  _id: 'amrita_acharia@gameofthron.es',
  total_comments: 249
}
{
  _id: 'rose_leslie@gameofthron.es',
  total_comments: 273
}
{
  _id: 'michiel_huisman@gameofthron.es',
  total_comments: 272
}
{
  _id: 'rory_mccann@gameofthron.es',
  total_comments: 280
}
{
  _id: 'diana_rigg@gameofthron.es',
  total_comments: 282
}
{
  _id: 'thomas_brodie-sangster@gameofthron.es',
  total_comments: 258
}
{
  _id: 'kristofer_hivju@gameofthron.es',
  total_comments: 284
}
{
  _id: 'ellie_kendrick@gameofthron.es',
  total_comments: 252
}
{
  _id: 'sophie_turner@gameofthron.es',
  total_comments: 308
}
{
  _id: 'stephen_dillane@gameofthron.es',
  total_comments: 266
}
{
  _id: 'jonathan_pryce@gameofthron.es',
  total_comments: 315
}
{
  _id: 'brian_fortune@gameofthron.es',
  total_comments: 260
}
{
  _id: 'emilia_clarke@gameofthron.es',
  total_comments: 269
}
Type "it" for more
db.theatres.aggregate([{$match:{"location.address.state": "DC"}}, {$group:{_id: "$location.address.zipcode",total_theatres: { $sum: 1 }
    }
  },
  {
    $sort: { total_theatres: -1 }
  }
])
{
  _id: '20016',
  total_theatres: 1
}
{
  _id: '20010',
  total_theatres: 1
}
{
  _id: '20002',
  total_theatres: 1
}
db.theatres.aggregate([{$match:{"location.address.state": "DC"}}, {$group:{_id: "$location.address.zipcode", total_theatres:{$sum:1}}}])
{
  _id: '20016',
  total_theatres: 1
}
{
  _id: '20010',
  total_theatres: 1
}
{
  _id: '20002',
  total_theatres: 1
}
db.movies.find({directors: "John Landis", "imdb.rating":{$gte: 7.5, $lte: 8}})
{
  lastupdated: '2015-09-13 00:02:47.803000000',
  languages: [
    'English',
    'Italian'
  ],
  writers: [
    'Harold Ramis',
    'Douglas Kenney',
    'Chris Miller'
  ],
  type: 'movie',
  tomatoes: {
    website: 'http://www.animalhouse.com/',
    viewer: {
      rating: 3.8,
      numReviews: 184490,
      meter: 89
    },
    dvd: 1998-02-24T00:00:00.000Z,
    critic: {
      rating: 7.7,
      numReviews: 46,
      meter: 91
    },
    lastUpdated: 2015-09-13T17:40:34.000Z,
    consensus: "The talents of director John Landis and Saturday Night Live's irrepressible John Belushi conspired to create a rambunctious, subversive college comedy that continues to resonate.",
    rotten: 4,
    production: 'Universal Pictures',
    fresh: 42
  },
  poster: 'https://m.media-amazon.com/images/M/MV5BM2M2ZDA4MTYtOGRjMi00OTg5LWI1ZTUtMjQxZTc2NWZjNDFkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_SX677_AL_.jpg',
  num_mflix_comments: 1,
  released: 1978-07-28T00:00:00.000Z,
  awards: {
    wins: 2,
    nominations: 1,
    text: '2 wins & 1 nomination.'
  },
  countries: [
    'USA'
  ],
  cast: [
    'Tom Hulce',
    'Stephen Furst',
    'Mark Metcalf',
    'Mary Louise Weller'
  ],
  directors: [
    'John Landis'
  ],
  runtime: 109
}
{
  cast: [
    'John Belushi',
    'Dan Aykroyd',
    'James Brown',
    'Cab Calloway'
  ],
  num_mflix_comments: 1,
  poster: 'https://m.media-amazon.com/images/M/MV5BYTdlMDExOGUtN2I3MS00MjY5LWE1NTAtYzc3MzIxN2M3OWY1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_SX677_AL_.jpg',
  title: 'The Blues Brothers',
  fullplot: 'After the release of Jake Blues from prison, he and brother Elwood go to visit "The Penguin", the last of the nuns who raised them in a boarding school. They learn the Archdiocese will stop supporting the school and will sell the place to the Education Authority. The only way to keep the place open is if the $5000 tax on the property is paid within 11 days. The Blues Brothers want to help, and decide to put their blues band back together and raise the the money by staging a big gig. As they set off on their "mission from God" they seem to make more enemies along the way. Will they manage to come up with the money in time?',
  languages: [
    'English'
  ],
  released: 1980-06-20T00:00:00.000Z,
  directors: [
    'John Landis'
  ],
  writers: [
    'Dan Aykroyd',
    'John Landis'
  ],
  awards: {
    wins: 1,
    nominations: 0,
    text: '1 win.'
  },
  lastupdated: '2015-09-01 00:09:39.130000000',
  year: 1980,
  imdb: {
    rating: 7.9,
    votes: 131885,
    id: 80455
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    website: 'http://bluesbrothers.com/',
    viewer: {
      rating: 3.7,
      numReviews: 254544,
      meter: 93
    },
    dvd: 2005-08-30T00:00:00.000Z,
    critic: {
      rating: 7.1,
      numReviews: 52,
      meter: 87
    },
    lastUpdated: 2015-09-13T18:01:41.000Z,
    consensus: "Too over the top for its own good, but ultimately rescued by the cast's charm, director John Landis' grace, and several soul-stirring musical numbers.",
    rotten: 7,
    production: 'Universal Pictures',
    fresh: 45
  }
}
{
    'Horror'
  ],
  rated: 'R',
  metacritic: 60,
  title: 'An American Werewolf in London',
  lastupdated: '2015-09-13 00:39:32.820000000',
  languages: [
    'English'
  ],
  writers: [
    'John Landis'
  ],
  type: 'movie',
  tomatoes: {
    website: 'http://www.americanwerewolf.com',
    viewer: {
      rating: 3.4,
      numReviews: 114093,
      meter: 85
    },
    dvd: 1997-12-09T00:00:00.000Z,
    critic: {
      rating: 7.8,
      numReviews: 46,
      meter: 89
    },
    lastUpdated: 2015-08-19T18:15:04.000Z,
    consensus: "Terrifying and funny in almost equal measure, John Landis' horror-comedy crosses genres while introducing Rick Baker's astounding make-up effects.",
    rotten: 5,
    production: 'Universal Pictures',
    fresh: 41
  },
  poster: 'https://m.media-amazon.com/images/M/MV5BNTYzMDk3MzIyNV5BMl5BanBnXkFtZTgwOTM2OTE4MzE@._V1_SY1000_SX677_AL_.jpg',
  num_mflix_comments: 1,
  released: 1981-08-21T00:00:00.000Z,
  awards: {
    wins: 3,
    nominations: 3,
    text: 'Won 1 Oscar. Another 2 wins & 3 nominations.'
  },
  countries: [
    'UK',
    'USA'
  ],
  cast: [
    'Joe Belcher',
    'David Naughton',
    'Griffin Dunne',
    'David Schofield'
  ],
  directors: [
    'John Landis'
  ],
  runtime: 97
}
{
  _id: ObjectId('573a1398f29313caabce8deb'),
  plot: 'A snobbish investor and a wily street con artist find their positions reversed as part of a bet by two callous millionaires.',
  genres: [
    'Comedy'
  ],
  runtime: 116,
  metacritic: 66,
  rated: 'R',
  cast: [
    'Denholm Elliott',
    'Dan Aykroyd',
    'Maurice Woods',
    'Richard D. Fisher Jr.'
  ],
  poster: 'https://m.media-amazon.com/images/M/MV5BYTEzMjBiMzktMjQyMS00YzBhLTgzNWQtNzA0NmEwMTNmMDQ2XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_SX677_AL_.jpg',
  title: 'Trading Places',
  fullplot: "Louis Winthorpe is a businessman who works for commodities brokerage firm of Duke and Duke owned by the brothers Mortimer and Randolph Duke. Now they bicker over the most trivial of matters and what they are bickering about is whether it's a person's environment or heredity that determines how well they will do in life. When Winthorpe bumps into Billy Ray Valentine, a street hustler and assumes he is trying to rob him, he has him arrested. Upon seeing how different the two men are, the brothers decide to make a wager as to what would happen if Winthorpe loses his job, his home and is shunned by everyone he knows and if Valentine was given Winthorpe's job. So they proceed to have Winthorpe arrested and to be placed in a compromising position in front of his girlfriend. So all he has to rely on is the hooker who was hired to ruin him.",
  languages: [
    'English'
  ],
  released: 1983-06-08T00:00:00.000Z,
  directors: [
    'John Landis'
  ],
  writers: [
    'Timothy Harris',
    'Herschel Weingrod'
  ],
  awards: {
    wins: 4,
    nominations: 4,
    text: 'Nominated for 1 Oscar. Another 3 wins & 4 nominations.'
  },
  lastupdated: '2015-09-12 00:39:03.683000000',
  year: 1983,
  imdb: {
    rating: 7.5,
    votes: 94337,
    id: 86465
  },
  countries: [
    'USA'
  ],
  type: 'movie'
}
db.movies.countDocument({directors: "John Landis", "imdb.rating":{$gte: 7.5, $lte: 8}})
TypeError: db.movies.countDocument is not a function
db.movies.countDocuments({directors: "John Landis", "imdb.rating":{$gte: 7.5, $lte: 8}})
4
cinema


