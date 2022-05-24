/*
 * @Author: fastfan
 * @Date: 2022-05-23 19:59:18
 * @LastEditors: fastfan
 * @LastEditTime: 2022-05-24 18:31:32
 * @Description: your description
 */
import Vue from 'vue'
// import { FmCommonDetail } from './common-detail';
// import { FmKeepAlive } from './keep-alive';
export interface InstallationOptions {
    router: any,
}
/** The version of fm-ui */
export const version: string

export function install(vue: typeof Vue, options: InstallationOptions): void

// export class Button extends FmCommonDetail { }

// export class KeepAlive extends FmKeepAlive { }