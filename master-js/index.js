
/******************************************************** */

var gameFormOne = `
<div id="ex">
    <h1>Let's Go</h1>
    <div class=" form-group">
        <label> Your Input </label>
        <input type="text" class=" form-control" id="in" value="">
    </div>
    <div>
        <label> Your out put </label>
        <p id="res" class="w-100  bg-body text-dark" ></p>
    </div>
        <button class="btn btn-dark col-2 mx-auto" onclick=" getNum()" >Result</button>
        <button class="btn btn-dark col-2 mx-auto"><a href="index.html" class=" text-decoration-none text-white w-100 h-100" >Exit</a></button>

</div>

`;

var gameFormTwo = `
    <h1>Let's Go</h1>
    <div class=" form-group">
        <label> Your Input </label>
        <input type="text" class=" form-control" id="in" value="">
    </div>
    <div>
        <label> Your out put </label>
        <p id="res" class="w-100  bg-body text-dark" ></p>
    </div>
        <button class="btn btn-dark col-2 mx-auto " onclick="isDivideBy()" >Result</button>
        <button class="btn btn-dark col-2 mx-auto "><a href="index.html" class=" text-decoration-none text-white w-100 h-100 " >Exit</a></button>

`;

var gameFormThree = `
    <h1>Let's Go</h1>
    <div class=" form-group">
        <label> Your Input </label>
        <input type="text" class=" form-control" id="ino">
    </div>
    <div class=" form-group">
        <label> Your Input </label>
        <input type="text" class=" form-control" id="int">
    </div>
    <div>
        <label> Your out put </label>
        <p id="res" class="w-100  bg-body text-dark" ></p>
    </div>
        <button class="btn btn-dark col-2 mx-auto " onclick="maxOf2()" >Result</button>
        <button class="btn btn-dark col-2 mx-auto "><a href="index.html" class=" text-decoration-none text-white w-100 h-100 " >Exit</a></button>

`;

var gameFormFour = `
    <h1>Let's Go</h1>
    <div class=" form-group">
        <label> Your Input </label>
        <input type="text" class=" form-control" id="in" value="">
    </div>
    <div>
        <label> Your out put </label>
        <p id="res" class="w-100  bg-body text-dark" ></p>
    </div>
        <button class="btn btn-dark col-2 mx-auto " onclick="isNagitive()" >Result</button>
        <button class="btn btn-dark col-2 mx-auto "><a href="index.html" class=" text-decoration-none text-white w-100 h-100 " >Exit</a></button>

`;

var gameFormFive = `
    <h1>Let's Go</h1>
    <div class=" form-group">
        <label> Your Input </label>
        <input type="text" class=" form-control" id="ino">
    </div>
    <div class=" form-group">
        <label> Your Input </label>
        <input type="text" class=" form-control" id="int">
    </div>
    <div class=" form-group">
        <label> Your Input </label>
        <input type="text" class=" form-control" id="inth">
    </div>
    <div>
        <label> Your out put </label>
        <p id="res" class="w-100  bg-body text-dark" ></p>
    </div>
        <button class="btn btn-dark col-2 mx-auto " onclick=" maxOfThree()" >Result</button>
        <button class="btn btn-dark col-2 mx-auto "><a href="index.html" class=" text-decoration-none text-white w-100 h-100 " >Exit</a></button>

`;

var gameFormSix = `
    <h1>Let's Go</h1>
    <div class=" form-group">
        <label> Your Input </label>
        <input type="text" class=" form-control" id="in" value="">
    </div>
    <p id="res" class="w-100  bg-body text-dark mt-1" ></p>
        <button class="btn btn-dark col-2 mx-auto " onclick="isEven()" >Result</button>
        <button class="btn btn-dark col-2 mx-auto "><a href="index.html" class=" text-decoration-none text-white w-100 h-100 " >Exit</a></button>
`;

var gameFormSeven = `
    <h1>Let's Go</h1>
    <div class=" form-group">
        <label> Your Input (character) </label>
        <input type="text" class=" form-control" id="in" value="">
    </div>
    <p id="res" class="w-100  bg-body text-dark mt-1" ></p>
        <button class="btn btn-dark col-2 mx-auto " onclick="isVowel()" >Result</button>
        <button class="btn btn-dark col-2 mx-auto "><a href="index.html" class=" text-decoration-none text-white w-100 h-100 " >Exit</a></button>
`;

