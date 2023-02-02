import Styles from './cardWorld.module.css'

const CardWorld = (props) => {
    
    const { data } = props;

    return(
        <div className={Styles.divWorlds}>
            <p>Id: {data.id}</p>
            <p>Name: {data.name}</p>
            <p>Tipo: {data.type}</p>
            <p>Dimension: {data.dimension}</p>
        </div>
    )
}

export default CardWorld