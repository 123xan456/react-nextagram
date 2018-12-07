import React from 'react'
import axios from 'axios'
import Image from "react-graceful-image"

export default class UserImages extends React.Component {
	state = {
		userimages:[]
	}
	componentDidMount = () =>{
		axios.get(`https://insta-oct18.nextacademy.com/api/v1/images?userId=${this.props.user_id}`)
		.then(result =>{
			// console.log(result)
			const {data} = result
			
			this.setState({
				userimages:data
			})
		})
	}
	render(){
	return(
		<div>
		 
			{
				this.state.userimages.map((userimage,index) =>
				<Image 
					key={index}
					src={userimage}
					width="50px"
					height="50px"
				/>
				)
			}
		  
		</div>
	)
	}
  }