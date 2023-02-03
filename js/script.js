let quiz = document.querySelector('.quiz');
let quest = document.querySelector('.quiz__question');
let start = document.querySelector('.start');
let next = document.querySelector('.next');
let questions = document.querySelectorAll('button.quiz__questions');
let first = document.querySelector('.quiz__questions.first');
let second = document.querySelector('.quiz__questions.second');
let third = document.querySelector('.quiz__questions.third');
let fourth = document.querySelector('.quiz__questions.fourth');
let fifth = document.querySelector('.quiz__questions.fifth');
let check = document.querySelector('.quiz__check'); 
let p = document.querySelector('p');
let arr = []
let ans;
let question1;
let answer1;
let answerIndex;
let questionIndex;

let question = [
	'Столица Ирака',
	'Столица Грузии',
	'Столица Армении',
        'Столица Египта',
        'Столица Кубы',
];

let answer = [
	'Багдад',
	'Тбилиси',
	'Ереван',
        'Каир',
        'Гавана',
];

function newQestion () {
                answerIndex = [Math.floor(Math.random() * answer.length)]
                questionIndex = [Math.floor(Math.random() * question.length)]
                question1 = question[questionIndex]
                answer1 = answer[answerIndex]
                start.style.display = 'none'
                check.style.display = 'flex'
                quiz.style.display = 'flex'
                quest.textContent = question1
        
                for (let i = 0; arr.length < answer.length; i++) {
                        if (!arr.includes(answer1)) {
                                arr.push(answer1)
                        } else {
                                answer1 = answer[Math.floor(Math.random() * answer.length)] 
                        }
                                first.innerHTML = arr[0]
                                second.innerHTML = arr[1]
                                third.innerHTML = arr[2]
                                fourth.innerHTML = arr[3]
                                fifth.innerHTML = arr[4]
                }
                p.innerText = ''
        }
        
        
        questions.forEach(item =>{ 
                item.addEventListener('click', () =>{
                questions.forEach(el=>{ el.classList.remove('active'); });
                item.classList.add('active')
                ans = item.innerHTML
            })
        })

        start.addEventListener('click', ()=> {
                newQestion()
        })


check.addEventListener('click', ()=> {
        console.log(ans)
                if (answer[questionIndex] === ans) {
                        p.style.color = 'green'
                        p.textContent = 'Молодец правильно'
                        next.style.display = 'flex'
                        check.style.display = 'none'

                } else {
                        p.style.color = 'red'
                        p.textContent = 'Лох, Не правильно'
                }

})

next.addEventListener('click', ()=> {
        questions.forEach(el=>{ el.classList.remove('active'); });
        newQestion()
        next.style.display = 'none'
})