var gameFormEight = `
    <h1>Let's Go</h1>
    <div class=" form-group">
        <label> Your Input </label>
        <input type="text" class=" form-control" id="in" value="">
    </div>
    <select id="res">
    <option></option>
    </select>
        <button class="btn btn-dark col-2 mx-auto " onclick="printForNum()" >Result</button>
        <button class="btn btn-dark col-2 mx-auto "><a href="index.html" class=" text-decoration-none text-white w-100 h-100 " >Exit</a></button>
`;

var gameFormNine = `
    <h1>Let's Go</h1>
    <div class=" form-group">
        <label> Your Input </label>
        <input type="text" class=" form-control" id="in" value="">
    </div>
    <select id="res">
    <option></option>
    </select>
        <button class="btn btn-dark col-2 mx-auto " onclick="multOfNum()" >Result</button>
        <button class="btn btn-dark col-2 mx-auto "><a href="index.html" class=" text-decoration-none text-white w-100 h-100 " >Exit</a></button>
`;

var gameFormTen = `
    <h1>Let's Go</h1>
    <div class=" form-group">
        <label> Your Input </label>
        <input type="text" class=" form-control" id="in" value="">
    </div>
    <select id="res">
    <option></option>
    </select>
        <button class="btn btn-dark col-2 mx-auto " onclick="evenNumbers()" >Result</button>
        <button class="btn btn-dark col-2 mx-auto "><a href="index.html" class=" text-decoration-none text-white w-100 h-100 " >Exit</a></button>
`;

var gameFormEleven = `
    <h1>Let's Go</h1>
    <div class=" form-group">
        <label> Your number </label>
        <input type="text" class=" form-control" id="ino" value="">
    </div>
    <div class=" form-group">
        <label> Your power </label>
        <input type="text" class=" form-control" id="int" value="">
    </div>
    <p id="res" class="w-100  bg-body text-dark mt-1" ></p>
        <button class="btn btn-dark col-2 mx-auto " onclick="powerOf()" >Result</button>
        <button class="btn btn-dark col-2 mx-auto "><a href="index.html" class=" text-decoration-none text-white w-100 h-100 " >Exit</a></button>
`;

var gameFormTwelve = `
    <h1>Let's Go</h1>
    <div class=" form-group mb-1">
        <label> Enter 5 Marks </label>
        <input type="text" class=" form-control" id="inone" value="">
    </div>
    <div class=" form-group mb-1">
        <input type="text" class=" form-control" id="intwo" value="">
    </div>
    <div class=" form-group mb-1">
        <input type="text" class=" form-control" id="inthree" value="">
    </div>
    <div class=" form-group mb-1">
        <input type="text" class=" form-control" id="infour" value="">
    </div>
    <div class=" form-group mb-1">
        <input type="text" class=" form-control" id="infive" value="">
    </div>
    <div id="res">
        <p class="w-100  bg-body text-dark mt-1" ></p>
    </div>
        <button class="btn btn-dark col-2 mx-auto " onclick="markOfSubject()" >Result</button>
        <button class="btn btn-dark col-2 mx-auto "><a href="index.html" class=" text-decoration-none text-white w-100 h-100 " >Exit</a></button>
`;

var gameFormThirteen = `
    <h1>Let's Go</h1>
    <div class=" form-group">
        <label> Your number of Month </label>
        <input type="text" class=" form-control" id="in" value="">
    </div>
    <p id="res" class="w-100  bg-body text-dark mt-1" ></p>
        <button class="btn btn-dark col-2 mx-auto " onclick="numOfDays()" >Result</button>
        <button class="btn btn-dark col-2 mx-auto "><a href="index.html" class=" text-decoration-none text-white w-100 h-100 " >Exit</a></button>
`;

