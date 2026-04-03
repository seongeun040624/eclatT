import { productsDetails } from "../data/productsDetails";
import { category } from "../data/category";
import { scentsDetails } from "../data/scentsDetails";


const DetailMain = () => {
        //const { id } = useParams(); 
        const id = 1; //테스트용 끝나면 위에꺼 켜야함
        
    
        // 현재 상품 찾기
        const pDetails = productsDetails.find(
            (item) => item.id === Number(id)
        );
        if (!pDetails) return <div>로딩중...</div>;
    
        if (!product) return <div>로딩중...</div>; 
        // 카테고리 정보
        const categoryInfo = category[pDetails.category];
     
        // 향 정보
        const scentInfo = scentsDetails[pDetails.scent];
        
        
    return (
        <div className="detailMain">
            <div className="DMTop">
                <div className="topText">
                    <h2>{scentInfo.name}</h2>
                    <h3>{scentInfo.subtitle}</h3>
                    <p>{scentInfo.notiemain}</p>
                </div>
                <div className="topImg">
                    <img src={categoryInfo.img} alt="디테일 종류별 공통이미지" />
                </div>
                <div className="topTextB">
                    <p></p>
                </div>
            </div>
            <div className="underline"></div>
            <div className="DMNote">
                <div className="detailMN_text">

                </div>
                <div className="triangle">
                    <img src="" alt="" />
                </div>
            </div>
            <div className="underline"></div>
            <div className="DMVideo">
                <div className="vi">{scentInfo.video}</div>
                <div className="videoText">
                    <span>{scentInfo.videotext}</span>
                    <p>{scentInfo.videotextsub}</p>
                </div>
            </div>
            <div className="DMimg">
                {pDetails.img.map((img, idx) => (
                    <img key={idx} src={img} alt="샘플상세이미지" />
                ))}
            </div>
        </div>
    );
};

export default DetailMain;