import type { SvelteComponentTyped } from "svelte";

declare module "svelte-material-icons/*.svelte" {
  type Props = {
    size?: string | number,
    width?: string | number,
    height?: string | number,
    color?: string
    viewBox?: string
  }

  export default class Icon extends SvelteComponentTyped<Props> {}
}