var gameFormFourteen = `
    <h1>Let's Go</h1>
    <h3>Enter 5 Marks</h3>
    <div class=" form-group mb-1">
        <label> Physics </label>
        <input type="text" class=" form-control" id="inone" value="">
    </div>
    <div class=" form-group mb-1">
        <label>Chemistry</label>
        <input type="text" class=" form-control" id="intwo" value="">
    </div>
    <div class=" form-group mb-1">
        <label>Biology</label>
        <input type="text" class=" form-control" id="inthree" value="">
    </div>
    <div class=" form-group mb-1">
        <label>Mathematics</label>
        <input type="text" class=" form-control" id="infour" value="">
    </div>
    <div class=" form-group mb-1">
        <label>Computer</label>
        <input type="text" class=" form-control" id="infive" value="">
    </div>
    <div>
        <p class="w-100  bg-body text-dark mt-1" id="res" ></p>
    </div>
        <button class="btn btn-dark col-2 mx-auto " onclick=" percentgeAndGrade()" >Result</button>
        <button class="btn btn-dark col-2 mx-auto "><a href="index.html" class=" text-decoration-none text-white w-100 h-100 " >Exit</a></button>
`;

var gameFormFifteen = `
    <h1>Let's Go</h1>
    <div class=" form-group">
        <label> Your number of Month </label>
        <input type="text" class=" form-control" id="in" value="">
    </div>
    <p id="res" class="w-100  bg-body text-dark mt-1" ></p>
        <button class="btn btn-dark col-2 mx-auto " onclick="numOfDaysWithSwitch()" >Result</button>
        <button class="btn btn-dark col-2 mx-auto "><a href="index.html" class=" text-decoration-none text-white w-100 h-100 " >Exit</a></button>
`;

var gameFormSixteen = `
    <h1>Let's Go</h1>
    <div class=" form-group">
        <label> Your Input (character) </label>
        <input type="text" class=" form-control" id="in" value="">
    </div>
    <p id="res" class="w-100  bg-body text-dark mt-1" ></p>
        <button class="btn btn-dark col-2 mx-auto " onclick="isVowelWithSwitch()" >Result</button>
        <button class="btn btn-dark col-2 mx-auto "><a href="index.html" class=" text-decoration-none text-white w-100 h-100 " >Exit</a></button>
`;

var gameFormSeventeen = `
    <h1>Let's Go</h1>
    <div class=" form-group">
        <label> Your Input </label>
        <input type="text" class=" form-control" id="ino">
    </div>
    <div class=" form-group">
        <label> Your Input </label>
        <input type="text" class=" form-control" id="int">
    </div>
    <div>
        <label> Your out put </label>
        <p id="res" class="w-100  bg-body text-dark" ></p>
    </div>
        <button class="btn btn-dark col-2 mx-auto " onclick="maxOf2WithSwitch()" >Result</button>
        <button class="btn btn-dark col-2 mx-auto "><a href="index.html" class=" text-decoration-none text-white w-100 h-100 " >Exit</a></button>

`;

var gameFormEighteen = `
    <h1>Let's Go</h1>
    <div class=" form-group">
        <label> Your Input number </label>
        <input type="text" class=" form-control" id="in" value="">
    </div>
    <p id="res" class="w-100  bg-body text-dark mt-1" ></p>
        <button class="btn btn-dark col-2 mx-auto " onclick="isEvenWithSwitch()" >Result</button>
        <button class="btn btn-dark col-2 mx-auto "><a href="index.html" class=" text-decoration-none text-white w-100 h-100 " >Exit</a></button>
`;

var gameFormNineteen = `
    <h1>Let's Go</h1>
    <div class=" form-group">
        <label> Your Input </label>
        <input type="text" class=" form-control" id="in" value="">
    </div>
    <div>
        <label> Your out put </label>
        <p id="res" class="w-100  bg-body text-dark" ></p>
    </div>
        <button class="btn btn-dark col-2 mx-auto " onclick="isNagitiveWithSwitch()" >Result</button>
        <button class="btn btn-dark col-2 mx-auto "><a href="index.html" class=" text-decoration-none text-white w-100 h-100 " >Exit</a></button>

`;

