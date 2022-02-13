import { Component } from 'react';
import { Controls } from './Controls';
import { Progress } from './Progress';
import { Publications } from './Publication';

const LS_KEY = 'reader_item_index'; // -.) для LocalStorage

export class Reader extends Component {

    state = {
        index: 0,
    }

    // value - на сколько изменять +/- 1 
    changeIndex = (value) => {
        this.setState(state => ({ index: state.index + value }))
    }
    
    // -.2
    componentDidMount() {
//проверяем если чел. первый раз на сайте
        //если savedState есть, то есть он не null(не приводится к 0), то подгрузится та стр на которой он остановился
        const savedState = localStorage.getItem(LS_KEY);
        if (savedState) {
            this.setState({ index: Number(savedState) });
        }

        // было
        //   const index = Number(localStorage.getItem(LS_KEY))
        // this.setState ({index})
    }


    // -.1)
    //используем componentDidUpdate для сохранения послед. просмотр. страницы в LocalStorage
    // componentDidUpdate(prevProps, prevState) { если не использ prevProps/prevState ставим _
    componentDidUpdate(_, prevState) {
        if (prevState.index !== this.state.index) {
            localStorage.setItem(LS_KEY, this.state.index)
        }
    }

    
    render() {

        // console.log('выбираем 1 обьект по индексу из масива', this.props.items[this.state.index]);
        const currentItem = this.props.items[this.state.index];
        const { index } = this.state;
        const { items } = this.props;
        const totalItems = items.length;  //общее количество items

        return (
            <div style={{ border: '1px solid black', margin: '0 auto', padding: 20 }}>
                <Controls
                    current={index + 1}
                    total={totalItems}
                    onChange={this.changeIndex}
                />
                <Progress
                    current={index + 1}
                    total={totalItems}
                />
                <Publications item={currentItem }/>
                
    </div>
)

    }
} 


//до переноса по компонентам ( <Controls />)
// <section>
//     <button
//         type="buuton"
//         disabled={index === 0}    //'убираем' кнопку когда индекс на 0 элементе
//         onClick={() => this.changeIndex(-1)}
//     >
//         Назад
//     </button>
//     <button
//         type="buuton" 
//         disabled={index + 1  === totalItem}   //'убираем' кнопку когда индекс+1 = длинне масива
//         onClick={() => this.changeIndex(+1)}
//     >
//         Вперед
//     </button>
// </section>
                