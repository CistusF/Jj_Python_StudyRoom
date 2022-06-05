var table = document.querySelector("#Table");

const quizData = [{
    "type": 1,
    "quiz": "아래 코드와 같은 결과값을 출력하는 코드를 고르시오.",
    "code": "a = 1\ndef A():\n    global a\n    if a != 10\n        a += 1;\n    return 'Python'",
    "list": [
        "for i in range(0, 10):\n    print('Python')",
        "a = 10\nwhile a = 0:\n    a -= 1;print('Python')",
        "print('Python')",
        "for i in range(1, 5):\n    for j in range(1, 5):\n        print('Python')",
    ]
}, {
    "type": 1,
    "quiz": "아래 List 변수의 원소들중 6의 인덱스 값은?",
    "code": "List = [1, 5, 6, 9, 10, 66]",
    "list": [
        "0",
        "2",
        "4",
        "6"
    ]
}, {
    "type": 1,
    "quiz": "아래 코드에서 x의 역할은 무엇인지 고르시오.",
    "code": "def A(x):\n    return 'Result'",
    "list": [
        "인수",
        "매개변수",
        "반환값",
        "전역변수"
    ]
}, {
    "type": 1,
    "quiz": "아래 코드를 실행했을 경우 나올 수 있는 결과값을 고르시오.",
    "code": "def A(x='Hi'):\n    return x\nresult = A('Hello')\nprint(result)",
    "list": [
        "Hi",
        "Hello",
        "HelloHi",
        "Error"
    ]
}, {
    "type": 1,
    "quiz": "아래 코드의 x를 전역변수로 바꾸기 위해 사용할 수 있는 명령어를 고르시오.",
    "code": "def A():\n    x = 10",
    "list": [
        "return",
        "continue",
        "global",
        "local"
    ]
}, {
    "type": 1,
    "quiz": "아래 함수는 학점을 판별하기 위한 코드이다.\n이 함수에 80을 넣을 경우 돌아오는 반환값이\n올바른 것을 고르시오.",
    "code": "def returnGrade(score=0):\n    if score >= 90: return 'A'\n    if score > 80: return 'B'\n    if score >= 70: return 'C'\n    else: return 'F'",
    "list": [
        "A",
        "B",
        "C",
        "F"
    ]
}, {
    "type": 1,
    "quiz": "리스트 배열의 슬라이싱 코드입니다.\n아래 코드를 실행시켰을 때\n출력값으로 올바른 것을 고르시오.",
    "code": "List = [1, 2, 5, 6, 0]\nList = List[:2]\nprint(List)",
    "list": [
        "[1, 2, 5, 6, 0]",
        "[6, 0]",
        "[1, 2]",
        "[5, 6, 0]"
    ]
}, {
    "type": 1,
    "quiz": "아래 코드의 출력값으로 올바른 것을 고르시오.",
    "code": "print([1, 4, 6, 10] in [1])",
    "list": [
        "False",
        "True",
        "None",
        "Error"
    ]
}, {
    "type": 1,
    "quiz": "아래 코드의 출력값으로 올바른 것을 고르시오.",
    "code": "print(len([1, 5, 9]))",
    "list": [
        "[1, 5, 9]",
        "len([1, 5, 9])",
        "15",
        "3"
    ]
}, {
    "type": 1,
    "quiz": "아래 코드는 리스트에서 값을 가져오기 위한 코드입니다.\n코드를 실행시켰을 때의 올바른 값을 고르시오.",
    "code": "List = [[1, 5, 9], [6, 19, 40]]]\nprint(List[1][2])",
    "list": [
        "5",
        "19",
        "1",
        "40"
    ]
}, {
    "type": 1,
    "quiz": "아래 리스트 배열 LLIISSTT 에 값을 추가할 때 사용해야하는 명령어를 고르시오.",
    "code": "LLIISSTT = []",
    "list": [
        "add",
        "index",
        "append",
        "sort"
    ]
}, {
    "type": 1,
    "quiz": "아래 배열은 몇차원인가?",
    "code": "ImList = [[1,4,65], [5,190]]",
    "list": [
        "1차원",
        "2차원",
        "3차원",
        "4차원"
    ]
}, {
    "type": 1,
    "quiz": "아래 코드에서 '손흥민'이 의미하는 바를 고르시오.",
    "code": "{\n    '손흥민': '축구선수'\n}",
    "list": [
        "key",
        "value",
        "dict",
        "object"
    ]
}, {
    "type": 1,
    "quiz": "아래 함수는 ()처리 함수 라고 불린다.\n올바른 이름을 고르시오.",
    "code": "def A(**args):\n    pass",
    "list": [
        "패스처리 함수",
        "가변인수 처리 함수",
        "튜플 처리 함수",
        "키 처리 함수"
    ]
}, {
    "type": 1,
    "quiz": "다음은 파이썬의 파일 입출력문을 이용하는 코드입니다.\n이 코드가 의미하는 바를 고르시오.",
    "code": "file = open('./text.txt', 'a')\nfile.write('I\\'m Code Master!')\nfile.close()",
    "list": [
        "text.txt파일을 생성하고 I'm code Master! 를 써서 저장한다.",
        "text.txt파일이 있을 경우에만 I'm code Master!를 써서 저장한다.",
        "text.txt파일이 있을 경우 I'm code Master! 를 추가하고 아닐경우 생성하여 저장한다.",
        "text.txt라는 모든 파일에 대해 I'm code Master! 를 추가하고 저장한다."
    ]
}, {
    "type": 1,
    "quiz": "아래 코드에서 import의 역할로 올바른 것을 고르시오.",
    "code": "import random",
    "list": [
        "random이라는 파일에 대해 중요성을 가집니다.",
        "random 파일의 중요성 업데이트를 찾습니다.",
        "random 파일을 가져옵니다.",
        "random 파일을 삭제합니다."
    ]
}];

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
            index.rowSpan = 7;
            tr.appendChild(index);
            table.appendChild(tr);
            var quiz = document.createElement('td');
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
                "quiz": document.createElement('pre')
            };
            index.rowSpan = 3;
            tr.appendChild(index);
            table.appendChild(tr);
            var quiz = document.createElement('td');
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
        case 3:
            var quizPre = document.createElement('pre');
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