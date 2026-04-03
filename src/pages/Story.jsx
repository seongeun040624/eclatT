import React from 'react';
import "../style/story.scss";

const Story = () => {
  return (
    <div className="story-wrap">

      {/* BRAND STORY */}
      <section className="brand-story">
        <p className="category">STORY</p>

        <h1><img src="../img/logo.png" alt="story_logo" /></h1>
        <p className="sub">Essence of Light</p>

        <div className="text-box">
          <p className='text-en'>
            ÉCLAT captures the unseen light within, translating it into scent.<br />
            Beyond what the eyes can perceive, each person carries a unique inner light.<br />
            A fragrance is not merely a scent, but a quiet language that awakens memory, stirs emotion, and completes one’s presence.<br />
            Drawn from nature, untouched and pure, ÉCLAT embraces a vegan philosophy— creating scents without harm, preserving the essence of life as it is.<br />
            Each fragrance becomes a reflection of light, gently settling into your moments, and illuminating who you are.
          </p>

          <p className='text-kr'>
            ÉCLAT는 보이지 않는 내면의 빛을 향으로 풀어내는 브랜드입니다.<br />
            눈에 보이는 것 너머에는 사람마다 고유한 빛이 존재합니다.<br />
            향은 단순한 냄새가 아니라, 기억을 깨우고 감정을 움직이며 한 사람의 분위기를 완성하는 또 하나의 언어입니다.<br />
            ÉCLAT는 자연에서 온 순수한 원료를 바탕으로, 동물 실험을 하지 않는 비건 철학을 지키며 있는 그대로의 본질을 향에 담아냅니다.<br />
            각각의 향은 하나의 빛이 되어, 당신의 순간에 스며들고 당신을 더욱 빛나게 합니다.
          </p>

          <p className="highlight">
            “Invisible Light, Sensed by You.”<br />
             보이지 않는 빛을, 당신의 감각으로.
          </p>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="divider"></div>

      {/* FRAGRANCE STORY */}
      <section className="fragrance-story">
        <p className="category">FRAGRANCE STORY</p>

        {/* 1 */}
        <div className="item">
          <div className="img">
            <img className="dawn-img" src="../img/dawn.png" alt="dawn" />
          </div>
          <div className="txt">
            <h3 className='txt-dawn'>Dawn Glow</h3>
            <p className="desc-en">
              “A crystalline scent of morning air,<br />
gently touched by the first light”
            </p>
            <p className='desc-en-sub'>
                Before the world fully awakens, a quiet stillness lingers in the air.<br /> Cool and transparent, the scent of dew-kissed greens unfolds with
the soft glow of sunrise.<br />
Experience the clarity of a new beginning with Dawn Glow.
            </p>
            <p className="desc-kr">
              “첫 빛이 스며든 맑은 공기의 향”
            </p>
            <p className="desc-kr-sub">
              세상이 완전히 깨어나기 전,  고요한 공기가 조용히 머무는 순간.<br />
              이슬을 머금은 풀잎과 차갑고 투명한 공기가 서서히 떠오르는 빛과 함께 퍼져나갑니다.<br />
              새로운 시작의 맑음을 Dawn Glow에서 느껴보세요.
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="item reverse">
          <div className="img">
            <img src="../img/soft.png" alt="soft" />
          </div>
          <div className="txt">
            <h3 className='txt-soft'>Soft Ray</h3>
            <p className="desc-en"> 
                “A tender blend of soft florals and warm light,<br />
                resting gently on the skin”
            </p>
            <p className="desc-en-sub"> 
                As sunlight filters through the window, a quiet warmth fills the space.<br /> Delicate petals and creamy musk linger like a comforting embrace,<br />
bringing a sense of calm to your day.
            </p>
            <p className="desc-kr">
              “부드러운 빛과 함께 머무는 포근한 플로럴 향”
            </p>
            <p className="desc-kr-sub">
              창가로 스며드는 햇살처럼, 따뜻한 온기가 공간을 가득 채웁니다.<br />
              은은한 꽃향기와 부드러운 머스크가 포근하게 감싸 안듯 머물며<br /> 하루를 편안하게 만들어줍니다.
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className="item">
          <div className="img">
            <img src="../img/golden.png" alt="golden" />
          </div>
          <div className="txt">
            <h3 className='txt-golden'>Golden Hour</h3>
            <p className="desc-en">
              “A golden warmth wrapped in amber and wood,<br />
capturing the most beautiful hour of the day”

            </p>
            <p className="desc-en-sub"> 
                As the sun begins to set, everything is bathed in a soft golden glow.<br />
Time slows down, and the air fills with a warm, lingering depth.<br />
Embrace the quiet romance of Golden Hour.
            </p>
            <p className="desc-kr">
              “앰버와 우디로 물든 따뜻한 노을의 향”
            </p>
            <p className="desc-kr-sub">
              해가 기울며 세상이 부드러운 금빛으로 물드는 시간.<br /> 잠시 흐름이 느려진 듯, 따뜻하고 깊은 공기가 잔잔히 퍼집니다.<br /> 가장 아름다운 순간의 여운을 Golden Hour에서 느껴보세요.
            </p>
          </div>
        </div>

        {/* 4 */}
        <div className="item reverse">
          <div className="img">
            <img src="../img/moon.png" alt="moon" />
          </div>
          <div className="txt">
            <h3 className='txt-moon'>Moon Veil</h3>
            <p className="desc-en">
              “A delicate veil of powdery musk,<br />
whispered under the quiet moonlight”
            </p>
            <p className="desc-en-sub">
              When the noise fades into silence, a soft glow settles over the night.<br /> Powdery florals and smooth musk create a calm and introspective atmosphere,<br />like a quiet moment just for you.
            </p>
            <p className="desc-kr">
              “달빛 아래 은은하게 내려앉는 파우더리 머스크 향”
            </p>
            <p className="desc-kr-sub">
              모든 소음이 사라진 밤, 고요한 빛이 부드럽게 내려앉습니다.<br /> 파우더리한 플로럴과 잔잔한 머스크가 차분하고 깊은 분위기를 만들어내며<br />
오롯이 나에게 집중하는 시간을 완성합니다.
            </p>
          </div>
        </div>

        {/* 5 */}
        <div className="item">
          <div className="img">
            <img src="../img/prism.png" alt="prism" />
          </div>
          <div className="txt">
            <h3 className='txt-prism'>Prism Light</h3>
            <p className="desc-en">
              “A vibrant burst of sparkling fruits and florals,<br />
shimmering like scattered light”
            </p>
            <p className="desc-en-sub"> 
As light refracts into a spectrum of colors, a lively energy fills the air.<br /> Bright citrus and playful florals dance together in a radiant harmony,<br />
awakening your senses with every moment.
            </p>
            <p className="desc-kr">
              “빛처럼 흩어지는 다채로운 과일과 플로럴의 향”
            </p>
            <p className="desc-kr-sub">
              빛이 여러 색으로 퍼져나가는 순간처럼, 생동감 있는 에너지가 공간을 채웁니다.<br /> 상큼한 시트러스와 경쾌한 꽃향기가 어우러져 밝고 자유로운 분위기를 만들어냅니다.<br /> 감각을 깨우는 순간을 Prism Light에서 느껴보세요.
            </p>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Story;