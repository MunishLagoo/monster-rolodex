//import { Component } from 'react';

import Card from '../cards/card.component';
import './card-list.styles.css';


const CardList = ({monsters}) => {
    return (
        <div className= 'card-list' >
            {monsters.map((monster) => {
                return <Card monster={monster}/>;
            })
        }
        </div>
    )
}

// class CardList extends Component {
// render () {
//     console.log('render from card-list');
//     console.log(this.props);
//     const monsters = this.props.monsters;
    
//     return ( <div className = 'card-list'>
//                 {monsters.map((monster)=> {
//                     return < Card monster={monster} />;
//                     })
//                 }
//             </div>
//         );
// }

// }

export default CardList;
