
import "./MainCard.css";

export default function MainCard(props){
    return (
        <>
            <div className="main">
                <div className='my-card mt-5'>
                    {props.children}
                </div>
            </div>
        </>
    );
}