import "./Card.css";

function Card(props) {
    const classes = "card " + props.className; /* !!!"card+space"!!!! */
    
    return <div className={classes}>{props.children}</div>;
}

export default Card;



