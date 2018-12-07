import React from 'react'
import axios from 'axios'
import UserImages from '../containers/UserImages'
// import LoadingIndicator from '../components/loadingindicator'

export default class HomePage extends React.Component {

		state = {
			success:true,
			loading:true,
			users: [],
			userImages:[]
		}    

		componentDidMount = () =>{
				axios.get('https://insta-oct18.nextacademy.com/api/v1/users')
				.then(result =>{
				if(this.state.success===true){
						const {data} = result
						this.setState({
							loading:false,
							users: data
						})
					}
				})

				.catch(error =>{
					console.log(error)
				})
		}
	
		render(){
			return (  
				<div>
				{
				this.state.loading ? <div>
				<img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' alt = 'loading the loading screen'></img>
				</div> : ''
				}
				{/* <LoadingIndicator /> */}
								
					<h1>Home Page</h1>
						{
							this.state.users.map((user,index) =>
								<div className='usernames' key={index}>
									<h2>Username:{user.username}</h2>
									<h3>Profile Picture:</h3>
									<figure>           
										<img src={user.profileImage} alt ="user dp"></img>
									</figure>
									<h3>Posts:</h3>
									<UserImages user_id ={user.id} />
									
									<hr/>
									
								</div>
							)
						}
					
				</div>
			)
		}
	}
