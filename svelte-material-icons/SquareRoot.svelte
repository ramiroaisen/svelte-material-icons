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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M11.76,16.83L14.59,14L11.76,11.17L13.17,9.76L16,12.59L18.83,9.76L20.24,11.17L17.41,14L20.24,16.83L18.83,18.24L16,15.41L13.17,18.24L11.76,16.83M2,11H5V11H5L7.29,16.4L10,6H22V8H11.55L8.68,19H6.22L3.68,13H2V11Z" fill="{color}"/></svg>