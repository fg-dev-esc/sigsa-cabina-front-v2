import pjson from "../../package.json";

export const ver = pjson.version;
export const nameProject = pjson.name;

export const { ambiente } = window["runConfig"];
export const { URL_BASE } = window["runConfig"];

export const URL_LOGIN = `${URL_BASE}/api/auth/login`;
export const URL_BASE_ALLOWEDBROWSER = `${URL_BASE}/api/AllowedBrowser`;
export const URL_BASE_VER = `${URL_BASE}/api/Ver`;