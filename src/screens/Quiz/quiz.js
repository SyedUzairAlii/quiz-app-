import React, { Component } from 'react';

class Quiz extends Component {
    constructor() {
        super()

        this.state = {
            key: localStorage.getItem('key'),
            procKey: '',
            quesIndex: localStorage.getItem('quizQues'),
            radio : '',
            count : [],

        }
        this.startQuiz = this.startQuiz.bind(this)
        this.nextQues = this.nextQues.bind(this)
        this.radioValue = this.radioValue.bind(this)
        this.result = this.result.bind(this)
    }

    procKey(key) {
        this.setState({
            procKey: key
        })
    }

    radioValue(radioTxt){
        this.setState({
            radio : radioTxt
        })
    }

    startQuiz() {
        const { procKey } = this.state
        
        localStorage.setItem('procKey', procKey)
        localStorage.setItem('key',true)
        localStorage.setItem('quizQues',0)

        this.setState({
            key: true,
        })
    }

    nextQues() {
        const {ans, indexes} = this.props
        const { quesIndex, radio, count } = this.state
        const answer = ans[indexes.index][indexes.quizIndex][quesIndex][0]
        if(radio === answer){
            count.push(true)
        }else{
            count.push(false)
        }
        localStorage.setItem('quizQues',Number(quesIndex)+1)
        this.setState({
            quesIndex : Number(quesIndex)+1,
            count
        })

    }

    result() {
        const {ans, indexes, finish} = this.props
        const { quesIndex, radio, count } = this.state
        var result = 0;
        const answer2 = ans[indexes.index][indexes.quizIndex][quesIndex][0]
        if(radio === answer2){
            count.push(true)
        }else{
            count.push(false)
        }
        count.map(items =>{
            if(items === true){
                result++
            }
        })
        localStorage.setItem('result',result)
        localStorage.setItem('quizQues',Number(quesIndex)+1)

        this.setState({
            quesIndex : Number(quesIndex)+1,
            count,
            key : ''

        })
        localStorage.setItem('quizQues',0)
        localStorage.setItem('key','')
        finish()

    }

    render() {
        const { quizStart, indexes, quizQuestions, option } = this.props
        const { key, procKey, quesIndex, count } = this.state
        const question = quizQuestions[indexes.index][indexes.quizIndex]
        return (
            <div>
                {
                    quizStart && !key &&
                    <div className='dashboard'>
                        <h1>Proctoring Key</h1>
                        <div className='quiz'>
                            <h3 className='items'>
                                <input type='password' onChange={(e) => this.procKey(e.target.value)} placeholder='Enter Proctoring Key' />
                            </h3>
                        </div>
                        <div>
                            <button className='startQuizBtn' style={!procKey ? { opacity: 0.5 } : { opacity: 1 }} disabled={!procKey && 'disabled'} onClick={this.startQuiz}>Start Quiz</button>                            
                        </div>
                    </div>
                }
                {
                    quizStart && key &&
                    <div className='dashboard'>
                        <h1>{question.ques[quesIndex]}</h1>
                        <div className='radioBtn'>
                            {option.map((radio) => {
                                return (
                                    <span className='radioBtn2'>
                                        <input type='radio' name='quiz' value = {radio[indexes.index][quesIndex]} onChange={(e)=>{this.radioValue(e.target.value)}} />
                                        <span>
                                            
                                            {radio[indexes.index][quesIndex]}
                                        </span>
                                    </span>
                                )
                            })}
                        </div>
                        <div className='items'>
                            {

                                quesIndex < question.ques.length-1 ?
                                <button onClick={this.nextQues}>Next</button>:
                                <button onClick={this.result}>Finish</button>

                            }
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Quiz;
