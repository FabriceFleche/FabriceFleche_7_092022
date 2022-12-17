import { useNavigate } from 'react-router';
import PostDelete from "./PostDelete";
import '../../styles/components/delPost.css';

const DelPost = () => {
    let navigate = useNavigate();
    function buttonClickConfirmDelete() {
        PostDelete()
        navigate('../MyPosts')
    };
    function buttonClickExitDelete() {
        navigate('../MyPosts')
    };

    return (
        <div className='group'>
            <button className='group_button group_buttonOne' onClick={buttonClickConfirmDelete}>Supprimer le post</button>
            <button className='group_button group_buttonTwo' onClick={buttonClickExitDelete}>Annuler la suppression</button>
        </div>
    )
}

export default DelPost;
