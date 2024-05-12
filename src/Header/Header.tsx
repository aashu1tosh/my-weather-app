import './Header.css'

function Header() {
    return (
        <div className='heading'>
            <h1>Weather Application</h1>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round" />
            </label>

        </div>
    )
}

export default Header