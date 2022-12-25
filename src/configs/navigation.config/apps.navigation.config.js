import { APP_PREFIX_PATH } from "constants/route.constant";
import {
  NAV_ITEM_TYPE_TITLE,
  NAV_ITEM_TYPE_COLLAPSE,
  NAV_ITEM_TYPE_ITEM,
} from "constants/navigation.constant";
import { ADMIN, USER } from "constants/roles.constant";

const appsNavigationConfig = [
  {
    key: "services",
    path: "",
    title: "SERVICES",
    translateKey: "services",
    icon: "apps",
    type: NAV_ITEM_TYPE_TITLE,
    authority: [ADMIN, USER],
    subMenu: [
      {
        key: "services.socialMedia",
        path: `/services/social-media`,
        title: "Social Media Tools",
        translateKey: "nav.socialMedia.socialMediaServ",
        icon: "project",
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        subMenu: [
          // {
          // 	key: 'appsProject.dashboard',
          // 	path: `services/social-media/`,
          // 	title: 'Social Media Services',
          // 	translateKey: 'nav.services',
          // 	icon: '',
          // 	type: NAV_ITEM_TYPE_ITEM,
          // 	authority: [ADMIN, USER],
          // 	subMenu: []
          // },
          // {
          // 	key: 'appsProject.dashboard1',
          // 	path: `services/social-media/27`,
          // 	title: 'Image Captions',
          // 	translateKey: 'nav.services.captions',
          // 	icon: '',
          // 	type: NAV_ITEM_TYPE_ITEM,
          // 	authority: [ADMIN, USER],
          // 	subMenu: []
          // },
          // {
          // 	key: 'personal.Opinion',
          // 	path: `services/social-media/28`,
          // 	title: 'Personal Opinion',
          // 	translateKey: 'nav.services.personal',
          // 	icon: '',
          // 	type: NAV_ITEM_TYPE_ITEM,
          // 	authority: [ADMIN, USER],
          // 	subMenu: []
          // },
          // {
          // 	key: 'services.Description',
          // 	path: `services/social-media/29`,
          // 	title: 'Video Description',
          // 	translateKey: 'nav.services.description',
          // 	icon: '',
          // 	type: NAV_ITEM_TYPE_ITEM,
          // 	authority: [ADMIN, USER],
          // 	subMenu: []
          // },
          // {
          // 	key: 'services.video',
          // 	path: `services/social-media/30`,
          // 	title: 'Video Ideas',
          // 	translateKey: 'nav.services.video',
          // 	icon: '',
          // 	type: NAV_ITEM_TYPE_ITEM,
          // 	authority: [ADMIN, USER],
          // 	subMenu: []
          // },
          // {
          // 	key: 'services.Post',
          // 	path: `services/social-media/31`,
          // 	title: 'Social Media Post Ideas',
          // 	translateKey: 'nav.services.Post',
          // 	icon: '',
          // 	type: NAV_ITEM_TYPE_ITEM,
          // 	authority: [ADMIN, USER],
          // 	subMenu: []
          // },
          // {
          // 	key: 'services.Video',
          // 	path: `services/social-media/32`,
          // 	title: 'Video Titles',
          // 	translateKey: 'nav.services.Video',
          // 	icon: '',
          // 	type: NAV_ITEM_TYPE_ITEM,
          // 	authority: [ADMIN, USER],
          // 	subMenu: []
          // }
        ],
      },
      {
        key: "apps.sales",
        path: "",
        title: "Marketing Tools",
        translateKey: "nav.Social.sales",
        icon: "sales",
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        subMenu: [
          // 	{
          // 		key: 'appsSales.dashboard',
          // 		path: `${APP_PREFIX_PATH}/sales/dashboard`,
          // 		title: 'Dashboard',
          // 		translateKey: 'nav.appsSales.dashboard',
          // 		icon: '',
          // 		type: NAV_ITEM_TYPE_ITEM,
          // 		authority: [ADMIN, USER],
          // 		subMenu: []
          // 	},
          // 	{
          // 		key: 'appsSales.productList',
          // 		path: `${APP_PREFIX_PATH}/sales/product-list`,
          // 		title: 'Product List',
          // 		translateKey: 'nav.appsSales.productList',
          // 		icon: '',
          // 		type: NAV_ITEM_TYPE_ITEM,
          // 		authority: [ADMIN, USER],
          // 		subMenu: []
          // 	},
          // 	{
          // 		key: 'appsSales.productEdit',
          // 		path: `${APP_PREFIX_PATH}/sales/product-edit/12`,
          // 		title: 'Product Edit',
          // 		translateKey: 'nav.appsSales.productEdit',
          // 		icon: '',
          // 		type: NAV_ITEM_TYPE_ITEM,
          // 		authority: [ADMIN, USER],
          // 		subMenu: []
          // 	},
          // 	{
          // 		key: 'appsSales.productNew',
          // 		path: `${APP_PREFIX_PATH}/sales/product-new`,
          // 		title: 'New Product',
          // 		translateKey: 'nav.appsSales.productNew',
          // 		icon: '',
          // 		type: NAV_ITEM_TYPE_ITEM,
          // 		authority: [ADMIN, USER],
          // 		subMenu: []
          // 	},
          // 	{
          // 		key: 'appsSales.orderList',
          // 		path: `${APP_PREFIX_PATH}/sales/order-list`,
          // 		title: 'Order List',
          // 		translateKey: 'nav.appsSales.orderList',
          // 		icon: '',
          // 		type: NAV_ITEM_TYPE_ITEM,
          // 		authority: [ADMIN, USER],
          // 		subMenu: []
          // 	},
          // 	{
          // 		key: 'appsSales.orderDetails',
          // 		path: `${APP_PREFIX_PATH}/sales/order-details/95954`,
          // 		title: 'Order Details',
          // 		translateKey: 'nav.appsSales.orderDetails',
          // 		icon: '',
          // 		type: NAV_ITEM_TYPE_ITEM,
          // 		authority: [ADMIN, USER],
          // 		subMenu: []
          // 	},
        ],
      },
      {
        key: "services.business",
        path: "/services/business",
        title: "Business Tools",
        translateKey: "nav.business",
        icon: "crm",
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        subMenu: [],
      },
      {
        key: "services.writingTools",
        path: "/services/writing-tools",
        title: "Writing Tools",
        translateKey: "nav.writingTools",
        icon: "guide",
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        subMenu: [],
      },
      {
        key: "services.miscellaneous",
        path: `/services/miscellaneous`,
        title: "Miscellaneous",
        translateKey: "nav.miscellaneous",
        icon: "apps",
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        subMenu: [
          // {
          // 	key: 'miscellaneous.dashboard',
          // 	path: `services/miscellaneous`,
          // 	title: 'All Miscellaneous Services',
          // 	translateKey: 'nav.miscellaneous.all',
          // 	icon: '',
          // 	type: NAV_ITEM_TYPE_ITEM,
          // 	authority: [ADMIN, USER],
          // 	subMenu: []
          // },
          // {
          // 	key: 'miscellaneous.Latter',
          // 	path: `services/miscellaneous/cover-latter`,
          // 	title: 'Cover Latter',
          // 	translateKey: 'nav.miscellaneous.Cover',
          // 	icon: '',
          // 	type: NAV_ITEM_TYPE_ITEM,
          // 	authority: [ADMIN, USER],
          // 	subMenu: []
          // },
          // {
          // 	key: 'miscellaneous.fictional',
          // 	path: `services/miscellaneous/fictional-story`,
          // 	title: 'Fictional Story Ideas',
          // 	translateKey: 'nav.miscellaneous.fictional',
          // 	icon: '',
          // 	type: NAV_ITEM_TYPE_ITEM,
          // 	authority: [ADMIN, USER],
          // 	subMenu: []
          // },
          // {
          // 	key: 'miscellaneous.recipe',
          // 	path: `services/miscellaneous/food-recipe`,
          // 	title: 'Food Recipes',
          // 	translateKey: 'nav.miscellaneous.recipe',
          // 	icon: '',
          // 	type: NAV_ITEM_TYPE_ITEM,
          // 	authority: [ADMIN, USER],
          // 	subMenu: []
          // },
          // {
          // 	key: 'miscellaneous.quora',
          // 	path: `services/miscellaneous/quora-answers`,
          // 	title: 'Quora Answers',
          // 	translateKey: 'nav.miscellaneous.quora',
          // 	icon: '',
          // 	type: NAV_ITEM_TYPE_ITEM,
          // 	authority: [ADMIN, USER],
          // 	subMenu: []
          // },
          // {
          // 	key: 'miscellaneous.greetings',
          // 	path: `services/miscellaneous/greetings`,
          // 	title: 'Greetings',
          // 	translateKey: 'nav.miscellaneous.greetings',
          // 	icon: '',
          // 	type: NAV_ITEM_TYPE_ITEM,
          // 	authority: [ADMIN, USER],
          // 	subMenu: []
          // },
          // {
          // 	key: 'miscellaneous.song',
          // 	path: `services/miscellaneous/song-lyrics`,
          // 	title: 'Song Lyrics',
          // 	translateKey: 'nav.miscellaneous.song',
          // 	icon: '',
          // 	type: NAV_ITEM_TYPE_ITEM,
          // 	authority: [ADMIN, USER],
          // 	subMenu: []
          // },
          // {
          // 	key: 'miscellaneous.Job',
          // 	path: `services/miscellaneous/job-description`,
          // 	title: 'Job Descriptions',
          // 	translateKey: 'nav.miscellaneous.Job',
          // 	icon: '',
          // 	type: NAV_ITEM_TYPE_ITEM,
          // 	authority: [ADMIN, USER],
          // 	subMenu: []
          // },
          // {
          // 	key: 'miscellaneous.pdDes',
          // 	path: `services/miscellaneous/pd-reviews`,
          // 	title: 'Product Reviews',
          // 	translateKey: 'nav.miscellaneous.pdDes',
          // 	icon: '',
          // 	type: NAV_ITEM_TYPE_ITEM,
          // 	authority: [ADMIN, USER],
          // 	subMenu: []
          // },
          // {
          // 	key: 'miscellaneous.linkedinbio',
          // 	path: `services/miscellaneous/linkedin-bio`,
          // 	title: 'Personal Linkedin Bio',
          // 	translateKey: 'nav.miscellaneous.linkedinbio',
          // 	icon: '',
          // 	type: NAV_ITEM_TYPE_ITEM,
          // 	authority: [ADMIN, USER],
          // 	subMenu: []
          // }
        ],
      },
      {
        key: "services.allServices",
        path: "/services/all-services",
        title: "All Our Services",
        translateKey: "nav.allServices",
        icon: "apps",
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        subMenu: [],
      },
      //   {
      //     key: "apps.crypto",
      //     path: "",
      //     title: "demo",
      //     translateKey: "nav.Descriptions.crypto",
      //     icon: "crypto",
      //     type: NAV_ITEM_TYPE_COLLAPSE,
      //     authority: [ADMIN, USER],
      //     subMenu: [
      //       // 	{
      //       // 		key: 'appsCrypto.dashboard',
      //       // 		path: `${APP_PREFIX_PATH}/crypto/dashboard`,
      //       // 		title: 'Dashboard',
      //       // 		translateKey: 'nav.appsCrypto.dashboard',
      //       // 		icon: '',
      //       // 		type: NAV_ITEM_TYPE_ITEM,
      //       // 		authority: [ADMIN, USER],
      //       // 		subMenu: []
      //       // 	},
      //       // 	{
      //       // 		key: 'appsCrypto.portfolio',
      //       // 		path: `${APP_PREFIX_PATH}/crypto/portfolio`,
      //       // 		title: 'Portfolio',
      //       // 		translateKey: 'nav.appsCrypto.portfolio',
      //       // 		icon: '',
      //       // 		type: NAV_ITEM_TYPE_ITEM,
      //       // 		authority: [ADMIN, USER],
      //       // 		subMenu: []
      //       // 	},
      //       // 	{
      //       // 		key: 'appsCrypto.market',
      //       // 		path: `${APP_PREFIX_PATH}/crypto/market`,
      //       // 		title: 'Market',
      //       // 		translateKey: 'nav.appsCrypto.market',
      //       // 		icon: '',
      //       // 		type: NAV_ITEM_TYPE_ITEM,
      //       // 		authority: [ADMIN, USER],
      //       // 		subMenu: []
      //       // 	},
      //       // 	{
      //       // 		key: 'appsCrypto.wallets',
      //       // 		path: `${APP_PREFIX_PATH}/crypto/wallets`,
      //       // 		title: 'Wallets',
      //       // 		translateKey: 'nav.appsCrypto.wallets',
      //       // 		icon: '',
      //       // 		type: NAV_ITEM_TYPE_ITEM,
      //       // 		authority: [ADMIN, USER],
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
      //     authority: [ADMIN, USER],
      //     subMenu: [
      //       // 	{
      //       // 		key: 'appsknowledgeBase.helpCenter',
      //       // 		path: `${APP_PREFIX_PATH}/knowledge-base/help-center`,
      //       // 		title: 'Help Center',
      //       // 		translateKey: 'nav.appsknowledgeBase.helpCenter',
      //       // 		icon: '',
      //       // 		type: NAV_ITEM_TYPE_ITEM,
      //       // 		authority: [ADMIN, USER],
      //       // 		subMenu: []
      //       // 	},
      //       // 	{
      //       // 		key: 'appsknowledgeBase.article',
      //       // 		path: `${APP_PREFIX_PATH}/knowledge-base/article?id=rZjCbSyae5`,
      //       // 		title: 'Article',
      //       // 		translateKey: 'nav.appsknowledgeBase.article',
      //       // 		icon: '',
      //       // 		type: NAV_ITEM_TYPE_ITEM,
      //       // 		authority: [ADMIN, USER],
      //       // 		subMenu: []
      //       // 	},
      //       // 	{
      //       // 		key: 'appsknowledgeBase.manageArticles',
      //       // 		path: `${APP_PREFIX_PATH}/knowledge-base/manage-articles`,
      //       // 		title: 'Manage Articles',
      //       // 		translateKey: 'nav.appsknowledgeBase.manageArticles',
      //       // 		icon: '',
      //       // 		type: NAV_ITEM_TYPE_ITEM,
      //       // 		authority: [ADMIN, USER],
      //       // 		subMenu: []
      //       // 	},
      //       // 	{
      //       // 		key: 'appsknowledgeBase.editArticle',
      //       // 		path: `${APP_PREFIX_PATH}/knowledge-base/edit-article?id=rZjCbSyae5&categoryLabel=Survey&categoryValue=survey`,
      //       // 		title: 'Edit Article',
      //       // 		translateKey: 'nav.appsknowledgeBase.editArticle',
      //       // 		icon: '',
      //       // 		type: NAV_ITEM_TYPE_ITEM,
      //       // 		authority: [ADMIN, USER],
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
      //     authority: [ADMIN, USER],
      //     subMenu: [
      //       // 	{
      //       // 		key: 'appsAccount.settings',
      //       // 		path: `${APP_PREFIX_PATH}/account/settings/profile`,
      //       // 		title: 'Settings',
      //       // 		translateKey: 'nav.appsAccount.settings',
      //       // 		icon: '',
      //       // 		type: NAV_ITEM_TYPE_ITEM,
      //       // 		authority: [ADMIN, USER],
      //       // 		subMenu: []
      //       // 	},
      //       // 	{
      //       // 		key: 'appsAccount.invoice',
      //       // 		path: `${APP_PREFIX_PATH}/account/invoice/36223`,
      //       // 		title: 'Invoice',
      //       // 		translateKey: 'nav.appsAccount.invoice',
      //       // 		icon: '',
      //       // 		type: NAV_ITEM_TYPE_ITEM,
      //       // 		authority: [ADMIN, USER],
      //       // 		subMenu: []
      //       // 	},
      //       // 	{
      //       // 		key: 'appsAccount.activityLog',
      //       // 		path: `${APP_PREFIX_PATH}/account/activity-log`,
      //       // 		title: 'Activity Log',
      //       // 		translateKey: 'nav.appsAccount.activityLog',
      //       // 		icon: '',
      //       // 		type: NAV_ITEM_TYPE_ITEM,
      //       // 		authority: [ADMIN, USER],
      //       // 		subMenu: []
      //       // 	},
      //       // 	{
      //       // 		key: 'appsAccount.kycForm',
      //       // 		path: `${APP_PREFIX_PATH}/account/kyc-form`,
      //       // 		title: 'KYC Form',
      //       // 		translateKey: 'nav.appsAccount.kycForm',
      //       // 		icon: '',
      //       // 		type: NAV_ITEM_TYPE_ITEM,
      //       // 		authority: [ADMIN, USER],
      //       // 		subMenu: []
      //       // 	},
      //     ],
      //   },
    ],
  },
];

export default appsNavigationConfig;
