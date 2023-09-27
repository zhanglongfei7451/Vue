import type { RouteRecordRaw, RouteMeta } from "vue-router";

export type Component<T = any> = ReturnType<typeof defineComponent> | (() => Promise<typeof import("*.vue")>) | (() => Promise<T>);

export interface MetaType extends RouteMeta {
    title: string; // 路由title 
    keepAlive?: boolean;
    hidden?: boolean;
    permission?: string;
    affix?: boolean; // 是否固定标签
    icon?: string; // 图标，也是菜单图标
    hideChildren?: boolean;
    sort?: number;
}

// Omit 删除指定类型的key返回删除后的接口类型
export interface AppRouteType extends Omit<RouteRecordRaw, "props"> {
    name: string;
    component?: Component | string;
    components?: Component;//一个页面或者视图多个路由会使用
    children?: AppRouteType[];
    fullPath?: string;
    meta?: MetaType;
    redirect?: string;
}
