import React from 'react'

class LoadingIndicator extends React.Component{
    state={
        
    }
    render(){
        return(
            <div>
                {
                    this.state.loading ? <div>
                    <img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' alt = 'loading the loading screen'></img>
                    </div> : ''
                }
            </div>
        )

    }
}

export default LoadingIndicator