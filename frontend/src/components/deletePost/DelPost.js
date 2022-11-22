import { useNavigate } from 'react-router';
import PostDelete from "./PostDelete";

const DelPost = () => {
    let navigate = useNavigate();
    function buttonClickConfirmDelete() {
        PostDelete()
        navigate('../MyPosts')
    };
    function buttonClickExitDelete() {
        navigate('../MyPosts')
        //window.location = '../MyPosts'
    };

    return (
        <div className='group'>
            <button onClick={buttonClickConfirmDelete}>Supprimer le post</button>
            <button onClick={buttonClickExitDelete}>Annuler la suppression</button>
        </div>
    )
}

export default DelPost;
