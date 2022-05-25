import cameo_img_mob_before from '../img/examples11mob@2x.jpg';
import cameo_img_mob_after from '../img/examples12mob@2x.jpg';
import story_img_mob_before from '../img/examples21mob@2x.jpg';
import story_img_mob_after from '../img/examples22mob@2x.jpg';
import play_img_mob_before from '../img/examples31mob@2x.jpg';
import play_img_mob_after from '../img/examples32mob@2x.jpg';

import cameo_img_before from '../img/examples11@2x.jpg';
import cameo_img_after from '../img/examples12@2x.jpg';
import story_img_before from '../img/examples21@2x.jpg';
import story_img_after from '../img/examples22@2x.jpg';
import play_img_before from '../img/examples31@2x.jpg';
import play_img_after from '../img/examples32@2x.jpg';
import {cameoLogo, playLogo, storyLogo} from "../img/svgInlineImg";

const beforeType = `Проект <br class="brMobile">в концепции`;
const afterType = 'Готовый <br class="brMobile">проект';
const y18 = 2018;
const y21 = 2021;
const cameo = 'cameo';
const story = 'story';
const play = 'play';

export const exampleMainTitle = `Примеры реализованных<br class="brMobile"> проектов`;


export const exampleProjectsMobile = [
    {
        img: cameo_img_mob_before,
        logo: cameoLogo,
        type: beforeType,
        year: y18,
        code: cameo,
        isLogo: true,
        isPromo: false,
    },
    {
        img: cameo_img_mob_after,
        logo: cameoLogo,
        type: afterType,
        year: y21,
        code: cameo,
        isLogo: false,
        isPromo: true,
    },
    {
        img: story_img_mob_before,
        logo: storyLogo,
        type: beforeType,
        year: y18,
        code: story,
        isLogo: true,
        isPromo: false,
    },
    {
        img: story_img_mob_after,
        logo: storyLogo,
        type: afterType,
        year: y21,
        code: story,
        isLogo: false,
        isPromo: true,
    },
    {
        img: play_img_mob_before,
        logo: playLogo,
        type: beforeType,
        year: y18,
        code: play,
        isLogo: true,
        isPromo: false,
    },
    {
        img: play_img_mob_after,
        logo: playLogo,
        type: afterType,
        year: y21,
        code: play,
        isLogo: false,
        isPromo: true,
    },
];

export const exampleProjectsDesktop = [
    {
        img: [cameo_img_before, cameo_img_after],
        logo: cameoLogo,
        type: [beforeType, afterType],
        year: [y18, y21],
        code: cameo,
    },
    {
        img: [story_img_before, story_img_after],
        logo: storyLogo,
        type: [beforeType, afterType],
        year: [y18, y21],
        code: story,
    },
    {
        img: [play_img_before, play_img_after],
        logo: playLogo,
        type: [beforeType, afterType],
        year: [y18, y21],
        code: play,
    },
];