var gameFormTwenty = `
    <h1>Let's Go</h1>
    <div class=" form-group">
        <label> firsr number </label>
        <input type="text" class=" form-control" id="inone" value="">
    </div>
    <div class=" form-group">
        <label> operator </label>
        <input type="text" class=" form-control" id="intwo" value="">
    </div>
    <div class=" form-group">
        <label> second number </label>
        <input type="text" class=" form-control" id="inthree" value="">
    </div>
    <div>
        <label> Your out put </label>
        <p id="res" class="w-100  bg-body text-dark" ></p>
    </div>
        <button class="btn btn-dark col-2 mx-auto " onclick="simpleCalculator()" >Result</button>
        <button class="btn btn-dark col-2 mx-auto "><a href="index.html" class=" text-decoration-none text-white w-100 h-100 " >Exit</a></button>

`;

/************************************************* */

document.getElementById("bt").innerHTML = `<button class="btn btn-dark col-2 mx-auto" id="button" onclick="creatButton()">Start Game</button>`;

var conatinerButton = `
    <button class="btn btn-dark p-1 m-2"  onclick="createGameFormOne()">Print Num</button>
    <button class="btn btn-dark p-1 m-2"  onclick="createGameFormTwo()">divid by 3 & 4</button>
    <button class="btn btn-dark p-1 m-2"  onclick="createGameFormThree()">max of 2</button>
    <button class="btn btn-dark p-1 m-2"  onclick="createGameFormFour()">is negitive</button>
    <button class="btn btn-dark p-1 m-2"  onclick="createGameFormFive()">max of 3</button>
    <button class="btn btn-dark p-1 m-2"  onclick="createGameFormSix()">is even</button>
    <button class="btn btn-dark p-1 m-2"  onclick="createGameFormSeven()">is Vowel</button>
    <button class="btn btn-dark p-1 m-2"  onclick="createGameFormEight()">print for num</button>
    <button class="btn btn-dark p-1 m-2"  onclick="createGameFormNine()">print mult of num</button>
    <button class="btn btn-dark p-1 m-2"  onclick="createGameFormTen()">even numbers</button>
    <button class="btn btn-dark p-1 m-2"  onclick="createGameFormEleven()">power of</button>
    <button class="btn btn-dark p-1 m-2"  onclick="createGameFormTwelve()">Marks</button>
    <button class="btn btn-dark p-1 m-2"  onclick="createGameFormThirteen()">Number of days</button>
    <button class="btn btn-dark p-1 m-2"  onclick="createGameFormFourteen()"> percentage and grade</button>
    <button class="btn btn-dark p-1 m-2"  onclick=" createGameFormFifteen()">Num of Days with switch</button>
    <button class="btn btn-dark p-1 m-2"  onclick=" createGameFormSixteen()">is Vowel with switch</button>
    <button class="btn btn-dark p-1 m-2"  onclick=" createGameFormSeventeen()">maxof2 with switch</button>
    <button class="btn btn-dark p-1 m-2"  onclick=" createGameFormEightteen()">isEven with switch</button>
    <button class="btn btn-dark p-1 m-2"  onclick="createGameFormNineteen()">is negitive with switch</button>
    <button class="btn btn-dark p-1 m-2"  onclick="createGameFormTwenty()"> Simple Calculator</button>

`;

function creatButton(){
    document.getElementById("bt").innerHTML = conatinerButton;
}


function createGameFormOne() {
    document.getElementById("cont").innerHTML = gameFormOne;
}

function createGameFormTwo() {
    document.getElementById("cont").innerHTML = gameFormTwo;
}

function createGameFormThree() {
    document.getElementById("cont").innerHTML = gameFormThree;
}

function createGameFormFour() {
    document.getElementById("cont").innerHTML = gameFormFour;
}

function createGameFormFive() {
    document.getElementById("cont").innerHTML = gameFormFive;
}

function createGameFormSix() {
    document.getElementById("cont").innerHTML = gameFormSix;
}

function createGameFormSeven() {
    document.getElementById("cont").innerHTML = gameFormSeven;
}

function createGameFormEight() {
    document.getElementById("cont").innerHTML = gameFormEight;
}

function createGameFormNine() {
    document.getElementById("cont").innerHTML = gameFormNine;
}

function createGameFormTen() {
    document.getElementById("cont").innerHTML = gameFormTen;
}

function createGameFormEleven() {
    document.getElementById("cont").innerHTML = gameFormEleven;
}

function createGameFormTwelve() {
    document.getElementById("cont").innerHTML = gameFormTwelve;
}

