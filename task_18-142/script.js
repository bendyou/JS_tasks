"use strict";
    const button1 = document.createElement('button');
    button1.innerText = '18_1';
    button1.addEventListener('click', function() {
        let a=10;
        let b=2;
        
        alert(a+b);
        alert(a-b);
        alert(a*b);
        alert(a/b);

    });
    document.getElementById('buttonContainer1').appendChild(button1);

    const button2 = document.createElement('button');
    button2.innerText = '18_2';
    button2.addEventListener('click', function() {
        let c=10, d=5;
        let result = c+d;
        alert(result);

    });
    document.getElementById('buttonContainer2').appendChild(button2);

    const button3 = document.createElement('button');
    button3.innerText = '18_3';
    button3.addEventListener('click', function() {
        let a=1, b=2, c=3;
        alert(a+b+c);

    });
    document.getElementById('buttonContainer3').appendChild(button3);

    const button4 = document.createElement('button');
    button4.innerText = '18_4';
    button4.addEventListener('click', function() {
        let a=10, b=5, c=a-b, d=7, result=c+d;
        alert(result);
    });
    document.getElementById('buttonContainer4').appendChild(button4);

    const button5 = document.createElement('button');
    button5.innerText = '19_1';
    button5.addEventListener('click', function() {
        let a = 5 + 5 * 3;
        alert(a); // выведет 20
    });
    document.getElementById('buttonContainer5').appendChild(button5);

    const button6 = document.createElement('button');
    button6.innerText = '19_2';
    button6.addEventListener('click', function() {
        let a = 5 + 5 * 3 + 3;
        alert(a); // выведет 23
    });
    document.getElementById('buttonContainer6').appendChild(button6);

    const button7 = document.createElement('button');
    button7.innerText = '19_3';
    button7.addEventListener('click', function() {
        let a = 8 / 2 + 2;
        alert(a); // выведет 6
    });
    document.getElementById('buttonContainer7').appendChild(button7);

    const button8 = document.createElement('button');
    button8.innerText = '19_4';
    button8.addEventListener('click', function() {
        let a = 8 + 2 / 2;
        alert(a); // выведет 9
    });
    document.getElementById('buttonContainer8').appendChild(button8);

    const button9 = document.createElement('button');
    button9.innerText = '20_1';
    button9.addEventListener('click', function() {
        let a = 8 / 2 * 2;
        alert(a); // выведет 8
    });
    document.getElementById('buttonContainer9').appendChild(button9);

    const button10 = document.createElement('button');
    button10.innerText = '20_2';
    button10.addEventListener('click', function() {
        let a = 8 * 4 / 2 / 2;
        alert(a); // выведет 8
    });
    document.getElementById('buttonContainer10').appendChild(button10);

    const button11 = document.createElement('button');
    button11.innerText = '21_1';
    button11.addEventListener('click', function() {
        let a = (2 + 3) * (2 + 3);
        alert(a); // выведет 25
    });
    document.getElementById('buttonContainer11').appendChild(button11);

    const button12 = document.createElement('button');
    button12.innerText = '21_2';
    button12.addEventListener('click', function() {
        let a = (2 + 3) * 2 + 3;
        alert(a); // выведет 13
    });
    document.getElementById('buttonContainer12').appendChild(button12);

    const button13 = document.createElement('button');
    button13.innerText = '21_3';
    button13.addEventListener('click', function() {
        let a = 2 * (2 + 4 * (3 + 1));
        alert(a); // выведет 36
    });
    document.getElementById('buttonContainer13').appendChild(button13);

    const button14 = document.createElement('button');
    button14.innerText = '21_4';
    button14.addEventListener('click', function() {
        let a = 2 * 8 / 4;
        alert(a); // выведет 4
    });
    document.getElementById('buttonContainer14').appendChild(button14);

    const button15 = document.createElement('button');
    button15.innerText = '21_5';
    button15.addEventListener('click', function() {
        let a = (2 * 8) / 4;
        alert(a); // выведет 4
    });
    document.getElementById('buttonContainer15').appendChild(button15);

    const button16 = document.createElement('button');
    button16.innerText = '21_6';
    button16.addEventListener('click', function() {
        let a = 2 * (8 / 4);
        alert(a); // выведет 4
    });
    document.getElementById('buttonContainer16').appendChild(button16);

    const button17 = document.createElement('button');
    button17.innerText = '22_1';
    button17.addEventListener('click', function() {
        let a=1.5, b=0.75;
        alert(a+b);
    });
    document.getElementById('buttonContainer17').appendChild(button17);

    const button18 = document.createElement('button');
    button18.innerText = '23_1';
    button18.addEventListener('click', function() {
        let a=-100;
        alert(a);
    });
    document.getElementById('buttonContainer18').appendChild(button18);

    const button19 = document.createElement('button');
    button19.innerText = '23_2';
    button19.addEventListener('click', function() {
        let a=-52;
        alert(-a);
    });
    document.getElementById('buttonContainer19').appendChild(button19);

    const button20 = document.createElement('button');
    button20.innerText = '25_1';
    button20.addEventListener('click', function() {
        let a = 13;
        let b = 5;
        alert(a % b);
    });
    document.getElementById('buttonContainer20').appendChild(button20);

    const button21 = document.createElement('button');
    button21.innerText = '26_1';
    button21.addEventListener('click', function() {
        alert(2 ** 10);
    });
    document.getElementById('buttonContainer21').appendChild(button21);

    const button22 = document.createElement('button');
    button22.innerText = '27_1';
    button22.addEventListener('click', function() {
        let a = 3 * 2 ** 3;
        alert(a); // выведит 24
    });
    document.getElementById('buttonContainer22').appendChild(button22);

    const button23 = document.createElement('button');
    button23.innerText = '27_2';
    button23.addEventListener('click', function() {
        let a = (3 * 2) ** 3;
        alert(a); // выведит 216
    });
    document.getElementById('buttonContainer23').appendChild(button23);

    const button24 = document.createElement('button');
    button24.innerText = '27_3';
    button24.addEventListener('click', function() {
        let a = 3 * 2 ** (3 + 1);
        alert(a); // выведит 48
    });
    document.getElementById('buttonContainer24').appendChild(button24);

    const button25 = document.createElement('button');
    button25.innerText = '27_4';
    button25.addEventListener('click', function() {
        let a = 2 ** 3 * 3;
        alert(a); // выведит 24
    });
    document.getElementById('buttonContainer25').appendChild(button25);

    const button26 = document.createElement('button');
    button26.innerText = '27_5';
    button26.addEventListener('click', function() {
        let a = 3 * 2 ** 3 * 3;
        alert(a); // выведит 72
    });
    document.getElementById('buttonContainer26').appendChild(button26);

    const button27 = document.createElement('button');
    button27.innerText = '28_1';
    button27.addEventListener('click', function() {
        let name = 'Vlad ', surname = 'Mambetov';
        alert(name + surname);
    });
    document.getElementById('buttonContainer27').appendChild(button27);

    const button28 = document.createElement('button');
    button28.innerText = '29_1';
    button28.addEventListener('click', function() {
        let str = '!!!';
        alert(str);
    });
    document.getElementById('buttonContainer28').appendChild(button28);

    const button29 = document.createElement('button');
    button29.innerText = '29_2';
    button29.addEventListener('click', function() {
        let java = 'java', script = 'script';
        alert(java + script);
    });
    document.getElementById('buttonContainer29').appendChild(button29);

    const button30 = document.createElement('button');
    button30.innerText = '29_3';
    button30.addEventListener('click', function() {
        let hello = 'Hello', world = 'world!';
        alert(hello + ' ' + world);
    });
    document.getElementById('buttonContainer30').appendChild(button30);

    const button31 = document.createElement('button');
    button31.innerText = '30_1';
    button31.addEventListener('click', function() {
        alert('ab asdasdde'.length); // выведет 11
    });
    document.getElementById('buttonContainer31').appendChild(button31);

    const button32 = document.createElement('button');
    button32.innerText = '31_1';
    button32.addEventListener('click', function() {
        let str1 = 'xxx';
        let str2 = 'yyy';
        let txt  = `aaa ${str1} bbb ${str2} ccc`;

        alert(txt);
    });
    document.getElementById('buttonContainer32').appendChild(button32);

    const button33 = document.createElement('button');
    button33.innerText = '32_1';
    button33.addEventListener('click', function() {
        let str = `a
        b
        c`;

        alert(str);
    });
    document.getElementById('buttonContainer33').appendChild(button33);

    const button34 = document.createElement('button');
    button34.innerText = '34_1';
    button34.addEventListener('click', function() {
        let a = undefined;
        alert(a); // выведет undefined
    });
    document.getElementById('buttonContainer34').appendChild(button34);

    const button35 = document.createElement('button');
    button35.innerText = '35_1';
    button35.addEventListener('click', function() {
        let a = null;
        alert(a); // выведет null
    });
    document.getElementById('buttonContainer35').appendChild(button35);

    const button36 = document.createElement('button');
    button36.innerText = '36_1';
    button36.addEventListener('click', function() {
        let a = true;
        alert(a);
    });
    document.getElementById('buttonContainer36').appendChild(button36);

    const button37 = document.createElement('button');
    button37.innerText = '36_2';
    button37.addEventListener('click', function() {
        let a = false;
        alert(a);
    });
    document.getElementById('buttonContainer37').appendChild(button37);

    const button38 = document.createElement('button');
    button38.innerText = '37_1';
    button38.addEventListener('click', function() {
        let a = 'txt1', b = 'txt2';
        alert(a * b);
    });
    document.getElementById('buttonContainer38').appendChild(button38);

    const button39 = document.createElement('button');
    button39.innerText = '38_1';
    button39.addEventListener('click', function() {
        alert(10/0);
    });
    document.getElementById('buttonContainer39').appendChild(button39);

    const button40 = document.createElement('button');
    button40.innerText = '38_2';
    button40.addEventListener('click', function() {
        alert(-10/0);
    });
    document.getElementById('buttonContainer40').appendChild(button40);

    const button41 = document.createElement('button');
    button41.innerText = '39_1';
    button41.addEventListener('click', function() {
        let a = 'text in console';
        console.log(a);
    });
    document.getElementById('buttonContainer41').appendChild(button41);

    const button42 = document.createElement('button');
    button42.innerText = '39_2';
    button42.addEventListener('click', function() {
        let a='text ', b='in', c=' console';
        console.log(a + b + c);
    });
    document.getElementById('buttonContainer42').appendChild(button42);

    const button43 = document.createElement('button');
    button43.innerText = '40_1';
    button43.addEventListener('click', function() {
        console.log(123);
        console.log('123');
    });
    document.getElementById('buttonContainer43').appendChild(button43);

    const button44 = document.createElement('button');
    button44.innerText = '41_1';
    button44.addEventListener('click', function() {
        alert(eee); // Uncaught ReferenceError ReferenceError: eee is not defined at <anonymous> (d:\JS_tasks\JS_tasks\task_18\script.js:361:15)
    });
    document.getElementById('buttonContainer44').appendChild(button44);

    const button45 = document.createElement('button');
    button45.innerText = '42_1';
    button45.addEventListener('click', function() {
        const PI = 3.14;
        let r = 5;
        alert(2*PI*r);
    });
    document.getElementById('buttonContainer45').appendChild(button45);

    const button46 = document.createElement('button');
    button46.innerText = '44_1';
    button46.addEventListener('click', function() {
        let a = '10', b = '20';
        alert(Number(a) + Number(b))
    });
    document.getElementById('buttonContainer46').appendChild(button46);

    const button47 = document.createElement('button');
    button47.innerText = '44_2';
    button47.addEventListener('click', function() {
        alert( Number('2') + Number('3') ); // 5
    });
    document.getElementById('buttonContainer47').appendChild(button47);
    
    const button48 = document.createElement('button');
    button48.innerText = '44_3';
    button48.addEventListener('click', function() {
        alert( 2 + Number('3') ); // 5
    });
    document.getElementById('buttonContainer48').appendChild(button48);

    const button49 = document.createElement('button');
    button49.innerText = '44_4';
    button49.addEventListener('click', function() {
        alert( '2' + Number('3') ); // 23
    });
    document.getElementById('buttonContainer49').appendChild(button49);

    const button50 = document.createElement('button');
    button50.innerText = '45_1';
    button50.addEventListener('click', function() {
        let a = '2';
        let b = '3';
        alert(+a + +b); // выведет '5'
    });
    document.getElementById('buttonContainer50').appendChild(button50);

    const button51 = document.createElement('button');
    button51.innerText = '47_1';
    button51.addEventListener('click', function() {
        let a = parseFloat('5px'), b = parseFloat('6px');
        alert(a+b);
    });
    document.getElementById('buttonContainer51').appendChild(button51);

    const button52 = document.createElement('button');
    button52.innerText = '47_2';
    button52.addEventListener('click', function() {
        let a = parseFloat('5.5px'), b = parseFloat('6.25px');
        alert(a+b);
    });
    document.getElementById('buttonContainer52').appendChild(button52);

    const button53 = document.createElement('button');
    button53.innerText = '47_3';
    button53.addEventListener('click', function() {
        let a = parseFloat('5.5px'), b = parseFloat('6.25px');
        alert(a+b + 'px');
    });
    document.getElementById('buttonContainer53').appendChild(button53);

    const button54 = document.createElement('button');
    button54.innerText = '48_1';
    button54.addEventListener('click', function() {
        let num1 = 1;
        let num2 = 2;
        
        alert(String(num1) + String(num2)); // выведет '12'
    });
    document.getElementById('buttonContainer54').appendChild(button54);

    const button55 = document.createElement('button');
    button55.innerText = '49_1';
    button55.addEventListener('click', function() {
        let num = 1234512312312321;
        alert(String(num).length); // найдем длину строки
    });
    document.getElementById('buttonContainer55').appendChild(button55);

    const button56 = document.createElement('button');
    button56.innerText = '49_2';
    button56.addEventListener('click', function() {
        let num1 = 1234512312312321;
        let num2 = 1234512312312321;

        alert(String(num1).length + String(num2).length);
    });
    document.getElementById('buttonContainer56').appendChild(button56);
    
    const button57 = document.createElement('button');
    button57.innerText = '48_1';
    button57.addEventListener('click', function() {
        let num1 = 1;
        let num2 = 2;
        
        alert(String(num1) + String(num2)); // выведет '12'
    });
    document.getElementById('buttonContainer57').appendChild(button57);
    
    const button58 = document.createElement('button');
    button58.innerText = '52_1';
    button58.addEventListener('click', function() {
        let str = 'abcde';
        let num = 0;
        alert(str[num]);
        num = 2;
        alert(str[num]);
        num = 4;
        alert(str[num]);
    });
    document.getElementById('buttonContainer58').appendChild(button58);
    
    const button59 = document.createElement('button');
    button59.innerText = '52_2';
    button59.addEventListener('click', function() {
        let str = 'abcde';
        let num;
        alert(str[num=4] + str[num=3] + str[num=2] + str[num=1] + str[num=0]);
    });
    document.getElementById('buttonContainer59').appendChild(button59);
    
    const button60 = document.createElement('button');
    button60.innerText = '52_3';
    button60.addEventListener('click', function() {
        let str = 'abcde';
        let num = 2;
        alert(str[num]);
    });
    document.getElementById('buttonContainer60').appendChild(button60);
    
    const button61 = document.createElement('button');
    button61.innerText = '54_1';
    button61.addEventListener('click', function() {
        let str = 'abcde';
        alert(str[str.length - 1]); // выведет 'e'
    });
    document.getElementById('buttonContainer61').appendChild(button61);
    
    const button62 = document.createElement('button');
    button62.innerText = '54_2';
    button62.addEventListener('click', function() {
        let str = 'abcde';
        alert(str[str.length - 2]);
    });
    document.getElementById('buttonContainer62').appendChild(button62);
    
    const button63 = document.createElement('button');
    button63.innerText = '54_3';
    button63.addEventListener('click', function() {
        let str = 'abcde';
        alert(str[str.length - 3]);
    });
    document.getElementById('buttonContainer63').appendChild(button63);
    
    const button64 = document.createElement('button');
    button64.innerText = '55_1';
    button64.addEventListener('click', function() {
        let test = '12345';
        alert(Number(test[0]) + Number(test[1]) + Number(test[2]) + Number(test[3]) + Number(test[4]));
    });
    document.getElementById('buttonContainer64').appendChild(button64);
    
    const button65 = document.createElement('button');
    button65.innerText = '56_1';
    button65.addEventListener('click', function() {
        let test = '12345';
        alert(Number(test[0]) + Number(test[1]) + Number(test[2]) + Number(test[3]) + Number(test[4]));
    });
    document.getElementById('buttonContainer65').appendChild(button65);
    
    const button66 = document.createElement('button');
    button66.innerText = '56_2';
    button66.addEventListener('click', function() {
        let test = '12345';
        alert(Number(test[0]) * Number(test[1]) * Number(test[2]) * Number(test[3]) * Number(test[4]));
    });
    document.getElementById('buttonContainer66').appendChild(button66);
    
    const button67 = document.createElement('button');
    button67.innerText = '56_3';
    button67.addEventListener('click', function() {
        let test = '12345';
        alert(test[4] + test[3] + test[2] + test[1] + test[0]);
    });
    document.getElementById('buttonContainer67').appendChild(button67);
    
    const button68 = document.createElement('button');
    button68.innerText = '58_1';
    button68.addEventListener('click', function() {
        let num = 47;
        num += 7;
        num -= 18;
        num *= 10;
        num /= 15;
        alert(num);
    });
    document.getElementById('buttonContainer68').appendChild(button68);
    
    const button69 = document.createElement('button');
    button69.innerText = '49_1';
    button69.addEventListener('click', function() {
        let num = 10;
        num++;
        num++;
        num--;
        alert(num);
    });
    document.getElementById('buttonContainer69').appendChild(button69);
    
    const button70 = document.createElement('button');
    button70.innerText = '61_1';
    button70.addEventListener('click', function() {
        alert(0.1 * 0.2);
    });
    document.getElementById('buttonContainer70').appendChild(button70);
    
    const button71 = document.createElement('button');
    button71.innerText = '61_2';
    button71.addEventListener('click', function() {
        alert(0.3 - 0.1);
    });
    document.getElementById('buttonContainer71').appendChild(button71);
    
    const button72 = document.createElement('button');
    button72.innerText = '62_1';
    button72.addEventListener('click', function() {
        alert('Ваше имя: ' + prompt('Ваше имя?'));
    });
    document.getElementById('buttonContainer72').appendChild(button72);
    
    const button73 = document.createElement('button');
    button73.innerText = '63_1';
    button73.addEventListener('click', function() {
        let num1 = prompt('Введите первое число');
        let num2 = prompt('Введите второе число');
        
        alert(Number(num1) + Number(num2));
    });
    document.getElementById('buttonContainer73').appendChild(button73);
    
    const button74 = document.createElement('button');
    button74.innerText = '63_2';
    button74.addEventListener('click', function() {
        let num = prompt('Введите сторону квадрата');

        alert(num*num + ' площадь квадарата')
    });
    document.getElementById('buttonContainer74').appendChild(button74);
    
    const button75 = document.createElement('button');
    button75.innerText = '63_3';
    button75.addEventListener('click', function() {
        let num1 = prompt('Введите сторону треугольника 1');
        let num2 = prompt('Введите сторону треугольника 2');
        let num3 = prompt('Введите сторону треугольника 3');

        alert(Number(num1) + Number(num2) + Number(num3) + ' периметр треугольника')
    });
    document.getElementById('buttonContainer75').appendChild(button75);
    
    const button76 = document.createElement('button');
    button76.innerText = '64_1';
    button76.addEventListener('click', function() {
        document.write('text');
    });
    document.getElementById('buttonContainer76').appendChild(button76);
    
    const button77 = document.createElement('button');
    button77.innerText = '64_2';
    button77.addEventListener('click', function() {
        document.write('<i>text</i>');
    });
    document.getElementById('buttonContainer77').appendChild(button77);
    
    const button78 = document.createElement('button');
    button78.innerText = '64_3';
    button78.addEventListener('click', function() {
        let str = 'text';
        document.write("<i>" + str + "</i>");
    });
    document.getElementById('buttonContainer78').appendChild(button78);
    
    const button79 = document.createElement('button');
    button79.innerText = '64_4';
    button79.addEventListener('click', function() {
        for (let i = 1; i <= 5; i++) {
            document.write(i + "<br>");
        }
    });
    document.getElementById('buttonContainer79').appendChild(button79);
    
    const button80 = document.createElement('button');
    button80.innerText = '65_1';
    button80.addEventListener('click', function() {
        let num1 = 1;
        let num2 = 2;
        console.log('сумма: ' + (Number(num1) + Number(num2)));
    });
    document.getElementById('buttonContainer80').appendChild(button80);
    
    const button81 = document.createElement('button');
    button81.innerText = '65_2';
    button81.addEventListener('click', function() {
        let a = 1;
        let b = 2;
        let c = prompt('Введите значение С:')
        console.log(a + b + Number(c));
    });
    document.getElementById('buttonContainer81').appendChild(button81);
    
    const button82 = document.createElement('button');
    button82.innerText = '65_3';
    button82.addEventListener('click', function() {
        let num = '123';
        let sum = Number(num[0]) + Number(num[1]) + Number(num[2]);
        console.log(sum);
    });
    document.getElementById('buttonContainer82').appendChild(button82);
    
    const button83 = document.createElement('button');
    button83.innerText = '65_4';
    button83.addEventListener('click', function() {
        let num = 123;
        console.log(String(num)[0]);
    });
    document.getElementById('buttonContainer83').appendChild(button83);
    
    const button84 = document.createElement('button');
    button84.innerText = '65_5';
    button84.addEventListener('click', function() {
        let a = 0;
        a++;
        console.log(a);
    });
    document.getElementById('buttonContainer84').appendChild(button84);
    
    const button85 = document.createElement('button');
    button85.innerText = '65_6';
    button85.addEventListener('click', function() {
        let num = 123;
        console.log(String(num).length);
    });
    document.getElementById('buttonContainer85').appendChild(button85);
    
    const button86 = document.createElement('button');
    button86.innerText = '65_7';
    button86.addEventListener('click', function() {
        let a = 24 * 60 * 60;
        console.log(a);
    });
    document.getElementById('buttonContainer86').appendChild(button86);
    
    const button87 = document.createElement('button');
    button87.innerText = '65_8';
    button87.addEventListener('click', function() {
        let num = 123;
        console.log(String(num).length);
    });
    document.getElementById('buttonContainer87').appendChild(button87);

    const button88 = document.createElement('button');
    button88.innerText = '65_9';
    button88.addEventListener('click', function() {
        let num = 123;
        console.log(String(num)[String(num).length - 1]);
    });
    document.getElementById('buttonContainer88').appendChild(button88);

    const button89 = document.createElement('button');
    button89.innerText = '65_10';
    button89.addEventListener('click', function() {
        let num = 123;
        let str = String(num);
        console.log(str.length);
    });
    document.getElementById('buttonContainer89').appendChild(button89);

    const button90 = document.createElement('button');
    button90.innerText = '65_11';
    button90.addEventListener('click', function() {
        let num = 123;
        let str = String(num);
        console.log(str[str.length - 1]);
    });
    document.getElementById('buttonContainer90').appendChild(button90);

    const button91 = document.createElement('button');
    button91.innerText = '65_12';
    button91.addEventListener('click', function() {
        let a = '123';
        let b = '456';
        let s = Number(a) + Number(b);
        
        console.log(s);
    });
    document.getElementById('buttonContainer91').appendChild(button91);

    const button92 = document.createElement('button');
    button92.innerText = '65_13';
    button92.addEventListener('click', function() {
        let aaa = 1;
        let bbb = 2;
        let ccc = 3;
        
        console.log(aaa + bbb + ccc);
    });
    document.getElementById('buttonContainer92').appendChild(button92);

    const button93 = document.createElement('button');
    button93.innerText = '66_1';
    button93.addEventListener('click', function() {
        alert(24 * 60 * 60);
    });
    document.getElementById('buttonContainer93').appendChild(button93);

    const button94 = document.createElement('button');
    button94.innerText = '66_2';
    button94.addEventListener('click', function() {
        alert(30 * 24 * 60 * 60);
    });
    document.getElementById('buttonContainer94').appendChild(button94);

    const button95 = document.createElement('button');
    button95.innerText = '66_3';
    button95.addEventListener('click', function() {
        alert(365 * 24 * 60 * 60);
    });
    document.getElementById('buttonContainer95').appendChild(button95);

    const button96 = document.createElement('button');
    button96.innerText = '66_4';
    button96.addEventListener('click', function() {
        alert(24 * 60);
    });
    document.getElementById('buttonContainer96').appendChild(button96);

    const button97 = document.createElement('button');
    button97.innerText = '66_5';
    button97.addEventListener('click', function() {
        alert(365 * 24 * 60);
    });
    document.getElementById('buttonContainer97').appendChild(button97);

    const button98 = document.createElement('button');
    button98.innerText = '66_6';
    button98.addEventListener('click', function() {
        alert(1024 * 1024);
    });
    document.getElementById('buttonContainer98').appendChild(button98);

    const button99 = document.createElement('button');
    button99.innerText = '66_7';
    button99.addEventListener('click', function() {
        alert(1024 * 1024 * 1024);
    });
    document.getElementById('buttonContainer99').appendChild(button99);

    const button100 = document.createElement('button');
    button100.innerText = '66_8';
    button100.addEventListener('click', function() {
        alert(10 * 1024 * 1024 * 1024);
    });
    document.getElementById('buttonContainer100').appendChild(button100);

    const button101 = document.createElement('button');
    button101.innerText = '66_9';
    button101.addEventListener('click', function() {
        alert(1024 * 1024 * 1024 * 1024);
    });
    document.getElementById('buttonContainer101').appendChild(button101);

    const button102 = document.createElement('button');
    button102.innerText = '66_10';
    button102.addEventListener('click', function() {
        alert(1024 * 1024 * 1024);
    });
    document.getElementById('buttonContainer102').appendChild(button102);

    const button104 = document.createElement('button');
    button104.innerText = '67_1';
    button104.addEventListener('click', function() {
        const r = 5; // Пример радиуса
        const s = Math.PI * Math.pow(r, 2);
        alert(s);
    });
    document.getElementById('buttonContainer104').appendChild(button104);
    
    const button105 = document.createElement('button');
    button105.innerText = '67_2';
    button105.addEventListener('click', function() {
        const a = 4; // Пример длины стороны
        const s = Math.pow(a, 2);
        alert(s);
    });
    document.getElementById('buttonContainer105').appendChild(button105);
    
    const button106 = document.createElement('button');
    button106.innerText = '67_3';
    button106.addEventListener('click', function() {
        const a = 4; // Пример длины стороны a
        const b = 6; // Пример длины стороны b
        const s = a * b;
        alert(s);
    });
    document.getElementById('buttonContainer106').appendChild(button106);
    
    const button107 = document.createElement('button');
    button107.innerText = '67_4';
    button107.addEventListener('click', function() {
        const a = 4; // Пример длины стороны a
        const b = 6; // Пример длины стороны b
        const p = 2 * (a + b);
        alert(p);
    });
    document.getElementById('buttonContainer107').appendChild(button107);
    
    const button108 = document.createElement('button');
    button108.innerText = '67_5';
    button108.addEventListener('click', function() {
        const tc = 25; // Пример температуры в Цельсиях
        const tf = (tc * 9/5) + 32;
        alert(tf);
    });
    document.getElementById('buttonContainer108').appendChild(button108);
    
    const button109 = document.createElement('button');
    button109.innerText = '67_6';
    button109.addEventListener('click', function() {
        const tf = 77; // Пример температуры в Фаренгейтах
        const tc = (tf - 32) * 5/9;
        alert(tc);
    });
    document.getElementById('buttonContainer109').appendChild(button109);

    const button110 = document.createElement('button');
    button110.innerText = '68_1';
    button110.addEventListener('click', function() {
        let arr = [1, 2, 3, 4, 5];

        alert(arr);
        console.log(arr);
    });
    document.getElementById('buttonContainer110').appendChild(button110);

    const button111 = document.createElement('button');
    button111.innerText = '68_2';
    button111.addEventListener('click', function() {
        let arr = ['a', 'b', 'c'];
        
        alert(arr);
        console.log(arr);
    });
    document.getElementById('buttonContainer111').appendChild(button111);

    const button112 = document.createElement('button');
    button112.innerText = '69_1';
    button112.addEventListener('click', function() {
        let arr = [1, 2, 3];

        alert(arr[0]); 
        alert(arr[1]);    
        alert(arr[2]);
    });
    document.getElementById('buttonContainer112').appendChild(button112);

    const button113 = document.createElement('button');
    button113.innerText = '69_2';
    button113.addEventListener('click', function() {
        let arr = [1, 2, 3];

        alert(arr[0]); 
        alert(arr[1]);    
        alert(arr[2]);
    });
    document.getElementById('buttonContainer113').appendChild(button113);

    const button114 = document.createElement('button');
    button114.innerText = '69_3';
    button114.addEventListener('click', function() {
        let arr = [1, 2, 3];

        alert(arr[0] + arr[1] + arr[2])
    });
    document.getElementById('buttonContainer114').appendChild(button114);

    const button115 = document.createElement('button');
    button115.innerText = '69_4';
    button115.addEventListener('click', function() {
        let arr = ['a', 'b', 'c', 'd'];

        alert(arr[0] + '+' + arr[1] + '+' + arr[2] + '+' + arr[3])
    });
    document.getElementById('buttonContainer115').appendChild(button115);

    const button116 = document.createElement('button');
    button116.innerText = '70_1';
    button116.addEventListener('click', function() {
        let arr = ['a', 'b', 'c'];
        console.log(arr.length);
    });
    document.getElementById('buttonContainer116').appendChild(button116);

    const button117 = document.createElement('button');
    button117.innerText = '70_2';
    button117.addEventListener('click', function() {
        let arr = ['a', 'b', 'c'];
        console.log(arr[arr.length - 1])
    });
    document.getElementById('buttonContainer117').appendChild(button117);

    const button118 = document.createElement('button');
    button118.innerText = '71_1';
    button118.addEventListener('click', function() {
        let arr = ['a', 'b', 'c'];

        arr[0] = '1';
        arr[1] = '2';
        arr[2] = '3';
        console.log(arr);
    });
    document.getElementById('buttonContainer118').appendChild(button118);

    const button119 = document.createElement('button');
    button119.innerText = '72_1';
    button119.addEventListener('click', function() {
        let arr = [11, 12, 13];

        arr[0] += 3;
        arr[1] += 3;
        arr[2] += 3;
        
        alert(arr);
    });
    document.getElementById('buttonContainer119').appendChild(button119);

    const button120 = document.createElement('button');
    button120.innerText = '73_1';
    button120.addEventListener('click', function() {
        let arr = [1, 2, 3];

        arr[0]++;
        arr[1]++;
        arr[2]++;
        
        alert(arr);
    });
    document.getElementById('buttonContainer120').appendChild(button120);

    const button121 = document.createElement('button');
    button121.innerText = '74_1';
    button121.addEventListener('click', function() {
        let arr = [];

        arr[0] = '1';
        arr[1] = '2';
        arr[2] = '3';
        
        alert(arr);
    });
    document.getElementById('buttonContainer121').appendChild(button121);

    const button122 = document.createElement('button');
    button122.innerText = '74_2';
    button122.addEventListener('click', function() {
        let arr = [1, 2, 3];

        arr[3] = 4;
        arr[4] = 5;

        alert(arr);
    });
    document.getElementById('buttonContainer122').appendChild(button122);

    const button123 = document.createElement('button');
    button123.innerText = '75_1';
    button123.addEventListener('click', function() {
        let arr = [];

        arr[3] = 'a';
        arr[8] = 'b';

        alert(arr.length);
    });
    document.getElementById('buttonContainer123').appendChild(button123);

    const button124 = document.createElement('button');
    button124.innerText = '76_1';
    button124.addEventListener('click', function() {
        let arr = [];

        arr.push('1');
        arr.push('2');
        arr.push('3');

        alert(arr);
    });
    document.getElementById('buttonContainer124').appendChild(button124);

    const button125 = document.createElement('button');
    button125.innerText = '76_2';
    button125.addEventListener('click', function() {
        let arr = [1, 2, 3];

        arr.push('4');
        arr.push('5');

        alert(arr);
    });
    document.getElementById('buttonContainer125').appendChild(button125);

    const button126 = document.createElement('button');
    button126.innerText = '77_1';
    button126.addEventListener('click', function() {
        let arr = ['a', 'b', 'c'];

        let key = 2;

        alert(arr[key]);
    });
    document.getElementById('buttonContainer126').appendChild(button126);

    const button127 = document.createElement('button');
    button127.innerText = '77_2';
    button127.addEventListener('click', function() {
        let arr = [1, 2, 3, 4, 5];

        let key1 = 1;
        let key2 = 2;

        alert(arr[key1] + arr[key2]);
    });
    document.getElementById('buttonContainer127').appendChild(button127);

    const button128 = document.createElement('button');
    button128.innerText = '78_1';
    button128.addEventListener('click', function() {
        let arr = ['a', 'b', 'c', 'd', 'e'];

        delete arr[1], arr[2];

        alert(arr);
        alert(arr.length);
    });
    document.getElementById('buttonContainer128').appendChild(button128);

    const button129 = document.createElement('button');
    button129.innerText = '79_1';
    button129.addEventListener('click', function() {
        let arr = [1, 2, 3, 4, 5];
        console.log(arr[arr.length -1]);
    });
    document.getElementById('buttonContainer129').appendChild(button129);

    const button130 = document.createElement('button');
    button130.innerText = '79_2';
    button130.addEventListener('click', function() {
        let arr = [1, 2, 3, 4, 5];
        console.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4]);
    });
    document.getElementById('buttonContainer130').appendChild(button130);

    const button131 = document.createElement('button');
    button131.innerText = '79_3';
    button131.addEventListener('click', function() {
        let arr = [1, 2, 3, 4, 5];
        console.log(arr.length);
    });
    document.getElementById('buttonContainer131').appendChild(button131);

    const button132 = document.createElement('button');
    button132.innerText = '79_4';
    button132.addEventListener('click', function() {
        let arr = [1, 2, 3, 4, 5];
        console.log(arr.length);
    });
    document.getElementById('buttonContainer132').appendChild(button132);

    const button133 = document.createElement('button');
    button133.innerText = '80_1';
    button133.addEventListener('click', function() {
        let obj = {1: 'mon', 2: 'tue', 3: 'wed', 4: 'thu', 5: 'fri', 6: "sat", 7: 'sun'};

        alert(obj[1] + ' ' + obj[2] + ' ' + obj[3] + ' ' + obj[4] + ' ' + obj[5] + ' ' + obj[6] + ' ' + obj[7]);
    });
    document.getElementById('buttonContainer133').appendChild(button133);

    const button134 = document.createElement('button');
    button134.innerText = '81_1';
    button134.addEventListener('click', function() {
        let obj = {1: 'Junuary', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June', 7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'};
        console.log(obj);
    });
    document.getElementById('buttonContainer134').appendChild(button134);

    const button135 = document.createElement('button');
    button135.innerText = '82_1';
    button135.addEventListener('click', function() {
        let obj = {named: 'Vladislav', surname: 'Mambetov', patronymis: 'Rustemovich'};

        alert(obj.surname + ' ' + obj.named + ' ' + obj.patronymis);
    });
    document.getElementById('buttonContainer135').appendChild(button135);

    const button136 = document.createElement('button'); 
    button136.innerText = '83_1'; 
    button136.addEventListener('click', function() {
        const now = new Date();
        const date = {
            year: now.getFullYear(),
            month: String(now.getMonth() + 1).padStart(2, '0'), // Месяцы в JS начинаются с 0
            day: String(now.getDate()).padStart(2, '0')
        };
        
        alert(`${date.year}-${date.month}-${date.day}`);
    });
    document.getElementById('buttonContainer136').appendChild(button136);

    const button137 = document.createElement('button'); 
    button137.innerText = '84_1'; 
    button137.addEventListener('click', function() {
        let obj = {
            '1a': 1,
            'b2': 2,
            'с-с': 3,
            'd 4': 4,
            'e5': 5
        };

        // Для каких ключей обязательны кавычки:
        /*
        1. '1a' - кавычки обязательны, потому что ключ начинается с цифры.
        2. 'b2' - кавычки не обязательны, так как ключ состоит из букв и цифр, и начинается с буквы.
        3. 'с-с' - кавычки обязательны, потому что ключ содержит дефис.
        4. 'd 4' - кавычки обязательны, потому что ключ содержит пробел.
        5. 'e5' - кавычки не обязательны, так как ключ состоит из букв и цифр, и начинается с буквы.
        */
    });
    document.getElementById('buttonContainer137').appendChild(button137);


    const button138 = document.createElement('button');
    button138.innerText = '84_2';
    button138.addEventListener('click', function() {
        let obj = {
            '1a': 1,
            'b2': 2,
            'с-с': 3,
            'd 4': 4,
            'e5': 5
        };

        // Исправление ошибок:
        console.log(obj['1a']);    // Исправлено: для ключа '1a' нужны кавычки
        console.log(obj.b2);       // Ошибки нет, можно использовать без кавычек
        console.log(obj['с-с']);   // Исправлено: для ключа с дефисом нужны кавычки
        console.log(obj['d 4']);   // Исправлено: для ключа с пробелом нужны кавычки
        console.log(obj.e5);       // Ошибки нет, можно использовать без кавычек
    });
    document.getElementById('buttonContainer138').appendChild(button138);

    const button139 = document.createElement('button'); 
    button139.innerText = '85_1'; 
    button139.addEventListener('click', function() {
        let obj = {x: 1, y: 2, z: 3};
    
        for (let key in obj) {
            obj[key] = obj[key] ** 2;
        }
    
        console.log(obj);
    });
    document.getElementById('buttonContainer139').appendChild(button139);

    const button140 = document.createElement('button'); 
    button140.innerText = '86_1'; 
    button140.addEventListener('click', function() {
        let obj = {};
    
        obj.name = 'John';
        obj.age = 30;
        obj.country = 'USA';
    
        alert(`Name: ${obj.name}, Age: ${obj.age}, Country: ${obj.country}`);
    });
    document.getElementById('buttonContainer140').appendChild(button140);

    const button141 = document.createElement('button');
    button141.innerText = '87_1';
    button141.addEventListener('click', function() {
        let obj = {7: 'a', 50: 'b', 23: 'c'};

        console.log(obj[50]); // выведет 'b'
        console.log(obj[7]); // выведет 'a'
        console.log(obj[23]); // выведет 'c'
    });
    document.getElementById('buttonContainer141').appendChild(button141);

    const button142 = document.createElement('button');
    button142.innerText = '88_1';
    button142.addEventListener('click', function() {
        let obj = {x: 1, y: 2, z: 3};

        let keys = Object.keys(obj);

        console.log(keys);
    });
    document.getElementById('buttonContainer142').appendChild(button142);

    const button143 = document.createElement('button');
    button143.innerText = '89_1';
    button143.addEventListener('click', function() {
        let obj = {x: 1, y: 2, z: 3};

        console.log(Object.keys(obj).length); // выведет 3
    });
    document.getElementById('buttonContainer143').appendChild(button143);

    const button144 = document.createElement('button');
    button144.innerText = '90_1';
    button144.addEventListener('click', function() {
        let obj = {x: 1, y: 2, z: 3};

        let key = 'x';

        alert(obj[key]);
    });
    document.getElementById('buttonContainer144').appendChild(button144);

    const button145 = document.createElement('button'); 
    button145.innerText = '91_1'; 
    button145.addEventListener('click', function() {
        let obj = {x: 1, y: 2, z: 3};
        console.log(obj['x']);
    });
    document.getElementById('buttonContainer145').appendChild(button145);

    const button146 = document.createElement('button'); 
    button146.innerText = '91_2'; 
    button146.addEventListener('click', function() {
        let obj = {x: 1, y: 2, z: 3};
        let key = 'x';
        console.log(obj[key]);
    });
    document.getElementById('buttonContainer146').appendChild(button146);

    const button147 = document.createElement('button'); 
    button147.innerText = '92_1'; 
    button147.addEventListener('click', function() {
        let obj = {x: 1, y: 2, z: 3};
        let prop = 'x';
        console.log(obj[prop]);
    });
    document.getElementById('buttonContainer147').appendChild(button147);

    const button148 = document.createElement('button'); 
    button148.innerText = '92_2'; 
    button148.addEventListener('click', function() {
        let obj = {x: 1, y: 2, z: 3};
        let prop = 'x';
        console.log(obj[prop]);
    });
    document.getElementById('buttonContainer148').appendChild(button148);

    const button149 = document.createElement('button'); 
    button149.innerText = '93_1'; 
    button149.addEventListener('click', function() {
        let key = 'x';
        let obj = {
            [key]: 1,
            y: 2,
            z: 3
        };
        console.log(obj[key]);
    });
    document.getElementById('buttonContainer149').appendChild(button149);

    const button150 = document.createElement('button'); 
    button150.innerText = '93_2'; 
    button150.addEventListener('click', function() {
        let obj = {
            x: 1,
            y: 2,
            z: 3
        };
        let key1 = 'x';
        let key2 = 'y';
        let key3 = 'z';
        alert(`x: ${obj[key1]}, y: ${obj[key2]}, z: ${obj[key3]}`);
    });
    document.getElementById('buttonContainer150').appendChild(button150);

    const button151 = document.createElement('button'); 
    button151.innerText = '94_1'; 
    button151.addEventListener('click', function() {
        let obj = {x: 1, y: 2, z: 3};
    
        // Проверяем наличие ключей в объекте
        console.log('x' in obj); // Выводит true, так как ключ 'x' существует в объекте
        console.log('w' in obj); // Выводит false, так как ключ 'w' отсутствует в объекте
    });
    document.getElementById('buttonContainer151').appendChild(button151);

    const button152 = document.createElement('button'); 
    button152.innerText = '95_1'; 
    button152.addEventListener('click', function() {
        let obj = {x: 1, y: 2, z: 3};
        delete obj.x;
    
        // Проверяем наличие ключа 'x' в объекте
        console.log('x' in obj); // Выводит false, так как ключ 'x' был удалён
    });
    document.getElementById('buttonContainer152').appendChild(button152);

    const button153 = document.createElement('button'); 
    button153.innerText = '96_1'; 
    button153.addEventListener('click', function() {
        console.log(typeof {x: 1, y: 2, z: 3}); // Выводит 'object', так как это объект
    });
    document.getElementById('buttonContainer153').appendChild(button153);

    const button154 = document.createElement('button'); 
    button154.innerText = '96_2'; 
    button154.addEventListener('click', function() {
        console.log(typeof {}); // Выводит 'object', так как это пустой объект
    });
    document.getElementById('buttonContainer154').appendChild(button154);

    const button155 = document.createElement('button'); 
    button155.innerText = '96_3'; 
    button155.addEventListener('click', function() {
        let obj = {x: 1, y: 2, z: 3};
        console.log(typeof obj); // Выводит 'object', так как obj является объектом
    });
    document.getElementById('buttonContainer155').appendChild(button155);

    const button156 = document.createElement('button'); 
    button156.innerText = '96_4'; 
    button156.addEventListener('click', function() {
        let obj = {x: 1, y: 2, z: 3};
        console.log(typeof obj['x']); // Выводит 'number', так как значение obj['x'] равно 1
    });
    document.getElementById('buttonContainer156').appendChild(button156);

    const button157 = document.createElement('button'); 
    button157.innerText = '97_1'; 
    button157.addEventListener('click', function() {
        console.log(typeof {x: 1, y: 2, z: 3}); // Выводит 'object', так как это объект
    });
    document.getElementById('buttonContainer157').appendChild(button157);

    const button158 = document.createElement('button'); 
    button158.innerText = '97_2'; 
    button158.addEventListener('click', function() {
        console.log(typeof [1, 2, 3]); // Выводит 'object', так как массивы также являются объектами
    });
    document.getElementById('buttonContainer158').appendChild(button158);

    const button159 = document.createElement('button'); 
    button159.innerText = '97_3'; 
    button159.addEventListener('click', function() {
        let arr = [1, 2, 3];
        console.log(typeof arr); // Выводит 'object', так как переменная arr — это массив (объект)
    });
    document.getElementById('buttonContainer159').appendChild(button159);

    const button160 = document.createElement('button'); 
    button160.innerText = '97_4'; 
    button160.addEventListener('click', function() {
        let arr = [1, 2, 3];
        console.log(typeof arr[0]); // Выводит 'number', так как arr[0] равно 1
    });
    document.getElementById('buttonContainer160').appendChild(button160);

    const button161 = document.createElement('button'); 
    button161.innerText = '97_5'; 
    button161.addEventListener('click', function() {
        let arr = ['1', '2', '3'];
        console.log(typeof arr[0]); // Выводит 'string', так как arr[0] равно '1', что является строкой
    });
    document.getElementById('buttonContainer161').appendChild(button161);

    const button162 = document.createElement('button'); 
    button162.innerText = '98_1'; 
    button162.addEventListener('click', function() {
        console.log(Array.isArray([1, 2, 3])); // Выводит true, так как [1, 2, 3] является массивом
    });
    document.getElementById('buttonContainer162').appendChild(button162);

    const button163 = document.createElement('button'); 
    button163.innerText = '98_2'; 
    button163.addEventListener('click', function() {
        console.log(Array.isArray({x: 1, y: 2, z: 3})); // Выводит false, так как {x: 1, y: 2, z: 3} является объектом, а не массивом
    });
    document.getElementById('buttonContainer163').appendChild(button163);

    const button164 = document.createElement('button'); 
    button164.innerText = '99_1'; 
    button164.addEventListener('click', function() {
        let test = {x: 1, y: 2, z: 3};
        console.log(test); // Выводит объект: {x: 1, y: 2, z: 3}. Это объект, не примитив.
    });
    document.getElementById('buttonContainer164').appendChild(button164);

    const button165 = document.createElement('button'); 
    button165.innerText = '99_2'; 
    button165.addEventListener('click', function() {
        let test = {x: 1, y: 2, z: 3};
        console.log(test.x); // Выводит 1. Это примитив (число).
    });
    document.getElementById('buttonContainer165').appendChild(button165);

    const button166 = document.createElement('button'); 
    button166.innerText = '99_3'; 
    button166.addEventListener('click', function() {
        let test = [1, 2, 3];
        console.log(test); // Выводит массив: [1, 2, 3]. Это объект, не примитив.
    });
    document.getElementById('buttonContainer166').appendChild(button166);

    const button167 = document.createElement('button'); 
    button167.innerText = '99_4'; 
    button167.addEventListener('click', function() {
        let test = [1, 2, 3];
        console.log(test[1]); // Выводит 2. Это примитив (число).
    });
    document.getElementById('buttonContainer167').appendChild(button167);

    const button168 = document.createElement('button'); 
    button168.innerText = '99_5'; 
    button168.addEventListener('click', function() {
        let test1 = [1, 2, 3];
        let test2 = 1;
        console.log(test1); // Выводит массив: [1, 2, 3]. Это объект, не примитив.
    });
    document.getElementById('buttonContainer168').appendChild(button168);

    const button169 = document.createElement('button'); 
    button169.innerText = '99_6'; 
    button169.addEventListener('click', function() {
        let test1 = [1, 2, 3];
        let test2 = 1;
        console.log(test1[test2]); // Выводит 2. Это примитив (число).
    });
    document.getElementById('buttonContainer169').appendChild(button169);

    const button170 = document.createElement('button'); 
    button170.innerText = '99_7'; 
    button170.addEventListener('click', function() {
        // Перечисляем примитивные типы данных в JavaScript
        console.log("Примитивные типы данных в JavaScript: undefined, null, boolean, number, string, symbol, bigint.");
    });
    document.getElementById('buttonContainer170').appendChild(button170);

    const button171 = document.createElement('button'); 
    button171.innerText = '100_1'; 
    button171.addEventListener('click', function() {
        let arr1 = [1, 2, 3];
        let arr2 = arr1;

        arr1[0] = 'a';
        console.log(arr2); // Выводит ['a', 2, 3]. arr2 ссылается на тот же массив, что и arr1.
    });
    document.getElementById('buttonContainer171').appendChild(button171);

    const button172 = document.createElement('button'); 
    button172.innerText = '100_2'; 
    button172.addEventListener('click', function() {
        let arr1 = [1, 2, 3];
        let arr2 = arr1;

        arr1[0] = 'a';
        arr2[1] = 'b';

        console.log(arr1); // Выводит ['a', 'b', 3]. Изменения в arr2 отражаются в arr1, так как это один и тот же массив.
    });
    document.getElementById('buttonContainer172').appendChild(button172);

    const button173 = document.createElement('button'); 
    button173.innerText = '100_3'; 
    button173.addEventListener('click', function() {
        let arr1 = [1, 2, 3];
        let arr2 = arr1;

        arr1[0] = 'a';
        arr2[0] = 'b';

        console.log(arr2); // Выводит ['b', 2, 3]. arr2 ссылается на тот же массив, поэтому изменение arr2[0] также изменяет arr1[0].
    });
    document.getElementById('buttonContainer173').appendChild(button173);

    const button174 = document.createElement('button'); 
    button174.innerText = '101_1'; 
    button174.addEventListener('click', function() {
        const arr = ['a', 'b', 'c'];
        arr[1] = '!'; // Изменяем второй элемент массива на '!'
        console.log(arr); // Выводит ['a', '!', 'c'].
    });
    document.getElementById('buttonContainer174').appendChild(button174);

    const button175 = document.createElement('button'); 
    button175.innerText = '101_2'; 
    button175.addEventListener('click', function() {
        const arr = ['a', 'b', 'c'];
        arr = [1, 2, 3]; // Попытка изменить ссылку на массив, что вызовет ошибку.
        console.log(arr); // Ошибка: TypeError: Assignment to constant variable.
    });
    document.getElementById('buttonContainer175').appendChild(button175);

    const button176 = document.createElement('button'); 
    button176.innerText = '101_3'; 
    button176.addEventListener('click', function() {
        const arr = ['a', 'b', 'c'];
        arr = ['a', 'b', 'c']; // Попытка изменить ссылку на массив, что вызовет ошибку.
        console.log(arr); // Ошибка: TypeError: Assignment to constant variable.
    });
    document.getElementById('buttonContainer176').appendChild(button176);

    const button177 = document.createElement('button'); 
    button177.innerText = '102_1'; 
    button177.addEventListener('click', function() {
        const arr = [1, 2, 3, 4, 5];
        const res = arr[1] + arr[2];

        console.log(res); // Выводит 5 (2 + 3).
    });
    document.getElementById('buttonContainer177').appendChild(button177);

    const button178 = document.createElement('button'); 
    button178.innerText = '103_1'; 
    button178.addEventListener('click', function() {
        let obj = {x: 1, y: 2, z: 3};
        console.log(obj['x']);
    });
    document.getElementById('buttonContainer178').appendChild(button178);

    const button179 = document.createElement('button'); 
    button179.innerText = '103_2'; 
    button179.addEventListener('click', function() {
        let obj = {x: 1, y: 2, z: 3};
        let key = 'x';
        
        console.log(obj[key]);
    });
    document.getElementById('buttonContainer179').appendChild(button179);

    const button180 = document.createElement('button'); 
    button180.innerText = '103_3'; 
    button180.addEventListener('click', function() {
        let obj = {x: 1, y: 2, z: 3};
        let sum = obj['x'] + obj['y'] + obj['z'];
        
        console.log(sum);
    });
    document.getElementById('buttonContainer180').appendChild(button180);

    const button181 = document.createElement('button'); 
    button181.innerText = '103_4'; 
    button181.addEventListener('click', function() {
        let obj = {x: 1, y: 2, z: 3};
        console.log(Object.keys(obj).length);
    });
    document.getElementById('buttonContainer181').appendChild(button181);

    const button182 = document.createElement('button'); 
    button182.innerText = '105_1'; 
    button182.addEventListener('click', function() {
        const test = 12;
        if (test > 10) {
            console.log('Переменная test больше 10');
        } else {
            console.log('Переменная test не больше 10');
        }
    });
    document.getElementById('buttonContainer182').appendChild(button182);

    const button183 = document.createElement('button'); 
    button183.innerText = '105_2'; 
    button183.addEventListener('click', function() {
        const test = 8;
        if (test < 10) {
            console.log('Переменная test меньше 10');
        } else {
            console.log('Переменная test не меньше 10');
        }
    });
    document.getElementById('buttonContainer183').appendChild(button183);

    const button184 = document.createElement('button'); 
    button184.innerText = '105_3'; 
    button184.addEventListener('click', function() {
        const test = 10;
        if (test >= 10) {
            console.log('Переменная test больше или равна 10');
        } else {
            console.log('Переменная test меньше 10');
        }
    });
    document.getElementById('buttonContainer184').appendChild(button184);

    const button185 = document.createElement('button'); 
    button185.innerText = '105_4'; 
    button185.addEventListener('click', function() {
        const test = 10;
        if (test <= 10) {
            console.log('Переменная test меньше или равна 10');
        } else {
            console.log('Переменная test больше 10');
        }
    });
    document.getElementById('buttonContainer185').appendChild(button185);

    const button186 = document.createElement('button'); 
    button186.innerText = '106_1'; 
    button186.addEventListener('click', function() {
        const test = 10;
        if (test === 10) {
            console.log('Переменная test равна 10');
        } else {
            console.log('Переменная test не равна 10');
        }
    });
    document.getElementById('buttonContainer186').appendChild(button186);

    const button187 = document.createElement('button'); 
    button187.innerText = '107_1'; 
    button187.addEventListener('click', function() {
        const test = 10;
        if (test !== 10) {
            console.log('Переменная test не равна 10');
        } else {
            console.log('Переменная test равна 10');
        }
    });
    document.getElementById('buttonContainer187').appendChild(button187);

    const button188 = document.createElement('button'); 
    button188.innerText = '108_1'; 
    button188.addEventListener('click', function() {
        const test1 = 10;
        const test2 = 15;

        if (test1 > test2) {
            console.log('test1 больше test2');
        } else if (test1 < test2) {
            console.log('test2 больше test1');
        } else {
            console.log('test1 и test2 равны');
        }
    });
    document.getElementById('buttonContainer188').appendChild(button188);

    const button189 = document.createElement('button'); 
    button189.innerText = '108_2'; 
    button189.addEventListener('click', function() {
        const test1 = 10;
        const test2 = 10;

        if (test1 === test2) {
            console.log('test1 равен test2');
        } else {
            console.log('test1 не равен test2');
        }
    });
    document.getElementById('buttonContainer189').appendChild(button189);

    const button190 = document.createElement('button'); 
    button190.innerText = '109_1'; 
    button190.addEventListener('click', function() {
        const test1 = 'Hello';
        const test2 = 'Hello';

        if (test1 === test2) {
            console.log('test1 равен test2');
        } else {
            console.log('test1 не равен test2');
        }
    });
    document.getElementById('buttonContainer190').appendChild(button190);

    const button191 = document.createElement('button'); 
    button191.innerText = '110_1'; 
    button191.addEventListener('click', function() {
        let test1 = '123';
        let test2 = 123;

        if (test1 === test2) {
            console.log('test1 равен test2');
        } else {
            console.log('test1 не равен test2');
        }
    });
    document.getElementById('buttonContainer191').appendChild(button191);

    const button192 = document.createElement('button'); 
    button192.innerText = '111_1'; 
    button192.addEventListener('click', function() {
        let test1 = '3';
        let test2 = '3';
        
        if (test1 == test2) {
            console.log('+++'); // Выведется '+++'
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer192').appendChild(button192);

    const button193 = document.createElement('button'); 
    button193.innerText = '111_2'; 
    button193.addEventListener('click', function() {
        let test1 = '3';
        let test2 = '3';
        
        if (test1 === test2) {
            console.log('+++'); // Выведется '+++'
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer193').appendChild(button193);

    const button194 = document.createElement('button'); 
    button194.innerText = '111_3'; 
    button194.addEventListener('click', function() {
        let test1 = 3;
        let test2 = '3';
        
        if (test1 == test2) {
            console.log('+++'); // Выведется '+++'
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer194').appendChild(button194);

    const button195 = document.createElement('button'); 
    button195.innerText = '111_4'; 
    button195.addEventListener('click', function() {
        let test1 = 3;
        let test2 = '3';
        
        if (test1 === test2) {
            console.log('+++'); // Выведется '---'
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer195').appendChild(button195);

    const button196 = document.createElement('button'); 
    button196.innerText = '111_5'; 
    button196.addEventListener('click', function() {
        let test1 = 3;
        let test2 = 3;
        
        if (test1 === test2) {
            console.log('+++'); // Выведется '+++'
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer196').appendChild(button196);

    const button197 = document.createElement('button'); 
    button197.innerText = '112_1'; 
    button197.addEventListener('click', function() {
        let test1 = '3';
        let test2 = '3';
            
        if (test1 != test2) {
            console.log('+++'); // Выведется '---'
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer197').appendChild(button197);

    const button198 = document.createElement('button'); 
    button198.innerText = '112_2'; 
    button198.addEventListener('click', function() {
        let test1 = '3';
        let test2 = '3';
            
        if (test1 !== test2) {
            console.log('+++'); // Выведется '---'
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer198').appendChild(button198);

    const button199 = document.createElement('button'); 
    button199.innerText = '112_3'; 
    button199.addEventListener('click', function() {
        let test1 = 3;
        let test2 = '3';
            
        if (test1 != test2) {
            console.log('+++'); // Выведется '---'
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer199').appendChild(button199);

    const button200 = document.createElement('button'); 
    button200.innerText = '112_4'; 
    button200.addEventListener('click', function() {
        let test1 = 3;
        let test2 = '3';
            
        if (test1 !== test2) {
            console.log('+++'); // Выведется '+++'
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer200').appendChild(button200);

    const button201 = document.createElement('button'); 
    button201.innerText = '112_5'; 
    button201.addEventListener('click', function() {
        let test1 = 3;
        let test2 = 2;
            
        if (test1 !== test2) {
            console.log('+++'); // Выведется '+++'
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer201').appendChild(button201);

    const button202 = document.createElement('button'); 
    button202.innerText = '113_1'; 
    button202.addEventListener('click', function() {
        let num = 3;
        if (num > 0 && num < 5) {
            console.log('num больше 0 и меньше 5');
        } else {
            console.log('num не в пределах от 0 до 5');
        }
    });
    document.getElementById('buttonContainer202').appendChild(button202);

    const button203 = document.createElement('button'); 
    button203.innerText = '113_2'; 
    button203.addEventListener('click', function() {
        let num = 15;
        if (num >= 10 && num <= 20) {
            console.log('num больше или равен 10 и меньше или равен 20');
        } else {
            console.log('num не в пределах от 10 до 20');
        }
    });
    document.getElementById('buttonContainer203').appendChild(button203);

    const button204 = document.createElement('button'); 
    button204.innerText = '113_3'; 
    button204.addEventListener('click', function() {
        let num1 = 1;
        let num2 = 3;
        if (num1 <= 1 && num2 >= 3) {
            console.log('num1 меньше или равен 1 и num2 больше или равен 3');
        } else {
            console.log('Условия не выполнены');
        }
    });
    document.getElementById('buttonContainer204').appendChild(button204);

    const button205 = document.createElement('button'); 
    button205.innerText = '114_1'; 
    button205.addEventListener('click', function() {
        let num1 = -10;
        let num2 = -10;

        // Проверяем, являются ли обе переменные неотрицательными
        if (num1 >= 0 || num2 >= 0) {
            console.log('+++'); // Если хотя бы одна переменная неотрицательная, выводим '+++'
        } else {
            console.log('---'); // Если обе переменные отрицательные, выводим '---'
        }
    });
    document.getElementById('buttonContainer205').appendChild(button205);

    const button206 = document.createElement('button');
    button206.innerText = '114_2';
    button206.addEventListener('click', function() {
        let num1 = 0;
        let num2 = 0;

        // Проверяем, являются ли обе переменные неотрицательными
        if (num1 >= 0 || num2 >= 0) {
            console.log('+++'); // Одна из переменных неотрицательная, выводим '+++'
        } else {
            console.log('---'); // Не должно произойти, так как 0 не отрицательное
        }
    });
    document.getElementById('buttonContainer206').appendChild(button206);

    const button207 = document.createElement('button');
    button207.innerText = '114_3';
    button207.addEventListener('click', function() {
        let num1 = 0;
        let num2 = 5;

        // Проверяем, являются ли обе переменные неотрицательными
        if (num1 >= 0 || num2 >= 0) {
            console.log('+++'); // Одна из переменных неотрицательная, выводим '+++'
        } else {
            console.log('---'); // Не должно произойти, так как 0 не отрицательное
        }
    });
    document.getElementById('buttonContainer207').appendChild(button207);

    const button208 = document.createElement('button');
    button208.innerText = '114_4';
    button208.addEventListener('click', function() {
        let num1 = 5;
        let num2 = 5;

        // Проверяем, являются ли обе переменные неотрицательными
        if (num1 >= 0 || num2 >= 0) {
            console.log('+++'); // Одна из переменных неотрицательная, выводим '+++'
        } else {
            console.log('---'); // Не должно произойти, так как обе переменные не отрицательные
        }
    });
    document.getElementById('buttonContainer208').appendChild(button208);

    const button209 = document.createElement('button');
    button209.innerText = '114_5';
    button209.addEventListener('click', function() {
        let num1 = -5;
        let num2 = 15;

        // Проверяем, являются ли обе переменные неотрицательными
        if (num1 >= 0 || num2 >= 0) {
            console.log('+++'); // Одна из переменных неотрицательная, выводим '+++'
        } else {
            console.log('---'); // Не должно произойти, так как одна из переменных отрицательная
        }
    });
    document.getElementById('buttonContainer209').appendChild(button209);

    const button210 = document.createElement('button');
    button210.innerText = '114_6';
    button210.addEventListener('click', function() {
        let num = 1;

        // Проверяем, равно ли значение 0 или 1
        if (num == 0 || num == 1) {
            console.log('+++'); // Если значение 0 или 1, выводим '+++'
        } else {
            console.log('---'); // Не должно произойти, так как num равно 1
        }
    });
    document.getElementById('buttonContainer210').appendChild(button210);

    const button211 = document.createElement('button');
    button211.innerText = '114_7';
    button211.addEventListener('click', function() {
        let num = 2;

        // Проверяем, равно ли значение 0 или 1
        if (num == 0 || num == 1) {
            console.log('+++'); // Не должно произойти, так как num равно 2
        } else {
            console.log('---'); // Выводим '---', так как значение не равно 0 или 1
        }
    });
    document.getElementById('buttonContainer211').appendChild(button211);

    const button212 = document.createElement('button');
    button212.innerText = '114_8';
    button212.addEventListener('click', function() {
        let num = 2;

        // Проверяем, равно ли значение 0, 1 или 2
        if (num == 0 || num == 1 || num == 2) {
            console.log('+++'); // Если значение равно 0, 1 или 2, выводим '+++'
        } else {
            console.log('---'); // Не должно произойти, так как num равно 2
        }
    });
    document.getElementById('buttonContainer212').appendChild(button212);

    const button213 = document.createElement('button'); 
    button213.innerText = '115_1'; 
    button213.addEventListener('click', function() {
        // В условии сравнения выполняется следующее:
        // 1. Сначала проверяется условие num == 0.
        // 2. Если num равно 0, блок if выполняется и выводится '+++'
        // 3. Если num не равно 0, происходит проверка следующего условия:
        //    4. Оператор && имеет более высокий приоритет, поэтому сначала
        //       проверяется выражение (num > 1 && num < 5).
        // 5. Если num больше 1 и меньше 5, то блок if выполняется и выводится '+++'.
        // 6. Если оба условия (num > 1 и num < 5) ложные, тогда выполняется блок else и выводится '---'.
        
        let num = 2;

        if (num == 0 || (num > 1 && num < 5)) {
            console.log('+++'); // Если num равно 0 или находится в диапазоне от 1 до 5
        } else {
            console.log('---'); // Если ни одно из условий не выполнено
        }
    });
    document.getElementById('buttonContainer213').appendChild(button213);

    const button214 = document.createElement('button'); 
    button214.innerText = '116_1'; 
    button214.addEventListener('click', function() {
        let num = 3;

        // Явный приоритет операций:
        // 1. Сначала выполняется сравнение: num > 5 (ложно)
        // 2. Затем: num < 10 (истинно)
        // 3. Затем выполняется оператор &&:
        //    (num > 5 && num < 10) => (ложно && истинно) => ложно
        // 4. Затем: num == 20 (ложно)
        // 5. Затем выполняется оператор ||:
        //    (ложно || ложно) => ложно
        // Поэтому вывод будет '---'.
        
        if (num > 5 && num < 10 || num == 20) {
            console.log('+++');
        } else {
            console.log('---'); // Вывод: ---
        }
    });
    document.getElementById('buttonContainer214').appendChild(button214);

    const button215 = document.createElement('button'); 
    button215.innerText = '116_2'; 
    button215.addEventListener('click', function() {
        let num = 3;

        // Явный приоритет операций:
        // 1. Сначала выполняется сравнение: num > 5 (ложно)
        // 2. Затем выполняется оператор &&:
        //    num > 0 (истинно) && num < 3 (ложно) => (истинно && ложно) => ложно
        // 3. Затем выполняется оператор ||:
        //    (ложно || ложно) => ложно
        // Поэтому вывод будет '---'.

        if (num > 5 || num > 0 && num < 3) {
            console.log('+++');
        } else {
            console.log('---'); // Вывод: ---
        }
    });
    document.getElementById('buttonContainer215').appendChild(button215);

    const button216 = document.createElement('button'); 
    button216.innerText = '116_3'; 
    button216.addEventListener('click', function() {
        let num = 3;

        // Явный приоритет операций:
        // 1. Сначала выполняется сравнение: num == 9 (ложно)
        // 2. Затем выполняется оператор &&:
        //    num > 10 (ложно) && num < 20 (истинно) => (ложно && истинно) => ложно
        // 3. Затем выполняется оператор ||:
        //    (ложно || ложно) => ложно
        // 4. Затем: num > 20 (ложно) && num < 30 (истинно) => (ложно && истинно) => ложно
        // 5. В конце: (ложно || ложно) => ложно
        // Поэтому вывод будет '---'.

        if (num == 9 || num > 10 && num < 20 || num > 20 && num < 30) {
            console.log('+++');
        } else {
            console.log('---'); // Вывод: ---
        }
    });
    document.getElementById('buttonContainer216').appendChild(button216);

    const button217 = document.createElement('button'); 
    button217.innerText = '117_1'; 
    button217.addEventListener('click', function() {
        let num1 = -2, num2= 12;
        // Исходный код
        // if (num1 >= 0 || num2 <= 10) {
        //     console.log('+++');
        // } else {
        //     console.log('---');
        // }

        // Инвертированное условие с использованием оператора !
        if (!(num1 >= 0 || num2 <= 10)) {
            console.log('+++'); // Это будет выполняться, если num1 < 0 и num2 > 10
        } else {
            console.log('---'); // Это будет выполняться, если хотя бы одно из условий истинно
        }
    });
    document.getElementById('buttonContainer217').appendChild(button217);

    const button218 = document.createElement('button'); 
    button218.innerText = '118_1'; 
    button218.addEventListener('click', function() {
        let test = true;

        if (test === true) {
            console.log('test равен true'); // Вывод: test равен true
        } else {
            console.log('test не равен true');
        }
    });
    document.getElementById('buttonContainer218').appendChild(button218);

    const button219 = document.createElement('button'); 
    button219.innerText = '118_2'; 
    button219.addEventListener('click', function() {
        let test = false;

        if (test === false) {
            console.log('test равен false'); // Вывод: test равен false
        } else {
            console.log('test не равен false');
        }
    });
    document.getElementById('buttonContainer219').appendChild(button219);

    const button220 = document.createElement('button'); 
    button220.innerText = '119_1'; 
    button220.addEventListener('click', function() {
        console.log('Значения, которые при приведении к логическому типу дают false:')
        console.log('1. false')
        console.log('2. 0')
        console.log("3. '' (пустая строка)")
        console.log('4. null')
        console.log('5. undefined')
        console.log('6. NaN')
    });
    document.getElementById('buttonContainer220').appendChild(button220);

    const button221 = document.createElement('button'); 
    button221.innerText = '119_2'; 
    button221.addEventListener('click', function() {
        let test = 1;
        if (test == true) {
            console.log('+++');
        } else {
            console.log('---');
        }
        // Поскольку 1 при приведении к логическому типу становится true,
        // то условие test == true будет истинным.  
    });
    document.getElementById('buttonContainer221').appendChild(button221);

    const button222 = document.createElement('button'); 
    button222.innerText = '119_3'; 
    button222.addEventListener('click', function() {
        let test = 0;
		
        if (test == true) {
            console.log('+++');
        } else {
            console.log('---');
        }
        // Поскольку 0 при приведении к логическому типу становится false,
        // то условие test == true будет ложным.
    });
    document.getElementById('buttonContainer222').appendChild(button222);

    const button223 = document.createElement('button'); 
    button223.innerText = '119_4'; 
    button223.addEventListener('click', function() {
        let test = 1;
		
        if (test == false) {
            console.log('+++');
        } else {
            console.log('---');
        }
        // Поскольку 1 при приведении к логическому типу становится true,
        // то условие test == false будет ложным.
    });
    document.getElementById('buttonContainer223').appendChild(button223);

    const button224 = document.createElement('button'); 
    button224.innerText = '119_5'; 
    button224.addEventListener('click', function() {
        let test = 1;
		
        if (test != true) {
            console.log('+++');
        } else {
            console.log('---');
        }
        // Поскольку 1 при приведении к логическому типу становится true,
        // то условие test != true будет ложным.
    });
    document.getElementById('buttonContainer224').appendChild(button224);

    const button225 = document.createElement('button'); 
    button225.innerText = '119_6'; 
    button225.addEventListener('click', function() {
        let test = '';
		
        if (test == false) {
            console.log('+++');
        } else {
            console.log('---');
        }
        // Поскольку пустая строка при приведении к логическому типу становится false,
        // то условие test == false будет истинным.
    });
    document.getElementById('buttonContainer225').appendChild(button225);

    const button226 = document.createElement('button'); 
    button226.innerText = '119_7'; 
    button226.addEventListener('click', function() {
        let test;
		
        if (test == true) {
            console.log('+++');
        } else {
            console.log('---');
        }
        // Поскольку переменная test не инициализирована (undefined), то условие test == true будет ложным.
    });
    document.getElementById('buttonContainer226').appendChild(button226);

    const button227 = document.createElement('button'); 
    button227.innerText = '119_8'; 
    button227.addEventListener('click', function() {
        let test = 3 * 'a';
		
        if (test == true) {
            console.log('+++');
        } else {
            console.log('---');
        }
        // Поскольку NaN при приведении к логическому типу становится false,
        // то условие test == true будет ложным.
    });
    document.getElementById('buttonContainer227').appendChild(button227);

    const button228 = document.createElement('button'); 
    button228.innerText = '120_1'; 
    button228.addEventListener('click', function() {
        let test = true;

        if (test) {
            console.log('+++');
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer228').appendChild(button228);

    const button229 = document.createElement('button'); 
    button229.innerText = '121_1'; 
    button229.addEventListener('click', function() {
        let test = true;

        if (!test) {
            console.log('+++');
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer229').appendChild(button229);

    const button230 = document.createElement('button'); 
    button230.innerText = '121_2'; 
    button230.addEventListener('click', function() {
        let test = true;

        if (!test) {
            console.log('+++');
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer230').appendChild(button230);

    const button231 = document.createElement('button'); 
    button231.innerText = '121_3'; 
    button231.addEventListener('click', function() {
        let test = true;

        if (test) {
            console.log('+++');
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer231').appendChild(button231);

    const button232 = document.createElement('button'); 
    button232.innerText = '122_1'; 
    button232.addEventListener('click', function() {
        let test = 3;

        // Не запуская код, определите, что выведется в консоль
        // Код:
        if (test) {
            console.log('+++');
        } else {
            console.log('---');
        }
        // Поскольку 3 является истинным значением, вывод будет '+++'
        console.log('+++'); // Вывод: +++
    });
    document.getElementById('buttonContainer232').appendChild(button232);

    const button233 = document.createElement('button'); 
    button233.innerText = '122_2'; 
    button233.addEventListener('click', function() {
        let test = 'abc';

        // Не запуская код, определите, что выведется в консоль
        // Код:
        if (test) {
            console.log('+++');
        } else {
            console.log('---');
        }
        // Поскольку непустая строка является истинным значением, вывод будет '+++'
        console.log('+++'); // Вывод: +++
    });
    document.getElementById('buttonContainer233').appendChild(button233);

    const button234 = document.createElement('button'); 
    button234.innerText = '122_3'; 
    button234.addEventListener('click', function() {
        let test = '';

        // Не запуская код, определите, что выведется в консоль
        // Код:
        if (test) {
            console.log('+++');
        } else {
            console.log('---');
        }
        // Поскольку пустая строка является ложным значением, вывод будет '---'
        console.log('---'); // Вывод: ---
    });
    document.getElementById('buttonContainer234').appendChild(button234);

    const button235 = document.createElement('button'); 
    button235.innerText = '122_4'; 
    button235.addEventListener('click', function() {
        let test = 3 * 'abc'; // Результат будет NaN.

        // Не запуская код, определите, что выведется в консоль
        // Код:
        if (test) {
            console.log('+++');
        } else {
            console.log('---');
        }
        // Поскольку NaN является ложным значением, вывод будет '---'
        console.log('---'); // Вывод: ---
    });
    document.getElementById('buttonContainer235').appendChild(button235);

    const button236 = document.createElement('button'); 
    button236.innerText = '122_5'; 
    button236.addEventListener('click', function() {
        let test = null;

        // Не запуская код, определите, что выведется в консоль
        // Код:
        if (test) {
            console.log('+++');
        } else {
            console.log('---');
        }
        // Поскольку null является ложным значением, вывод будет '---'
        console.log('---'); // Вывод: ---
    });
    document.getElementById('buttonContainer236').appendChild(button236);

    const button237 = document.createElement('button'); 
    button237.innerText = '122_6'; 
    button237.addEventListener('click', function() {
        let test = false;

        // Не запуская код, определите, что выведется в консоль
        // Код:
        if (test) {
            console.log('+++');
        } else {
            console.log('---');
        }
        // Поскольку false является ложным значением, вывод будет '---'
        console.log('---'); // Вывод: ---
    });
    document.getElementById('buttonContainer237').appendChild(button237);

    const button238 = document.createElement('button'); 
    button238.innerText = '122_7'; 
    button238.addEventListener('click', function() {
        let test;

        // Не запуская код, определите, что выведется в консоль
        // Код:
        if (test) {
            console.log('+++');
        } else {
            console.log('---');
        }
        // Поскольку undefined является ложным значением, вывод будет '---'
        console.log('---'); // Вывод: ---
    });
    document.getElementById('buttonContainer238').appendChild(button238);

    const button239 = document.createElement('button'); 
    button239.innerText = '122_8'; 
    button239.addEventListener('click', function() {
        let test = 0;

        // Не запуская код, определите, что выведется в консоль
        // Код:
        if (test) {
            console.log('+++');
        } else {
            console.log('---');
        }
        // Поскольку 0 является ложным значением, вывод будет '---'
        console.log('---'); // Вывод: ---
    });
    document.getElementById('buttonContainer239').appendChild(button239);

    const button240 = document.createElement('button'); 
    button240.innerText = '122_9'; 
    button240.addEventListener('click', function() {
        let test = '0';

        // Не запуская код, определите, что выведется в консоль
        // Код:
        if (test) {
            console.log('+++');
        } else {
            console.log('---');
        }
        // Поскольку непустая строка является истинным значением, вывод будет '+++'
        console.log('+++'); // Вывод: +++
    });
    document.getElementById('buttonContainer240').appendChild(button240);

    const button241 = document.createElement('button'); 
    button241.innerText = '122_10'; 
    button241.addEventListener('click', function() {
        let test = -1;

        // Не запуская код, определите, что выведется в консоль
        // Код:
        if (test) {
            console.log('+++');
        } else {
            console.log('---');
        }
        // Поскольку -1 является истинным значением, вывод будет '+++'
        console.log('+++'); // Вывод: +++
    });
    document.getElementById('buttonContainer241').appendChild(button241);

    const button242 = document.createElement('button'); 
    button242.innerText = '123_1'; 
    button242.addEventListener('click', function() {
        let test1 = true;
        let test2 = true;

        if (test1 && test2) {
            console.log('+++');
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer242').appendChild(button242);

    const button243 = document.createElement('button'); 
    button243.innerText = '123_2'; 
    button243.addEventListener('click', function() {
        let test1 = true;
        let test2 = true;

        if (test1 && !test2) {
            console.log('+++');
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer243').appendChild(button243);

    const button244 = document.createElement('button'); 
    button244.innerText = '123_3'; 
    button244.addEventListener('click', function() {
        let test1 = true;
        let test2 = true;

        if (!test1 && !test2) {
            console.log('+++');
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer244').appendChild(button244);

    const button245 = document.createElement('button'); 
    button245.innerText = '123_4'; 
    button245.addEventListener('click', function() {
        let test1 = true;
        let test2 = true;

        if (test1 && test2) {
            console.log('+++');
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer245').appendChild(button245);

    const button246 = document.createElement('button'); 
    button246.innerText = '123_5'; 
    button246.addEventListener('click', function() {
        let test1 = true;
        let test2 = true;
        let test3 = true;

        if (test1 && test2 && test3) {
            console.log('+++');
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer246').appendChild(button246);

    const button247 = document.createElement('button'); 
    button247.innerText = '123_6'; 
    button247.addEventListener('click', function() {
        let test1 = true;
        let test2 = true;
        let test3 = true;

        if (test1 || (test2 && test3)) {
            console.log('+++');
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer247').appendChild(button247);

    const button248 = document.createElement('button'); 
    button248.innerText = '123_7'; 
    button248.addEventListener('click', function() {
        let test1 = true;
        let test2 = true;
        let test3 = true;

        if (test1 || (!test2 && !test3)) {
            console.log('+++');
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer248').appendChild(button248);

    const button249 = document.createElement('button'); 
    button249.innerText = '124_1'; 
    button249.addEventListener('click', function() {
        let test = 10;

        if (test == 10) {
            console.log('yes');
        }
    });
    document.getElementById('buttonContainer249').appendChild(button249);

    const button250 = document.createElement('button'); 
    button250.innerText = '125_1'; 
    button250.addEventListener('click', function() {
        let test = -1; if (test > 0) console.log('+++'); else console.log('---');
    });
    document.getElementById('buttonContainer250').appendChild(button250);

    const button251 = document.createElement('button'); 
    button251.innerText = '125_2'; 
    button251.addEventListener('click', function() {
        let test = 2; if (test > 0) console.log('+++');
    });
    document.getElementById('buttonContainer251').appendChild(button251);

    const button252 = document.createElement('button'); 
    button252.innerText = '127_1'; 
    button252.addEventListener('click', function() {
        let day = 15;

        if (day >= 1 && day <= 10) {
            console.log('Первая декада месяца');
        } else if (day >= 11 && day <= 20) {
            console.log('Вторая декада месяца');
        } else if (day >= 21 && day <= 31) {
            console.log('Третья декада месяца');
        } else {
            console.log('Неверное значение переменной day');
        }
    });
    document.getElementById('buttonContainer252').appendChild(button252);

    const button253 = document.createElement('button'); 
    button253.innerText = '127_2'; 
    button253.addEventListener('click', function() {
        let day = 32;

        if (day >= 1 && day <= 10) {
            console.log('Первая декада месяца');
        } else if (day >= 11 && day <= 20) {
            console.log('Вторая декада месяца');
        } else if (day >= 21 && day <= 31) {
            console.log('Третья декада месяца');
        } else {
            console.log('Неверное значение переменной day');
        }
    });
    document.getElementById('buttonContainer253').appendChild(button253);

    const button254 = document.createElement('button'); 
    button254.innerText = '128_1'; 
    button254.addEventListener('click', function() {
        let num = 45; // Пример значения

        if (num >= 10 && num <= 99) {
            let sum = Math.floor(num / 10) + (num % 10); // Сумма цифр

            if (sum <= 9) {
                console.log('Сумма цифр однозначна');
            } else {
                console.log('Сумма цифр двухзначна');
            }
        } else {
            console.log('Число не в диапазоне от 10 до 99');
        }
    });
    document.getElementById('buttonContainer254').appendChild(button254);

    const button255 = document.createElement('button'); 
    button255.innerText = '129_1'; 
    button255.addEventListener('click', function() {
        let lang = 'ru'; // Пример значения
    
        switch (lang) {
            case 'ru':
                console.log('рус');
                break;
            case 'en':
                console.log('анг');
                break;
            case 'de':
                console.log('нем');
                break;
            default:
                console.log('язык не поддерживается');
                break;
        }
    });
    document.getElementById('buttonContainer255').appendChild(button255);
    
    const button256 = document.createElement('button'); 
    button256.innerText = '131_1'; 
    button256.addEventListener('click', function() {
        let num = 1;
        let res = (num >= 0) ? '1' : '2';

        console.log(res);
    });
    document.getElementById('buttonContainer256').appendChild(button256);

    const button257 = document.createElement('button');
    button257.innerText = '132_1';
    button257.addEventListener('click', function() {
        let a = 2 * (3 - 1);
        let b = 6 - 2;
        console.log(a == b);
    });
    document.getElementById('buttonContainer257').appendChild(button257);

    const button258 = document.createElement('button');
    button258.innerText = '132_2';
    button258.addEventListener('click', function() {
        let a = 5 * (7 - 4);
        let b = 1 + 2 + 7;
        console.log(a > b);
    });
    document.getElementById('buttonContainer258').appendChild(button258);

    const button259 = document.createElement('button');
    button259.innerText = '132_3';
    button259.addEventListener('click', function() {
        let a = 2 ** 4;
        let b = 4 ** 2;
        console.log(a != b);
    });
    document.getElementById('buttonContainer259').appendChild(button259);

    const button260 = document.createElement('button'); 
    button260.innerText = '133_1'; 
    button260.addEventListener('click', function() {
        let ok = confirm('Вам уже 18 лет?');
        if (ok) {
            alert('Добро пожаловать, это контент для взрослых.');
        } else {
            alert('Доступ запрещен.');
        }
    });
    document.getElementById('buttonContainer260').appendChild(button260);

    const button261 = document.createElement('button'); 
    button261.innerText = '134_1'; 
    button261.addEventListener('click', function() {
        let age = 17;
        let adult; // Объявляем переменную adult вне условий

        if (age >= 18) {
            adult = true; // Присваиваем значение переменной adult
        } else {
            adult = false; // Присваиваем значение переменной adult
        }

        console.log(adult); // Выводим значение переменной adult
    });
    document.getElementById('buttonContainer261').appendChild(button261);

    const button262 = document.createElement('button'); 
    button262.innerText = '135_1'; 
    button262.addEventListener('click', function() {
        let age = 17;
        let adult;

        if (age >= 18) {
            adult = true;
        } else {
            adult = false;
        }

        console.log(adult); 
    });
    document.getElementById('buttonContainer262').appendChild(button262);

    const button263 = document.createElement('button'); 
    button263.innerText = '135_2'; 
    button263.addEventListener('click', function() {
        let age = 17;
        let adult;

        if (age >= 18) {
            adult = true;
        } else {
            adult = false;
        }

        console.log(adult);
    });
    document.getElementById('buttonContainer263').appendChild(button263);

    const button264 = document.createElement('button'); 
    button264.innerText = '135_3'; 
    button264.addEventListener('click', function() {
        let age = 17;
        let res;

        if (age >= 18) {
            if (age <= 23) {
                res = 'от 18 до 23';
            } else {
                res = 'больше 23';
            }
        } else {
            res = 'меньше 18';
        }

        console.log(res);
    });
    document.getElementById('buttonContainer264').appendChild(button264);

    const button265 = document.createElement('button'); 
    button265.innerText = '135_4'; 
    button265.addEventListener('click', function() {
        let age = 19; // Пример возраста
        let res; // Объявляем переменную res

        if (age >= 18) {
            if (age <= 23) {
                res = 'от 18 до 23';
            } else {
                res = 'больше 23';
            }
        } else {
            res = 'меньше 18';
        }

        console.log(res);
    });
    document.getElementById('buttonContainer265').appendChild(button265);

    const button266 = document.createElement('button'); 
    button266.innerText = '136_1'; 
    button266.addEventListener('click', function() {
        let min = 10;

        if (min >= 0 && min < 20) {
            console.log('1 треть часа');
        }

        if (min >= 20 && min < 40) {
            console.log('2 треть часа');
        }

        if (min >= 40 && min < 60) {
            console.log('3 треть часа');
        }
    });
    document.getElementById('buttonContainer266').appendChild(button266);

    const button267 = document.createElement('button'); 
    button267.innerText = '137_1'; 
    button267.addEventListener('click', function() {
        let arr = [1, 2, 3];
    
        if (arr.length === 3) {
            let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            console.log('Сумма элементов массива:', sum);
        }
    });
    document.getElementById('buttonContainer267').appendChild(button267);
    
    const button268 = document.createElement('button'); 
    button268.innerText = '138_1'; 
    button268.addEventListener('click', function() {
        let str = 'apple'; 
    
        if (str[0] === 'a') {
            console.log('Строка начинается на символ "a".');
        }
    });
    document.getElementById('buttonContainer268').appendChild(button268);
    
    const button269 = document.createElement('button'); 
    button269.innerText = '138_2'; 
    button269.addEventListener('click', function() {
        let str = 'example'; 
        let last = str[str.length - 1]; 
    
        if (last === 'x') {
            console.log('Строка заканчивается на символ "x".');
        }
    });
    document.getElementById('buttonContainer269').appendChild(button269);
    
    const button270 = document.createElement('button'); 
    button270.innerText = '138_3'; 
    button270.addEventListener('click', function() {
        let str = 'banana'; 
    
        if (str[0] === 'a' || str[0] === 'b') {
            console.log('Строка начинается на символ "a" или "b".');
        }
    });
    document.getElementById('buttonContainer270').appendChild(button270);
    
    const button271 = document.createElement('button'); 
    button271.innerText = '139_1'; 
    button271.addEventListener('click', function() {
        let num = 120; 
        let last = String(num)[String(num).length - 1];
    
        if (last === '0') {
            console.log('Последняя цифра равна нулю.');
        }
    });
    document.getElementById('buttonContainer271').appendChild(button271);
    
    const button272 = document.createElement('button'); 
    button272.innerText = '139_2'; 
    button272.addEventListener('click', function() {
        let num = 1234; 
        let last = String(num)[String(num).length - 1];
    
        if (last === '0' || last === '2' || last === '4' || last === '6' || last === '8') {
            console.log('Четное число.');
        } else {
            console.log('Нечетное число.');
        }
    });
    document.getElementById('buttonContainer272').appendChild(button272);
    
    const button273 = document.createElement('button'); 
    button273.innerText = '140_1'; 
    button273.addEventListener('click', function() {
        let num = 6; 
    
        if (num % 2 === 0) {
            console.log('Четное число.');
        } else {
            console.log('Нечетное число.');
        }
    });
    document.getElementById('buttonContainer273').appendChild(button273);
    
    const button274 = document.createElement('button'); 
    button274.innerText = '140_2'; 
    button274.addEventListener('click', function() {
        let num = 9; 
    
        if (num % 3 === 0) {
            console.log('Число делится на 3.');
        } else {
            console.log('Число не делится на 3.');
        }
    });
    document.getElementById('buttonContainer274').appendChild(button274);

    const button275 = document.createElement('button'); 
    button275.innerText = '141_1'; 
    button275.addEventListener('click', function() {
        let num1 = 1;
        let num2 = 2;
    
        if (num1 + num2 === 3) {
            console.log('+++');
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer275').appendChild(button275);
    
    const button276 = document.createElement('button'); 
    button276.innerText = '141_2'; 
    button276.addEventListener('click', function() {
        let num1 = '1';
        let num2 = '2';
    
        if (Number(num1) + Number(num2) === 3) {
            console.log('+++');
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer276').appendChild(button276);
    
    const button277 = document.createElement('button'); 
    button277.innerText = '141_3'; 
    button277.addEventListener('click', function() {
        let num1 = '1';
        let num2 = '2';
    
        if (Number(num1) + Number(num2) === 3) {
            console.log('+++');
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer277').appendChild(button277);
    
    const button278 = document.createElement('button'); 
    button278.innerText = '141_4'; 
    button278.addEventListener('click', function() {
        let num = 123;
    
        if (String(num)[0] === '1') {
            console.log('+++');
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer278').appendChild(button278);
    
    const button279 = document.createElement('button'); 
    button279.innerText = '141_5'; 
    button279.addEventListener('click', function() {
        let num = 123;
    
        if (String(num)[0] === '1') {
            console.log('+++');
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer279').appendChild(button279);
    
    const button280 = document.createElement('button'); 
    button280.innerText = '141_6'; 
    button280.addEventListener('click', function() {
        let num = 123;
    
        if (String(num)[0] === '1') {
            console.log('+++');
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer280').appendChild(button280);
    
    const button281 = document.createElement('button'); 
    button281.innerText = '141_7'; 
    button281.addEventListener('click', function() {
        let num = 123;
        let first = String(num)[0];
    
        if (first === '1') {
            console.log('+++');
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer281').appendChild(button281);
    
    const button282 = document.createElement('button'); 
    button282.innerText = '141_8'; 
    button282.addEventListener('click', function() {
        let num = 12;
    
        if (String(num).length === 2) {
            console.log('+++');
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer282').appendChild(button282);
    
    const button283 = document.createElement('button'); 
    button283.innerText = '141_9'; 
    button283.addEventListener('click', function() {
        let num = 12;
    
        if (String(num).length === 2) {
            console.log('+++');
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer283').appendChild(button283);
    
    const button284 = document.createElement('button'); 
    button284.innerText = '141_10'; 
    button284.addEventListener('click', function() {
        let num = 12;
    
        if (String(num).length === 2) {
            console.log('+++');
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer284').appendChild(button284);
    
    const button285 = document.createElement('button'); 
    button285.innerText = '141_11'; 
    button285.addEventListener('click', function() {
        let num = 12;
    
        if (String(num).length === 2) {
            console.log('+++');
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer285').appendChild(button285);
    
    const button286 = document.createElement('button'); 
    button286.innerText = '141_12'; 
    button286.addEventListener('click', function() {
        let num = 12;
    
        if (String(num).length === 2) {
            console.log('+++');
        } else {
            console.log('---');
        }
    });
    document.getElementById('buttonContainer286').appendChild(button286);
    
    const button287 = document.createElement('button'); 
    button287.innerText = '141_13'; 
    button287.addEventListener('click', function() {
        let num = '123033';
    
        let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
        let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);
    
        if (sum1 === sum2) {
            console.log('суммы равны');
        } else {
            console.log('суммы не равны');
        }
    });
    document.getElementById('buttonContainer287').appendChild(button287);
    
    const button288 = document.createElement('button'); 
    button288.innerText = '142_1'; 
    button288.addEventListener('click', function() {
        let month = 3;
    
        if (month === 12 || month === 1 || month === 2) {
            console.log('Зима');
        } else if (month >= 3 && month <= 5) {
            console.log('Весна');
        } else if (month >= 6 && month <= 8) {
            console.log('Лето');
        } else if (month >= 9 && month <= 11) {
            console.log('Осень');
        } else {
            console.log('Некорректный месяц');
        }
    });
    document.getElementById('buttonContainer288').appendChild(button288);
    
    const button289 = document.createElement('button'); 
    button289.innerText = '142_2'; 
    button289.addEventListener('click', function() {
        let str = 'abcde';
    
        if (str[0] === 'a') {
            console.log('да');
        } else {
            console.log('нет');
        }
    });
    document.getElementById('buttonContainer289').appendChild(button289);
    
    const button290 = document.createElement('button'); 
    button290.innerText = '142_3'; 
    button290.addEventListener('click', function() {
        let num = 12345;
    
        if (String(num)[0] === '1' || String(num)[0] === '2' || String(num)[0] === '3') {
            console.log('да');
        } else {
            console.log('нет');
        }
    });
    document.getElementById('buttonContainer290').appendChild(button290);
    
    const button291 = document.createElement('button'); 
    button291.innerText = '142_4'; 
    button291.addEventListener('click', function() {
        let num = 456;
    
        let sum = Number(String(num)[0]) + Number(String(num)[1]) + Number(String(num)[2]);
        console.log('Сумма цифр: ' + sum);
    });
    document.getElementById('buttonContainer291').appendChild(button291);
    
    const button292 = document.createElement('button'); 
    button292.innerText = '142_5'; 
    button292.addEventListener('click', function() {
        let num = 123456;
    
        let sum1 = Number(String(num)[0]) + Number(String(num)[1]) + Number(String(num)[2]);
        let sum2 = Number(String(num)[3]) + Number(String(num)[4]) + Number(String(num)[5]);
    
        if (sum1 === sum2) {
            console.log('да');
        } else {
            console.log('нет');
        }
    });
    document.getElementById('buttonContainer292').appendChild(button292);