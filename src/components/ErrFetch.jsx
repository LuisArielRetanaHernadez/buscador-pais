
// estilos del propio ErrFetch
import '../styles/ErrFetch.css'

const ErrFetch = ({alert, messages}) => {

    return (
        <div className='err-fetch'>
            <h2>{alert}</h2>
            <h3>{messages}</h3>
        </div>
    )
}
export default ErrFetch;