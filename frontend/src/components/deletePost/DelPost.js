import PostDelete from "./PostDelete";

const DelPost = () => {
    function buttonClickConfirmDelete() {
        PostDelete()
    };
    function buttonClickExitDelete() {
        window.location = '../MyPosts'
    };

    return (
        <div className='group'>
            <button onClick={buttonClickConfirmDelete}>Supprimer le post</button>
            <button onClick={buttonClickExitDelete}>Annuler la suppression</button>
        </div>
    )
}

export default DelPost;
