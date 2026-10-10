/* =====================================================
           MENU DATA
        ===================================================== */

const menuData = {
  set1: {
    name: "どんたくセット",
    price: 2343,
    options: ["さび抜き", "シャリ少なめ", "炙り"],
    specialChoice: true,
    specialOptions: ["茶わん蒸し", "あら汁"],
    specialTitle: "まず、お料理を1つお選びください",
    specialAlert:
      "どんたくセットは、\n「茶わん蒸し」または「あら汁」を\n1つ選択してください。",
  },

  set2: {
    name: "ちょっと一杯セット",
    price: 1969,
    options: [],
    specialChoice: true,
    specialOptions: ["生ビール", "ハイボール"],
    specialTitle: "お飲み物を1つお選びください",
    specialAlert:
      "ちょっと一杯セットは、\n「生ビール」または「ハイボール」を\n1つ選択してください。",
  },

  set3: {
    name: "極味(きわみ)",
    price: 2695,
    options: ["さび抜き", "シャリ少なめ"],
  },

  maguro: {
    name: "まぐろづくし",
    price: 2376,
    options: ["さび抜き", "シャリ少なめ"],
  },

  ebi: {
    name: "えび",
    price: 407,
    options: ["さび抜き", "シャリ少なめ", "炙り"],
  },

  tai: {
    name: "たい",
    price: 451,
    options: ["さび抜き", "シャリ少なめ", "炙り"],
  },

  akaebi: {
    name: "赤えび",
    price: 506,
    options: ["さび抜き", "シャリ少なめ", "炙り"],
  },

  anago: {
    name: "焼きあなご",
    price: 451,
    options: ["さび抜き", "シャリ少なめ"],
  },

  sashimi: {
    name: "刺身5点盛り",
    price: 2376,
    options: ["さび抜き"],
  },

  beer: {
    name: "瓶ビール",
    price: 803,
    options: [],
  },

  draftm: {
    name: "生ビール(中)",
    price: 792,
    options: [],
  },

  drafts: {
    name: "生ビール(小)",
    price: 572,
    options: [],
  },

  imo: {
    name: "芋焼酎",
    price: 572,
    options: [],
  },

  mugi: {
    name: "麦焼酎",
    price: 572,
    options: [],
  },

  sake: {
    name: "日本酒",
    price: 594,
    options: [],
  },

  reishu: {
    name: "冷酒",
    price: 748,
    options: [],
  },

  chuhai: {
    name: "酎ハイ(レモン)",
    price: 583,
    options: [],
  },

  highball: {
    name: "ハイボール",
    price: 594,
    options: [],
  },

  nabeer: {
    name: "ノンアルコールビール",
    price: 572,
    options: [],
  },

  oolong: {
    name: "ウーロン茶",
    price: 429,
    options: [],
  },

  cola: {
    name: "コーラ",
    price: 429,
    options: [],
  },

  orange: {
    name: "オレンジジュース",
    price: 429,
    options: [],
  },
};

/* =====================================================
           SELECTED MENU
        ===================================================== */

let selectedMenus = {};

let selectedOptions = {};

/* =====================================================
           CATEGORY SWITCH
        ===================================================== */

function showCategory(categoryId, button) {
  const categories = document.querySelectorAll(".menu-category");

  /*
   * すべて
   */
  if (categoryId === "all") {
    categories.forEach(function (category) {
      category.classList.remove("hidden");
    });
  } else {
    /*
     * 特定カテゴリー
     */
    categories.forEach(function (category) {
      if (category.id === categoryId) {
        category.classList.remove("hidden");
      } else {
        category.classList.add("hidden");
      }
    });
  }

  /*
   * ボタンの active 状態
   */

  const buttons = document.querySelectorAll(".category-button");

  buttons.forEach(function (btn) {
    btn.classList.remove("active");
  });

  button.classList.add("active");

  /*
   * スマホ: 横スクロールのカテゴリーバーで
   * 選択中のボタンが見えるようにする
   */
  const strip = document.querySelector(".category-nav");

  if (strip && strip.scrollWidth > strip.clientWidth) {
    strip.scrollTo({
      left: button.offsetLeft - (strip.clientWidth - button.offsetWidth) / 2,
      behavior: "smooth",
    });
  }

  /*
   * ページをカテゴリーの上部へ戻す
   *
   * 「下までスクロールしてしまう」問題を防ぐ。
   */

  const nav = document.querySelector(".category-nav");

  if (nav) {
    const header = document.querySelector(".header");

    const headerHeight = header ? header.offsetHeight : 0;

    const top =
      nav.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
  }
}

/* =====================================================
           RENDER OPTIONS
        ===================================================== */

