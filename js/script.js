// swiperの読み込み
Vue.use(VueAwesomeSwiper);

// VeeValidateの読み込み
Vue.use(VeeValidate, {
    locale: 'ja',
    events: 'input|blur|focus'
});

// バーガーナビ（SNS）
const snsBuger = Vue.component('snsbuger', {
    props: {
        path: {
            type: String,
            default: ''               
        },
        label: {
            type: String,
            default: ''            
        },
        link: {
            type: String,
            default: ''                  
        }
    },
    template: `
        <li class="sns-list-sp">
            <a :href="link" target="_blank">
                <img :src="path" alt="sns">
                {{ label }}
            </a>
        </li>   
    `
});

// sectionのテンプレート(about)
const sectionName = Vue.component('section-name', {
    props: {
        icon_path: {
            type: String,
            default: ''               
        },
        txt_path: {
            type: String,
            default: ''              
        }
    },
    template: `
    <div class="about-section-name-wrapper about-section-wrapper">
        <p class="about-section-name-icon about-section-icon">
            <img :src="icon_path" alt="icon">
        </p>
        <p class="name-txt">
            <img :src="txt_path" alt="my-name">
        </p>   
    </div>    
    `
});

const sectionCarrer = Vue.component('section-carrer', {
    props: {
        icon_path: {
            type: String,
            default: ''               
        },
        carrer_1_period: {
            type: String,
            default: ''               
        },
        carrer_1: {
            type: String,
            default: ''               
        },
        carrer_2_period: {
            type: String,
            default: ''               
        },
        carrer_2: {
            type: String,
            default: ''               
        },                                        
    },
    template: `
    <div class="about-section-carrer-wrapper about-section-wrapper">
        <p class="about-section-carrer-icon about-section-icon">
            <img :src="icon_path" alt="icon">
        </p>
        <div class="carrers-wrapper">
            <div class="carrer-wrapper">
                <p class="carrer-period">{{ carrer_1_period }}</p>
                <p class="carrer-contents">{{ carrer_1 }}</p>
            </div>
            <div class="carrer-wrapper">
                <p class="carrer-period">{{ carrer_2_period }}</p>
                <p class="carrer-contents">{{ carrer_2 }}</p>
            </div>
        </div>
    </div>
    `
});

const sectionSkill = Vue.component('section-skill', {
    props: {
        icon_path: {
            type: String,
            default: ''               
        },
        programming_skill: {
            type: String,
            default: ''            
        },
        tool_skill: {
            type: String,
            default: ''                  
        }        
    },
    template: `
    <div class="about-section-skill-wrapper about-section-wrapper">
        <p class="about-section-skill-icon about-section-icon">
            <img :src="icon_path" alt="icon">
        </p>  
        <div skill-wrapper>
            <p class="programming">{{ programming_skill }}</p>
            <p class="tool">{{ tool_skill }}</p>
        </div>  
    </div>
    `
});

const sectionIntroduction = Vue.component('section-introduction', {
    props: {
        icon_path: {
            type: String,
            default: ''               
        },
        text: {
            type: String,
            default: ''            
        },        
    },
    template: `
    <div class="about-section-introduction-wrapper about-section-wrapper">
        <p class="about-section-section-icon about-section-icon">
            <img :src="icon_path" alt="icon">
        </p>    
        <p class="introduction-txt">
            {{ text }}
        </p>      
    </div>
    `
});

// works/web
const webThumbnail = Vue.component('web-thumbnail', {
    props: {
        web_id: {
            type: String,
            default: ''             
        },
        web_detail_url: {
            type: String,
            default: ''               
        },
        web_pc_path: {
            type: String,
            default: ''               
        },
        web_sp_path: {
            type: String,
            default: ''               
        },
        web_url: {
            type: String,
            default: ''               
        },                
    },
    template: `
    <div class="web-thumbnail" :id="web_id">
        <ul class="web-img-area">
            <li class="web-pc-area">
                <a :href="web_detail_url" target="_blank">
                    <img :src="web_pc_path">
                </a>
            </li>
            <li class="web-sp-area">
                <a :href="web_detail_url" target="_blank">
                    <img :src="web_sp_path" alt="ポートフォリオの画像">
                </a>
            </li>            
        </ul>
        <p class="web-url-area">
            <span>URL:</span>
            <a :href="web_url" target="_blank">{{ web_url }}</a>
        </p>
    </div>
    `
});

