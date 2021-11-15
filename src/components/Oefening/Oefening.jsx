import react from "react";
import {VscCheck, VscChromeClose} from 'react-icons/vsc'

export default class Oefening extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstNumber: null,
            secondNumber: null,
            answer: null,
            result: 0,
            wrong: 0
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.emptyInputFields = this.emptyInputFields.bind(this)
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    componentDidMount() {
        var min = 0
        var max = 12

        this.setState({
            firstNumber: Math.floor(min + Math.random() * (max - min)),
            secondNumber: Math.floor(min + Math.random() * (max - min)),
        })

    }

    handleClick() {
        if (parseInt(this.state.answer) == parseInt(this.state.firstNumber) * parseInt(this.state.secondNumber)) {
            this.setState((prevState, props) => ({
                result: prevState.result + 1
            })); 
        } else {
            this.setState((prevState, props) => ({
                wrong: prevState.wrong + 1
            }));
        }

        this.emptyInputFields()
        this.componentDidMount()
    }

    emptyInputFields() {
        this.setState({
            answer: ''
        })
    }
    render() {
        return (
            <div id='oefening-container' className="oefening-container">
                <div id="oefening" className="oefening">
                    <div className="oefening-ingave">
                        <span id="firstnumber" className="number">{this.state.firstNumber}</span> <span id="multiplysymbol" classNamem="multiplysymbol">*</span> <span id="secondnumber" className="number">{this.state.secondNumber}</span> <br />
                        <input autoFocus className="answer"  type="number" name="answer" id="answer" value={this.state.answer}
                        onChange={this.handleInputChange} /><br />
                        <button name="checkAnswer" id="checkAnswer" onClick={this.handleClick}>check</button>
                    </div>
                    <div className="result">
                        <p><VscCheck id="checkmark" className="resultIcon" size="30"/> {this.state.result} <VscChromeClose id="crossmark" className="resultIcon" size="30"   /> {this.state.wrong}</p>
                    </div>
                </div>
            </div>
        )

    }
}