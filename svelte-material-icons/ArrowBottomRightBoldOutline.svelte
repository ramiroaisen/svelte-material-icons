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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M9.88,15.54L4.22,9.88L9.88,4.22L15.54,9.88L19.78,5.64V19.78H5.64L9.88,15.54M17.66,10.59L15.54,12.71L9.88,7.05L7.05,9.88L12.71,15.54L10.59,17.66H17.66V10.59Z" fill="{color}"/></svg>