// works/bp&fashion
const worksThumbnail = Vue.component('works-thumbnail', {
    props: {
        item_id: {
            type: String,
            default: ''              
        },
        item_path: {
            type: String,
            default: ''               
        },
        item_name: {
            type: String,
            default: ''                 
        },
        item_detail_url: {
            type: String,
            default: ''                     
        }
    },    
    template: `
    <div class="item-thumbnail" :id="item_id">
        <ul class="item-contents">
            <li class="item-img">
                <img :src="item_path" alt="ポートフォリオの画像">
            </li>
            <li class="item-name">{{ item_name }}</li>
            <li class="item-detail-url">
                <a :href="item_detail_url">詳しく見る→</a>
            </li>            
        </ul>
    </div>
    `
});

// contact


const app = new Vue({
    el: '#app',
    components: {
        'snsbuger' : snsBuger,
        'section-name' : sectionName,
        'section-carrer' : sectionCarrer,
        'section-skill' : sectionSkill,
        'section-introduction' : sectionIntroduction,
        'web-thumbnail' : webThumbnail,
        'works-thumbnail' : worksThumbnail,
    },
    data() {
        return{
            // logoのパス
            logo_path: './img/logo/logo.svg',

            // headerのリンク
            header_links: [{
                link: 'ABOUT'
            },{
                link: 'WORKS'
            },{
                link: 'CONTACT'
            }],

            
            page_active: 0,

            // ハンバーガー
            bugerisActive: false,

            sns_links: [{
                path: './img/about/icon/instagram 1.svg',
                label: 'instagram',
                link: 'https://www.instagram.com/zonocan/?hl=ja'
            },{
                path: './img/about/icon/twitter 1.svg',
                label: 'twitter',
                link: 'https://mobile.twitter.com/miharboy'
            }],

            // sliderの画像
            slider_img_lists: [{
                path: './img/about/slider/slider-img-1.jpg'
            },{
                path: './img/about/slider/slider-img-2.jpg'
            }],
        
            // スライダーのカスタム
            swiperOptions: {
                loop: true, //スライドをループする
                slidesPerView: 1, //1画面あたりの表示枚数
                spaceBetween: 20, //スライド同士の間隔
                effect: 'fade',
                autoplay: {
                delay: 8000 //自動でスライドする。間隔はミリ秒で指定。
                }
            },

            // 日付・時刻
            time: '',

            date: '',

            week: ['(日)', '(月)', '(水)', '(木)', '(金)', '(土)'],

            // about/section
            // 名前
            section_name: [{
                icon_path: './img/about/icon/icon-1.png',
                txt_path: './img/about/icon/yutaro-miyazono.svg'
            }],

            // 経歴
            section_carrer: [{
                icon_path: './img/about/icon/icon-2.png',
                carrer_1_period: '2022年1月 ~ 2022年5月 ',
                carrer_1: '社内システムの改修',
                carrer_2_period: '2022年7月 ~ 2022年12月 ',
                carrer_2: '求人サイトの保守・運用'
            }],

            // スキル
            section_skill: [{
                icon_path: './img/about/icon/icon-3.png',
                programming_skill: 'HTML CSS javascript php',
                tool_skill: 'Photoshop illustlater Figma'
            }],

            // 自己紹介
            section_introduction: [{
                icon_path: './img/about/icon/icon-4.png',
                text: `初めまして。宮園雄太郎と申します。
                趣味は将棋、ボードスポーツ、洋服作り、旅行など多岐に渡ります。
                私自身、IT業界の経験としましては1年間SESとして稼働して参りました。
                しかし、どうしてもデザインに関わりたいと思い、現在webデザイナーとしての道を
                模索中です。まだまだ、経験不足の点はたくさんあるかと思いますが何卒よろしくお願い致します。
                `
            }],

            // works

            // works/web
            web_temp_thumbnail: [{
                web_id: 'web_id_1',
                web_detail_url: 'https://zonocan.github.io/yours_vue_cdn/',
                web_pc_path: './img/works/web-pc-img/web-pc-img-1.png',
                web_sp_path: './img/works/web-sp-img/web-sp-sp-1.png',
                web_url: 'https://zonocan.github.io/yours_vue_cdn/',    
            },{
                web_id: 'web_id_2',
                web_detail_url: 'https://zonocan.github.io/anniversarry/',
                web_pc_path: './img/works/web-pc-img/web-pc-img-2.png',
                web_sp_path: './img/works/web-sp-img/web-sp-sp-2.png',
                web_url: 'https://zonocan.github.io/anniversarry/',  
            }],

            // works/bunner/poster
            bp_temp_thumbnail: [{
                bp_id: 'bp_id_1',
                bp_path: './img/works/BP/BP-1.jpeg',
                bp_name: 'ドコモの学割',
                bp_detail_url: '',
            },{
                bp_id: 'bp_id_2',
                bp_path: './img/works/BP/BP-2.jpeg',
                bp_name: 'SEの割引',
                bp_detail_url: '',
            },{
                bp_id: 'bp_id_3',
                bp_path: './img/works/BP/BP-3.jpg',
                bp_name: '初売りセール',
                bp_detail_url: '',
            },{
                bp_id: 'bp_id_4',
                bp_path: './img/works/BP/BP-4.jpg',
                bp_name: 'ローソンフレッシュ',
                bp_detail_url: '',
            },{
                bp_id: 'bp_id_5',
                bp_path: './img/works/BP/BP-5.png',
                bp_name: 'サマーセール1',
                bp_detail_url: '',
            },{
                bp_id: 'bp_id_6',
                bp_path: './img/works/BP/BP-6.jpg',
                bp_name: 'サマーセール2',
                bp_detail_url: '',
            }],

            // works/fashion
            fashion_temp_thumbnail: [{
                fashion_id: 'fashion_id_1',
                fashion_path: './img/works/fashion/fashion-1.jpg',
                fashion_name: 'デニムテーラード',
                fashion_detail_url: ''
            },{
                fashion_id: 'fashion_id_2',
                fashion_path: './img/works/fashion/fashion-2.jpg',
                fashion_name: '2wayコート',
                fashion_detail_url: ''
            },{
                fashion_id: 'fashion_id_3',
                fashion_path: './img/works/fashion/fashion-3.jpg',
                fashion_name: 'ステージ衣装',
                fashion_detail_url: ''
            },{
                fashion_id: 'fashion_id_4',
                fashion_path: './img/works/fashion/fashion-4.jpg',
                fashion_name: 'デニムシャツ',
                fashion_detail_url: ''
            }],
                

            // works/nav(sp)
            works_links_sp: [{
                link: '#web',
                icon_path: './img/works/icon/icon-1.svg',
            },{
                link: '#bunner-poster',  
                icon_path: './img/works/icon/icon-2.svg',
            },{
                link: '#fashion' ,
                icon_path: './img/works/icon/icon-3.svg',               
            }],

            // works/nav(pc)
            works_links_pc: [{
                link: '#web',
                icon_path: './img/works/icon/icon-1-white.svg',
                label: 'web',
            },{
                link: '#bunner-poster',  
                icon_path: './img/works/icon/icon-2-white.svg',
                label: 'bunner-poster',
            },{
                link: '#fashion' ,
                icon_path: './img/works/icon/icon-3-white.svg',    
                label: 'fashion',           
            }],

            nav_bar_flag: false,

            // contact
            submitted: false,


        };       
    },
    methods: {

        // バーガーボタン
        bugerBtn() {
            this.bugerisActive = !this.bugerisActive;
        },

        // ヘッダーによる切り替え
        pageActivate(link) {
            this.page_active = link;
        },

        // 日付
        updateTime() {
            let currentDate = new Date();
            this.time = currentDate.getHours() + ':' + currentDate.getMinutes();
            this.date = currentDate.getFullYear() + '年' + (currentDate.getMonth()+1) + '月' + currentDate.getDate() + '日' + this.week[currentDate.getDay()];
        }, 

        // works ナビ
        navMouseOverAction() {
            this.nav_bar_flag = true;
        },

        navDisplayNone() {
            this.nav_bar_flag = false;
        },

        // contact
        formCompleteModal() {
            this.submitted = !this.submitted;
        }

    },
    mounted(){
        setInterval(this.updateTime,1000);

        // iframeの無効
        var iframe = document.createElement("iframe");
        iframe.setAttribute('name','hidden_iframe');
        iframe.setAttribute('style','display: none');
        document.body.appendChild(iframe);

    },


});