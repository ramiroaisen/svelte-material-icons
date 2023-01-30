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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M13,16.12C16.47,15.71 19.17,12.76 19.17,9.17C19.17,5.3 16.04,2.17 12.17,2.17A7,7 0 0,0 5.17,9.17C5.17,12.64 7.69,15.5 11,16.06V20H5V22H19V20H13V16.12Z" fill="{color}"/></svg>