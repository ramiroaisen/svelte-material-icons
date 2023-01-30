import { SvelteComponentTyped } from "svelte";

export default class Icon extends SvelteComponentTyped<{
  size?: string | number
  width?: string | number
  height?: string | number
  color?: string
  viewBox?: string
  ariaHidden?: boolean
  title?: string | null
  desc?: string | null
}> {}