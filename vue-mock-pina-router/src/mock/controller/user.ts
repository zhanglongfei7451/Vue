import { MockMethod } from "vite-plugin-mock";
import { resultSuccess, resultError } from "../utils";
import { userData, roleData } from "../constant";

export default [
    {
        url: "/login",
        timeout: 1000,
        method: "post",
        response: (request) => {
            const { username, password } = request.body;
            const userItem = userData.find((item) => item.username === username);
            if (!userItem) {
                return resultError("该用户不存在");
            }
            return resultSuccess({
                token: userItem.role + "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-.123456789"
            });
        }
    },
    {
        url: "/getUserInfo",
        timeout: 1000,
        method: "get",
        response: (request) => {
            const { authorization } = request.headers as any;
            if (!authorization) {
                return resultError("获取用户信息失败");
            }
            const userItem = userData.find((item) => authorization.includes(item.role));
            if (!userItem) {
                return resultError("获取用户信息失败：未找到该用户");
            }
            const roleIds = roleData.find((item) => item.role === userItem.role)?.menuIds;
            return resultSuccess({
                ...userItem,
                roleIds
            });
        }
    }
] as MockMethod[];
