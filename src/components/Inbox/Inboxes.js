import useInboxes from '../../hooks/useInboxes.js';
import Inbox from './Inbox';

const Inboxes = () => {
const [inboxes] = useInboxes()
    return (
        <div className='grid grid-rows-4 grid-flow-col gap-2'>
            {
                inboxes.map(inbox => <Inbox inbox={inbox} key={inbox.mId}></Inbox>)
            }
        </div>
    );
};

export default Inboxes;