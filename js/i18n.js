/* =========================================================
   i18n.js — Language switcher (ja / en / zh / ko)
   Usage: add data-i18n="key" to any element (innerHTML is replaced),
   and include this script at the end of <body>.
========================================================= */
(function () {
    'use strict';

    var STORAGE_KEY = 'uogashi-lang';
    var DEFAULT_LANG = 'ja';

    var LANGS = {
        ja: { label: '日本語', short: 'JA', html: 'ja', map: 'ja' },
        en: { label: 'English', short: 'EN', html: 'en', map: 'en' },
        zh: { label: '中文', short: '中文', html: 'zh-CN', map: 'zh-CN' },
        ko: { label: '한국어', short: 'KO', html: 'ko', map: 'ko' }
    };

    var T = {
        ja: {
            'meta.title': '寿司 博多魚がし | 博多1番街',
            'nav.home': 'ホーム',
            'nav.menu': 'メニュー',
            'nav.about': '私たちについて',
            'nav.access': 'アクセス',
            'nav.reservation': '予約する',
            'lang.label': '言語を選択',

            'hero.sub': 'SUSHI RESTAURANT',
            'hero.desc': '毎朝、福岡市魚市場から直送。<br>自慢の厳選ネタをお手軽価格でお楽しみください。',
            'hero.cta': 'ご予約はこちら',
            'hero.scroll': 'SCROLL',

            'about.title': '魚市場直送の味を、<br>お手軽価格で。',
            'about.p1': '寿司 博多魚がしでは、新鮮な玄海の幸をお子様から大人の方まで存分に堪能していただけます。',
            'about.p2': '毎朝“福岡市魚市場”から魚貝類を一括仕入れ。旬のネタ・素材にこだわって、職人が一つ一つ手で握ります。',
            'about.p3': 'メニューは約70種類。お値段はお手軽に、味や鮮度はもちろん一級品。ぜひご賞味ください。',
            'about.link': 'メニューを見る',

            'point.label': 'OUR PROMISE',
            'point.title': '私たちのこだわり',
            'point1.catch': '仕入れるもの<br>選び抜くもの',
            'point1.title': '市場直送',
            'point1.text': '毎朝、福岡市魚市場から魚貝類を一括仕入れ。旬の鮮度をそのままお届けします。',
            'point2.catch': '握るもの<br>伝えるもの',
            'point2.title': '職人の手握り',
            'point2.text': '一貫一貫、職人が心を込めて手で握ります。素材の味を最大限に引き出します。',
            'point3.catch': '選べるもの<br>楽しめるもの',
            'point3.title': '約70種類',
            'point3.text': 'お子様から大人まで。お手軽な価格で、豊富なメニューをお楽しみいただけます。',

            'menu.label': 'RECOMMENDED MENU',
            'menu.title': 'おすすめメニュー',
            'menu1.name': 'まぐろづくし',
            'menu1.desc': '大とろ、中とろ、まぐろを食べ比べ。',
            'menu2.name': 'どんたくセット',
            'menu2.desc': '大トロやイクラなど7貫と茶わん蒸しのお得なセット。',
            'menu3.name': '刺身5点盛り',
            'menu3.desc': '旬の新鮮なお刺身を5種盛り合わせました。',
            'menu.cta': 'すべてのメニューを見る',

            'rsv.label': 'ONLINE RESERVATION',
            'rsv.title': '魚市場直送の味を<br>博多魚がしで。',
            'rsv.text': 'ご希望の日付・時間・人数から<br>簡単にお席をご予約いただけます。',
            'rsv.cta': '今すぐ予約する',

            'access.title': 'アクセス',
            'access.name': '寿司 博多魚がし',
            'access.address': '福岡県福岡市博多区博多駅中央街1-1<br>JR博多駅 B1F 博多1番街内',
            'access.tel': 'TEL',
            'access.hours.label': '営業時間',
            'access.hours': '11:00 ～ 21:30（L.O. 21:00）',
            'access.seats.label': '席数',
            'access.seats': '24席（終日禁煙）',
            'access.mapLink': 'Googleマップで開く',
            'access.mapTitle': '寿司 博多魚がしの地図',

            'footer.name': '寿司 博多魚がし',
            'footer.home': 'ホーム',
            'footer.menu': 'メニュー',
            'footer.reservation': '予約',
            'meta.title.contact': 'お問い合わせ | 寿司 博多魚がし',
            'footer.contactLink': 'お問い合わせ',
            'footer.vertical': 'ーお問い合わせー',
            'contact.title': 'お問い合わせ',
            'contact.lead': 'ご予約・ご質問・団体でのご利用など、お気軽にお問い合わせください。<br>お電話は営業時間内に承っております。',
            'contact.address.label': '住所',
            'contact.reserve.text': 'オンラインでのご予約も承っております。',
            'contact.back': 'ホームへ戻る',
            'meta.title.reservation': "予約 | 寿司 博多魚がし",
            'res.title': "ご予約",
            'res.lead': "ご希望の日時・人数・テーブルを選び、お客様情報をご入力ください。",
            'res.gallery.title': "お店とお料理のご紹介",
            'res.cap.shop': "博多1番街の店舗",
            'res.step1': "ご予約情報",
            'res.step2': "メニュー",
            'res.step3': "確認",
            'res.step4': "完了",
            'res.sec.datetime': "ご来店日時",
            'res.sec.guests': "ご利用人数",
            'res.sec.contact': "お客様情報",
            'res.sec.table': "テーブルを選択",
            'res.date': "ご来店日",
            'res.time': "ご来店時間",
            'res.time.ph': "時間を選択してください",
            'res.required': "必須",
            'res.name': "お名前",
            'res.name.ph': "例）博多 太郎",
            'res.phone': "電話番号",
            'res.phone.ph': "例）090-1234-5678",
            'res.phone.hint': "ご予約確認のご連絡にのみ使用します。",
            'res.guests.fmt': "{n}名",
            'res.table.msg': "ご利用人数に合わせてご希望のテーブルを選択してください。",
            'res.seats.fmt': "{n}名席",
            'res.status.free': "空席",
            'res.status.full': "予約済み",
            'res.status.over': "人数超過",
            'res.table.selected': "選択したテーブル：",
            'res.next': "メニュー選択へ進む",
            'res.notice': "※ ご予約時間から15分以上遅れる場合は、お電話にてご連絡ください。<br>※ ご予約内容は次の画面でご確認いただけます。<br>※ 店内は終日禁煙です。",
            'res.err.date': "ご来店日を選択してください。",
            'res.err.time': "ご来店時間を選択してください。",
            'res.err.name': "お名前を入力してください。",
            'res.err.phone': "電話番号を正しく入力してください。",
            'res.err.table': "テーブルを選択してください。",
            'res.side.title': "お店のご案内"
        },

        en: {
            'meta.title': 'Sushi Hakata Uogashi | Hakata 1bangai',
            'nav.home': 'Home',
            'nav.menu': 'Menu',
            'nav.about': 'About Us',
            'nav.access': 'Access',
            'nav.reservation': 'Reserve',
            'lang.label': 'Select language',

            'hero.sub': 'SUSHI RESTAURANT',
            'hero.desc': 'Delivered straight from the Fukuoka fish market every morning.<br>Enjoy our carefully selected seafood at friendly prices.',
            'hero.cta': 'Make a Reservation',
            'hero.scroll': 'SCROLL',

            'about.title': 'Market-fresh flavor,<br>at honest prices.',
            'about.p1': 'At Sushi Hakata Uogashi, guests of all ages can fully enjoy the fresh bounty of the Genkai Sea.',
            'about.p2': 'Every morning we buy our seafood in bulk from the Fukuoka City Fish Market. Our chefs shape each piece by hand, using only seasonal ingredients.',
            'about.p3': 'Around 70 items on the menu. Easy on the wallet, with top-class taste and freshness. Please enjoy.',
            'about.link': 'View the menu',

            'point.label': 'OUR PROMISE',
            'point.title': 'What we care about',
            'point1.catch': 'What we source<br>What we choose',
            'point1.title': 'Direct from the market',
            'point1.text': 'Every morning we buy our seafood in bulk from the Fukuoka fish market, delivering seasonal freshness as it is.',
            'point2.catch': 'What we shape<br>What we share',
            'point2.title': 'Hand-shaped by chefs',
            'point2.text': 'Each piece is shaped by hand with care, bringing out the full flavor of the ingredients.',
            'point3.catch': 'What you choose<br>What you enjoy',
            'point3.title': 'About 70 items',
            'point3.text': 'For children and adults alike. A wide menu at friendly prices.',

            'menu.label': 'RECOMMENDED MENU',
            'menu.title': 'Recommended Menu',
            'menu1.name': 'Maguro Zukushi (Tuna Sampler)',
            'menu1.desc': 'Compare otoro, chutoro and lean tuna side by side.',
            'menu2.name': 'Dontaku Set',
            'menu2.desc': 'A great-value set of 7 pieces including otoro and ikura, plus chawanmushi.',
            'menu3.name': 'Sashimi Platter (5 kinds)',
            'menu3.desc': 'Five kinds of fresh seasonal sashimi.',
            'menu.cta': 'View Full Menu',

            'rsv.label': 'ONLINE RESERVATION',
            'rsv.title': 'Market-direct flavor<br>at Hakata Uogashi.',
            'rsv.text': 'Choose your date, time and party size<br>and reserve a seat with ease.',
            'rsv.cta': 'Reserve Now',

            'access.title': 'Access',
            'access.name': 'Sushi Hakata Uogashi',
            'access.address': '1-1 Hakataekichuogai, Hakata-ku, Fukuoka<br>JR Hakata Station B1F, inside Hakata 1bangai',
            'access.tel': 'TEL',
            'access.hours.label': 'Hours',
            'access.hours': '11:00 – 21:30 (Last order 21:00)',
            'access.seats.label': 'Seats',
            'access.seats': '24 seats (non-smoking all day)',
            'access.mapLink': 'Open in Google Maps',
            'access.mapTitle': 'Map of Sushi Hakata Uogashi',

            'footer.name': 'Sushi Hakata Uogashi',
            'footer.home': 'Home',
            'footer.menu': 'Menu',
            'footer.reservation': 'Reserve',
            'meta.title.contact': 'Contact | Sushi Hakata Uogashi',
            'footer.contactLink': 'Contact',
            'footer.vertical': '—CONTACT—',
            'contact.title': 'Contact Us',
            'contact.lead': 'For reservations, questions or group bookings, please feel free to get in touch.<br>Phone calls are taken during opening hours.',
            'contact.address.label': 'Address',
            'contact.reserve.text': 'You can also reserve online.',
            'contact.back': 'Back to Home',
            'meta.title.reservation': "Reservation | Sushi Hakata Uogashi",
            'res.title': "Reservation",
            'res.lead': "Choose your date, time, party size and table, then enter your contact details.",
            'res.gallery.title': "The Shop & Our Sushi",
            'res.cap.shop': "Our shop in Hakata 1bangai",
            'res.step1': "Details",
            'res.step2': "Menu",
            'res.step3': "Confirm",
            'res.step4': "Done",
            'res.sec.datetime': "Date & Time",
            'res.sec.guests': "Party Size",
            'res.sec.contact': "Your Details",
            'res.sec.table': "Choose a Table",
            'res.date': "Date",
            'res.time': "Time",
            'res.time.ph': "Select a time",
            'res.required': "Required",
            'res.name': "Name",
            'res.name.ph': "e.g. Taro Hakata",
            'res.phone': "Phone number",
            'res.phone.ph': "e.g. 090-1234-5678",
            'res.phone.hint': "Used only to contact you about your reservation.",
            'res.guests.fmt': "Party of {n}",
            'res.table.msg': "Please choose a table that fits your party size.",
            'res.seats.fmt': "Seats {n}",
            'res.status.free': "Available",
            'res.status.full': "Reserved",
            'res.status.over': "Too small",
            'res.table.selected': "Selected table: ",
            'res.next': "Continue to menu",
            'res.notice': "If you will be more than 15 minutes late, please call us.<br>You can review your reservation on the next screen.<br>The restaurant is non-smoking all day.",
            'res.err.date': "Please select a date.",
            'res.err.time': "Please select a time.",
            'res.err.name': "Please enter your name.",
            'res.err.phone': "Please enter a valid phone number.",
            'res.err.table': "Please select a table.",
            'res.side.title': "Shop Information"
        },

        zh: {
            'meta.title': '寿司 博多鱼がし | 博多1番街',
            'nav.home': '首页',
            'nav.menu': '菜单',
            'nav.about': '关于我们',
            'nav.access': '交通位置',
            'nav.reservation': '预约',
            'lang.label': '选择语言',

            'hero.sub': 'SUSHI RESTAURANT',
            'hero.desc': '每天清晨从福冈市鱼市场直送。<br>以实惠的价格，品尝我们精挑细选的鲜美食材。',
            'hero.cta': '立即预约',
            'hero.scroll': 'SCROLL',

            'about.title': '鱼市场直送的美味，<br>实惠的价格。',
            'about.p1': '在寿司 博多鱼がし，无论大人小孩，都能尽情享用玄海的新鲜海味。',
            'about.p2': '每天清晨从“福冈市鱼市场”统一采购海鲜。坚持使用当季食材，由师傅一贯一贯亲手捏制。',
            'about.p3': '菜单约有70种。价格实惠，味道与新鲜度均属一流。敬请品尝。',
            'about.link': '查看菜单',

            'point.label': 'OUR PROMISE',
            'point.title': '我们的坚持',
            'point1.catch': '采购的食材<br>精挑细选',
            'point1.title': '市场直送',
            'point1.text': '每天清晨从福冈市鱼市场统一采购海鲜，原汁原味呈现当季鲜度。',
            'point2.catch': '亲手捏制<br>用心传递',
            'point2.title': '师傅手捏',
            'point2.text': '每一贯寿司都由师傅用心亲手捏制，充分激发食材本味。',
            'point3.catch': '自由选择<br>尽情享受',
            'point3.title': '约70种',
            'point3.text': '老少皆宜。以实惠的价格，享受丰富多样的菜品。',

            'menu.label': 'RECOMMENDED MENU',
            'menu.title': '推荐菜品',
            'menu1.name': '金枪鱼拼盘',
            'menu1.desc': '大腹、中腹、赤身，一次品尝比较。',
            'menu2.name': '顿塔库套餐',
            'menu2.desc': '含大腹、鲑鱼子等7贯寿司，另附茶碗蒸的超值套餐。',
            'menu3.name': '5种刺身拼盘',
            'menu3.desc': '精选5种当季新鲜刺身拼盘。',
            'menu.cta': '查看全部菜单',

            'rsv.label': 'ONLINE RESERVATION',
            'rsv.title': '鱼市场直送的美味<br>尽在博多鱼がし。',
            'rsv.text': '选择日期、时间和人数<br>即可轻松预订座位。',
            'rsv.cta': '立即预约',

            'access.title': '交通位置',
            'access.name': '寿司 博多鱼がし',
            'access.address': '福冈县福冈市博多区博多站中央街1-1<br>JR博多站 B1F 博多1番街内',
            'access.tel': '电话',
            'access.hours.label': '营业时间',
            'access.hours': '11:00 ～ 21:30（最后点餐 21:00）',
            'access.seats.label': '座位数',
            'access.seats': '24席（全天禁烟）',
            'access.mapLink': '在Google地图中打开',
            'access.mapTitle': '寿司 博多鱼がし 地图',

            'footer.name': '寿司 博多鱼がし',
            'footer.home': '首页',
            'footer.menu': '菜单',
            'footer.reservation': '预约',
            'meta.title.contact': '联系我们 | 寿司 博多鱼がし',
            'footer.contactLink': '联系我们',
            'footer.vertical': '—联系我们—',
            'contact.title': '联系我们',
            'contact.lead': '预约、咨询或团体用餐等，欢迎随时与我们联系。<br>电话咨询请在营业时间内拨打。',
            'contact.address.label': '地址',
            'contact.reserve.text': '也可以在线预约。',
            'contact.back': '返回首页',
            'meta.title.reservation': "预约 | 寿司 博多鱼がし",
            'res.title': "在线预约",
            'res.lead': "请选择日期、时间、人数和座位，并填写您的联系信息。",
            'res.gallery.title': "店铺与美味介绍",
            'res.cap.shop': "位于博多1番街的店铺",
            'res.step1': "预约信息",
            'res.step2': "菜单",
            'res.step3': "确认",
            'res.step4': "完成",
            'res.sec.datetime': "到店日期与时间",
            'res.sec.guests': "用餐人数",
            'res.sec.contact': "顾客信息",
            'res.sec.table': "选择座位",
            'res.date': "到店日期",
            'res.time': "到店时间",
            'res.time.ph': "请选择时间",
            'res.required': "必填",
            'res.name': "姓名",
            'res.name.ph': "例）博多 太郎",
            'res.phone': "电话号码",
            'res.phone.ph': "例）090-1234-5678",
            'res.phone.hint': "仅用于预约确认联系。",
            'res.guests.fmt': "{n}位",
            'res.table.msg': "请根据用餐人数选择合适的座位。",
            'res.seats.fmt': "{n}人座",
            'res.status.free': "有空位",
            'res.status.full': "已预约",
            'res.status.over': "人数超出",
            'res.table.selected': "已选座位：",
            'res.next': "前往选择菜品",
            'res.notice': "如迟到超过15分钟，请致电联系。<br>预约内容将在下一页面确认。<br>店内全天禁烟。",
            'res.err.date': "请选择到店日期。",
            'res.err.time': "请选择到店时间。",
            'res.err.name': "请输入姓名。",
            'res.err.phone': "请输入正确的电话号码。",
            'res.err.table': "请选择座位。",
            'res.side.title': "店铺信息"
        },

        ko: {
            'meta.title': '스시 하카타 우오가시 | 하카타 1번가',
            'nav.home': '홈',
            'nav.menu': '메뉴',
            'nav.about': '소개',
            'nav.access': '오시는 길',
            'nav.reservation': '예약하기',
            'lang.label': '언어 선택',

            'hero.sub': 'SUSHI RESTAURANT',
            'hero.desc': '매일 아침 후쿠오카시 어시장에서 직송.<br>엄선한 신선한 재료를 합리적인 가격으로 즐기세요.',
            'hero.cta': '예약하기',
            'hero.scroll': 'SCROLL',

            'about.title': '어시장 직송의 맛을,<br>합리적인 가격으로.',
            'about.p1': '스시 하카타 우오가시에서는 겐카이의 신선한 해산물을 어린이부터 어른까지 마음껏 즐기실 수 있습니다.',
            'about.p2': '매일 아침 “후쿠오카시 어시장”에서 해산물을 한꺼번에 매입합니다. 제철 재료만 고집하며, 장인이 한 점 한 점 손으로 쥐어 드립니다.',
            'about.p3': '메뉴는 약 70종. 가격은 부담 없이, 맛과 신선도는 최고급입니다. 부디 맛보세요.',
            'about.link': '메뉴 보기',

            'point.label': 'OUR PROMISE',
            'point.title': '우리의 고집',
            'point1.catch': '들여오는 것<br>골라내는 것',
            'point1.title': '시장 직송',
            'point1.text': '매일 아침 후쿠오카시 어시장에서 해산물을 한꺼번에 매입해 제철의 신선함 그대로 전해 드립니다.',
            'point2.catch': '쥐는 것<br>전하는 것',
            'point2.title': '장인의 손초밥',
            'point2.text': '한 점 한 점 장인이 정성껏 손으로 쥐어 재료 본연의 맛을 최대한 끌어냅니다.',
            'point3.catch': '고를 수 있는 것<br>즐길 수 있는 것',
            'point3.title': '약 70종',
            'point3.text': '어린이부터 어른까지. 합리적인 가격으로 다양한 메뉴를 즐기실 수 있습니다.',

            'menu.label': 'RECOMMENDED MENU',
            'menu.title': '추천 메뉴',
            'menu1.name': '참치 모둠',
            'menu1.desc': '대뱃살, 중뱃살, 붉은살 참치를 한자리에서 비교해 보세요.',
            'menu2.name': '돈타쿠 세트',
            'menu2.desc': '대뱃살·연어알 등 초밥 7점과 차완무시가 포함된 알뜰 세트.',
            'menu3.name': '회 5종 모둠',
            'menu3.desc': '제철의 신선한 회를 5종 모았습니다.',
            'menu.cta': '전체 메뉴 보기',

            'rsv.label': 'ONLINE RESERVATION',
            'rsv.title': '어시장 직송의 맛을<br>하카타 우오가시에서.',
            'rsv.text': '원하시는 날짜·시간·인원을 선택해<br>간편하게 좌석을 예약하세요.',
            'rsv.cta': '지금 예약하기',

            'access.title': '오시는 길',
            'access.name': '스시 하카타 우오가시',
            'access.address': '후쿠오카현 후쿠오카시 하카타구 하카타에키추오가이 1-1<br>JR 하카타역 B1F 하카타 1번가 내',
            'access.tel': 'TEL',
            'access.hours.label': '영업시간',
            'access.hours': '11:00 ~ 21:30 (라스트 오더 21:00)',
            'access.seats.label': '좌석 수',
            'access.seats': '24석 (종일 금연)',
            'access.mapLink': '구글 지도에서 열기',
            'access.mapTitle': '스시 하카타 우오가시 지도',

            'footer.name': '스시 하카타 우오가시',
            'footer.home': '홈',
            'footer.menu': '메뉴',
            'footer.reservation': '예약',
            'meta.title.contact': '문의하기 | 스시 하카타 우오가시',
            'footer.contactLink': '문의하기',
            'footer.vertical': '—문의하기—',
            'contact.title': '문의하기',
            'contact.lead': '예약, 문의, 단체 이용 등 편하게 문의해 주세요.<br>전화는 영업시간 내에 받고 있습니다.',
            'contact.address.label': '주소',
            'contact.reserve.text': '온라인 예약도 가능합니다.',
            'contact.back': '홈으로 돌아가기',
            'meta.title.reservation': "예약 | 스시 하카타 우오가시",
            'res.title': "예약",
            'res.lead': "희망하시는 날짜·시간·인원·테이블을 선택하고 고객 정보를 입력해 주세요.",
            'res.gallery.title': "매장과 음식 소개",
            'res.cap.shop': "하카타 1번가의 매장",
            'res.step1': "예약 정보",
            'res.step2': "메뉴",
            'res.step3': "확인",
            'res.step4': "완료",
            'res.sec.datetime': "방문 일시",
            'res.sec.guests': "이용 인원",
            'res.sec.contact': "고객 정보",
            'res.sec.table': "테이블 선택",
            'res.date': "방문 날짜",
            'res.time': "방문 시간",
            'res.time.ph': "시간을 선택해 주세요",
            'res.required': "필수",
            'res.name': "성함",
            'res.name.ph': "예) 하카타 타로",
            'res.phone': "전화번호",
            'res.phone.ph': "예) 090-1234-5678",
            'res.phone.hint': "예약 확인 연락에만 사용됩니다.",
            'res.guests.fmt': "{n}명",
            'res.table.msg': "이용 인원에 맞는 테이블을 선택해 주세요.",
            'res.seats.fmt': "{n}인석",
            'res.status.free': "빈 자리",
            'res.status.full': "예약됨",
            'res.status.over': "인원 초과",
            'res.table.selected': "선택한 테이블: ",
            'res.next': "메뉴 선택으로 이동",
            'res.notice': "예약 시간보다 15분 이상 늦으실 경우 전화로 연락 부탁드립니다.<br>예약 내용은 다음 화면에서 확인하실 수 있습니다.<br>매장은 종일 금연입니다.",
            'res.err.date': "방문 날짜를 선택해 주세요.",
            'res.err.time': "방문 시간을 선택해 주세요.",
            'res.err.name': "성함을 입력해 주세요.",
            'res.err.phone': "올바른 전화번호를 입력해 주세요.",
            'res.err.table': "테이블을 선택해 주세요.",
            'res.side.title': "매장 안내"
        }
    };

    var MAP_QUERY = '福岡県福岡市博多区博多駅中央街1-1 博多1番街';

    function readStored() {
        try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
    }
    function writeStored(v) {
        try { localStorage.setItem(STORAGE_KEY, v); } catch (e) { /* ignore */ }
    }

    function detectLang() {
        var stored = readStored();
        if (stored && LANGS[stored]) return stored;
        var nav = (navigator.language || '').toLowerCase();
        if (nav.indexOf('ja') === 0) return 'ja';
        if (nav.indexOf('zh') === 0) return 'zh';
        if (nav.indexOf('ko') === 0) return 'ko';
        if (nav.indexOf('en') === 0) return 'en';
        return DEFAULT_LANG;
    }

    function t(lang, key) {
        var dict = T[lang] || T[DEFAULT_LANG];
        return dict[key] !== undefined ? dict[key] : T[DEFAULT_LANG][key];
    }

    function updateMap(lang) {
        var frame = document.getElementById('map-frame');
        if (!frame) return;
        var src = 'https://maps.google.com/maps?q=' + encodeURIComponent(MAP_QUERY) +
            '&hl=' + LANGS[lang].map + '&z=17&output=embed';
        if (frame.getAttribute('src') !== src) frame.setAttribute('src', src);
        frame.setAttribute('title', t(lang, 'access.mapTitle'));
    }

    function applyLang(lang) {
        if (!LANGS[lang]) lang = DEFAULT_LANG;
        document.documentElement.setAttribute('lang', LANGS[lang].html);
        document.documentElement.setAttribute('data-lang', lang);

        var nodes = document.querySelectorAll('[data-i18n]');
        for (var i = 0; i < nodes.length; i++) {
            var key = nodes[i].getAttribute('data-i18n');
            var val = t(lang, key);
            if (val !== undefined) nodes[i].innerHTML = val;
        }

        var labelNodes = document.querySelectorAll('[data-i18n-aria]');
        for (var j = 0; j < labelNodes.length; j++) {
            labelNodes[j].setAttribute('aria-label', t(lang, labelNodes[j].getAttribute('data-i18n-aria')));
        }

        document.title = t(lang, document.body.getAttribute('data-title') || 'meta.title');

        var current = document.getElementById('lang-current');
        if (current) current.textContent = LANGS[lang].short;

        var options = document.querySelectorAll('.lang-menu button[data-lang]');
        for (var k = 0; k < options.length; k++) {
            var active = options[k].getAttribute('data-lang') === lang;
            options[k].setAttribute('aria-current', active ? 'true' : 'false');
        }

        updateMap(lang);
        writeStored(lang);
        document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
    }

    function initSwitcher() {
        var wrap = document.getElementById('lang-switcher');
        if (!wrap) return;
        var btn = wrap.querySelector('.lang-btn');
        var menu = wrap.querySelector('.lang-menu');

        function close() {
            wrap.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        }
        function toggle() {
            var open = wrap.classList.toggle('open');
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        }

        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            toggle();
        });

        menu.addEventListener('click', function (e) {
            var target = e.target.closest('button[data-lang]');
            if (!target) return;
            applyLang(target.getAttribute('data-lang'));
            close();
        });

        document.addEventListener('click', function (e) {
            if (!wrap.contains(e.target)) close();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') close();
        });
    }

    function initMobileNav() {
        var toggle = document.getElementById('nav-toggle');
        var header = document.querySelector('.header');
        if (!toggle || !header) return;
        toggle.addEventListener('click', function () {
            var open = header.classList.toggle('nav-open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        var links = header.querySelectorAll('.nav a');
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function () {
                header.classList.remove('nav-open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        }
    }

    function initHeaderScroll() {
        var header = document.querySelector('.header');
        if (!header) return;
        function onScroll() {
            if (window.scrollY > 40) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
        }
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    function initReveal() {
        var els = document.querySelectorAll('.reveal');
        if (!('IntersectionObserver' in window)) {
            for (var i = 0; i < els.length; i++) els[i].classList.add('in');
            return;
        }
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (en.isIntersecting) {
                    en.target.classList.add('in');
                    io.unobserve(en.target);
                }
            });
        }, { threshold: 0.12 });
        for (var j = 0; j < els.length; j++) io.observe(els[j]);
    }

    document.addEventListener('DOMContentLoaded', function () {
        initSwitcher();
        initMobileNav();
        initHeaderScroll();
        initReveal();
        applyLang(detectLang());
    });

    window.setSiteLanguage = applyLang;
    window.siteT = function (key) {
        return t(document.documentElement.getAttribute('data-lang') || DEFAULT_LANG, key);
    };
})();