import { Component } from 'react';
import {PlayerWrapper, StyledPlayer} from './Player.styled'

export class Player extends Component {
    state = {
        isVideoLoaded: false,   //загрузилось или не загрузилось видео
    }
    
    //componentDidUpdate всегда делать проверку иначе зациклится
    componentDidUpdate(prevProps) {
        if (prevProps.url !== this.props.url) {
                console.log('новый url, а значит загружаем видео ...')
            this.setState({isVideoLoaded: false})
        }
    };

    render() {
        const { isVideoLoaded } = this.state;
        const { url } = this.props;
        const showLoader = url && !isVideoLoaded;

        //уменьшаем "дерганье" размера видео при загрузке
        //если видео загрузилось то 100% пикселей, нет - 0
        // const playerSize = isVideoLoaded ? '100%' : 0;
        //?? почему-то не получилось
        
        return (
    
            <>
                {/* показываем когда есть выбранный url и видео не загрузилось */}
                {showLoader && <h2>Загружаем видео ...</h2>}   
                {url && (
                    <PlayerWrapper>
                        <StyledPlayer
                            url={url} 
                            // width={playerSize}
                            // height={playerSize}

                            //проп с библеотеки, вызывается когда видео загрузилось
                            //передаем, что видео загрузилось загружаем видео пропадет
                            onReady={() => this.setState({isVideoLoaded: true})}
                            controls      //пропс что бы показать кнопки плеера
                            />
                    </PlayerWrapper>
               )} 
            </>
)

}

}