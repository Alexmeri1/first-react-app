import profilePic from "./assets/moumousick.png"


function Card(){

    return (
        <div className = "card">
            <img src= {profilePic} alt= "profile picture" className="card-image"/>
            <h2 className="card-title">Moumousick mou</h2>
            <p className="card-text"> I am wittle bb </p>

        </div>

    );

}

export default Card;