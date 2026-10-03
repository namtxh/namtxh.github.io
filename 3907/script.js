const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const navLinks = document.querySelectorAll(".nav-link");
const languageToggle = document.getElementById("languageToggle");
const DISCORD_INVITE = "https://discord.gg/UK9xrSb6VE";

const discordInvite = document.getElementById("discordInvite");
if (discordInvite && DISCORD_INVITE) {
    discordInvite.href = DISCORD_INVITE;
    discordInvite.removeAttribute("aria-disabled");
}

const translations = {
    "GENERAL RULES": "QUY ĐỊNH CHUNG",
    "General Rules": "Quy định chung",
    "Rules": "Quy định",
    "Barbarian Forts": "Pháo đài man rợ",
    "Weekly Limit": "Giới hạn hàng tuần",
    "70 / WEEK": "70 / TUẦN",
    "Barbarian Forts per week.": "Pháo đài man rợ mỗi tuần.",
    "Daily Limit": "Giới hạn hàng ngày",
    "10 / DAY": "10 / NGÀY",
    "Maximum 10 Barbarian Forts per day.": "Tối đa 10 Pháo đài man rợ mỗi ngày.",
    "Rally System": "Hệ thống tập hợp",
    "1 + 1": "1 + 1",
    "One governor starts the rally and one additional governor joins that rally.": "1 Thống đốc bắt đầu tập hợp và 1 Thống đốc khác tham gia tập hợp đó.",
    "The 1+1 system helps maximize rewards and increases the speed of Crystal Chest collection for the alliance.": "Hệ thống 1+1 giúp tối đa hóa phần thưởng và tăng tốc độ thu thập Rương Pha Lê cho liên minh.",
    "Weekly Rewards": "Phần thưởng hàng tuần",
    "At the beginning of each week, the top governors who rallied the most Barbarian Forts during the previous week receive rewards in the form of Trophies and/or RSS.": "Vào đầu mỗi tuần, các Thống đốc tập hợp nhiều Pháo đài man rợ nhất trong tuần trước sẽ nhận phần thưởng là Cúp và/hoặc RSS.",
    "KINGDOM COMMUNITY": "CỘNG ĐỒNG VƯƠNG QUỐC",
    "Kingdom Discord": "Discord Vương quốc",
    "Join the official Kingdom 3907 Discord server for Kingdom announcements, coordination, events, and community communication.": "Tham gia máy chủ Discord chính thức của Vương quốc 3907 để nhận thông báo, phối hợp, cập nhật sự kiện và giao lưu cộng đồng.",
    "JOIN OUR DISCORD": "THAM GIA DISCORD",
    "KINGDOM EVENTS": "SỰ KIỆN VƯƠNG QUỐC",
    "MGE Regulations": "Thể lệ MGE",
    "20 Golden Heads": "Sự kiện 20 Trọc",
    "Ark of Osiris": "Chiếc rương thần của Osiris",
    "Other Kingdom Events": "Sự kiện khác của Vương quốc",
    "Alliance Mobilization": "Tổng động viên liên minh",
    "Fighting Rules": "Quy định chiến đấu",
    "Rally & Garrison": "Tập hợp & Đồn trú",
    "Acclaim": "Điểm chiến công",
    "Insufficient DKP": "Không đủ DKP",
    "Conduct & Diplomacy": "Ứng xử & Ngoại giao",
    "Vacation Permit": "Giấy nghỉ phép KvK",
    "Kingdom Codex": "Cẩm nang Vương quốc",
    "Official rules, regulations and policies governing Kingdom 3907.": "Các quy tắc, quy định và chính sách chính thức của Vương quốc 3907.",
    "READ THE CODEX": "XEM CẨM NANG",
    "START QUIZ": "BẮT ĐẦU KIỂM TRA",
    "FOUNDATION": "NỀN TẢNG",
    "Respect All Governors": "Tôn trọng mọi Thống đốc",
    "All governors must treat other members of the Kingdom with respect. Harassment, insults, threats, or toxic behavior are not permitted.": "Mọi Thống đốc phải tôn trọng các thành viên khác trong Vương quốc. Không được quấy rối, xúc phạm, đe dọa hoặc có hành vi độc hại.",
    "No Unauthorized Attacks": "Không tự ý tấn công",
    "Attacking governors, cities, or alliances within the Kingdom without authorization is prohibited.": "Nghiêm cấm tấn công Thống đốc, thành phố hoặc liên minh trong Vương quốc khi chưa được cho phép.",
    "Follow Kingdom Decisions": "Tuân thủ quyết định của Vương quốc",
    "All governors must follow official Kingdom rules, announcements, and agreements.": "Mọi Thống đốc phải tuân thủ quy tắc, thông báo và thỏa thuận chính thức của Vương quốc.",
    "No Intentional Harm": "Không cố ý gây tổn hại",
    "Governors must not intentionally take actions that harm the Kingdom, its alliances, or its members.": "Thống đốc không được cố ý thực hiện hành động gây tổn hại cho Vương quốc, các liên minh hoặc thành viên.",
    "Respect Kingdom Events": "Tôn trọng các sự kiện của Vương quốc",
    "Governors must follow the rules established for Kingdom events and activities.": "Thống đốc phải tuân thủ quy định của các sự kiện và hoạt động trong Vương quốc.",
    "Cooperate with the Kingdom": "Hợp tác vì Vương quốc",
    "Governors are expected to cooperate with other members when Kingdom-wide coordination is required.": "Thống đốc cần phối hợp với các thành viên khác khi Vương quốc cần sự điều phối chung.",
    "Ignorance Is Not an Excuse": "Không biết luật không phải lý do miễn trừ",
    "All governors are responsible for reading and understanding the current Kingdom rules.": "Mọi Thống đốc có trách nhiệm đọc và hiểu các quy tắc hiện hành của Vương quốc.",
    "Sunset Canyon": "Sunset Canyon",
    "Do not attack the same governor more than twice in one day in Sunset Canyon. If reported, you must pay 10M Gold to the governor who was attacked.": "Không được tấn công cùng một Thống đốc quá hai lần trong một ngày ở Sunset Canyon. Nếu bị tố cáo, bạn phải chuyển 10 triệu Vàng cho Thống đốc bị tấn công.",
    "ACTIVITIES": "HOẠT ĐỘNG",
    "Kingdom Events": "Sự kiện Vương quốc",
    "Required Score": "Điểm yêu cầu",
    "Message an R4 to request promotion to R3.": "Nhắn tin cho R4 để đề nghị thăng lên R3.",
    "You must reach the score requirement set for the event.": "Bạn phải đạt mức điểm yêu cầu được đặt ra cho sự kiện.",
    "Registering with one farm does not increase your required score. Each farm from the second farm onward adds 500 required points.": "Đăng ký cùng một farm không làm tăng điểm yêu cầu. Từ farm thứ hai trở đi, mỗi farm cộng thêm 500 điểm yêu cầu.",
    "For example, a 2,000-point requirement stays at 2,000 with one farm; each additional farm adds 500 points.": "Ví dụ, yêu cầu 2.000 điểm vẫn là 2.000 khi đăng ký cùng một farm; mỗi farm bổ sung tiếp theo cộng thêm 500 điểm.",
    "You will be fined 100,000 Gold for every point below the required score.": "Bạn sẽ bị phạt 100.000 Vàng cho mỗi điểm còn thiếu so với mức yêu cầu.",
    "Top 1-3": "Hạng 1-3",
    "Reserved for designated rally and garrison leaders.": "Dành cho các chỉ huy Tập hợp và Đồn trú được chỉ định.",
    "Top 4-15": "Hạng 4-15",
    "Allocated according to DKP ranking from the most recent KvK.": "Phân bổ theo xếp hạng DKP của KvK gần nhất.",
    "Registration": "Đăng ký",
    "An MGE registration letter will be sent around the middle of the week before MGE.": "Thư đăng ký MGE sẽ được gửi vào khoảng giữa tuần trước khi MGE bắt đầu.",
    "Reply to the MGE mail with this format: \"Commander, Top wanted\"": "Trả lời thư MGE theo định dạng: \"Tướng, Hạng mong muốn\"",
    "For example: Gorgo, Top 4": "Ví dụ: Gorgo, Hạng 4",
    "Selection": "Xét chọn",
    "When multiple governors request the same position, DKP takes priority.": "Nếu nhiều Thống đốc đăng ký cùng một thứ hạng, DKP sẽ được ưu tiên.",
    "Score Cap": "Giới hạn điểm",
    "The Kingdom-wide MGE cap is": "Giới hạn MGE toàn Vương quốc là",
    "6M points": "6 triệu điểm",
    "Penalty": "Hình phạt",
    "100 Gold": "100 Vàng",
    "per point above the 6M cap.": "cho mỗi điểm vượt giới hạn 6 triệu.",
    "Resource Exchange": "Quy đổi tài nguyên",
    "Food, Wood, Stone, or Gold at a ratio of": "Ngô, Gỗ, Đá hoặc Vàng theo tỷ lệ",
    "FFA MGE": "MGE tự do (FFA)",
    "If MGE KE or Final Day falls on a designated war day during KvK, MGE becomes FFA.": "Nếu ngày MGE KE hoặc ngày cuối trùng với ngày chiến tranh được chỉ định trong KvK, MGE sẽ chuyển thành FFA.",
    "20 Golden Heads Events": "Sự kiện 20 Đầu Vàng",
    "FFA": "Tự do (FFA)",
    "The event is Free For All.": "Sự kiện này mở tự do cho tất cả mọi người.",
    "No Farm Accounts": "Không dùng tài khoản phụ",
    "Farm accounts may not be used to intentionally secure a higher ranking. Violators will be zeroed.": "Không được dùng tài khoản phụ để cố ý giành thứ hạng cao hơn. Người vi phạm sẽ bị zero.",
    "Acclaim Requirement": "Yêu cầu Acclaim",
    "Governors with less than": "Thống đốc có ít hơn",
    "1.5M Acclaim Points": "1,5 triệu điểm Acclaim",
    "may only compete for Top 5 or lower.": "chỉ được tranh hạng 5 trở xuống.",
    "Purpose": "Mục đích",
    "Priority for the highest rankings is given to governors who actively contribute to Kingdom warfare.": "Ưu tiên thứ hạng cao cho các Thống đốc tích cực đóng góp trong chiến tranh của Vương quốc.",
    "Schedule": "Lịch trình",
    "Team 1:": "Đội 1:",
    "Saturday 14:00 UTC": "Thứ Bảy 14:00 UTC",
    "Team 2:": "Đội 2:",
    "Saturday 20:00 UTC": "Thứ Bảy 20:00 UTC",
    "Register by Thursday 17:00 UTC by replying to the official registration mail.": "Đăng ký trước 17:00 UTC thứ Năm bằng cách trả lời thư đăng ký chính thức.",
    "No-Show": "Vắng mặt",
    "Governors who sign up but do not play will be subject to an RSS penalty.": "Thống đốc đã đăng ký nhưng không tham gia sẽ bị phạt tài nguyên (RSS).",
    "200M Food / 200M Wood / 150M Stone / 80M Gold. Missing two matches in a row doubles the penalty.": "200 triệu Ngô / 200 triệu Gỗ / 150 triệu Đá / 80 triệu Vàng. Vắng mặt hai trận liên tiếp sẽ bị phạt gấp đôi.",
    "Alternative": "Phương án thay thế",
    "Governors may play AoO in another alliance or participate in Silver instead.": "Thống đốc có thể tham gia AoO ở liên minh khác hoặc chọn giải Silver.",
    "Participation": "Tham gia",
    "Governors should join the Kingdom's Baulur group to participate together. Contact Yuki to join the group.": "Thống đốc nên tham gia nhóm Baulur của Vương quốc để cùng hoạt động. Liên hệ Yuki để được thêm vào nhóm.",
    "Never Attack Baulur Alone": "Không bao giờ đánh Baulur một mình",
    "Always participate with the designated group.": "Luôn tham gia cùng nhóm được chỉ định.",
    "Silk Road, Karuak, Shadow Legion, and other Kingdom events.": "Con đường Tơ lụa, Karuak, Quân đoàn Bóng tối và các sự kiện khác của Vương quốc.",
    "Generally held between 14:00 and 15:00 UTC, unless otherwise announced.": "Thường diễn ra trong khoảng 14:00-15:00 UTC, trừ khi có thông báo khác.",
    "Governors are encouraged to participate and contribute to the Kingdom when possible.": "Thống đốc được khuyến khích tham gia và đóng góp cho Vương quốc khi có thể.",
    "Event Rules": "Quy định sự kiện",
    "Governors must follow any specific rules or instructions announced for each event.": "Thống đốc phải tuân thủ các quy tắc hoặc hướng dẫn riêng được thông báo cho từng sự kiện.",
    "Event Changes": "Điều chỉnh sự kiện",
    "Kingdom Leadership may introduce temporary rules or restrictions when required.": "Ban lãnh đạo Vương quốc có thể đưa ra quy tắc hoặc hạn chế tạm thời khi cần.",
    "WAR": "CHIẾN TRANH",
    "DKP CALCULATION": "CÁCH TÍNH DKP",
    "T4 Kills × 10 + T5 Kills × 30 + T4 Deaths × 40 + T5 Deaths × 80": "Lính T4 tiêu diệt × 10 + Lính T5 tiêu diệt × 30 + Lính T4 tử trận × 40 + Lính T5 tử trận × 80",
    "Eligible Battles": "Trận chiến được tính",
    "DKP is counted from battles involving Lv. 4 Passes, Altar of Darkness, Lv. 7 Passes, and Kingsland.": "DKP được tính từ các trận chiến tại Cửa ải cấp 4, Bàn thờ Bóng tối, Cửa ải cấp 7 và Kingsland.",
    "Requirement": "Yêu cầu",
    "All": "Mọi",
    "CH25 governors": "Thống đốc CH25",
    "are required to meet the Kingdom's DKP requirement.": "đều phải đạt yêu cầu DKP của Vương quốc.",
    "Farm Accounts": "Tài khoản phụ",
    "DKP from CH25 farm accounts will be combined with the owner's main account.": "DKP từ tài khoản phụ CH25 sẽ được cộng vào tài khoản chính của chủ tài khoản.",
    "War Participation": "Tham gia chiến tranh",
    "Governors are encouraged to fight in balls and actively reinforce rallies and garrisons.": "Thống đốc được khuyến khích chiến đấu theo đội hình tập trung và tích cực tiếp viện cho các đợt Tập hợp, Đồn trú.",
    "Markers": "Đánh dấu",
    "All governors must follow assigned markers at all times during KvK.": "Mọi Thống đốc phải luôn tuân theo các dấu đánh được chỉ định trong suốt KvK.",
    "Assignment": "Phân công",
    "Only governors specifically assigned to rally or garrison are permitted to lead rallies or garrisons.": "Chỉ Thống đốc được phân công mới được phép chỉ huy Tập hợp hoặc Đồn trú.",
    "Benefits": "Quyền lợi",
    "Higher Acclaim Points provide greater Kingdom benefits.": "Điểm Acclaim càng cao thì quyền lợi trong Vương quốc càng lớn.",
    "End-of-KvK Penalty": "Phạt cuối KvK",
    "Governors who fail to meet their required DKP will be subject to a penalty at the end of KvK.": "Thống đốc không đạt DKP yêu cầu sẽ bị phạt vào cuối KvK.",
    "Penalty Calculation": "Cách tính hình phạt",
    "The penalty is based on the amount of resources estimated to have been required to reach the governor's required DKP.": "Mức phạt dựa trên lượng tài nguyên ước tính cần thiết để đạt mức DKP yêu cầu.",
    "Trade Ratio": "Tỷ lệ trao đổi",
    "The required resources are calculated using a": "Lượng tài nguyên cần nộp được tính theo",
    "1:1 trade ratio with the enemy": "tỷ lệ trao đổi 1:1 với đối phương",
    "Respect": "Tôn trọng",
    "Governors must remain respectful and civil in LKC, including toward enemy Kingdoms.": "Thống đốc phải giữ thái độ tôn trọng, lịch sự trong LKC, kể cả với các Vương quốc đối địch.",
    "Diplomacy": "Ngoại giao",
    "Maintaining good relations with enemy Kingdoms is important, as diplomacy may be required for rewards and other arrangements after KvK.": "Duy trì quan hệ tốt với các Vương quốc đối địch rất quan trọng vì có thể cần ngoại giao để thống nhất phần thưởng và các thỏa thuận sau KvK.",
    "Application": "Đăng ký",
    "Governors who wish to take a break for the next KvK may request a": "Thống đốc muốn nghỉ trong KvK tiếp theo có thể xin",
    "Exemption": "Miễn trừ",
    "Governors with an approved Vacation Permit are exempt from KvK participation and DKP requirements for that KvK.": "Thống đốc được duyệt Giấy phép nghỉ sẽ được miễn tham gia KvK và yêu cầu DKP trong KvK đó.",
    "Zone Restriction": "Giới hạn khu vực",
    "Governors with a Vacation Permit must remain in": "Thống đốc có Giấy phép nghỉ phải ở",
    "Zone 4 for the entire duration of the KvK": "Khu 4 trong toàn bộ thời gian KvK",
    ", as required by the game's Vacation Permit system.": ", theo yêu cầu của hệ thống Giấy phép nghỉ trong trò chơi.",
    "RSS PRICING": "GIÁ RSS",
    "TRADING": "GIAO DỊCH",
    "RSS Pricing": "Giá RSS",
    "Resources Price": "Giá tài nguyên",
    "Seller Price Cap": "Giá tối đa cho người bán",
    "The maximum price for 1B each of Food, Wood, Stone, and Gold is $30. This equals": "Giá tối đa cho 1B mỗi loại Ngô, Gỗ, Đá và Vàng là $30. Mức này tương đương",
    "$0.60 per 100M Food, Wood, or Stone": "$0.60 cho mỗi 100M Ngô, Gỗ hoặc Đá",
    "and": "và",
    "$1.20 per 100M Gold": "$1.20 cho mỗi 100M Vàng",
    "Sellers may charge less, but never more. Sellers reported for charging above this rate will be zeroed and banned from trading in 3907.": "Người bán có thể bán rẻ hơn nhưng tuyệt đối không được bán cao hơn. Người bán bị tố cáo vì bán vượt mức giá này sẽ bị zero và cấm buôn bán tại 3907.",
    "Seller Transaction": "Quy trình dành cho người bán",
    "Send the RSS first, then receive payment. If you have sent the RSS and the buyer does not pay, report it to Kingdom Leadership.": "Hãy gửi RSS trước rồi mới nhận tiền. Nếu bạn đã gửi RSS mà người mua không thanh toán, hãy báo ngay cho Ban lãnh đạo Vương quốc.",
    "Buyer Rules": "Quy định dành cho người mua",
    "If a seller asks for more than Kingdom prices, report it to Kingdom Leadership immediately. We recommend Wise because it has lower fees and transfers faster than PayPal.": "Nếu người bán yêu cầu giá cao hơn giá của Vương quốc, hãy báo ngay cho Ban lãnh đạo. Khuyến nghị dùng Wise vì phí thấp hơn PayPal và chuyển tiền nhanh hơn.",
    "Receive the full amount of RSS before paying. If you do not pay after receiving RSS and the seller reports you, you will be zeroed.": "Hãy nhận đủ RSS rồi mới thanh toán. Nếu đã nhận RSS mà không trả tiền và bị người bán tố cáo, bạn sẽ bị zero.",
    "Kingdom 3907": "Vương quốc 3907",
    "Official Kingdom Rules & Regulations": "Quy tắc & Quy định chính thức của Vương quốc"
};

