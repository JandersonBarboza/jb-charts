import { useState } from 'react';
import { JbTooltip } from '../JbTooltip';
import './styles.css';

export function JbBars({ data }) {
    const [tooltipShow, setTooltipShow] = useState(0);
    const [tooltipPos, setTooltipPos] = useState([data.value, data.value]);

    function handleTooltipEnter(event) {
        setTooltipShow(1);
    }
    function handleTooltipMove(event) {
        setTooltipPos([
            event.clientX,
            event.clientY
        ])
    }
    function handleTooltipLeave() {
        setTooltipShow(0);
        setTooltipPos([-100, -100]);
    }

    return (
        <div id='item'>
            <div className="bgBar">
                <div
                    className="bar"
                    style={{ height: data.value + '%', background: data.color }}
                    onMouseEnter={handleTooltipEnter}
                    onMouseMove={handleTooltipMove}
                    onMouseLeave={handleTooltipLeave}
                >
                </div>
            </div>
            <div className='tooltipContainer'>
                <JbTooltip tooltipPos={tooltipPos} opacity={tooltipShow} data={data} />
            </div>
        </div>
    )
}