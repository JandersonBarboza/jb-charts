import { JbBars } from '../JbBars';
import { JbTooltip } from '../JbTooltip';
import './styles.css';

export function JbChart({ data}) {
    return (
        <div className='container'>
            <div className='side'>
                {
                    data.map((item, index) =>
                        <div
                            key={index}
                            className='value'
                            style={{ bottom: item.value + '%', color: item.color, bordercolor: item.color }}
                        >
                            <div
                                style={{ borderColor: item.color }}
                            >
                                {item.value}
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='content'>
                {
                    data.map((item, index) =>
                        <JbBars
                            key={index}
                            data={item}
                        >
                            <JbTooltip hide>
                                <div style={{ width: 10, height: 10, borderRadius: 50, backgroundColor: item.color }} />
                                <span>{item.label}</span>
                                <span>{item.value}</span>
                            </JbTooltip>
                        </JbBars>
                    )
                }
                {
                    data.map((item, index) =>
                        <div
                            key={index}
                            className='line'
                            style={{ bottom: item.value + '%', background: item.color }}
                        />
                    )
                }
            </div>
            <div className='cross'></div>
            <div className='labels'>
                {
                    data.map((item, index) =>
                        <span key={index}>{item.label}</span>
                    )
                }
            </div>
        </div >
    )
}