const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
const pageTextNodes = [];
let textNode;

while ((textNode = textWalker.nextNode())) {
    pageTextNodes.push({
        node: textNode,
        original: textNode.nodeValue
    });
}

function setLanguage(language) {
    const isVietnamese = language === "vi";

    pageTextNodes.forEach(({ node, original }) => {
        const text = original.trim().replace(/\s+/g, " ");
        const leadingSpace = original.match(/^\s*/)[0];
        const trailingSpace = original.match(/\s*$/)[0];
        const translation = isVietnamese ? translations[text] : null;

        node.nodeValue = translation
            ? `${leadingSpace}${translation}${trailingSpace}`
            : original;
    });

    document.documentElement.lang = language;
    if (document.body && document.body.dataset.page === "quiz") {
        document.title = isVietnamese ? "Bài Trắc Nghiệm Luật Vương Quốc 3907" : "Kingdom 3907 Rules Quiz";
    } else {
        document.title = isVietnamese ? "Cẩm nang Vương quốc - 3907" : "Kingdom Codex - 3907";
    }
    languageToggle.setAttribute("aria-checked", String(isVietnamese));
    languageToggle.setAttribute("aria-label", isVietnamese ? "Chuyển ngôn ngữ: Tiếng Việt" : "Switch language: English");
    updateMenuButton();

    try {
        localStorage.setItem("kingdom-language", language);
    } catch {}
}

languageToggle.addEventListener("click", () => {
    setLanguage(document.documentElement.lang === "vi" ? "en" : "vi");
});

