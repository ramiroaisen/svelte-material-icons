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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M15 11.8L10.2 7H15V11.8M16 6V2C16 1.45 15.55 1 15 1H8C7.45 1 7 1.45 7 2V3.8L9.2 6H16M2.39 1.73L1.11 3L8 9.89V17H15.11L20.84 22.73L22.11 21.46L2.39 1.73M7 22C7 22.55 7.45 23 8 23H15C15.55 23 16 22.55 16 22V18H7V22Z" fill="{color}"/></svg>