function renderOptions(menuId) {
  const container = document.getElementById("options-" + menuId);

  if (!container) {
    return;
  }

  const quantity = selectedMenus[menuId] || 0;

  const menu = menuData[menuId];

  const optionList = menu.options || [];

  const saved = selectedOptions[menuId] || [];

  if (quantity === 0) {
    container.innerHTML =
      '<p class="option-hint">' +
      "数量を選ぶと、オプションを選べます。" +
      "</p>";

    return;
  }

  let html = "";

  for (let i = 0; i < quantity; i++) {
    const chosen = saved[i] || [];

    /*
     * どんたくセット
     */

    if (menu.specialChoice) {
      const specialChoice = chosen.specialChoice || "";

      const normalOption = chosen.normalOption || "";

      html +=
        '<div class="option-portion">' +
        '<div class="option-portion-label">' +
        (i + 1) +
        "つ目" +
        "</div>" +
        '<div class="option-subtitle">' +
        (menu.specialTitle || "まず、お料理を1つお選びください") +
        "</div>" +
        '<div class="option-list">';

      menu.specialOptions.forEach(function (label) {
        html +=
          '<label class="option-chip">' +
          '<input type="radio" ' +
          'name="special-' +
          menuId +
          "-" +
          i +
          '" ' +
          (specialChoice === label ? "checked " : "") +
          "onchange=\"selectSpecialChoice('" +
          menuId +
          "'," +
          i +
          ",'" +
          label +
          "')\">" +
          "<span>" +
          label +
          "</span>" +
          "</label>";
      });

      html += "</div>";

      if (optionList.length > 0) {
        html +=
          '<div class="option-subtitle option-subtitle-second">' +
          "次に、ご希望のオプションを1つお選びください" +
          "</div>" +
          '<div class="option-list">';

        optionList.forEach(function (label) {
          html +=
            '<label class="option-chip">' +
            '<input type="radio" ' +
            'name="normal-' +
            menuId +
            "-" +
            i +
            '" ' +
            (normalOption === label ? "checked " : "") +
            "onchange=\"selectNormalOption('" +
            menuId +
            "'," +
            i +
            ",'" +
            label +
            "')\">" +
            "<span>" +
            label +
            "</span>" +
            "</label>";
        });

        html += "</div>";
      }

      html += "</div>";
    } else {
      /*
       * 通常メニュー
       */
      html +=
        '<div class="option-portion">' +
        '<div class="option-portion-label">' +
        (i + 1) +
        "つ目" +
        "</div>" +
        '<div class="option-list">';

      optionList.forEach(function (label) {
        html +=
          '<label class="option-chip">' +
          '<input type="checkbox" ' +
          (chosen.indexOf(label) !== -1 ? "checked " : "") +
          "onchange=\"toggleOption('" +
          menuId +
          "'," +
          i +
          ",'" +
          label +
          "',this)\">" +
          "<span>" +
          label +
          "</span>" +
          "</label>";
      });

      html += "</div>" + "</div>";
    }
  }

  container.innerHTML = html;
}

/* =====================================================
           SPECIAL OPTION
        ===================================================== */

function selectSpecialChoice(menuId, index, label) {
  const all = selectedOptions[menuId] || [];

  const current = all[index] || {};

  current.specialChoice = label;

  all[index] = current;

  selectedOptions[menuId] = all;
}

/* =====================================================
           NORMAL OPTION
        ===================================================== */

function selectNormalOption(menuId, index, label) {
  const all = selectedOptions[menuId] || [];

  const current = all[index] || {};

  current.normalOption = label;

  all[index] = current;

  selectedOptions[menuId] = all;
}

/* =====================================================
           CHECKBOX OPTION
        ===================================================== */

function toggleOption(menuId, index, label, checkbox) {
  const all = selectedOptions[menuId] || [];

  const list = all[index] || [];

  const position = list.indexOf(label);

  if (checkbox.checked && position === -1) {
    list.push(label);
  }

  if (!checkbox.checked && position !== -1) {
    list.splice(position, 1);
  }

  all[index] = list;

  selectedOptions[menuId] = all;
}

/* =====================================================
           RESERVATION DATA
        ===================================================== */

const reservationData = JSON.parse(localStorage.getItem("reservationData"));

if (!reservationData) {
  alert("予約情報がありません。");

  window.location.href = "reservation.html";
}

/* =====================================================
           DISPLAY RESERVATION
        ===================================================== */

if (reservationData) {
  document.getElementById("reservation-date").textContent =
    reservationData.date;

  document.getElementById("reservation-time").textContent =
    reservationData.time;

  document.getElementById("reservation-guests").textContent =
    reservationData.guests + " 名";

  document.getElementById("reservation-table").textContent =
    reservationData.seatType === "counter"
      ? reservationData.table
      : "テーブル " + reservationData.table;

  document.getElementById("reservation-name").textContent =
    reservationData.name || "---";

  document.getElementById("reservation-phone").textContent =
    reservationData.phone || "---";
}