function createGameFormThirteen() {
    document.getElementById("cont").innerHTML = gameFormThirteen;
}

function createGameFormFourteen() {
    document.getElementById("cont").innerHTML = gameFormFourteen;
}

function createGameFormFifteen() {
    document.getElementById("cont").innerHTML = gameFormFifteen;
}

function createGameFormSixteen() {
    document.getElementById("cont").innerHTML = gameFormSixteen;
}

function createGameFormSeventeen() {
    document.getElementById("cont").innerHTML = gameFormSeventeen;
}

function createGameFormEightteen() {
    document.getElementById("cont").innerHTML = gameFormEighteen;
}

function createGameFormNineteen() {
    document.getElementById("cont").innerHTML = gameFormNineteen;
}

function createGameFormTwenty() {
    document.getElementById("cont").innerHTML = gameFormTwenty;
}


/* assignment function */

/* task 1 */
function getNum() {
    x = Number(document.getElementById("in").value) ;
    document.getElementById("res").innerHTML = x;
}

/*task 2 */

function isDivideBy() {
    x = Number(document.getElementById("in").value) ;
    if (x % 3 == 0 && x % 4 == 0) {
        document.getElementById("res").innerHTML = "Yes";
    } else {
        document.getElementById("res").innerHTML = "No";
    }
}

// task 3

function maxOf2() {
    x = Number(document.getElementById("ino").value) ;
    y = Number(document.getElementById("int").value) ;
    if (x > y) {
        document.getElementById("res").innerHTML = ` ${x} is bigger than ${y} `;
    }
    else {
        document.getElementById("res").innerHTML = `${y} is bigger than ${x}`;
    }
}

//task 4

function isNagitive() {
    num = Number(document.getElementById("in").value) ;
    if (num > 0) {
        document.getElementById("res").innerHTML = `Your number is positive`;
    } else if(num<0){
        document.getElementById("res").innerHTML = `Your number is negative`;
    } else {
        document.getElementById("res").innerHTML=`your number is zeroo`
    }
}


// task 5


function maxOfThree() {
    x = Number(document.getElementById("ino").value) ;
    y = Number(document.getElementById("int").value) ;
    z = Number(document.getElementById("inth").value) ;
    var max = 0;
    var min = 0;
    if (x>=y&&x>=z) {
        max = x;
    } else if (y>=x&&y>=z) {
        max = y;
    } else {
        max = z;
    }

    if (x <= y && x <= z) {
        min = x;
    } else if (y <= x && y <= z) {
        min = y;
    } else {
        min = z;
    }

    document.getElementById("res").innerHTML = `maxElement = ${max} minElement=${min}`;
    console.log(`maxElement = ${max} minElement=${min}`)
}

//task 6

function isEven() {
    var x = Number(document.getElementById("in").value);
    if (x % 2 == 0) {
        document.getElementById("res").innerHTML = "is even";
    } else {
        document.getElementById("res").innerHTML ="is odd";
    }
}

// task 7

function isVowel() {
    var x = document.getElementById("in").value;
    if ((x == 'o' || x=='O' )|| (x == 'e' ||x=='E')|| (x == 'a' || x=='A')|| (x == 'u'||x=='U') ||( x == 'i'||x=='I')) {
        document.getElementById("res").innerHTML = "Vowel";
    } else {
        document.getElementById("res").innerHTML = "Constant";
    }
}

// task 8

function printForNum() {
    var cartona = "";
    var x = Number( document.getElementById("in").value);
    for (var i = 1; i <= x; i++){
        cartona+=`<option>${i}</option>`
        console.log(i);
    }
    document.getElementById("res").innerHTML = cartona;
}

// task 9

function multOfNum() {
    var x = Number(document.getElementById("in").value);
    var cartona = "";
    for (var i = 1; i <= 12; i++){
        console.log(`${i} \* ${x} = ${i * x}`);
        cartona += `<option>${i} \* ${x} = ${i * x}</option>`;
    }
    document.getElementById("res").innerHTML = `check the console`;
    document.getElementById("res").innerHTML = cartona;
}

// task  10

