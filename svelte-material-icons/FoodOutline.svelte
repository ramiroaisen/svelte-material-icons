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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M1 22C1 22.54 1.45 23 2 23H15C15.56 23 16 22.54 16 22V21H1V22M8.5 9C4.75 9 1 11 1 15H16C16 11 12.25 9 8.5 9M3.62 13C4.73 11.45 7.09 11 8.5 11S12.27 11.45 13.38 13H3.62M1 17H16V19H1V17M18 5V1H16V5H11L11.23 7H20.79L19.39 21H18V23H19.72C20.56 23 21.25 22.35 21.35 21.53L23 5H18Z" fill="{color}"/></svg>