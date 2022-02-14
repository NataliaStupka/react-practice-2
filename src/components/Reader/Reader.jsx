import { Component } from 'react';
import { Controls } from './Controls';
import { Progress } from './Progress';
import { Publications } from './Publication';

import { getPublications } from './services/publicationsApi';

// const LS_KEY = 'reader_item_index'; // -.) для LocalStorage

export class Reader extends Component {

    state = {
        index: 0,
        items: [],
        isLoading: false,
    }

    // value - на сколько изменять +/- 1 
    changeIndex = (value) => {
        this.setState(state => ({ index: state.index + value }))
    }
    
    // II) запрос с бекэнда
    async componentDidMount() {
        // делаем http запрос, сдесь прописан сокращенный вариант, в проекте прописать правилно
        try {
            this.setState({isLoading: true})
            // const data = await getPublications();
            const items = await getPublications(); 
            this.setState({ isLoading: false }); //когда загрузилось снова false
            this.setState({ items }); // записываем то, что приходит в state items: []
           
        } catch (error) { 
            console.log(error);
        }   
}


    // componentDidMount() {
    //     const savedState = localStorage.getItem(LS_KEY);
    //     if (savedState) {
    //         this.setState({ index: Number(savedState) });
    //     }
    // }


    // componentDidUpdate(_, prevState) {
    //     if (prevState.index !== this.state.index) {
    //         localStorage.setItem(LS_KEY, this.state.index)
    //     }
    // }

    
    render() {

        const { index, items, isLoading} = this.state;
        const totalItems = items.length;  //общее количество items
        const currentItem = items[index];  //выбранное
        // const hasPublication = !isLoading && totalItems > 0; //есть публикации
        
        return (
            <div style={{ border: '1px solid black', margin: '0 auto', padding: 20 }}>
                {!isLoading && totalItems === 0 && <div>Еще нет публикаций!</div>} 
                {isLoading && (<div>Загрузка...</div>)}

                {!isLoading && totalItems > 0 && (
                    <>
                     <Controls
                    current={index + 1}
                    total={totalItems}
                    onChange={this.changeIndex}
                />
                <Progress
                    current={index + 1}
                    total={totalItems}
                />
                {currentItem && <Publications item={currentItem }/>}
                    </>
                )
                
                   }
               
               
                
    </div>
)

    }
} 


// -----------------------------------------------------------------------------
     // I) если берем данные с файла json, а не вытягиваем с бэкенда
     
     
// import { Component } from 'react';
// import { Controls } from './Controls';
// import { Progress } from './Progress';
// import { Publications } from './Publication';


// const LS_KEY = 'reader_item_index'; // -.) для LocalStorage

// export class Reader extends Component {

//     state = {
//         index: 0,
//     }

//     // -- value - на сколько изменять +/- 1
//     changeIndex = (value) => {
//         this.setState(state => ({ index: state.index + value }))
//     }
    
//     // -.2
//     componentDidMount() {
//  //-- проверяем если чел. первый раз на сайте
//         //--если savedState есть, то есть он не null(не приводится к 0), то подгрузится та стр на которой он остановился
//         const savedState = localStorage.getItem(LS_KEY);
//         if (savedState) {
//             this.setState({ index: Number(savedState) });
//         }

//         // -- было до проверки ---
//         //   const index = Number(localStorage.getItem(LS_KEY))
//         // this.setState ({index})
           //------------------------
//     }


//     // -.1)
//     //--используем componentDidUpdate для сохранения послед. просмотр. страницы в LocalStorage
//     // componentDidUpdate(prevProps, prevState) { --если не использ prevProps/prevState ставим _
//     componentDidUpdate(_, prevState) {
//         if (prevState.index !== this.state.index) {
//             localStorage.setItem(LS_KEY, this.state.index)
//         }
//     }

    
//     render() {

//         // console.log('выбираем 1 обьект по индексу из масива', this.props.items[this.state.index]);
//         const currentItem = this.props.items[this.state.index];
//         const { index } = this.state;
//         const { items } = this.props;
//         const totalItems = items.length;  //общее количество items

//         return (
//             <div style={{ border: '1px solid black', margin: '0 auto', padding: 20 }}>
//                 <Controls
//                     current={index + 1}
//                     total={totalItems}
//                     onChange={this.changeIndex}
//                 />
//                 <Progress
//                     current={index + 1}
//                     total={totalItems}
//                 />
//                 <Publications item={currentItem }/>
                
//              </div>
//              )

//     }
// } 
