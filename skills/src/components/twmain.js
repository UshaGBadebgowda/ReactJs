import React, {Component} from "react"
import logo from './../chart.gif';

class TwMain extends Component{
	constructor(props){super(props)

		    this.state = {
      allWeights: []
    }

	};
	render(){
		return (
		<main>
		<h2>All weights</h2>
		{
			this.state.allWeights.map((emp,i) =>
            (
              <div key={i}>
                {emp.empName}
                {emp.employeeWeights.map((weight,j) => {
                  return <div key={j}>
                    Date: {new Date(weight.weighedOn).toLocaleDateString()}
                    {' '}
                    Weight: {weight.empWeight}
                  </div>
                })}
              </div>

          ))
        }
	
		</main>
	)
	}
	componentDidMount(){
    fetch("http://localhost:8000/getemployees")
    .then(function(response){
    	return(response.json());
    })
    .then(function(employees){
    	console.log(employees);
    }).catch(function(err){
    	console.log(err)
    })
  }

}

export default TwMain