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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M10 2H14C15.11 2 16 2.9 16 4V6H20C21.11 6 22 6.9 22 8V13.53C21.42 13 20.75 12.6 20 12.34V8H4V19H12.08C12.2 19.72 12.45 20.39 12.8 21H4C2.9 21 2 20.11 2 19V8C2 6.9 2.9 6 4 6H8V4C8 2.9 8.9 2 10 2M14 6V4H10V6H14M17.5 19H19V15H21V19H22.5L20 22L17.5 19M17 17V21H15V17H13.5L16 14L18.5 17H17Z" fill="{color}"/></svg>