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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M16.75 22.16L14 19.16L15.16 18L16.75 19.59L20.34 16L21.5 17.41L16.75 22.16M18 2C19.1 2 20 2.9 20 4V13.34C19.37 13.12 18.7 13 18 13V4H13V12L10.5 9.75L8 12V4H6V20H12.08C12.2 20.72 12.45 21.39 12.8 22H6C4.9 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2H18Z" fill="{color}"/></svg>