
import { NAV_ITEM_TYPE_COLLAPSE, NAV_ITEM_TYPE_TITLE } from "constants/navigation.constant";
import { PREMIUM, USER } from "constants/roles.constant";
const plansNavigationConfig = [
    {
        key: "subs",
        path: "",
        title: "SUBSCRIPTION",
        translateKey: "SUBSCRIPTION",
        icon: "apps",
        type: NAV_ITEM_TYPE_TITLE,
        authority: [USER, PREMIUM, USER],
        subMenu: [{
            key: "plans",
            path: `/plans`,
            title: "Plans",
            translateKey: "nav.subs.plans",
            icon: "project",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [USER, PREMIUM, USER],
            subMenu: [],
        },]
    }
]

export default plansNavigationConfig;