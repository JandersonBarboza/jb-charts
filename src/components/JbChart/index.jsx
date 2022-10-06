import { JbBars } from '../JbBars';
import './styles.css';

const dataExemple = [
    {
        id: 1,
        label: 'Exemplo 1',
        value: '50%'
    },
    {
        id: 2,
        label: 'Exemplo 2',
        value: '100%'
    },
    {
        id: 3,
        label: 'Exemplo 3',
        value: '20%'
    }
];

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