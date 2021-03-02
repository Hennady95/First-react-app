import './style.css'

const PropAnimation = (props) => {
    return props.start ? <div className='loader loader-animated'></div>
    :
    <div>Load</div>

}

export default PropAnimation