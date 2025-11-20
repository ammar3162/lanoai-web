// =========================================================
// 1. تعريف بيانات المنيو (القائمة) - تم تغيير الاسم إلى 'menuItems'
//    لتتوافق مع باقي الكود.
// =========================================================
const menuItems = [
    {
        id: 1,
        name: "باستا لانو",
        price: 35.0,
        desc: "باستا لانو الشهيرة مع الدجاج والكريمة والبروكلي.",
        image: "images/باستا_17511257850852190.webp", // تم تغيير 'img' إلى 'image'
        modifiers: [
            {
                id: "pasta_type",
                type: "radio", // تم تغيير 'single' إلى 'radio'
                group: "اختر نوع الباستا", // إضافة 'group'
                required: true, // إضافة 'required'
                options: [
                    { name: "بدون دجاج", price: 0.0 },
                    { name: "بدون بروكلي", price: 0.0 },
                ],
            },
            {
                id: "paid_addons",
                type: "checkbox", // تم تغيير 'multiple' إلى 'checkbox'
                group: "إضافات مدفوعة", // إضافة 'group'
                required: false, // إضافة 'required'
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
        image: "images/سباغيتي_17511257342315958.webp",
        modifiers: [
            {
                id: "heat_level",
                type: "radio",
                group: "درجة حرارة الصوص",
                required: true,
                options: [
                    { name: "سادة ", price: 0.0 },
                    { name: "اضافة لحم", price: 7.0 },
                    { name: "اضافة دجاج ", price: 5.0 },
                ],
            },
        ],
    },
    {
        id: 3,
        name: "بينك باستا",
        price: 38.0,
        desc: "صوص كريمة وردية مع دجاج مشوي وبروكلي.",
        image: "images/بينك_باستا_17511258197184928.jpg",
        modifiers: [
            {
                id: "heat_level",
                type: "radio",
                group: "درجة الحرارة (إجباري)",
                required: true,
                options: [
                    { name: "عادي (بدون حرارة)", price: 0.0 },
                    { name: "حرارة خفيفة", price: 0.0 },
                    { name: "حرارة متوسطة", price: 0.0 },
                ],
            },
            {
                id: "addons",
                type: "checkbox",
                group: "إضافات اختيارية",
                required: false,
                options: [
                    { name: "إضافة دجاج إضافي", price: 5.0 },
                    { name: "إضافة بروكلي إضافي", price: 5.0 },
                ],
            },
        ],
    },
    {
        id: 4,
        name: "فتوتشيني ألفريدو",
        price: 43.0,
        desc: "فتوتشيني كريمي مع الدجاج والمشروم.",
        image: "images/فتوتشيني_17511258546063978.jpg",
        modifiers: [
            {
                id: "version",
                type: "radio",
                group: "اختر نوع الوجبة",
                required: true,
                options: [
                    { name: "الطريقة الأصلية (بالدجاج والمشروم)", price: 0.0 },
                    { name: "فتوتشيني (بدون دجاج )", price: 0.0 },
                    { name: "فتوتشيني (بدون مشروم )", price: 0.0 },
                ],
            },
        ],
    },
    {
        id: 5,
        name: "رافيولي بالريكوتا والسبانخ",
        price: 37.0,
        desc: "رافيولي محشوة جبنة ريكوتا وسبانخ.",
        image: "images/رافيولي_17511258874579816.jpg",
        modifiers: [],
    },
    {
        id: 6,
        name: "ريزوتو بالكريمة والدجاج",
        price: 35.0,
        desc: "أرز كريمي غني مع دجاج مشوي.",
        image: "images/ريزوتو_بالكريمة_والدجاج_المشوي_17511259231037362.jpg",
        modifiers: [],
    },
    {
        id: 7,
        name: "بيتزا بوراتا مع بيبي جرجير",
        price: 49.0,
        desc: "جبنة بوراتا كريمية مع جرجير وزيت زيتون.",
        image: "images/بيتزا_بوراتا_مع_بيبي_جرجير_17511259556497200.jpg",
        modifiers: [],
    },
    {
        id: 8,
        name: "بيتزا مارجريتا",
        price: 38.0,
        desc: "طماطم سان مارزانو، موزاريلا، ريحان.",
        image: "images/بيتزا_مارجريتا_17511259809415234.jpg",
        modifiers: [],
    },
    {
        id: 9, // تم تغيير id لـ ترافيل من 8 إلى 9
        name: "بيتزا ترافيل",
        price: 59.0,
        desc: "صوص كريمي ناعم ونكهة الترافل الفاخرة، تكتمل بشرائح المشروم الطازجة",
        image: "images/بيتزا_ترافل_مع_الكريمة_17511260790757324 (1).jpg",
        modifiers: [],
    },
    {
        id: 10, // تم تغيير id لـ بيتزا خضار ودجاج من 9 إلى 10
        name: "بيتزا خضار ودجاج",
        price: 39.0,
        desc: "خضار طازجة مع قطع دجاج.",
        image: "images/بيتزا_خضار_17511260105455480.jpg",
        modifiers: [],
    },
    {
        id: 11, // تم تغيير id لـ بيتزا بيستو دجاج من 10 إلى 11
        name: "بيتزا بيستو دجاج",
        price: 49.0,
        desc: "صلصة بيستو منزلية مع دجاج وطماطم مجففة.",
        image: "images/بيتزا_بيستو_دجاج_17511260422447870.jpg",
        modifiers: [],
    },
    {
        id: 12, // تم تغيير id لـ سلطة لانو من 11 إلى 12
        name: "سلطة لانو",
        price: 31.0,
        desc: "خضار ورقية طازجة مع الذرة.",
        image: "images/سلطة_لانو_17511261545338358.jpg",
        modifiers: [],
    },
    {
        id: 13, // تم تغيير id لـ سلطة سيزر من 12 إلى 13
        name: "سلطة سيزر",
        price: 33.0,
        desc: "خس، دجاج مشوي، صوص سيزر.",
        image: "images/سلطة_سيزر_17511261842402466.jpg",
        modifiers: [],
    },
    {
        id: 14, // تم تغيير id لـ كرات البطاطس المحشوة من 13 إلى 14
        name: "كرات البطاطس المحشوة",
        price: 48.0,
        desc: "بطاطس مهروسة محشوة بأجبان ودجاج.",
        image: "images/كرات_البطاطس_المحشوة_17511262735610694.jpg",
        modifiers: [],
    },
    {
        id: 15, // تم تغيير id لـ لازانيا لحم من 14 إلى 15
        name: "لازانيا لحم",
        price: 48.0,
        desc: "طبقات من شرائح الباستا الطازجة المحشوة باللحم المفروم مغطاة بصوص البشاميل الكريمي وجبنة البارميزان والموزاريلا الذائبة.",
        image: "images/لازانيا_اللحم_17511263014621358.jpg",
        modifiers: [
            {
                id: "cheese_option",
                type: "radio",
                group: "النوع ",
                required: true,
                options: [
                    { name: "لحم (كما هي)", price: 0.0 },
                    { name: "دجاج", price: 0.0 },
                ],
            },
        ],
    },
    {
        id: 16, // تم تغيير id لـ كرات الأرنشيني من 15 إلى 16
        name: "كرات الأرنشيني",
        price: 33.0,
        desc: "أرز كريمي محشو بأجبان ذائبة.",
        image: "images/كرات_الأرنشيني_17511262416990748.jpg",
        modifiers: [],
    },
    {
        id: 17, // تم تغيير id لـ بارميجانا من 16 إلى 17
        name: "بارميجانا",
        price: 27.0,
        desc: "شرائح باذنجان مشوي مع صوص طماطم وجبنة.",
        image: "images/بارميجانا_17511262173301050.jpg",
        modifiers: [
            {
                id: "protein_addon",
                type: "checkbox",
                group: "إضافات البروتين",
                required: false,
                options: [
                    { name: "إضافة لحم مفروم", price: 7.0 },
                    { name: "إضافة دجاج ", price: 5.0 },
                ],
            },
        ],
    },
    {
        id: 18, // تم تغيير id لـ فرايز من 17 إلى 18
        name: "فرايز",
        price: 12.0,
        desc: "بطاطس مقلية مقرمشة مع جبنة بارميزان.",
        image: "images/فرايز_17511263309966382.jpg",
        modifiers: [
            {
                id: "cheese_option",
                type: "radio",
                group: "خيار الجبنة",
                required: true,
                options: [
                    { name: "مع جبنة بارميزان (كما هي)", price: 0.0 },
                    { name: "بدون جبنة", price: 0.0 },
                ],
            },
        ],
    },
    {
        id: 19, // تم تغيير id لـ باشن فروت من 18 إلى 19
        name: "باشن فروت",
        price: 24.0,
        desc: "عصير باشن فروت فريش.",
        image: "images/باشيتو_17511264110701110.jpg",
        modifiers: [],
    },
    {
        id: 20, // تم تغيير id لـ عصير برتقال من 19 إلى 20
        name: "عصير برتقال",
        price: 12.0,
        desc: "عصير برتقال طبيعي منعش.",
        image: "images/أورنجيتو_17511264339186198.jpg",
        modifiers: [],
    },
    {
        id: 21, // تم تغيير id لـ مكس بيري من 20 إلى 21
        name: "مكس بيري",
        price: 24.0,
        desc: "مزيج توت وليمون ونعناع.",
        image: "images/بيريتو_17511264757196126.jpg",
        modifiers: [],
    },
    {
        id: 22, // تم تغيير id لـ مشروبات غازية من 21 إلى 22
        name: "مشروبات غازية",
        price: 5.0,
        desc: "اختر نوع المشروب:  كولا أو سبرايت.",
        image: "images/مشروبات_غازية_17518899084159798.jpg",
        modifiers: [
            {
                id: "soda_type",
                type: "radio",
                group: "اختر نوع المشروب",
                required: true,
                options: [
                    { name: " كولا", price: 0.0 },
                    { name: "سبرايت", price: 0.0 },
                ],
            },
        ],
    },
    {
        id: 23,
        name: "ماء نوفا",
        price: 2.0,
        desc: "مياه معدنية.",
        image: "images/ماء_نوفا_17620942785351718.jpg",
        modifiers: [],
    },
    {
        id: 24, // تم تغيير id لـ مشروبات للاطفال من 23 إلى 24
        name: "مشروبات للاطفال",
        price: 4.0,
        desc: "اختر نوع المشروب: سن كولا أو سن توب.",
        image: "images/123suncola.jpg",
        modifiers: [
            {
                id: "soda_type",
                type: "radio",
                group: "اختر نوع المشروب",
                required: true,
                options: [
                    { name: "سن كولا", price: 0.0 },
                    { name: "سن توب", price: 0.0 },
                ],
            },
        ],
    },
];

// =========================================================
// 2. تعريف بيانات التوصية الذكية (مطوّرة بالذكاء الاصطناعي)
//    مبنية على:
//    - عدد الأشخاص
//    - وجود أطفال
//    - نوع المزاج / الوجبة
//    - أشهر الطلبات: لازانيا لحم، كرات البطاطس، سلطة لانو، بيتزا ترافل، فرايز، فتوتشيني
// =========================================================
const recommenderQuestions = [
    {
        id: 1,
        question: "كم عدد الأشخاص الذين سيستمتعون بالوجبة اليوم؟",
        options: [
            { text: "فرد واحد", type: "solo" },
            { text: "شخصان", type: "two" },
            { text: "3-4 أشخاص", type: "group" },
            { text: "5 أشخاص أو أكثر", type: "big_group" },
        ],
        nextQuestion: 2,
    },
    {
        id: 2,
        question: "هل يوجد أطفال معكم على الطاولة؟",
        options: [
            { text: "نعم، يوجد أطفال", type: "with_kids" },
            { text: "لا، بالغون فقط", type: "no_kids" },
        ],
        nextQuestion: 3,
    },
    {
        id: 3,
        question: "ما هو مزاجكم اليوم؟ ما نوع الوجبة التي تبحثون عنها؟",
        options: [
            { text: "وجبة مشبعة ودسمة (لازانيا / باستا)", type: "hearty" },
            { text: "بيتزا للتشارك بين الجميع", type: "pizza" },
            { text: "شيء خفيف مع سلطات ومقبلات", type: "light" },
        ],
        nextQuestion: null, // آخر سؤال
    },
];

// لا نستخدم الآن قاموس ثابت، بل منطق ذكي يبني الاقتراح حسب الإجابات
let currentQuestionIndex = 0;
let recommendationAnswers = {};

// دالة مساعدة للوصول للصنف من المنيو
function findMenuItemById(id) {
    return menuItems.find((i) => i.id === id);
}

// دالة الذكاء الاصطناعي للتوصية النهائية
function getRecommendationFromAnswers() {
    const peopleType = recommendationAnswers.q1; // solo / two / group / big_group
    const hasKids = recommendationAnswers.q2 === "with_kids";
    const mood = recommendationAnswers.q3; // hearty / pizza / light

    const peopleTextMap = {
        solo: "فرد واحد",
        two: "شخصان",
        group: "مجموعة من 3-4 أشخاص",
        big_group: "مجموعة كبيرة (5 أشخاص أو أكثر)",
    };

    const peopleText = peopleTextMap[peopleType] || "مجموعة";

    let title = "";
    let desc = "";
    let items = [];

    // الحالات مع وجود أطفال
    if (hasKids) {
        if (mood === "pizza") {
            title = "🍕 اقتراح لعائلة مع أطفال يحبّون البيتزا والكرسبي";
            desc = `بناءً على كونكم ${peopleText} ومعكم أطفال، اخترنا لكم مزيجًا يناسب الكبار والصغار.`;
            items = [
                {
                    item: findMenuItemById(9), // بيتزا ترافل
                    note: "بيتزا ترافل مميزة للمشاركة بين الكبار وعشّاق النكهات الغنية.",
                },
                {
                    item: findMenuItemById(18), // فرايز
                    note: "فرايز مقرمش محبّب للأطفال ويكمل تجربة البيتزا.",
                },
                {
                    item: findMenuItemById(4), // فتوتشيني
                    note: "فتوتشيني ألفريدو كريمي للكبار أو للمشاركة مع من يحب الباستا.",
                },
            ];
        } else if (mood === "light") {
            title = "🥗 اقتراح خفيف لعائلة مع أطفال";
            desc = `اخترنا لكم توازناً بين الخفة والمتعة، يناسب ${peopleText} مع وجود أطفال.`;
            items = [
                {
                    item: findMenuItemById(12), // سلطة لانو
                    note: "سلطة لانو كبداية خفيفة ومنعشة على الطاولة.",
                },
                {
                    item: findMenuItemById(18), // فرايز
                    note: "فرايز للأطفال أو لمن يحب القرَمشة مع الصوص.",
                },
                {
                    item: findMenuItemById(14), // كرات البطاطس
                    note: "كرات البطاطس المحشوة من أكثر الأصناف المحبوبة للمشاركة.",
                },
            ];
        } else {
            // hearty مع أطفال
            title = "🍽️ اقتراح مشبع لعائلة مع أطفال";
            desc = `بناءً على مزاجكم لوجبة مشبعة، ومع وجود أطفال، هذا مزيج يعطيكم تشكيلة ممتعة للجميع.`;
            items = [
                {
                    item: findMenuItemById(15), // لازانيا لحم
                    note: "لازانيا لحم مشبعة وأساسية لعشّاق الأطباق الثقيلة.",
                },
                {
                    item: findMenuItemById(18), // فرايز
                    note: "فرايز للأطفال ولمن يحب إضافة طبق جانبي بسيط.",
                },
                {
                    item: findMenuItemById(14), // كرات البطاطس
                    note: "كرات البطاطس المحشوة للمشاركة في منتصف الطاولة.",
                },
            ];
        }
    } else {
        // بدون أطفال
        if (mood === "hearty") {
            if (peopleType === "solo") {
                title = "🍽️ طبق مشبع لفرد واحد";
                desc = "اخترنا لك وجبة رئيسية غنية مع لمسة خفيفة جانبية، مناسبة إذا كنت لوحدك وتبحث عن طبق يشبعك.";
                items = [
                    {
                        item: findMenuItemById(15), // لازانيا لحم
                        note: "لازانيا لحم مشبعة وأساسية كطبق رئيسي.",
                    },
                    {
                        item: findMenuItemById(12), // سلطة لانو
                        note: "سلطة لانو كخيار جانبي خفيف يوازن الوجبة.",
                    },
                ];
            } else if (peopleType === "two") {
                title = "👫 اقتراح مشبع لثنائي يحب الباستا";
                desc = "مزيج يوزع بينكم بسهولة ويعطيكم تنوّعًا بين نكهات مختلفة.";
                items = [
                    {
                        item: findMenuItemById(15), // لازانيا لحم
                        note: "طبق غني يمكن مشاركته بين شخصين.",
                    },
                    {
                        item: findMenuItemById(4), // فتوتشيني
                        note: "فتوتشيني ألفريدو كريمي ليكمل تجربة الباستا.",
                    },
                    {
                        item: findMenuItemById(12), // سلطة لانو
                        note: "سلطة خفيفة لتوازن الطعم والدسامة.",
                    },
                ];
            } else {
                // group أو big_group
                title = "👨‍👩‍👦‍👦 اقتراح مشبع لمجموعة تحب الأطباق الثقيلة";
                desc = `بناءً على أنكم ${peopleText}، هذا المزيج مناسب لوضعه في منتصف الطاولة والتشارك فيه.`;
                items = [
                    {
                        item: findMenuItemById(15), // لازانيا لحم
                        note: "لازانيا لحم مشبعة في وسط الطاولة.",
                    },
                    {
                        item: findMenuItemById(9), // بيتزا ترافل
                        note: "بيتزا ترافل بنكهة فاخرة لمحبي التجربة المختلفة.",
                    },
                    {
                        item: findMenuItemById(14), // كرات البطاطس
                        note: "كرات البطاطس المحشوة كمقبلات يتشارك فيها الجميع.",
                    },
                    {
                        item: findMenuItemById(12), // سلطة لانو
                        note: "سلطة لانو تضيف لمسة خفيفة وصحية للطاولة.",
                    },
                ];
            }
        } else if (mood === "pizza") {
            title = "🍕 مزيج بيتزا ومقبلات للمشاركة";
            desc = `مناسب لـ ${peopleText} يحبّون البيتزا مع مقبلات جانبية.`;
            items = [
                {
                    item: findMenuItemById(9), // بيتزا ترافل
                    note: "بيتزا الترافل المميزة تعتبر من أبرز اختيارات الزبائن.",
                },
                {
                    item: findMenuItemById(10), // بيتزا خضار ودجاج
                    note: "بيتزا خضار ودجاج للتنوّع بين النكهات.",
                },
                {
                    item: findMenuItemById(14), // كرات البطاطس
                    note: "كرات البطاطس المحشوة كمقبلات جانبية محبوبة.",
                },
            ];
        } else {
            // light بدون أطفال
            title = "🥗 اقتراح خفيف لمحبي السلطات والمقبلات";
            desc = `مناسب لـ ${peopleText} يبحثون عن شيء أخف من الأطباق الثقيلة.`;
            items = [
                {
                    item: findMenuItemById(12), // سلطة لانو
                    note: "سلطة لانو كأساس خفيف ومنعش.",
                },
                {
                    item: findMenuItemById(14), // كرات البطاطس
                    note: "كرات البطاطس المحشوة تضيف قرمشة مشبعة بدون مبالغة.",
                },
            ];

            if (peopleType === "group" || peopleType === "big_group") {
                items.push({
                    item: findMenuItemById(9), // بيتزا ترافل
                    note: "لمن يريد إضافة شيء مميز على الطاولة، جربوا بيتزا الترافل للمشاركة.",
                });
            }
        }
    }

    return { title, desc, items };
}

// =========================================================
// 3. حالة السلة والعناصر النشطة
// =========================================================
let cart = [];
let activeItemInPopup = null;
let popupQuantity = 1;

// =========================================================
// 4. وظائف التوصية الذكية
// =========================================================
window.renderRecommender = function () {
    const container = document.getElementById("question-box");
    container.innerHTML = "";
    document.getElementById("result").style.display = "none";

    if (currentQuestionIndex < recommenderQuestions.length) {
        const q = recommenderQuestions[currentQuestionIndex];

        const questionHtml = `<div class="question">${q.question}</div>`;
        const optionsHtml =
            '<div class="options">' +
            q.options
                .map(
                    (opt) =>
                        `<button onclick="window.answerQuestion('${opt.type}')">${opt.text}</button>`
                )
                .join("") +
            "</div>";

        container.innerHTML = questionHtml + optionsHtml;
    } else {
        // عرض النتيجة الذكية
        const result = getRecommendationFromAnswers();

        const itemsHtml = result.items
            .map(
                (entry) => `
            <li>
                <strong>${entry.item.name}</strong> – ${entry.item.desc}
                ${
                    entry.note
                        ? `<div class="result-note" style="font-size:0.9rem; color:#777; margin-top:4px;">${entry.note}</div>`
                        : ""
                }
            </li>`
            )
            .join("");

        const resultHtml = `
            <h3>🎉 ترشيح ذكي لك من لانو باستا</h3>
            <p>${result.title}</p>
            <p>${result.desc}</p>
            <ul>
                ${itemsHtml}
            </ul>
            <p style="margin-top:8px;">يمكنك العثور على هذه الأصناف في المنيو والضغط عليها لإضافتها للسلة 👇</p>
            <a href="#menu" style="color: var(--primary-red); font-weight: 700; display:inline-block; margin-bottom:10px;">انتقل إلى المنيو لطلبها الآن</a>
            <br/>
            <button class="btn btn--primary" onclick="window.restartRecommender()">أعد تشغيل التوصية من جديد</button>
        `;

        document.getElementById("result").innerHTML = resultHtml;
        document.getElementById("result").style.display = "block";
    }
};

window.answerQuestion = function (answer) {
    recommendationAnswers[`q${currentQuestionIndex + 1}`] = answer;
    currentQuestionIndex++;
    window.renderRecommender();
};

window.restartRecommender = function () {
    currentQuestionIndex = 0;
    recommendationAnswers = {};
    window.renderRecommender();
};

// =========================================================
// 5. وظائف عرض المنيو (مع ربط زر الضغط وتحديث اللون)
// =========================================================
window.renderMenu = function () {
    const grid = document.getElementById("interactive-menu-grid");
    grid.innerHTML = menuItems
        .map((item) => {
            const isInCart = cart.some((cartItem) => cartItem.itemId === item.id);
            const cartClass = isInCart ? " is-in-cart" : "";

            return `
            <div class="menu-item${cartClass}" data-item-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" class="menu-item__image" onclick="openModifierPopup(${item.id})">
                <div class="item-details">
                    <h3 class="menu-item__name">${item.name}</h3>
                    <p class="menu-item__desc">${item.desc}</p>
                    <span class="menu-item__price">${item.price.toFixed(2)} ريال</span>
                </div>
            </div>
        `;
        })
        .join("");
};

// =========================================================
// 6. وظائف النافذة المنبثقة (Modifiers) - تم تحديث طريقة التعامل مع المتطلبات
// =========================================================
function openModifierPopup(itemId) {
    activeItemInPopup = menuItems.find((i) => i.id === itemId);

    if (!activeItemInPopup) {
        console.error("Item not found for ID:", itemId);
        return;
    }

    popupQuantity = 1;

    document.getElementById("popup-item-name").textContent = activeItemInPopup.name;
    document.getElementById("popup-quantity").textContent = popupQuantity;

    const optionsContainer = document.getElementById("popup-options-container");
    optionsContainer.innerHTML = "";

    activeItemInPopup.modifiers.forEach((mod, groupIndex) => {
        const groupDiv = document.createElement("div");
        groupDiv.className = "modifier-group";

        const groupTitle = document.createElement("h4");
        groupTitle.innerHTML = `${mod.group || mod.id} ${
            mod.required ? "<small>(مطلوب)</small>" : "<small>(اختياري)</small>"
        }`;
        groupDiv.appendChild(groupTitle);

        const inputType = mod.type;

        mod.options.forEach((opt, optIndex) => {
            const optionDiv = document.createElement("label");
            optionDiv.className = "modifier-option";

            const input = document.createElement("input");
            input.type = inputType;
            input.name = `modifier_group_${groupIndex}`;
            input.value = `${opt.name}|${opt.price}`;
            input.dataset.groupIndex = groupIndex;
            input.dataset.optIndex = optIndex;

            input.onchange = calculatePopupTotal;

            const labelSpan = document.createElement("span");
            labelSpan.className = "modifier-option__label";
            labelSpan.textContent = opt.name;

            const priceSpan = document.createElement("span");
            priceSpan.className = "modifier-option__price";
            priceSpan.textContent =
                opt.price > 0 ? `+${opt.price.toFixed(2)} ر.س` : "مجاني";

            optionDiv.appendChild(input);
            optionDiv.appendChild(labelSpan);
            optionDiv.appendChild(priceSpan);
            groupDiv.appendChild(optionDiv);
        });
        optionsContainer.appendChild(groupDiv);

        if (inputType === "radio" && mod.options.length > 0) {
            groupDiv.querySelector('input[type="radio"]').checked = true;
        }
    });

    calculatePopupTotal();
    document
        .getElementById("modifier-popup-overlay")
        .classList.add("active");
}

window.closeModifierPopup = function () {
    document.getElementById("modifier-popup-overlay").classList.remove("active");
    activeItemInPopup = null;
};

window.updatePopupQuantity = function (change) {
    popupQuantity = Math.max(1, popupQuantity + change);
    document.getElementById("popup-quantity").textContent = popupQuantity;
    calculatePopupTotal();
};

function calculatePopupTotal() {
    if (!activeItemInPopup) return;

    let itemBasePrice = activeItemInPopup.price;
    let modifiersPrice = 0;
    const popup = document.getElementById("modifier-popup");

    activeItemInPopup.modifiers.forEach((mod, groupIndex) => {
        const groupName = `modifier_group_${groupIndex}`;
        const inputs = popup.querySelectorAll(
            `input[name="${groupName}"]:checked`
        );

        inputs.forEach((input) => {
            const priceString = input.value.split("|")[1];
            modifiersPrice += parseFloat(priceString);
        });
    });

    const total = (itemBasePrice + modifiersPrice) * popupQuantity;
    document.getElementById("popup-item-total").textContent = total.toFixed(2);
}

// =========================================================
// 7. وظائف السلة
// =========================================================
window.addToCartFromPopup = function () {
    const popup = document.getElementById("modifier-popup");
    const itemBasePrice = activeItemInPopup.price;
    let modifiers = [];
    let modifiersTotalPrice = 0;
    let isValid = true;

    activeItemInPopup.modifiers.forEach((mod, groupIndex) => {
        const groupName = `modifier_group_${groupIndex}`;
        const inputs = popup.querySelectorAll(
            `input[name="${groupName}"]:checked`
        );

        if (mod.required && inputs.length === 0) {
            isValid = false;
        }

        inputs.forEach((input) => {
            const [name, priceString] = input.value.split("|");
            const price = parseFloat(priceString);
            modifiersTotalPrice += price;
            modifiers.push({
                group: mod.group || mod.id,
                name: name,
                price: price,
            });
        });
    });

    if (!isValid) {
        alert("الرجاء اختيار جميع الخيارات المطلوبة.");
        return;
    }

    const itemTotalPrice = itemBasePrice + modifiersTotalPrice;

    const newItem = {
        id: Date.now(),
        itemId: activeItemInPopup.id,
        name: activeItemInPopup.name,
        basePrice: itemBasePrice,
        unitPrice: itemTotalPrice,
        quantity: popupQuantity,
        modifiers: modifiers,
    };

    cart.push(newItem);
    window.renderCart();
    window.closeModifierPopup();
};

window.renderCart = function () {
    const cartItemsContainer = document.getElementById("cart-items");
    const emptyMessage = document.getElementById("empty-cart-message");
    let grandTotal = 0;

    window.renderMenu();

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "";
        emptyMessage.style.display = "flex";
        document.getElementById("final-total-price").textContent = "0.00";
        return;
    }

    emptyMessage.style.display = "none";

    cartItemsContainer.innerHTML = cart
        .map((item, index) => {
            const itemTotal = item.unitPrice * item.quantity;
            grandTotal += itemTotal;

            const modsList =
                item.modifiers.length > 0
                    ? '<div class="cart-item__mods">التعديلات: ' +
                      item.modifiers
                          .map(
                              (m) =>
                                  m.name +
                                  (m.price > 0
                                      ? ` (+${m.price.toFixed(2)})`
                                      : "")
                          )
                          .join(", ") +
                      "</div>"
                    : "";

            return `
            <div class="cart-item" data-index="${index}">
                <div class="cart-item__details">
                    <strong>${item.name} (x${item.quantity})</strong>
                    <span class="cart-item__unit-price">سعر الوحدة: ${item.unitPrice.toFixed(
                        2
                    )} ر.س</span>
                    ${modsList}
                </div>
                <div class="cart-item__controls">
                    <button onclick="window.updateCartItemQuantity(${index}, -1)" ${
                item.quantity === 1 ? "disabled" : ""
            }>−</button>
                    <span style="font-weight:700;">${itemTotal.toFixed(
                        2
                    )} ر.س</span>
                    <button onclick="window.updateCartItemQuantity(${index}, 1)">+</button>
                    <button class="cart-item__delete" onclick="window.deleteCartItem(${index})">🗑️</button>
                </div>
            </div>
        `;
        })
        .join("");

    document.getElementById("final-total-price").textContent =
        grandTotal.toFixed(2);
};

window.updateCartItemQuantity = function (index, change) {
    if (cart[index]) {
        const newQuantity = cart[index].quantity + change;
        if (newQuantity >= 1) {
            cart[index].quantity = newQuantity;
        } else if (newQuantity === 0) {
            window.deleteCartItem(index);
            return;
        }
        window.renderCart();
    }
};

window.deleteCartItem = function (index) {
    if (cart[index]) {
        cart.splice(index, 1);
        window.renderCart();
    }
};

// =========================================================
// 8. وظيفة نوع الطلب (سفري/محلي)
// =========================================================
window.handleOrderTypeChange = function () {
    const orderType = document.querySelector(
        'input[name="orderType"]:checked'
    ).value;
    const tableBox = document.getElementById("table-select-box");
    const tableSelect = document.getElementById("tableNumber");

    if (orderType === "dinein") {
        tableBox.style.display = "block";
        tableSelect.setAttribute("required", "true");
    } else {
        tableBox.style.display = "none";
        tableSelect.removeAttribute("required");
        tableSelect.value = "";
    }
};

// =========================================================
// 9. وظيفة إرسال الطلب عبر واتساب
// =========================================================
window.sendWhatsAppOrder = function () {
    const name = document.getElementById("clientNameCart").value;
    const phone = document.getElementById("clientPhoneCart").value;
    const notes = document.getElementById("customNotesCart").value;
    const statusMessage = document.getElementById("cart-status-message");
    const total = document.getElementById("final-total-price").textContent;
    const orderType = document.querySelector(
        'input[name="orderType"]:checked'
    ).value;
    const tableNumber =
        orderType === "dinein"
            ? document.getElementById("tableNumber").value
            : null;

    if (cart.length === 0) {
        statusMessage.textContent =
            "❌ السلة فارغة. لا يمكن إرسال طلب فارغ.";
        statusMessage.className = "error";
        statusMessage.style.display = "block";
        return;
    }

    if (!name || !phone) {
        statusMessage.textContent =
            "❌ الرجاء إدخال الاسم ورقم الجوال أولاً.";
        statusMessage.className = "error";
        statusMessage.style.display = "block";
        return;
    }

    if (orderType === "dinein" && !tableNumber) {
        statusMessage.textContent =
            "❌ الرجاء اختيار رقم الطاولة لطلب المحل.";
        statusMessage.className = "error";
        statusMessage.style.display = "block";
        return;
    }

    statusMessage.style.display = "none";

    let orderDetails = `*📝 طلب جديد من مطعم لانو باستا*\n\n`;
    orderDetails += `*نوع الطلب:* ${
        orderType === "dinein"
            ? "محلي (داخل المطعم)"
            : "سفري (Takeaway)"
    }\n`;

    if (tableNumber) {
        orderDetails += `*رقم الطاولة:* ${tableNumber}\n`;
    }
    orderDetails += `*الاسم:* ${name}\n`;
    orderDetails += `*الجوال:* ${phone}\n`;
    orderDetails += `*الملاحظات:* ${notes || "لا يوجد"}\n`;
    orderDetails += `--------------------------------------\n`;
    orderDetails += `*الطلبات:*\n`;

    cart.forEach((item, index) => {
        orderDetails += `*${index + 1}.* (${item.quantity}x) *${
            item.name
        }* (${(item.unitPrice * item.quantity).toFixed(2)} ر.س)\n`;
        if (item.modifiers.length > 0) {
            orderDetails += `   - التعديلات: ${item.modifiers
                .map(
                    (m) =>
                        m.name +
                        (m.price > 0
                            ? ` (+${m.price.toFixed(2)} ر.س)`
                            : "")
                )
                .join("، ")}\n`;
        }
    });

    orderDetails += `--------------------------------------\n`;
    orderDetails += `*الإجمالي النهائي:* *${total} ر.س*\n\n`;
    orderDetails += `_شكراً لاختياركم لانو نها باستا!_`;

    const whatsappNumber = "966582003125";
    const encodedOrder = encodeURIComponent(orderDetails);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedOrder}`;

    window.open(whatsappUrl, "_blank");

    statusMessage.textContent = "✅ تم فتح رابط الواتساب لإرسال الطلب!";
    statusMessage.className = "success";
    statusMessage.style.display = "block";
};

// =========================================================
// 10. تشغيل الوظائف عند تحميل الصفحة
// =========================================================
window.onload = function () {
    window.renderMenu();
    window.renderRecommender();
    window.renderCart();
    window.handleOrderTypeChange();

    window.openModifierPopup = openModifierPopup;
    window.calculatePopupTotal = calculatePopupTotal;
};

