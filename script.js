const bannedWords = [
    "niga", "nigga", "niggers", "ꓠꓲꓖꓖꓰꓣꓢ", "tayo ay nasa fine dining", "bugoy na koykoy",
    "denise julia", "red note", "rednote", "kendrick lamar", "drake", "katseye", "san chai",
    "lakers", "san cai", "barbie hsu", "meteor garden", "pagsusulit", "diagnostic test",
    "mini test", "ly/", "forms.gle", "craigslist", "gpt", "gizmoapp", "gizmo app", "Mahjong Wins",
    "Berikut", "Battleground Royale", "Leprechaun Riches", "IDETOTO", "ChoiW", "•••••", "⁠╹⁠▽⁠╹",
    "pentobarbitol", "nembutal", "whats@pp", "oxydrhere", "rcacye", "malayaako.ph.com",
    "malayaako.ph", "crystal meth", "cocaine", "fentanyl", "ketamine", "aiteacher",
    "aiteacher.com", "apateu", "FOLLOW M3", "Unichain", "zerion", "Schiller",
    "Criminal Law Division", "The Danger of Nuclear War Is Real", "language learning model",
    "scribd", "the tesla cybertruck is an all electric", "text-based AI", "gawk 3000", "gawk 2000",
    "gawk gawk", "wesley guo", "Sheila guo", "용", "소", "个", "chloe san", "bini Sheena",
    "bini Mikha", "bini Stacey", "bini Gwen", "bini Aiah", "bini Jhoanna", "bini colet",
    "bini maloi", "人", "文", "又", "Miles Guo", "只", "angelica poquiz", "Joriel yulo",
    "angelica yulo", "jual", "cyt0", "Guo Wengu", "sabrina carpenter", "Fß", "hontivirus",
    "b r a i n l", "brainlest", "skibid", "biden or trump", "trump or biden", "Kin Ming Je",
    "washington farm", "guo farm", "Gu Wengui", "chinita", "new china federation", "xi farm",
    "Guo Wengui", "Kwok scam", "Wengui Guo", "WenguiGuo", "vipvip", "VIPVIP", "Call girls",
    "*Call", "☏", "!girls", "#girls", "@Girls", "call girl", "brain les", "need anser",
    "need answer", "report nonsens", "kimia farma", "menggugurkan", "OBAT PENDORONG",
    "OBAT PENGGUGUR", "obat tidur", "obat bius", "apotik", "jual obat", "obat aboris",
    "misoprostol", "cyto tec", "cytotec", "abortion pills", "cbat", "dick", "ryu jun", "kyline",
    "mavy", "m@via", "heros of mavia", "heroes of mavia", "n!fty", "nifty island", "han so hee",
    "my vlog", "Ptafttasak", "quiboloy", "donbel", "maris racal", "bea alonzo", "congtv",
    "cong tv", "viy", "SAPPINES", "MAXWIN", "k!ffy", "kiffy", "k1ffy", "INFINI88", "DATUK168",
    "tyronia", "kangkong chips", "mojica", "name the song", "name this song", "chapa", "chipi",
    "chappa", "chippi", "herlene", "answer key", "de punggol", "di punggol", "pls answer",
    "pa sagot", "bea borres", "help help", "help naman", "po please", "need it na", "pa help",
    "catnel", "cathniel", "kathnel", "k@th", "kagayaku", "bernadette smith", "bernadeth smith",
    "kim chu", "christian gaza", "xian lim", "xtian gaza", "rosmar", "otnis", "dj padilla",
    "dj supremo", "supremo", "daniel padilla", "d padilla", "kath bernardo", "kathryn bernardo",
    "kath niel", "deej", "kathniel", "call me daddy", "text-based AI model", "pray for israel",
    "my tiktok", "my youtube", "pinoybidyologs", "pamigay points", "pamigay pt", "libreng pt",
    "libreng points", "maderch0d", "maderchud", "maaderchod", "maderchod", "beshi", "beshy",
    "mwah", "need na nga", "need it now", "need now", "answer=report", "need the answer",
    "answer now", "┻⁠", "°⁠□⁠°", "performance task", "3ssay", "ess@y", "essay",
    "quarterly assessment", "quarterly exam", "quarter exam", "death spell", "revenge spell",
    "love spell", "reaction paper", "love potion", "tangena", "ㅎ", "ㅍ", "ㅌ", "ㅋ", "ㅊ", "ㅉ", "ㅈ",
    "ㅇ", "ㅆ", "ㅅ", "ㅃ", "ㅂ", "ㅁ", "ㄹ", "ㄸ", "ㄷ", "ㄴ", "ㄲ", "ㄱ", "tanginang", "shawra", "sksk",
    "kwk", "brianlest", "brainlist", "web organizer", "graphic organizer", "nonsense=report",
    "nonsense answer=report", "Non sense answer = report​", "break kami", "break na kami",
    "break na sila", "malande", "malandi", "meuguru", "yuck fou", "byju", "coursehero", "quizlet",
    "gautmath", "fesbook", "fesbuk", "giatay", "scandal", "how to unalive", "how to die",
    "i hate my", "engot", "i'll kill", "i h@t3", "i h@te", "i hate you", "powta", "unalive",
    "magsuicide", "#russia", "#pray", "sa pts", "sa point", "1na", "aprille flores", "pakamatay",
    "jimin", "changeoil", "hi hi", "G.O.O.G.L.E M.E.E.T", "pucha", "8 ballin", "8ballin",
    "tsing tsong", "ilan taon ka", "ang sarap mo", "sh@", "shaboo", "shabu", "putres", "taragis",
    "download this app", "invitation code", "invite code", "gauth", "g00gle", "ka duo", "kaduo",
    "f r e", "free free", "FR€€", "fcck", "brainles", "your @", "snaptube", "snapchat", "bretman",
    "bella poarch", "team payaman", "rkl", "skl", "tsupa", "spoken poetry", "shawtawt", "shoutout",
    "jam magno", "yellowturd", "yellowtard", "guison", "0 points", "freepoint", "fake friends",
    "bich na peke", "mama oni", "toni fowler", "hail hitler", "heil hitler", "libtard",
    "tay digong", "leni lugaw", "qaqo", "pinklawan", "dilawan", "fake vp", "mamatay ka na",
    "mamatay na ka", "ko na mamatay", "how to suicide", "kill yu", "pw3t", "pwet",
    "for todays video", "for today's video", "welcome to my vlog", "ivana alawi", "kingina",
    "ki.ng", "jutay", "juts", "daks", "pak na pak", "yyy", "ggg", "chat.site", "gacha", "xxx",
    "bang.tan", "bangtan", "u c k", "gag0", "gago", "ogag", "futa", "karat", "malay ko",
    "aba malay", "pu ke", "❤️​", "t3st", "test 1", "pre test", "pre-test", "reflextion",
    "sagot kaagad", "paanswer", "pa answer", "pahelp", "iyong repleksiyon", "aking repleksiyon",
    "research paper", "a m o", "i n a m", "p0t", "txanga", "fxu", "frontrowoffi", "coinmaster",
    "birdy", "birdie", "yubo.live", "qanda", "g-board", "gboard", "g-clip", "gclip", "clipclaps",
    "who wants to earn", "website.cc", "sino ang naglalar", "sinong naglalar", "sino naglalar",
    "freefire", "pubg", "hackdo", "xvideo", "inaniyo", "inanyo", "rapein", "rape-in", "rape ka",
    "rape you", "i will kill you", "i want to die", "mama mo", "phub", "fokfok", "ukinna",
    "ptangina", "salamat shop", "shopee", "bugak", "uhuh", "po rn", "bugoc", "bugok", "hinayupak",
    "fff", "uhm", "lll", "pussi", "pussy", "possey", "posseh", "shoti", "shawty", "helpp", "plz",
    "answer fast", "dnt kn", "coco martin", "cocomelon", "cantot", "cantut", "iyot", "prnhub",
    "t.a.n.g.i.n.a", "p.u.t.a.n.g.i.n.a", "bakudev", "earn crypt", "p0t3", "h3ntai", "hentai",
    "anim3", "anime", "amp0", "boboh", "thang ina", "ggagg", "vuvu", "vovu", "luv u", "babe",
    "i love u", "i luv", "i love you", "lab yu", "lab you", "ulul", "Cúm", "hórny", "fück", "fùck",
    "fck", "math/way", "math way", "mathway", "instagram.com", "follow me on", "tamud",
    "lande nyo", "landi nyo", "lande niyo", "lande mo", "landi niyo", "landi mo", "tamad mo",
    "tamad ka", "b@d", "trop@", "bading", "accla", "tropahin", "d!ck", "dicc", "dck", "sx", "gw@",
    "pogi", "gwap0", "gwapo", "cutie", "cut3", "kyut", "bitcc", "f@k", "asshole", "a s s", "facc",
    "nigg@", "gayshit", "i y o t", "b o b o", "f u c", "s h i t", "Yotninam", "ampotek", "potec",
    "Ukinina", "joke lang", "depota", "diputs", "diputa", "deputa", "hakd", "sex vid", "p/st",
    "p1st", "fisting", "piste", "crinushback", "crush back", "crushback", "crashback", "y@w",
    "yawa", "pisti", "buwang", "buang", "naruto", "uzumaki", "ricci rivero", "mia khalifa",
    "webcomic", "jo.wa", "s2pid", "stoopid", "stoped", "stupid", "s2pd", "beyblade", "kab3t",
    "kabet", "bf", "tongue ina", "iyut", "u10", "hatdig", "jaja", "follow nyo", "follow niyo",
    "follow me", "ñema", "nyeta", "ñeta", "number mo", "joke lng", "jokla", "bwisit", "bwesit",
    "bwect", "bwict", "bwiset", "bwst", "bwct", "w.t.f", "wtf", "chaka", "ka chat", "ka-chat",
    "who wants chat", "meeting id", "google meets", "zoom meeting id", "zoom id", "passcode",
    "punyemes", "putreska", "nyem@", "nyemas", "potaka", "padelete", "g cash", "images.app",
    "goo.gl", "the hulk", "batman", "superman", "antman", "spiderman", "ironman", "the avengers",
    "zendaya", "johnny depp", "ny sins", "johnny sins", "amber heard", "th!cc", "thicc", "f@t",
    "fatso", "fatty", "ugli", "dummy", "rizz", "xd", "bb k", "bby q", "bb q", "baby ko", "duhh",
    "dkopo", "h@r", "h@r0t", "charot", "bl@h", "blabla", "blah blah", "tikt", "t1kt", "titok",
    "p00p", "poop", "n00b", "noob", "paramore", "eyy", "ayy", "oyy", "ha ha", "matt healy",
    "h!nd0t", "hindot", "hihihi", "bwaha", "tikfans", "sht", "shd", "dwow", "hakdok", "noodz",
    "bhi3", "bhie", "sana all", "sanaoil", "sanaol", "dsad", "feet pic", "onlifuns", "onlypans",
    "onlypuns", "onlyfans", "puckyou", "puckyu", "fb", "pafollow", "dawg", "whatsapp", "viber",
    "sa tg", "tg/me", "discord.gg", "edi kaw", "edi ikaw", "share mo lng", "share mo lang",
    "spill the tea", "marites", "tanong mo sa", "oooo", "ssss", "tarantad", "ahha", "searchmo",
    "send pic", "send noo", "send nud", "nudes", "b00bs", "boobs", "s@l", "salsal", "pa mor",
    "pamore", "best president", "robredog", "delawan", "anyare", "wawawa", "ewan namin", "ewan ko",
    "e1 q", "dnt care", "dont know", "diko alam", "dikolam", "di ko alam", "i dont kn",
    "im not sure", "boboka", "pakimo", "pakemo", "tatamad nyo", "tatamad niyo", "mmm", "hjh",
    "vovo", "vuvo", "taena", "t@e", "taen@", "ex@m", "ex.am", "#brainl", "#carry", "neeed asap",
    "reflection paper", "quarterly test", "summative test", "summative exam", "test i", "quiz",
    "sagot asap", "pasagot po", "need asap", "goo.gle", "goo/gle", "googl3", "just google",
    "go.ogle", "go0gle", "google mo", "search mo", "check google", "kapal ng mu", "kvpal", "kup@l",
    "koopal", "kupal", "labyou", "labyu", "sakalam", "st. donna", "st donna", "uwu", "ow@", "jowa",
    "dyowa", "dyoga", "dede", "d3d3", "wh@mos", "whamos", "z3inab", "harake", "donna bartolome",
    "zeinab", "selfi3", "s3lf", "selfie", "mukbang", "tanga ny", "tanga ni", "cp mo", "cp reveal",
    "pet reveal", "phone reveal", "face reveal", "tanga ako", "tanga ko", "tanga mo", "tanga ka",
    "mga tanga", "p3ng", "fr33", "freee", "free pt", "libre pt", "libreng pu", "libre point",
    "free points", "freepoints", "tqng", "akdug", "akdog", "hanep", "hayuf", "fvck", "kkrt",
    "skrt", "♡", "f0t", "fota", "p0t@", "dep0ta", "meet.app", "buzzbreak", "shopback", "cashback",
    "olivia rodrigo", "eilish", "halsey", "photomath", "photo/math", "photo math", "fotomath",
    "add mo ko", "chat mo", "caht", "call/me", "d@ddy", "sugar dd", "suga dd", "suga baby",
    "sugabby", "sugar baby", "sugah", "sugar mommy", "sugar daddy", "cash papa", "s3xt", "sext",
    "t3xt", "ch@t", "chat ta", "h0w 0ld", "anong school", "an0ng school", "how old are you",
    "how old are u", "text me", "///", "pink ven0m", "pink venom", "ariana grande", "swiftie",
    "taylor swift", "beiber", "pewdiepie", "rastaman", "andrew tate", "alllivesmatter", "ukenam",
    "ukinam", "kininam", "putang", "p00", "add as brainliest", "mark as brainliest", "♥",
    "youtu.be", "ass. hole", "ass/hole", "butt/hole", "butthole", "booboo", "not sure",
    "di ka sure", "di ko sure", "di ako sure", "di sure", "magaral ka kasi", "mag-aral ka kasi",
    "makinig kasi kayo", "i don't care", "i don't know", "i don't have access to the exact data",
    "not able to provide up-to-date", "as an AI", "as a text-based AI", "i am a text-based AI",
    "cannot provide an answer", "need more information about your question",
    "i'm not sure what you mean", "wiki", "quora", "chegg", "slideshare", "!!", "??", "ghgh",
    "lmao", "idc", "idk", "tuli ka", "may tulu", "may tulo", "tule ka", "tule na", "tuli na",
    "jakul", "dyakool", "dyakul", "jacool", "dyakol", "j@c", "j@k", "jakol", "jkl", "pofsex",
    "aaaa", "hhh", "ggwp", "gonewild", "phgw", "alasjuicy", "fetlife", "f3t", "fetish", "MIR4",
    "clash of clans", "mine cr@ft", "mine craft", "minecraft", "robux", "m0bile legends",
    "mobile legends", "amogus", "pokemon", "puke", "puki", "pukemon", "spirejoy", "k@i", "h0n",
    "honkai", "moonton", "@pex legends", "apex legends", "l0r", "r@nt", "val0rant", "v@lorant",
    "valorant", "fortnite", "f0rtnite", "genxhin", "genshin", "call of duty", "free fire", "L0L",
    "league of legends", "ragnarok m", "d0t", "dota", "d0t@", "bl0x", "r0b", "roblox", "jajaja",
    "jeje", "hehehe", "pakarat", "k@r", "h@h", "hahaha", "jk", "bayot", "bayut", "blyat", "bylat",
    "cyka", "bahog", "bahug", "blat bahog", "bilat", "web.facebook", "download-full-free",
    "download-free", "kantut", "xnxx", "2tnac", "2tnak", "totnak", "kan2", "c@n", "k@n", "k@ntot",
    "can210", "kantutin", "kan210", "redtube", "n1gg", "sh1t", "sh it", "shet", "shyet",
    "beeyotch", "beeyatch", "biach", "btch", "bi tch", "biatch", "bhad", "FA CKIN", "FU CKIN",
    "hoeland", "l-i-v-e", "-live-", "/live", "/stream", "murica", "s.t.f.u", "stfu", "en-us/",
    "add me", "add mo ako", "bitxh", "pbb", "com/dl", "com/download", "com/play", "com/stream",
    "com/watch", "badbaby", "site/facilities", "contact me", "send me", "/contact", "/webform",
    "league-online", "youporn", "xvideos", "game-free", "steam.com", "online-game", "games free",
    "free-game", "free game", "netflix and chill", "-tv", "in@", "y@m", "kudasai", "yamete",
    "tsundere", "yandere", "yaoi", "manhwa", "watch-free", "free-watch", "rate mo", "pa rate",
    "pa-rate", "rate my", "rate me", "ang cute", "cute ko", "cute mo", "cute ng", "grindr", "epbi",
    "efbi", "fb.com", "facebook.com", "on fb", "sa fb", "fb account", "follow back", "tik tok",
    "tiktok", "pinterest.com", "send gcash", "send load", "subscribe my", "subscribe to my",
    "yt channel", "500px", "last.fm", "episode-hd", "stream-episode", "episode-online",
    "stream-hd", "watch-on", "123movies", "tv-online", "online-tv", "tv-free", "cornhub",
    "pornhub", "english-subtittles", "english-subtitles", "f@c", "p@k", "g@g", "gagu", "gaggers",
    "ghetto", "jennie", "loona", "joon", "bts", "black pink", "blink army", "army blink",
    "blackpink", "free-tv", "stream-direct", "stream direct", "direct-stream",
    "d.i.r.e.c.t-s.t.r.e.a.m.i.n.g", "boom pan", "pak ganern", "edi wow", "movie-free",
    "free-online", "online-free", "movie-online-free", "full-movie", "hd-movie", "movie-hd",
    "movie-full-hd", "live-online-fight", "stream-movie", "online-movie", "online-full-movie",
    "live-stream", "live stream", "livestream", "patuli", "namuka", "namoka", "inamo", "inaneto",
    "patotoy", "shit", "pacute", "pakyo", "pakyu", "wirdo", "wirdu", "weirdo", "boner", "bonehead",
    "boorat", "buraot", "tumbong", "tukmol", "walang kwenta", "walang hiya", "walang silbi",
    "walang utak", "chupain", "tsupain", "bayag", "burat", "burat ko", "burat mo", "bayag ko",
    "bayag mo", "titi ko", "chupa", "tight-arse", "tight-ass", "tikol", "tamod", "tanga",
    "tang ina", "obob", "tarantado", "enaneto", "sucker", "suckass", "son-of-a-bitch",
    "son of a bitch", "smart-ass", "smart-arse", "slag", "skank", "sisipain ko bayag mo",
    "sira ang ulo", "sipsipin mo ang titi ko", "shmuck", "schmuck", "sandnigger", "sand nigger",
    "puwet", "pututuy", "putang ina nyo", "putang ina mo", "punyeta", "Puki ng Ina Mo", "puke mo",
    "prosti", "pokpok", "piss off", "piece of shit", "pangit", "pakshet", "pain in the ass",
    "nutsack", "naninigas ang titi ko", "Nak Ng Pu", "malintong", "titi mo", "maliit ang titi mo",
    "malibo", "malibog", "malaki ang susu mo", "magkantutan tayo", "lintek ka", "Kantot",
    "junglebunny", "jungle bunny", "jizz", "jerk", "jackass", "inutil", "inutel", "ignorante",
    "horny", "hooker", "fucker", "dipshit", "wack", "tit", "tae", "scab", "retard", "Puki",
    "prick", "poo", "piss", "perver", "nigger", "motherfuck", "lesb", "kunt", "kiki", "joga",
    "Gago", "Gaga", "fuck", "fag", "ebak", "dumb", "dum", "douche", "dork", "cunt", "cum", "creep",
    "cock", "clit", "butt", "booze", "bobo", "bitch", "bimbo", "bastard", "ass", "arse", "airhead"
];

