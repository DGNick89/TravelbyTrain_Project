import '../App.css'

const SideNav = (props) => {

    return (
        <div style={{width: props.width}} className='sidenav'>
            <button className='close-btn' onClick={props.closeNav}>X</button>
            <a href='/'>Home</a>
            <a href='/about'>About</a>
            <a href='/trainroutes'>Train Routes</a>
            <a href='/booking'>Book Now</a>
        </div>
        );
};
export default SideNav;