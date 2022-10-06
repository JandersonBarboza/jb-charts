import { JbChart } from "./components/JbChart";

const data = [
    {
        id: 1,
        label: 'Exemplo 1',
        value: '50',
        color: '#5a5a66'
    },
    {
        id: 2,
        label: 'Exemplo 2',
        value: '70',
        color: '#a4c2a8'
    },
    {
        id: 3,
        label: 'Exemplo 3',
        value: '20',
        color: '#aceb98'
    },
    {
        id: 4,
        label: 'Exemplo 4',
        value: '35',
        color: '#87ff65'
    },
    {
        id: 5,
        label: 'Exemplo 5',
        value: '80',
        color: '#5a5a66'
    },
    {
        id: 6,
        label: 'Exemplo 6',
        value: '60',
        color: '#a4c2a8'
    },
    {
        id: 7,
        label: 'Exemplo 7',
        value: '95',
        color: '#aceb98'
    },
    {
        id: 8,
        label: 'Exemplo 8',
        value: '28',
        color: '#87ff65'
    }
];

export function App () {
    return (
        <JbChart data={data} />
    )
}