export const Progress = ({ current, total }) => {
    return (
        <p>
            {current}/{total}
        </p>
    );
};


// до переноса по компонентам
//  {/* <p>1(индекс но что бы не снуля)/10(длинна масива)</p> */}
//    <p>{index + 1}/{ totalItems }</p>