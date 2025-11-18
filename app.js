// ================================
//  إعدادات عامة
// ================================
const RESTAURANT_PHONE = "966582003125";
// المتغيرات أصبحت تُحدَّث بناءً على اختيار المستخدم
let orderType = "takeaway"; // القيمة الافتراضية
let tableNumber = ""; // رقم الطاولة (فقط للمحلي)


// ===============================
//  1) نظام التوصية الذكية
// ===============================
const questions = [
  {
    q: "كم عدد الأشخاص الذين سيستمتعون بالوجبة؟",
    options: ["1-2 شخص (فردي)", "3-4 أشخاص (تشارك)", "5 أشخاص وأكثر (باقة عائلية)"],
  },
  {
    q: "ما هي النكهة المفضلة لكم؟",
    options: ["نكهات منعشة وخفيفة", "نكهات كريمية وغنية", "نكهات حارة ومتبلة"],
  },
  {
    q: "هل تفضلون وجبة مشبعة (لازانيا / ريزوتو) أم وجبة أخف (باستا / بيتزا)؟",
    options: ["غني ومُشبع", "خفيف وسريع"],
  },
  {
    q: "هل يوجد أطفال في المجموعة؟",
    options: ["نعم، يوجد أطفال", "لا، بالغون فقط"],
  },
];

let answers = [];
let currentQuestion = 0;

// عرض السؤال الحالي
function showQuestion() {
  const box = document.getElementById("question-box");

  if (currentQuestion >= questions.length) {
    showResult();
    return;
  }

  const q = questions[currentQuestion];

  box.innerHTML = `
    <div class="question">${q.q}</div>
    <div class="options">
      ${q.options
        .map(
          (opt) => `
        <button type="button" onclick="window.answerQuestion(this, '${opt}')">
          ${opt}
        </button>
      `
        )
        .join("")}
    </div>
  `;
}

// حفظ الإجابة والانتقال للسؤال التالي
function answerQuestion(button, choice) {
  const allButtons = button.parentNode.querySelectorAll("button");
  allButtons.forEach((b) => b.classList.remove("selected"));
  button.classList.add("selected");

  answers[currentQuestion] = choice;
  currentQuestion++;

  setTimeout(showQuestion, 250);
}

// إظهار النتيجة النهائية للتوصية
function showResult() {
  const resultBox = document.getElementById("result");
  resultBox.style.display = "block";

  const [count, flavor, type, kids] = answers;

  let title = "🎉 اقتراح الوجبة الذكي";
  let text = "";

  if (count === "5 أشخاص وأكثر (باقة عائلية)") {
    title = "✨ باقة لانو العائلية الذهبية";
    text = `
      نوصيكم بباقة عائلية مشبعة:
      <ul>
        <li>2 × لازانيا اللحم أو ريزوتو بالدجاج.</li>
        <li>2 × بيتزا (بوراتا + بيستو دجاج).</li>
        <li>مقبلات: كرات البطاطس + كرات الأرنشيني.</li>
        <li>مشروبات: 3 × لتر عصير (مكس بيري / باشن فروت).</li>
      </ul>
    `;
  } else if (count === "3-4 أشخاص (تشارك)") {
    title = "🤝 باقة التشارك المتوسطة";
    text = `
      اقتراح مثالي لمجموعة 3–4:
      <ul>
        <li>1 × بيتزا مارجريتا + 1 × بيتزا خضار ودجاج.</li>
        <li>1 × باستا (بينك باستا أو فتوتشيني).</li>
        <li>سلطة: لانو أو سيزر.</li>
      </ul>
    `;
  } else {
    title = "👤 وجبة فردية مميزة";
    if (type === "غني ومُشبع" && flavor.includes("كريمية")) {
      text =
        "نقترح عليك: فتوتشيني ألفريدو أو ريزوتو بالكريمة، مع كرات البطاطس ومشروب باشن فروت.";
    } else if (type === "غني ومُشبع" && flavor.includes("حارة")) {
      text =
        "جرب سباغيتي بولونيز مع إضافة فلفل حار، ومعها سلطة لانو ومشروب غازي.";
    } else if (type === "خفيف وسريع" && flavor.includes("منعشة")) {
      text = "اختيار رائع: بيتزا مارجريتا أو سلطة لانو، مع مكس بيري.";
    } else {
      text =
        "خيار متوازن: باستا لانو أو بينك باستا، مع فرايز ومشروب غازي.";
    }
  }

  if (kids === "نعم، يوجد أطفال") {
    text += `<br><br>👶 للأطفال: ننصح بـ بينك باستا + فرايز، لأنها أخف وأقرب لذوق الأطفال.`;
  }

  resultBox.innerHTML = `
    <h3>${title}</h3>
    <p>${text}</p>
    <hr style="margin: 20px 0;">
    <div style="text-align:center;">
      <button
        type="button"
        class="btn btn--primary"
        onclick="document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' })"
      >
        🛒 انتقل لاختيار أطباقك من المنيو
      </button>
    </div>
  `;
}

