import { JbBars } from '../JbBars';
import './styles.css';

export function JbChart({ data }) {
    console.log(data)
    return (
        <div className='container'>
            <div className='side'>

            </div>
            <div className='content'>
                {
                    data.map((item, index) =>
                            <JbBars key={index} value={item.value} color={item.color} />
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
        </div>
    )
}