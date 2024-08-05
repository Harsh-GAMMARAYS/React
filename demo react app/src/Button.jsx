export default function Button(props){
    function onButtonClick() {
        props.setCount(props.count + 1);
    }
    return <button onClick={onButtonClick}>Counter {props.count}</button>
}