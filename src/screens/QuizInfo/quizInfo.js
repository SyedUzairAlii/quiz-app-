import React, { Component } from 'react';


class QuizInfo extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            resultScore: '',
            updatedScore : this.props.score
        }
    }
    
    componentWillMount() {
        const result = ((localStorage.getItem('result') / 3) * 100).toFixed(0)
        this.setState({
            resultScore: result
        })
        
    }
    
    componentWillReceiveProps(props) {
        this.setState({
            updatedScore : props.score
        })
    }
    
    render() {
        
        const results = localStorage.getItem("result")
        const { resultScore, updatedScore } = this.state
        const { quiz, quizCategories, quizQuestions, Indexes, back, startQuiz, checkScore } = this.props
        return (
            
            
            <div className='dashboard'>
                {
                    !updatedScore &&
                    <div>
                        <h1>Quiz Info</h1>
                        <div className='quiz'>
                            <h2>{quiz[Indexes.index]} <span>({quizCategories[Indexes.quizIndex]})</span></h2>
                            <div className='items'>
                                <h3>Total Questions</h3>
                                <h3>{quizQuestions[Indexes.index][Indexes.quizIndex].totalQues}</h3>
                            </div>
                            <div className='items'>
                                <h3>Quiz Duration</h3>
                                <h3>30 min</h3>
                            </div>
                        </div>
                        <div>
                            <button onClick={back} className='startQuizBtn'>Back</button>
                            {
                                results ?
                                <button className='startQuizBtn' onClick={checkScore}>Score</button>:
                                <button className='startQuizBtn' onClick={startQuiz}>Start Quiz</button> 
                            }
                        </div>
                    </div>
                }
                {
                    updatedScore &&
                    <div>
                        <h1>Result</h1>
                        <div className='quiz'>
                            <h2>{quiz[Indexes.index]} <span>({quizCategories[Indexes.quizIndex]})</span></h2>
                            <div className='items'>
                                <h3>Percentage : </h3>
                                <h3>{resultScore}%</h3>
                            </div>
                            <div className='items'>
                                <h3></h3>
                                <h3></h3>
                            </div>
                        </div>
                        <div>
                            <button onClick={back} className='startQuizBtn'>Back</button>
                        </div>
                    </div>

                }
            </div>

        );
    }
}

export default QuizInfo;
