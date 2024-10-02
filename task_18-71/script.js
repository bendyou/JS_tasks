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