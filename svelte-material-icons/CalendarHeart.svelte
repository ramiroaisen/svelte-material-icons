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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M19 19V8H5V19H19M16 1H18V3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3H6V1H8V3H16V1M12 17.17L11.42 16.64C9.36 14.77 8 13.54 8 12.03C8 10.8 8.97 9.83 10.2 9.83C10.9 9.83 11.56 10.15 12 10.66C12.44 10.15 13.1 9.83 13.8 9.83C15.03 9.83 16 10.8 16 12.03C16 13.54 14.64 14.77 12.58 16.64L12 17.17Z" fill="{color}"/></svg>