function evenNumbers() {
    var cartona = "";
    var x = Number(document.getElementById("in").value) ;
    for (var i = 1; i <= x; i++){
        if (i % 2 == 0) {
            console.log(i);
            cartona += `<option>${i}</option>`;
        }
    }
    document.getElementById("res").innerHTML = cartona;
}

// task 11

function powerOf() {
    var resulet = 1;
    var base = Number(document.getElementById("ino").value);
    var pow = Number(document.getElementById("int").value);
    for (var i=1; i <= pow; i++){
        resulet *= base;
    }
    document.getElementById("res").innerHTML = resulet;
    console.log(resulet)
}

// task 12

function markOfSubject() {
    var sub1 = Number(document.getElementById("inone").value);
    var sub2 = Number(document.getElementById("intwo").value);
    var sub3 = Number(document.getElementById("inthree").value);
    var sub4 = Number(document.getElementById("infour").value);
    var sub5 = Number(document.getElementById("infive").value);
    var total = sub1 + sub2 + sub3 + sub4 + sub5;
    var avrege = total / 5;
    var parcentage = (total / 500) * 100;
    var cartona = `<p class="w-100  bg-body text-dark mt-1" >total marks = ${total}</p>
        <p class="w-100  bg-body text-dark mt-1" >avrege = ${avrege}</p>
        <p class="w-100  bg-body text-dark mt-1" >parcentage = ${parcentage}</p>
    `
    document.getElementById("res").innerHTML = cartona;
}

// task 13

function numOfDays() {
    var x = Number(document.getElementById("in").value);
    if (x == 1) {
        document.getElementById("res").innerHTML = `Days in month: 31`;
    } else if (x == 2) {
        document.getElementById("res").innerHTML = `Days in month : 29 or 28 `;
    } else if (x==3) {
        document.getElementById("res").innerHTML = `Days in month: 31`;
    } else if (x == 4) {
        document.getElementById("res").innerHTML = `Days in month: 30`;
    } else if (x == 5) {
        document.getElementById("res").innerHTML = `Days in month: 31`;
    } else if (x==6) {
        document.getElementById("res").innerHTML = `Days in month: 30`;
    } else if (x==7) {
        document.getElementById("res").innerHTML = `Days in month: 31`;
    } else if (x==8) {
        document.getElementById("res").innerHTML = `Days in month: 31`;
    } else if (x==9) {
        document.getElementById("res").innerHTML = `Days in month: 30`;
    } else if (x==10) {
        document.getElementById("res").innerHTML = `Days in month: 31`;
    } else if (x == 11) {
        document.getElementById("res").innerHTML = `Days in month: 30`;
    } else if(x==12) {
        document.getElementById("res").innerHTML = `Days in month: 31`;
    } else {
        document.getElementById("res").innerHTML = `please enter correct month`;
    }
}

// task 14

function percentgeAndGrade() {
    var g1 = Number(document.getElementById("inone").value);
    var g2 = Number(document.getElementById("intwo").value);
    var g3 = Number(document.getElementById("inthree").value);
    var g4 = Number(document.getElementById("infour").value);
    var g5 = Number(document.getElementById("infive").value);
    var percent = ((g1 + g2 + g3 + g4 + g5) / 500) * 100;
    if (percent >= 90 && percent <= 100) {
        document.getElementById("res").innerHTML = `your percentage : ${percent}% ::  your grade:(A)`;
    } else if (percent >= 80 && percent < 90) {
        document.getElementById("res").innerHTML = `your percentage : ${percent}% ::  your grade:(B)`;
    } else if (percent >= 70 && percent < 80) {
        document.getElementById("res").innerHTML = `your percentage : ${percent}% ::  your grade:(C)`;
    } else if (percent >= 60 && percent < 70) {
        document.getElementById("res").innerHTML = `your percentage : ${percent}% ::  your grade:(D)`;
    } else if (percent >=40 && percent<60) {
        document.getElementById("res").innerHTML = `your percentage : ${percent}% ::  your grade:(E)`;
    } else if (percent < 40) {
        document.getElementById("res").innerHTML = `your percentage : ${percent}% ::  your grade:(F)`;
    }
}

// task 15

