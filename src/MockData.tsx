import { CircleArrowOutDownLeft, CircleArrowOutUpRight, Coins, Facebook, QrCode, ScanLine, TabletSmartphone } from "lucide-react";

export const centers = {
    center_1: {
        center_name: "Times City Center",
        center_code: "001- YGN01",
        center_location: "Room No. (217), Shop House 2, Time City Complex, Corner of Hantharwadi Road and Kyun Taw Road, Kamaryut.",
    },
    center_2: {
        center_name: "Min Ye Kyaw Swar Center",
        center_code: "002- YGN02",
        center_location: "Building No. (A-1), 1st Floor, Minyekyawswar Street, Beside City Mall (St. John), Lanmadaw.",
    },
    center_3: {
        center_name: "South Oakalarpa Center",
        center_code: "003- YGN03",
        center_location: "No. (337), 1st Floor, Yadanar Street, (11) Quarter, South Okkalapa.",
    },
    center_4: {
        center_name: "Yae Kyaw Center",
        center_code: "004- YGN04",
        center_location: "Room (108), Ground Floor, Corner of Bogyoke Street & Yae Kyaw Street, (9) Ward, Pazundaung.",
    },
    center_5: {
        center_name: "San Chaung Pandonma Center",
        center_code: "005- YGN05",
        center_location: "No. (162), Room A1, Ground Floor, Corner of Sanchaung Street & West Myaynigone Street, Sanchaung.",
    },
    center_6: {
        center_name: "Hledan Center",
        center_code: "013- YGN09",
        center_location: "No. (21/23_C1), Ground Floor, Hledan Road, Kamayut",
    },
};

export const features = {
    feature_1: {
        feature_name: "Scan",
        feature_description: "Scan to make transactions easily",
        feature_icon: <ScanLine size={75} />
    },
    feature_2: {
        feature_name: "Receive",
        feature_description: "Unique QR to accept for any payment",
        feature_icon: <QrCode size={75} />
    },
    feature_3: {
        feature_name: "Cash In",
        feature_description: "Cash into your KBZPay account via KBZPay Merchants/Agents, KBZ Bank Account, Mastercard, Visa Cards, and any MPU Cards.",
        feature_icon: <CircleArrowOutDownLeft size={75} />
    },
    feature_4: {
        feature_name: "Cash Out",
        feature_description: "Cash out from your KBZPay account via KBZPay Merchants/Agents, ATMs, KBZ Bank Account, and any MPU Cards.",
        feature_icon: <CircleArrowOutUpRight size={75} />
    },
    feature_5: {
        feature_name: "Top Up",
        feature_description: "Top up your phone for any telecom in Myanmar anywhere by using KBZPay.",
        feature_icon: <TabletSmartphone size={75} />
    },
    feature_6: {
        feature_name: "Transfer",
        feature_description: "Free & instant 24/7 cash transfers with KBZPay.",
        feature_icon: <Coins size={75} />
    },
};

export const homepageIcons = {
    icon_1: {
        icon_link: "",
        icon_svg: <Facebook />,
    }
}