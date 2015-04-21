var whoArray =[
	"Тило Вольф", "Шон Бреннан", "Эндрю Элдритч", "Розз Уильямс", "Адриан Хейтс",
	"Сьюзи Сью", "Дуглас Пирс", "Дэвид Тибет", "Симоне Сальватори", "Юрки69",
	"Майкл Джира", "Анна-Варни Кантодеа", "Вилле Вало", "ВИА Лебанон Гановер", "ВИА Баухаус", "Иэн Кёртис",
	"Питер Мёрфи", "Моника Ричардс","Диаманда Галас" ,"Бела Лугоши"];
var whatArray =[
	"разводит полосатых кошек", "уходит в нирвану","побывает в душевой", "предпочитает азиатских транссексуалов", "выступит с концертом", "пишет книгу о чернокожем гетто",
	"ворует у богатых готов", "устраивает перфоманс с раздеванием", "станет участником бейсбольной команды", "предложит сотрудничество Алле Пугачевой", "запишет witch-house альбом",
	"ест младенцев на завтрак", "собирается пить березовый сок", "выражает критику правительству Лихтенштейна", "выражает недовольство своими фанатами", "наконец-то купил лицензионный Fruity Loops",
	"признает, что поёт не ртом", "планирует окуклиться", "сделает татуировку с Кумамоном", "примеряет образ ассассина", "планирует поселиться в избе", "отрастит бороду"];
var whereArray =[
	"на фестивале Mera Luna", "на мясокомбинате в г. Сыптывкар", "посреди индийских трущоб","в российском вагоне-ресторане", "в государственной библиотеке США", "на Луне",
	"у себя дома", "в поместье российского певца Стаса Михайлова", "на батискафе", "в приюте для бездомных", "в пермском обласном суде",
	"на черном рынке", "в замке графа Дракулы", "в Межигорье", "за полярным кругом", "в мусоропроводе",
	"на собственной студии", "в зоопарке", "в магазине детских вещей", "во время ежегодного фестиваля нудистов", "в аптеке", "посреди пустыни Сахара", "с вомбатами"];
var whyArray =[
	"чтобы напомнить о себе", "в образе Джима Моррисона","под лозунгом 'Долой тирана!'","чтобы порадовать поклонников", "для новой фотосессии", "чтобы профинансировать новый альбом", "чтобы освоить новый вид искусства",
	"ради 1,000,000 африканских младенцев", "в поддержку гей-сообщества", "в рамках нового арт-перфоманса", "чтобы доказать свою преданность иллюминатам", "ради получения высшего образования",
	"аргументировав тем, что это хорошая примета", "ради любви", "в защиту готической субкультуры", "чтобы оставаться в тренде", "чтобы поламать стереотипы",
	"чтобы улучшить свою физическую форму", "во славу Сатане, конечно же!", "в ожидании гонорара", "чтобы вскоре отрастить бороду", ];

var whoGet = function(arr){
	var qArray = arr;
	var getNum=Math.floor(Math.random()*qArray.length);
	var getQuot = qArray[getNum];
	var whoVars = getQuot;
	return whoVars;
};

var whatGet = function(arr){
	var qArray = arr;
	var getNum=Math.floor(Math.random()*qArray.length);
	var getQuot = qArray[getNum];
	var whatVars = getQuot;
	return whatVars;
};

var whereGet = function(arr){
	var qArray = arr;
	var getNum=Math.floor(Math.random()*qArray.length);
	var getQuot = qArray[getNum];
	var whereVars = getQuot;
	return whereVars;
};

var whyGet = function(arr){
	var qArray = arr;
	var getNum=Math.floor(Math.random()*qArray.length);
	var getQuot = qArray[getNum];
	var whyVars = getQuot;
	return whyVars;
};


var generator = function(whoVar, whatVar, whereVar, whyVar){
	var string = whoVar+" "+whatVar+" "+whereVar+" "+whyVar;
	// console.log (string);
	var curStr=document.getElementById("news");
	curStr.innerHTML = string;
	// изменяем кнопку для твитера
	document.getElementById("twitBut").setAttribute('href', 'http://twitter.com/share?url=http://www.gothrumors.com.ua&text='+string);
	};

var backChanger = function(number){
	var getNumber=Math.floor(Math.random()*number);
	console.log(getNumber);
	console.log(document.body.style.backgroundImage="back0"+getNumber+".jpg");
	document.body.style.background = "url('back0"+getNumber+".jpg');";
	console.log(document.body.style.backgroundImage);
};


var update=function(){
	generator (whoGet(whoArray), whatGet(whatArray), whereGet(whereArray), whyGet(whyArray));
	// backChanger(10);
};

generator (whoGet(whoArray), whatGet(whatArray), whereGet(whereArray), whyGet(whyArray));