const symbolData = [
    { char: 'À', base: 'a' }, { char: 'Á', base: 'a' }, { char: 'à', base: 'a' }, { char: 'á', base: 'a' }, { char: 'â', base: 'a' },
    { char: 'Ḃ', base: 'b' }, { char: 'Ḅ', base: 'b' }, { char: 'ḃ', base: 'b' }, { char: 'ḅ', base: 'b' }, { char: 'ḇ', base: 'b' },
    { char: 'Ç', base: 'c' }, { char: 'Ć', base: 'c' }, { char: 'ç', base: 'c' }, { char: 'ć', base: 'c' }, { char: 'č', base: 'c' },
    { char: 'Ď', base: 'd' }, { char: 'Ḋ', base: 'd' }, { char: 'ď', base: 'd' }, { char: 'ḋ', base: 'd' }, { char: 'đ', base: 'd' },
    { char: 'È', base: 'e' }, { char: 'Ê', base: 'e' }, { char: 'è', base: 'e' }, { char: 'ê', base: 'e' }, { char: 'ë', base: 'e' },
    { char: 'Ḟ', base: 'f' }, { char: 'Ƒ', base: 'f' }, { char: 'ḟ', base: 'f' }, { char: 'ƒ', base: 'f' }, { char: 'ﬀ', base: 'f' },
    { char: 'Ĝ', base: 'g' }, { char: 'Ğ', base: 'g' }, { char: 'ĝ', base: 'g' }, { char: 'ğ', base: 'g' }, { char: 'ġ', base: 'g' },
    { char: 'Ĥ', base: 'h' }, { char: 'Ħ', base: 'h' }, { char: 'ĥ', base: 'h' }, { char: 'ħ', base: 'h' }, { char: 'ȟ', base: 'h' },
    { char: 'Ì', base: 'i' }, { char: 'Í', base: 'i' }, { char: 'ì', base: 'i' }, { char: 'í', base: 'i' }, { char: 'î', base: 'i' },
    { char: 'Ĵ', base: 'j' }, { char: 'ǰ', base: 'j' }, { char: 'ĵ', base: 'j' }, { char: 'ʝ', base: 'j' }, { char: 'ǰ', base: 'j' },
    { char: 'Ķ', base: 'k' }, { char: 'Ǩ', base: 'k' }, { char: 'ķ', base: 'k' }, { char: 'ǩ', base: 'k' }, { char: 'ƙ', base: 'k' },
    { char: 'Ĺ', base: 'l' }, { char: 'Ľ', base: 'l' }, { char: 'ĺ', base: 'l' }, { char: 'ľ', base: 'l' }, { char: 'ł', base: 'l' },
    { char: 'Ṁ', base: 'm' }, { char: 'Ṃ', base: 'm' }, { char: 'ṁ', base: 'm' }, { char: 'ṃ', base: 'm' }, { char: 'ɱ', base: 'm' },
    { char: 'Ñ', base: 'n' }, { char: 'Ń', base: 'n' }, { char: 'ñ', base: 'n' }, { char: 'ń', base: 'n' }, { char: 'ň', base: 'n' },
    { char: 'Ò', base: 'o' }, { char: 'Ó', base: 'o' }, { char: 'ò', base: 'o' }, { char: 'ó', base: 'o' }, { char: 'ô', base: 'o' },
    { char: 'Ṕ', base: 'p' }, { char: 'Ṗ', base: 'p' }, { char: 'ṕ', base: 'p' }, { char: 'ṗ', base: 'p' }, { char: 'ƥ', base: 'p' },
    { char: 'Ɋ', base: 'q' }, { char: 'ʠ', base: 'q' }, { char: 'ƣ', base: 'q' }, { char: 'ʠ', base: 'q' }, { char: 'ɋ', base: 'q' },
    { char: 'Ŕ', base: 'r' }, { char: 'Ř', base: 'r' }, { char: 'ŕ', base: 'r' }, { char: 'ř', base: 'r' }, { char: 'ŗ', base: 'r' },
    { char: 'Ś', base: 's' }, { char: 'Š', base: 's' }, { char: 'ś', base: 's' }, { char: 'š', base: 's' }, { char: 'ş', base: 's' },
    { char: 'Ť', base: 't' }, { char: 'Ţ', base: 't' }, { char: 'ť', base: 't' }, { char: 'ţ', base: 't' }, { char: 'ț', base: 't' },
    { char: 'Ù', base: 'u' }, { char: 'Ú', base: 'u' }, { char: 'ù', base: 'u' }, { char: 'ú', base: 'u' }, { char: 'û', base: 'u' },
    { char: 'Ṽ', base: 'v' }, { char: 'Ṿ', base: 'v' }, { char: 'ṽ', base: 'v' }, { char: 'ṿ', base: 'v' }, { char: 'ʋ', base: 'v' },
    { char: 'Ŵ', base: 'w' }, { char: 'Ẁ', base: 'w' }, { char: 'ŵ', base: 'w' }, { char: 'ẁ', base: 'w' }, { char: 'ẅ', base: 'w' },
    { char: 'Ẍ', base: 'x' }, { char: 'Ẋ', base: 'x' }, { char: 'ẍ', base: 'x' }, { char: 'ẋ', base: 'x' }, { char: 'х', base: 'x' },
    { char: 'Ý', base: 'y' }, { char: 'Ÿ', base: 'y' }, { char: 'ý', base: 'y' }, { char: 'ÿ', base: 'y' }, { char: 'ŷ', base: 'y' },
    { char: 'Ź', base: 'z' }, { char: 'Ž', base: 'z' }, { char: 'ź', base: 'z' }, { char: 'ž', base: 'z' }, { char: 'ż', base: 'z' }
];

