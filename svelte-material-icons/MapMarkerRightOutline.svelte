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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M9 6.5C10.38 6.5 11.5 7.62 11.5 9S10.38 11.5 9 11.5 6.5 10.38 6.5 9 7.62 6.5 9 6.5M9 2C12.87 2 16 5.13 16 9C16 14.25 9 22 9 22S2 14.25 2 9C2 5.13 5.13 2 9 2M9 4C6.24 4 4 6.24 4 9C4 10 4 12 9 18.71C14 12 14 10 14 9C14 6.24 11.76 4 9 4M18 17L23 12L18 7V17Z" fill="{color}"/></svg>