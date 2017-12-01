document.addEventListener("DOMContentLoaded", function(){
  var studentsMW = [
    'Alejandro Munoz',
    'Allen Shin',
    'Amy Nguyen',
    'Bhaskar Garg',
    'Carissa Wodehouse',
    'Chris Hanner',
    'Christian Escobar',
    'Clayton Thompson',
    'Daniel Tannehill',
    'Daniel Melesse',
    'Danielle Lebbos',
    'Edy Ortiz-Aragon',
    'Elaine Cumming',
    'Gunter Lugo',
    'Johann Colloredo-Mansfeld',
    'Matt Schiller',
    'Mel Alvarez',
    'Nicholas Volpe',
    'Sasha Bessonova',
    'Vanessa Nguyen'
  ]
  var studentsTR = [
    'Ahmet Koylan',
    'Alexander Lovell',
    'Anastasia Fefilova',
    'Barry Williams',
    'Bo Jiang',
    'Chris Stento',
    'David Cheng',
    'Emma Morales',
    'Enoch Wu',
    'Gina Assar',
    'James Brashear',
    'James Markotic',
    'Karen Song',
    'Pavel Gerasimenko',
    'Renato Farias',
    'Robert Sala',
    'Shivram Jayakumar',
    'Valeriya Romashchenko',
    'Vishwanath Ramachandran',
    'William Aspelin'
  ]
  var studentsSat = [...studentsMW, ...studentsTR]
  var studentsArrs = { 'monday / wednesday': studentsMW, 'tuesday / thursday': studentsTR, 'saturday': studentsSat }
  var students = studentsArrs['monday / wednesday'] // default set of students

  function randNum() { return Math.floor(Math.random() * students.length) }

  var classIndex = 0
  var classNames = Object.keys(studentsArrs)

  function setStudents() { students = studentsArrs[classNames[++classIndex % classNames.length]] }

  function removeStudent(student) { students.splice(students.indexOf(student), 1) }

  var getStudentBtn = document.querySelector('#getStudentBtn')
  var studentName = document.querySelector('.randomStudentDisplay')
  getStudentBtn.addEventListener('click', function(e) {
    var student = students[randNum()]
    studentName.innerHTML = student
    removeStudent(student)
  })



  // PRACTICE CUSTOM ANIMATED CURSOR
  var cursorPosition
  var cursor = document.querySelector('.cursorContainer')
  var currentCursor = cursor.children[0].classList[0]
  var body = document.querySelector('body')

  body.addEventListener('mousemove', function(e) {
    cursor.style.left = `${e.x}px`
    cursor.style.top = `${e.y}px`
    if (e.y < 400 && currentCursor !== 'sword') changeCursor('sword')
    if (e.y > 400 && currentCursor !== 'hammer') changeCursor('hammer')
  })
  
  var timer
  var clear
  var clicks = 0
  var actionDelay = 160
  var resetDelay = 400
  
  body.addEventListener('click', function(e) {
    clicks++  //count clicks
    
    if(clicks === 1) {
      timer = setTimeout(function() {
        cursor.classList.add('sword-click')  //perform single-click action    
        clicks = 0             //after action performed, reset counter
      }, actionDelay)
    } else {
      clearTimeout(timer);    //prevent single-click action
      cursor.classList.add('sword-dblclick')  //perform double-click action
      clicks = 0;             //after action performed, reset counter
    }
    clear = setTimeout(function() {
      cursor.classList.remove('sword-click', 'sword-dblclick')
    }, resetDelay)
  })
  body.addEventListener("dblclick", function(e) {
    e.preventDefault();  //cancel system double-click event
  })

  function changeCursor(className) {
    console.log(cursor.children[0].classList)
    cursor.children[0].classList = []
    cursor.children[0].classList.add(className)
    currentCursor = className
  }



  // Button Interactions
  var btns = document.querySelectorAll('.btn')
  btns.forEach( function(btn) {
    btn.addEventListener('touchstart', function(e) {
      cursor.style = 'display: none'   // only for sword cursor tests
      body.style = 'cursor: auto'   // only for sword cursor tests
      this.classList.add('btn-hover')
      this.children[0].classList.add('text-hover')
    })
    btn.addEventListener('mouseover', function(e) {
      cursor.style = 'display: none'   // only for sword cursor tests
      body.style = 'cursor: auto'   // only for sword cursor tests
      this.classList.add('btn-hover')
      this.children[0].classList.add('text-hover')
    })
    btn.addEventListener('mouseout', function(e) {
      this.classList.remove('btn-hover')
      this.children[0].classList.remove('text-hover')
      cursor.style = 'display: inherit' // only for sword cursor tests
      body.style = 'cursor: none'   // only for sword cursor tests
    })
    btn.addEventListener('mousedown', function(e) {
      this.classList.add('btn-click')
    })
    btn.addEventListener('mouseup', function(e) {
      this.classList.remove('btn-click')
    })
  })

  var themeBtn = document.querySelector('.themeBtn')
  var bodyClasses = document.querySelector('body').classList
  themeBtn.addEventListener('click', function(e) {
    bodyClasses.toggle('darkbg')
  })

  var setStudentsBtn = document.querySelector('.setStudentsBtn')
  setStudentsBtn.addEventListener('click', function(e) {
    setStudents()
    this.innerHTML = `<div class='white archivo btn-text'>${classNames[classIndex%classNames.length]}</div>`
    
    display.classList.remove('show')
    display.classList.add('hide')
  })

  var display = document.querySelector('.randomStudentDisplay')
  var getStudentBtn = document.querySelector('#getStudentBtn')
  getStudentBtn.addEventListener('click', function(e) {
    display.classList.remove('hide')
    display.classList.add('show')
  })
})