let isAnalyzing = false;

function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMessage').textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

function checkBanWords() {
    const inputText = document.getElementById('inputText').value;
    const checkBtn = document.getElementById('checkBtn');
    
    if (!inputText.trim()) {
        showToast('Please enter some text to analyze');
        return;
    }

    // Show loading state
    isAnalyzing = true;
    checkBtn.disabled = true;
    checkBtn.innerHTML = `
        <svg class="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
        </svg>
        <span>Analyzing...</span>
    `;

    setTimeout(() => {
        const textLower = inputText.toLowerCase();
        const foundWords = [];
        let highlightedText = inputText;

        bannedWords.forEach(word => {
            const wordLower = word.toLowerCase();
            if (textLower.includes(wordLower)) {
                foundWords.push(word);
                const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regex = new RegExp(`(?!<[^>]*?)(${escapedWord})(?![^<]*?>)`, 'gi');
                highlightedText = highlightedText.replace(regex, '<span class="highlight">$1</span>');
            }
        });

        // Display results
        const resultsContainer = document.getElementById('resultsContainer');
        const previewSection = document.getElementById('previewSection');
        const highlightedTextDiv = document.getElementById('highlightedText');

        if (foundWords.length > 0) {
            resultsContainer.innerHTML = `
                <div class="results-box danger">
                    <svg class="results-icon" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                        <path d="M12 9v4"/><path d="M12 17h.01"/>
                    </svg>
                    <div class="results-content">
                        <h3>Found ${foundWords.length} banned word${foundWords.length > 1 ? 's' : ''}</h3>
                        <p>Please remove or replace the highlighted words</p>
                        <div class="detected-words">
                            ${foundWords.map(word => `<span class="word-badge">${word}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else {
            resultsContainer.innerHTML = `
                <div class="results-box success">
                    <svg class="results-icon" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <div class="results-content">
                        <h3>No banned words detected</h3>
                        <p>Your content is safe to post</p>
                    </div>
                </div>
            `;
        }

        previewSection.style.display = 'block';
        highlightedTextDiv.innerHTML = highlightedText;

        // Reset button state
        isAnalyzing = false;
        checkBtn.disabled = false;
        checkBtn.innerHTML = `
            <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
            </svg>
            <span>Analyze Content</span>
        `;
    }, 500);
}

function resetFields() {
    document.getElementById('inputText').value = '';
    document.getElementById('resultsContainer').innerHTML = '';
    document.getElementById('previewSection').style.display = 'none';
    document.getElementById('highlightedText').innerHTML = '';
}

function toggleSymbols() {
    const panel = document.getElementById('symbolPanel');
    const fab = document.getElementById('fabIcon');
    
    if (panel.classList.contains('show')) {
        panel.classList.remove('show');
        fab.innerHTML = `
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
            <path d="M9 18h6"/>
            <path d="M10 22h4"/>
        `;
    } else {
        panel.classList.add('show');
        fab.innerHTML = `<path d="M18 6 6 18"/><path d="m6 6 12 12"/>`;
        renderSymbols();
    }
}

document.addEventListener('click', function(event) {
    const symbolPanel = document.getElementById('symbolPanel');
    const fab = document.getElementById('fab');
    
    if (symbolPanel.classList.contains('active')) {
        if (!symbolPanel.contains(event.target) && !fab.contains(event.target)) {
            toggleSymbols();
        }
    }
});

function renderSymbols(filter = '') {
    const symbolList = document.getElementById('symbolList');
    const filtered = filter 
        ? symbolData.filter(s => s.base.toLowerCase().includes(filter.toLowerCase()))
        : symbolData;

    if (filtered.length === 0) {
        symbolList.innerHTML = `<div class="empty-state">No symbols found for "${filter}"</div>`;
        return;
    }

    symbolList.innerHTML = filtered.map(symbol => `
        <div class="symbol-item" 
             onclick="copySymbol('${symbol.char}')" 
             ondblclick="insertSymbol('${symbol.char}')"
             title="Click to copy, double-click to insert (base: ${symbol.base})">
            ${symbol.char}
        </div>
    `).join('');
}

function searchSymbols() {
    const search = document.getElementById('symbolSearch').value;
    renderSymbols(search);
}

function copySymbol(symbol) {
    navigator.clipboard.writeText(symbol);
    showToast(`Copied "${symbol}" to clipboard!`);
}

function insertSymbol(symbol) {
    const textarea = document.getElementById('inputText');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    textarea.value = text.substring(0, start) + symbol + text.substring(end);
    textarea.focus();
    textarea.selectionStart = textarea.selectionEnd = start + symbol.length;
    showToast(`Inserted "${symbol}"`);
}

// Initialize symbols on load
document.addEventListener('DOMContentLoaded', () => {
    renderSymbols();
});
