import React, { Component } from 'react'
import './Calc.css'
import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0

}



export default class Calc extends Component {

    clearMemory() {
        console.log('Limpar')
    }
    setOperation(operation) {
        console.log(operation)
    }

    addDigit(n) {
        console.log(n)
    }

    render() {
        const addDigit = n => this.addDigit(n)
        const setOperation = op => this.setOperation(op)

        return (
            <div className="calc">

                <Display value={1000} />

                <Button label="AC" click={() => this.clearMemory()} />
                <Button label="+" click={this.setOperation} />
                <Button label="/" click={this.setOperation} />
                <Button label="-" click={this.setOperation} />
                <Button label="*" click={this.setOperation} />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="0" click={this.addDigit} />
                <Button label="." click={this.addDigit} />

                <Button label="=" click={this.setOperation} />
            </div>)

    }
}