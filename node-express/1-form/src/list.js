import React , {Component} from 'react' 

class ListPlayer extends React.Component {
    constructor(){
        super()
    }
    render(){
        console.log(this.props.playerArray)
        return (
            <div>
                <ul>
                    {
                        this.props.playerArray.map(player => <li> { player.name }</li>)
                    }
                </ul>
            </div>
        )
    }
}

export default ListPlayer 