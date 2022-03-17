
function Profile( props ){
    console.log( props );
    console.log( props.match.params.id );
    return(
        <div>
            <h2>
                Welcome back {props.user.firstName} {props.user.lastName}
            </h2>
        </div>
    );
}

export default Profile;