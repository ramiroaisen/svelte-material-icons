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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M18 8H17V6C17 3.2 14.8 1 12 1S7 3.2 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8M9 6C9 4.3 10.3 3 12 3S15 4.3 15 6V8H9V6M9.5 11C10.3 11 11 11.7 11 12.5S10.3 14 9.5 14 8 13.3 8 12.5 8.7 11 9.5 11M14.5 19C13.7 19 13 18.3 13 17.5S13.7 16 14.5 16 16 16.7 16 17.5 15.3 19 14.5 19M9.2 19.2L7.8 17.8L14.9 10.7L16.3 12.1L9.2 19.2Z" fill="{color}"/></svg>