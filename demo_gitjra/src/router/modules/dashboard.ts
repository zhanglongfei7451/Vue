import type { AppRouteType } from "@/router/types";

const dashboard: AppRouteType[] = [
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("@/layouts/index.vue"),
        redirect: "/dashboard/prodetail",
        meta: {
            title: "首页",
            icon: "svg-dashboard",
            sort: 1,
            permission: "admin_dashboard"
        },
        children: [
            {
                path: "prodetail",
                name: "ProDetail",
                component: () => import("@/views/dashboard/analysis/index.vue"),
                meta: {
                    title: "项目详情",
                    sort: 1,
                    permission: "admin_dashboard_analysis",
                    icon: "",
                    affix: true
                }
            },
            {
                path: "analysis",
                name: "Analysis",
                component: () => import("@/views/dashboard/analysis/index.vue"),
                meta: {
                    title: "gitlab",
                    sort: 1,
                    permission: "admin_dashboard_analysis",
                    icon: "",
                    affix: true
                }
            },
            {
                path: "workbench",
                name: "Workbench",
                component: () => import("@/views/dashboard/workbench/index.vue"),
                meta: {
                    title: "jira",
                    sort: 2,
                    permission: "admin_dashboard_workbench",
                    icon: ""
                }
            }
        ]
    }
];

export default dashboard;
