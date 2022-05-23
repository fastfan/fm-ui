/*
 * @Author: fastfan
 * @Date: 2022-05-23 19:57:58
 * @LastEditors: fastfan
 * @LastEditTime: 2022-05-23 20:11:28
 * @Description: your description
 */
import { FmUIComponent, FmUIComponentSize } from './component'

/** Button type */
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'

/** Button Component */
export declare class VsButton extends FmUIComponent {
    /** Button size */
    size: FmUIComponentSize

    /** Button type */
    type: ButtonType

    /** Determine whether it's a plain button */
    plain: boolean

    /** Determine whether it's a round button */
    round: boolean

    /** Determine whether it's loading */
    circle: boolean

    /** Disable the button */
    disabled: boolean

    /** Button icon, accepts an icon name of Element icon component */
    icon: string
}