import { useState } from "react"
function ColorButton() {
    const [btnColor, setBtnColor] = useState('blue')
    const newBtnColor = btnColor === 'green' ? 'blue' : 'green'
    const [inputDisabled, setInputDisabled] = useState(false)
    const btnStatus = inputDisabled === true ? 'enabled' : 'disabled'
    return (
        <div>
            <h1>Testing Playground</h1>
            <p>Button is {btnStatus}</p>
            <button style={{ backgroundColor: btnColor }}
                onClick={() => setBtnColor(newBtnColor)}
                disabled={inputDisabled}
            >
                Change button color to {newBtnColor}
            </button>
            <input
                type='checkbox'
                defaultChecked={inputDisabled}
                onChange={(e) => setInputDisabled(e.target.checked)}
            />
        </div>
    )
}

export default ColorButton