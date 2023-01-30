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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M21.41 11.58L12.41 2.58C12.04 2.21 11.53 2 11 2H4C2.9 2 2 2.9 2 4V11C2 11.53 2.21 12.04 2.59 12.41L3 12.81C3.9 12.27 4.94 12 6 12C9.31 12 12 14.69 12 18C12 19.06 11.72 20.09 11.18 21L11.58 21.4C11.95 21.78 12.47 22 13 22S14.04 21.79 14.41 21.41L21.41 14.41C21.79 14.04 22 13.53 22 13S21.79 11.96 21.41 11.58M5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7M6 17H2V19H6V21L9 18L6 15V17Z" fill="{color}"/></svg>