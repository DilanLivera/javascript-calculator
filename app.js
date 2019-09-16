function Key({ id, text, onClick }) { 
  return (
    <button id={ id } className="Key" onClick={ onClick }>{ text }</button>
  );
}

class Calculator extends React.Component {
  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state= {
      calculation: "0",
      output: 0,
      justCalculated: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
    this.handleEqualClick = this.handleEqualClick.bind(this);
  }

  handleClick(evt) {    
    let { calculation,output, justCalculated } = this.state;
    calculation = (justCalculated || calculation === "0") ? evt.target.innerText : calculation + evt.target.innerText;
    if(justCalculated) {
      output = "0";
      justCalculated = false;
    }
    this.setState({ calculation, justCalculated, output });
  }

  handleClearClick() {
    let calculation = "0";
    let output = 0;
    let justCalculated = false;
    this.setState({ calculation, output, justCalculated });
  }

  handleEqualClick() {
    let calculation = this.state.calculation;
    const reducer = (accumulator, currentValue) => (currentValue === "x") ? accumulator+"*" : accumulator+currentValue;
    let newCalculation = calculation.split('').reduce(reducer, "");    
    let output = eval(newCalculation);
    const justCalculated = true;
    this.setState({ calculation, output, justCalculated });
  }

  render() {
    const { calculation, output } = this.state;

    return (
      <div className="Calculator">
        <div className="Calculator-display">
          <h3 className="Calculator-calculation">{ calculation }</h3>
          <h3 className="Calculator-output" id="display">{ output }</h3>
        </div>
        <table>
          <tbody>
          <tr>
            <td colSpan="2" ><Key id="clear" text="AC" onClick={ this.handleClearClick } /></td>
            <td><Key id="devide" text="/" onClick={ this.handleClick } /></td>
            <td><Key id="multiply" text="x" onClick={ this.handleClick } /></td>
          </tr>
          <tr>
            <td><Key id="seven" text="7" onClick={ this.handleClick } /></td>
            <td><Key id="eight" text="8" onClick={ this.handleClick } /></td>
            <td><Key id="nine" text="9" onClick={ this.handleClick } /></td>
            <td><Key id="substract" text="-" onClick={ this.handleClick } /></td>
          </tr>
          <tr>
            <td><Key id="four" text="4" onClick={ this.handleClick } /></td>
            <td><Key id="five" text="5" onClick={ this.handleClick } /></td>
            <td><Key id="six" text="6" onClick={ this.handleClick } /></td>
            <td><Key id="add" text="+" onClick={ this.handleClick } /></td>
          </tr>
          <tr>
            <td><Key id="one" text="1" onClick={ this.handleClick } /></td>
            <td><Key id="two" text="2" onClick={ this.handleClick } /></td>
            <td><Key id="three" text="3" onClick={ this.handleClick } /></td>
            <td rowSpan="2" ><Key id="equal" text="=" onClick={ this.handleEqualClick } /></td>
          </tr>
          <tr>
            <td colSpan="2" ><Key id="zero" text="0" onClick={ this.handleClick }  /></td>
            <td><Key id="dot" text="." onClick={ this.handleClick } /></td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));