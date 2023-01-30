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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M17.15 14.32L14.72 11.9L14 9H15.5L16.24 12L17 9H18.5L19.24 12L20 9H21.5L20 15H18.5L17.74 11.96L17.15 14.32M1.39 4.22L2.81 2.81L21.19 21.2L19.78 22.61L10.67 13.5H10.63L10.25 15H8.75L9.43 12.26L8 10.83V11.5C8 12.1 7.6 12.6 7.1 12.9L8 15H6.5L5.6 13H4.5V15H3V9H6.17L1.39 4.22M6.5 11.5V10.5H4.5V11.5H6.5Z" fill="{color}"/></svg>