let savedLanguage = "en";
try {
    savedLanguage = localStorage.getItem("kingdom-language") || "en";
} catch {}
setLanguage(savedLanguage);


function updateMenuButton(isOpen = sidebar.classList.contains("open")) {
    const isVietnamese = document.documentElement.lang === "vi";

    menuBtn.classList.toggle("open", isOpen);
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.setAttribute("aria-label", isVietnamese
        ? (isOpen ? "Đóng menu điều hướng" : "Mở menu điều hướng")
        : (isOpen ? "Close navigation menu" : "Open navigation menu"));
}

function setMobileMenuOpen(isOpen) {
    sidebar.classList.toggle("open", isOpen);
    updateMenuButton(isOpen);
}

menuBtn.addEventListener("click", () => {
    setMobileMenuOpen(!sidebar.classList.contains("open"));
});


// Close mobile menu after clicking a link
navLinks.forEach(link => {
    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

        setMobileMenuOpen(false);
    });
});


// Highlight menu item while scrolling
const sections = document.querySelectorAll("section[id], .event-block[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
function toggleNavGroup(button) {
    const currentGroup = button.parentElement;

    document.querySelectorAll(".nav-group").forEach(group => {
        if (group !== currentGroup) {
            group.classList.remove("open");
        }
    });

    currentGroup.classList.toggle("open");
}

const QUIZ_STORAGE_KEY = "kingdom3907Quiz";
const rewardSystemConfig = {
    future: true,
    leadershipText: "Reward eligibility will be handled by Kingdom Leadership."
};

const QUIZ_UI_TEXT = {
    en: {
        pageTitle: "KINGDOM 3907\nRULES QUIZ",
        bestScore: "Best Score",
        attempts: "Attempts",
        status: "Status",
        passedStatus: "QUIZ PASSED",
        failedStatus: "QUIZ FAILED",
        notStarted: "NOT STARTED",
        howItWorks: "How It Works",
        practiceQuiz: "Practice Quiz",
        finalQuiz: "Final Quiz",
        readRules: "Read the Kingdom 3907 Rules.",
        practiceLearn: "Take the Practice Quiz to learn.",
        takeFinal: "Take the Final Quiz.",
        twentyQuestions: "Answer 20 questions.",
        passTarget: "Score at least 80% (16/20) to pass.",
        saved: "Your result is saved in your browser.",
        rewardLeadership: rewardSystemConfig.leadershipText,
        rewardConfirmed: "Reward eligibility confirmed.",
        claimReward: "Please follow the instructions from Kingdom Leadership to claim your reward.",
        startPractice: "START PRACTICE",
        startFinal: "START FINAL QUIZ",
        tryAgain: "TRY AGAIN",
        next: "NEXT",
        finish: "FINISH",
        reviewRules: "REVIEW RULES",
        tryAgainFinal: "TRY AGAIN",
        questionLabel: "Question",
        correct: "Correct",
        incorrect: "Incorrect",
        correctAnswer: "Correct answer",
        explanation: "Explanation",
        finalPass: "QUIZ PASSED",
        finalFail: "QUIZ NOT PASSED",
        score: "Score",
        accuracy: "Accuracy",
        congratulations: "Congratulations! You have passed the Kingdom 3907 Rules Quiz.",
        failure: "You did not pass. Review the Kingdom Rules and try again.",
        passDescription: "16/20 or higher = PASSED",
        failDescription: "15/20 or lower = FAILED",
        rewardNote: "Reward eligibility confirmed.",
        quizPassed: "✓ QUIZ PASSED",
        quizFailed: "✕ QUIZ FAILED",
        verificationCode: "Verification Code",
        completed: "Completed",
        rewardEligible: "Reward Eligible",
        rewardDetails: "50M Food OR 50M Wood OR 50M Stone",
        rewardInformation: "Eligibility is informational. Follow Kingdom Leadership instructions for reward review.",
        reviewAnswers: "Review Your Answers",
        yourAnswer: "Your Answer",
        needToPass: "You need 16/20 to pass.",
        perfectScore: "Perfect Score — 20/20",
        everyAnswerCorrect: "You answered every question correctly.",
        verificationInstruction: "Take a screenshot and send this code to Kingdom Leadership in-game for reward review.",
        practiceComplete: "Practice complete",
        practiceSummary: "Final score",
        finalReady: "Ready for the final challenge",
        rulesQuizLabel: "Kingdom 3907 Rules Quiz",
        chooseAnswer: "Choose an answer to continue.",
        selectedAnswer: "Selected answer",
        continue: "Continue",
        passingRequirement: "Passing requirement: 80% or higher"
    },
    vi: {
        pageTitle: "BÀI TRẮC NGHIỆM\nLUẬT VƯƠNG QUỐC 3907",
        bestScore: "Điểm cao nhất",
        attempts: "Lần làm",
        status: "Trạng thái",
        passedStatus: "ĐÃ ĐẠT",
        failedStatus: "CHƯA ĐẠT",
        notStarted: "CHƯA BẮT ĐẦU",
        howItWorks: "Cách thức hoạt động",
        practiceQuiz: "Làm bài thực hành",
        finalQuiz: "Bài thi cuối cùng",
        readRules: "Đọc các Quy định của Vương quốc 3907.",
        practiceLearn: "Làm bài thực hành để học.",
        takeFinal: "Làm bài thi cuối cùng.",
        twentyQuestions: "Trả lời 20 câu hỏi.",
        passTarget: "Đạt ít nhất 80% (16/20) để qua.",
        saved: "Kết quả của bạn được lưu trong trình duyệt.",
        rewardLeadership: "Quyền nhận thưởng sẽ do Ban lãnh đạo Vương quốc quyết định.",
        rewardConfirmed: "Quyền nhận thưởng đã được xác nhận.",
        claimReward: "Hãy làm theo hướng dẫn từ Ban lãnh đạo Vương quốc để nhận thưởng.",
        startPractice: "BẮT ĐẦU THỰC HÀNH",
        startFinal: "BẮT ĐẦU BÀI THI CUỐI",
        tryAgain: "THỬ LẠI",
        next: "TIẾP THEO",
        finish: "HOÀN THÀNH",
        reviewRules: "XEM LẠI LUẬT",
        tryAgainFinal: "THỬ LẠI",
        questionLabel: "Câu",
        correct: "Đúng",
        incorrect: "Sai",
        correctAnswer: "Đáp án đúng",
        explanation: "Giải thích",
        finalPass: "ĐÃ ĐẠT",
        finalFail: "KHÔNG ĐẠT",
        score: "Điểm",
        accuracy: "Độ chính xác",
        congratulations: "Chúc mừng! Bạn đã vượt qua Bài trắc nghiệm Luật Vương quốc 3907.",
        failure: "Bạn chưa đạt. Hãy xem lại các quy tắc của Vương quốc và thử lại.",
        passDescription: "16/20 hoặc cao hơn = ĐẠT",
        failDescription: "15/20 hoặc thấp hơn = KHÔNG ĐẠT",
        rewardNote: "Quyền nhận thưởng đã được xác nhận.",
        quizPassed: "✓ ĐÃ ĐẠT",
        quizFailed: "✕ CHƯA ĐẠT",
        verificationCode: "Mã xác minh",
        completed: "Hoàn thành",
        rewardEligible: "Đủ điều kiện nhận thưởng",
        rewardDetails: "50M Ngô HOẶC 50M Gỗ HOẶC 50M Đá",
        rewardInformation: "Thông tin đủ điều kiện chỉ mang tính tham khảo. Hãy làm theo hướng dẫn của Ban lãnh đạo Vương quốc để xét thưởng.",
        reviewAnswers: "Xem lại câu trả lời",
        yourAnswer: "Câu trả lời của bạn",
        needToPass: "Bạn cần đạt 16/20 để vượt qua.",
        perfectScore: "Điểm tuyệt đối — 20/20",
        everyAnswerCorrect: "Bạn đã trả lời đúng tất cả các câu hỏi.",
        verificationInstruction: "Chụp màn hình và gửi mã này cho Ban lãnh đạo trong game để xét thưởng.",
        practiceComplete: "Hoàn tất bài thực hành",
        practiceSummary: "Điểm cuối cùng",
        finalReady: "Sẵn sàng cho thử thách cuối cùng",
        rulesQuizLabel: "Bài Trắc Nghiệm Luật Vương Quốc 3907",
        chooseAnswer: "Chọn một đáp án để tiếp tục.",
        selectedAnswer: "Đáp án đã chọn",
        continue: "Tiếp tục",
        passingRequirement: "Yêu cầu đạt: 80% hoặc cao hơn"
    }
};

const QUIZ_CATEGORIES = {
    "GENERAL RULES": { en: "General Rules", vi: "Quy định chung" },
    "KINGDOM EVENTS": { en: "Kingdom Events", vi: "Sự kiện Vương quốc" },
    "KVK": { en: "KVK", vi: "KVK" }
};

const QUESTION_BANK = [
    {
        category: "GENERAL RULES",
        question: {
            en: "Which rule requires governors to treat other members of the Kingdom with respect?",
            vi: "Quy tắc nào yêu cầu Thống đốc phải tôn trọng các thành viên khác trong Vương quốc?"
        },
        answers: [
            { en: "Respect All Governors", vi: "Tôn trọng mọi Thống đốc" },
            { en: "No Unauthorized Attacks", vi: "Không tự ý tấn công" },
            { en: "Follow Kingdom Decisions", vi: "Tuân thủ quyết định của Vương quốc" },
            { en: "Sunset Canyon Rule", vi: "Quy tắc Sunset Canyon" }
        ],
        correct: 0,
        explanation: {
            en: "The first general rule states that all governors must treat others in the Kingdom with respect.",
            vi: "Quy tắc chung đầu tiên nêu rõ mọi Thống đốc phải tôn trọng những người khác trong Vương quốc."
        }
    },
    {
        category: "GENERAL RULES",
        question: {
            en: "What is prohibited without authorization?",
            vi: "Điều gì bị cấm nếu không có sự cho phép?"
        },
        answers: [
            { en: "Trading kills with enemy kingdoms", vi: "Trao đổi kill với các Vương quốc địch" },
            { en: "Attacking governors, cities, or alliances inside the Kingdom", vi: "Tấn công Thống đốc, thành phố hoặc liên minh trong Vương quốc" },
            { en: "Taking a vacation permit", vi: "Xin Giấy phép nghỉ" },
            { en: "Registering for an event", vi: "Đăng ký sự kiện" }
        ],
        correct: 1,
        explanation: {
            en: "The Kingdom prohibits unauthorized attacks on governors, cities, or alliances within the Kingdom.",
            vi: "Vương quốc cấm tấn công Thống đốc, thành phố hoặc liên minh trong Vương quốc khi chưa được phép."
        }
    },
    {
        category: "GENERAL RULES",
        question: {
            en: "Which principle says ignorance of the rules is not an excuse?",
            vi: "Nguyên tắc nào nói rằng không biết luật không phải là lý do miễn trừ?"
        },
        answers: [
            { en: "Cooperate with the Kingdom", vi: "Hợp tác vì Vương quốc" },
            { en: "No Intentional Harm", vi: "Không cố ý gây tổn hại" },
            { en: "Ignorance Is Not an Excuse", vi: "Không biết luật không phải lý do miễn trừ" },
            { en: "Respect Kingdom Events", vi: "Tôn trọng các sự kiện của Vương quốc" }
        ],
        correct: 2,
        explanation: {
            en: "All governors are responsible for reading and understanding the current Kingdom rules.",
            vi: "Mọi Thống đốc có trách nhiệm đọc và hiểu các quy tắc hiện hành của Vương quốc."
        }
    },
    {
        category: "GENERAL RULES",
        question: {
            en: "How many times can a governor attack the same governor in one day in Sunset Canyon before violating the rule?",
            vi: "Trong một ngày ở Hẻm núi hoàng hôn, một Thống đốc có thể tấn công cùng một Thống đốc tối đa bao nhiêu lần trước khi vi phạm quy tắc?"
        },
        answers: [
            { en: "Once", vi: "Một lần" },
            { en: "Twice", vi: "Hai lần" },
            { en: "Three times", vi: "Ba lần" },
            { en: "Unlimited times", vi: "Không giới hạn" }
        ],
        correct: 1,
        explanation: {
            en: "A governor may not attack the same governor more than 2 times within the same day.",
            vi: "Một Thống đốc không được tấn công cùng một Thống đốc quá 2 lần trong một ngày."
        }
    },
    {
        category: "GENERAL RULES",
        question: {
            en: "What is the penalty for violating the Sunset Canyon rule after a confirmed report?",
            vi: "Nếu vi phạm quy tắc Sunset Canyon và bị xác nhận, hình phạt là gì?"
        },
        answers: [
            { en: "10,000,000 Gold to the attacked governor", vi: "10.000.000 Vàng cho Thống đốc bị tấn công" },
            { en: "5,000,000 Gold to the attacked governor", vi: "5.000.000 Vàng cho Thống đốc bị tấn công" },
            { en: "An RSS penalty", vi: "Phạt RSS" },
            { en: "10,000,000 Gold to the Kingdom", vi: "10.000.000 Vàng cho Vương quốc" }
        ],
        correct: 0,
        explanation: {
            en: "If a governor is reported and the violation is confirmed, the offender must pay 10,000,000 Gold to the governor who was attacked.",
            vi: "Nếu Thống đốc bị tố cáo và vi phạm được xác nhận, người vi phạm phải trả 10.000.000 Vàng cho Thống đốc bị tấn công."
        }
    },
    {
        category: "KINGDOM EVENTS",
        question: {
            en: "Which MGE positions are reserved for designated rally and garrison leaders?",
            vi: "Những vị trí MGE nào được dành riêng cho các chỉ huy tập hợp và đồn trú được chỉ định?"
        },
        answers: [
            { en: "Top 1–3", vi: "Hạng 1–3" },
            { en: "Top 4–15", vi: "Hạng 4–15" },
            { en: "Top 16–20", vi: "Hạng 16–20" },
            { en: "All ranks", vi: "Tất cả hạng" }
        ],
        correct: 0,
        explanation: {
            en: "Top 1–3 are reserved for designated rally and garrison leaders.",
            vi: "Hạng 1–3 được dành riêng cho các chỉ huy tập hợp và đồn trú được chỉ định."
        }
    },
    {
        category: "KINGDOM EVENTS",
        question: {
            en: "How are Top 4–15 MGE positions assigned?",
            vi: "Cách phân bổ các vị trí MGE từ Hạng 4–15 là gì?"
        },
        answers: [
            { en: "Random draw", vi: "Rút thăm ngẫu nhiên" },
            { en: "By DKP ranking from the most recent KvK", vi: "Theo xếp hạng DKP của KvK gần nhất" },
            { en: "By acclaim only", vi: "Chỉ theo acclaim" },
            { en: "By equipment only", vi: "Chỉ theo trang bị" }
        ],
        correct: 1,
        explanation: {
            en: "Top 4–15 are allocated according to DKP ranking from the most recent KvK.",
            vi: "Hạng 4–15 được phân bổ theo xếp hạng DKP của KvK gần nhất."
        }
    },
    {
        category: "KINGDOM EVENTS",
        question: {
            en: "When multiple governors request the same position in MGE, which factor takes priority?",
            vi: "Khi nhiều Thống đốc cùng xin một vị trí trong MGE, yếu tố nào được ưu tiên?"
        },
        answers: [
            { en: "Acclaim", vi: "Điểm chiến công" },
            { en: "Alliance strength", vi: "Sức mạnh liên minh" },
            { en: "DKP", vi: "DKP" },
            { en: "First to register", vi: "Ai đăng ký sớm hơn" }
        ],
        correct: 2,
        explanation: {
            en: "When multiple governors request the same position, DKP takes priority.",
            vi: "Khi nhiều Thống đốc cùng xin một vị trí, DKP được ưu tiên."
        }
    },
    {
        category: "KINGDOM EVENTS",
        question: {
            en: "What is the Kingdom-wide MGE score cap?",
            vi: "Giới hạn điểm MGE toàn Vương quốc là bao nhiêu?"
        },
        answers: [
            { en: "10,000,000", vi: "10.000.000" },
            { en: "5,000,000", vi: "5.000.000" },
            { en: "6,000,000", vi: "6.000.000" },
            { en: "8,000,000", vi: "8.000.000" }
        ],
        correct: 2,
        explanation: {
            en: "The Kingdom-wide MGE cap is 6M points.",
            vi: "Giới hạn điểm MGE toàn Vương quốc là 6 triệu điểm."
        }
    },
    {
        category: "KINGDOM EVENTS",
        question: {
            en: "How much is the penalty for each point above the 6M cap?",
            vi: "Mỗi 1 điểm vượt quá giới hạn 6 triệu bị phạt bao nhiêu?"
        },
        answers: [
            { en: "10 Gold", vi: "10 Vàng" },
            { en: "50 Gold", vi: "50 Vàng" },
            { en: "100 Gold", vi: "100 Vàng" },
            { en: "1,000 Gold", vi: "1.000 Vàng" }
        ],
        correct: 2,
        explanation: {
            en: "Each point above the 6M cap is subject to a penalty of 100 Gold.",
            vi: "Mỗi điểm vượt quá giới hạn 6 triệu sẽ bị phạt 100 Vàng."
        }
    },
    {
        category: "KINGDOM EVENTS",
        question: {
            en: "What is the resource exchange ratio for paying MGE penalties?",
            vi: "Tỷ lệ quy đổi tài nguyên khi trả phạt MGE là bao nhiêu?"
        },
        answers: [
            { en: "2 : 2 : 1.5 : 1 for Food, Wood, Stone, Gold", vi: "2 : 2 : 1,5 : 1 cho Ngô, Gỗ, Đá, Vàng" },
            { en: "1 : 1 : 1 : 1 for Food, Wood, Stone, Gold", vi: "1 : 1 : 1 : 1 cho Ngô, Gỗ, Đá, Vàng" },
            { en: "2 : 2 : 2 : 2 for Food, Wood, Stone, Gold", vi: "2 : 2 : 2 : 2 cho Ngô, Gỗ, Đá, Vàng" },
            { en: "2 : 2 : 2 : 1 for Food, Wood, Stone, Gold", vi: "2 : 2 : 2 : 1 cho Ngô, Gỗ, Đá, Vàng" }
        ],
        correct: 0,
        explanation: {
            en: "The penalty may be paid using Food, Wood, Stone, or Gold at a ratio of 2 : 2 : 1.5 : 1.",
            vi: "Phạt có thể được thanh toán bằng Ngô, Gỗ, Đá hoặc Vàng theo tỷ lệ 2 : 2 : 1,5 : 1."
        }
    },
    {
        category: "KINGDOM EVENTS",
        question: {
            en: "When does an MGE become FFA?",
            vi: "MGE trở thành FFA khi nào?"
        },
        answers: [
            { en: "When it is off season", vi: "Khi không ở trong KvK" },
            { en: "When the MGE Kill Event or Final Day falls on a designated war day during KvK", vi: "Khi MGE KE hoặc ngày cuối trùng với ngày chiến tranh được chỉ định trong KvK" },
            { en: "When there are fewer than 10 participants", vi: "Khi số người tham gia ít hơn 10" },
            { en: "When 1.5M Acclaim is reached", vi: "Khi đạt 1,5 triệu Acclaim" }
        ],
        correct: 1,
        explanation: {
            en: "If the MGE Kill Event or Final Day falls on a designated war day during KvK, the MGE becomes FFA and the normal allocation rules do not apply.",
            vi: "Nếu MGE KE hoặc ngày cuối trùng với ngày chiến tranh được chỉ định trong KvK, MGE sẽ trở thành FFA và quy tắc phân bổ bình thường không còn áp dụng."
        }
    },
    {
        category: "KINGDOM EVENTS",
        question: {
            en: "Which statement is true about the 20 Golden Heads event?",
            vi: "Câu nào đúng về sự kiện 20 Golden Heads?"
        },
        answers: [
            { en: "It is a Free For All event", vi: "Đây là sự kiện Free For All" },
            { en: "Only Top 3 can compete", vi: "Chỉ Hạng 3 mới được thi đấu" },
            { en: "Only officers can participate", vi: "Chỉ thủ lĩnh mới được tham gia" },
            { en: "It only happens during KvK", vi: "Chỉ diễn ra trong KvK" }
        ],
        correct: 0,
        explanation: {
            en: "The 20 Golden Heads event is Free For All.",
            vi: "Sự kiện 20 Golden Heads là sự kiện Free For All."
        }
    },
    {
        category: "KINGDOM EVENTS",
        question: {
            en: "What is forbidden when using farm accounts in 20 Golden Heads?",
            vi: "Điều gì bị cấm khi dùng tài khoản phụ trong sự kiện 20 Golden Heads?"
        },
        answers: [
            { en: "Using any account at all", vi: "Dùng bất kỳ tài khoản nào" },
            { en: "Using farm accounts to intentionally secure a higher ranking", vi: "Dùng tài khoản phụ để cố ý giành thứ hạng cao hơn" },
            { en: "Using rallies", vi: "Dùng tập hợp" },
            { en: "Participating in all Kingdom events", vi: "Tham gia tất cả sự kiện của Vương quốc" }
        ],
        correct: 1,
        explanation: {
            en: "Farm accounts may not be used to intentionally secure a higher ranking. Violators will be zeroed.",
            vi: "Tài khoản phụ không được dùng để cố ý giành thứ hạng cao hơn. Người vi phạm sẽ bị zero."
        }
    },
    {
        category: "KINGDOM EVENTS",
        question: {
            en: "Who may not compete for Top 1–4 in 20 Golden Heads?",
            vi: "Ai không được thi đấu ở vị trí Top 1–4 trong sự kiện 20 Golden Heads?"
        },
        answers: [
            { en: "Governors with less than 1.5M Acclaim Points", vi: "Thống đốc có ít hơn 1,5 triệu điểm Acclaim" },
            { en: "Governors with a Vacation Permit", vi: "Thống đốc có Giấy phép nghỉ" },
            { en: "New governors only", vi: "Chỉ Thống đốc mới" },
            { en: "Governors with more than 1.5M Acclaim Points", vi: "Thống đốc có hơn 1,5 triệu điểm Acclaim" }
        ],
        correct: 0,
        explanation: {
            en: "Governors with less than 1.5M Acclaim Points may not compete for Top 1–4 and may only compete for Top 5 or below.",
            vi: "Thống đốc có ít hơn 1,5 triệu điểm Acclaim không được thi đấu ở Top 1–4 và chỉ được tranh ở Top 5 hoặc thấp hơn."
        }
    },
    {
        category: "KINGDOM EVENTS",
        question: {
            en: "Which AOO teams play on Saturday at 14:00 UTC and 20:00 UTC respectively?",
            vi: "Đội AOO nào thi đấu vào thứ Bảy lúc 14:00 UTC và 20:00 UTC?"
        },
        answers: [
            { en: "Team 1 and Team 2", vi: "Đội 1 và Đội 2" },
            { en: "Top 1 and Top 2", vi: "Hạng 1 và Hạng 2" },
            { en: "Kingdom and Alliance", vi: "Vương quốc và Liên minh" },
            { en: "Gold and Silver", vi: "Gold và Silver" }
        ],
        correct: 0,
        explanation: {
            en: "AOO Team 1 plays on Saturday at 14:00 UTC and Team 2 plays at 20:00 UTC.",
            vi: "Đội 1 AOO thi đấu vào thứ Bảy lúc 14:00 UTC và Đội 2 lúc 20:00 UTC."
        }
    },
    {
        category: "KINGDOM EVENTS",
        question: {
            en: "By what time must governors register for AOO?",
            vi: "Thống đốc phải đăng ký AOO trước mấy giờ?"
        },
        answers: [
            { en: "Thursday 17:00 UTC", vi: "Thứ Năm 17:00 UTC" },
            { en: "Friday 12:00 UTC", vi: "Thứ Sáu 12:00 UTC" },
            { en: "Saturday 14:00 UTC", vi: "Thứ Bảy 14:00 UTC" },
            { en: "Monday 09:00 UTC", vi: "Thứ Hai 09:00 UTC" }
        ],
        correct: 0,
        explanation: {
            en: "Governors must register by Thursday 17:00 UTC by replying to the official registration mail.",
            vi: "Thống đốc phải đăng ký trước 17:00 UTC thứ Năm bằng cách trả lời thư đăng ký chính thức."
        }
    },
    {
        category: "KINGDOM EVENTS",
        question: {
            en: "What happens if a governor signs up for AOO but does not play?",
            vi: "Điều gì xảy ra nếu Thống đốc đăng ký AOO nhưng không chơi?"
        },
        answers: [
            { en: "They gain DKP", vi: "Họ nhận thêm DKP" },
            { en: "They are subject to an RSS penalty before being allowed to play AOO again", vi: "Họ bị phạt RSS trước khi được phép chơi AOO lại" },
            { en: "They are automatically promoted", vi: "Họ được thăng cấp tự động" },
            { en: "They lose their Vacation Permit", vi: "Họ mất Giấy phép nghỉ" }
        ],
        correct: 1,
        explanation: {
            en: "If a governor signs up but does not play, they will be subject to an RSS penalty before being allowed to play AOO again.",
            vi: "Nếu Thống đốc đăng ký nhưng không chơi, họ sẽ bị phạt RSS trước khi được phép chơi AOO lại."
        }
    },
    {
        category: "KINGDOM EVENTS",
        question: {
            en: "What is the standard AOO penalty?",
            vi: "Mức phạt chuẩn của AOO là bao nhiêu?"
        },
        answers: [
            { en: "200M Food or 200M Wood or 150M Stone or 80M Gold", vi: "200 triệu Ngô hoặc 200 triệu Gỗ hoặc 150 triệu Đá hoặc 80 triệu Vàng" },
            { en: "500M Gold only", vi: "Chỉ 500 triệu Vàng" },
            { en: "100M Food only", vi: "Chỉ 100 triệu Ngô" },
            { en: "No penalty if you apologize", vi: "Không phạt nếu xin lỗi" }
        ],
        correct: 0,
        explanation: {
            en: "The standard penalty is 200M Food or 200M Wood or 150M Stone or 80M Gold. Missing two AOO matches in a row doubles the penalty.",
            vi: "Mức phạt chuẩn là 200 triệu Ngô hoặc 200 triệu Gỗ hoặc 150 triệu Đá hoặc 80 triệu Vàng. Vắng mặt hai trận liên tiếp sẽ làm phạt gấp đôi."
        }
    },
    {
        category: "KINGDOM EVENTS",
        question: {
            en: "What is a valid alternative to paying the AOO penalty?",
            vi: "Lựa chọn nào hợp lệ thay cho việc trả phạt AOO?"
        },
        answers: [
            { en: "Ignore the match completely", vi: "Bỏ qua trận đó hoàn toàn" },
            { en: "Play AOO in another alliance or participate in Silver instead", vi: "Chơi AOO ở liên minh khác hoặc tham gia Silver thay thế" },
            { en: "Skip Kingdom events for the month", vi: "Bỏ các sự kiện của Vương quốc trong tháng" },
            { en: "Wait until the next KvK", vi: "Chờ đến KvK tiếp theo" }
        ],
        correct: 1,
        explanation: {
            en: "Governors may choose not to pay the penalty and may play AOO in another alliance or participate in Silver instead, but they will not be allowed to play here until the penalty is paid.",
            vi: "Thống đốc có thể không trả phạt và có thể chơi AOO ở liên minh khác hoặc tham gia Silver thay thế, nhưng họ sẽ không được chơi ở đây cho đến khi phạt được trả."
        }
    },
    {
        category: "KINGDOM EVENTS",
        question: {
            en: "What is the correct rule for Baulur participation?",
            vi: "Quy tắc đúng khi tham gia Baulur là gì?"
        },
        answers: [
            { en: "Never attack Baulur alone", vi: "Không bao giờ tấn công Baulur một mình" },
            { en: "Only officers may join", vi: "Chỉ lãnh đạo mới được tham gia" },
            { en: "Never participate in Baulur at all", vi: "Không bao giờ tham gia Baulur" },
            { en: "Only join on war days", vi: "Chỉ tham gia vào các ngày chiến tranh" }
        ],
        correct: 0,
        explanation: {
            en: "The Baulur rule says to never attack Baulur alone and always participate with the designated group.",
            vi: "Quy tắc Baulur là không bao giờ tấn công Baulur một mình và luôn tham gia cùng nhóm được chỉ định."
        }
    },
    {
        category: "KINGDOM EVENTS",
        question: {
            en: "How are Kingdom events generally scheduled?",
            vi: "Các sự kiện của Vương quốc thường được lên lịch như thế nào?"
        },
        answers: [
            { en: "Between 14:00 and 15:00 UTC unless announced otherwise", vi: "Trong khoảng 14:00 đến 15:00 UTC trừ khi có thông báo khác" },
            { en: "Only after KvK", vi: "Chỉ sau KvK" },
            { en: "At 01:00 UTC daily", vi: "Mỗi ngày lúc 01:00 UTC" },
            { en: "Only on weekends", vi: "Chỉ vào ngày cuối tuần" }
        ],
        correct: 0,
        explanation: {
            en: "Kingdom events are generally held between 14:00 and 15:00 UTC, unless otherwise announced.",
            vi: "Các sự kiện của Vương quốc thường diễn ra giữa 14:00 và 15:00 UTC, trừ khi có thông báo khác."
        }
    },
    {
        category: "GENERAL RULES",
        question: {
            en: "What is the Kingdom's weekly requirement for Barbarian Forts?",
            vi: "Yêu cầu số lượng Pháo đài man rợ hàng tuần của Vương quốc là bao nhiêu?"
        },
        answers: [
            { en: "50 Barbarian Forts", vi: "50 Pháo đài Barbarian" },
            { en: "70 Barbarian Forts", vi: "70 Pháo đài Barbarian" },
            { en: "90 Barbarian Forts", vi: "90 Pháo đài Barbarian" },
            { en: "100 Barbarian Forts", vi: "100 Pháo đài Barbarian" }
        ],
        correct: 1,
        explanation: {
            en: "The Kingdom requirement is 70 Barbarian Forts per week.",
            vi: "Yêu cầu của Vương quốc là 70 Pháo đài Barbarian mỗi tuần."
        }
    },
    {
        category: "GENERAL RULES",
        question: {
            en: "What is the daily requirement for Barbarian Forts?",
            vi: "Số Pháo đài man rợ cần tiêu diệt mỗi ngày là bao nhiêu?"
        },
        answers: [
            { en: "5 per day", vi: "5 mỗi ngày" },
            { en: "10 per day", vi: "10 mỗi ngày" },
            { en: "15 per day", vi: "15 mỗi ngày" },
            { en: "100 per day", vi: "100 mỗi ngày" }
        ],
        correct: 1,
        explanation: {
            en: "The daily requirement is 10 Barbarian Forts per day.",
            vi: "Yêu cầu hàng ngày là 10 Pháo đài Barbarian mỗi ngày."
        }
    },
    {
        category: "GENERAL RULES",
        question: {
            en: "What does the 1+1 rally system mean?",
            vi: "Hệ thống tập hợp 1+1 có nghĩa là gì?"
        },
        answers: [
            { en: "One governor starts the rally and one additional governor joins", vi: "Một Thống đốc bắt đầu tập hợp và một Thống đốc khác tham gia" },
            { en: "Two governors start separate rallies", vi: "Hai Thống đốc bắt đầu hai đợt tập hợp riêng" },
            { en: "One governor joins two rallies", vi: "Một Thống đốc tham gia hai đợt tập hợp" },
            { en: "Two governors join after the rally ends", vi: "Hai Thống đốc tham gia sau khi tập hợp kết thúc" }
        ],
        correct: 0,
        explanation: {
            en: "1+1 means one governor starts the rally and one additional governor joins that rally.",
            vi: "1+1 nghĩa là một Thống đốc bắt đầu tập hợp và một Thống đốc khác tham gia tập hợp đó."
        }
    },
    {
        category: "GENERAL RULES",
        question: {
            en: "What is the purpose of the 1+1 system?",
            vi: "Mục đích của hệ thống 1+1 là gì?"
        },
        answers: [
            { en: "To maximize rewards and increase the alliance's Crystal Chest collection speed", vi: "Tối đa hóa phần thưởng và tăng tốc độ thu thập Rương Pha Lê của liên minh" },
            { en: "To change the daily Barbarian Forts limit", vi: "Thay đổi giới hạn Pháo đài Barbarian hàng ngày" },
            { en: "To determine the weekly reward recipients", vi: "Quyết định người nhận phần thưởng hàng tuần" },
            { en: "To set the number of weekly Barbarian Forts", vi: "Ấn định số Pháo đài Barbarian hàng tuần" }
        ],
        correct: 0,
        explanation: {
            en: "The 1+1 system helps maximize rewards and increases the speed of Crystal Chest collection for the alliance.",
            vi: "Hệ thống 1+1 giúp tối đa hóa phần thưởng và tăng tốc độ thu thập Rương Pha Lê cho liên minh."
        }
    },
    {
        category: "GENERAL RULES",
        question: {
            en: "Weekly Barbarian Fort rewards are based on rally activity from when?",
            vi: "Phần thưởng Pháo đài Barbarian hàng tuần dựa trên hoạt động tập hợp của thời gian nào?"
        },
        answers: [
            { en: "The previous week", vi: "Tuần trước" },
            { en: "The current day", vi: "Ngày hiện tại" },
            { en: "The current month", vi: "Tháng hiện tại" },
            { en: "The following week", vi: "Tuần tiếp theo" }
        ],
        correct: 0,
        explanation: {
            en: "At the beginning of each week, rewards go to top governors based on the Barbarian Forts they rallied during the previous week.",
            vi: "Vào đầu mỗi tuần, phần thưởng được trao cho các Thống đốc hàng đầu dựa trên số Pháo đài Barbarian họ đã tập hợp trong tuần trước."
        }
    },
    {
        category: "GENERAL RULES",
        question: {
            en: "What may the weekly Barbarian Fort rewards include?",
            vi: "Phần thưởng Pháo đài Barbarian hàng tuần có thể gồm những gì?"
        },
        answers: [
            { en: "Trophies and RSS", vi: "Cúp và RSS" },
            { en: "Only a fixed amount of Gold", vi: "Chỉ một lượng Vàng cố định" },
            { en: "Only a fixed amount of Corn/Wood/Stone", vi: "Chỉ một lượng Ngô/Gỗ/Đá cố định" },
            { en: "A guaranteed reward for every governor", vi: "Phần thưởng đảm bảo cho mọi Thống đốc" }
        ],
        correct: 0,
        explanation: {
            en: "Weekly rewards may consist of Trophies and RSS.",
            vi: "Phần thưởng hàng tuần có thể gồm Cúp và RSS."
        }
    },
    {
        category: "KVK",
        question: {
            en: "What is the DKP formula listed in the Kingdom rules?",
            vi: "Công thức DKP được nêu trong quy tắc của Vương quốc là gì?"
        },
        answers: [
            { en: "T4 Kills × 10 + T5 Kills × 30 + T4 Deaths × 40 + T5 Deaths × 80", vi: "T4 Kills × 10 + T5 Kills × 30 + T4 Deaths × 40 + T5 Deaths × 80" },
            { en: "T4 Kills × 20 + T5 Kills × 10 + T4 Deaths × 50 + T5 Deaths × 70", vi: "T4 Kills × 20 + T5 Kills × 10 + T4 Deaths × 50 + T5 Deaths × 70" },
            { en: "T4 Kills × 5 + T5 Kills × 25", vi: "T4 Kills × 5 + T5 Kills × 25" },
            { en: "T4 Kills × 30 + T5 Kills × 80 + T4 Deaths × 10 + T5 Deaths × 30", vi: "T4 Kills × 30 + T5 Kills × 80 + T4 Deaths × 10 + T5 Deaths × 30" }
        ],
        correct: 0,
        explanation: {
            en: "The DKP formula is T4 Kills × 10 + T5 Kills × 30 + T4 Deaths × 40 + T5 Deaths × 80.",
            vi: "Công thức DKP là T4 Kills × 10 + T5 Kills × 30 + T4 Deaths × 40 + T5 Deaths × 80."
        }
    },
    {
        category: "KVK",
        question: {
            en: "Which battles count toward DKP?",
            vi: "Những trận nào được tính vào DKP?"
        },
        answers: [
            { en: "Only battles from the first week of KvK", vi: "Chỉ các trận từ tuần đầu của KvK" },
            { en: "Battles involving Lv. 4 Passes, Altar of Darkness, Lv. 7 Passes, and Kingland", vi: "Các trận chiến có liên quan đến Lv. 4 Passes, Altar of Darkness, Lv. 7 Passes và Kingland" },
            { en: "Only training battles", vi: "Chỉ các trận luyện tập" },
            { en: "Only garrison-only battles", vi: "Chỉ các trận đồn trú" }
        ],
        correct: 1,
        explanation: {
            en: "DKP is counted from battles involving Lv. 4 Passes, Altar of Darkness, Lv. 7 Passes, and Kingland.",
            vi: "DKP được tính từ các trận chiến liên quan đến Lv. 4 Passes, Altar of Darkness, Lv. 7 Passes và Kingland."
        }
    },
    {
        category: "KVK",
        question: {
            en: "What is required of all CH25 governors?",
            vi: "Mọi Thống đốc CH25 phải làm gì?"
        },
        answers: [
            { en: "They must meet the Kingdom's DKP requirement", vi: "Họ phải đáp ứng yêu cầu DKP của Vương quốc" },
            { en: "They must not attack during KvK", vi: "Họ không được tấn công trong KvK" },
            { en: "They must register for every event", vi: "Họ phải đăng ký mọi sự kiện" },
            { en: "They must stay in Zone 4", vi: "Họ phải ở trong Zone 4" }
        ],
        correct: 0,
        explanation: {
            en: "All CH25 governors are required to meet the Kingdom's DKP requirement.",
            vi: "Tất cả Thống đốc CH25 đều phải đáp ứng yêu cầu DKP của Vương quốc."
        }
    },
    {
        category: "KVK",
        question: {
            en: "How are farm account DKP values handled?",
            vi: "DKP từ tài khoản phụ được xử lý như thế nào?"
        },
        answers: [
            { en: "They are ignored completely", vi: "Chúng bị bỏ qua hoàn toàn" },
            { en: "They are combined with the owner's main account", vi: "Chúng được cộng vào tài khoản chính của chủ tài khoản" },
            { en: "They are counted separately only for gold", vi: "Chúng chỉ được tính riêng cho vàng" },
            { en: "They are only counted if alts are in the same alliance", vi: "Chúng chỉ được tính nếu alt ở cùng liên minh" }
        ],
        correct: 1,
        explanation: {
            en: "DKP from CH25 farm accounts will be combined with the owner's main account.",
            vi: "DKP từ tài khoản phụ CH25 sẽ được cộng vào tài khoản chính của chủ tài khoản."
        }
    },
    {
        category: "KVK",
        question: {
            en: "What must governors do during KvK in terms of markers?",
            vi: "Trong KvK, Thống đốc phải làm gì liên quan đến marker?"
        },
        answers: [
            { en: "Ignore markers when under attack", vi: "Bỏ qua marker khi bị tấn công" },
            { en: "Follow assigned markers at all times", vi: "Luôn tuân theo marker đã được chỉ định" },
            { en: "Rotate markers every day", vi: "Thay đổi marker mỗi ngày" },
            { en: "Only follow markers in rallies", vi: "Chỉ tuân theo marker khi tập hợp" }
        ],
        correct: 1,
        explanation: {
            en: "All governors must follow assigned markers at all times during KvK.",
            vi: "Mọi Thống đốc phải luôn tuân theo marker được chỉ định trong suốt KvK."
        }
    },
    {
        category: "KVK",
        question: {
            en: "Who is allowed to lead rallies or garrisons?",
            vi: "Ai được phép chỉ huy tập hợp hoặc đồn trú?"
        },
        answers: [
            { en: "Any governor with a high Acclaim score", vi: "Bất kỳ Thống đốc nào có điểm Acclaim cao" },
            { en: "Only governors specifically assigned to rally or garrison", vi: "Chỉ Thống đốc được phân công cụ thể cho tập hợp hoặc đồn trú" },
            { en: "Only ranking officers", vi: "Chỉ các quan chức cấp cao" },
            { en: "Only governors with a Vacation Permit", vi: "Chỉ Thống đốc có Giấy phép nghỉ" }
        ],
        correct: 1,
        explanation: {
            en: "Only governors specifically assigned to rally or garrison are permitted to lead rallies or garrisons.",
            vi: "Chỉ Thống đốc được phân công cụ thể cho tập hợp hoặc đồn trú mới được phép chỉ huy chúng."
        }
    },
    {
        category: "KVK",
        question: {
            en: "What is the rule on insufficient DKP at the end of KvK?",
            vi: "Quy tắc về DKP không đủ vào cuối KvK là gì?"
        },
        answers: [
            { en: "No penalty if the governor was active in other events", vi: "Không phạt nếu Thống đốc tham gia các sự kiện khác" },
            { en: "Governors who fail to meet required DKP will be subject to a penalty", vi: "Thống đốc không đạt DKP yêu cầu sẽ bị phạt" },
            { en: "Only majors are affected", vi: "Chỉ các Thống đốc cấp cao bị ảnh hưởng" },
            { en: "The penalty only applies to the next season", vi: "Phạt chỉ áp dụng cho mùa tiếp theo" }
        ],
        correct: 1,
        explanation: {
            en: "Governors who fail to meet their required DKP will be subject to a penalty at the end of KvK.",
            vi: "Thống đốc không đạt DKP yêu cầu sẽ bị phạt vào cuối KvK."
        }
    },
    {
        category: "KVK",
        question: {
            en: "What is important in relation to enemy Kingdoms during KvK?",
            vi: "Điều quan trọng gì liên quan đến các Vương quốc đối địch trong KvK?"
        },
        answers: [
            { en: "It is acceptable to insult them in LKC", vi: "Có thể xúc phạm họ trong LKC" },
            { en: "Governors must remain respectful and civil in LKC, including toward enemy Kingdoms", vi: "Thống đốc phải giữ thái độ tôn trọng và lịch sự trong LKC, kể cả với các Vương quốc đối địch" },
            { en: "Only alliances matter", vi: "Chỉ liên minh mới quan trọng" },
            { en: "They should be ignored completely", vi: "Nên bỏ qua hoàn toàn" }
        ],
        correct: 1,
        explanation: {
            en: "Governors must remain respectful and civil in LKC, including toward enemy Kingdoms.",
            vi: "Thống đốc phải giữ thái độ tôn trọng và lịch sự trong LKC, kể cả với các Vương quốc đối địch."
        }
    },
    {
        category: "KVK",
        question: {
            en: "What is true about Vacation Permit holders?",
            vi: "Điều gì đúng với người có Vé nghỉ phép?"
        },
        answers: [
            { en: "They are exempt from participation and DKP requirements for that KvK", vi: "Họ được miễn tham gia và yêu cầu DKP trong KvK đó" },
            { en: "They must always fight in the front line", vi: "Họ luôn phải chiến đấu ở tuyến đầu" },
            { en: "They lose all rights to other Kingdoms", vi: "Họ mất mọi quyền với các Vương quốc khác" },
            { en: "They are not allowed to remain in Zone 4", vi: "Họ không được ở trong Zone 4" }
        ],
        correct: 0,
        explanation: {
            en: "Governors with an approved Vacation Permit are exempt from KvK participation and DKP requirements for that KvK, and can only remain in Zone 4.",
            vi: "Thống đốc được duyệt Giấy nghỉ phép sẽ được miễn tham gia KvK và yêu cầu DKP cho KvK đó, và chỉ được ở trong Zone 4."
        }
    }
];

function getQuizText(key) {
    const language = document.documentElement.lang === "vi" ? "vi" : "en";
    return QUIZ_UI_TEXT[language][key] || QUIZ_UI_TEXT.en[key] || key;
}

function getLocalizedText(value) {
    if (!value || typeof value !== "object") return value;
    const language = document.documentElement.lang === "vi" ? "vi" : "en";
    return value[language] || value.en || "";
}

function getCategoryLabel(category) {
    if (!category) return "";
    const language = document.documentElement.lang === "vi" ? "vi" : "en";
    return QUIZ_CATEGORIES[category]?.[language] || category;
}

function loadQuizStorage() {
    try {
        const raw = localStorage.getItem(QUIZ_STORAGE_KEY);
        if (!raw) {
            return { passed: false, bestScore: 0, attempts: 0, lastScore: 0, lastCode: "", lastCompletedAt: "", lastResult: null };
        }
        const parsed = JSON.parse(raw);
        return {
            passed: Boolean(parsed.passed),
            bestScore: Number(parsed.bestScore) || 0,
            attempts: Number(parsed.attempts) || 0,
            lastScore: Number(parsed.lastScore) || 0,
            lastCode: String(parsed.lastCode || ""),
            lastCompletedAt: String(parsed.lastCompletedAt || ""),
            lastResult: parsed.lastResult && typeof parsed.lastResult === "object" ? parsed.lastResult : null
        };
    } catch (error) {
        return { passed: false, bestScore: 0, attempts: 0, lastScore: 0, lastCode: "", lastCompletedAt: "", lastResult: null };
    }
}

function saveQuizStorage(payload) {
    try {
        localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(payload));
    } catch (error) {
        console.warn("Quiz storage unavailable:", error);
    }
}

