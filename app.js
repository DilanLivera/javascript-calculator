function Key({ id, text }) { 
  return (
    <button id={ id } className="Key" >{ text }</button>
  );
}

class Calculator extends React.Component {
  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state= {
      left: 2,
      right: 4,
      operator: "x",
      output: 8
    }
  }
  render() {
    const { left, right, operator, output } = this.state;
    let calculation = left+operator+right;
    return (
      <div className="Calculator">
        <div className="Calculator-display">
          <h3 className="Calculator-calculation">{ calculation }</h3>
          <h3 className="Calculator-output">{ output }</h3>
        </div>
        <table>
          <tbody>
          <tr>
            <td colSpan="2" ><Key id="ac" text="AC" /></td>
            <td><Key id="devide" text="/" /></td>
            <td><Key id="multiply" text="x" /></td>
          </tr>
          <tr>
            <td><Key id="seven" text="7" /></td>
            <td><Key id="eight" text="8" /></td>
            <td><Key id="nine" text="9" /></td>
            <td><Key id="substract" text="-" /></td>
          </tr>
          <tr>
            <td><Key id="four" text="4" /></td>
            <td><Key id="five" text="5" /></td>
            <td><Key id="six" text="6" /></td>
            <td><Key id="add" text="+" /></td>
          </tr>
          <tr>
            <td><Key id="one" text="1" /></td>
            <td><Key id="two" text="2" /></td>
            <td><Key id="three" text="3" /></td>
            <td rowSpan="2" ><Key id="equal" text="=" /></td>
          </tr>
          <tr>
            <td colSpan="2" ><Key id="zero" text="0" /></td>
            <td><Key id="dot" text="." /></td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));