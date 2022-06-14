var table = document.querySelector("#Table");

/*
    type 1
    {
        "type" : 1,
        "quiz": string,
        "code": string,
        "list": string[]
    };

    type 2
    {
        "type" : 2,
        "quiz": string,
        "list": string[]
    };

    type 3
    {
        "type" : 2,
        "quiz": string
        "code": string,
    };

    type 4
    {
        "type" : 4,
        "quiz": string
    };
*/

const quizData = [
    {
        "type": 1,
        "quiz": "아래 코드의 실행 결과값으로 옳은것은?",
        "code": "List = [[10, 51, 64, 159], [94, 51, 691, 6, 15]]\n\nList = List[0][:2]",
        "list": [
            "[94, 51, 691, 6, 15]",
            "[10, 51]",
            "[6, 15]",
            "[64, 159]"
        ]
    }, {
        "type": 1,
        "quiz": "아래 코드가 실행되었을 때\nvisitSeoul의 마지막 값으로 옳은것은?",
        "code": "visitSeoul = 0\ndef tripToSeoul(n):\n\tglobal visitSeoul\n\tvisitSeoul = n\n\ndef callSeoul():\n\tvisitSeoult = 100\n\n\ncallSeoul(); tripToSeoul(visitSeoul)",
        "list": [
            "100",
            "1",
            "Error",
            "0"
        ]
    }, {
        "type": 3,
        "quiz": "아래 함수 Print에서 text의 자료형은 무엇인가?",
        "code": "def Print(*text, sep=\" \", end=\"\\n\"):\n\treturn f'{sep}'.join(text) + end"
    }, {
        "type": 2,
        "quiz": "함수의 구조로 옳은것을 고르시오.",
        "list": [
            "함수이름(인수값1, 인수값2)",
            "함수이름(지수값1, 지수값2)",
            "함수이름(매개지수1, 매개지수2)",
            "매개변수(지수값1, 지수값2)"
        ]
    }, {
        "type": 1,
        "quiz": "아래 재귀함수의 결과값으로 옳은것을 고르시오.",
        "code": "bus = [False, False, True, False, True]\n\ndef Loop(n):\n\tif bus[n] == True\n\t\treturn n\n\treturn Loop(n + 1)",
        "list": [
            1,
            2,
            3,
            4
        ]
    }, {
        "type": 3,
        "quiz": "아래 코드의 결과값이 [5, 6, 7, 8, 9] 가 되도록 코드를 추가하시오.",
        "code": "List = [6, 7, 8, 9]"
    }, {
        "type": 4,
        "quiz": "리스트 처리함수에서 원소값의 위치를 찾아주는 함수의 이름을 쓰시오."
    }, {
        "type": 2,
        "quiz": "딕셔너리에서 사용되는 처리함수 중\n사전의 원소 키를 리스트로 반환하는 함수를 고르시오.",
        "list": [
            "keys",
            "values",
            "items",
            "get"
        ]
    }, {
        "type": 2,
        "quiz": "다음중 컬렉션 자료형이 아닌것은?",
        "list": [
            "문자열형",
            "리스트",
            "딕셔너리",
            "튜플"
        ]
    }, {
        "type": 2,
        "quiz": "리스트에 사용할 수 없는 자료형은?",
        "list": [
            "리스트",
            "딕셔너리",
            "정수형",
            "튜플"
        ]
    }
];

