import { APP_PREFIX_PATH } from "constants/route.constant";
import {
  NAV_ITEM_TYPE_TITLE,
  NAV_ITEM_TYPE_COLLAPSE,
  NAV_ITEM_TYPE_ITEM,
} from "constants/navigation.constant";
import { BASIC, PREMIUM } from "constants/roles.constant";

const appsNavigationConfig = [
  {
    key: "services",
    path: "",
    title: "SERVICES",
    translateKey: "services",
    icon: "apps",
    type: NAV_ITEM_TYPE_TITLE,
    authority: [BASIC, PREMIUM],
    subMenu: [
      {
        key: "services.socialMedia",
        path: `/services/social-media`,
        title: "Social Media Tools",
        translateKey: "nav.socialMedia.socialMediaServ",
        icon: "project",
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [BASIC, PREMIUM],
        subMenu: [],
      },
      {
        key: "services.marketing",
        path: "/services/marketing-tools",
        title: "Marketing Tools",
        translateKey: "nav.marketing",
        icon: "sales",
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [BASIC, PREMIUM],
        subMenu: [],
      },
      {
        key: "services.business",
        path: "/services/business",
        title: "Business Tools",
        translateKey: "nav.business",
        icon: "crm",
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [BASIC, PREMIUM],
        subMenu: [],
      },
      {
        key: "services.writingTools",
        path: "/services/writing-tools",
        title: "Writing Tools",
        translateKey: "nav.writingTools",
        icon: "guide",
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [BASIC, PREMIUM],
        subMenu: [],
      },
      {
        key: "services.miscellaneous",
        path: `/services/miscellaneous`,
        title: "Miscellaneous",
        translateKey: "nav.miscellaneous",
        icon: "apps",
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [BASIC, PREMIUM],
        subMenu: [
          // {
          // 	key: 'miscellaneous.dashboard',
          // 	path: `services/miscellaneous`,
          // 	title: 'All Miscellaneous Services',
          // 	translateKey: 'nav.miscellaneous.all',
          // 	icon: '',
          // 	type: NAV_ITEM_TYPE_ITEM,
          // 	authority: [BASIC,PREMIUM],
          // 	subMenu: []
          // },
          // {
          // 	key: 'miscellaneous.Latter',
          // 	path: `services/miscellaneous/cover-latter`,
          // 	title: 'Cover Latter',
          // 	translateKey: 'nav.miscellaneous.Cover',
          // 	icon: '',
          // 	type: NAV_ITEM_TYPE_ITEM,
          // 	authority: [BASIC,PREMIUM],
          // 	subMenu: []
          // },
          // {
          // 	key: 'miscellaneous.fictional',
          // 	path: `services/miscellaneous/fictional-story`,
          // 	title: 'Fictional Story Ideas',
          // 	translateKey: 'nav.miscellaneous.fictional',
          // 	icon: '',
          // 	type: NAV_ITEM_TYPE_ITEM,
          // 	authority: [BASIC,PREMIUM],
          // 	subMenu: []
          // },
          // {
          // 	key: 'miscellaneous.recipe',
          // 	path: `services/miscellaneous/food-recipe`,
          // 	title: 'Food Recipes',
          // 	translateKey: 'nav.miscellaneous.recipe',
          // 	icon: '',
          // 	type: NAV_ITEM_TYPE_ITEM,
          // 	authority: [BASIC,PREMIUM],
          // 	subMenu: []
          // },
          // {
          // 	key: 'miscellaneous.quora',
          // 	path: `services/miscellaneous/quora-answers`,
          // 	title: 'Quora Answers',
          // 	translateKey: 'nav.miscellaneous.quora',
          // 	icon: '',
          // 	type: NAV_ITEM_TYPE_ITEM,
          // 	authority: [BASIC,PREMIUM],
          // 	subMenu: []
          // },
          // {
          // 	key: 'miscellaneous.greetings',
          // 	path: `services/miscellaneous/greetings`,
          // 	title: 'Greetings',
          // 	translateKey: 'nav.miscellaneous.greetings',
          // 	icon: '',
          // 	type: NAV_ITEM_TYPE_ITEM,
          // 	authority: [BASIC,PREMIUM],
          // 	subMenu: []
          // },
          // {
          // 	key: 'miscellaneous.song',
          // 	path: `services/miscellaneous/song-lyrics`,
          // 	title: 'Song Lyrics',
          // 	translateKey: 'nav.miscellaneous.song',
          // 	icon: '',
          // 	type: NAV_ITEM_TYPE_ITEM,
          // 	authority: [BASIC,PREMIUM],
          // 	subMenu: []
          // },
          // {
          // 	key: 'miscellaneous.Job',
          // 	path: `services/miscellaneous/job-description`,
          // 	title: 'Job Descriptions',
          // 	translateKey: 'nav.miscellaneous.Job',
          // 	icon: '',
          // 	type: NAV_ITEM_TYPE_ITEM,
          // 	authority: [BASIC,PREMIUM],
          // 	subMenu: []
          // },
          // {
          // 	key: 'miscellaneous.pdDes',
          // 	path: `services/miscellaneous/pd-reviews`,
          // 	title: 'Product Reviews',
          // 	translateKey: 'nav.miscellaneous.pdDes',
          // 	icon: '',
          // 	type: NAV_ITEM_TYPE_ITEM,
          // 	authority: [BASIC,PREMIUM],
          // 	subMenu: []
          // },
          // {
          // 	key: 'miscellaneous.linkedinbio',
          // 	path: `services/miscellaneous/linkedin-bio`,
          // 	title: 'Personal Linkedin Bio',
          // 	translateKey: 'nav.miscellaneous.linkedinbio',
          // 	icon: '',
          // 	type: NAV_ITEM_TYPE_ITEM,
          // 	authority: [BASIC,PREMIUM],
          // 	subMenu: []
          // }
        ],
      },
      {
        key: "services.allServices",
        path: "/services/all-services",
        title: "All Our Services",
        translateKey: "nav.allServices",
        icon: "dashboard",
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [BASIC, PREMIUM],
        subMenu: [],
      },
      //   {
      //     key: "apps.crypto",
      //     path: "",
      //     title: "demo",
      //     translateKey: "nav.Descriptions.crypto",
      //     icon: "crypto",
      //     type: NAV_ITEM_TYPE_COLLAPSE,
      //     authority: [BASIC,PREMIUM],
      //     subMenu: [
      //       // 	{
      //       // 		key: 'appsCrypto.dashboard',
      //       // 		path: `${APP_PREFIX_PATH}/crypto/dashboard`,
      //       // 		title: 'Dashboard',
      //       // 		translateKey: 'nav.appsCrypto.dashboard',
      //       // 		icon: '',
      //       // 		type: NAV_ITEM_TYPE_ITEM,
      //       // 		authority: [BASIC,PREMIUM],
      //       // 		subMenu: []
      //       // 	},
      //       // 	{
      //       // 		key: 'appsCrypto.portfolio',
      //       // 		path: `${APP_PREFIX_PATH}/crypto/portfolio`,
      //       // 		title: 'Portfolio',
      //       // 		translateKey: 'nav.appsCrypto.portfolio',
      //       // 		icon: '',
      //       // 		type: NAV_ITEM_TYPE_ITEM,
      //       // 		authority: [BASIC,PREMIUM],
      //       // 		subMenu: []
      //       // 	},
      //       // 	{
      //       // 		key: 'appsCrypto.market',
      //       // 		path: `${APP_PREFIX_PATH}/crypto/market`,
      //       // 		title: 'Market',
      //       // 		translateKey: 'nav.appsCrypto.market',
      //       // 		icon: '',
      //       // 		type: NAV_ITEM_TYPE_ITEM,
      //       // 		authority: [BASIC,PREMIUM],
      //       // 		subMenu: []
      //       // 	},
      //       // 	{
      //       // 		key: 'appsCrypto.wallets',
      //       // 		path: `${APP_PREFIX_PATH}/crypto/wallets`,
      //       // 		title: 'Wallets',
      //       // 		translateKey: 'nav.appsCrypto.wallets',
      //       // 		icon: '',
      //       // 		type: NAV_ITEM_TYPE_ITEM,
      //       // 		authority: [BASIC,PREMIUM],
      //       // 		subMenu: []
      //       // 	},
      //     ],
      //   },
      //   {
      //     key: "apps.knowledgeBase",
      //     path: "",
      //     title: "demo",
      //     translateKey: "nav.Ideas.knowledgeBase",
      //     icon: "knowledgeBase",
      //     type: NAV_ITEM_TYPE_COLLAPSE,
      //     authority: [BASIC,PREMIUM],
      //     subMenu: [
      //       // 	{
      //       // 		key: 'appsknowledgeBase.helpCenter',
      //       // 		path: `${APP_PREFIX_PATH}/knowledge-base/help-center`,
      //       // 		title: 'Help Center',
      //       // 		translateKey: 'nav.appsknowledgeBase.helpCenter',
      //       // 		icon: '',
      //       // 		type: NAV_ITEM_TYPE_ITEM,
      //       // 		authority: [BASIC,PREMIUM],
      //       // 		subMenu: []
      //       // 	},
      //       // 	{
      //       // 		key: 'appsknowledgeBase.article',
      //       // 		path: `${APP_PREFIX_PATH}/knowledge-base/article?id=rZjCbSyae5`,
      //       // 		title: 'Article',
      //       // 		translateKey: 'nav.appsknowledgeBase.article',
      //       // 		icon: '',
      //       // 		type: NAV_ITEM_TYPE_ITEM,
      //       // 		authority: [BASIC,PREMIUM],
      //       // 		subMenu: []
      //       // 	},
      //       // 	{
      //       // 		key: 'appsknowledgeBase.manageArticles',
      //       // 		path: `${APP_PREFIX_PATH}/knowledge-base/manage-articles`,
      //       // 		title: 'Manage Articles',
      //       // 		translateKey: 'nav.appsknowledgeBase.manageArticles',
      //       // 		icon: '',
      //       // 		type: NAV_ITEM_TYPE_ITEM,
      //       // 		authority: [BASIC,PREMIUM],
      //       // 		subMenu: []
      //       // 	},
      //       // 	{
      //       // 		key: 'appsknowledgeBase.editArticle',
      //       // 		path: `${APP_PREFIX_PATH}/knowledge-base/edit-article?id=rZjCbSyae5&categoryLabel=Survey&categoryValue=survey`,
      //       // 		title: 'Edit Article',
      //       // 		translateKey: 'nav.appsknowledgeBase.editArticle',
      //       // 		icon: '',
      //       // 		type: NAV_ITEM_TYPE_ITEM,
      //       // 		authority: [BASIC,PREMIUM],
      //       // 		subMenu: []
      //       // 	},
      //     ],
      //   },
      //   {
      //     key: "apps.account",
      //     path: "",
      //     title: "demo",
      //     translateKey: "nav.Titles.account",
      //     icon: "account",
      //     type: NAV_ITEM_TYPE_COLLAPSE,
      //     authority: [BASIC,PREMIUM],
      //     subMenu: [
      //       // 	{
      //       // 		key: 'appsAccount.settings',
      //       // 		path: `${APP_PREFIX_PATH}/account/settings/profile`,
      //       // 		title: 'Settings',
      //       // 		translateKey: 'nav.appsAccount.settings',
      //       // 		icon: '',
      //       // 		type: NAV_ITEM_TYPE_ITEM,
      //       // 		authority: [BASIC,PREMIUM],
      //       // 		subMenu: []
      //       // 	},
      //       // 	{
      //       // 		key: 'appsAccount.invoice',
      //       // 		path: `${APP_PREFIX_PATH}/account/invoice/36223`,
      //       // 		title: 'Invoice',
      //       // 		translateKey: 'nav.appsAccount.invoice',
      //       // 		icon: '',
      //       // 		type: NAV_ITEM_TYPE_ITEM,
      //       // 		authority: [BASIC,PREMIUM],
      //       // 		subMenu: []
      //       // 	},
      //       // 	{
      //       // 		key: 'appsAccount.activityLog',
      //       // 		path: `${APP_PREFIX_PATH}/account/activity-log`,
      //       // 		title: 'Activity Log',
      //       // 		translateKey: 'nav.appsAccount.activityLog',
      //       // 		icon: '',
      //       // 		type: NAV_ITEM_TYPE_ITEM,
      //       // 		authority: [BASIC,PREMIUM],
      //       // 		subMenu: []
      //       // 	},
      //       // 	{
      //       // 		key: 'appsAccount.kycForm',
      //       // 		path: `${APP_PREFIX_PATH}/account/kyc-form`,
      //       // 		title: 'KYC Form',
      //       // 		translateKey: 'nav.appsAccount.kycForm',
      //       // 		icon: '',
      //       // 		type: NAV_ITEM_TYPE_ITEM,
      //       // 		authority: [BASIC,PREMIUM],
      //       // 		subMenu: []
      //       // 	},
      //     ],
      //   },
    ],
  },
];

export default appsNavigationConfig;