function numOfDaysWithSwitch() {
    var num = Number(document.getElementById("in").value);
    switch (num) {
        case 1:
            document.getElementById("res").innerHTML = `Days in month: 31`;
            break;
        case 2:
            document.getElementById("res").innerHTML = `Days in month : 29 or 28 `;
            break;
        case 3:
            document.getElementById("res").innerHTML = `Days in month: 31`;
            break;
        case 4:
            document.getElementById("res").innerHTML = `Days in month: 30`;
            break;
        case 5:
            document.getElementById("res").innerHTML = `Days in month: 31`;
            break;
        case 6:
            document.getElementById("res").innerHTML = `Days in month: 30`;
            break;
        case 7:
            document.getElementById("res").innerHTML = `Days in month: 31`;
            break;
        case 8:
            document.getElementById("res").innerHTML = `Days in month: 31`;
            break;
        case 9:
            document.getElementById("res").innerHTML = `Days in month: 30`;
            break;
        case 10:
            document.getElementById("res").innerHTML = `Days in month: 31`;
            break;
        case 11:
            document.getElementById("res").innerHTML = `Days in month: 30`;
            break;
        case 12:
            document.getElementById("res").innerHTML = `Days in month: 31`;
            break;
        default:
            document.getElementById("res").innerHTML = `please enter correct month`;
    }
}

// task 16

function isVowelWithSwitch() {
    var char = document.getElementById("in").value;
    switch (char) {
        case 'a':
            document.getElementById("res").innerHTML = "Vowel";
            break;
        case 'A':
            document.getElementById("res").innerHTML = "Vowel";
            break;
        case 'e':
            document.getElementById("res").innerHTML = "Vowel";
            break;
        case 'E':
            document.getElementById("res").innerHTML = "Vowel";
            break;
        case 'o':
            document.getElementById("res").innerHTML = "Vowel";
            break;
        case 'O':
            document.getElementById("res").innerHTML = "Vowel";
            break;
        case 'i':
            document.getElementById("res").innerHTML = "Vowel";
            break;
        case 'I':
            document.getElementById("res").innerHTML = "Vowel";
            break;
        case 'u':
            document.getElementById("res").innerHTML = "Vowel";
            break;
        case 'U':
            document.getElementById("res").innerHTML = "Vowel";
            break;
        default:
            document.getElementById("res").innerHTML = "Constant";
    }
}

// task 17

function maxOf2WithSwitch() {
    var num1 = Number(document.getElementById("ino").value);
    var num2 = Number(document.getElementById("int").value);
    switch (num1>num2) {
        case true:
            document.getElementById("res").innerHTML = `${num1} is bigger than ${num2}`;
            break;
        case false:
            document.getElementById("res").innerHTML = `${num2} is bigger than ${num1}`;
            break;
    }
}

// task 18

function isEvenWithSwitch() {
    var num = Number(document.getElementById("in").value);
    switch (num%2==0) {
        case true:
            document.getElementById("res").innerHTML = `is even`;
            break;
        case false:
            document.getElementById("res").innerHTML = `is odd`;
            break;
    }
}

// task 19

function isNagitiveWithSwitch() {
    var num = Number(document.getElementById("in").value);
    if (num==0) {
        document.getElementById("res").innerHTML = "your number is zero";
    } else {
        switch (num>0) {
            case true:
                document.getElementById("res").innerHTML = `is positive`;
                break;
            case false:
                document.getElementById("res").innerHTML = `is nagitive`;
                break;
        }
    }
}

// task 20

function simpleCalculator() {
    var num1 = Number(document.getElementById("inone").value);
    var op = document.getElementById("intwo").value;
    var num2 = Number(document.getElementById("inthree").value);
    switch (op) {
        case '+':
            document.getElementById("res").innerHTML = `${num1} + ${num2} = ${num1 + num2}`;
            break;
        case '-':
            document.getElementById("res").innerHTML = `${num1} - ${num2} = ${num1 - num2}`;
            break;
        case '*':
            document.getElementById("res").innerHTML = `${num1} * ${num2} = ${num1 * num2}`;
            break;
        case '/':
            document.getElementById("res").innerHTML = `${num1} / ${num2} = ${num1 / num2}`;
            break;
        default:
            document.getElementById("res").innerHTML = `please enter correct operator (+ , - , * , /) `;

    }
}