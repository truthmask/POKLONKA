let text = ['Здравствуйте!\n',
'Мы рады видеть вас в нашем заведении.\n',
'Ниже вы сможете просмотреть наше меню и подобрать, что-нибудь для себя.\n',
'Приятного аппетита!'];

let line = 0;
let count = 0;
let result = '';


    function typeLine() {
        let interval = setTimeout(
        () => {
        result += text[line][count]
        document.querySelector('pre').innerHTML = result +'|';
        count++;
        if (count >= text[line].length) {
            count = 0;
            line++;
            if (line == text.length) {
                clearTimeout(interval);
                document.querySelector('pre').innerHTML =result;
                return true;
            }
            }
            typeLine();
        }, 100)

        if(window.innerWidth < 1300){
            text = ['Здравствуйте!\n',
            'Мы рады видеть вас в нашем заведении.\n',
            'Ниже вы сможете просмотреть наше меню\n и подобрать, что-нибудь для себя.\n',
            'Приятного аппетита!'];
        } 
        else if(window.innerWidth < 800){
            text = ['Здравствуйте!\n',
            'Добро пожаловать в Поклонку.\n',
            'Ниже вы сможете\n просмотреть наше меню\n и подобрать, что-нибудь для себя.\n',
            'Приятного аппетита!'];
        }
        else if(window.innerWidth < 500){
            text = ['Здравствуйте!\n',
            'Добро пожаловать в Поклонку.\n',
            'Ниже вы сможете\n просмотреть наше меню\n и подобрать, что-нибудь для себя.\n',
            'Приятного аппетита!'];
        }
    }
typeLine(); 