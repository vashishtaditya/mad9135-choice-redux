import React from 'react'
import AppHeader from './AppHeader'

  
class AppUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            list: []
        }
    }

    buildList = (data)=>{
        console.log(data)
        this.setState({
            list: data,
            isLoaded: true
        })
    }

    componentDidMount() {
        console.log('did mount')
        let url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
        .then(response => response.json())
        .then(this.buildList)
        .catch(error => {
            this.setState({error:error})
        })
    }

    render () {
        console.log('render')
        const {error, isLoaded, list} = this.state;
        
        //console.log("hello users" + this.state.users)
        if(error){
            return <div>Error: {error.message}</div>
        } else if(!isLoaded){
            return <div>Loading...</div>
        } else {
        return (
            <div>
            <AppHeader/>
            <ul>
                {list.map(item => (
                    <li key={item.id} id={item.id}>
                        {'Name: ' + item.name +  '    Email: ' + item.email}
                    </li>
                ))}
            </ul>
            </div>
        );
    }
    }
}

export default AppUsers