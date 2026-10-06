

(function () {
  var IMG = function (dir, hash) {
    return (
      "https://tblg.k-img.com/restaurant/images/Rvw/" +
      dir +
      "/640x640_rect_" +
      hash +
      ".jpg"
    );
  };

  var NIGIRI = ["さび抜き", "シャリ少なめ", "炙り"];
  var NO_ABURI = ["さび抜き", "シャリ少なめ"];
  var SASHIMI = ["さび抜き"];
  var NONE = [];

  /* [id, 名前, 価格, オプション, 画像URL or null, 説明(任意)] */

  /* ---------- 握り寿司 (追加分) ---------- */
  var SUSHI = [
    [
      "s_tamago",
      "玉子",
      242,
      NO_ABURI,
      IMG("248060", "4d331b6579011a17500518f0b7c57452"),
    ],
    [
      "s_nasu",
      "なす",
      242,
      NO_ABURI,
      IMG("248061", "fa2bcfc7dc2004aee42c182cd050a235"),
    ],
    ["s_lettuce", "レタス巻（巻き寿司）", 286, NO_ABURI, null],
    [
      "s_battera",
      "バッテラ",
      286,
      NO_ABURI,
      IMG("225399", "5acf7bb95a9de7a97467bb3de061cb3b"),
    ],
    [
      "s_tobiko",
      "とびこ",
      286,
      NO_ABURI,
      IMG("175361", "5ace975fe78828939252473b9bdd07ab"),
    ],
    [
      "s_geso",
      "げそ",
      286,
      NIGIRI,
      IMG("175362", "dd2f6203de7c714954cb6f448f7f178e"),
    ],
    [
      "s_ikamentai",
      "いか明太",
      352,
      NO_ABURI,
      IMG("248060", "67721f45427e9fea2ace805ec9e01094"),
    ],
    [
      "s_iwashi",
      "いわし",
      407,
      NIGIRI,
      IMG("248060", "3c36a5a6c4111f45629baccb51831a5f"),
    ],
    [
      "s_ika",
      "いか",
      407,
      NIGIRI,
      IMG("248061", "e9a615a83be808a900dd3bc8d4baa20c"),
    ],
    [
      "s_kanimiso",
      "かにみそ",
      407,
      NO_ABURI,
      IMG("248060", "e8915819416d4cc0bcd3ac949f2d43cb"),
    ],
    [
      "s_tsubu",
      "つぶ貝",
      407,
      NIGIRI,
      IMG("248061", "769fe84ca77069c8083136290d2b5acf"),
    ],
    ["s_tekka", "鉄火巻", 407, NO_ABURI, null],
    [
      "s_negitoro",
      "ねぎとろ",
      407,
      NO_ABURI,
      IMG("248061", "e5fe8c937006e3893bdacdefcf5ab617"),
    ],
    [
      "s_ebisalad",
      "えびサラダ",
      407,
      NO_ABURI,
      IMG("248061", "ebcf26e82e369e65e52415f4119333c8"),
    ],
    [
      "s_salmontoro",
      "サーモンとろ（1貫）",
      407,
      NIGIRI,
      IMG("248064", "a549bcdd361810fd25160805887e666a"),
    ],
    ["s_nodoguro", "のどくろ（1貫）", 407, NIGIRI, null],
    [
      "s_tachiuo",
      "太刀魚",
      451,
      NIGIRI,
      IMG("225399", "a094acf9bc14ab92718286a8f1872025"),
    ],
    [
      "s_aji",
      "あじ",
      451,
      NIGIRI,
      IMG("248060", "b2315dfaf39dc1a3b827371f71f94365"),
    ],
    [
      "s_ikura",
      "いくら（1貫）",
      451,
      NO_ABURI,
      IMG("176297", "61cd57d36543f6016d4faade4b83f6a2"),
    ],
    ["s_chutoro", "中とろ（1貫）", 451, NIGIRI, null],
    [
      "s_engawa",
      "えんがわ",
      451,
      NIGIRI,
      IMG("248061", "e93a33ee9e71e43bd81eebc0e9d4139a"),
    ],
    [
      "s_hamachi",
      "はまち",
      451,
      NIGIRI,
      IMG("248061", "2dbeb84ca4445b59c9312da14377ead3"),
    ],
    [
      "s_hotate",
      "ほたて貝（1貫）",
      451,
      NIGIRI,
      IMG("303829", "94dbae98a3d44e32cc75695faa33a24b"),
    ],
    ["s_salmon", "サーモン", 506, NIGIRI, null],
    [
      "s_uni",
      "うに（1貫）",
      506,
      NO_ABURI,
      IMG("248058", "80dee9c0d9170f9b9410353f0de5d1e9"),
    ],
    ["s_otoro", "大とろ（1貫）", 506, NIGIRI, null],
    ["s_shimaaji", "しまあじ", 561, NIGIRI, null],
    [
      "s_unagi",
      "うなぎ",
      561,
      NO_ABURI,
      IMG("248058", "8e82c50040530b3802c45935dc76f200"),
    ],
    [
      "s_hirame",
      "ひらめ",
      561,
      NIGIRI,
      IMG("175361", "e94a96963be3f78999b6adf49a4f13ec"),
    ],
    [
      "s_honmaguro",
      "本まぐろ",
      561,
      NIGIRI,
      IMG("248060", "381e5e17e7cb0108289ee3bb466c4445"),
    ],
    [
      "s_awabi",
      "一口あわび（1貫）",
      616,
      NO_ABURI,
      IMG("248058", "32b3f486ac09f7e6cb8584a3739631cf"),
    ],
  ];

  /* ---------- お刺身 (追加分) ---------- */
  var SASHIMI_ITEMS = [
    [
      "sa_iwashi",
      "いわし（刺身）",
      1298,
      SASHIMI,
      IMG("194579", "78e87f5ff428afa5d3b91a473dd51041"),
    ],
    [
      "sa_aji",
      "あじ（刺身）",
      1397,
      SASHIMI,
      IMG("194579", "c304315affe1c00fa4e80f8d4468cb7e"),
    ],
    [
      "sa_tako",
      "生たこ（刺身）",
      1397,
      SASHIMI,
      IMG("194579", "4152c9695c56de4a7010c7d95bb07d71"),
    ],
    [
      "sa_tai",
      "たい（刺身）",
      1397,
      SASHIMI,
      IMG("194579", "a40a1d7b2c7e961a5b0d50482afbd309"),
    ],
    [
      "sa_kanpachi",
      "かんぱち（刺身）",
      1584,
      SASHIMI,
      IMG("194579", "a6d9fd5f3bc7575cf3d03788b2e06399"),
    ],
    [
      "sa_honmaguro",
      "本まぐろ（刺身）",
      2112,
      SASHIMI,
      IMG("194579", "e8f947b64a68aa0c9041529d6a02f664"),
    ],
    [
      "sa_chutoro",
      "中とろ（刺身）",
      2662,
      SASHIMI,
      IMG("194579", "e45d7a3cd14e41508d532cef386e6923"),
    ],
  ];

  /* ---------- 一品料理・小鉢・サイド (新カテゴリー) ---------- */
  var SIDE = [
    [
      "d_geso",
      "げその塩焼き",
      957,
      NONE,
      IMG("175362", "5058babe287cc73e3d3dd814d985f95d"),
    ],
    [
      "d_kamashio",
      "かんぱちカマの塩焼き",
      1012,
      NONE,
      IMG("175362", "6a3fa35de9bc02366e262c395a912c29"),
    ],
    [
      "d_aradaki",
      "鯛のあらだき",
      1012,
      NONE,
      IMG("175361", "942b9513aa64187476e962ef3a45b45f"),
    ],
    [
      "d_kb_kanimiso",
      "小鉢 かにみそ",
      649,
      NONE,
      IMG("175362", "7d027de5e6a4c940821b86296f942a05"),
    ],
    [
      "d_kb_ikamentai",
      "小鉢 いか明太",
      649,
      NONE,
      IMG("175362", "7a142d49bdd2084f1ed55d0b5e018c64"),
    ],
    [
      "d_kb_ebisalad",
      "小鉢 えびサラダ",
      649,
      NONE,
      IMG("175362", "af2950711fee557fe30a773da279ed86"),
    ],
    [
      "d_kb_shiokara",
      "小鉢 まぐろ塩辛",
      792,
      NONE,
      IMG("175362", "91af33d39c262232b0188bf7f51d1785"),
    ],
    [
      "d_kb_yamakake",
      "小鉢 まぐろ山かけ",
      792,
      NONE,
      IMG("175362", "9ea2b063a37487d8d730e78ee50c1db1"),
    ],
    ["d_asari", "あさり汁", 429, NONE, null],
    ["d_arajiru", "あら汁", 429, NONE, null],
    ["d_aosa", "あおさ汁", 429, NONE, null],
    ["d_chawan", "茶碗蒸し", 429, NONE, null],
  ];

  /* ---------- menuData に登録 ---------- */
  [SUSHI, SASHIMI_ITEMS, SIDE].forEach(function (list) {
    list.forEach(function (it) {
      menuData[it[0]] = { name: it[1], price: it[2], options: it[3] };
    });
  });

  /* ---------- カード生成 ---------- */
  function cardHTML(it) {
    var id = it[0],
      name = it[1],
      price = it[2],
      opts = it[3],
      img = it[4];

    var html = '<div class="menu-card' + (img ? "" : " no-image") + '">';

    if (img) {
      html +=
        '<img class="menu-image" src="' +
        img +
        '" alt="' +
        name +
        '" loading="lazy" onerror="this.style.visibility=\'hidden\'">';
    }

    html +=
      '<div class="menu-content">' +
      "<h3>" +
      name +
      "</h3>" +
      '<div class="menu-price">¥' +
      price.toLocaleString("ja-JP") +
      "</div>" +
      '<div class="quantity-area"><span>数量</span>' +
      '<div class="quantity-control">' +
      '<button class="quantity-btn" onclick="changeQuantity(\'' +
      id +
      "', -1)\">−</button>" +
      '<span class="quantity" id="quantity-' +
      id +
      '">0</span>' +
      '<button class="quantity-btn" onclick="changeQuantity(\'' +
      id +
      "', 1)\">＋</button>" +
      "</div></div>";

    if (opts.length > 0) {
      html +=
        '<div class="option-area">' +
        '<div class="option-title">ご希望のオプション</div>' +
        '<div class="option-portions" id="options-' +
        id +
        '">' +
        '<p class="option-hint">数量を選ぶと、オプションを選べます。</p>' +
        "</div></div>";
    }

    html += "</div></div>";
    return html;
  }

  function appendTo(gridEl, list) {
    gridEl.insertAdjacentHTML("beforeend", list.map(cardHTML).join(""));
  }

  /* 握り寿司 / お刺身 の既存グリッドに追加 */
  var sushiGrid = document.querySelector("#cat-sushi .menu-grid");
  var sashimiGrid = document.querySelector("#cat-sashimi .menu-grid");

  if (sushiGrid) appendTo(sushiGrid, SUSHI);
  if (sashimiGrid) appendTo(sashimiGrid, SASHIMI_ITEMS);

  /* 新カテゴリー「一品・小鉢・サイド」を お酒 の前に挿入 */
  var alcohol = document.getElementById("cat-alcohol");

  if (alcohol) {
    var section = document.createElement("section");
    section.className = "menu-category";
    section.id = "cat-side";
    section.innerHTML =
      '<div class="category-title"><h2>一品・小鉢・サイド</h2>' +
      "<span>おつまみ・汁物</span></div>" +
      '<div class="menu-grid">' +
      SIDE.map(cardHTML).join("") +
      "</div>";

    alcohol.parentNode.insertBefore(section, alcohol);
  }

  /* カテゴリーボタンを お酒 の前に挿入 */
  var alcoholBtn = document.querySelector(
    '.category-button[data-category="cat-alcohol"]',
  );

  if (alcoholBtn) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "category-button";
    btn.setAttribute("data-category", "cat-side");
    btn.setAttribute("onclick", "showCategory('cat-side', this)");
    btn.textContent = "一品・サイド";

    alcoholBtn.parentNode.insertBefore(btn, alcoholBtn);
  }
})();
