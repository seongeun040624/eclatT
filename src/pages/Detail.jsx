import DetailBottom from './DetailBottom';
import DetailTop from './DetailTop';
import DetailMain from './DetailMain';

import '../style/detail.scss';


const Detail = () => {
    return (
        <div>
            <DetailTop />
            <div className='hr'></div>
            <DetailMain />
            {/* <div className='hr'></div> */}
            <DetailBottom />
        </div>
    );
};

export default Detail;