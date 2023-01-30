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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M19 13C19.7 13 20.37 13.13 21 13.35V12L20 7H4L3 12V14H4V20H13.09C13.04 19.67 13 19.34 13 19C13 17.77 13.37 16.64 14 15.69V14H15.69C16.64 13.37 17.77 13 19 13M12 18H6V14H12V18M5.04 12L5.64 9H18.36L18.96 12H5.04M20 6H4V4H20V6M22.5 17.25L17.75 22L15 19L16.16 17.84L17.75 19.43L21.34 15.84L22.5 17.25" fill="{color}"/></svg>