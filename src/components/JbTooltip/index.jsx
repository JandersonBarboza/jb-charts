import './styles.css'

export function JbTooltip({ children, data, tooltipPos, opacity }) {

    const posX = tooltipPos[0] + 20;
    const posY = tooltipPos[1] + 20;

    return (
        <div
            className='tooltip'
            style={{
                left: posX,
                top: posY,
                opacity: opacity
            }}
        >
            <div className='tooltipTitle'>
                <div style={{ width: 10, height: 10, borderRadius: 50, backgroundColor: data.color }} >
                </div>
                <span>{data.label}</span>
            </div>
            <div className='tooltipData'>
                <p>{data.value}</p>
            </div>
            <div className='tooltipDetails'>
                <p>Texto de exemplo</p>
            </div>
            {children}
        </div>
    )
}