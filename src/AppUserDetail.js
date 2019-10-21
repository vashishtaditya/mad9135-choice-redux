import React from 'react'
import UserDetail from './UserDetail';


class AppUserDetail extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            
            error: null,
            isLoaded: false,
            details: []
        }
    }

    buildList = (data)=>{
        console.log(data)
        this.setState({
            details: data,
            isLoaded: true
        })
    }




    componentDidMount() {
        console.log('Details did mount')
        let url = `https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`
        fetch(url)
        .then(response => response.json())
        .then(this.buildList)
        .catch(error => {
            this.setState({error:error})
        })
    }

    render(){

        const {error, isLoaded, details} = this.state
        const detailsArray = []
        detailsArray.push(details)
        const detailSection = detailsArray.map(detail => (
            <UserDetail key={detail.id} detail = {detail} id={detail.id}/>
          
        )
        )
        if(error){
            return <div>Error: {error.message}</div>
        } else if(!isLoaded){
            return <div>Loading...</div>
        } else {
        return(
            <section className="user-detail">
                {detailSection}
            </section>

        )
    }
    }
}




export default AppUserDetail