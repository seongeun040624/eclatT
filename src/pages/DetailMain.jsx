import { useParams } from "react-router-dom";
import { productsDetails } from "../data/productsDetails";
import { category } from "../data/category";
import { scentsDetails } from "../data/scentsDetails";

import video from '/img/Project_2.mp4';

import '../style/detailmain.scss';

const DetailMain = () => {
        const { id } = useParams(); 
        //const id = 1; //테스트용 끝나면 위에꺼 켜야함
        
    
        // 현재 상품 찾기
        const pDetails = productsDetails.find(
            (item) => item.id === Number(id)
        );
        if (!pDetails) return <div>로딩중...</div>;
    
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
                    <h4>“보이지 않는 빛이, 향으로 스며드는 순간”</h4>
                </div>
                <div className="topImg">
                    <img src={categoryInfo.img} alt="디테일 종류별 공통이미지" />
                </div>
                <div className="topTextB">
                    <h5>
                        아직 말로 설명되지 않은 감정처럼, 빛은 조용히 스며들어 우리의 순간을 채웁니다. <br />
                        ÉCLAT는 그 보이지 않는 빛을 향으로 담아,<br />
                        당신의 하루와 기억 속에 은은하게 머무르게 합니다.
                    </h5>
                </div>
            </div>
            <div className="underline"></div>
            <div className="DMNote">
                <div className="detailMN_text">
                    <div>
                        <h5>TOP</h5>
                        <p>{scentInfo.notes.top}</p>
                    </div>
                    <div>
                        <h5>MIDDLE</h5>
                        <p>{scentInfo.notes.middle}</p>
                    </div>
                    <div>
                        <h5>BASE</h5>
                        <p>{scentInfo.notes.base}</p>
                    </div>
                </div>
                <div className="triangle">
                    <img src="/img/noteP.png" alt="향피라미드이미지" />
                </div>
            </div>
            <div className="underline"></div>
            <div className="DMVideo">
                <div className="vi">
                    <video autoPlay muted loop playsInline>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div className="videoText">
                    <span>{scentInfo.videotext}</span>
                    <div>
                        {scentInfo.videotextsub
                            .replace("순간처럼,", "순간처럼.\n")
                            .match(/[^.]+\.?/g)
                            ?.map((text, i) => (
                            <p key={i}>
                                {text.trim()}
                            </p>
                        ))}
                    </div>
                    
                </div>
            </div>
            <div className="underline"></div>
            <div className="DMimg">
                {pDetails.img.map((img, idx) => (
                    <img key={idx} src={img} alt="샘플상세이미지" />
                ))}
            </div>
        </div>
    );
};

export default DetailMain;