import React, { Component } from 'react';
import './dashboard.css'
import QuizInfo from '../QuizInfo/quizInfo'
import Quiz from '../Quiz/quiz'

class Dashboard extends Component {
  constructor() {
    super()
    
    this.state = {
      quiz: ['Angular JS', 'React JS', 'HTML'],
      quizCategories: ['Quiz I', 'Quiz II', 'Quiz III'],
      quizQuestions: [
        [{ ques: ['What is Internet?', 'What is HTTP?', 'What is URL?'], totalQues: 4 },
        { ques: ['What is Internet?', 'What is HTTP?', 'What is URL?'], totalQues: 6 },
        { ques: ['What is Internet?', 'What is HTTP?', 'What is URL?'], totalQues: 2 }],
        [{ ques: ['What is Internet?', 'What is HTTP?', 'What is URL?'], totalQues: 7 },
        { ques: ['What is Internet?', 'What is HTTP?', 'What is URL?'], totalQues: 5 },
        { ques: ['What is Internet?', 'What is HTTP?', 'What is URL?'], totalQues: 8 }],
        [{ ques: ['What is Internet?', 'What is HTTP?', 'What is URL?'], totalQues: 3 },
        { ques: ['What is Internet?', 'What is HTTP?', 'What is URL?'], totalQues: 4 },
        { ques: ['What is Internet?', 'What is HTTP?', 'What is URL?'], totalQues: 2 }]
      ],
      option: [
        [[['community of people'], ['Hypertext Transfer Protocol'], ['Uniform Resource Locator']], [['community of people'], ['Hypertext Transfer Protocol'], ['Uniform Resource Locator']], [['community of people'], ['Hypertext Transfer Protocol'], ['Uniform Resource Locator']]],
        [[['TCP/IP communications protocol.'], ['protocol'], ['resource']], [['TCP/IP communications protocol.'], ['protocol'], ['resource']], [['TCP/IP communications protocol.'], ['protocol'], ['resource']]],
        [[['networks'], ['URL'], ['images']], [['networks'], ['URL'], ['images']], [['networks'], ['URL'], ['images']]],
        [[['network of networks'], ['addresses'], ['sound']], [['network of networks'], ['addresses'], ['sound']], [['network of networks'], ['addresses'], ['sound']]]
      ],

      ans : [
        [[['networks'], ['Hypertext Transfer Protocol'], ['Uniform Resource Locator']], [['networks'], ['Hypertext Transfer Protocol'], ['Uniform Resource Locator']], [['networks'], ['Hypertext Transfer Protocol'], ['Uniform Resource Locator']]],
        [[['networks'], ['Hypertext Transfer Protocol'], ['Uniform Resource Locator']], [['networks'], ['Hypertext Transfer Protocol'], ['Uniform Resource Locator']], [['networks'], ['Hypertext Transfer Protocol'], ['Uniform Resource Locator']]],
        [[['networks'], ['Hypertext Transfer Protocol'], ['Uniform Resource Locator']], [['networks'], ['Hypertext Transfer Protocol'], ['Uniform Resource Locator']], [['networks'], ['Hypertext Transfer Protocol'], ['Uniform Resource Locator']]],
      ],
      quizTime: 30,
      quizInfo: localStorage.getItem('quizInfo') && true,
      startQuiz: localStorage.getItem('startQuiz') && true,
      key : '',
      Indexes: {
        index: localStorage.getItem('index'),
        quizIndex: localStorage.getItem('quizIndex')
      },
      score : false
    }

    this.back = this.back.bind(this)
    this.startQuiz = this.startQuiz.bind(this)
    this.finish = this.finish.bind(this)
    this.checkScore = this.checkScore.bind(this)
  }

  quizInfo(index, quizIndex) {
    const { Indexes } = this.state
    Indexes.index = index
    Indexes.quizIndex = quizIndex
    
    localStorage.setItem('index',index)
    localStorage.setItem('quizIndex',quizIndex)
    localStorage.setItem('quizInfo',true)

    this.setState({
      Indexes,
      quizInfo: true
    })
  }

  startQuiz() {

    localStorage.setItem('startQuiz',true)
    localStorage.setItem('quizQues',0)
    this.setState({
      startQuiz: true
    })
  }

  finish() {
    this.setState({
      startQuiz : '',

    })
  }

  back() {
    this.setState({
      quizInfo: '',
      score : false
    })
    localStorage.setItem('result','')
  }

  checkScore() {
    this.setState({
        score: true
    })
}

  render() {
    const { quiz, quizCategories, quizInfo, quizQuestions, Indexes, startQuiz, ans, option, key, score } = this.state
    return (
      <div>
        {
          !quizInfo && !startQuiz && !key &&
          <div className='dashboard'>
            <h1>Dashboard</h1>
            <div className='quiz'>
              {quiz.map((items, index) => {
                return (
                  <div className='items' key={`${items}_${index}`}>
                    <h3 key={`${items}_${index}`}>{items}</h3>
                    {quizCategories.map((cat, quizIndex) => <button onClick={() => this.quizInfo(index, quizIndex)} key={`${cat}_${quizIndex}`}>{cat}</button>)}
                  </div>
                )
              })}
            </div>
          </div>
        }
        {
          quizInfo && !startQuiz && !key &&
          <QuizInfo checkScore ={this.checkScore} score = {score} startQuiz={this.startQuiz} back={this.back} quiz={quiz} quizCategories={quizCategories} quizQuestions={quizQuestions} Indexes={Indexes} />
        }
        {
          quizInfo && startQuiz && !key &&
          <Quiz ans={ans} quizStart={startQuiz} indexes={Indexes} quizQuestions={quizQuestions} option={option} finish = {this.finish}/>
        }
      </div>

    );
  }
}

export default Dashboard;