// تعريض الدوال عالمياً للاستخدام في الـ HTML
window.answerQuestion = answerQuestion;

// ================================
//  2) بيانات المنيو + الإضافات
// ================================
const FULL_MENU = [
  {
    id: 1,
    name: "باستا لانو",
    price: 35.0,
    desc: "باستا لانو الشهيرة مع الدجاج والكريمة والبروكلي.",
    img: "images/باستا_17511257850852190.webp",
    modifiers: [
      {
        id: "pasta_type",
        type: "single",
        title: "اختر نوع الباستا",
        min_selection: 1,
        options: [
          { name: "بدون سبايسي", price: 0.0 },
          { name: "بدون دجاج", price: 0.0 },
          { name: "  بدون بروكلي", price: 0.0 },
        ],
      },
      {
        id: "paid_addons",
        type: "multiple",
        title: "إضافات مدفوعة",
        min_selection: 0,
        options: [
          { name: "زيادة دجاج إضافي", price: 5.0 },
          { name: "زيادة مشروم", price: 5.0 },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "سباغيتي بولونيز",
    price: 32.0,
    desc: "سباغيتي بصلصة البولونيز مع جبنة البارميزان.",
    img: "images/سباغيتي_17511257342315958.webp",
    modifiers: [
      {
        id: "heat_level",
        type: "single",
        title: "إضافات اختيارية",
        min_selection: 1,
        options: [
          { name: "سادة ", price: 0.0 },
          { name: "اضافة لحم", price: 7.0 },
          { name: "اضافة دجاج ", price: 5.0 },
          
        ],
      },
    ],
  },
  // تم تعديل الصنف 3 (بينك باستا)
  {
    id: 3,
    name: "بينك باستا",
    price: 38.0,
    desc: "صوص كريمة وردية مع دجاج مشوي وبروكلي.",
    img: "images/بينك_باستا_17511258197184928.jpg",
    modifiers: [
      {
        id: "heat_level",
        type: "single",
        title: "إضافات اختيارية",
        min_selection: 1,
        options: [
          { name: "عادي (بدون سبايسي)", price: 0.0 },
          { name: "بدون دجاج", price: 0.0 },
          { name: "بدون بروكلي", price: 0.0 },
        ],
      },
      {
        id: "addons",
        type: "multiple",
        title: "إضافات اختيارية",
        min_selection: 0,
        options: [
          { name: "إضافة دجاج إضافي", price: 5.0 },
          { name: "إضافة بروكلي إضافي", price: 5.0 },
        ],
      },
    ],
  },
// ... (في مصفوفة FULL_MENU)
{
    id: 4,
    name: "فتوتشيني ألفريدو",
    price: 43.0,
    desc: "فتوتشيني كريمي مع الدجاج والمشروم.",
    img: "images/فتوتشيني_17511258546063978.jpg",
    modifiers: [
      {
        id: "version",
        type: "single",
        title: "اختر نوع الوجبة",
        min_selection: 1,
        options: [
          { name: "الطريقة الأصلية (بالدجاج والمشروم)", price: 0.0 },
          { name: "فتوتشيني (بدون دجاج )", price: 0.0 },
          { name: "فتوتشيني (بدون مشروم )", price: 0.0 },
        ],
      },
    ],
  },
// ... (بقية القائمة)
  {
    id: 5,
    name: "رافيولي بالريكوتا والسبانخ",
    price: 37.0,
    desc: "رافيولي محشوة جبنة ريكوتا وسبانخ.",
    img: "images/رافيولي_17511258874579816.jpg",
    modifiers: [],
  },
  {
    id: 6,
    name: "ريزوتو بالكريمة والدجاج",
    price: 35.0,
    desc: "أرز كريمي غني مع دجاج مشوي.",
    img: "images/ريزوتو_بالكريمة_والدجاج_المشوي_17511259231037362.jpg",
    modifiers: [],
  },
  {
    id: 7,
    name: "بيتزا بوراتا مع بيبي جرجير",
    price: 49.0,
    desc: "جبنة بوراتا كريمية مع جرجير وزيت زيتون.",
    img: "images/بيتزا_بوراتا_مع_بيبي_جرجير_17511259556497200.jpg",
    modifiers: [],
  },
  {
    id: 8,
    name: "بيتزا مارجريتا",
    price: 38.0,
    desc: "طماطم سان مارزانو، موزاريلا، ريحان.",
    img: "images/بيتزا_مارجريتا_17511259809415234.jpg",
    modifiers: [],
  },

  {
    id: 8,
    name: "بيتزا ترافيل",
    price: 59.0,
    desc: "صوص كريمي ناعم ونكهة الترافل الفاخرة، تكتمل بشرائح المشروم الطازجة",
    img: "images/بيتزا_ترافل_مع_الكريمة_17511260790757324 (1).jpg",
    modifiers: [],
  },

  {
    id: 9,
    name: "بيتزا خضار ودجاج",
    price: 39.0,
    desc: "خضار طازجة مع قطع دجاج.",
    img: "images/بيتزا_خضار_17511260105455480.jpg",
    modifiers: [],
  },
  {
    id: 10,
    name: "بيتزا بيستو دجاج",
    price: 49.0,
    desc: "صلصة بيستو منزلية مع دجاج وطماطم مجففة.",
    img: "images/بيتزا_بيستو_دجاج_17511260422447870.jpg",
    modifiers: [],
  },
  {
    id: 11,
    name: "سلطة لانو",
    price: 31.0,
    desc: "خضار ورقية طازجة مع الذرة.",
    img: "images/سلطة_لانو_17511261545338358.jpg",
    modifiers: [],
  },
  {
    id: 12,
    name: "سلطة سيزر",
    price: 33.0,
    desc: "خس، دجاج مشوي، صوص سيزر.",
    img: "images/سلطة_سيزر_17511261842402466.jpg",
    modifiers: [],
  },
  {
    id: 13,
    name: "كرات البطاطس المحشوة",
    price: 48.0,
    desc: "بطاطس مهروسة محشوة بأجبان ودجاج.",
    img: "images/كرات_البطاطس_المحشوة_17511262735610694.jpg",
    modifiers: [],
  },
  {
    id: 14,
    name: "لازانيا لحم  ",
    price: 48.0,
    desc: "طبقات من شرائح الباستا الطازجة المحشوة باللحم المفروم مغطاة بصوص البشاميل الكريمي وجبنة البارميزان والموزاريلا الذائبة. ",
    img: "images/لازانيا_اللحم_17511263014621358.jpg",
    modifiers: [],
  },
  {
    id: 15,
    name: "كرات الأرنشيني",
    price: 33.0,
    desc: "أرز كريمي محشو بأجبان ذائبة.",
    img: "images/كرات_الأرنشيني_17511262416990748.jpg",
    modifiers: [],
  },
  // تم تعديل الصنف 15 (بارميجانا)
  {
    id: 16,
    name: "بارميجانا",
    price: 27.0,
    desc: "شرائح باذنجان مشوي مع صوص طماطم وجبنة.",
    img: "images/بارميجانا_17511262173301050.jpg",
    modifiers: [
      {
        id: "protein_addon",
        type: "multiple", 
        title: "إضافات البروتين",
        min_selection: 0, 
        options: [
          { name: "إضافة لحم مفروم", price: 7.0 },
          { name: "إضافة قطع دجاج مشوية", price: 5.0 },
        ],
      },
    ],
  },
  // تم تعديل الصنف 16 (فرايز)
  {
    id: 17,
    name: "فرايز",
    price: 12.0,
    desc: "بطاطس مقلية مقرمشة مع جبنة بارميزان.",
    img: "images/فرايز_17511263309966382.jpg",
    modifiers: [
      {
        id: "cheese_option",
        type: "single", 
        title: "خيار الجبنة",
        min_selection: 1, 
        options: [
          { name: "مع جبنة بارميزان (كما هي)", price: 0.0 },
          { name: "بدون جبنة", price: 0.0 },
        ],
      },
    ],
  },
  {
    id: 18,
    name: "باشن فروت",
    price: 24.0,
    desc: "عصير باشن فروت فريش.",
    img: "images/باشيتو_17511264110701110.jpg",
    modifiers: [],
  },
  {
    id: 19,
    name: "عصير برتقال",
    price: 12.0,
    desc: "عصير برتقال طبيعي منعش.",
    img: "images/أورنجيتو_17511264339186198.jpg",
    modifiers: [],
  },
  {
    id: 20,
    name: "مكس بيري",
    price: 24.0,
    desc: "مزيج توت وليمون ونعناع.",
    img: "images/بيريتو_17511264757196126.jpg",
    modifiers: [],
  },
  // تم تعديل الصنف 20 (مشروبات غازية)
  {
    id: 21,
    name: "مشروبات غازية",
    price: 5.0,
    desc: "اختر نوع المشروب: أوشن كولا أو سبرايت.",
    img: "images/مشروبات_غازية_17518899084159798.jpg",
    modifiers: [
      {
        id: "soda_type",
        type: "single", 
        title: "اختر نوع المشروب",
        min_selection: 1, 
        options: [
          { name: " كولا", price: 0.0 },
          { name: "سبرايت", price: 0.0 },
        ],
      },
    ],
  },
  {
    id: 22,
    name: "ماء نوفا",
    price: 2.0,
    desc: "مياه معدنية.",
    img: "images/ماء_نوفا_17620942785351718.jpg",
    modifiers: [],
  },
  },
  // تم تعديل الصنف 20 (مشروبات غازية)
  {
    id: 23,
    name: "مشروبات للاطفال",
    price: 5.0,
    desc: "اختر نوع المشروب:  سن كولا أو سن توب.",
    img: "images/تصميم بدون عنوان.jpg",
    modifiers: [
      {
        id: "soda_type",
        type: "single", 
        title: "اختر نوع المشروب",
        min_selection: 1, 
        options: [
          { name: " سن كولا", price: 0.0 },
          { name: "سن توب", price: 0.0 },
        ],
      },
    ],
  },
  {
  
];

let cart = [];
let currentPopupItem = null;
let popupQuantity = 1;

// مساعد بسيط لتنسيق السعر
function formatPrice(num) {
  return num.toFixed(2);
}

// إيجاد صنف
function findItemDetails(id) {
  return FULL_MENU.find((item) => item.id === id);
}

// رسم المنيو
function renderInteractiveMenu() {
  const container = document.getElementById("interactive-menu-grid");
  container.innerHTML = FULL_MENU.map((item) => {
    return `
      <article class="menu-item">
        <img
          src="${item.img}"
          alt="${item.name}"
          loading="lazy"
          class="menu-item__image"
          onclick="window.openModifierPopup(${item.id})"
        />
        <h3 class="menu-item__name">${item.name}</h3>
        <p class="menu-item__desc">${item.desc}</p>
        <span class="menu-item__price">${formatPrice(item.price)} ريال</span>
        <button
          type="button"
          class="btn btn--secondary btn--full"
          onclick="window.openModifierPopup(${item.id})"
        >
          ➕ أضف للاختيارات
        </button>
      </article>
    `;
  }).join("");
}

// ================================
//  3) النافذة المنبثقة (Modifiers)
// ================================
function openModifierPopup(id) {
  currentPopupItem = findItemDetails(id);
  if (!currentPopupItem) return;

  const overlay = document.getElementById("modifier-popup-overlay");
  const nameHeader = document.getElementById("popup-item-name");
  const optionsContainer = document.getElementById("popup-options-container");
  const qtySpan = document.getElementById("popup-quantity");

  nameHeader.textContent = currentPopupItem.name;
  popupQuantity = 1;
  qtySpan.textContent = popupQuantity;

  if (!currentPopupItem.modifiers || currentPopupItem.modifiers.length === 0) {
    optionsContainer.innerHTML =
      '<p style="text-align:center;color:#999;">لا توجد خيارات إضافية لهذا الصنف.</p>';
  } else {
    let html = "";
    currentPopupItem.modifiers.forEach((group) => {
      const typeAttr = group.type === "single" ? "radio" : "checkbox";
      const requiredText =
        group.min_selection > 0
          ? `<small>(إجباري، اختر ${group.min_selection})</small>`
          : `<small>(اختياري)</small>`;

      html += `
        <div class="modifier-group">
          <h4>${group.title} ${requiredText}</h4>
          ${group.options
            .map((option, index) => {
              const checked =
                group.min_selection > 0 &&
                typeAttr === "radio" &&
                index === 0
                  ? "checked"
                  : "";
              
              // التعديل هنا: إزالة كلمة "مجاناً" واستبدالها بسلسلة فارغة
              const priceLabel =
                option.price > 0
                  ? `+ ${formatPrice(option.price)} ريال`
                  : ""; 

              return `
              <label class="modifier-option">
                <span class="modifier-option__label">${option.name}</span>
                <span class="modifier-option__price">${priceLabel}</span>
                <input
                  type="${typeAttr}"
                  name="modifier-${group.id}"
                  value="${option.name}|${option.price}"
                  data-price="${option.price}"
                  onchange="window.calculatePopupTotal()"
                  ${checked}
                />
              </label>
            `;
            })
            .join("")}
        </div>
      `;
    });

    optionsContainer.innerHTML = html;
  }

  calculatePopupTotal();
  overlay.style.display = "flex";
}

function closeModifierPopup() {
  const overlay = document.getElementById("modifier-popup-overlay");
  overlay.style.display = "none";
  currentPopupItem = null;
}

function updatePopupQuantity(change) {
  popupQuantity += change;
  if (popupQuantity < 1) popupQuantity = 1;
  document.getElementById("popup-quantity").textContent = popupQuantity;
  calculatePopupTotal();
}

function calculatePopupTotal() {
  if (!currentPopupItem) return;

  const popup = document.getElementById("modifier-popup");
  let modifiersPrice = 0;
  const checkedInputs = popup.querySelectorAll("input:checked");

  checkedInputs.forEach((input) => {
    modifiersPrice += parseFloat(input.dataset.price || "0");
  });

  const singleItemTotal = currentPopupItem.price + modifiersPrice;
  const finalTotal = singleItemTotal * popupQuantity;

  document.getElementById("final-price-span").textContent =
    formatPrice(finalTotal);
}

// إضافة للسلة من النافذة
function addToCartFromPopup() {
  if (!currentPopupItem) return;

  const popup = document.getElementById("modifier-popup");
  const selectedModifiers = [];
  let modifiersPrice = 0;

  // التحقق من المجموعات الإجبارية
  (currentPopupItem.modifiers || []).forEach((group) => {
    const selected = popup.querySelectorAll(
      `input[name="modifier-${group.id}"]:checked`
    );
    if (group.min_selection > 0 && selected.length < group.min_selection) {
      alert(`الرجاء اختيار ${group.min_selection} خيارات على الأقل من: ${group.title}`);
      throw new Error("Required modifier not selected");
    }
  });

  // تجميع الإضافات
  const checkedInputs = popup.querySelectorAll("input:checked");
  checkedInputs.forEach((input) => {
    const [name, priceStr] = input.value.split("|");
    const price = parseFloat(priceStr || "0");
    modifiersPrice += price;
    selectedModifiers.push({ name, price });
  });

  const unitPrice = currentPopupItem.price + modifiersPrice;

  const cartItem = {
    id: Date.now(), // ID فريد
    base_id: currentPopupItem.id,
    name: currentPopupItem.name,
    price: unitPrice,
    quantity: popupQuantity,
    modifiers: selectedModifiers,
  };

  cart.push(cartItem);
  renderCart();
  closeModifierPopup();
}

// تعريض دوال البوب أب عالمياً
window.openModifierPopup = openModifierPopup;
window.closeModifierPopup = closeModifierPopup;
window.updatePopupQuantity = updatePopupQuantity;
window.calculatePopupTotal = calculatePopupTotal;
window.addToCartFromPopup = addToCartFromPopup;

// ================================
//  4) إدارة السلة + WhatsApp
// ================================
function calculateTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function updateItemQuantity(id, change) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    cart = cart.filter((i) => i.id !== id);
  }
  renderCart();
}

function removeItem(id) {
  cart = cart.filter((i) => i.id !== id);
  renderCart();
}

/**
 * دالة عرض السلة المُعدلة لحل مشكلة الخطأ.
 * تم إضافة تحقق للتأكد من وجود عنصر "empty-cart-message" قبل التلاعب بخصائصه.
 */
function renderCart() {
  const container = document.getElementById("cart-items");
  const totalSpan = document.querySelector("#total-price span");
  const emptyMsg = document.getElementById("empty-cart-message");

  if (!cart.length) {
    container.innerHTML = "";
    if (emptyMsg) { // **التحقق الذي يحل مشكلة Cannot read properties of null (reading 'style')**
      emptyMsg.style.display = "block";
    }
    totalSpan.textContent = "0.00";
    return;
  }

  if (emptyMsg) { // **التحقق الذي يحل مشكلة Cannot read properties of null (reading 'style')**
    emptyMsg.style.display = "none";
  }

  container.innerHTML = cart
    .map((item) => {
      const modsHtml =
        item.modifiers && item.modifiers.length
          ? item.modifiers
              .map(
                (mod) =>
                  `+ ${mod.name} ${
                    mod.price > 0
                      ? `(${formatPrice(mod.price)} ر.س)`
                      : ""
                  }`
              )
              .join("<br>")
          : "";

      return `
      <div class="cart-item">
        <div class="cart-item__details">
          <strong>${item.name}</strong>
          ${
            modsHtml
              ? `<div class="cart-item__mods">${modsHtml}</div>`
              : ""
          }
          <span class="cart-item__unit-price">
            سعر الوحدة: ${formatPrice(item.price)} ريال
          </span>
        </div>
        <div class="cart-item__controls">
          <button type="button" onclick="window.updateItemQuantity(${item.id}, -1)">−</button>
          <span>${item.quantity}</span>
          <button type="button" onclick="window.updateItemQuantity(${item.id}, 1)">+</button>
          <button
            type="button"
            class="cart-item__delete"
            onclick="window.removeItem(${item.id})"
          >
            🗑
          </button>
        </div>
      </div>
    `;
    })
    .join("");

  totalSpan.textContent = formatPrice(calculateTotal());
}

window.updateItemQuantity = updateItemQuantity;
window.removeItem = removeItem;

/**
 * تحديث: تم تعديل هذه الدالة لتضمين نوع الطلب ورقم الطاولة في رسالة الواتساب.
 */
function sendWhatsAppOrder() {
  const nameInput = document.getElementById("clientNameCart");
  const phoneInput = document.getElementById("clientPhoneCart");
  const notesInput = document.getElementById("customNotesCart");
  const statusEl = document.getElementById("cart-status-message");

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const notes = notesInput.value.trim();
  const total = calculateTotal();

  // تحققات
  if (!name || !phone || phone.length < 8) {
    statusEl.style.display = "block";
    statusEl.style.backgroundColor = "#c62828";
    statusEl.textContent = "❌ الرجاء إدخال الاسم ورقم الجوال بشكل صحيح.";
    return;
  }
  
  // التحقق الإضافي لطلب "محلي"
  if (orderType === "dinein" && !tableNumber) {
    statusEl.style.display = "block";
    statusEl.style.backgroundColor = "#c62828";
    statusEl.textContent = "❌ الرجاء اختيار رقم الطاولة للطلب المحلي.";
    return;
  }

  if (!cart.length) {
    statusEl.style.display = "block";
    statusEl.style.backgroundColor = "#c62828";
    statusEl.textContent = "❌ السلة فارغة. أضف أطباقًا أولاً.";
    return;
  }

  let text = "✨ طلب جديد من صفحة لانو التفاعلية ✨\n\n";
  
  // إضافة نوع الطلب ورقم الطاولة في البداية (منطق WhatsApp الاحترافي)
  let typeText;
  if (orderType === "takeaway") {
      typeText = "سفري (Takeaway)";
  } else {
      typeText = `محلي (Dine-In) - الطاولة رقم: ${tableNumber}`;
  }
  
  text += `**🏷️ نوع الطلب:** ${typeText}\n`;
  text += "---\n"; // فاصل واضح للكاشير
  
  text += "\n👤 بيانات العميل:\n";
  text += `الاسم: ${name}\n`;
  text += `الجوال: ${phone}\n`;
  text += `ملاحظات: ${notes || "لا يوجد"}\n\n`;
  text += "📋 تفاصيل الطلب:\n";

  cart.forEach((item) => {
    text += `- ${item.quantity} × ${item.name} (بسعر الوحدة: ${formatPrice(
      item.price
    )} ريال)\n`;
    item.modifiers.forEach((mod) => {
      text += `   • إضافة: ${mod.name} ${
        mod.price > 0 ? `(+ ${formatPrice(mod.price)} ر.س)` : ""
      }\n`;
    });
  });

  text += `\nالإجمالي: ${formatPrice(total)} ريال\n`;

  // إرفاق ملخص التوصية الذكية إن وُجد
  if (answers.length) {
    text += `\n🧠 ملخص التوصية الذكية:\n${answers.join(" | ")}\n`;
  }

  text += "\n📢 للاستلام خلال 30 دقيقة إن أمكن.\n🤍 شكراً لاختياركم لانو 🤍";

  const encoded = encodeURIComponent(text);
  const url = `https://wa.me/${RESTAURANT_PHONE}?text=${encoded}`;

  statusEl.style.display = "block";
  statusEl.style.backgroundColor = "var(--success-green)";
  statusEl.textContent = "✅ سيتم فتح واتساب الآن لإرسال الطلب.";

  setTimeout(() => {
    window.open(url, "_blank");
  }, 800);
}

window.sendWhatsAppOrder = sendWhatsAppOrder;

// ================================
//  5) تهيئة الصفحة
// ================================
function initSmartRecommender() {
  currentQuestion = 0;
  answers = [];
  showQuestion();
}

/**
 * تحديث: تم إضافة منطق التعامل مع خياري (سفري/محلي) وتحديث رقم الطاولة.
 */
function initPage() {
  // 1. منطق نوع الطلب (سفري/محلي)
  const orderTypeInputs = document.querySelectorAll('input[name="orderType"]');
  const tableBox = document.getElementById("table-select-box");
  const tableSelect = document.getElementById("tableNumber");
  
  // تهيئة الواجهة لطلب سفري افتراضياً
  if (tableBox) tableBox.style.display = "none";
  
  orderTypeInputs.forEach(i => {
    i.addEventListener("change", () => {
      orderType = i.value;
  
      if (orderType === "dinein") {
        if (tableBox) tableBox.style.display = "block";
        // لا نحدث tableNumber هنا إلا إذا تم اختياره، لكن نظهره
      } else {
        if (tableBox) tableBox.style.display = "none";
        tableNumber = "";
        if (tableSelect) tableSelect.value = ""; // مسح الاختيار عند التحويل لسفري
      }
    });
  });
  
  if (tableSelect) {
    tableSelect.addEventListener("change", () => {
      tableNumber = tableSelect.value;
    });
  }

  // 2. تهيئة باقي محتويات الصفحة
  initSmartRecommender();
  renderInteractiveMenu();
  renderCart();
}

// تشغيل بعد تحميل الـ DOM
window.addEventListener("DOMContentLoaded", initPage); اذا في مشكله في الكود عدله 
