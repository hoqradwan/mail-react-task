import useSpams from '../../hooks/useSpams.js';
import Spam from './Spam';

const Spams = () => {
const [spams] = useSpams()
    return (
        <div className='grid grid-rows-4 grid-flow-col gap-2'>
            {
                spams.map(spam => <Spam spam={spam} key={spam.mId}></Spam>)
            }
        </div>
    );
};

export default Spams;