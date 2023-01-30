<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = void 0;
  export let ariaHidden = void 0;
  export let title = void 0;
  export let desc = void 0;

  let className = void 0;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M2.65 3C2.3 3 2 3.3 2 3.65C2 3.69 2 3.73 2 3.77L4.73 20.27C4.8 20.69 5.16 21 5.58 21H18.63C18.94 21 19.22 20.78 19.27 20.46L22 3.77C22.05 3.42 21.81 3.09 21.46 3.04C21.43 3.03 21.39 3.03 21.35 3.03L2.65 3M14.1 14.95H9.94L8.81 9.07H15.11L14.1 14.95Z" fill="{color}"/></svg>