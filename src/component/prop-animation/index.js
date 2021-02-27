import './style.css'

const Prop_animation = (props) => {
    return props.start ? <div className='loader loader-animated'></div>
    :
    <div>Load</div>

}

export default Prop_animation