function shuffleArray(items) {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
    }
    return copy;
}

function buildPracticeSet() {
    return shuffleArray(QUESTION_BANK).slice(0, 8).map((question) => {
        const answers = shuffleArray(question.answers.map((answer, index) => ({ ...answer, originalIndex: index })));
        const correctIndex = answers.findIndex((answer) => answer.originalIndex === question.correct);
        return {
            ...question,
            baseQuestion: question,
            prompt: getLocalizedText(question.question),
            explanationText: getLocalizedText(question.explanation),
            answers,
            correctIndex,
            categoryLabel: getCategoryLabel(question.category)
        };
    });
}

function buildFinalSet() {
    return shuffleArray(QUESTION_BANK).slice(0, 20).map((question) => {
        const answers = shuffleArray(question.answers.map((answer, index) => ({ ...answer, originalIndex: index })));
        const correctIndex = answers.findIndex((answer) => answer.originalIndex === question.correct);
        return {
            ...question,
            baseQuestion: question,
            prompt: getLocalizedText(question.question),
            answers,
            correctIndex,
            selectedIndex: null,
            categoryLabel: getCategoryLabel(question.category)
        };
    });
}

function localizeQuestionItem(item) {
    if (!item || !item.baseQuestion) {
        return item;
    }

    return {
        ...item,
        prompt: getLocalizedText(item.baseQuestion.question),
        explanationText: getLocalizedText(item.baseQuestion.explanation),
        answers: item.answers.map((answer) => ({ ...answer }))
    };
}