/* =====================================================
           CHANGE QUANTITY
        ===================================================== */

function changeQuantity(menuId, change) {
  let currentQuantity = selectedMenus[menuId] || 0;

  currentQuantity += change;

  if (currentQuantity < 0) {
    currentQuantity = 0;
  }

  if (currentQuantity > 10) {
    currentQuantity = 10;
  }

  selectedMenus[menuId] = currentQuantity;

  document.getElementById("quantity-" + menuId).textContent = currentQuantity;

  updateTotal();

  updateSelectedMenuCount();

  renderOptions(menuId);
}

/* =====================================================
           UPDATE TOTAL
        ===================================================== */

function updateTotal() {
  let total = 0;

  Object.keys(selectedMenus).forEach(function (menuId) {
    const quantity = selectedMenus[menuId];

    const price = menuData[menuId].price;

    total += price * quantity;
  });

  document.getElementById("total-price").textContent =
    total.toLocaleString("ja-JP");
}

/* =====================================================
           UPDATE MENU COUNT
        ===================================================== */

function updateSelectedMenuCount() {
  const countElement = document.getElementById("selectedMenuCount");

  if (!countElement) {
    return;
  }

  let totalCount = 0;

  Object.keys(selectedMenus).forEach(function (menuId) {
    const quantity = Number(selectedMenus[menuId]) || 0;

    totalCount += quantity;
  });

  countElement.textContent = totalCount + "点";
}

/* =====================================================
           GO TO CONFIRM
        ===================================================== */

function goToConfirm() {
  const selectedItems = [];

  let invalidAlert = "";

  Object.keys(selectedMenus).forEach(function (menuId) {
    const quantity = selectedMenus[menuId];

    if (quantity <= 0) {
      return;
    }

    const menu = menuData[menuId];

    const groups = {};

    for (let i = 0; i < quantity; i++) {
      const saved = (selectedOptions[menuId] || [])[i];

      /*
       * どんたくセット
       */

      if (menu.specialChoice) {
        const specialChoice =
          saved && saved.specialChoice ? saved.specialChoice : "";

        const normalOption =
          saved && saved.normalOption ? saved.normalOption : "";

        if (!specialChoice) {
          invalidAlert = menu.specialAlert || "選択してください。";

          continue;
        }

        const opts = normalOption
          ? [specialChoice, normalOption]
          : [specialChoice];

        const key = opts.join("|");

        if (!groups[key]) {
          groups[key] = {
            options: opts,

            quantity: 0,
          };
        }

        groups[key].quantity++;
      } else {
        /*
         * 通常メニュー
         */
        const chosen = (selectedOptions[menuId] || [])[i] || [];

        const opts = (menu.options || []).filter(function (o) {
          return chosen.indexOf(o) !== -1;
        });

        const key = opts.join("|");

        if (!groups[key]) {
          groups[key] = {
            options: opts,

            quantity: 0,
          };
        }

        groups[key].quantity++;
      }
    }

    Object.keys(groups).forEach(function (key) {
      selectedItems.push({
        id: menuId,

        name: menu.name,

        price: menu.price,

        quantity: groups[key].quantity,

        options: groups[key].options,
      });
    });
  });

  /*
   * どんたくセットチェック
   */

  if (invalidAlert) {
    alert(invalidAlert);

    return;
  }

  /*
   * メニュー未選択
   */

  if (selectedItems.length === 0) {
    const result = confirm(
      "メニューが選択されていません。\n" + "メニューなしで予約を続けますか？",
    );

    if (!result) {
      return;
    }
  }

  /*
   * Save
   */

  reservationData.menus = selectedItems;

  let total = 0;

  selectedItems.forEach(function (item) {
    total += item.price * item.quantity;
  });

  reservationData.totalPrice = total;

  localStorage.setItem("reservationData", JSON.stringify(reservationData));

  /*
   * Confirm page
   */

  window.location.href = "confirm.html";
}

/* =====================================================
           INITIALIZE
        ===================================================== */

document.addEventListener("DOMContentLoaded", function () {
  updateSelectedMenuCount();

  /*
   * 初期状態は「すべて表示」
   */

  const buttons = document.querySelectorAll(".category-button");

  buttons.forEach(function (button) {
    button.classList.remove("active");
  });

  const allButton = document.querySelector('[data-category="all"]');

  if (allButton) {
    allButton.classList.add("active");
  }

  /*
   * 最初は全カテゴリー表示
   */

  document.querySelectorAll(".menu-category").forEach(function (category) {
    category.classList.remove("hidden");
  });
});
