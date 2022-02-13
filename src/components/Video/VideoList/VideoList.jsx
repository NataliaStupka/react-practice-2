// получил список видео (масив обьектов) и onSelect (метод изменяющий state в Example) - передает в example на какую ссылку кликнули
export const VideoList = ({ videos, onSelect }) => {
    return (
        <ul>
            {videos.map(video => ( 
                // !! onClick на li делать нельзя, Репете можно
                <li key={video.id} onClick={() => onSelect(video.link)}>
                    {video.link}
                </li>
            ))}
        </ul>
    );
};  