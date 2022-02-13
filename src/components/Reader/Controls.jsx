export const Controls = ({current, total, onChange}) => {
    return (
        <section>
            <button
                type="buuton"
                disabled={current === 1}    //'убираем' кнопку, привязываемся к позиции
                onClick={() => onChange(-1)}
            >
                Назад
            </button>
            <button
                type="buuton"
                disabled={current === total}   //'убираем' кнопку когда индекс+1 = длинне масива
                onClick={() => onChange(+1)}
            >
                Вперед
            </button>
        </section>
    );
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
                
  
