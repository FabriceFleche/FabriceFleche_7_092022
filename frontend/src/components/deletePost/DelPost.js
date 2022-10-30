import postDelete from "./postDelete";

const DelPost = () => {
    postDelete();

    return (
        <div className='group'>
            <button>Supprimer le post</button>
        </div>
    )
}

export default DelPost;
