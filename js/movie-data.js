const films = [
    {
        "name": "The Blair Witch Project",
        "id": "film1",
        "imgPath": "../assets/Movies/blairWitchProject_poster.jpg",
        "imgBan": "../assets/Movies/blairWitchProject_banner.jpg",
        "year":"1999",
        "type": "Mystery",
        "duration": "1h 45m",
        "imdb": "6.4",
        "reels": "3",
        "cast": "Heater Donahue, Joshua Leonard, Michael C. Williams",
        "director": "Eduardo Sánchez, Daniel Myrick",
        "description": "Found video footage tells the tale of three film students (Heather Donahue, Joshua Leonard, Michael C. Williams) who've traveled to a small town to collect documentary footage about the Blair Witch, a legendary local murderer. Over the course of several days, the students interview townspeople and gather clues to support the tale's veracity. But the project takes a frightening turn when the students lose their way in the woods and begin hearing horrific noises.",
        "vidPath": "https://www.youtube.com/embed/a_Hw4bAUj8A",

        "reelRating": "../assets/ratings/reel3.svg",
        "stars": "../assets/stars/star6.svg"
        
    },
    
    {
        "name": "Eternal Sunshine of the Spotless Mind",
        "id": "film2",
        "imgPath": "../assets/Movies/eternalSunshineOfTheSpotlessMind_poster.jpg",
        "imgBan": "../assets/Movies/eternalSunshineOfTheSpotlessMind_banner.jpg",
        "year":"2004",
        "type": "Romance",
        "duration": "1h 48m",
        "imdb": "8.3",
        "reels": "4",
        "cast": "Kate Winslet, Jim Carrey",
        "director": "Michel Gondry",
        "description": "When their relationship turns sour, a couple undergoes a procedure to have each other erased from their memories. But it is only through the process of loss that they discover what they had to begin with.",
        "vidPath": "https://www.youtube.com/embed/GBEke6JixyE",

        "reelRating": "../assets/ratings/reel4.svg",
        "stars": "../assets/stars/star8.svg"
    },

    {
        "name": "What We Do in the Shadows",
        "id": "film3",
        "imgPath": "../assets/Movies/whatWeDoInTheShadows_poster.jpg",
        "imgBan": "../assets/Movies/whatWeDoInTheShadows_banner.jpg",
        "year":"2014",
        "type": "Comedy",
        "duration": "1h 27m",
        "imdb": "7.6",
        "reels": "4",
        "cast": "Jemaine Clement, Taika Waititi, Jonathan Brugh, Cori Gonzalez-Macuer",
        "director": "Taika Waititi, Jemaine Clement",
        "description": "Vampire housemates (Jemaine Clement, Taika Waititi, Jonathan Brugh) try to cope with the complexities of modern life and show a newly turned hipster (Cori Gonzalez-Macuer) some of the perks of being undead.",
        "vidPath": "https://www.youtube.com/embed/IAZEWtyhpes",

        "reelRating": "../assets/ratings/reel4.svg",
        "stars": "../assets/stars/star8.svg"
    },

    {
        "name": "Memento",
        "id": "film4",
        "imgPath": "../assets/Movies/memento_poster.png",
        "imgBan": "../assets/Movies/memento_banner.jpg",
        "year":"2000",
        "type": "Crime",
        "duration": "1h 53m",
        "imdb": "8.5",
        "reels": "5",
        "cast": "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano",
        "director": "Christopher Nolan",
        "description": "Leonard (Guy Pearce) is tracking down the man who raped and murdered his wife. The difficulty, however, of locating his wife's killer is compounded by the fact that he suffers from a rare, untreatable form of memory loss. Although he can recall details of life before his accident, Leonard cannot remember what happened fifteen minutes ago, where he's going, or why.",
        "vidPath": "https://www.youtube.com/embed/0vS0E9bBSL0",

        "reelRating": "../assets/ratings/reel5.svg",
        "stars": "../assets/stars/star9.svg"
    },
    
    {
        "name": "Lady Bird",
        "id": "film5",
        "imgPath": "../assets/Movies/ladyBird_poster.png",
        "imgBan": "../assets/Movies/ladyBird_banner.jpg",
        "year":"2017",
        "type": "Drama",
        "duration": "1h 33m",
        "imdb": "7.4",
        "reels": "4",
        "cast": "Saoirse Ronan, Lucas Hedges, Laurie Metcalf",
        "director": "Greta Gerwig",
        "description": "Marion McPherson, a California nurse, works tirelessly to keep her family afloat after her husband loses his job. She also maintains a turbulent bond with a teenage daughter who is just like her loving, strong-willed and deeply opinionated.",
        "vidPath": "https://www.youtube.com/embed/QlhOnYPPL1Q",

        "reelRating": "../assets/ratings/reel4.svg",
        "stars": "../assets/stars/star7.svg"
    },
    
    {
        "name": "Apocalypse Now Now",
        "id": "film6",
        "imgPath": "../assets/Movies/ApocalypseNowNow_poster.jpg",
        "imgBan": "../assets/Movies/ApocalypseNowNow_banner.jpg",
        "year":"2017",
        "type": "Fantasy",
        "duration": "7m",
        "imdb": "6.9",
        "reels": "3",
        "cast": "Garion Dowds, Louw Venter, Faniswa Yisa",
        "director": "Michael Matthews",
        "description": "Based off a beloved South African fantasy novel this impressive proof-of-concept from rising-star Michael Matthews depicts a snarky, monster-porn-dealing teen dragged headlong into a deep, dark Cape Town underbelly full of monsters and myth.",
        "vidPath": "https://www.youtube.com/embed/c8hK5drJI0c",

        "reelRating": "../assets/ratings/reel3.svg",
        "stars": "../assets/stars/star7.svg"
    },
    
    {
        "name": "The Proposal",
        "id": "film7",
        "imgPath": "../assets/Movies/theProposal_poster.jpg",
        "imgBan": "../assets/Movies/theProposal_banner.jpg",
        "year":"2016",
        "type": "Comedy",
        "duration": "9m",
        "imdb": "7",
        "reels": "3",
        "cast": "Alasdair Mclaughlin, Lois Chimimba, Ben Livingstone, Remy Bazerque",
        "director": "Ian Robertson",
        "description": "A romantic comedy about a couple finding truth, courage and love where they least expected it, underneath their dinner table.",
        "vidPath": "https://www.youtube.com/embed/RFL8b1p1ELY",

        "reelRating": "../assets/ratings/reel3.svg",
        "stars": "../assets/stars/star7.svg"

    },
    
    {
        "name": "Big Fish",
        "id": "film8",
        "imgPath": "../assets/Movies/bigFish_poster.jpg",
        "imgBan": "../assets/Movies/bigFish_banner.jpg",
        "year":"2003",
        "type": "Fantasy",
        "duration": "2h 5m",
        "imdb": "8",
        "reels": "4",
        "cast": "Albert Finney, Billy Crudup",
        "director": "Tim Burton",
        "description": "When Edward Bloom (Albert Finney) becomes ill, his son, William (Billy Crudup), travels to be with him. William has a strained relationship with Edward because his father has always told exaggerated stories about his life, and William thinks he's never really told the truth. Even on his deathbed, Edward recounts fantastical anecdotes. When William, who is a journalist, starts to investigate his father's tales, he begins to understand the man and his penchant for storytelling.",
        "vidPath": "https://www.youtube.com/embed/M3YVTgTl-F0",

        "reelRating": "../assets/ratings/reel4.svg",
        "stars": "../assets/stars/star8.svg"
    },
    
    {
        "name": "Bottle Rocket",
        "id": "film9",
        "imgPath": "../assets/Movies/BottleRocket_poster.png",
        "imgBan": "../assets/Movies/bottleRocket_banner.jpg",
        "year":"1996",
        "type": "Crime",
        "duration": "1h 31m",
        "imdb": "7.1",
        "reels": "3",
        "cast": "Luke Wilson, Owen Wilson, James Caan",
        "director": "Wes Anderson",
        "description": "In Arizona, Dignan 'rescues' his friend Anthony from a voluntary psychiatric unit, where he has been staying for self-described exhaustion. Dignan has an elaborate escape plan and has developed a 75-year plan that he shows to Anthony. The plan is to pull off several heists, and then meet up with a Mr. Henry, a landscaper and part-time criminal known to Dignan.",
        "vidPath": "https://www.youtube.com/embed/hspUSez-rYY",

        "reelRating": "../assets/ratings/reel3.svg",
        "stars": "../assets/stars/star7.svg"
    },
    
    {
        "name": "My Own Private Idaho",
        "id": "film10",
        "imgPath": "../assets/Movies/MyOwnPrivateIdaho_poster.png",
        "imgBan": "../assets/Movies/myOwnPrivateIdaho_banner.jpg",
        "year":"1991",
        "type": "Thriller",
        "duration": "1h 42m",
        "imdb": "7.1",
        "reels": "3",
        "cast": "River Phoenix, Keanu Reeves",
        "director": "Gus Van Sant",
        "description": "Mike, a street hustler, is standing alone on a deserted stretch of highway. He starts talking to himself and notices that the road looks like someone’s face, like a fucked-up face. He experiences a narcoleptic episode and dreams of his mother comforting him as he replays home movies of his childhood in his mind.",
        "vidPath": "https://www.youtube.com/embed/QQbq2kl-P-4",

        "reelRating": "../assets/ratings/reel3.svg",
        "stars": "../assets/stars/star7.svg"
    },
    
    {
        "name": "Requeim for a Dream",
        "id": "film11",
        "imgPath": "../assets/Movies/RequiemForADream_poster.png",
        "imgBan": "../assets/Movies/RequiemForADream_banner.jpg",
        "year":"1991",
        "type": "Adventure",
        "duration": "1h 41m",
        "imdb": "8.3",
        "reels": "4",
        "cast": "Ellen Burstyn, Jared Leto, Jennifer Connelly, Marlon Wayans",
        "director": "Darren Aronofsky",
        "description": "During the summer in Brighton Beach, Brooklyn, widow Sara Goldfarb spends her time watching electrifying infomercials. Meanwhile, her son Harry occasionally pawns her cherished television to fund the recreational drug use of his best friend Tyrone and his loving girlfriend Marion.",
        "vidPath": "https://www.youtube.com/embed/jzk-lmU4KZ4",

        "reelRating": "../assets/ratings/reel4.svg",
        "stars": "../assets/stars/star8.svg"
    },
    {
        "name": "Gummo",
        "id": "film12",
        "imgPath": "../assets/Movies/gummo_poster.png",
        "imgBan": "../assets/Movies/gummo_banner.jpg",
        "year":"1997",
        "type": "Dystopian",
        "duration": "1h 29m",
        "imdb": "6.7",
        "reels": "3",
        "cast": "Jacob Reynolds, Nick Sutton, Jacob Sewell",
        "director": "Harmony Korine",
        "description": "A grainy voiced narrator (Solomon) recounts the events of the tornado while disturbing home-movie images play — mostly of the town's people. A mute adolescent boy, known as Bunny Boy, wears only pink bunny ears, shorts, and tennis shoes on an overpass in the rain.",
        "vidPath": "https://www.youtube.com/embed/4u7UG6n5100",

        "reelRating": "../assets/ratings/reel3.svg",
        "stars": "../assets/stars/star6.svg"
    }, 
    {
        "name": "Boyhood",
        "id": "film13",
        "imgPath": "../assets/Movies/BoyHood_poster.png",
        "imgBan": "../assets/Movies/boyhood_banner.jpg",
        "year":"2014",
        "type": "Drama",
        "duration": "2h 45m",
        "imdb": "7.9",
        "reels": "4",
        "cast": "Patricia Arquette, Ellar Coltrane, Ethan Hawke ",
        "director": "Richard Linklater",
        "description": "In 2002, six-year-old Mason Evans Jr., and his older sister Samantha live with their single mother Olivia in Texas. Mason overhears Olivia arguing with her boyfriend, saying she has no free time due to parenting.",
        "vidPath": "https://www.youtube.com/embed/Ys-mbHXyWX4",

        "reelRating": "../assets/ratings/reel4.svg",
        "stars": "../assets/stars/star8.svg"
    },
    {
        "name": "Napoleon Dynamite",
        "id": "film14",
        "imgPath": "../assets/Movies/NapoleonDynamite_poster.png",
        "imgBan": "../assets/Movies/NapoleonDynamite_banner.jpg",
        "year":"2004",
        "type": "Drama",
        "duration": "1h 35m",
        "imdb": "6.9",
        "reels": "1",
        "reels": "3",
        "cast": "Jon Heder, Jon Gries, Haylie Duff",
        "director": "Jared Hess",
        "description": "Napoleon Dynamite is a socially awkward 16-year-old boy from Preston, Idaho, who lives with his older brother, Kipling Ronald 'Kip' Dynamite. Kip, 32, is unemployed and boasts of spending hours in Internet chat rooms with 'babes and aspiring to be a cage fighter. Napoleon daydreams his way through school, doodling ligers and fantasy creatures, and reluctantly deals with the various bullies who torment him, particularly the obnoxious sports jock, Don. Napoleon likes to make up stories about himself while having a sullen and aloof attitude.",
        "vidPath": "https://www.youtube.com/embed/ZHDi_AnqwN4",

        "reelRating": "../assets/ratings/reel3.svg",
        "stars": "../assets/stars/star7.svg"
    },
    
    {
        "name": "Drugstore Cowboy",
        "id": "film15",
        "imgPath": "../assets/Movies/DrugstoreCowboy_poster.png",
        "imgBan": "../assets/Movies/drugstoreCowboy_banner.jpg",
        "year":"1989",
        "type": "Crime",
        "duration": "1h 42m",
        "imdb": "7.4",
        "reels": "2",
        "cast": "Matt Dillion, Kelly Lynch",
        "director": "Gus Van Sant",
        "description": "Bob Hughes is the leader of a crew of drug addicts consisting of him, his wife, Dianne, his best friend, Rick, and Rick's girlfriend, a teenager named Nadine. Together, they travel across the U.S. Pacific Northwest in 1971, supporting their drug habits by robbing pharmacies and hospitals.",
        "vidPath": "https://www.youtube.com/embed/5_Rs8c08hM8",

        "reelRating": "../assets/ratings/reel2.svg",
        "stars": "../assets/stars/star7.svg"
    },
    
    {
        "name": "Slacker",
        "id": "film16",
        "imgPath": "../assets/Movies/Slacker_poster.png",
        "imgBan": "../assets/Movies/slacker_banner.jpg",
        "year":"1991",
        "type": "Comedy",
        "duration": "1h 40m",
        "imdb": "7.1",
        "reels": "3",
        "cast": "Richard Linklater, Kim Krizan, Mark James",
        "director": "Richard Linklater",
        "description": "Slacker is a uniquely structured and seemingly plotless film, following a single day in the life of an ensemble of mostly under-30 bohemians and misfits in Austin, Texas. The film follows various characters and scenes, never staying with one character or conversation for more than a few minutes before picking up someone else in the scene and following them.",
        "vidPath": "https://www.youtube.com/embed/KlmfRuXxuXo",

        "reelRating": "../assets/ratings/reel3.svg",
        "stars": "../assets/stars/star7.svg"
    },
    
    {
        "name": "Donnie Darko",
        "id": "film17",
        "imgPath": "../assets/Movies/DonnieDarko_poster.png",
        "imgBan": "../assets/Movies/donniedarko_banner.jpeg",
        "year":"2001",
        "type": "Sci-Fi",
        "duration": "2h 14m",
        "imdb": "8.1",
        "reels": "4",
        "cast": "Jake Gyllenhall, Jena Malone, Drew Barrymore",
        "director": "Richard Kelly",
        "description": "On October 2, 1988 Donnie Darko, a troubled teenager living in the town of Middlesex, Virginia, sleepwalks outside and meets a figure in a monstrous rabbit costume, who introduces himself as 'Frank' and tells him the world will end in 28 days, 6 hours, 42 minutes, and 12 seconds. At dawn, Donnie returns home to find a jet engine has crashed into his bedroom. His older sister, Elizabeth, informs him that the FAA investigators do not know where it came from.",
        "vidPath": "https://www.youtube.com/embed/ZZyBaFYFySk",

        "reelRating": "../assets/ratings/reel4.svg",
        "stars": "../assets/stars/star8.svg"
    },
    
    {
        "name": "Pulp Fiction",
        "id": "film18",
        "imgPath": "../assets/Movies/PulpFiction_poster.png",
        "imgBan": "../assets/Movies/pulpFiction_banner.jpg",
        "year":"1994",
        "type": "Crime",
        "duration": "2h 34m",
        "imdb": "8.9",
        "reels": "5",
        "cast": "John Travolta, Samuel L. Jackson, Uma Thurman",
        "director": "Quentin Tarantino",
        "description": "Hitmen Jules Winnfield and Vincent Vega arrive at the apartment of Brett to retrieve a briefcase for their boss, gangster Marsellus Wallace. After Vincent checks the contents of the briefcase, Jules shoots one of Brett's associates, then declaims a passage from the Bible before he and Vincent kill Brett. They take the briefcase to Marsellus, but have to wait while he bribes champion boxer Butch Coolidge to take a dive in his upcoming match.",
        "vidPath": "https://www.youtube.com/embed/ewlwcEBTvcg",

        "reelRating": "../assets/ratings/reel5.svg",
        "stars": "../assets/stars/star9.svg"
    },
    
    {
        "name": "Sex, Lies, and Videotape",
        "id": "film19",
        "imgPath": "../assets/Movies/SexLiesAndVideotape_poster.png",
        "imgBan": "../assets/Movies/sexLiesAndVideotape_banner.jpg",
        "year":"1989",
        "type": "Drama",
        "duration": "1h 40m",
        "imdb": "7.2",
        "reels": "3",
        "cast": "James Spader, Andy McDowell, Peter Gallagher",
        "director": "Steven Soderbergh",
        "description": "Ann Bishop Mullany lives in Baton Rouge. She is unhappily married to John, a successful lawyer, and has never experienced an orgasm. She is in therapy. Graham Dalton is an old college friend of John. He is now a seeming drifter who, after nine years, returns to live in Baton Rouge. Graham arrives to find Ann, who has no idea that John has invited Graham to stay with them until he finds an apartment. When John arrives home, Graham's demeanor becomes remarkably more guarded, due in large part to John's overt disapproval of Graham's bohemian persona. They also discuss the fact that Graham's college girlfriend, Elizabeth, is also living in Baton Rouge.",
        "vidPath": "https://www.youtube.com/embed/O-NAG4aJe1U",

        "reelRating": "../assets/ratings/reel3.svg",
        "stars": "../assets/stars/star7.svg"
    },
    
    {
        "name": "Safety Not Guaranteed",
        "id": "film20",
        "imgPath": "../assets/Movies/SafetyNotGuaranteed_poster.png",
        "imgBan": "../assets/Movies/safetyNotGuaranteed_banner.jpg",
        "year":"2012",
        "type": "Sci-Fi",
        "duration": "1h 26m",
        "imdb": "7",
        "reels": "2",
        "cast": "Aubery Plaza, Jeff Garlin, Jake Johnson",
        "director": "Colin Trevorrow",
        "description": "Darius Britt is a disillusioned college graduate who lives at home with her widower father and interns at Seattle Magazine. One of the magazine's writers, Jeff Schwense, proposes to investigate a newspaper classified ad that reads...",
        "vidPath": "https://www.youtube.com/embed/73jSnAs7mq8",

        "reelRating": "../assets/ratings/reel2.svg",
        "stars": "../assets/stars/star7.svg"
    }
    


];
