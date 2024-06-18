const SayColor = ({ColorHandler}) =>{
    return (
    <div>
        <button onClick={() => ColorHandler('red')}>빨간색</button>
        <button onClick={() => ColorHandler('green')}>초록색</button>
        <button onClick={() => ColorHandler('blue')}>파란색</button>
    </div>
    )
}
export default SayColor;

