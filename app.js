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
      output: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
    this.handleOperatorClick = this.handleOperatorClick.bind(this);
  }

  handleClick(evt) {
    let { calculation, output } = this.state;
    calculation = (calculation === "0") ? evt.target.innerText : calculation + evt.target.innerText;
    this.setState({ calculation, output });
  }

  handleClearClick() {
    let calculation = "0";
    let output = 0;
    this.setState({ calculation, output });
  }

  handleOperatorClick(evt) {
    const operator = evt.target.innerText;
    if(operator === "+") console.log(operator);
    if(operator === "-") console.log(operator); 
    if(operator === "x") console.log(operator); 
    if(operator === "/") console.log(operator);
    if(operator === "=") console.log(operator);  
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
            <td colSpan="2" ><Key id="clear" text="clear" onClick={ this.handleClearClick } /></td>
            <td><Key id="devide" text="/" onClick={ this.handleOperatorClick } /></td>
            <td><Key id="multiply" text="x" onClick={ this.handleOperatorClick } /></td>
          </tr>
          <tr>
            <td><Key id="seven" text="7" onClick={ this.handleClick } /></td>
            <td><Key id="eight" text="8" onClick={ this.handleClick } /></td>
            <td><Key id="nine" text="9" onClick={ this.handleClick } /></td>
            <td><Key id="substract" text="-" onClick={ this.handleOperatorClick } /></td>
          </tr>
          <tr>
            <td><Key id="four" text="4" onClick={ this.handleClick } /></td>
            <td><Key id="five" text="5" onClick={ this.handleClick } /></td>
            <td><Key id="six" text="6" onClick={ this.handleClick } /></td>
            <td><Key id="add" text="+" onClick={ this.handleOperatorClick } /></td>
          </tr>
          <tr>
            <td><Key id="one" text="1" onClick={ this.handleClick } /></td>
            <td><Key id="two" text="2" onClick={ this.handleClick } /></td>
            <td><Key id="three" text="3" onClick={ this.handleClick } /></td>
            <td rowSpan="2" ><Key id="equal" text="=" onClick={ this.handleOperatorClick } /></td>
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