import Styles from './card.module.css'

const Card = (props) => {

    const { data } = props

    return(
        <>
            <ul className={Styles.card}>
                <li>
                    <button className={Styles.actBtn} onClick={() => alert('Boton Funcionando')}>X</button>
                    <img className={Styles.cardImg} onClick={() => alert('Modal')} src={data.image} alt={data.name} />
                    <span className={Styles.cardName}>{data.name}</span>
                </li>
                <li>
                    <table className={Styles.tableInf}>
                        <thead>
                            <tr>
                                <th><strong>ID</strong></th>
                                <th><strong>Especie</strong></th>
                                <th><strong>Genero</strong></th>
                                <th><strong>Status</strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.species}</td>
                                <td>{data.gender}</td>
                                <td>{data.status}</td>
                            </tr>
                        </tbody>
                    </table>
                </li>
            </ul>
        </>
    )
};

export default Card;