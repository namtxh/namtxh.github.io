const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const navLinks = document.querySelectorAll(".nav-link");
const languageToggle = document.getElementById("languageToggle");

const translations = {
    "GENERAL RULES": "QUY ĐỊNH CHUNG",
    "General Rules": "Quy định chung",
    "KINGDOM EVENTS": "SỰ KIỆN VƯƠNG QUỐC",
    "MGE Regulations": "Thể lệ MGE",
    "20 Golden Heads": "Sự kiện 20 Đầu Vàng",
    "Ark of Osiris": "Ark of Osiris",
    "Other Kingdom Events": "Sự kiện khác của Vương quốc",
    "Alliance Mobilization": "Tổng động viên liên minh",
    "Fighting Rules": "Quy định chiến đấu",
    "Rally & Garrison": "Tập hợp & Đồn trú",
    "Acclaim": "Acclaim",
    "Insufficient DKP": "Không đủ DKP",
    "Conduct & Diplomacy": "Ứng xử & Ngoại giao",
    "Vacation Permit": "Giấy phép nghỉ KvK",
    "Kingdom Codex": "Cẩm nang Vương quốc",
    "Official rules, regulations and policies governing Kingdom 3907.": "Các quy tắc, quy định và chính sách chính thức của Vương quốc 3907.",
    "READ THE CODEX": "XEM CẨM NANG",
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
    "Food, Wood, Stone, or Gold at a ratio of": "Lương thực, Gỗ, Đá hoặc Vàng theo tỷ lệ",
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
    "200M Food / 200M Wood / 150M Stone / 80M Gold. Missing two matches in a row doubles the penalty.": "200 triệu Lương thực / 200 triệu Gỗ / 150 triệu Đá / 80 triệu Vàng. Vắng mặt hai trận liên tiếp sẽ bị phạt gấp đôi.",
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
    "The maximum price for 1B each of Food, Wood, Stone, and Gold is $30. This equals": "Giá tối đa cho 1B mỗi loại Lương thực, Gỗ, Đá và Vàng là $30. Mức này tương đương",
    "$0.60 per 100M Food, Wood, or Stone": "$0.60 cho mỗi 100M Lương thực, Gỗ hoặc Đá",
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
    document.title = isVietnamese ? "Cẩm nang Vương quốc - 3907" : "Kingdom Codex - 3907";
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