function generateResultCode() {
    const symbols = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    const randomPart = Array.from({ length: 8 }, () => symbols[Math.floor(Math.random() * symbols.length)]).join("");
    return `K3907-${randomPart}`;
}

function formatUtcCompletion(isoTimestamp) {
    const date = new Date(isoTimestamp);
    const formatted = new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23",
        timeZone: "UTC"
    }).format(date);
    return `${formatted} UTC`;
}

function updateQuizStatusPanel() {
    const stats = loadQuizStorage();
    const bestScoreValue = document.getElementById("bestScoreValue");
    const attemptsValue = document.getElementById("attemptsValue");
    const quizStatusValue = document.getElementById("quizStatusValue");

    if (bestScoreValue) {
        bestScoreValue.textContent = `${stats.bestScore}/20`;
    }

    if (attemptsValue) {
        attemptsValue.textContent = String(stats.attempts);
    }

    if (quizStatusValue) {
        if (stats.attempts > 0) {
            quizStatusValue.textContent = stats.passed ? getQuizText("passedStatus") : getQuizText("failedStatus");
        } else {
            quizStatusValue.textContent = getQuizText("notStarted");
        }
    }
}

function initializeQuizPage() {
    const quizApp = document.getElementById("quizApp");
    if (!quizApp) {
        return;
    }

    const practiceState = {
        items: [],
        currentIndex: 0,
        score: 0,
        finished: false,
        answered: false
    };

    const finalState = {
        items: [],
        currentIndex: 0,
        score: 0,
        finished: false,
        started: false
    };

    function renderQuizApp() {
        const stats = loadQuizStorage();
        quizApp.innerHTML = `
            <section class="hero quiz-hero">
                <div class="badge">KINGDOM 3907</div>
                <h2>${getQuizText("pageTitle").replace(/\n/g, "<br>")}</h2>
            </section>

            <div class="quiz-status-panel">
                <div class="quiz-stat">
                    <span>${getQuizText("bestScore")}</span>
                    <strong id="bestScoreValue">${stats.bestScore}/20</strong>
                </div>
                <div class="quiz-stat">
                    <span>${getQuizText("attempts")}</span>
                    <strong id="attemptsValue">${stats.attempts}</strong>
                </div>
                <div class="quiz-stat">
                    <span>${getQuizText("status")}</span>
                    <strong id="quizStatusValue">${stats.attempts > 0 ? (stats.passed ? getQuizText("passedStatus") : getQuizText("failedStatus")) : getQuizText("notStarted")}</strong>
                </div>
            </div>

            <section id="how-it-works" class="content-section quiz-section">
                <div class="quiz-card">
                    <h3>${getQuizText("howItWorks")}</h3>
                    <ul class="quiz-steps">
                        <li><span class="quiz-step-number">1</span><span>${getQuizText("readRules")}</span></li>
                        <li><span class="quiz-step-number">2</span><span>${getQuizText("practiceLearn")}</span></li>
                        <li><span class="quiz-step-number">3</span><span>${getQuizText("takeFinal")}</span></li>
                        <li><span class="quiz-step-number">4</span><span>${getQuizText("twentyQuestions")}</span></li>
                        <li><span class="quiz-step-number">5</span><span>${getQuizText("passTarget")}</span></li>
                        <li><span class="quiz-step-number">6</span><span>${getQuizText("saved")}</span></li>
                    </ul>
                    <p class="quiz-info-text">${getQuizText("rewardLeadership")}</p>
                </div>
            </section>

            <section id="practice-quiz" class="content-section quiz-section">
                <div id="practiceQuizPanel" class="quiz-card"></div>
            </section>

            <section id="final-quiz" class="content-section quiz-section">
                <div id="finalQuizPanel" class="quiz-card"></div>
            </section>
        `;

        renderPracticeQuiz();
        renderFinalQuiz();
        updateQuizStatusPanel();
    }

    function renderPracticeQuiz() {
        const container = document.getElementById("practiceQuizPanel");
        if (!container) {
            return;
        }

        if (practiceState.finished) {
            container.innerHTML = `
                <h3>${getQuizText("practiceComplete")}</h3>
                <div class="final-score-panel">
                    <span>${getQuizText("practiceSummary")}</span>
                    <strong>${practiceState.score}/8</strong>
                </div>
                <div class="quiz-actions">
                    <button class="quiz-button" type="button" data-practice-reset="true">${getQuizText("tryAgain")}</button>
                </div>
            `;
            const button = container.querySelector("[data-practice-reset='true']");
            if (button) {
                button.addEventListener("click", startPracticeQuiz);
            }
            return;
        }

        if (!practiceState.items.length) {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "quiz-button";
            button.textContent = getQuizText("startPractice");
            button.addEventListener("click", startPracticeQuiz);
            container.innerHTML = `<h3>${getQuizText("practiceQuiz")}</h3><div class="quiz-actions"><button class="quiz-button" type="button" data-practice-start="true">${getQuizText("startPractice")}</button></div>`;
            const startButton = container.querySelector("[data-practice-start='true']");
            if (startButton) {
                startButton.addEventListener("click", startPracticeQuiz);
            }
            return;
        }

        const currentItem = practiceState.items[practiceState.currentIndex];
        const current = localizeQuestionItem(currentItem);
        const answerButtons = current.answers.map((answer, index) => {
            const isSelected = current.selectedIndex === index;
            const className = "answer-button" + (isSelected ? " selected" : "");
            return `<button class="${className}" type="button" data-practice-answer="${index}">${getLocalizedText(answer)}</button>`;
        }).join("");

        const resultMarkup = current.showResult
            ? `
                <div class="quiz-result-box ${current.isCorrect ? "pass" : "fail"}">
                    <strong>${current.isCorrect ? getQuizText("correct") : getQuizText("incorrect")}</strong>
                    <p>${getQuizText("correctAnswer")}: ${getLocalizedText(current.answers[current.correctIndex])}</p>
                    <p>${getQuizText("explanation")}: ${getLocalizedText(current.baseQuestion.explanation)}</p>
                </div>
            `
            : "";

        container.innerHTML = `
            <div class="quiz-question-meta">
                <span>${getQuizText("practiceQuiz")}</span>
                <span>${getQuizText("questionLabel")} ${practiceState.currentIndex + 1} / ${practiceState.items.length}</span>
            </div>
            <div class="quiz-question">${current.prompt}</div>
            <div class="answer-list">${answerButtons}</div>
            ${resultMarkup}
            <div class="quiz-actions">
                ${current.showResult ? `<button class="quiz-button" type="button" data-practice-next="true">${practiceState.currentIndex === practiceState.items.length - 1 ? getQuizText("finish") : getQuizText("next")}</button>` : ""}
            </div>
        `;

        container.querySelectorAll("[data-practice-answer]").forEach((button) => {
            button.addEventListener("click", () => {
                if (currentItem.showResult) {
                    return;
                }

                const selectedIndex = Number(button.dataset.practiceAnswer);
                currentItem.selectedIndex = selectedIndex;
                currentItem.isCorrect = selectedIndex === currentItem.correctIndex;
                currentItem.showResult = true;
                if (currentItem.isCorrect) {
                    practiceState.score += 1;
                }
                renderPracticeQuiz();
            });
        });

        const nextButton = container.querySelector("[data-practice-next='true']");
        if (nextButton) {
            nextButton.addEventListener("click", () => {
                if (practiceState.currentIndex < practiceState.items.length - 1) {
                    practiceState.currentIndex += 1;
                    renderPracticeQuiz();
                    return;
                }

                practiceState.finished = true;
                renderPracticeQuiz();
            });
        }
    }

    function startPracticeQuiz() {
        practiceState.items = buildPracticeSet();
        practiceState.currentIndex = 0;
        practiceState.score = 0;
        practiceState.finished = false;
        practiceState.items.forEach((item) => {
            item.showResult = false;
            item.selectedIndex = null;
            item.isCorrect = false;
        });
        renderPracticeQuiz();
    }

    function renderFinalQuiz() {
        const container = document.getElementById("finalQuizPanel");
        if (!container) {
            return;
        }

        if (!finalState.items.length && !finalState.started) {
            container.innerHTML = `
                <h3>${getQuizText("finalQuiz")}</h3>
                <div class="quiz-info-text">${getQuizText("passingRequirement")}</div>
                <div class="quiz-actions">
                    <button class="quiz-button" type="button" data-final-start="true">${getQuizText("startFinal")}</button>
                </div>
            `;
            const button = container.querySelector("[data-final-start='true']");
            if (button) {
                button.addEventListener("click", startFinalQuiz);
            }
            return;
        }

        if (finalState.finished) {
            const result = finalState.result;
            const isPassed = result.passed;
            const accuracy = Math.round((result.score / result.total) * 100);
            const reviewMarkup = result.incorrectAnswers.length
                ? `
                    <section class="quiz-review">
                        <h3>${getQuizText("reviewAnswers")}</h3>
                        ${result.incorrectAnswers.map((answer) => `
                            <article class="quiz-review-item">
                                <h4>${getQuizText("questionLabel")} ${answer.questionNumber}</h4>
                                <p class="quiz-review-question">${getLocalizedText(answer.question)}</p>
                                <p class="quiz-review-answer incorrect"><strong>✕ ${getQuizText("yourAnswer")}:</strong> ${getLocalizedText(answer.selectedAnswer)}</p>
                                <p class="quiz-review-answer correct"><strong>✓ ${getQuizText("correctAnswer")}:</strong> ${getLocalizedText(answer.correctAnswer)}</p>
                                <p class="quiz-review-explanation"><strong>${getQuizText("explanation")}:</strong> ${getLocalizedText(answer.explanation)}</p>
                            </article>
                        `).join("")}
                    </section>
                `
                : `
                    <section class="quiz-review quiz-perfect-score">
                        <h3>${getQuizText("perfectScore")}</h3>
                        <p>${getQuizText("everyAnswerCorrect")}</p>
                    </section>
                `;

            container.innerHTML = `
                <div class="quiz-result-box ${isPassed ? "pass" : "fail"}">
                    <strong>${isPassed ? getQuizText("finalPass") : getQuizText("finalFail")}</strong>
                    <div class="final-score-panel">
                        <span>${getQuizText("score")}</span>
                        <strong>${result.score} / ${result.total}</strong>
                    </div>
                    <div class="final-score-panel">
                        <span>${getQuizText("accuracy")}</span>
                        <strong>${accuracy}%</strong>
                    </div>
                    <div class="quiz-verification ${isPassed ? "" : "failed"}">
                        ${isPassed ? `<div><span>${getQuizText("verificationCode")}</span><strong>${result.code}</strong></div>` : ""}
                        <div><span>${getQuizText("completed")}</span><strong>${formatUtcCompletion(result.completedAt)}</strong></div>
                    </div>
                    ${isPassed
                        ? `<p>${getQuizText("congratulations")}</p>
                            <div class="quiz-reward">
                                <strong>${getQuizText("rewardEligible")}</strong>
                                <p>${getQuizText("rewardDetails")}</p>
                                <p>${getQuizText("rewardInformation")}</p>
                            </div>
                            <p>${getQuizText("verificationInstruction")}</p>`
                        : `<p>${getQuizText("failure")}</p><p class="quiz-result-fail-line">${getQuizText("needToPass")}</p>`}
                </div>
                ${reviewMarkup}
                <div class="quiz-actions">
                    <button class="quiz-secondary-button" type="button" data-review-rules="true">${getQuizText("reviewRules")}</button>
                    <button class="quiz-button" type="button" data-final-reset="true">${getQuizText("tryAgainFinal")}</button>
                </div>
            `;

            const reviewButton = container.querySelector("[data-review-rules='true']");
            if (reviewButton) {
                reviewButton.addEventListener("click", () => {
                    window.location.href = "../index.html#general";
                });
            }

            const resetButton = container.querySelector("[data-final-reset='true']");
            if (resetButton) {
                resetButton.addEventListener("click", startFinalQuiz);
            }

            updateQuizStatusPanel();
            return;
        }

        const currentItem = finalState.items[finalState.currentIndex];
        const current = localizeQuestionItem(currentItem);
        const options = current.answers.map((answer, index) => {
            const selected = current.selectedIndex === index;
            return `<button class="answer-button ${selected ? "selected" : ""}" type="button" data-final-answer="${index}">${getLocalizedText(answer)}</button>`;
        }).join("");

        container.innerHTML = `
            <div class="quiz-question-meta">
                <span>${getQuizText("finalQuiz")}</span>
                <span>${getQuizText("questionLabel")} ${finalState.currentIndex + 1} / ${finalState.items.length}</span>
            </div>
            <div class="quiz-question">${current.prompt}</div>
            <div class="answer-list">${options}</div>
            <div class="quiz-actions">
                <button class="quiz-button" type="button" data-final-next="true" ${typeof current.selectedIndex !== "number" ? "disabled" : ""}>${finalState.currentIndex === finalState.items.length - 1 ? getQuizText("finish") : getQuizText("next")}</button>
            </div>
        `;

        container.querySelectorAll("[data-final-answer]").forEach((button) => {
            button.addEventListener("click", () => {
                const selectedIndex = Number(button.dataset.finalAnswer);
                currentItem.selectedIndex = selectedIndex;
                renderFinalQuiz();
            });
        });

        const nextButton = container.querySelector("[data-final-next='true']");
        if (nextButton) {
            nextButton.addEventListener("click", () => {
                if (typeof currentItem.selectedIndex !== "number") {
                    return;
                }

                if (currentItem.selectedIndex === currentItem.correctIndex) {
                    finalState.score += 1;
                }

                if (finalState.currentIndex < finalState.items.length - 1) {
                    finalState.currentIndex += 1;
                    renderFinalQuiz();
                    return;
                }

                finalState.finished = true;
                completeFinalQuiz();
                renderFinalQuiz();
            });
        }
    }

    function startFinalQuiz() {
        finalState.items = buildFinalSet();
        finalState.currentIndex = 0;
        finalState.score = 0;
        finalState.finished = false;
        finalState.started = true;
        finalState.result = null;
        renderFinalQuiz();
    }

    function completeFinalQuiz() {
        const completedAt = new Date().toISOString();
        const passed = finalState.score >= 16;
        const incorrectAnswers = finalState.items.reduce((answers, item, index) => {
            if (item.selectedIndex !== item.correctIndex) {
                const selectedAnswer = item.answers[item.selectedIndex];
                const correctAnswer = item.answers[item.correctIndex];
                answers.push({
                    questionNumber: index + 1,
                    question: item.baseQuestion.question,
                    selectedAnswer: { en: selectedAnswer.en, vi: selectedAnswer.vi },
                    correctAnswer: { en: correctAnswer.en, vi: correctAnswer.vi },
                    explanation: item.baseQuestion.explanation
                });
            }
            return answers;
        }, []);
        const stats = loadQuizStorage();
        const result = {
            score: finalState.score,
            total: finalState.items.length,
            passed,
            code: passed ? generateResultCode() : "",
            completedAt,
            incorrectAnswers
        };

        stats.lastScore = result.score;
        stats.attempts = (Number(stats.attempts) || 0) + 1;
        stats.bestScore = Math.max(stats.bestScore, result.score);
        stats.passed = stats.passed || passed;
        stats.lastCode = result.code;
        stats.lastCompletedAt = completedAt;
        stats.lastResult = { ...result, attempt: stats.attempts };
        finalState.result = result;
        saveQuizStorage(stats);
    }

    document.addEventListener("quizLanguageUpdated", () => {
        renderQuizApp();
        updateQuizStatusPanel();
    });

    renderQuizApp();
}

if (document.body && document.body.dataset.page === "quiz") {
    initializeQuizPage();
}

const originalSetLanguage = window.setLanguage;
if (typeof originalSetLanguage === "function") {
    window.setLanguage = function(language) {
        originalSetLanguage(language);
        if (document.body && document.body.dataset.page === "quiz") {
            document.dispatchEvent(new Event("quizLanguageUpdated"));
        }
    };
}