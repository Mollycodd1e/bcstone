import {S_Tags} from "../../sections/s_Tags";
import {S_Header} from "../../sections/s_Header";
import {S_Video} from "../../sections/s_Video";
import {S_Text} from "../../sections/s_Text";
import {S_Slider} from "../../sections/s_Slider";
import {S_Quote} from "../../sections/s_Quote";
import {S_Picture} from "../../sections/s_Picture";
import {S_MoreInfoBtn} from "../../sections/s_MoreInfoBtn";
import {S_Form} from "../../sections/s_Form";
import {S_ParagraphHeader} from "../../sections/s_ParagraphHeader";

export const Cc_ComponentGenerator = ({pageData}) => {

    const sortedData = pageData && pageData.length !==0 && pageData.sort(function (a, b) {
        if (a.order > b.order) {
            return 1;
        }
        if (a.order < b.order) {
            return -1;
        }
        return 0;
    });

    const componentCreator = (elPosition, sortedArr) => {
        return (
            {
                "hashtags": <S_Tags
                    key={elPosition}
                    hashtagList={sortedArr[elPosition].content.list}
                />,
                "topic": <S_Header
                    key={elPosition}
                    header={sortedArr[elPosition].content.title}
                    text={sortedArr[elPosition].content.description}
                    data={sortedArr[elPosition].content.date}
                />,
                "video": <S_Video
                    key={elPosition}
                    url={sortedArr[elPosition].content.url}
                    description={sortedArr[elPosition].content.description}
                />,
                "text": <S_Text
                    key={elPosition}
                    text={sortedArr[elPosition].content.text}
                />,
                "slider": <S_Slider
                    key={elPosition}
                    items={sortedArr[elPosition].content.gallery}
                    description={sortedArr[elPosition].content.description}
                />,
                "quote": <S_Quote
                    key={elPosition}
                    photo={sortedArr[elPosition].content.photo && sortedArr[elPosition].content.photo.src}
                    name={sortedArr[elPosition].content.name}
                    description={sortedArr[elPosition].content.description}
                    text={sortedArr[elPosition].content.text}
                />,
                "picture": <S_Picture
                    key={elPosition}
                    src={sortedArr[elPosition].content.image && sortedArr[elPosition].content.image.src}
                    description={sortedArr[elPosition].content.description}
                />,
                "button": <S_MoreInfoBtn
                    key={elPosition}
                    url={sortedArr[elPosition].content.url}
                    text={sortedArr[elPosition].content.text}
                />,
                "form": <S_Form
                    key={elPosition}
                    header={sortedArr[elPosition].content.title}
                    description={sortedArr[elPosition].content.description}
                    ready={sortedArr[elPosition].content.success}
                />,
                "paragraph_header": <S_ParagraphHeader
                    key={elPosition}
                    text={sortedArr[elPosition].content.text}
                />,
                // "separator": <S_Seperator />
            }
        )
    }

    return (
      <>
          {pageData ?
              sortedData.map((el, i, arr) => {
                  if (el.isShown) {
                      return componentCreator(i, arr)[el.type]
                  }
                  return null
              })
              : null
          }
      </>
    )
}