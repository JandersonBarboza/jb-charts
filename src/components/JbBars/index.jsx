import './styles.css'

export function JbBars({ value, label, color }) {
    return (
        <div id='item'>
            <div className="bgBar">
                <div className="bar" style={{ height: value + '%', background: color }} >
                    <div className='line' /*style={{ background: 'white' }}*/></div>
                    <div className='value' /*style={{ color: 'white' }}*/>
                        <div>
                            {value}
                        </div>
                    </div>
                </div>
            </div>
            <label>{label}</label>
        </div>
    )

}