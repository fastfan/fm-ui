/*
 * @Author: fastfan
 * @Date: 2022-05-23 19:58:24
 * @LastEditors: fastfan
 * @LastEditTime: 2022-05-23 20:10:53
 * @Description: your description
 */
import Vue from 'vue'

export declare class FmUIComponent extends Vue {
    static install(vue: typeof Vue): void
}

export type FmUIComponentSize = 'large' | 'medium' | 'small' | 'mini'

export type FmUIHorizontalAlignment = 'left' | 'center' | 'right'