quizData.forEach((i, count) => {
    var tr = document.createElement('tr');
    let index = document.createElement('td');
    index.textContent = (count + 1) + "번";
    switch (i.type) {
        case 1:
            var pres = {
                "code": document.createElement('pre'),
                "quiz": document.createElement('pre'),
                "list": [document.createElement('pre'), document.createElement('pre'), document.createElement('pre'), document.createElement('pre')]
            };
            index.textContent += "\n[객]";
            pres.code.className = "Code";
            index.rowSpan = 7;
            tr.appendChild(index);
            table.appendChild(tr);
            var quiz = document.createElement('td');
            quiz.className = "Quiz";
            quiz.rowSpan = 2;
            quiz.textContent = "문제";
            tr.appendChild(quiz);
            for (j in i) {
                switch (j) {
                    case "list":
                        i[j].forEach((k, count) => {
                            var tr = document.createElement('tr');
                            var numbering = document.createElement('td');
                            numbering.textContent = (count + 1) + "번";
                            numbering.rowSpan = 1;
                            tr.appendChild(numbering);
                            var td = document.createElement('td');
                            pres[j][count].textContent = k;
                            td.appendChild(pres[j][count]);
                            tr.appendChild(td);
                            table.appendChild(tr);
                        });
                        break;
                    default:
                        if (j == "type") continue;
                        tr = document.createElement('tr');
                        var td = document.createElement('td');
                        pres[j].textContent = i[j];
                        td.colSpan = 2;
                        td.appendChild(pres[j]);
                        tr.appendChild(td);
                        table.appendChild(tr);
                        break;
                };
            };
            break;
        case 2:
            var pres = {
                "code": document.createElement('pre'),
                "quiz": document.createElement('pre'),
                "list": [document.createElement('pre'), document.createElement('pre'), document.createElement('pre'), document.createElement('pre')]
            };
            index.textContent += "\n[객]";
            pres.code.className = "Code";
            index.rowSpan = 6;
            tr.appendChild(index);
            table.appendChild(tr);
            var quiz = document.createElement('td');
            quiz.className = "Quiz";
            quiz.rowSpan = 2;
            quiz.textContent = "문제";
            tr.appendChild(quiz);
            for (j in i) {
                switch (j) {
                    case "list":
                        i[j].forEach((k, count) => {
                            var tr = document.createElement('tr');
                            var numbering = document.createElement('td');
                            numbering.textContent = (count + 1) + "번";
                            numbering.rowSpan = 1;
                            tr.appendChild(numbering);
                            var td = document.createElement('td');
                            pres[j][count].textContent = k;
                            td.appendChild(pres[j][count]);
                            tr.appendChild(td);
                            table.appendChild(tr);
                        });
                        break;
                    default:
                        if (j == "type") continue;
                        tr = document.createElement('tr');
                        var td = document.createElement('td');
                        pres[j].textContent = i[j];
                        td.colSpan = 2;
                        td.appendChild(pres[j]);
                        tr.appendChild(td);
                        table.appendChild(tr);
                        break;
                };
            };
            break;
        case 3:
            var pres = {
                "code": document.createElement('pre'),
                "quiz": document.createElement('pre')
            };
            index.textContent += "\n[주]";
            pres.code.className = "Code";
            index.rowSpan = 3;
            tr.appendChild(index);
            table.appendChild(tr);
            var quiz = document.createElement('td');
            quiz.className = "Quiz";
            quiz.rowSpan = 2;
            quiz.textContent = "문제";
            tr.appendChild(quiz);
            for (j in i) {
                if (j == "type") continue;
                tr = document.createElement('tr');
                var td = document.createElement('td');
                pres[j].textContent = i[j];
                td.colSpan = 2;
                td.appendChild(pres[j]);
                tr.appendChild(td);
                table.appendChild(tr);
            };
            break;
        case 4:
            var quizPre = document.createElement('pre');
            index.textContent += "\n[주]";
            index.rowSpan = 2;
            tr.appendChild(index);
            table.appendChild(tr);
            var quiz = document.createElement('td');
            quiz.rowSpan = 2;
            quiz.textContent = "문제";
            tr.appendChild(quiz);

            tr = document.createElement('tr');
            var td = document.createElement('td');
            quizPre.textContent = i.quiz;
            td.colSpan = 2;
            td.appendChild(quizPre);
            tr.appendChild(td);
            table.appendChild(tr);
            break;
    };
});